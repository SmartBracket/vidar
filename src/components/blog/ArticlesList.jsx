import Image from "next/image"
import LinkWithTransition from "@/components/ui/LinkWithTransition"

// import { signIn, signOut, useSession } from 'next-auth/react'

export default function ArticlesList({articles}){
  // const { data: session } = useSession()
  const transformDate = (date)=>{
    return new Date(date).toLocaleDateString()
  }
  return (
        <div className="blogList">
          {/* {session && (<div className="blogList__item listItemAdd">
              <div className="listItemAdd__icon"></div>
              <div className="listItemAdd__title">Добавить пост</div>
          </div>)} */}
            {articles.map((article, index) => (
                <LinkWithTransition href={`/blog/${article.slug}`} className="blogList__item" key={article._id}>
                  <div className="blogList__item__imageBlock">
                    <Image src={article.image}
                      alt={article.title} width={540} height={250} priority={index === 0 ? true : false}/>
                  </div>
                  <div className="blogList__item__infoBlock">
                    <div className="blogList__item__cat">{article.category}</div>
                    <div className="blogList__item__title">{article.title}</div>
                    <div className="blogList__item__published">
                      {transformDate(article.published)}
                    </div>
                  </div>
                </LinkWithTransition>
            ))}
        </div>
  )
}