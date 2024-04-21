import FaqContent from '@/components/faq/FaqContent';
import Registration from '@/components/pricing/Registration';

export const metadata = {
  title: "FAQ",
  description: "Here, we aim to answer your most frequently asked questions about using the Ebitans platform and launching your e-commerce journey in Bangladesh. If you can't find your specific question here, feel free to contact our friendly support team.",
};


const Faq = () => {

  return (
    <div className='relative z-[1] bg-[#F9F7F6]'>
      <div className="lg:pt-[85px] pt-[50px]">
        <div className="sm:h-[40vh] h-[15vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/eBitans-Web-Bannar4.png')] bg-no-repeat">
          <h1 className='text-md sm:text-lg md:text-xl lg:text-4xl font-bold my-1 text-center text-[#f1593a]'>FAQ</h1>
          <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold mb-1 text-center text-white'>Full Fill Your Curiosity</h1>
        </div>
      </div>
      <FaqContent />
      <div className='container px-5 lg:px-10'>
        <Registration />
      </div>
    </div>
  );
};

export default Faq;