'use client'
import { createContext, useContext, useEffect } from 'react';
import { useState } from "react"

import Notification from '@/components/ui/Notification'

const AppContext = createContext();

export function AppContextWrapper({ children }) {
    const [notifications, addNotifications] = useState([])

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

    return (
      <AppContext.Provider value={{
        'notifications' : notifications, 
        'addNotifications' : addNotifications}}>
          <Notification notificationsList={notifications} />
          {children}
      </AppContext.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContext);
}