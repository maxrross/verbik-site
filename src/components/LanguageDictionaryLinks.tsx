import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { dictionaryPages } from "../config/languages";

export function LanguageDictionaryLinks() {
    return (
        <section id="dictionaries" className="container scroll-mt-24 py-16 sm:py-20 md:py-24">
            <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
                <small className="mb-5 inline-flex font-semibold uppercase tracking-wider text-[#5A00F5]">
                    Four dictionaries
                </small>
                <h2 className="text-3xl font-bold text-zinc-900 md:text-5xl">One app for four different grammar systems</h2>
                <p className="mx-auto mt-5 max-w-3xl text-base text-zinc-600 sm:text-lg md:text-xl">
                    Each language gets its own search rules and grammar layout—not a generic table forced onto every word.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {dictionaryPages.map((page) => (
                    <Link
                        key={page.slug}
                        href={`/${page.slug}`}
                        className="group flex min-h-56 flex-col rounded-3xl bg-gray-50 p-5 shadow-outline transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_36px_rgba(12,34,74,0.08)] sm:p-6"
                    >
                        <span className="text-4xl" aria-hidden="true">{page.flag}</span>
                        <h3 className="mt-5 text-xl font-semibold text-zinc-900">{page.name} dictionary</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                            {page.entryCount.toLocaleString("en-US")} entries · {page.verbCount.toLocaleString("en-US")} verbs
                        </p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#5A00F5]">
                            Explore {page.name}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
