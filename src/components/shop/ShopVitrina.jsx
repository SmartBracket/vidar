'use client'
import ShopFilters from '@/components/shop/ShopFilters'
import ShopList from '@/components/shop/ShopList'
import ShopPagination from '@/components/shop/ShopPagination'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// import { connectToDatabase } from "@/core/mongo/db";

export default function ShopVitrina(){
    // let productList = getShopProducts(filters) // fetching data
    // const vitrinaData = {
    //     page: Number(searchParams.page ? searchParams.page : 1),
    //     category: searchParams.category ? searchParams.category : null,
    //     inStock : searchParams.inStock ? searchParams.inStock : false,
    //     sortBy : searchParams.sortBy ? searchParams.sortBy : null
    //   }


    // useEffect(()=>{
    //     console.log()
    // })

    return null
    return (
        <>
            <ShopFilters filters={vitrinaData} />
            <ShopList filters={vitrinaData}/>
            <ShopPagination filters={vitrinaData}/>
        </>
    )
}