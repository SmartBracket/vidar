'use client'
import { motion, AnimatePresence } from 'framer-motion';
import {useAppContext} from '@/components/AppContext'
import AppLoader from '@/components/ui/AppLoader'

export default function PageWrapper({children}){
    const appIsLoading = useAppContext().appLoading
    return (
        <AnimatePresence mode='wait'>
        <div style={{position: 'relative', 'overflow':'hidden'}}>
            <motion.div className="app__page"
            initial={appIsLoading ? {x:-40,opacity: 0} : false}
            animate={appIsLoading ? {x:-40,opacity: 0} : {x:0,opacity: 1}}>
                {children}
            </motion.div>
            <AppLoader appIsLoading={appIsLoading} />
        </div>
        </AnimatePresence>
    )
}