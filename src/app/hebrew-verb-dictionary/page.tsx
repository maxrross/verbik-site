import { DictionaryLandingPage, dictionaryPageMetadata } from "../../components/DictionaryLandingPage";
import { getDictionaryPage } from "../../config/languages";

const page = getDictionaryPage("hebrew-verb-dictionary")!;
export const metadata = dictionaryPageMetadata(page);

export default function HebrewVerbDictionaryPage() {
    return <DictionaryLandingPage page={page} />;
}
