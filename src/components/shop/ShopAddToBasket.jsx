'use client'

import { useState, useEffect } from "react"

import store from '@/core/redux/store'
import reducer from '@/lib/reducers/basket'

import { useAppContext } from '@/components/AppContext'

export default function ShopAddToBasket({productData}){
  const [totalNumber,setTotalNumber] = useState(1)
  const [windowWidth,setWindowWidth] = useState(0)

  const AppContext = useAppContext()

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWindowWidth(window.innerWidth)
    })
  }, [])

  if(!productData.inStock){
    return (<div className="shopAddToBasket notInStock">Нет в наличии</div>)
  }
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
        AppContext.addNotifications([...AppContext.notifications, `${productData.name} (${totalNumber}шт.) добавлено в корзину`])

        let dataToBasket = structuredClone(productData)
        dataToBasket.count = totalNumber
        if(store.getState().products.find(product => product._id == dataToBasket._id)){
          store.dispatch(reducer.actions.productAddCount(dataToBasket))
        }else{
          store.dispatch(reducer.actions.productAdded(dataToBasket))
        }
      }}>{windowWidth > 650 ? 'Добавить в корзину' : 'В корзину'}</div>
    </div>
  )
}