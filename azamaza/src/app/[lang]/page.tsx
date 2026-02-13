import Page from '../_modules/Page';
import meta from './meta';
import getAlternates from '../_utils/getAlternates';
import getRobots from '../_utils/getRobots';

export async function generateMetadata({
                                           params,
                                       }: {
    params: { lang: string };
}) {
    const { lang } = params;
    return {
        title: meta[lang]?.title || meta.en.title,
        description: meta[lang]?.description || meta.en.description,
        ...getAlternates({ lang, pathname: '/' }),
        ...getRobots(),
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
        <Page
            params={params}
            searchParams={searchParams}
        >
            <div>
asdasd
            </div>
        </Page>
    );
}
