export const SUPPORTED_SITE_LOCALES = ["en"] as const;
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
            defaultDownloadNote: "Free to download. See Pro offers in the app.",
            featureLinkDesktop: "{{appName}} — six sourced offline dictionaries built for iPhone",
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
            subtitle: "Search more than 159,000 entries across six languages. No account required.",
            buttonLabel: "Download on the App Store",
        },
    },
};

export const apps: AppConfig[] = [
    {
        slug: "verbik",
        appName: "Verbik",
        tagline: "Every word form. Six languages. Offline.",
        description:
            "Verbik is an offline verb dictionary for iPhone. Search more than 159,000 sourced Russian, Spanish, Italian, French, European Portuguese, and Hebrew entries by the form you actually see, understand the match, and open complete grammar tables.",
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
            "/apps/verbik/03-six-offline-dictionaries.jpg",
            "/apps/verbik/04-pronunciation-and-niqqud.jpg",
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
                title: "Six sourced offline dictionaries",
                body: "More than 159,000 Russian, Spanish, Italian, French, European Portuguese, and Hebrew entries live together in one focused reference app.",
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
                body: "No account or in-app ads. Core search and synthetic pronunciation work offline, with privacy-restricted analytics described in our privacy policy.",
            },
            {
                icon: "star",
                title: "Remember what you find",
                body: "Save favorites, then practice them with Cards, Pairs, and quick Rush rounds. Turn a useful lookup into a word you remember.",
            },
        ],
        steps: [
            {
                title: "Choose a language",
                description: "Switch between Russian, Spanish, Italian, French, European Portuguese, and Hebrew from the search screen.",
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
            "A useful word is easy to forget after a single lookup",
        ],
        solutions: [
            "Search headwords, meanings, inflections, and transliterations",
            "Keep six source-backed grammar dictionaries in one app",
            "Understand the match with language-specific labels",
            "Save favorites and practice the words you actually want to learn",
        ],
        faqItems: [
            {
                question: "Which languages does Verbik support?",
                answer: "Verbik includes Russian, Spanish, Italian, French, European Portuguese, and Hebrew dictionaries. Each language has its own grammar presentation, inflection-aware search, and cited sources.",
            },
            {
                question: "Can I search a conjugated or declined word?",
                answer: "Yes. You can search headwords, inflected forms, English meanings, and transliterations. Verbik also explains which form matched the dictionary entry.",
            },
            {
                question: "Does Verbik work offline?",
                answer: "Yes. All six core dictionaries, grammar entries, search, favorites, and synthetic pronunciation work offline. Native-speaker audio can be an optional online enhancement when available.",
            },
            {
                question: "How much does Verbik cost?",
                answer: "Verbik is free to download. Version 1.9, currently being prepared for App Review, introduces Pro at US $39.99/year or $9.99/month, with a 7-day free trial on the annual plan for eligible new subscribers. The annual plan renews at $39.99/year after the trial unless canceled. The monthly plan has no free trial. Until 1.9 is available, the offers shown in your installed version apply. Existing lifetime purchases stay unlocked. Local prices and eligibility are shown by Apple before purchase.",
            },
            {
                question: "Does Verbik support Hebrew niqqud and Russian stress?",
                answer: "Yes. Hebrew entries can show niqqud and accept common niqqud-free searches. Russian entries include stress and transliteration where available.",
            },
            {
                question: "Does Verbik require an account?",
                answer: "No account is required, and there are no in-app ads. Core dictionary features run on your device. Verbik uses privacy-restricted AppsFlyer analytics to measure app usage and purchases; see the privacy policy for what is collected and how it is limited.",
            },
        ],
        appStoreUrl: "https://apps.apple.com/us/app/verbik-verb-forms-dictionary/id6788358735",
        downloadCtaNote: "Free to download. See Pro offers in the app.",
        privacyMessage: "Core dictionaries and synthetic pronunciation work offline. No account or in-app ads. See our privacy policy for analytics details.",
    },
];

export function getSiteUiCopy(_locale: SiteLocale = "en"): SiteUiCopy {
    return SITE_UI_COPY.en;
}

export function getAppBySlug(slug: string, _locale: SiteLocale = "en"): AppConfig | undefined {
    return apps.find((candidate) => candidate.slug === slug);
}
