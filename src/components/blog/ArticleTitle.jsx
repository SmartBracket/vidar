'use client'

import LinkWithTransition from "@/components/ui/LinkWithTransition"

import { useEffect, useState } from "react"
import { motion } from 'framer-motion';

export default function ArticleTitle({articleData}){
    let [currentScroll, setCurrentScroll] = useState(null)

    let onScroll = ()=>{
        setCurrentScroll(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll',  onScroll)

        return ()=>{ window.removeEventListener('scroll',  onScroll) }
    })
    return (
        <div className="article__titleWrap">
            <motion.div className="article__titleWrap__bg"
                animate={currentScroll ? {y: currentScroll / 3.4} : {y: 0}} 
                transition={{
                    y: { duration: 0 }
                }}>
            </motion.div>

            <motion.div className="article__titleWrap__container" 
                // animate={currentScroll ? {y: currentScroll / 3} : {y: 0}} 
                // transition={{
                //     y: { duration: 0.4 }
                // }}
                >
                <div className="article__titleWrap__breads breads">
                    <LinkWithTransition href="/blog" className="breads__item">Блог</LinkWithTransition>
                    <div className="breads__item">{articleData.title}</div>
                </div>
                <h1 className="articleTitle">
                    {articleData.title}
                </h1>
                <div className="article__titleWrap__info">
                    <div className="article__titleWrap__info__date">{new Date(articleData.published).toLocaleDateString()}</div>
                </div>
            </motion.div>
        </div>
    )
}