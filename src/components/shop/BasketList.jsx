'use client'
import Image from "next/image"

import { useRouter } from "next/navigation"
import { useAppContext } from "@/components/AppContext"

import { useEffect, useState } from 'react'

import ShopChangeCountInBasket from '@/components/shop/ShopChangeCountInBasket'


import store from '@/core/redux/store'
import reducer from '@/lib/reducers/basket'
import { saveState } from '@/core/redux/localStorage'


export default function BasketList(){ 
    const router = useRouter()
    const AppContext = useAppContext()

    const [prodcutsInBasket, setProductsInBasket] = useState([])
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

    let totalSum = prodcutsInBasket.reduce((sum, product)=>sum += product.price * product.count, 0)

    let openProduct = (productSlug) =>{
        AppContext.setPopupIsVisible(true)
        router.push(`/products/${productSlug}`, {scroll:false})
    }

    return (   
        <div className="basketList">
            <div className="basketListWrap">
                {prodcutsInBasket && prodcutsInBasket.slice(0).reverse().map((product) => (
                    <div className="basketListItem" key={product._id}>
                        <div className="basketListItem__remove" title="Убрать из корзины" onClick={(e)=>{
                            e.stopPropagation()
                            store.dispatch(reducer.actions.productRemove(product._id))
                        }}></div>
                        <div className="basketListItem__imageBlock" onClick={()=>{openProduct(product.slug)}}>
                            <Image src={product.image} alt="Alt" fill sizes="100%"></Image>
                        </div>
                        <div className="basketListItem__name" onClick={()=>{openProduct(product.slug)}}>
                            {product.name}
                            <div className="basketListItem__price">{Number(product.price) * product.count}&#8381; ({Number(product.price)}&#8381; за шт.)</div>
                        </div>
                        <ShopChangeCountInBasket productData={product}/>
                    </div>
                ))}
            </div>
            <div className="basketList__total">Общая сумма заказа - {totalSum}&#8381;</div>
        </div>         
    )
}