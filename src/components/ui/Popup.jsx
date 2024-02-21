'use client'
import { useRouter } from "next/navigation"
import { useAppContext } from "@/components/AppContext"

export default function Popup({children}){
    const router = useRouter()
    const AppContext = useAppContext()
    const popupIsVisible = AppContext.popupIsvisible

    return (
        <div 
        className={`popup ${!popupIsVisible ? 'popup_hidden' : ''}`} 
        onClick={()=>{
            AppContext.setPopupIsVisible(false)
            setTimeout(()=>{
                router.back()
            }, 400)
        }}>
            {children}
        </div>
    )
}