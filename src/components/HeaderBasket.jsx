'use client'
import Link from "next/link"

import basketImage from '@/assets/imgs/basket.png'
import { useEffect, useState } from 'react'

import store from '@/core/redux/store'

import BasketList from '@/components/shop/BasketList'

export default function Header(){
    const [isHidden, setIsHidden] = useState(true)
    const [prodcutsInBasket, setProductsInBasket] = useState([])

    store.subscribe(()=>{
        setProductsInBasket(store.getState().products)
        if(store.getState().products.length == 0) setIsHidden(true)
    })

    useEffect(()=>{
        if(store.getState().products.length){
            setProductsInBasket(store.getState().products)
        }
    }, [])

    return (
        <div className={`header__basket basket ${!isHidden ? 'basket_visible' : ''}`}    
        onMouseEnter={(e)=>{
            e.stopPropagation()
            setIsHidden(false)
        }}            
        onMouseLeave={(e)=>{
            setIsHidden(true)
        }}>
            {prodcutsInBasket.length > 0 ? 
                (
                    <Link className="basketWrap" href="/confirm">
                        <div className="basketText">Оформить заказ</div>
                        <div className="basketIcon" style={{'backgroundImage': `url(${basketImage.src})`}}></div>
                    </Link>
                ) : 
                (
                    <div className="basketWrap empty">
                        <div className="basketText">Корзина пустая</div>
                        <div className="basketIcon" style={{'backgroundImage': `url(${basketImage.src})`}}></div>
                    </div>
                )
            }

            { prodcutsInBasket.length > 0 && (<div className="basketInfoContainer"> <BasketList prodcuts={prodcutsInBasket} /> </div>)}
        </div>  
    )
}