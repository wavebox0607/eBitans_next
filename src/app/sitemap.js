import { fetchBlogSitemapData, fetchPseCategory } from "@/helper/api"

const webUrl = "https://ebitans.com.bd"

const sitemap = async () => {

    const blogData = (await fetchBlogSitemapData()) ?? []
    const category = (await fetchPseCategory()) ?? []

    const blogs = blogData.map((post) => ({
        url: `${webUrl}/resources/blogs/${post.slug}`,
        lastModified: `${post.updated_at}`
    }))
    const blogsBn = blogData.map((post) => ({
        url: `${webUrl}/bn/resources/blogs/${post.slug}`,
        lastModified: `${post.updated_at}`
    }))
    const productKhujo = category.map(({slug}) => ({
        url: `${webUrl}/product-khujo/category/${slug}`
    }))
    const productKhujoBn = category.map(({slug}) => ({
        url: `${webUrl}/bn/product-khujo/category/${slug}`
    }))

    return [
        {
            url: `${webUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/about`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/pricing`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/pricing`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/contact`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/affiliate-program`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/affiliate-program`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/privacy-policy`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/privacy-policy`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/resources/blogs`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/resources/blogs`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/resources/ebitans-learning`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/resources/ebitans-learning`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/resources/faq`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/resources/faq`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/return-and-refund-policy`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/return-and-refund-policy`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/services`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/services`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/services/ecommerce-website`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/services/ecommerce-website`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/services/social-media-marketing`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/services/social-media-marketing`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/solutions/all-theme`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/solutions/all-theme`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/terms-and-conditions`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/terms-and-conditions`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/product-khujo`,
            lastModified: new Date(),
        },
        {
            url: `${webUrl}/bn/product-khujo`,
            lastModified: new Date(),
        },
        ...blogs,
        ...blogsBn,
        ...productKhujo,
        ...productKhujoBn,
    ]

}

export default sitemap