'use client'
import { useSearchParams } from 'next/navigation'
import TinyEditor from '@/components/admin/TinyEditor'
import slugify from 'slugify'


import { useRouter } from "next/navigation"
import { useState } from 'react'

export default function AdminProductEditPage({serverData}){
    // const createNew = params.get('type') == 'new' ? true : false

    const params = useSearchParams()
    const router = useRouter()

    const taxonomy = serverData.taxonomy

    const [pageDisabled, setPageDisabled] = useState(false)

    let pageState = {}
    if(serverData.type === 'new'){
        pageState = taxonomy == 'product' ? {
            name : 'Товар 1',
            slug : 'tovar_1',
            category : 'Категория 1',
            image : 'https://res.cloudinary.com/dbrbbtckh/image/upload/v1714404310/products/shopItem1_q2z0rn.jpg',
            price : '500',
            inStock : true,
            about : '<p>Контент</p>',
            description : 'Описание товара',
            published : new Date(),
            updated : new Date(),
        } : {
            name : 'Статья 1',
            slug : 'article_1',
            category : 'Категория 1',
            image : 'https://res.cloudinary.com/dbrbbtckh/image/upload/v1714405423/articles/statiya_3_mhsdst.jpg',
            about : '<p>Контент</p>',
            description : 'Мета описание',
            published : new Date(),
            updated : new Date(),  
        }
    }else{
        pageState = taxonomy == 'product' ? {
            _id : serverData.productData._id,
            name : serverData.productData.name,
            slug : serverData.productData.slug,
            category : serverData.productData.category,
            image : serverData.productData.image,
            price : serverData.productData.price,
            inStock : serverData.productData.inStock ,
            about : serverData.productData.about,
            description : serverData.productData.description,
            published : new Date(serverData.productData.published),
            updated : new Date(serverData.productData.updated),
        } : {
            _id : serverData.productData._id,
            name : serverData.productData.name,
            slug : serverData.productData.slug,
            category : serverData.productData.category,
            image : serverData.productData.image,
            about : serverData.productData.about,
            description : serverData.productData.description,
            published : new Date(serverData.productData.published),
            updated : new Date(serverData.productData.updated),
        }
    }

    const [pageData, setPageData] = useState(pageState)

    const submitFunction = async () => {
        switch(serverData.taxonomy){
            case 'product':
                if(!pageData.image || !pageData.name || !pageData.slug || !pageData.category || !pageData.price || !pageData.about || !pageData.description){
                    alert('Заполните все поля')
                    return
                }
                break
            case 'article' :
                if(!pageData.image || !pageData.name || !pageData.slug || !pageData.category || !pageData.about || !pageData.description){
                    alert('Заполните все поля')
                    return
                }
                break
        }

        setPageDisabled(true)
        const body = new FormData();
        Object.keys(pageData).forEach(key => body.append(key, pageData[key]));

        switch(serverData.taxonomy){
            case 'product':
                if(serverData.type === 'new'){
                    const response = await fetch("/api/products/new", {
                        method: "POST",
                        body
                    }).then(()=>{
                        window.location.href = '/vidar_admin/products'
                        setPageDisabled(false)
                    })
                }else{
                    const response = await fetch("/api/products/edit", {
                        method: "POST",
                        body
                    }).then(()=>{
                        window.location.href = '/vidar_admin/products'
                        setPageDisabled(false)
                    })
                }
                break
            case 'article' :
                if(serverData.type === 'new'){
                    const response = await fetch("/api/blog/new", {
                        method: "POST",
                        body
                    }).then(()=>{
                        window.location.href = '/vidar_admin/blog'
                        setPageDisabled(false)
                    })
                }else{
                    const response = await fetch("/api/blog/edit", {
                        method: "POST",
                        body
                    }).then(()=>{
                        window.location.href = '/vidar_admin/blog'
                        setPageDisabled(false)
                    })
                } 
                break 
        }
    }
    
    return(
        <div className={`adminEditPage ${pageDisabled ? 'adminEditPage_disabled' : ''}`}>

            {/* <div className='adminEditPage__title' onClick={()=>{router.replace('/vidar_admin/products')}}>
  
                
            </div> */}

            <div className="adminEdit__infoWrap">
                <div className="adminEditImageBlock">
                    <img src={pageData.image ? pageData.image : 'https://res.cloudinary.com/dbrbbtckh/image/upload/v1714405423/articles/statiya_3_mhsdst.jpg'} />
                </div>
                
                <div className="adminEdit__info">
                    <div className="adminEditPage__title">{serverData.type === 'new' ? 
                        (taxonomy == 'product' ? 'Добавление продукта' : 'Добавление статьи') : 
                        (taxonomy == 'product' ? 'Редактирование продукта' : 'Редактирование статьи')}</div>
                    <div className="adminEdit__inputWrap">
                        <label htmlFor="adminEditTitle">Название</label>
                        <input type="text" name='name' id="adminEditTitle" value={pageData.name} onChange={(e)=>{
                            setPageData({...pageData, name: e.currentTarget.value, slug: encodeURIComponent(slugify(e.currentTarget.value.toLowerCase()))})
                        }}/>
                    </div>
                    {
                        taxonomy == 'product' && (
                            <div className="adminEdit__inputWrap">
                                <label htmlFor="adminEditInStock">В наличии</label>
                                <input type="checkbox" name='inStock' id="adminEditInStock" checked={pageData.inStock} onChange={(e)=>{
                                    setPageData({...pageData, inStock: e.currentTarget.checked})
                                }}/>
                            </div>
                        )
                    }


                    <div className="adminEditImageBlockEdit">
                        <div style={{'fontSize': '17px','fontWeight': '500','marginBottom': '5px'}}>Ссылка на картинку</div>
                        <input type="text" name="image" value={pageData.image} onChange={(e)=>{
                                    setPageData({...pageData, 
                                        image: e.currentTarget.value.length ? e.currentTarget.value : serverData.taxonomy === 'article' ? 'https://res.cloudinary.com/dbrbbtckh/image/upload/v1714405426/articles/statiya_1_ort4oy.png' : 'https://res.cloudinary.com/dbrbbtckh/image/upload/v1714404310/products/shopItem1_q2z0rn.jpg'
                                    })
                                }}/>
                    </div>

                    <div className="adminEdit__inputWrap">
                        <label htmlFor="adminEditCat">Категория</label>
                        <input type="text" name='category' id="adminEditCat" value={pageData.category} 
                        style={ taxonomy == 'article' ? {marginBottom: '0px'} : {}}
                        onChange={(e)=>{
                            setPageData({...pageData, category: e.currentTarget.value})
                        }}/>
                    </div>
                    {
                        taxonomy == 'product' && (
                            <div className="adminEdit__inputWrap">
                                <label htmlFor="adminEditPrice">Цена</label>
                                <input type="text" name='price' id="adminEditPrice" style={{marginBottom: 0}} value={pageData.price} onChange={(e)=>{
                                    setPageData({...pageData, price: e.currentTarget.value})
                                }}/>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="adminEdit__inputWrap">
                <label htmlFor="mceEditor">Контент</label>
                {/* <textarea  id="adminEditAbout"/> */}
                <div className="adminEditPage__editor">
                    {/* <TinyEditor currentData={pageData} setCurrentData={setPageData} dataFieldName='about'/> */}
                    <TinyEditor initialContent={pageData.about} onChangeFunc={(content)=>{
                        setPageData({...pageData, about: content})
                    }}/>
                </div>
            </div>
           
            <div className="adminEdit__inputWrap">
                <label htmlFor="adminEditDescription">Мета описание</label>
                <input type="text" name='description' id="adminEditDescription" value={pageData.description} onChange={(e)=>{
                    setPageData({...pageData, description: e.currentTarget.value})
                }}/>
            </div>

            <div className="adminEditPage__submit" onClick={submitFunction}>Готово</div>

        </div>
    )
}