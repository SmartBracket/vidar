import { getAllShopProducts } from '@/lib/shop/queries'
import { getAllArticlesData } from '@/lib/blog/queries'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export default async function sitemap() {
    const products = await getAllShopProducts()
    const articles = await getAllArticlesData()

    const sitemapArray = [
        {
          url: NEXT_PUBLIC_URL,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        },
        {
          url: `${NEXT_PUBLIC_URL}/contacts`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 0.8,
        },
        {
          url: `${NEXT_PUBLIC_URL}/blog`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
    ]

    products.map(product => {
        sitemapArray.push({
            url: `${NEXT_PUBLIC_URL}/products/${product.slug}`,
            lastModified: new Date(product.updated),
            changeFrequency: 'monthly',
            priority: 1,     
        })
    })
    articles.map(article => {
        sitemapArray.push({
            url: `${NEXT_PUBLIC_URL}/blog/${article.slug}`,
            lastModified: new Date(article.updated),
            changeFrequency: 'monthly',
            priority: 1,     
        })
    })

    return sitemapArray
}