'use client'
import Link from "next/link"
import Image from "next/image"

import { useRouter } from "next/navigation"

export default function AdminProductItem({product}){
    const router = useRouter()
    return (
    <div  className="adminProduct">
        <Link href={`/products/${product.slug}`} target="_blank" className="adminProduct__imageBlock"><Image src={product.image} alt={product.name} width={60} height={60}/></Link>
        <Link href={`/products/${product.slug}`} target="_blank" className="adminProduct__name">{product.name}</Link>
        <div className="adminProduct__cat">{product.category}</div>
        <div className="adminProduct__price">{product.price} руб</div>
        {product.inStock ? (<div className="adminProduct__stoke">В наличии</div>) : (<div className="adminProduct__stoke">Нет в наличии</div>)}
        <Link href={`/vidar_admin/products/edit?type=edit&slug=${product.slug}&id=${product._id}`}  className="adminProduct__edit" title="Редактировать"></Link>
        <div className="adminProduct__delete"  title="Удалить" onClick={async (e)=>{
            e.stopPropagation()
            // alert('z')
            await fetch(`/api/products/delete`, {
                method: "POST",
                body: JSON.stringify({id: product._id})
            })
            window.location.reload()
        }}></div>
    </div>
    )
}  