'use client'
import Link from "next/link"
import Image from "next/image"

import { useRouter } from "next/navigation"

export default function AdminProductItem({article}){
    const router = useRouter()
    return (
    <div  className="adminArticle">
        <Link href={`/blog/${article.slug}`} target="_blank" className="adminArticle__imageBlock"><Image src={article.image} alt={article.name} width={300} height={150}/></Link>
        <Link href={`/blog/${article.slug}`} target="_blank" className="adminArticle__name">{article.name}</Link>
        <div className="adminArticle__cat">{article.category}</div>
        <Link href={`/vidar_admin/blog/edit?type=edit&slug=${article.slug}&id=${article._id}`}  className="adminArticle__edit" title="Редактировать"></Link>
        <div className="adminArticle__delete"  title="Удалить" onClick={async (e)=>{
            e.stopPropagation()
            // alert('z')
            await fetch(`/api/blog/delete`, {
                method: "POST",
                body: JSON.stringify({id: article._id})
            })
            window.location.reload()
        }}></div>
    </div>
    )
}