'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

import getShopProducts from '@/lib/shop/getShopProducts'

export default function ProductModal({ params }: { params: { product_slug: string } }){
    // const router = useRouter()
    const [isHidden, setHidden] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setHidden(false)
        }, 300)
        
        return ()=>{
            setHidden(true)
        }
    }, [])

    const product = getShopProducts().find((el) => el.slug == params.product_slug)

    const productJSX = product ? (        
        <div className={`shopProductPopup ${ isHidden ? 'shopProductPopup_hidden' : ''}`} onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="shopProductPopup__wrap">
                <div className="shopProductPopup__image-block">
                    <Image alt={product.name} fill sizes="100%" src={product.image} />
                </div>
                <div className="shopProductPopup__info">
                    <div className="shopProductPopup__name">{product.name}</div>
                    <div className="shopProductPopup__cat">{product.category}</div>
                    <div className="shopProductPopup__descr">{product.description}</div>
                    <div className="shopProductPopup__bottom">
                        <div className="shopProductPopup__changeCount">
                            <div className="shopProductPopup__count">
                                Количество:
                            </div>
                            <div className="shopProductPopup__countInputWrap">
                                <input type="number" className="shopProductPopup__countInput" placeholder="1" min="1"/>
                            </div>
                        </div>
                        <div className="shopProductPopup__addToBasket">Добавить в корзину</div>
                    </div>
                </div>
            </div>
        </div>
    ) : null

    return productJSX
}