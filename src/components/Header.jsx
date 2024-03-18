'use client'

import LinkWithTransition from "@/components/ui/LinkWithTransition"
import Image from "next/image"

// import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";

// import basketImage from '@/assets/imgs/basket.png'
import HeaderBasket from "@/components/HeaderBasket"

import {useAppContext} from '@/components/AppContext'

export default function Header(){
    const appContext = useAppContext()
    const [navMenuVisible, setNavMenuVisible] = useState(false)
    const path = usePathname()

    useEffect(()=>{
        let body = document.getElementsByTagName('body')[0]
        if(navMenuVisible){
            body.classList.add('frozen')
        }else{
            body.classList.remove('frozen')
        }
    },[navMenuVisible])

    useEffect(()=>{
        setNavMenuVisible(false)
    },[path])

    return (
        <header className="header">
            <div className="header__container container">
                <LinkWithTransition href="/" className="header__logoWrap">
                    <Image src='/logo.svg' alt="Аптека Vidar" width={45} height={45} className="header__logo" />
                </LinkWithTransition>

                <nav className={`header__menu ${navMenuVisible && !appContext.appLoading ? 'header__menu_visible' : ''}`}>
                        <span className="header__menu__mobileTitle">Аптека видар</span>
                        <LinkWithTransition className={path === '/' ? 'current' : ''} href="/">
                            Витрина 
                            <span className="currentIcon"></span>
                        </LinkWithTransition>
                        <LinkWithTransition  href="/blog" className={path === '/blog' ? 'current' : ''}>
                            Статьи
                            <span className="currentIcon"></span>
                        </LinkWithTransition>
                        <LinkWithTransition href="/contacts" className={path === '/contacts' ? 'current' : ''}>
                            Контакты
                            <span className="currentIcon"></span>
                        </LinkWithTransition>
                </nav>

                <HeaderBasket />

                <div className={`header__burger ${navMenuVisible ? 'header__burger_close' : ''}`}
                onClick={()=>{
                    setNavMenuVisible(!navMenuVisible)  
                }}>
                    <div className="header__burgerLine"></div>
                    <div className="header__burgerLine"></div>
                    <div className="header__burgerLine"></div>
                </div>
            </div>
        </header>
    )
}