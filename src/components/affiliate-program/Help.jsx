import Image from 'next/image'
import team from '@/assets/images/affiliate/team.png'
import commission from '@/assets/images/affiliate/comission.png'
import graph from '@/assets/images/affiliate/graph.png'
import design2 from '@/assets/images/affiliate/design2.png'

const Help = ({ locale }) => {
    const bangla = locale !== "en"
    return (

        <div className='bg-[#FBD8D1] relative z-[1]'>
            <div className='grid lg:grid-cols-2 gap-x-14 gap-y-10 lg:place-items-center lg:py-20 py-10 container px-5 lg:px-10'>
                <div className='lg:justify-self-start justify-self-center space-y-4'>
                    <h1 className='text-3xl font-semibold max-w-[500px]'>{!bangla ? "Become a member of the eBitans Partner Program and start earning money today" : "eBitans পার্টনার প্রোগ্রামে যোগ দিন এবং আজই উপার্জন শুরু করুন!"}</h1>
                    <p className='max-w-[500px]'>{!bangla ? "Let’s work together to help startup business entrepreneur around us to sell online. Join eBitans Affiliates learning program where we can teach you how to build an amazing businesse  online with eBitans E-commerce website builder platform." : "চলুন অনলাইনে বিক্রি করতে আমাদের চারপাশের স্টার্টআপ ব্যবসায়িক উদ্যোক্তাদের সাহায্য করার জন্য একসাথে কাজ করি। eBitans  অ্যাফিলিয়েটস লার্নিং প্রোগ্রামে হোন , যেখানে আমরা eBitans  ই-কমার্স ওয়েবসাইট তৈরির প্ল্যাটফর্ম ব্যবহার করে সফল অনলাইন ব্যবসা গড়ে তোলার বিষয়ে আপনাকে গাইড করব।"}</p>
                    <div className='relative w-max shadow-xl'>
                        <a href='https://admin.ebitans.com/register'><p className={`py-3 px-6 font-medium tracking-widest text-white bg-[#f1593a] rounded border-2 border-[#f1593a] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer shadow-[5px_5px_1px_1px_black] hover:shadow-none duration-500`}>{!bangla ? "Let’s Work Together" : "Let’s Work Together"}</p></a>
                    </div>
                </div>

                <div className='lg:justify-self-end justify-self-center'>
                    <div className='relative lg:mr-24 mr-10 ml-11 lg:ml-0'>
                        <Image width={500} height={500} src={team} alt="ebitans image" className='h-auto w-auto' />
                        <Image width={500} height={500} src={commission} alt="ebitans image" className=' absolute z-[1] lg:-right-24 -right-10 top-2 shadow-2xl h-auto w-auto' />
                        <Image width={500} height={500} src={graph} alt="ebitans image" className='absolute z-[1] -left-16 bottom-0 h-auto w-auto' />
                        <Image width={500} height={500} src={design2} alt="ebitans image" className='absolute z-[1] -right-10 -bottom-6 h-auto w-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help