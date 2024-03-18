'use client'
import Image from "next/image"

import { signIn } from 'next-auth/react'
import '@/assets/styles/login.scss'
import { useState } from 'react'

import { useRouter } from 'next/navigation'

export default function LoginPage(){
    const [error, setError] = useState('')
    const [formFields,setFormFields] = useState({username: 'vidar_adm', password: '12345'})
    const router = useRouter()
    // const params = useSearchParams()

    return (
    <div className='page login'>
        <div className="container login__container">
            <div className='loginForm'>
                <Image src='/logo.svg' alt="Аптека Vidar" width={45} height={45} className="loginForm__logo" />
                <div className="loginForm__item">
                    <label htmlFor="loginForm__login" className="loginForm__itemLabel">Логин:</label>
                    <input name="username"
                    className="loginForm__itemInput" 
                    onChange={(e)=>{
                       setFormFields({...formFields, username: e.currentTarget.value}) 
                    }} id="loginForm__login" type="text" value={formFields.username}/>
                </div>

                <div className="loginForm__item">
                    <label htmlFor="loginForm__password" className="loginForm__itemLabel">Пароль:</label>
                    <input name="password"
                    className="loginForm__itemInput" 
                    onChange={(e)=>{
                       setFormFields({...formFields, password: e.currentTarget.value}) 
                    }} id="loginForm__password" type="password"  value={formFields.password}/>
                </div>

                <button type="submit" 
                className="loginForm__submit" 
                onClick={async ()=>{
                        const sign = await signIn('credentials', {redirect: false, ...formFields})
                        if(sign.status === 200){
                            // router.push("/")
                            router.refresh()
                        }else{
                            setError('Неправильно введённые данные')
                        }
                }}>Войти</button>

                {error && (<div className='loginForm__error'>{error}</div>)}
            </div>
        </div>
    </div>
    )
}