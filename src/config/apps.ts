export const SUPPORTED_SITE_LOCALES = ["en", "es"] as const;
export type SiteLocale = (typeof SUPPORTED_SITE_LOCALES)[number];

export interface AppConfig {
    slug: string;
    appName: string;
    tagline: string;
    description: string;
    accentColor: string;
    accentColorLight: string;
    accentGradient: { from: string; via?: string; to: string };
    iconSymbol: string;
    heroFloatingIcons?: string[];
    iconImage: string;
    heroWallpaper: string;
    cardWallpaper: string;
    heroPreview: string;
    galleryImages: string[];
    cardSize: "hero" | "secondary" | "standard";
    features: Array<{ icon: string; title: string; body: string }>;
    steps?: Array<{ title: string; description: string }>;
    detailFeatures?: Array<{
        title: string;
        description: string;
        imageAlt: string;
        imageSrc: string;
    }>;
    painPoints?: string[];
    solutions?: string[];
    socialProof?: {
        userCount: string;
        testimonials: Array<{ quote: string; author: string }>;
    };
    appStoreUrl: string;
    downloadCtaNote?: string;
    privacyMessage?: string;
    faqItems?: Array<{ question: string; answer: string }>;
    localizedContent?: Partial<Record<SiteLocale, AppLocalizedContent>>;
}

export interface AppLocalizedContent {
    appName?: string;
    tagline?: string;
    description?: string;
    downloadCtaNote?: string;
    privacyMessage?: string;
    steps?: Array<{ title: string; description: string }>;
}

export interface SiteUiCopy {
    hero: {
        overviewLabel: string;
        defaultDownloadNote: string;
        featureLinkDesktop: string;
        featureLinkMobile: string;
        appIconAlt: string;
        heroPreviewAlt: string;
        sidePreviewAlt: string;
        panelPreviewAlt: string;
    };
    workflow: {
        badge: string;
        title: string;
        subtitle: string;
    };
    downloadCta: {
        eyebrow: string;
        title: string;
        subtitle: string;
        buttonLabel: string;
    };
}

const SITE_UI_COPY: Record<SiteLocale, SiteUiCopy> = {
    en: {
        hero: {
            overviewLabel: "Overview",
            defaultDownloadNote: "No subscriptions. No in-app purchases. {{appName}} runs on-device with Apple Intelligence.",
            featureLinkDesktop: "{{appName}} — on-device, private, and built for iOS",
            featureLinkMobile: "Explore features",
            appIconAlt: "{{appName}} icon",
            heroPreviewAlt: "{{appName}} hero preview",
            sidePreviewAlt: "{{appName}} iPhone preview {{index}}",
            panelPreviewAlt: "{{appName}} preview panel {{index}}",
        },
        workflow: {
            badge: "Workflow",
            title: "How it works",
            subtitle: "A clean, three-step flow designed to get value in under a minute.",
        },
        downloadCta: {
            eyebrow: "Get Started",
            title: "Ready to try {{appName}}?",
            subtitle: "Fast, private, on-device results with no account required.",
            buttonLabel: "Download on the App Store",
        },
    },
    es: {
        hero: {
            overviewLabel: "Resumen",
            defaultDownloadNote: "Sin suscripciones ni compras dentro de la app. {{appName}} funciona en el dispositivo con Apple Intelligence.",
            featureLinkDesktop: "{{appName}} — en el dispositivo, privado y creado para iOS",
            featureLinkMobile: "Explorar funciones",
            appIconAlt: "Ícono de {{appName}}",
            heroPreviewAlt: "Vista principal de {{appName}}",
            sidePreviewAlt: "Vista previa {{index}} de {{appName}} en iPhone",
            panelPreviewAlt: "Panel de vista previa {{index}} de {{appName}}",
        },
        workflow: {
            badge: "Flujo",
            title: "Cómo funciona",
            subtitle: "Un flujo claro de tres pasos para obtener resultados en menos de un minuto.",
        },
        downloadCta: {
            eyebrow: "Empieza ahora",
            title: "¿Listo para probar {{appName}}?",
            subtitle: "Resultados rápidos, privados y en el dispositivo, sin necesidad de cuenta.",
            buttonLabel: "Descargar en la App Store",
        },
    },
};

export const apps: AppConfig[] = [
    {
        slug: "verbik",
        appName: "Verbik",
        tagline: "Every word form. Four languages. Offline.",
        description:
            "Search Russian, Spanish, Italian, and Hebrew by the form you actually see. Verbik explains the match, shows complete grammar, and keeps its core dictionaries available offline.",
        accentColor: "#5A00F5",
        accentColorLight: "#F1ECFF",
        accentGradient: { from: "#24008F", via: "#5A00F5", to: "#FF4C1F" },
        iconSymbol: "character.book.closed.fill",
        heroFloatingIcons: [
            "character.book.closed.fill",
            "text.magnifyingglass",
            "textformat.abc",
            "speaker.wave.2",
            "star",
            "lock.shield",
        ],
        iconImage: "/app-icons/verbik.png",
        heroWallpaper: "/apps/verbik/hero-background.svg",
        cardWallpaper: "/apps/verbik/hero-background.svg",
        heroPreview: "/apps/verbik/01-search-any-form.jpg",
        galleryImages: [
            "/apps/verbik/01-search-any-form.jpg",
            "/apps/verbik/02-full-conjugation.jpg",
            "/apps/verbik/03-four-offline-dictionaries.jpg",
            "/apps/verbik/04-pronunciation-and-niqqud.jpg",
            "/apps/verbik/05-lifetime-unlock.jpg",
        ],
        cardSize: "standard",
        features: [
            {
                icon: "text.magnifyingglass",
                title: "Search any word form",
                body: "Type a conjugation, declined form, transliteration, or meaning and jump to the right dictionary entry.",
            },
            {
                icon: "character.book.closed.fill",
                title: "Four offline dictionaries",
                body: "Russian, Spanish, Italian, and Hebrew live together in one focused reference app.",
            },
            {
                icon: "textformat.abc",
                title: "Complete grammar",
                body: "See conjugations, declensions, cases, stress, aspect, roots, and transliteration in clear native layouts.",
            },
            {
                icon: "speaker.wave.2",
                title: "Pronunciation built in",
                body: "Listen to headwords with language-aware speech, including Hebrew niqqud-aware pronunciation fallback.",
            },
            {
                icon: "lock.shield",
                title: "Private by design",
                body: "No account, ads, or third-party tracking. Core search and synthetic pronunciation work offline.",
            },
            {
                icon: "infinity",
                title: "One lifetime unlock",
                body: "Unlock every dictionary and full entry for $14.99 once. There is no subscription.",
            },
        ],
        steps: [
            {
                title: "Choose a language",
                description: "Switch between Russian, Spanish, Italian, and Hebrew from the search screen.",
            },
            {
                title: "Search the form you found",
                description: "Enter a headword, inflection, English meaning, transliteration, or Hebrew text without niqqud.",
            },
            {
                title: "Understand the whole entry",
                description: "See why it matched, scan the full grammar, listen to pronunciation, and save favorites for later.",
            },
        ],
        detailFeatures: [
            {
                title: "Find the lemma behind the form",
                description: "Verbik does more than return a result. Match labels show the form, person, tense, or other grammar that led to the entry.",
                imageAlt: "Verbik Spanish dictionary home screen on iPhone",
                imageSrc: "/apps/verbik/app-home-spanish-framed.png",
            },
            {
                title: "Grammar you can scan quickly",
                description: "Language-specific layouts keep conjugations, declensions, cases, stress, roots, and transliterations readable without turning the app into a lesson course.",
                imageAlt: "Verbik Russian conjugation screen on iPhone",
                imageSrc: "/apps/verbik/app-conjugation-framed.png",
            },
        ],
        painPoints: [
            "A dictionary search fails because you only know the inflected form",
            "Grammar tables are split across websites and language-specific apps",
            "Transliteration and Hebrew text without niqqud return weak results",
            "Subscriptions make a simple reference tool unnecessarily expensive",
        ],
        solutions: [
            "Search headwords, meanings, inflections, and transliterations",
            "Keep four full grammar dictionaries in one app",
            "Understand the match with language-specific labels",
            "Pay once for permanent access with no account or tracking",
        ],
        faqItems: [
            {
                question: "Which languages does Verbik support?",
                answer: "Verbik includes Russian, Spanish, Italian, and Hebrew dictionaries. Each language has its own grammar presentation and search support.",
            },
            {
                question: "Can I search a conjugated or declined word?",
                answer: "Yes. You can search headwords, inflected forms, English meanings, and transliterations. Verbik also explains which form matched the dictionary entry.",
            },
            {
                question: "Does Verbik work offline?",
                answer: "Yes. The four core dictionaries, grammar entries, search, favorites, and synthetic pronunciation work offline. Native-speaker audio can be an optional online enhancement when available.",
            },
            {
                question: "How much does Verbik cost?",
                answer: "Basic search remains useful for free. A one-time $14.99 purchase unlocks all entries and all four dictionaries permanently. There is no subscription.",
            },
            {
                question: "Does Verbik support Hebrew niqqud and Russian stress?",
                answer: "Yes. Hebrew entries can show niqqud and accept common niqqud-free searches. Russian entries include stress and transliteration where available.",
            },
            {
                question: "Does Verbik require an account or track me?",
                answer: "No. Verbik requires no account, includes no ads, and adds no third-party tracking SDK. Its core dictionary experience runs on your device.",
            },
        ],
        appStoreUrl: "https://apps.apple.com/us/app/verbik-verb-forms-dictionary/id6788358735",
        downloadCtaNote: "$14.99 lifetime unlock. No subscription.",
        privacyMessage: "Core dictionaries and synthetic pronunciation work offline. No account, ads, or third-party tracking.",
        localizedContent: {
            es: {
                tagline: "Cada forma. Cuatro idiomas. Sin conexión.",
                description: "Busca ruso, español, italiano y hebreo por la forma que encuentres. Verbik explica la coincidencia, muestra la gramática completa y mantiene sus diccionarios principales sin conexión.",
                downloadCtaNote: "Desbloqueo de por vida por $14.99. Sin suscripción.",
                privacyMessage: "Los diccionarios principales y la pronunciación sintética funcionan sin conexión. Sin cuenta, anuncios ni rastreo de terceros.",
                steps: [
                    { title: "Elige un idioma", description: "Cambia entre ruso, español, italiano y hebreo desde la búsqueda." },
                    { title: "Busca la forma que encontraste", description: "Escribe una palabra, flexión, significado en inglés, transliteración o hebreo sin niqqud." },
                    { title: "Entiende la entrada completa", description: "Ve por qué coincidió, consulta la gramática, escucha la pronunciación y guarda favoritos." },
                ],
            },
        },
    },
];

function localizeApp(app: AppConfig, locale: SiteLocale): AppConfig {
    if (locale === "en") return app;
    const localized = app.localizedContent?.[locale];
    if (!localized) return app;
    return {
        ...app,
        appName: localized.appName ?? app.appName,
        tagline: localized.tagline ?? app.tagline,
        description: localized.description ?? app.description,
        downloadCtaNote: localized.downloadCtaNote ?? app.downloadCtaNote,
        privacyMessage: localized.privacyMessage ?? app.privacyMessage,
        steps: localized.steps ?? app.steps,
    };
}

function normalizeLocale(value: string | string[] | undefined): SiteLocale | null {
    const raw = Array.isArray(value) ? value[0] : value;
    if (!raw) return null;
    const normalized = raw.trim().toLowerCase().replace(/_/g, "-");
    if (normalized === "es" || normalized.startsWith("es-")) return "es";
    if (normalized === "en" || normalized.startsWith("en-")) return "en";
    return null;
}

export function resolveSiteLocale(params?: {
    queryLocale?: string | string[] | undefined;
    cookieLocale?: string | null | undefined;
    acceptLanguage?: string | null | undefined;
}): SiteLocale {
    const fromQuery = normalizeLocale(params?.queryLocale);
    if (fromQuery) return fromQuery;
    const fromCookie = normalizeLocale(params?.cookieLocale ?? undefined);
    if (fromCookie) return fromCookie;
    const fromHeader = (params?.acceptLanguage ?? "")
        .split(",")
        .map((candidate) => normalizeLocale(candidate.split(";")[0]))
        .find((candidate): candidate is SiteLocale => Boolean(candidate));
    return fromHeader ?? "en";
}

export function getSiteUiCopy(locale: SiteLocale): SiteUiCopy {
    return SITE_UI_COPY[locale] ?? SITE_UI_COPY.en;
}

export function getAppBySlug(slug: string, locale: SiteLocale = "en"): AppConfig | undefined {
    const app = apps.find((candidate) => candidate.slug === slug);
    return app ? localizeApp(app, locale) : undefined;
}

export function getSupportAppBySlug(slug: string, locale: SiteLocale = "en"): AppConfig | undefined {
    return getAppBySlug(slug, locale);
}

export function getAllSlugs(): string[] {
    return apps.map((app) => app.slug);
}

export function getAllSupportSlugs(): string[] {
    return getAllSlugs();
}
