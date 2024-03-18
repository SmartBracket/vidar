import Link from "next/link"

import { getArticlesData } from '@/lib/blog/queries'
import Pagination from '@/components/ui/Pagination'

import AdminArticleItem from '@/components/admin/AdminArticleItem'

export default async function ProductsAdminPage({searchParams}){
    const articlesData = await getArticlesData(searchParams)
    const articlesCount = articlesData.totalCount[0].count
    const articlesList = articlesData.currentArticles

    return (
    <>
        {/* <div className="admin__subTitle">Список товаров</div> */}

        <div className="adminProductList">
            <Link href="/vidar_admin/blog/edit?type=new" className="adminProduct adminProduct_add">Добавить статью</Link>
            {articlesList.map( article => (<AdminArticleItem key={article._id} article={article}/>) )}
        </div>

        <Pagination itemsCount={articlesCount}  urlParams={searchParams}/>
    </>
    )
}