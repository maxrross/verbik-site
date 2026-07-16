"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppConfig, SiteUiCopy } from "../config/apps";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { AnimatedIcon } from "./AnimatedIcon";

type FloatSide = "left" | "right";
type FloatSlot = {
    side: FloatSide;
    top: number;
    outside: number;
    rotation: number;
    centerY?: boolean;
};

function interpolate(template: string, values: Record<string, string>): string {
    return template.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (_match, token: string) => values[token] ?? "");
}

export function Hero({
    app,
    copy,
    downloadLabel,
}: {
    app: AppConfig;
    copy: SiteUiCopy["hero"];
    downloadLabel: string;
}) {
    const useDeviceFrames = true;
    const hasExternalStoreUrl = app.appStoreUrl.startsWith("http");
    const hideHeroScreensOnSmallest = "max-[380px]:hidden";
    const heroFramedImages = {
        center: "/apps/verbik/hero-center-framed.png",
        sides: ["/apps/verbik/hero-side-left-angled.png", "/apps/verbik/hero-side-right-angled.png"] as [string, string],
    };
    const heroPrimaryImage = heroFramedImages.center;
    const heroSecondaryImages = heroFramedImages.sides;
    const appIconPool = (app.heroFloatingIcons?.length
        ? app.heroFloatingIcons
        : [...app.features.map((feature) => feature.icon), app.iconSymbol]
    ).filter(Boolean);
    const uniqueIcons = Array.from(new Set(appIconPool));
    const floatingIcons = (uniqueIcons.length ? uniqueIcons : ["sparkles"]).slice(0, 6);
    const floatingSizes: Array<"md" | "lg"> = ["lg", "md", "md", "md", "lg", "md"];
    const slugHash = app.slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const jitter = (index: number, salt: number, amplitude: number) => {
        const raw = (slugHash + index * 37 + salt * 53) % 11; // 0..10
        return (raw - 5) * amplitude;
    };

    const baseFloatLayout: FloatSlot[] = [
        { side: "left", top: 17, outside: 76, rotation: -11 },
        { side: "left", top: 50, outside: 68, rotation: 8, centerY: true },
        { side: "left", top: 84, outside: 78, rotation: 11 },
        { side: "right", top: 21, outside: 74, rotation: -10 },
        { side: "right", top: 52, outside: 66, rotation: -6, centerY: true },
        { side: "right", top: 86, outside: 80, rotation: 10 },
    ];

    const floatLayout: FloatSlot[] = baseFloatLayout.map((slot, index) => ({
        ...slot,
        top: Math.max(slot.centerY ? 46 : 12, Math.min(slot.centerY ? 56 : 90, slot.top + jitter(index, 2, 1.8))),
        outside: Math.max(62, Math.min(88, slot.outside + jitter(index, 1, 4.4))),
        rotation: slot.rotation + jitter(index, 3, 1.1),
    }));
    const appIconAlt = interpolate(copy.appIconAlt, { appName: app.appName });
    const heroPreviewAlt = interpolate(copy.heroPreviewAlt, { appName: app.appName });
    const sidePreviewAlt = (index: number) =>
        interpolate(copy.sidePreviewAlt, { appName: app.appName, index: String(index + 1) });
    const panelPreviewAlt = (index: number) =>
        interpolate(copy.panelPreviewAlt, { appName: app.appName, index: String(index + 1) });
    const sidePanelClass = (index: number) =>
        `hidden sm:block absolute w-[36%] rounded-2xl bg-white/70 backdrop-blur p-3 shadow-[0_20px_34px_rgba(0,0,0,0.22)] ${index === 0 ? "left-0 top-10" : "right-0 bottom-8"}`;
    const mainPanelClass =
        "relative w-[92%] sm:w-[66%] rounded-2xl bg-white/78 backdrop-blur-xl p-3 sm:p-3.5 shadow-[0_24px_42px_rgba(0,0,0,0.28)]";

    return (
        <section className="container flex flex-col gap-14 sm:gap-20 sm:pt-4 pb-16 sm:pb-20 md:pb-24">
            <motion.div className={`relative ${useDeviceFrames ? "h-[148px]" : "h-[300px]"} sm:h-[530px] lg:h-[590px] mb-2 sm:mb-5 sm:px-10`}>
                <div className="hidden lg:block absolute inset-x-0 inset-y-12 pointer-events-none z-30">
                    {floatingIcons.map((icon, index) => (
                        (() => {
                            const slot = floatLayout[index];
                            const rotateSwing = index % 2 === 0 ? -3 : 3;
                            const positionStyle = slot
                                ? ({
                                    [slot.side]: `calc((100% - min(980px, 100%)) / 2 - ${slot.outside}px)`,
                                    top: `${slot.top}%`,
                                } as React.CSSProperties)
                                : undefined;

                            return (
                                <motion.div
                                    key={`${icon}-${index}`}
                                    className={`absolute z-30 ${slot?.centerY ? "-translate-y-1/2" : ""}`}
                                    style={positionStyle}
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [slot?.rotation ?? 0, (slot?.rotation ?? 0) + rotateSwing, slot?.rotation ?? 0],
                                    }}
                                    transition={{ duration: 4.2 + index + (slugHash % 3) * 0.15, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <AnimatedIcon iconSymbol={icon} color={app.accentColor} size={floatingSizes[index] || "md"} variant="app-icon" />
                                </motion.div>
                            );
                        })()
                    ))}
                </div>

                {useDeviceFrames ? (
                    <div className="absolute inset-x-0 top-4 bottom-0 z-10 sm:hidden">
                        <div
                            className="relative mx-auto h-full max-w-[980px] rounded-[1.75rem] overflow-hidden shadow-[0_20px_48px_rgba(12,34,74,0.18)]"
                            style={{
                                backgroundImage: `url('${app.heroWallpaper}'), linear-gradient(135deg, ${app.accentGradient.from}, ${app.accentGradient.via || app.accentGradient.to}, ${app.accentGradient.to})`,
                                backgroundSize: "cover, cover",
                                backgroundPosition: "center, center",
                            }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-b from-white/18 via-white/8 to-white/2" />
                            <span className="absolute inset-0 shadow-outline rounded-[1.75rem] pointer-events-none" />
                        </div>
                    </div>
                ) : null}

                <div className={`absolute inset-x-0 top-6 sm:top-8 bottom-0 z-10 ${useDeviceFrames ? "hidden sm:block" : hideHeroScreensOnSmallest}`}>
                    <div
                        className="relative mx-auto h-full max-w-[980px] rounded-[1.75rem] sm:rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(12,34,74,0.22)]"
                        style={{
                            backgroundImage: `url('${app.heroWallpaper}'), linear-gradient(135deg, ${app.accentGradient.from}, ${app.accentGradient.via || app.accentGradient.to}, ${app.accentGradient.to})`,
                            backgroundSize: "cover, cover",
                            backgroundPosition: "center, center",
                        }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/15" />
                        <span className="absolute inset-0 shadow-outline rounded-[1.75rem] sm:rounded-3xl pointer-events-none" />

                        <div className="absolute inset-x-0 top-0 h-10 sm:h-11 flex items-center justify-between px-4 sm:px-5 text-white/90 drop-shadow-sm font-medium text-[11px] sm:text-xs z-20">
                            <div className="flex items-center gap-2.5">
                                <Image
                                    src={app.iconImage}
                                    alt={appIconAlt}
                                    width={18}
                                    height={18}
                                    className="rounded-[6px]"
                                />
                                <span className="tracking-wide">{app.appName}</span>
                            </div>
                        </div>
                    </div>

                    {/* Phone layout sits on top of wallpaper so shadows aren't clipped */}
                    {useDeviceFrames && (() => {
                        const sideClass = (idx: number) => idx === 0
                            ? "w-[35%] max-w-[290px] -translate-y-[44%] left-[4%]"
                            : "w-[35%] max-w-[290px] -translate-y-[44%] right-[4%]";
                        const centerClass = "relative -translate-y-4 sm:-translate-y-14 w-[62%] sm:w-[42%] sm:max-w-[330px]";
                        return (
                            <div className="absolute inset-0 z-20 flex items-center justify-center px-3 sm:px-8 md:px-12">
                                <div className="relative w-full max-w-[820px] h-full flex items-center justify-center -translate-y-4 sm:-translate-y-10">
                                    {heroSecondaryImages.map((image, index) => (
                                        <motion.div
                                            key={image}
                                            className={`hidden sm:block absolute top-1/2 ${sideClass(index)}`}
                                        >
                                            <Image
                                                src={image}
                                                alt={sidePreviewAlt(index)}
                                                width={1104}
                                                height={2400}
                                                sizes="(min-width: 640px) 35vw, 1px"
                                                className="w-full h-auto drop-shadow-[0_26px_52px_rgba(0,0,0,0.4)]"
                                            />
                                        </motion.div>
                                    ))}

                                    <motion.div className={centerClass}>
                                        <Image
                                            src={heroPrimaryImage}
                                            alt={heroPreviewAlt}
                                            width={1104}
                                            height={2400}
                                            sizes="(min-width: 640px) 42vw, 1px"
                                            className="w-full h-auto drop-shadow-[0_28px_56px_rgba(0,0,0,0.44)]"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })()}
                </div>

                {/* Non-device-frame layout stays inside the wallpaper container */}
                {!useDeviceFrames && (
                    <div className={`absolute inset-x-0 top-6 sm:top-8 bottom-0 z-10 ${hideHeroScreensOnSmallest}`}>
                        <div className="relative mx-auto h-full max-w-[980px]">
                            <div className="relative z-20 h-full w-full flex items-center justify-center px-3 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-8 sm:pb-10">
                                <div className="relative w-full max-w-[760px] h-full flex items-center justify-center">
                                    {heroSecondaryImages.map((image, index) => (
                                        <motion.div
                                            key={image}
                                            className={sidePanelClass(index)}
                                        >
                                            <Image
                                                src={image}
                                                alt={panelPreviewAlt(index)}
                                                width={1104}
                                                height={2400}
                                                sizes="(min-width: 640px) 36vw, 1px"
                                                className="w-full rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
                                            />
                                        </motion.div>
                                    ))}

                                    <motion.div className={mainPanelClass}>
                                        <Image
                                            src={heroPrimaryImage}
                                            alt={heroPreviewAlt}
                                            width={1104}
                                            height={2400}
                                            sizes="(min-width: 640px) 66vw, 1px"
                                            className="w-full h-auto rounded-xl shadow-[0_14px_26px_rgba(0,0,0,0.18)]"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <motion.div className="absolute left-1/2 -translate-x-1/2 bottom-[-44px] sm:bottom-[-84px] z-30">
                    <motion.div>
                        <Image
                            src={app.iconImage}
                            alt={appIconAlt}
                            width={178}
                            height={178}
                            sizes="(max-width: 639px) 128px, 178px"
                            priority
                            className="h-32 w-32 rounded-[22%] shadow-[0_26px_44px_rgba(0,0,0,0.25)] sm:h-[178px] sm:w-[178px]"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="relative flex flex-col items-center gap-5 sm:gap-6 text-center -mt-1 sm:-mt-2">
                <motion.small className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs" style={{ color: app.accentColor }}>
                    {copy.overviewLabel}
                </motion.small>

                <motion.h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight bg-gradient-to-b from-black to-[#444] bg-clip-text text-transparent">
                    {app.appName}
                </motion.h1>

                <motion.p className="text-[1.75rem] leading-[1.05] sm:text-5xl font-bold max-w-[18ch] lg:max-w-full text-zinc-900">
                    {app.tagline}
                </motion.p>

                <motion.p className="text-base sm:text-2xl max-w-3xl md:max-w-4xl text-zinc-700">
                    {app.description}
                </motion.p>

                <motion.div className="flex w-full flex-col items-center gap-6 sm:gap-7 pt-4 sm:pt-6 text-center">
                    <div className="flex w-full flex-col sm:w-auto sm:flex-row gap-4 sm:gap-7">
                        <a
                            href={app.appStoreUrl}
                            target={hasExternalStoreUrl ? "_blank" : undefined}
                            rel={hasExternalStoreUrl ? "noopener noreferrer" : undefined}
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 font-semibold text-base sm:text-lg bg-black text-white visited:text-white active:text-white hover:text-white active:bg-black hover:bg-[#333] border border-black/20 shadow rounded-xl transition"
                            style={{ color: "#fff" }}
                        >
                            <img src="/icons/apple-logo-white.svg" alt="" aria-hidden="true" className="relative -top-px block h-5 w-5 shrink-0 object-contain" />
                            <span className="text-white">{downloadLabel}</span>
                        </a>
                    </div>

                    <p className="max-w-[44ch] px-4 text-sm text-zinc-600 sm:px-0">
                        {app.downloadCtaNote ||
                            interpolate(copy.defaultDownloadNote, { appName: app.appName })}
                    </p>

                    <p className="flex w-full justify-center pt-1 sm:pt-2">
                        <a
                            className="relative z-10 flex w-full sm:w-auto items-center justify-between sm:justify-start sm:max-w-[620px] lg:max-w-full text-gray-700 bg-gray-50 hover:bg-white shadow-outline px-4 py-3 gap-3 rounded-2xl sm:rounded-3xl transition"
                            href="#features"
                        >
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-outline">
                                <DownloadSimple width={14} height={14} weight="bold" className="text-zinc-600" />
                            </span>
                            <span className="hidden sm:inline-block">
                                {interpolate(copy.featureLinkDesktop, { appName: app.appName })}
                            </span>
                            <span className="sm:hidden">{copy.featureLinkMobile}</span>
                            <ArrowRight width={18} height={18} className="text-gray-400 flex-shrink-0" weight="bold" />
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
