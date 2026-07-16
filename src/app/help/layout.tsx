import { HelpSidebar } from "../../components/HelpSidebar";

export const metadata = {
    title: "Help Center",
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container pb-16 md:pb-24">
            <div className="grid md:grid-cols-[260px_1fr] gap-4 md:gap-8 items-start">
                <HelpSidebar />
                <div className="min-w-0">{children}</div>
            </div>
        </div>
    );
}
