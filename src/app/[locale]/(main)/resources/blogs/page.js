import { fetchBlogData, fetchBlogPopularData, fetchBlogTypeData } from '@/helper/api'
import SingleBlog from '@/components/blogs/SingleBlog'
import PopularBlog from '@/components/blogs/PopularBlog'
import Image from 'next/image'
import { Suspense } from 'react'
import images from '@/lib/images'
import BlogType from '@/components/blogs/BlogType'
import AllBlog from '@/components/blogs/AllBlog'
import Loading from '@/app/[locale]/loading'

export const metadata = {
    title: "Blogs",
    description: "Ebitans Blog is your one-stop shop for valuable insights and practical tips to help you thrive in the exciting world of Bangladeshi e-commerce. Whether you're a seasoned seller or just starting your online business journey, we've got something for you.",
  };


const Blogs = async () => {

    const blogData = (await fetchBlogData()) ?? []
    const blogPopularData = (await fetchBlogPopularData()) ?? []
    const blogTypeData = (await fetchBlogTypeData()) ?? []

    return (
        <div className="sm:pt-[85px] pt-[50px] relative z-[1]">
            <div className="sm:h-[40vh] h-[15vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/eBitans-Web-Bannar4.png')] bg-no-repeat">
                <h1 className='text-4xl font-bold my-1 text-center text-[#f1593a]'>Blogs</h1>
            </div>

            {/* blog section  */}
            <div className='container px-5 lg:px-10 my-10'>
                <div className='flex flex-col lg:flex-row gap-8 '>
                    {/* blog card section  */}
                    <Suspense fallback={<div><Loading /></div>}>
                        <SingleBlog blogData={blogData} />
                    </Suspense>

                    {/* popular blogs */}
                    <div className='basis-2/5'>
                        <h1 className='text-2xl pb-5'>Popular Blogs</h1>
                        <Suspense fallback={<div><Loading /></div>}>
                            {blogPopularData?.slice(0, 5).map(blog =>
                                <PopularBlog blog={blog} key={blog?.id} />
                            )}
                        </Suspense>
                    </div>
                </div>
            </div>

            {/* banner section  */}
            <a href="https://admin.ebitans.com/register" target="_blank" rel="noopener noreferrer"><div className='container px-5 lg:px-10 my-10'>
                <Image width={500} height={500} src={images?.blogBanner} alt="blogImage" className='h-auto min-w-full' />
            </div></a>

            {/* type of blog section  */}
            <div className='container px-5 lg:px-10 my-10'>
                <div>
                    <Suspense fallback={<div><Loading /></div>}>
                        <BlogType blogTypeData={blogTypeData} />
                    </Suspense>
                </div>
            </div>

            {/* all blog section  */}
            <div className='container px-5 lg:px-10 my-10'>
                <Suspense fallback={<div><Loading /></div>}>
                    <AllBlog />
                </Suspense>
            </div>
        </div>
    )
}

export default Blogs