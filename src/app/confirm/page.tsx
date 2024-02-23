'use client'
import '@/assets/styles/shop.scss'

// import { useRouter } from "next/navigation"
import { redirect } from 'next/navigation'

import BasketList from '@/components/shop/BasketList'
import BasketOrder from '@/components/shop/BasketOrder'

import store from '@/core/redux/store'

export default function ConfirmPage() {
    // const router = useRouter()
    // if(store.getState().products.length == 0) router.push('/')
    if(store.getState().products.length == 0) redirect('/')
    // store.subscribe(()=>{
    //     if(store.getState().products.length == 0) redirect('/')
    // })

    return (
        <main className="page confirm">
            <div className="container">
                <div className="confirmWrap">
                    <div className="confirmList">
                        <div className="confirmTitle">Ваш заказ</div>
                        <BasketList />
                    </div>
                    <BasketOrder />
                </div>
            </div>
        </main>
    )
}