import { DictionaryLandingPage, dictionaryPageMetadata } from "../../components/DictionaryLandingPage";
import { getDictionaryPage } from "../../config/languages";

const page = getDictionaryPage("italian-verb-dictionary")!;
export const metadata = dictionaryPageMetadata(page);

export default function ItalianVerbDictionaryPage() {
    return <DictionaryLandingPage page={page} />;
}
