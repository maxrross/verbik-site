import { DictionaryLandingPage, dictionaryPageMetadata } from "../../components/DictionaryLandingPage";
import { getDictionaryPage } from "../../config/languages";

const page = getDictionaryPage("french-verb-dictionary")!;
export const metadata = dictionaryPageMetadata(page);

export default function FrenchVerbDictionaryPage() {
    return <DictionaryLandingPage page={page} />;
}
