import Page from "@/app/_modules/Page";
import '../_assets/global.css';
import CategoryPage from "@/app/_modules/CategoryPage";

// export async function generateMetadata({
//                                            params,
//                                        }: {
//     params: { lang: string };
// }) {
//     const { lang } = params;
//     return {
//         title: meta[lang]?.title || meta.en.title,
//         description: meta[lang]?.description || meta.en.description,
//     };
// }

export default async function HomePage() {


    return (
        <Page>
            <CategoryPage />
        </Page>
    );
}
