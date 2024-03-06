'use client'
import {changingToAnotherRoute} from '@/lib/app/actions'
import Link from "next/link"
import {useAppContext} from '@/components/AppContext'


export default function LinkWithTransition(props){
    const appContext = useAppContext()
    return (
        <Link {...props} onClick={(e)=>{
            if(changingToAnotherRoute(e)){
                // window.scrollTo(0, 0)
                appContext.setAppLoading(true)
            }else{
                e.preventDefault()
            }
        }}>{props.children}</Link>
    )
}