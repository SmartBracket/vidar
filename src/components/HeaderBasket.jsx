'use client'
import Link from "next/link"
import Image from "next/image"

import { useRouter } from "next/navigation"
import { useAppContext } from "@/components/AppContext"

import ShopChangeCountInBasket from '@/components/shop/ShopChangeCountInBasket'

import basketImage from '@/assets/imgs/basket.png'

import { useEffect, useState } from 'react'
import store from '@/core/redux/store'
import reducer from '@/lib/reducers/basket'
import { saveState } from '@/core/redux/localStorage'

export default function Header(){
    const [isHidden, setIsHidden] = useState(true)
    const [prodcutsInBasket, setProductsInBasket] = useState([])
    
    const router = useRouter()
    const AppContext = useAppContext()

    store.subscribe(()=>{
        // console.log(store.getState())
        saveState(store.getState())
        setProductsInBasket(store.getState().products)
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
            <div className="basketWrap">
                {prodcutsInBasket.length > 0 ? 
                    (<div className="basketText">Оформить заказ</div>) : 
                    (<div className="basketText empty">Корзина пустая</div>)
                }
                <div className="basketIcon" style={{'backgroundImage': `url(${basketImage.src})`}}></div>
            </div>

            {prodcutsInBasket.length > 0 ? (
                <div className="basketInfoContainer">
                    {prodcutsInBasket && prodcutsInBasket.slice(0).reverse().map((product) => (
                        <div className="basketInfoItem" key={product._id} onClick={()=>{
                            AppContext.setPopupIsVisible(true)
                            router.push(`/${product.slug}`, {scroll:false})
                        }}>
                            <div className="basketInfoItem__remove" title="Убрать из корзины" onClick={(e)=>{
                                e.stopPropagation()
                                store.dispatch(reducer.actions.productRemove(product._id))
                            }}></div>
                            <div className="basketInfoItem__imageBlock">
                                <Image src={product.image} alt="Alt" fill sizes="100%"></Image>
                            </div>

                            <div className="basketInfoItem__name">{product.name}</div>
                            <ShopChangeCountInBasket productData={product}/>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>  
    )
}