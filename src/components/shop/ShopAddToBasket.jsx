'use client'

import { useState, useEffect } from "react"

import store from '@/core/redux/store'
import reducer from '@/lib/reducers/basket'

export default function ShopAddToBasket({productData}){
  const [totalNumber,setTotalNumber] = useState(1)

  return (
    <div className="shopAddToBasket" onClick={(e)=>{
      e.stopPropagation()
    }}>
      <div className="shopAddToBasket__counter">
        <div className="shopAddToBasket__countIncr" onClick={()=>{
          if(totalNumber > 1) setTotalNumber(totalNumber - 1)
        }}>-</div>
        <input type="number" className="shopAddToBasket__input" placeholder={totalNumber} min="1" />
        <div className="shopAddToBasket__countAdd" onClick={()=>{
          setTotalNumber(totalNumber + 1)
        }}>+</div>
      </div>
      <div className="shopAddToBasket__button" onClick={()=>{
        store.dispatch(reducer.actions.productAdded(productData))
        // console.log(store.getState())
      }}>Добавить в корзину</div>
    </div>
  )
}