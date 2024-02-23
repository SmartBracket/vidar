'use client'

import { useState, useEffect } from "react"

import store from '@/core/redux/store'
import reducer from '@/lib/reducers/basket'

export default function ShopChangeCountInBasket({productData}){
  // const [totalNumber,setTotalNumber] = useState(productData.count)
  return (
    <div className="shopChangeBasketCount">
      <div className="shopChangeBasketCount__decr" onClick={(e)=>{
          e.stopPropagation()
          if(productData.count > 1) {
            let dataToBasket = structuredClone(productData)
            store.dispatch(reducer.actions.productRemoveCount(dataToBasket))
          }
        }}>-</div>
      <input type="number" className="shopChangeBasketCount__number" value={productData.count} min="1" max="9999"
      onClick={(e)=>{
        e.stopPropagation()
      }}
      onChange={(e)=>{
          e.stopPropagation()
          let dataToBasket = structuredClone(productData)
          dataToBasket.count = Number(e.target.value)
          store.dispatch(reducer.actions.productChangeCount(dataToBasket))
        }}/>
      <div className="shopChangeBasketCount__add" onClick={(e)=>{
          e.stopPropagation()
          let dataToBasket = structuredClone(productData)
          dataToBasket.count = Number(1)
          store.dispatch(reducer.actions.productAddCount(dataToBasket))
        }}>+</div>
    </div>
  )
}