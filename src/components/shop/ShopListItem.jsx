'use client'

import LinkWithTransition from "@/components/ui/LinkWithTransition"
import Image from "next/image"
import { useRouter } from "next/navigation"

import ShopAddToBasket from "@/components/shop/ShopAddToBasket"

export default function ShopListItem({productData}){
    return (

    <div className="shopItem">
        <LinkWithTransition href={`/products/${productData.slug}`} className="shopItem__image-block">
            <Image src={productData.image} alt={productData.name} className='shopItem__image'
            fill sizes="100%"/>
        </LinkWithTransition>
        
        <LinkWithTransition href={`/products/${productData.slug}`} className="shopItem__info">
            <div className="shopItem__cat">{productData.category}</div>
            <div className="shopItem__title">{productData.name}</div>
            {/* <div className="shopItem__cat">Категория: {productData.category}</div> */}
            <div className="shopItem__price">Цена: {productData.price} руб</div>
        </LinkWithTransition>
        {
            productData.inStock ? (<ShopAddToBasket productData={productData}/>) :
            (<div className="notInStock" onClick={(e)=> e.stopPropagation()}>Нет в наличии</div>)
        }
        
    </div>
    )
}