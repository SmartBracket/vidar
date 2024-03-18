import ShopListItem from '@/components/shop/ShopListItem'

export default async function ShopList({products}){
    return (
        <div className="shopList">
            {products && products.map((product, index)=> <ShopListItem index={index} key={product._id} productData={product}/>)}
        </div>
    )
}