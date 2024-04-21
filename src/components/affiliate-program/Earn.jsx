import Rectangle2 from '@/assets/images/affiliate/Rectangle2.png'
import desk from '@/assets/images/affiliate/desk.png'
import Image from 'next/image'

const Earn = () => {

    return (

        <div className='bg-white relative z-[1]'>
            <div className='grid lg:grid-cols-2 gap-x-14 gap-y-10 lg:place-items-center lg:pt-20 lg:pb-32 pb-10 container px-5 lg:px-10'>
                <div className='lg:justify-self-start justify-self-center mt-20 lg:w-full'>
                    <div className='pl-5 relative'>
                        <Image width={500} height={500} src={desk} alt="ebitans image" className='relative z-[1] h-auto w-auto'/>
                        <Image width={500} height={500} src={Rectangle2} alt="ebitans image" className='absolute left-0 top-5 h-full w-auto' />
                    </div>
                </div>
                <div className='lg:justify-self-end justify-self-center space-y-4'>
                    <h1 className='text-3xl font-semibold max-w-[500px]'>Free to start, easy to earn</h1>
                    <p className='max-w-[500px]'>Sign up for a free affiliate program link. And whenever a new merchant upgrades to an eBitans paid plan through your link,  you’ll receive a 20% commission for the life of their store. Plus, you’ll get access to our affiliate dashboard to track all your referrals, and watch your earnings grow.</p>
                </div>
            </div>
        </div>
    )
}

export default Earn