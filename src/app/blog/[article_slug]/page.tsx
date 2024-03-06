import '@/assets/styles/blog.scss'
import { getArticle } from '@/lib/blog/queries'
// import ArticlePage from '@/components/blog/ArticlePage'
import ArticleTitle from '@/components/blog/ArticleTitle'

export default async function Page({ params }: { params: { article_slug: string } }){
    // await new Promise(resolve => {
    //     setTimeout(resolve, 10000);
    // });
    const article = await getArticle(params.article_slug)

    return (
        <main className="page article">
            <ArticleTitle articleData={article} />
            <div className="articleContent">
                <div className="container" dangerouslySetInnerHTML={{ __html: article.content }}>

                </div>
            </div>
        </main>
    )
}
