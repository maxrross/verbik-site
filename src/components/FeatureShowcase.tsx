import { AppConfig } from "../config/apps";
import Image from "next/image";

export function FeatureShowcase({ app }: { app: AppConfig }) {
    if (!app.detailFeatures?.length) {
        return null;
    }
    const useDeviceFrames = true;
    const isVerbik = true;

    return (
        <section className="container py-16 sm:py-20 md:py-24" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}>
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16">
                <small
                    className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor }}
                >
                    Deep Dive
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">Built for real-world usage</h2>
            </div>

            <div className="flex flex-col gap-16 sm:gap-20">
                {app.detailFeatures.map((feature, index) => {
                    const reverse = index % 2 === 1;
                    return (
                        <article
                            key={feature.title}
                            className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                        >
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <small
                                    className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs"
                                    style={{ color: app.accentColor }}
                                >
                                    Use Case {index + 1}
                                </small>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed">{feature.description}</p>
                            </div>

                            {useDeviceFrames ? (
                                <div className="relative flex flex-col items-center justify-center gap-4 min-h-[240px]">
                                    <div
                                        className={`relative w-full ${isVerbik ? "max-w-[520px] rounded-[2.25rem] md:rounded-[2.5rem] p-0" : "max-w-[430px] rounded-[2.25rem] md:rounded-[2.5rem] p-3.5 sm:p-4 md:p-5"} shadow-outline overflow-hidden`}
                                    >
                                        <span
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: `url('${app.heroWallpaper}'), linear-gradient(135deg, ${app.accentGradient.from}, ${app.accentGradient.via || app.accentGradient.to}, ${app.accentGradient.to})`,
                                                backgroundSize: "cover, cover",
                                                backgroundPosition: "center, center",
                                                transform: index % 2 === 1 ? "scaleX(-1)" : "none",
                                                transformOrigin: "center",
                                            }}
                                        />
                                        <span className="absolute inset-0 bg-gradient-to-b from-white/22 via-white/8 to-white/30 pointer-events-none" />
                                        <Image
                                            src={feature.imageSrc}
                                            alt={feature.imageAlt}
                                            width={1320}
                                            height={2868}
                                            sizes="(max-width: 1023px) 100vw, 520px"
                                            className={`relative z-10 block w-full h-auto ${isVerbik ? "max-w-[520px]" : "max-w-[360px]"} mx-auto ${index % 2 === 0 ? "animate-float-soft" : "animate-float-gentle"}`}
                                            style={{ filter: "drop-shadow(0 0 0.7px rgba(6,14,24,0.95)) drop-shadow(0 24px 40px rgba(0,0,0,0.35))" }}
                                        />
                                    </div>
                                    <p className="text-zinc-700 max-w-[34ch] text-sm md:text-base text-center">{feature.imageAlt}</p>
                                </div>
                            ) : (
                                <div
                                    className="relative rounded-3xl overflow-hidden shadow-outline p-5 sm:p-7 md:p-9"
                                    style={{
                                        backgroundImage: `url('${app.heroWallpaper}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <span className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/40 animate-glow-shift" />
                                    <div className="relative z-10 rounded-2xl bg-white/80 backdrop-blur p-4 sm:p-5 md:p-6 shadow-outline min-h-[240px] flex flex-col items-center justify-center text-center gap-4">
                                        <Image
                                            src={feature.imageSrc}
                                            alt={feature.imageAlt}
                                            width={1320}
                                            height={2868}
                                            sizes="(max-width: 1023px) 100vw, 520px"
                                            className={`w-full h-auto rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.2)] ${index % 2 === 0 ? "animate-float-soft" : "animate-float-gentle"}`}
                                        />
                                        <p className="text-zinc-700 max-w-[34ch] text-sm md:text-base">{feature.imageAlt}</p>
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
