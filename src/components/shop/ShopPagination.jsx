'use client'
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import getShopProducts from '@/lib/shop/getShopProducts'
import shopSettings from '@/lib/shop/shopSettings'

export default function ShopPagination({productsCount,urlParams}){
    const pagesCount = Math.ceil(productsCount / shopSettings.productsPerPage)
    
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPath = usePathname()

    if(!pagesCount || pagesCount == 1) return null


    const pagination = []
    for(let i = 1; i < pagesCount + 1; i++){
        pagination.push(
            <div key={i} href="#" onClick={()=>{
                const params = new URLSearchParams(searchParams.toString())
                params.set('page', i)
                router.push(`${currentPath}?${params.toString()}`)
            }} className={`shopPagination__item ${i == urlParams.page ? 'current' : ''}`} title={`Перейти на страницу ${i}`}>{i}</div>
        )               
    }

    const prevPage = <div onClick={()=>{
        const params = new URLSearchParams(searchParams.toString())
        params.set('page',  Number(urlParams.page) - 1)
        router.push(`${currentPath}?${params.toString()}`)
    }} className={`shopPagination__item shopPagination__prev ${urlParams.page > 1 ? 'visible' : ''}`} title="Перейти на предыдущую страницу"></div>
    const nextPage = <div onClick={()=>{
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', Number(urlParams.page) + 1)
        router.push(`${currentPath}?${params.toString()}`)
    }} className={`shopPagination__item shopPagination__next ${urlParams.page < pagesCount ? 'visible' : ''}`} title="Перейти на следующую страницу"></div>

    return (
        <div className="shopPagination">
            {prevPage}
            {pagination.map((page)=> page)}
            {nextPage}
        </div>
    )
}