import Image from "next/image";

const Inventory = ({data}) => {

    return (
        <div className={`py-2 px-5 lg:px-0 ${data ? 'mt-20' : 'mt-5'}`}>
            <div className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 ${data ? 'max-w-7xl' : 'max-w-5xl'}`}>
                <div data-aos="fade-up" data-aos-duration="3000" className={`order-2 lg:order-1`}>
                    <Image width={500} height={500} className="h-full w-full border-4 border-[#f1593a] shadow-xl rounded-xl" src={"https://ebitans.com/Image/Ebitans-inventory-L.jpg"} alt="ebitans image" />
                </div>
                <div className="order-1 lg:order-2 pb-4 lg:pl-4">
                    <div className="flex flex-col space-y-2 max-w-lg">
                        <div className='bg-[#f1593a] whitespace-normal rounded'><h3 className='sm:text-[28px] text-[22px] font-bold text-white pl-2 pr-2 py-1.5 lg:text-right'>Inventory Management Solution</h3></div>
                        <p className='text-[14px] text-[#8d8d8d] whitespace-normal text-justify pt-2 pb-5'>Through the Inventory management software tool eBitans aims to serve small and medium enterprises in the country to facilitate their business accountings in an extensive way. All the necessities in business like the product stock report, sales transaction report can be done accurately, also can avoid stock outs and excess stock. This inventory management system allows you to receive the alert in time before any of your products run out of stock, so you can easily refill or relieve from mistakes like stockpiling of extra products.</p>

                        {data &&
                            <div className='relative w-max group'>
                                <button className=' text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase'>{data}</button>
                                <p className='h-[1px] absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500'></p>
                            </div>
                        }
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className={`hidden lg:flex absolute bottom-12 right-0 border-4 border-black rounded-xl`}>
                        <Image width={500} height={500} className={`h-full shadow-xl rounded ${data ? 'w-[600px]' : 'w-[600px]'}`} src={"https://ebitans.com/Image/service/Inventory-02.jpg"} alt="ebitans image" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Inventory;