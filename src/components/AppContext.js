'use client'
import { createContext, useContext, useEffect } from 'react';
import { useState } from "react"

const AppContext = createContext();

export function AppContextWrapper({ children }) {
    const [popupIsvisible, setPopupIsVisible] = useState(false)

    
    useEffect(()=>{
      if(popupIsvisible)  document.body.classList.add('frozen')
      if(!popupIsvisible)  document.body.classList.remove('frozen')
    }, [popupIsvisible])

    return (
      <AppContext.Provider value={{'popupIsvisible':popupIsvisible, 'setPopupIsVisible':setPopupIsVisible}}>
            {children}
      </AppContext.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContext);
}