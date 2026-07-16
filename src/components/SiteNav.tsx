import Link from "next/link";
import Image from "next/image";
import { studio } from "../config/studio";
import { apps } from "../config/apps";

const app = apps[0];

export function SiteNav() {
    return (
        <header className="relative z-20 container flex items-center justify-between gap-4 pb-6 pt-3 text-sm sm:pb-10 sm:pt-5 md:pb-12">
            <Link href="/" className="inline-flex items-center gap-2 font-bold tracking-tight text-zinc-900" aria-label="Verbik home">
                <Image src={studio.logoPath} alt="" aria-hidden="true" width={30} height={30} className="rounded-[8px]" />
                <span className="text-replay text-base">Verbik</span>
            </Link>

            <nav aria-label="Main navigation" className="hidden items-center gap-1 sm:flex">
                <Link href="/#dictionaries" className="rounded-full px-4 py-2.5 text-zinc-700 transition hover:bg-gray-50 hover:text-zinc-900">Dictionaries</Link>
                <Link href="/#features" className="rounded-full px-4 py-2.5 text-zinc-700 transition hover:bg-gray-50 hover:text-zinc-900">Features</Link>
                <Link href="/help" className="rounded-full px-4 py-2.5 text-zinc-700 transition hover:bg-gray-50 hover:text-zinc-900">Help</Link>
                <Link href="/privacy" className="hidden rounded-full px-4 py-2.5 text-zinc-700 transition hover:bg-gray-50 hover:text-zinc-900 md:block">Privacy</Link>
            </nav>

            <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 font-semibold text-white transition hover:bg-zinc-800"
                style={{ color: "#fff" }}
            >
                <img src="/icons/apple-logo-white.svg" alt="" aria-hidden="true" className="h-4 w-4" />
                <span className="hidden min-[390px]:inline">App Store</span>
                <span className="min-[390px]:hidden">Get</span>
            </a>
        </header>
    );
}
