import Testimonal from './Slider'

const Review = () => {

    return (

        <div className='bg-[#FBD8D1] relative z-[2]'>
            <div className='grid lg:grid-cols-2 gap-x-14 gap-y-10 py-10 lg:py-0 place-items-center container px-5 lg:px-10 lg:h-[400px]'>
                <div className='lg:justify-self-start justify-self-center space-y-1 lg:py-20 '>
                    <p className='text-lg font-semibold'>What others say</p>
                    <h1 className='max-w-[500px] text-3xl font-bold'>We create to make life easier</h1>
                </div>

                <div className='lg:justify-self-end justify-self-center bg-[#F9EFED] h-full w-full lg:mt-10'>
                    <div className=''>
                        <Testimonal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review