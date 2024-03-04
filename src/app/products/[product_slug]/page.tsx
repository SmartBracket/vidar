import '@/assets/styles/shop.scss'
import { getShopProduct } from '@/lib/shop/queries'
import ProductPage from '@/components/shop/ProductPage'

export default async function Page({ params }: { params: { product_slug: string } }){
    // await new Promise(resolve => {
    //     setTimeout(resolve, 10000);
    // });
    const productData = await getShopProduct(params.product_slug)

    return (
        <main className="page product">
            <div className="container">
                <ProductPage product={productData} />
            </div>
        </main>
    )
}