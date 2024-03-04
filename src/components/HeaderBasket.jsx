'use client'
import Link from "next/link"

import basketImage from '@/assets/imgs/basket.png'

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react'

import store from '@/core/redux/store'

import BasketList from '@/components/shop/BasketList'

export default function Header(){
    const [isHidden, setIsHidden] = useState(true)
    const [prodcutsInBasket, setProductsInBasket] = useState([])
    const [windowWidthState, setWindowWidthState] = useState(null)

    store.subscribe(()=>{
        setProductsInBasket(store.getState().products)
        if(store.getState().products.length == 0) setIsHidden(true)
    })

    useEffect(()=>{
        if(store.getState().products.length){
            setProductsInBasket(store.getState().products)
        }
    }, [])
    useEffect(()=>{
        setWindowWidthState(window.innerWidth)
        // if(window.innerWidth < 650){ setIsHidden(false)  }
        window.addEventListener('resize', ()=>{
            setWindowWidthState(window.innerWidth)
        })
    }, [])
    

    return (
        <div className={
            `header__basket basket 
            ${!isHidden && ( windowWidthState && windowWidthState > 650) ? 'basket_visible' : ''} 
            ${windowWidthState && windowWidthState < 650 ? 'basket_visible' : ''}`
        }    
        onMouseEnter={(e)=>{
            if(windowWidthState > 650){
                e.stopPropagation()
                setIsHidden(false)
            }
        }}            
        onMouseLeave={(e)=>{
            if(windowWidthState > 650){
                setIsHidden(true)
            }
        }}>
            {prodcutsInBasket.length > 0 ? 
                (
                    <Link className="basketWrap" href="/confirm">
                        <div className="basketText">{windowWidthState && windowWidthState < 650 ? 'Перейти в корзину' : 'Оформить заказ'}</div>
                        <div className="basketIcon" style={{'backgroundImage': `url(${basketImage.src})`}}></div>
                    </Link>
                ) : 
                (
                    <div className="basketWrap empty">
                        <motion.div 
                        initial={{opacity: 0, x: 15}}
                        animate={isHidden && windowWidthState && windowWidthState > 650 ? {opacity: 0, x: 15} : {opacity: 1, x: -5}}
                        className="basketText">Корзина пустая</motion.div>
                        
                        <div className="basketIcon" style={{'backgroundImage': `url(${basketImage.src})`}}></div>
                    </div>
                )
            }

            { windowWidthState > 650 && prodcutsInBasket.length > 0 && (
                <motion.div className="basketInfoContainer"
                initial={{opacity:0}}
                animate={!isHidden ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
                transition='linear'
                > 
                    <BasketList prodcuts={prodcutsInBasket} /> 
                </motion.div>
            )}
        </div>  
    )
}