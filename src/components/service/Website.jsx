import Image from "next/image";
import Link from "next/link";

const Website = ({ data }) => {

    return (
        <div className={`py-2 px-5 lg:px-0 ${data ? 'mt-20' : 'mt-5'}`}>
            <div className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 justify-end ${data ? 'max-w-7xl' : 'max-w-5xl'}`}>
                <div data-aos="fade-up" data-aos-duration="3000" className={`order-2 lg:order-1`}>
                    <Image width={500} height={500} className="rounded border-2 border-black h-full w-full" src={"https://ebitans.com/Image/service/ecommerce_01.jpg"} alt="ebitans image" />
                </div>
                <div className=" sm:mt-0 order-1 lg:order-2 pb-4 lg:pl-4 ">
                    <div className="flex flex-col space-y-2 max-w-lg">
                        <div className="bg-[#f1593a] rounded" ><h3 className='sm:text-[28px] text-[22px] font-bold text-white px-2 py-1.5 lg:text-right'>E-Commerce Website (React.JS)</h3></div>
                        <p className='text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5'>Make your own website in your way. One platform with all the E-commerce features you need to start, run, and grow your business. We eBitans are no code a website builder system for small, and medium business, offers reliable website hosting, domain name registration service, free themes, design layouts, mobile apps, facility to customize images, and much more. Add your own unique products to your website and create attractive descriptions for them. You don’t need coding skills to create a world-className E-commerce website that stands out both online and offline.</p>
                        {data &&
                            <Link href="/services/ecommerce-website"><div className='relative w-max group'>
                                <button className=' text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase'>{data}</button>
                                <p className='h-[1px] absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500'></p>
                            </div></Link>
                        }
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className={`mt-10 hidden lg:flex absolute bottom-12 right-0`}>
                        <Image width={500} height={500} className={`h-full shadow-xl rounded-xl border-4 border-[#f1593a]  ${data ? 'w-[600px]' : 'w-[600px]'}`} src={"https://ebitans.com/Image/service/ecommerce_02.jpg"} alt="ebitans image" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Website;