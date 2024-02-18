import '@/assets/styles/shop.scss'

// import ShopVitrina from '@/components/shop/ShopVitrina'

import ShopFilters from '@/components/shop/ShopFilters'
import ShopList from '@/components/shop/ShopList'
import ShopPagination from '@/components/shop/ShopPagination'

export default async function Home({searchParams} : any) {
  let spObject = new URLSearchParams(searchParams);
  let spString = spObject.toString()
  let fetchUrl = spString.length ? `${process.env.NEXT_PUBLIC_URL}/api/shop/products?${spString}` : `${process.env.NEXT_PUBLIC_URL}/api/shop/products`
  let fetching = await fetch(fetchUrl, {method: 'GET' , cache: 'no-store'})
  let fetchedData = await fetching.json()

  let totalResulst = fetchedData[0].totalCount[0].count
  let productsList = fetchedData[0].currentProducts

  let fetchCatList = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/shop/cats`, {method: 'GET' , cache: 'no-store'})
  let catList = await fetchCatList.json()
  

  // console.log(fetchedData[0].currentProducts)
  return (
    <main className="page shop">
      <div className="container">
        {/* <Test /> */}
        <h1 className="pageTitle">Витрина аптеки</h1>
        <ShopFilters cats={catList}/>
        <ShopList products={productsList}/>
        <ShopPagination productsCount={totalResulst}  urlParams={searchParams}/>
        {/* <ShopVitrina /> */}
      </div>
    </main>
  );
}
