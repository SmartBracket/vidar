// import shopSettings from '@/lib/shop/shopSettings'
import ShopListItem from '@/components/shop/ShopListItem'

export default function ShopList({products}){
    return (
        <ul className="shopList">
            {products && products.map((product)=> <ShopListItem key={product._id} productData={product}/>)}
        </ul>
    )
}