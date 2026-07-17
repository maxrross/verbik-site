import Link from "next/link";
import Image from "next/image";
import { studio } from "../config/studio";
import { dictionaryPages } from "../config/languages";

export function SiteFooter() {
    return (
        <footer className="container pb-8 md:pb-16">
            <div className="border-t border-gray-100 pt-8 md:pt-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-sm">
                        <Link href="/" className="inline-flex items-center gap-2 font-bold tracking-tight text-zinc-900">
                            <Image src={studio.logoPath} alt="" aria-hidden="true" width={24} height={24} className="rounded-[7px]" />
                            <span className="text-replay">Verbik</span>
                        </Link>
                        <p className="mt-3 text-sm text-zinc-500">Offline word-form search and complete grammar for Russian, Spanish, Italian, French, European Portuguese, and Hebrew.</p>
                    </div>

                    <div className="grid gap-7 text-sm sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        <div>
                            <p className="mb-3 font-semibold text-zinc-900">Dictionaries</p>
                            <div className="space-y-2 text-zinc-600">
                                {dictionaryPages.map((page) => (
                                    <Link key={page.slug} href={`/${page.slug}`} className="block transition hover:text-zinc-900">{page.name} verb dictionary</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="mb-3 font-semibold text-zinc-900">Support</p>
                            <div className="space-y-2 text-zinc-600">
                                <Link href="/help" className="block transition hover:text-zinc-900">Help center</Link>
                                <a href={`mailto:${studio.supportEmail}`} className="block transition hover:text-zinc-900">{studio.supportEmail}</a>
                            </div>
                        </div>
                        <div>
                            <p className="mb-3 font-semibold text-zinc-900">Legal</p>
                            <div className="space-y-2 text-zinc-600">
                                <Link href="/privacy" className="block transition hover:text-zinc-900">Privacy</Link>
                                <Link href="/terms" className="block transition hover:text-zinc-900">Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-10 text-xs text-zinc-500">&copy; {new Date().getFullYear()} {studio.developerName}. Verbik is available on the App Store.</p>
            </div>
        </footer>
    );
}
