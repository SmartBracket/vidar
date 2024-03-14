import '@/assets/styles/shop.scss'
import { getShopProduct } from '@/lib/shop/queries'
import ProductPage from '@/components/shop/ProductPage'

// import { Metadata, ResolvingMetadata } from 'next'
// export const dynamic = 'force-dynamic'
export async function generateMetadata({ params }) {
    const product = await getShopProduct(params.product_slug)
    return {
        title: product.name,
        description: product.description,
        openGraph: {
            images: [product.image ],
        },
    }
}

export default async function Page({ params }){
    // await new Promise(resolve => {
    //     setTimeout(resolve, 10000);
    // });
    const productData = await getShopProduct(params.product_slug)

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.name,
        image: productData.image,
        description: productData.description,
    }

    return (
        <main className="page product">
            <div className="container">
                <ProductPage product={productData} />
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}