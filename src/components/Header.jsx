'use client'

import Link from "next/link"
import Image from "next/image"

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";

import basketImage from '@/assets/imgs/basket.png'
import HeaderBasket from "@/components/HeaderBasket"


export default function Header(){
    const [windowWidthState, setWindowWidthState] = useState(null)
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
        setWindowWidthState(window.innerWidth)
        // if(window.innerWidth < 650){ setIsHidden(false)  }
        window.addEventListener('resize', ()=>{
            setWindowWidthState(window.innerWidth)
        })
    }, [])

    useEffect(()=>{
        setNavMenuVisible(false)
    },[path])

    return (
        <header className="header">
            <div className="header__container container">
                <Link href="/" className="header__logoWrap">
                    <Image src='/logo.svg' alt="Аптека Vidar" width={45} height={45} className="header__logo" />
                </Link>
                {windowWidthState < 650 ? (
                    <motion.nav className={`header__menu ${navMenuVisible ? 'header__menu_visible' : ''}`}
                    initial={{opacity:0}}
                    animate={navMenuVisible ? {opacity: 1} : {opacity:0}}
                    transition={{ type: "linear", stiffness: 100 }}
                    >
                        <span className="header__menu__mobileTitle">Аптека видар</span>
                        <Link href="/">Витрина</Link>
                        <a href="#">Статьи</a>
                        <a href="#">Контакты</a>
                    </motion.nav>
                ) : (
                    <nav className={`header__menu`}>
                        <span className="header__menu__mobileTitle">Аптека видар</span>
                        <Link href="/">Витрина</Link>
                        <a href="#">Статьи</a>
                        <a href="#">Контакты</a>
                    </nav>
                )}

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