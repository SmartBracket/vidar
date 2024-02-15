'use client'
import Link from "next/link"
import Image from "next/image"

import basketImage from '@/assets/imgs/basket.png'

import { useState } from 'react'
import store from '@/core/redux/store'

export default function Header(){
    const [isHidden, setIsHidden] = useState(true)
    const [prodcutsInBasket, setProductsInBasket] = useState([])
    store.subscribe(()=>{
        setProductsInBasket(store.getState().products)
    })

    return (
        <div className={`header__basket basket ${!isHidden ? 'basket_visible' : ''}`}                
        onMouseLeave={(e)=>{
            // e.stopPropagation()
            setIsHidden(true)
        }}>
            <div className="basketWrap">
                {prodcutsInBasket.length > 0 ? 
                    (<div className="basketText">Оформить заказ</div>) : 
                    (<div className="basketText empty">Корзина пустая</div>)
                }
                <div className="basketIcon" style={{'backgroundImage': `url(${basketImage.src})`}}
                onMouseOver={(e)=>{
                    e.stopPropagation()
                    setIsHidden(false)
                }}
                ></div>
            </div>
            {prodcutsInBasket.length > 0 ? (
                <div className="basketInfoContainer">
                    {/* <div className="basketInfoItem">
                        <div className="basketInfoItem__imageBlock">
                            <Image src="/shop/shopItem1.jpg" fill></Image>
                        </div>

                        <div className="basketInfoItem__name">Климадон в капсулах 20 шт.</div>
                        <div className="basketInfoItem__count">3</div>
                    </div> */}

                    {prodcutsInBasket && prodcutsInBasket.slice(0).reverse().map((product) => (
                        <div className="basketInfoItem" key={product._id}>
                            <div className="basketInfoItem__imageBlock">
                                <Image src={product.image} alt="Alt" fill sizes="100%"></Image>
                            </div>

                            <div className="basketInfoItem__name">{product.name}</div>
                            <div className="basketInfoItem__count">3</div>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
        
    )
}