'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const variants = {
    out: {
      opacity: 0,
    //   y: 40,
      transition: {
        duration: 0.75,
        delay: 1
      }
    },
    in: {
        opacity: 1,
        // y: 0,
        transition: {
          duration: 0.75,
          delay: 0.5
        }
      }    
};

const PageTransition = ({ children }) => {
    const path = usePathname();
    // console.log(path)
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [path])
    return (    
        <>
            {/* <AnimatePresence mode="wait" initial={false}> */}
            <div style={{overflow:'hidden'}}>
                <motion.div
                    // layout
                    key={path}
                    // variants={variants}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0}}
                    exit={{ opacity: 0, y: 50}}
                    >
                    {children}
                </motion.div>
            </div>
            {/* </AnimatePresence> */}
        </> 
    );
};

export default PageTransition;