'use client'
import { motion, AnimatePresence } from 'framer-motion';

export default function AppLoader({appIsLoading}){
    return (
        <motion.div className="app__loaderScreen"
        initial={false}
        animate={appIsLoading ? {opacity: 1} : {opacity: 0}}
        transition={{
            opacity: { duration: appIsLoading ? 0 : 0.5 }
          }}>
            <div className="app__loaderSpiner"></div>
        </motion.div>
    )
}