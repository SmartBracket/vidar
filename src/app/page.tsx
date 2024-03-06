import '@/assets/styles/shop.scss'

// import ShopVitrina from '@/components/shop/ShopVitrina'

import ShopFilters from '@/components/shop/ShopFilters'
import ShopList from '@/components/shop/ShopList'
import Pagination from '@/components/ui/Pagination'
// import ShopVitrina from '@/components/shop/ShopVitrina'

import { getShopProducts, getShopCats } from '@/lib/shop/queries'

export default async function Home({searchParams} : any) {
  const productsData = await getShopProducts(searchParams)
  const productsCount = productsData.totalCount[0].count
  const productsList = productsData.currentProducts

  const catList = await getShopCats()

  return (
    // <PageTransition>
    <main className="page shop">
      <div className="container">
        <h1 className="pageTitle">Витрина аптеки</h1>
        <ShopFilters cats={catList}/>
        <ShopList products={productsList}/>
        <Pagination itemsCount={productsCount}  urlParams={searchParams}/>
        {/* <ShopVitrina /> */}
      </div>
    </main>
    // </PageTransition>
  );
}
