import Image from 'next/image'
import styles from "./home.module.css"
import images from '@/lib/images'

const Dream = () => {
    return (
        <section>
            <div className='relative bg-[#F9F7F6]'>
                <h2 className={`${styles.dream} ${styles.headerOne} text-center `}>BUILD YOUR DREAM</h2>
                <div className='absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full'></div>
            </div>
            <div className='container px-5 lg:px-10'>
                <div className='xl:-mt-24 lg:-mt-10 -mt-6 relative z-[1]'>
                    <p className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px]`}>TAKE THE BEST PATH</p>
                    <h2 className={`${styles.archivo} ${styles.headerTwo}`}>Forward Your Business</h2>
                </div>

                <div className='mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 bg-[#F9F7F6] relative z-[1]'>
                    <div className='bg-[#E6F4EC] space-y-5 p-3 rounded'>
                        <Image src={images?.plan} alt="ebitans image" className='h-6 lg:h-auto w-auto' />
                        <h4 className={`${styles.archivo} ${styles.headerFour}`}>Plan your online business</h4>
                        <p className={`${styles.archivo} ${styles.paragraph} text-[#726A69]`}>Develop an eCommerce website backed by powerful tools that help you serve customers.</p>
                    </div>
                    <div className='bg-[#F4E8E6] space-y-5 p-3 rounded'>
                        <Image src={images?.register} alt="ebitans image" className='h-6 lg:h-auto w-auto' />
                        <h4 className={`${styles.archivo} ${styles.headerFour}`}>Free register to eBitans</h4>
                        <p className={`${styles.archivo} ${styles.paragraph} text-[#726A69]`}>To bring your business Ebitans Input your phone number and complete the registration.</p>
                    </div>
                    <div className='bg-[#F4F1E6] space-y-5 p-3 rounded'>
                        <Image src={images?.website} alt="ebitans image" className='h-6 lg:h-auto w-auto' />
                        <h4 className={`${styles.archivo} ${styles.headerFour}`}>Create your own ecommerce website</h4>
                        <p className={`${styles.archivo} text-[#726A69] ${styles.paragraph}`}>Build an online store using eBitans using easy, no code website builder system.</p>
                    </div>
                    <div className='bg-[#E6F0F4] space-y-5 p-3 rounded'>
                        <Image src={images?.world} alt="ebitans image" className='h-6 lg:h-auto w-auto' />
                        <h4 className={`${styles.archivo} ${styles.headerFour}`}>Take your business to the world</h4>
                        <p className={`${styles.archivo} ${styles.paragraph} text-[#726A69]`}>Turn your retail store into an online store and keep selling the verities of products.</p>
                    </div>
                </div>
            </div>
            <div className='py-20 relative '>
                <div className='container px-5 lg:px-10 relative z-[1]'>
                    {/* <iframe
                        className="xl:h-[700px] h-[350px] md:h-[450px] lg:h-[600px] w-full rounded"
                        src="https://www.youtube.com/embed/6XRokTR92Ik?si=zg84ssT_ohlAv9-U"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />{" "} */}
                    <video className="border-1 border-[#f1593a] h-full w-full rounded-lg" src="https://ebitans.com/eBitans_promo_video.webm" playsInline loop autoPlay muted></video>
                </div>
                <div className={`${styles.bgGradient} absolute top-0 left-0 w-full h-full rounded-xl`}></div>
            </div>
        </section>)
}

export default Dream