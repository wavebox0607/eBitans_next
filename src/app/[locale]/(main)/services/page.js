import Free from "@/components/about/Free";
import Registration from "@/components/pricing/Registration";
import Inventory from "@/components/service/Inventory";
import MobApp from "@/components/service/MobApp";
import POS from "@/components/service/POS";
import SocialMedia from "@/components/service/SocialMedia";
import Website from "@/components/service/Website";

export const metadata = {
    title: "Services",
    description: "Ebitans goes beyond just providing a platform for your online store. We offer a comprehensive suite of services to empower you throughout your e-commerce journey in Bangladesh. Whether you're a seasoned entrepreneur or just starting out, Ebitans can help you succeed.",
  };


const Services = () => {

    return (

        <div className="relative z-[1] lg:pt-[85px] pt-[50px]">
            <div className="sm:h-[40vh] h-[30vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/5.png')] bg-no-repeat ">
                <div className="">
                    <h1 className='text-2xl sm:text-4xl font-bold my-1 text-center text-[#393b39]'>Services</h1>
                    <h1 className='text-2xl font-thin sm:font-bold sm:text-4xl md:text-5xl lg:text-7xl my-1 text-center text-white'>Explore What We Offer</h1>
                </div>
            </div>

            <Website data={"Details"} />
            <POS data={"Details"} />
            <Inventory data={"Details"} />
            <MobApp data={"Details"} />
            <SocialMedia data={"Details"} />
            <div className='container px-5 lg:px-10'>
                <Registration />
            </div>
        </div>

    );
};

export default Services;