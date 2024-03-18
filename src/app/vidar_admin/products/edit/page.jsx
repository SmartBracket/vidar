import AdminProductEditPage from '@/components/admin/AdminEditPage'
import { getShopProduct } from '@/lib/shop/queries'

export default async function Page({searchParams}){
    // console.log(searchParams)
    let pageData = {
        taxonomy: 'product',
        type : searchParams.type
    }
    if(searchParams.type === 'edit'){
        pageData.productData = await getShopProduct(searchParams.slug)
    }

    
    return <AdminProductEditPage serverData={pageData} />
}