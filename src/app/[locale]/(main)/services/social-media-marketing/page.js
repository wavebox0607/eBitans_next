import Image from "next/image";
import SocialPricing from "@/components/pricing/SocialPricing";
import Tenant from "@/components/social-media-marketing/Tenant";
import { fetchPricingData } from "@/helper/api";
import AnimatedLogo from "@/components/social-media-marketing/AnimatedLogo";
import Registration from "@/components/pricing/Registration";

export const metadata = {
    title: "Service of Social Media Marketing",
    description: "In today's digital world, social media is an essential tool for reaching customers and building your brand. But managing social media effectively can be time-consuming and require expertise. That's where Ebitans Social Media Marketing comes in. We help Bangladeshi e-commerce businesses like yours leverage the power of social media to connect with customers, drive traffic to your store, and ultimately, boost sales.",
  };


const SocialMediaMarketing = async ({ params: { locale } }) => {
    const data = (await fetchPricingData()) ?? []
    const bangla = locale !== "en"
    return (
        <div className=" bg-[#f7f7f7] lg:pt-[85px] pt-[50px] relative z-[1]">
            <div className="sm:h-[40vh] h-[15vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/7.png')] bg-no-repeat ">

                <h1 className='text-md sm:text-lg md:text-xl lg:text-4xl font-bold text-[#393b39]'>{!bangla ? "Social Media Marketing" : "সোশ্যাল মিডিয়া মার্কেটিং"}</h1>
                <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-white'>{!bangla ? "No Worries! Your Business In a Right Track" : "আপনি সঠিক পথটি বেছে নিয়েছেন"}</h1>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 container px-5 lg:px-10 ">
                <div className='pt-40'>
                    <h1 className="text-4xl text-[#333] font-semibold font-Railway tracking-widest py-10 ">{!bangla ? "Grow Faster, Better, And Smarter!" : "ব্যবসাকে দ্রুত এবং সফলভাবে পরিচালনা করুন"}</h1>
                    <p className="text-[20px] pt-5 text-gray-500 font-light font-Railway leading-[32px]">{!bangla ? "We know that when you grow your business, it is not just about yourself." : "আমরা জানি যে, আপনার ব্যবসার প্রসারের জন্য পণ্যকে গ্রাহকের দোরগোড়ায় পৌঁছানো অত্যাবশ্যক। যার সহজ ও দ্রুততম মাধ্যম হচ্ছে সোশ্যাল মিডিয়া মার্কেটিং।"}</p>
                    <p className="text-[20px] pt-3 pb-5 text-gray-500 font-light font-Railway leading-[32px]">{!bangla ? "To grow your business faster there is no alternative of attractive content for your business. But you may not know where to start, we’re here to make your life more easier! Therefor, we are here to help you to make a social media ready content. which not only help to grow your business also give your business a better look. Let us handle everything and create a strategy that will help grow your business 10X more on online." : "ব্যবসাকে দ্রুত বৃদ্ধি করতে আকর্ষণীয় কনটেন্ট এর কোন বিকল্প নেই। কিন্তু কোথা থেকে শুরু করবেন তা হয়তো আপনি বুঝতে পারছেন না। আপনার এই ঝামেলার সমাধান নিয়ে এসেছে eBitans। অনলাইনে আপনার ব্যবসার প্রসারের জন্য যাবতীয় কনটেন্ট সাপোর্ট, ফেইসবুক বুষ্টিং দিবে eBitans এবং একি সাথে আপনার ব্যবসার ধরন অনুযায়ী বেব্সায়িক কৌশল নির্বাচন করব যা আপনার ব্যবসার বৃদ্ধিকে দশগুণ বেশি গতি প্রদান করবে।"}</p>

                </div>
                <div className="lg:-mb-20 w-full">
                    <Image width={500} height={500} src={"https://ebitans.com/Image/ebitans_website_social.png"} className="lg:mt-40 h-auto w-auto" alt='' />
                </div>
            </div>

            <Tenant locale={locale}/>
            <div className='mt-10'>
                <SocialPricing social={data?.Digital_Plan}/>
            </div>
            <AnimatedLogo />
            <div className='container px-5 lg:px-10'>
                <Registration />
            </div>
        </div>

    );
};

export default SocialMediaMarketing;




