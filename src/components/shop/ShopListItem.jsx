'use client'

import LinkWithTransition from "@/components/ui/LinkWithTransition"
import Image from "next/image"

import ShopAddToBasket from "@/components/shop/ShopAddToBasket"

export default function ShopListItem({index, productData}){
    return (

    <div className="shopItem">
        <LinkWithTransition href={`/products/${productData.slug}`} className="shopItem__image-block">
            <Image src={productData.image} alt={productData.name} className='shopItem__image' width={200} height={200} priority={index === 0 ? true : false}/>
        </LinkWithTransition>
        
        <LinkWithTransition href={`/products/${productData.slug}`} className="shopItem__info">
            <div className="shopItem__cat">{productData.category}</div>
            <div className="shopItem__title">{productData.name}</div>
            {/* <div className="shopItem__cat">Категория: {productData.category}</div> */}
            <div className="shopItem__price">Цена: {productData.price} руб</div>
        </LinkWithTransition>
        {
            productData.inStock === true ? (<ShopAddToBasket productData={productData}/>) :
            (<div className="notInStock" onClick={(e)=> e.stopPropagation()}>Нет в наличии</div>)
        }
        
    </div>
    )
}