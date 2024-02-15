import Link from "next/link"
import Image from "next/image"

import basketImage from '@/assets/imgs/basket.png'
import HeaderBasket from "@/components/HeaderBasket"

export default function Header(){
    return (
        <header className="header">
            <div className="header__container container">
                <Link href="/" className="header__logoWrap">
                    <Image src='logo.svg' alt="Аптека Vidar" width={45} height={45} className="header__logo" />
                </Link>
                <nav className="header__menu">
                    <a href="/">Витрина</a>
                    <a href="#">Медицинские статьи</a>
                    <a href="#">Контакты</a>
                </nav>
                <HeaderBasket />
            </div>
        </header>
    )
}