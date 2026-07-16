import Link from "next/link";
import { studio } from "../config/studio";

export function SiteFooter() {
    return (
        <footer className="container pb-6 md:pb-20">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between border-t border-gray-100 pt-8 md:pt-16">
                <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-3 md:gap-4">
                    <p>
                        &copy; {new Date().getFullYear()} {studio.name}. All rights reserved.
                    </p>
                    <p className="text-zinc-500">Built for private, on-device intelligence.</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-7">
                    <Link
                        href="/"
                        className="order-first flex items-center justify-center md:-mr-3 h-10 px-3 gap-2 rounded-full hover:bg-gray-50 transition"
                    >
                        <img
                            src={studio.logoPath}
                            alt={`${studio.name} logo`}
                            width={20}
                            height={20}
                            className="rounded-[6px]"
                        />
                        <span className="text-replay font-bold tracking-tight">{studio.name}</span>
                    </Link>
                    <Link href="/help" className="hover:text-zinc-900 transition">
                        Help
                    </Link>
                    <Link href="/privacy" className="hover:text-zinc-900 transition">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-zinc-900 transition">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
