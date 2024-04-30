import Image from "next/image"
import LinkWithTransition from "@/components/ui/LinkWithTransition"

export default function ArticlesList({articles}){
  const transformDate = (date)=>{
    return new Date(date).toLocaleDateString()
  }
  return (
        <div className="blogList">
            {articles.map((article, index) => (
                <LinkWithTransition href={`/blog/${article.slug}`} className="blogList__item" key={article._id}>
                  <div className="blogList__item__imageBlock">
                    <Image src={article.image}
                      alt={article.name} 
                      width={540} height={250} 
                      priority={index === 0 ? true : false}
                      sizes="(max-width: 768px) 40vw, 50vw"/>
                  </div>
                  <div className="blogList__item__infoBlock">
                    <div className="blogList__item__cat">{article.category}</div>
                    <div className="blogList__item__title">{article.name}</div>
                    <div className="blogList__item__published">
                      {transformDate(article.published)}
                    </div>
                  </div>
                </LinkWithTransition>
            ))}
        </div>
  )
}