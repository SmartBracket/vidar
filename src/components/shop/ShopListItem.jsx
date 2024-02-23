'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAppContext } from "@/components/AppContext"

import ShopAddToBasket from "@/components/shop/ShopAddToBasket"

export default function ShopListItem({productData}){
    const router = useRouter()
    const AppContext = useAppContext()
    return (
    <div className="shopItem" onClick={()=>{
        AppContext.setPopupIsVisible(true)
        router.push(`/products/${productData.slug}`, {scroll:false})
    }}>
        <div className="shopItem__image-block">
            <Image src={productData.image} alt={productData.name} className='shopItem__image'
            fill sizes="100%"/>
        </div>
        
        <div className="shopItem__info">
            <div className="shopItem__cat">{productData.category}</div>
            <div className="shopItem__title">{productData.name}</div>
            {/* <div className="shopItem__cat">Категория: {productData.category}</div> */}
            <div className="shopItem__price">Цена: {productData.price} руб</div>
        </div>
        {
            productData.inStock ? (<ShopAddToBasket productData={productData}/>) :
            (<div className="notInStock" onClick={(e)=> e.stopPropagation()}>Нет в наличии</div>)
        }
        
    </div>
    )
}