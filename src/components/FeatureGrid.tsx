import { AppConfig } from "../config/apps";
import { AnimatedIcon } from "./AnimatedIcon";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const cyclingForms = ["hablaría", "habló", "hablaremos"];
const scriptTiles = [
    { glyph: "Я", label: "Russian" },
    { glyph: "Ñ", label: "Spanish" },
    { glyph: "È", label: "Italian" },
    { glyph: "א", label: "Hebrew" },
];
const conjugationRows = [
    { person: "yo", form: "hablo" },
    { person: "tú", form: "hablas" },
    { person: "él / ella", form: "habla" },
];

function Vignette({ icon, app }: { icon: string; app: AppConfig }) {
    if (icon === "text.magnifyingglass") {
        return (
            <div className="flex items-center justify-center gap-2.5">
                <span className="inline-flex items-center rounded-full bg-gray-50 px-3.5 py-2 text-sm font-medium text-zinc-700 shadow-outline">
                    <span className="relative inline-block h-[1.45em] w-[10ch] overflow-hidden text-center">
                        {cyclingForms.map((form, i) => (
                            <span
                                key={form}
                                className={`word-cycle absolute inset-0 ${i === 0 ? "" : "opacity-0"}`}
                                style={{ animationDelay: `${i * 2}s` }}
                            >
                                {form}
                            </span>
                        ))}
                    </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400" weight="bold" />
                <span
                    className="rounded-full px-3.5 py-2 text-sm font-semibold text-white"
                    style={{ backgroundColor: app.accentColor }}
                >
                    hablar
                </span>
            </div>
        );
    }

    if (icon === "character.book.closed.fill") {
        return (
            <div className="flex items-center justify-center gap-2.5">
                {scriptTiles.map((tile, i) => (
                    <span
                        key={tile.label}
                        title={tile.label}
                        className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold animate-float-gentle"
                        style={{
                            color: app.accentColor,
                            backgroundColor: app.accentColorLight,
                            animationDelay: `${i * 0.6}s`,
                        }}
                    >
                        {tile.glyph}
                    </span>
                ))}
            </div>
        );
    }

    if (icon === "textformat.abc") {
        return (
            <div className="flex w-full max-w-[230px] flex-col gap-1 text-[13px]">
                {conjugationRows.map((row, i) => (
                    <div
                        key={row.person}
                        className={`row-highlight flex items-center justify-between rounded-lg px-3 py-1.5 ${i === 0 ? "row-highlight-first" : ""}`}
                        style={{ animationDelay: `${i * 1.5}s` }}
                    >
                        <span className="text-zinc-500">{row.person}</span>
                        <span className="font-semibold text-zinc-900">{row.form}</span>
                    </div>
                ))}
            </div>
        );
    }

    return <AnimatedIcon iconSymbol={icon} color={app.accentColor} size="md" variant="light" />;
}

export function FeatureGrid({ app }: { app: AppConfig }) {
    const heading = "Find the form. Understand the word.";

    return (
        <section id="features" className="container py-16 sm:py-20 md:py-24">
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-14">
                <small
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor, backgroundColor: app.accentColorLight }}
                >
                    Capabilities
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">{heading}</h2>
                <p className="text-base sm:text-lg md:text-2xl max-w-4xl text-zinc-600">
                    Core functionality focused on speed, privacy, and output quality.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                {app.features.slice(0, 3).map((feature) => (
                    <article
                        key={feature.title}
                        className="group bg-gray-50 rounded-3xl shadow-outline p-6 sm:p-7 md:p-9 text-left transition duration-300 hover:-translate-y-1 hover:bg-white"
                    >
                        <div className="mb-6 flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-white px-4 shadow-outline transition duration-300 group-hover:bg-gray-50">
                            <Vignette icon={feature.icon} app={app} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                        <p className="text-zinc-600 leading-relaxed">{feature.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
