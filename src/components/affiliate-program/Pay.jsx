import Image from 'next/image'
import graphLaptop from '@/assets/images/affiliate/graphLaptop.png'
import manMobile from '@/assets/images/affiliate/manMobile.png'
import dollar from '@/assets/images/affiliate/dollar.png'
import design1 from '@/assets/images/affiliate/design1.png'

const Pay = ({ locale }) => {
    const bangla = locale !== "en"
    return (

        <div className='bg-white relative z-[1]'>
            <div className='grid lg:grid-cols-2 gap-x-14 gap-y-10 lg:place-items-center lg:pt-32 lg:pb-32 pb-16 pt-28 container px-5 lg:px-10'>

                <div className='lg:justify-self-start justify-self-center mt-20'>
                    <div className='relative mr-24 '>
                        <Image width={500} height={500} src={graphLaptop} alt="ebitans image" className='h-auto w-auto' />
                        <Image width={500} height={500} src={manMobile} alt="ebitans image" className=' absolute z-[2] -right-24 -top-44 h-auto w-auto' />
                        <Image width={500} height={500} src={dollar} alt="ebitans image" className='absolute z-[1] lg:left-5 -left-3 -top-10 h-auto w-auto' />
                        <Image width={500} height={500} src={design1} alt="ebitans image" className='absolute z-[1] -right-10 bottom-0 h-auto w-auto' />
                    </div>
                </div>

                <div className='lg:justify-self-end justify-self-center space-y-4'>
                    <h1 className='text-3xl font-semibold max-w-[500px]'>{!bangla ? "A lucrative affiliate program that delivers real earnings" : "আমাদের অ্যাফিলিয়েট প্রোগ্রাম দ্বারা আপনি অর্থ  উপার্জন করতে পারেন।"}</h1>
                    <p className='max-w-[500px]'>{!bangla ? "It's as straightforward as this: utilize your social media platform and influence to spread the advantages of eBitans robust and user-friendly e-commerce platform within your network. Once they join through your referral link, we'll reward you with an ongoing 20% commission for a lifetime – yes, you read that right! As long as they maintain their account, your earnings will keep flowing in" : "এটি সহজ: আপনি আপনার নেটওয়ার্কের সাথে eBitans প্ল্যাটফর্মের সুবিধাগুলি ভাগ করতে পারেন, এবং আপনার সামাজিক মাধ্যম প্রকাশণ এবং প্রভাবের সাহায্যে অন্যদেরকে ইবিটান্সে জুড়ান। যখন তারা আপনার রেফারেল লিংক ব্যবহার করে সাইন আপ করবে, তখন আপনি প্রাপ্ত আয়ের 20% কমিশন পাবেন - হ্যাঁ, আপনি সঠিকভাবে শোনেন! এবং তারা তাদের অ্যাকাউন্ট চালিয়ে রাখার সময় আপনার উপার্জন আরও বেড়ে যাবে।"}</p>
                </div>
            </div>
        </div>
    )
}

export default Pay