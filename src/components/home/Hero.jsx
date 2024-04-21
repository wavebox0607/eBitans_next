import Image from 'next/image'
import styles from "./home.module.css"
import HeroRegister from './HeroRegister'
import images from '@/lib/images'

const Hero = async ({ locale }) => {
    const bangla = locale !== "en"
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 2xl:items-center pb-10 lg:pb-[120px] pt-16 lg:pt-32 2xl:pt-56 relative container px-5 lg:px-10'>
                <div className='relative order-last lg:order-first lg:justify-self-start justify-self-center w-full'>
                    <div className={`${styles.bgAnimate} w-[345px] h-[345px] bg-[#F3BEB3] bg-opacity-50 blur-3xl rounded-full`}></div>
                    <h1 className={`${styles.archivo} text-3xl font-bold sm:text-[36px] lg:text-[44px] relative z-[1] leading-[40px] sm:leading-[50px] text-shadow-animation mx-auto lg:mx-0 text-center lg:text-left`}>Most Popular <br className='sm:hidden' />E-Commerce <br />Website Builder in Bangladesh. <br />  Create Your <span className={`${styles.archivo} text-[#f1593a] font-black`}> Online Store <br className='hidden sm:block' /> in Just 1 min. </span></h1>
                    <p className={`${styles.archivo} text-gray-700 mt-6 lg:mb-12 mb-6 max-w-[700px] text-base lg:text-xl mx-auto lg:mx-0 text-center lg:text-left relative z-[1]`}>{bangla ? "Looking to launch your online store in Bangladesh? Discover top E-commerce website builder customized for the Bangladeshi market. Create a personalized, user-friendly E-commerce  to showcase your products and grow your business online now." : "Looking to launch your online store in Bangladesh? Discover top E-commerce website builder customized for the Bangladeshi market. Create a personalized, user-friendly E-commerce  to showcase your products and grow your business online now."}</p>
                    <HeroRegister />
                </div>
                <div className='image-section lg:-mr-12 lg:justify-self-end justify-self-start sm:justify-self-center relative z-[1] lg:sticky lg:top-32 2xl:top-56 h-max'>
                    <div className='relative'>
                        <Image placeholder="blur" src={images.laptop} alt="laptop" className="" />
                        <div className='perspective-image absolute bg-white top-0 left-0 w-full opacity-90 max-h-[100%] blur-xl'></div>
                    </div>
                    <Image placeholder="blur" src={images.review} alt="review" className='float-right lg:mr-12 -mt-10 relative z-[1] h-[48px] w-auto' />
                </div>
            </div>
        </section>
    )
}

export default Hero