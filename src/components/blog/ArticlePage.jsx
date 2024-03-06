'use client'

import Image from 'next/image'

export default function ArticlePage({ article }){
    return (
        <main className="page article">
            <div className="article__titleWrap">
                <div className="article__titleWrap__bg"></div>
                <div className="container">
                    <h1 className="articleTitle">{article.title}</h1>
                </div>
            </div>
            
            <div className="articleContent">
                <div className="container" dangerouslySetInnerHTML={{ __html: article.content }}>

                </div>
            </div>
        </main>
    )
}