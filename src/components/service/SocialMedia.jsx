import images from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = ({ data }) => {

    return (
        <div className={`py-2 px-5 lg:px-0 ${data ? 'mt-20' : 'mt-5'}`}>
            <div className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between ${data ? 'max-w-7xl' : 'max-w-5xl'}`}>
                <div className="lg:pl-6 lg:order-last">
                    <div className="flex flex-col space-y-2 pr-4 pb-4 max-w-lg">
                        <div className='bg-[#f1593a] rounded'><Link href="/social-media-marketing"><h3 className='sm:text-[28px] text-[22px] font-bold text-white pl-2 pr-2 py-1.5 lg:text-right lg:cursor-pointer'>Social Media Marketing</h3></Link></div>
                        <p className='text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5'>Having a visually eye-capturing online advertisement can help promote, target, and display your business brand to millions of potential buyers. With eBitans as your professional display advertising agency, your business can create tailored banners, images, colors, dynamic texts, videos, logos, and ad extensions. We can also retarget anyone who interacts with your ads to keep your brand showing up wherever they go on the web.</p>

                        {data &&
                            <Link href="/services/social-media-marketing"><div className='relative w-max group'>
                                <button className=' text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase'>{data}</button>
                                <p className='h-[1px]  absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500'></p>
                            </div></Link>
                        }
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className={`hidden lg:flex absolute z-10 bottom-12 right-0`}>
                        <Image width={500} height={500} className={`h-full shadow-xl border-4 border-black rounded-xl ${data ? 'w-[600px]' : 'w-[600px]'}`} src={images?.social2} alt="ebitans image" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className={` lg:order-1`}>
                    <Image width={500} height={500} className="h-full w-full shadow-xl border-4 border-[#f1593a] rounded-xl" src={images?.social1} alt="ebitans image" />
                </div>

            </div>
        </div>
    );
};

export default SocialMedia;