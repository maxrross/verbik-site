import { DictionaryLandingPage, dictionaryPageMetadata } from "../../components/DictionaryLandingPage";
import { getDictionaryPage } from "../../config/languages";

const page = getDictionaryPage("spanish-verb-dictionary")!;
export const metadata = dictionaryPageMetadata(page);

export default function SpanishVerbDictionaryPage() {
    return <DictionaryLandingPage page={page} />;
}
