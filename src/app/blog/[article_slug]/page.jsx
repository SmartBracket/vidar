import '@/assets/styles/blog.scss'
import { getArticle } from '@/lib/blog/queries'
// import ArticlePage from '@/components/blog/ArticlePage'
import ArticleTitle from '@/components/blog/ArticleTitle'
import { getAllArticlesData } from '@/lib/blog/queries'



export async function generateStaticParams() {
    const articles = await getAllArticlesData()

    return articles.map((article) => ({
        article_slug: article.slug,
    }))
}

export async function generateMetadata({ params }) {
    const article = await getArticle(params.article_slug)
    return {
        title: article.title,
        description: article.description,
        // openGraph: {
        //     images: [article.image ],
        // },
    }
}

export default async function Page({ params }){
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
