import type { MetadataRoute } from "next";
import { studio } from "../config/studio";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Verbik",
        short_name: "Verbik",
        description: "Offline dictionary and grammar reference for Russian, Spanish, Italian, French, European Portuguese, and Hebrew.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#5A00F5",
        icons: [
            {
                src: "/app-icons/verbik.png",
                sizes: "1024x1024",
                type: "image/png",
            },
        ],
    };
}
