'use client'
import { createContext, useContext, useEffect } from 'react';
import { useState } from "react"

import { usePathname, useSearchParams } from 'next/navigation'

import Notification from '@/components/ui/Notification'

import { motion, AnimatePresence } from 'framer-motion';

import { Suspense } from 'react';

const AppContext = createContext();

export function AppContextWrapper({ children }) {
    const pathname = usePathname()


    const [notifications, addNotifications] = useState([])
    const [appLoading, setAppLoading] = useState(false)

    // useEffect(()=>{
    //   console.log(notifications)
    // }, [notifications])
    useEffect(() => {
      let lastIndex = notifications.length - 1
      const timer = setTimeout(() => {
        addNotifications(arr => arr.filter((_, index) => index !== lastIndex)) // *
      }, 2000);
    
      return () => clearTimeout(timer);
    }, [notifications]);


    useEffect(() => {
      // const url = `${pathname}?${searchParams}`
      // console.log(url)
      setTimeout(() => {
          // document.getElementById('app').classList.remove('app_loading')
          setAppLoading(false)
      }, 500);
    }, [pathname])

    return (
        <AnimatePresence mode='wait'>
        <AppContext.Provider value={{
          'notifications' : notifications, 
          'addNotifications' : addNotifications,
          'appLoading':appLoading,
          'setAppLoading':setAppLoading}}>
            <div id="app">
                <Notification notificationsList={notifications} />
                {children}
            </div>
        </AppContext.Provider>
        </AnimatePresence>
    );
}
export function useAppContext() {
    return useContext(AppContext);
}