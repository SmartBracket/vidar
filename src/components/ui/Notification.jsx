'use client'
import { motion, AnimatePresence } from 'framer-motion';


export default function Notification({notificationsList}){

    return (
        <div className="container">
            <div className="notifications">
                <AnimatePresence>
                    {notificationsList.map((item, index) => (
                        <motion.div
                        className={`notifications__item`}
                        key={index}
                        initial={{opacity:0,x:40}}
                        animate={{opacity:1,x:0}}
                        exit={{opacity:0,x:-40}}
                        transition={{ ease: "linear", duration: 0.2 }}>
                            {item}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}