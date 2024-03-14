import '@/assets/styles/blog.scss'

// import ShopVitrina from '@/components/shop/ShopVitrina'

// import ShopFilters from '@/components/shop/ShopFilters'
// import ShopList from '@/components/shop/ShopList'
// import ShopPagination from '@/components/shop/ShopPagination'
// // import ShopVitrina from '@/components/shop/ShopVitrina'

import Pagination from '@/components/ui/Pagination'
import ArticlesList from '@/components/blog/ArticlesList'

import { getArticlesData } from '@/lib/blog/queries'

export async function generateMetadata() {
  return {
      title: 'Медицинские статьи',
      description: 'Блог о здоровье и научные статьи на тематику медицина.',
      // openGraph: {
      //     images: [article.image ],
      // },
  }
}

export default async function Blog({searchParams} : any) {
  // const productsData = await getShopProducts(searchParams)
  // const productsCount = productsData.totalCount[0].count
  // const productsList = productsData.currentProducts

  // const catList = await getShopCats()
  const articlesData = await getArticlesData(searchParams)
  const articlesCount = articlesData.totalCount[0].count
  const articlesList = articlesData.currentArticles

  // console.log(articlesList)
  return (
    <main className="page blog">
      <div className="container">
        <h1 className="pageTitle">Медицинские статьи</h1>
        <ArticlesList articles={articlesList} />
        <Pagination itemsCount={articlesCount}  urlParams={searchParams}/>
      </div>
    </main>
  );
}
