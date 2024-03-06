'use client'
import Image from "next/image"

// import { useRouter } from "next/navigation"
import LinkWithTransition from "@/components/ui/LinkWithTransition"

import { useAppContext } from "@/components/AppContext"

import { useEffect, useState } from 'react'

import ShopChangeCountInBasket from '@/components/shop/ShopChangeCountInBasket'


import store from '@/core/redux/store'
import reducer from '@/lib/reducers/basket'
import { saveState } from '@/core/redux/localStorage'


export default function BasketList(){ 
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


    return (   
        <div className="basketList">
            <div className="basketListWrap">
                {prodcutsInBasket && prodcutsInBasket.slice(0).reverse().map((product) => (
                    <div className="basketListItem" key={product._id}>
                        <div className="basketListItem__remove" title="Убрать из корзины" onClick={(e)=>{
                            e.stopPropagation()
                            store.dispatch(reducer.actions.productRemove(product._id))
                        }}></div>
                        <LinkWithTransition className="basketListItem__imageBlock" href={`/products/${product.slug}`}>
                            <Image src={product.image} alt="Alt" fill sizes="100%"></Image>
                        </LinkWithTransition>
                        <LinkWithTransition className="basketListItem__name" href={`/products/${product.slug}`}>
                            {product.name}
                            <div className="basketListItem__price">{Number(product.price) * product.count}&#8381; ({Number(product.price)}&#8381; за шт.)</div>
                        </LinkWithTransition>
                        <ShopChangeCountInBasket productData={product}/>
                    </div>
                ))}
            </div>
            <div className="basketList__total">Общая сумма заказа - {totalSum}&#8381;</div>
        </div>         
    )
}