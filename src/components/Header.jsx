'use client'

import LinkWithTransition from "@/components/ui/LinkWithTransition"
import Image from "next/image"

// import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation";

import basketImage from '@/assets/imgs/basket.png'
import HeaderBasket from "@/components/HeaderBasket"

import {useAppContext} from '@/components/AppContext'

import { signIn, signOut, useSession } from 'next-auth/react'


export default function Header(){
    const appContext = useAppContext()
    const [windowWidthState, setWindowWidthState] = useState(null)
    const [navMenuVisible, setNavMenuVisible] = useState(false)
    const path = usePathname()
    const router = useRouter()

    const { data: session } = useSession()

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
                <LinkWithTransition href="/" className="header__logoWrap">
                    <Image src='/logo.svg' alt="Аптека Vidar" width={45} height={45} className="header__logo" />
                </LinkWithTransition>
                {/* {windowWidthState < 650 ? (
                    <motion.nav className={`header__menu ${navMenuVisible ? 'header__menu_visible' : ''}`}
                    initial={{opacity:0}}
                    animate={navMenuVisible ? {opacity: 1} : {opacity:0}}
                    transition={{ type: "linear", stiffness: 100 }}
                    >
                        <span className="header__menu__mobileTitle">Аптека видар</span>
                        <LinkWithTransition href="/">Витрина</LinkWithTransition>
                        <LinkWithTransition href="/blog">Статьи</LinkWithTransition>
                        <LinkWithTransition href="/">Контакты</LinkWithTransition>
                    </motion.nav>
                ) : (
                    <nav className={`header__menu `}>
                        <span className="header__menu__mobileTitle">Аптека видар</span>
                        <LinkWithTransition href="/">Витрина</LinkWithTransition>
                        <LinkWithTransition href="/blog">Статьи</LinkWithTransition>
                        <LinkWithTransition href="/">Контакты</LinkWithTransition>
                    </nav>
                )} */}
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
                        <LinkWithTransition href="/" className={path === '/contacts' ? 'current' : ''}>
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

                {session && (<div style={{'cursor':'pointer', 'marginLeft': '10px'}} onClick={()=>{
                    signOut()
                    // router.refresh()
                }}>Выход</div>)}
                {!session && (<LinkWithTransition href="/vidar_login">Вход</LinkWithTransition>)}
                
            </div>
        </header>
    )
}