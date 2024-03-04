'use client'
import Image from "next/image"

import { useRouter } from "next/navigation"
import { useAppContext } from "@/components/AppContext"

import { useEffect, useState } from 'react'

import ShopChangeCountInBasket from '@/components/shop/ShopChangeCountInBasket'


import store from '@/core/redux/store'
import reducer from '@/lib/reducers/basket'
import { saveState } from '@/core/redux/localStorage'

export default function BasketOrder(){ 
    const router = useRouter()
    const AppContext = useAppContext()
    const [prodcutsInBasket, setProductsInBasket] = useState([])
    store.subscribe(()=>{
        setProductsInBasket(store.getState().products)
    })
    useEffect(()=>{
        setProductsInBasket(store.getState().products)
    }, [])

    let totalSum = prodcutsInBasket.reduce((sum, product)=>sum += product.price * product.count, 0)

    return (            
       <div className="basketOrder">
            <div className="basketOrder__title">Оформление заказа</div>
            <form className="basketOrderForm" 
            onSubmit={(e)=>{
                e.preventDefault()

                const form = event.target;
                const formFields = form.elements;
                const name = formFields.name.value;
                const mail = formFields.mail.value;
                const tel = formFields.tel.value;
                const adres = formFields.adres.value;
                const ship = formFields.ship.value;

                let message = "🗳Новый заказ!🗳%0A"
                if(name){
                    message += `%0AИмя: ${name}`
                }
                if(mail){
                    message += `%0AПочта: ${mail}`
                }
                message += `%0AТелефон: ${tel}"%0AАдрес: ${adres}%0A%0A`
                message += `Состав заказа:%0A`
                prodcutsInBasket.map((product, index) => {
                    message += `${index + 1}. ${product.name} (${product.count}шт.)%0A`
                })
                message += `%0AМетод доставки: ${ship}`
                message += `%0AСумма заказа: ${totalSum}`

                fetch("https://api.telegram.org/bot6929941129:AAFtNiKadNBExP7jC-eu26_NzHCLJyskRHo/sendMessage?chat_id=-1002063583305&text=" + message)

                router.push(`/`, {scroll:false})
                AppContext.addNotifications([...AppContext.notifications, `Заказ успешно сформирован. Оператор свяжется с вами в ближайшее время.`])
                store.dispatch(reducer.actions.clearBasket())
            }}>
                <input type="text" name="name" placeholder="Имя"/>
                <input type="email" name="mail" placeholder="Email"/>
                <input type="tel" name="tel" placeholder="Номер телефона *" required/>
                <input type="text" name="adres" placeholder="Адрес доставки *" required/>
                <select name="ship" required>
                    <option value="">Метод доставки</option>
                    <option value="Выкуп с аптеки">Выкуп с аптеки</option>
                    <option value="Доставка курьером">Доставка курьером</option>
                </select>

                
                <button type="submit" className="basketOrderForm__submit">Подтвердить</button>
            </form>
       </div>
    )
}