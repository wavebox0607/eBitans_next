import Image from "next/image";

const POS = ({ data }) => {

    return (
        <div className={`py-2 px-5 lg:px-0 ${data ? 'mt-20' : 'mt-5'}`}>
            <div className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0  ${data ? 'max-w-7xl' : 'max-w-5xl'}`}>
                <div className="lg:pr-6 ">
                    <div className="flex flex-col pr-4 space-y-2 pb-4 max-w-lg">
                        <div className='bg-[#f1593a] rounded'><h3 className='sm:text-[28px] text-[22px] pl-2 py-1.5 font-extrabold text-white lg:text-left'>Point Of Sale (POS) System</h3></div>
                        <p className='text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5'>The use of point-of-sale (POS) software now makes business accounting much more accessible and error-free. In modern times, an efficient point-of-sale system is essential to meet the overall needs of all types of businesses. So we E-bitans offer advanced quality Point of Sale (POS) facility at a low cost. Using it, past transactions can be viewed easily, can maintain accurate records or accounts of daily incoming and outgoing transactions made by the business. If you want to see how much you have sold in any previous day, Point of Sale (POS) will show you all the financial status in a moment with just one click.</p>

                        {data &&
                            <div className='relative w-max group'>
                                <button className=' text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase'>{data}</button>
                                <p className='h-[1px] absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500'></p>
                            </div>
                        }
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className={`hidden lg:flex absolute z-10 bottom-12 left-0 border-4 border-[#f1593a] rounded`}>
                        <Image width={500} height={500} className={`h-full shadow-xl rounded ${data ? 'w-[600px]' : 'w-[600px]'}`} src={"https://ebitans.com/Image/service/Pos-system.jpg"} alt="ebitans image" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className={`border-2 border-black rounded`}>
                    <Image width={500} height={500} className="shadow-xl rounded-xl border-4 h-full w-full" src={"https://ebitans.com/Image/Ebitans-POS-L.jpg"} alt="ebitans image" />
                </div>

            </div>
        </div>
    );
};

export default POS;