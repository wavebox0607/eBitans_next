import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import hands from '@/assets/images/affiliate/hands.png'
import Rectangle from '@/assets/images/affiliate/Rectangle.png'
import Ellipse from '@/assets/images/affiliate/Ellipse.png'

const Partner = ({ locale }) => {
    const bangla = locale !== "en"
    return (

        <div className='bg-[#BBD0E8] relative z-[1]'>
            <div className='grid lg:grid-cols-2 gap-x-14 gap-y-10 place-items-center lg:pt-20 lg:pb-20 pt-10 pb-20 container px-5 lg:px-10'>
                <div className='lg:justify-self-start justify-self-center space-y-4'>
                    <h1 className='text-3xl font-semibold'>{!bangla ? "Becoming an affiliate partner is open to all" : "অ্যাফিলিয়েট প্রোগ্রামে যে কেউ  অংশগ্রহণ করার  সুযোগ রয়েছে"}</h1>
                    <p className='max-w-[500px]'>{!bangla ? "eBitans welcomes store owners, website managers, influencers, bloggers, sales graduates, freelancers, and anyone else who are interested. It’s free to join, and simple to use." : "eBitans স্টোরের মালিক, ওয়েবসাইট ম্যানেজার, ব্লগার, সেলস ম্যানেজার, ফ্রিল্যান্সার এবং যে কোন পেশার মানুষকে অ্যাফিলিয়েট প্রোগ্রামে   যোগদান করার আমন্ত্রন  এবং সেই সাথে বন্ধুত্বপূর্ণ পরিবেশ গড়ে তোলার আহ্বান জানাচ্ছে।"}</p>
                    <div className='relative w-max flex items-center gap-2 font-bold'>
                        <a href='https://admin.ebitans.com/register'><p className={``}>{!bangla ? "Let’s Work Together" : "Let’s Work Together"}</p></a>
                        <BsArrowRight />
                    </div>
                </div>

                <div className='lg:justify-self-end justify-self-center'>
                    <div className='relative lg:mr-8 mr-8'>
                        <Image width={500} height={500} src={hands} alt="ebitans image" className='relative z-[2] h-auto w-auto' />
                        <Image width={500} height={500} src={Rectangle} alt="ebitans image" className=' absolute z-[1] -right-8 lg:top-8 top-8 h-full w-auto' />
                    </div>
                    <Image src={Ellipse} alt="ebitans image" className='absolute right-0 top-0 lg:block hidden' />
                </div>
            </div>
        </div>
    )
}

export default Partner