'use client'
import { createContext, useContext, useEffect } from 'react';
import { useState } from "react"

import Notification from '@/components/ui/Notification'

const AppContext = createContext();

export function AppContextWrapper({ children }) {
    const [popupIsvisible, setPopupIsVisible] = useState(false)
    const [notifications, addNotifications] = useState([])

    
    useEffect(()=>{
      if(popupIsvisible)  document.body.classList.add('frozen')
      if(!popupIsvisible)  document.body.classList.remove('frozen')
    }, [popupIsvisible])

    // useEffect(()=>{
    //   console.log(notifications)
    // }, [notifications])

    return (
      <AppContext.Provider value={{
        'popupIsvisible':popupIsvisible, 
        'setPopupIsVisible':setPopupIsVisible, 
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