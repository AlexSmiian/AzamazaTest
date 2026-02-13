import meta from './meta';
import Page from "@/app/_modules/Page";
import Home from "@/app/_modules/Home";
import './_assets/global.css';

export async function generateMetadata({
                                           params,
                                       }: {
    params: { lang: string };
}) {
    const { lang } = params;
    return {
        title: meta[lang]?.title || meta.en.title,
        description: meta[lang]?.description || meta.en.description,
    };
}

export default async function HomePage({
                                           params,
                                           searchParams,
                                       }: {
    params: { lang: string };
    searchParams: {};
}) {
    const { lang } = params;

    return (
        <Page>
            <Home />
        </Page>
    );
}
