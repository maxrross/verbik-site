import { DictionaryLandingPage, dictionaryPageMetadata } from "../../components/DictionaryLandingPage";
import { getDictionaryPage } from "../../config/languages";

const page = getDictionaryPage("portuguese-verb-dictionary")!;
export const metadata = dictionaryPageMetadata(page);

export default function PortugueseVerbDictionaryPage() {
    return <DictionaryLandingPage page={page} />;
}
