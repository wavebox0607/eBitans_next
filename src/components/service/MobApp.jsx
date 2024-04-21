import Image from "next/image";

const MobApp = ({ data }) => {

    return (
        <div className={`py-2 px-5 lg:px-0 ${data ? 'mt-20' : 'mt-5'}`}>
            <div className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 justify-end ${data ? 'max-w-7xl' : 'max-w-5xl'}`}>
                <div className="lg:pr-6">
                    <div className="flex flex-col space-y-2 pr-4 pb-4 max-w-lg">
                        <div className='bg-[#f1593a] rounded'><h3 className='sm:text-[28px] text-[22px] font-bold text-white pl-2 py-1.5 lg:text-left'>E-commerce Mobile App</h3></div>
                        <p className='text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5'>eBitans Mobile App is new innovation for E-commerce business entrepreneurs. Suppose you are looking for the easiest way to create an E-commerce app for your business, in that case, we eBitans provide the easy solution to develop an E-commerce app will greatly contribute to the growth of the business and compete better in the market. Our E-commerce apps are quite simple and beautiful, just need to follow a few steps to create which provides a boundless shopping experience with delivering various types of products and services to customers' doorsteps. The most exciting thing is, you don't have to spend lacs to make high a functional mobile app from eBitans.</p>

                        {data &&
                            <div className='relative w-max group'>
                                <button className=' text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase'>{data}</button>
                                <p className='h-[1px] absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500'></p>
                            </div>
                        }
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className={`hidden lg:flex absolute z-10 bottom-12 left-0 `}>
                        <Image width={500} height={500} className={`h-full border-4 border-[#f1593a] shadow-xl rounded-xl ${data ? 'w-[600px]' : ' w-[600px]'}`} src={"https://ebitans.com/Image/Ebitans_Mobile App.jpg"} alt="ebitans image" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className={``}>
                    <Image width={500} height={500} className="h-full w-full shadow-xl border-4 border-[#000] rounded" src={"https://ebitans.com/Image/EbitansMobile-Application1-L.jpg"} alt="ebitans image" />
                </div>

            </div>
        </div>
    );
};

export default MobApp;