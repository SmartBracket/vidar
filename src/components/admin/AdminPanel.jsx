'use client'
import '@/assets/styles/admin.scss'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react'

export default function AdminPanel({children}){
    const currentPage = usePathname();
    return (
        <div className='page admin'>
            <div className="container">
                <h1 className="pageTitle admin__title">
                    Панель управления
                    <div className="admin__logout" onClick={()=>{signOut()}}>Выйти</div>
                </h1>
                {currentPage === '/vidar_admin/products' || currentPage === '/vidar_admin/blog' ? (
                    <div className='admin__typeTab'>
                        <Link href="/vidar_admin/products" className={`admin__typeTab__item ${currentPage === '/vidar_admin/products' && 'admin__typeTab__item_current'}`}>Товары</Link>
                        <Link href="/vidar_admin/blog" className={`admin__typeTab__item ${currentPage === '/vidar_admin/blog' && 'admin__typeTab__item_current'}`}>Статьи</Link>
                    </div>
                ) : null}

                <div className="admin__wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}