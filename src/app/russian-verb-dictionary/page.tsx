import { DictionaryLandingPage, dictionaryPageMetadata } from "../../components/DictionaryLandingPage";
import { getDictionaryPage } from "../../config/languages";

const page = getDictionaryPage("russian-verb-dictionary")!;
export const metadata = dictionaryPageMetadata(page);

export default function RussianVerbDictionaryPage() {
    return <DictionaryLandingPage page={page} />;
}
