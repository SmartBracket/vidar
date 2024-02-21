'use client'

import { useEffect, useRef, useState } from "react"

export default function NotificationItem({data}){
    const item = useRef()
    useEffect(()=>{
        item.current.classList.add('notifications__item_shown')
        setTimeout(()=>{
            item.current.classList.add('notifications__item_hidden')      
        }, 2000)
        setTimeout(()=>{
            item.current.remove()
        }, 2500)

    }, [])

    return <div ref={item} className={`notifications__item`}>{data}</div>
}