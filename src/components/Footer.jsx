import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer__container container">
                <Link href="/" className="footer__logoWrap">
                    <Image src='/logo.svg' alt="Аптека Vidar" width={70} height={70} className="footer__logo" />
                </Link>
                <nav className="footerPart">
                    <div className="footerPart__title">Навигация</div>
                    <Link href="/" className="footerPart__item">Главная</Link>
                    <Link href="#" className="footerPart__item">Медицинские статьи</Link>
                    <Link href="#" className="footerPart__item">Наши контакты</Link>
                </nav>
                <nav className="footerPart">
                    <div className="footerPart__title">Категории товаров</div>
                    <Link href="#" className="footerPart__item">Для детей</Link>
                    <Link href="#" className="footerPart__item">Обезбаливающее</Link>
                    <Link href="#" className="footerPart__item">От простуды</Link>
                    <Link href="#" className="footerPart__item">Для детей</Link>
                    <Link href="#" className="footerPart__item">Обезбаливающее</Link>
                    <Link href="#" className="footerPart__item">От простуды</Link>
                </nav>
                <nav className="footerPart">
                    <div className="footerPart__title">Рубрики для чтения</div>
                    <Link href="#" className="footerPart__item">Здоровый образ</Link>
                    <Link href="#" className="footerPart__item">Как лучше</Link>
                    <Link href="#" className="footerPart__item">Что принимать</Link>
                </nav>
            </div>
        </footer>
    )
}