import LinkWithTransition from "@/components/ui/LinkWithTransition"
import Link from "next/link"
import Image from "next/image"

import { getShopCats } from '@/lib/shop/queries'

export default async function Footer(){
    const catList = await getShopCats()
    // console.log(catList)
    return (
        <footer className="footer">
            <div className="footer__container container">
                <LinkWithTransition href="/" className="footer__logoWrap">
                    <Image src='/logo.svg' alt="Аптека Vidar" width={70} height={70} className="footer__logo" />
                </LinkWithTransition>
                <nav className="footerPart">
                    <div className="footerPart__title">Навигация</div>
                    <LinkWithTransition href="/" className="footerPart__item">Главная</LinkWithTransition>
                    <LinkWithTransition href="/blog" className="footerPart__item">Медицинские статьи</LinkWithTransition>
                    <LinkWithTransition href="#" className="footerPart__item">Наши контакты</LinkWithTransition>
                </nav>
                <nav className="footerPart">
                    <div className="footerPart__title">Категории товаров</div>
                    {catList.map(cat => (<Link href={`/?category=${cat._id}`} key={cat._id} className="footerPart__item">{cat._id}</Link>))}
                </nav>
                {/* <nav className="footerPart">
                    <div className="footerPart__title">Рубрики для чтения</div>
                    <LinkWithTransition href="#" className="footerPart__item">Здоровый образ</LinkWithTransition>
                    <LinkWithTransition href="#" className="footerPart__item">Как лучше</LinkWithTransition>
                    <LinkWithTransition href="#" className="footerPart__item">Что принимать</LinkWithTransition>
                </nav> */}
            </div>
        </footer>
    )
}