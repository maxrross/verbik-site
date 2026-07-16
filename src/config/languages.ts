export interface DictionaryPageConfig {
    slug: string;
    name: string;
    flag: string;
    entryCount: number;
    verbCount: number;
    title: string;
    description: string;
    heading: string;
    intro: string;
    image: string;
    imageAlt: string;
    searchExamples: Array<{ query: string; result: string; explanation: string }>;
    grammarFeatures: Array<{ title: string; description: string }>;
    faq: Array<{ question: string; answer: string }>;
}

export const dictionaryPages: DictionaryPageConfig[] = [
    {
        slug: "spanish-verb-dictionary",
        name: "Spanish",
        flag: "🇪🇸",
        entryCount: 26490,
        verbCount: 6003,
        title: "Spanish Verb Dictionary App — Offline Conjugations",
        description: "Search any Spanish verb form offline on iPhone. Verbik finds the infinitive and shows conjugations, meanings, pronunciation, examples, nouns, and adjectives.",
        heading: "A Spanish verb dictionary for the form you actually found",
        intro: "Look up an infinitive, conjugated verb, English meaning, noun, or adjective. Verbik connects the form to its dictionary entry and keeps the full reference available offline.",
        image: "/apps/verbik/app-verbik-home-spanish-framed.png",
        imageAlt: "Verbik Spanish dictionary home screen in the app's iPhone frame",
        searchExamples: [
            { query: "hablo", result: "hablar", explanation: "Find the infinitive from a first-person present form." },
            { query: "sepa", result: "saber", explanation: "Trace a subjunctive form back to the complete entry." },
            { query: "to understand", result: "entender", explanation: "Search in English when you do not know the Spanish headword." },
        ],
        grammarFeatures: [
            { title: "Six core conjugation tables", description: "Present, preterite, imperfect, future, conditional, and present subjunctive forms for six persons." },
            { title: "Imperative and non-finite forms", description: "See commands, gerunds, and past participles alongside the main conjugation." },
            { title: "More than verbs", description: "Search Spanish nouns, adjectives, other words, meanings, examples, and related entries in the same dictionary." },
            { title: "Offline and distraction-free", description: "The bundled dictionary works without an account, ads, or a network connection." },
        ],
        faq: [
            { question: "Can Verbik find an infinitive from a conjugated Spanish verb?", answer: "Yes. Search is built to match inflected forms and return the underlying dictionary entry with a label explaining the match." },
            { question: "Does the Spanish verb dictionary work offline?", answer: "Yes. Search, entries, grammar tables, favorites, and synthetic pronunciation are available offline. Optional native-speaker recordings require a connection when available." },
            { question: "How many Spanish entries are included?", answer: "Version 1.2 includes 26,490 Spanish entries, including 6,003 verbs. Dictionary counts can increase in later updates." },
        ],
    },
    {
        slug: "russian-verb-dictionary",
        name: "Russian",
        flag: "🇷🇺",
        entryCount: 39760,
        verbCount: 11546,
        title: "Russian Verb Dictionary App — Stress, Cases & Forms",
        description: "Search Russian verb forms, cases, meanings, or transliteration offline on iPhone. See stress, aspect, conjugations, declensions, pronunciation, and examples.",
        heading: "A Russian verb dictionary that understands inflected forms",
        intro: "Search the Cyrillic form in front of you, type a transliteration, or start with an English meaning. Verbik shows the lemma, stress, grammar, and the reason the result matched.",
        image: "/apps/verbik/app-verbik-home-russian-framed.png",
        imageAlt: "Verbik Russian dictionary home screen in the app's iPhone frame",
        searchExamples: [
            { query: "говорю", result: "говорить", explanation: "Find a verb from the form used for “I speak.”" },
            { query: "книги", result: "книга", explanation: "Resolve an ambiguous case or plural form to its noun entry." },
            { query: "govorit", result: "говорить", explanation: "Use learner-friendly transliteration when a Cyrillic keyboard is not handy." },
        ],
        grammarFeatures: [
            { title: "Stress and transliteration", description: "Read stressed Russian headwords and learner-friendly transliterations for forms where source data is available." },
            { title: "Verb aspect and full forms", description: "Review aspect, present or future forms, past forms, imperatives, participles, and gerunds." },
            { title: "Cases for nouns and adjectives", description: "Scan singular and plural declensions, grammatical gender, short forms, and comparative forms." },
            { title: "Built for offline lookup", description: "The bundled Russian dictionary remains searchable without an account or internet connection." },
        ],
        faq: [
            { question: "Can I search Russian with Latin letters?", answer: "Yes. Verbik supports transliteration search in addition to Cyrillic, English meanings, headwords, and inflected forms." },
            { question: "Does Verbik show Russian stress?", answer: "Yes. Russian entries and many forms include source-based stress marks and transliteration where available." },
            { question: "How many Russian entries are included?", answer: "Version 1.2 includes 39,760 Russian entries, including 11,546 verbs. Dictionary counts can increase in later updates." },
        ],
    },
    {
        slug: "italian-verb-dictionary",
        name: "Italian",
        flag: "🇮🇹",
        entryCount: 26707,
        verbCount: 8569,
        title: "Italian Verb Dictionary App — Offline Conjugations",
        description: "Search Italian conjugated forms offline on iPhone. Verbik finds the infinitive and shows complete verb tables, meanings, pronunciation, examples, nouns, and adjectives.",
        heading: "An Italian verb dictionary for conjugations and real word forms",
        intro: "Start with the Italian form you encountered or an English meaning. Verbik identifies the dictionary entry, explains the match, and puts the full conjugation beside definitions and examples.",
        image: "/apps/verbik/app-verbik-home-italian-framed.png",
        imageAlt: "Verbik Italian dictionary home screen in the app's iPhone frame",
        searchExamples: [
            { query: "andiamo", result: "andare", explanation: "Jump from a present-tense form to the full verb entry." },
            { query: "sono", result: "essere", explanation: "Find an irregular verb even when the form looks unlike its infinitive." },
            { query: "to choose", result: "scegliere", explanation: "Search by English meaning when the Italian word is unknown." },
        ],
        grammarFeatures: [
            { title: "Six core Italian tenses", description: "Present, imperfect, remote past, future, conditional, and present subjunctive forms for six persons." },
            { title: "Commands, gerunds, and participles", description: "Keep imperative and non-finite forms with the main verb table instead of hunting across pages." },
            { title: "Nouns, adjectives, and context", description: "Look up gender, plurals, adjective forms, definitions, examples, frequency, and related entries." },
            { title: "Available without a connection", description: "Core search and dictionary content are bundled with the app for offline reference." },
        ],
        faq: [
            { question: "Can Verbik identify irregular Italian verb forms?", answer: "Yes. Inflected-form search is designed to connect regular and irregular forms to the correct dictionary entry." },
            { question: "Can I search Italian words by their English meaning?", answer: "Yes. Verbik searches English meanings as well as Italian headwords and inflected forms." },
            { question: "How many Italian entries are included?", answer: "Version 1.2 includes 26,707 Italian entries, including 8,569 verbs. Dictionary counts can increase in later updates." },
        ],
    },
    {
        slug: "hebrew-verb-dictionary",
        name: "Hebrew",
        flag: "🇮🇱",
        entryCount: 13138,
        verbCount: 4292,
        title: "Hebrew Verb Dictionary App — Binyanim, Roots & Niqqud",
        description: "Search Hebrew with or without niqqud offline on iPhone. See infinitives, binyanim, roots, conjugations, transliteration, pronunciation, meanings, and examples.",
        heading: "A Hebrew verb dictionary built around roots, binyanim, and real forms",
        intro: "Search vocalized or unvocalized Hebrew, a conjugated form, transliteration, or an English meaning. Verbik connects the result to its infinitive and makes the root and binyan easy to inspect.",
        image: "/apps/verbik/app-verbik-home-hebrew-framed.png",
        imageAlt: "Verbik Hebrew dictionary home screen in the app's iPhone frame",
        searchExamples: [
            { query: "לומד", result: "ללמוד", explanation: "Find the infinitive from a present-tense form." },
            { query: "ואכלתי", result: "לאכול", explanation: "Handle common attached Hebrew prefixes and a conjugated past form." },
            { query: "lilmod", result: "ללמוד", explanation: "Search by transliteration without switching keyboards." },
        ],
        grammarFeatures: [
            { title: "Niqqud-aware search", description: "Search Hebrew with or without vowel points and see vocalized forms where the source provides them." },
            { title: "Roots and binyanim", description: "Keep the Hebrew root, binyan, learner-facing infinitive, and full entry together." },
            { title: "Past, present, future, and more", description: "Review person, number, and gender forms plus imperatives and the infinitive." },
            { title: "Transliteration and pronunciation", description: "Use learner-friendly romanization and listen with native audio when available or on-device speech fallback." },
        ],
        faq: [
            { question: "Can I search Hebrew without niqqud?", answer: "Yes. Verbik normalizes niqqud-free searches and recognizes common Hebrew spelling and apostrophe variants." },
            { question: "Does Verbik show Hebrew roots and binyanim?", answer: "Yes. Verb entries show the root and binyan when source data is available, followed by past, present, future, imperative, and infinitive forms." },
            { question: "How many Hebrew entries are included?", answer: "Version 1.2 includes 13,138 Hebrew entries, including 4,292 verbs. Dictionary counts can increase in later updates." },
        ],
    },
];

export function getDictionaryPage(slug: string): DictionaryPageConfig | undefined {
    return dictionaryPages.find((page) => page.slug === slug);
}
