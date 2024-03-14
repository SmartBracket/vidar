'use client'
import { useRouter, useSearchParams, usePathname } from "next/navigation"

export default function ShopFilters({cats}){
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPath = usePathname()
    
    return (
      <div className="shopFilters">
        <div className="shopFilters__part">
          <div className="shopFilters__title">Выбор категории</div>
          <div className="shopFilters__wrap">
            {cats && cats.map((cat) => (
              <div key={cat._id} className={`shopFilters__item default ${searchParams.get('category') == cat._id ? 'active' : ''}`}
              onClick={()=>{
                const params = new URLSearchParams(searchParams.toString())
                params.set('page', 1)
                if(params.get('category') != cat._id){
                  params.set('category', cat._id)
                }else{
                  params.delete('category')
                }
                router.push(`${currentPath}?${params.toString()}`)
              }} title={`Показать товары из категории "${cat._id}"`}>
                {cat._id} ({cat.count})
              </div>
            ))}
          </div>
        </div>

        <div className="shopFilters__part">
          <div className="shopFilters__title">Сортировка</div>
          <div className="shopFilters__wrap">
            <div className={`shopFilters__item radio ${searchParams.get('inStock') == 'true' ? 'active' : ''}`} onClick={()=>{
              const params = new URLSearchParams(searchParams.toString())
              params.set('page', 1)
              if(params.get('inStock') != 'true'){
                params.set('inStock', 'true')
              }else{
                params.delete('inStock')
              }
              router.push(`${currentPath}?${params.toString()}`)
            }}>Показать только в наличии</div>
            <div className={`shopFilters__item select ${searchParams.get('sortBy') && searchParams.get('sortBy') != '' && 'active'}`}>
              <label htmlFor="shopFiltersSortSelect" className="invisibleLabel">Сортировка товаров</label>
              <select 
              onChange={(e)=>{
                const selectedVal = e.currentTarget.value
                const params = new URLSearchParams(searchParams.toString())
                params.set('page', 1)
                if(params.get('sortBy') == selectedVal){
                  return
                }else if(!selectedVal && params.get('sortBy').length){
                  params.delete('sortBy')
                }else{
                  params.set('sortBy', selectedVal)
                }
                router.push(`${currentPath}?${params.toString()}`)
              }} id="shopFiltersSortSelect">
                <option value="">Сортировать по ...</option>
                <option value="cheap">Сначала дешёвые</option>
                <option value="expensive">Сначала дорогие</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
}