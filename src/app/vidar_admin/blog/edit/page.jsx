import AdminProductEditPage from '@/components/admin/AdminEditPage'
import { getArticle } from '@/lib/blog/queries'

export default async function Page({searchParams}){
    // console.log(searchParams)
    let pageData = {
        taxonomy: 'article',
        type : searchParams.type
    }
    if(searchParams.type === 'edit'){
        pageData.productData = await getArticle(searchParams.slug)
    }

    
    return <AdminProductEditPage serverData={pageData} />
}