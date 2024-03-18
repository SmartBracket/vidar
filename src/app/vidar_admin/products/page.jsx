import Link from "next/link"

import { getShopProducts } from '@/lib/shop/queries'
import Pagination from '@/components/ui/Pagination'

import AdminProductItem from '@/components/admin/AdminProductItem'

export default async function ProductsAdminPage({searchParams}){
    const productsData = await getShopProducts(searchParams)
    const productsCount = productsData.totalCount[0].count
    const productsList = productsData.currentProducts

    return (
    <>
        {/* <div className="admin__subTitle">Список товаров</div> */}

        <div className="adminProductList">
            <Link href="/vidar_admin/products/edit?type=new" className="adminProduct adminProduct_add">Добавить товар</Link>
            {productsList.map( product => (<AdminProductItem key={product._id} product={product}/>) )}
        </div>

        <Pagination itemsCount={productsCount}  urlParams={searchParams}/>
    </>
    )
}