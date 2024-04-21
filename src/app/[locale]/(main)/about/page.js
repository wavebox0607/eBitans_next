import { BsInstagram } from 'react-icons/bs';
import { RiFacebookBoxLine, RiLinkedinBoxLine } from 'react-icons/ri';
import images from '@/lib/images';
import Image from 'next/image';
import CircleProgress from '@/components/about/CircleProgress';
import Registration from '@/components/pricing/Registration';

export const metadata = {
    title: "About Us",
    description: "eBitans provides Entrepreneurs an excellent solution to build sustainable stores online to sell their products online and also from physical stores.",
  };


const featuresData = [
    {
        icon: images?.react,
        progress: 90,
        title: "Full Phase React E-Commerce Website",
        titleBd: "সম্পূর্ণ React.JS ই-কমার্স ওয়েবসাইট",
        subTitle: 'Our unlimited bandwidth and super-fast web hosting ensure uninterrupted and faster actions to run your online store. ',
        subTitleBd: 'eBitans আপনাকে সম্পূর্ণ React.JS দিয়ে নির্মিত ই-কমার্স ওয়েবসাইট অফার করে যা দ্রুত তম সময়ে অনলাইন কেনাকাটায় গ্রাহকের ব্যক্তিগত অভিজ্ঞতাকে অনেক বেশি আনন্দদায়ক করবে।'

    },

    {
        icon: images?.hosting,
        progress: 70,
        title: "Super Fast NVMe Web Hosting",
        titleBd: "সুপার ফাস্ট এনভিএমই ওয়েব হোস্টিং ",
        subTitle: 'Our unlimited bandwidth and super-fast web hosting ensure uninterrupted and faster actions to run your online store. ',
        subTitleBd: 'আমাদের আনলিমিটেড ব্যান্ডউইথ এবং সুপার ফাস্ট ওয়েব হোস্টিং আপনার অনলাইন স্টোর চালানোর জন্য দ্রুততার সাথে নিরবচ্ছিন্ন সেবা নিশ্চিত করে। ',

    },

    {
        icon: images?.inventory,
        progress: 80,
        title: "All In One Inventory Management System",
        titleBd: "সবই পাচ্ছেন এক ইনভেন্টরি ম্যানেজমেন্ট সিস্টেমে ",
        subTitle: 'This Inventory management software gives the facility to control, and keep track of your product inventory, sales, and accounts',
        subTitleBd: 'এই ইনভেন্টরি ম্যানেজমেন্ট সফ্টওয়্যারটি আপনার সঠিক পণ্য সরবরাহ, বিক্রয় এবং অ্যাকাউন্ট নিয়ন্ত্রণ করার পাশাপাশি  সহজে পণ্যের স্টক ট্র্যাক রাখার সুবিধা প্রদান করে। ',

    },

    {
        icon: images?.http,
        progress: 100,
        title: "Free Subdomain",
        titleBd: "ফ্রি সাবডোমেইন",
        subTitle: 'We demand no fees, no price to provide a subdomain in separate so that you can create your desired website hassle-free.',
        subTitleBd: 'আমরা আলাদাভাবে সাবডোমেইন প্রদান করার জন্য কোন ফি বা কোন মূল্য দাবি করি না, যাতে করে আপনি আপনার পছন্দসই ওয়েবসাইটটি ঝামেলাহীন ভাবে তৈরি করতে পারেন।',

    },

    {
        icon: images?.subscription,
        progress: 85,
        title: "Budget Friendly Monthly Subscription",
        titleBd: "বাজেট বান্ধব মাসিক সাবস্ক্রিপশন সার্ভিস ",
        subTitle: 'Are you tensed about the expenses to build an E-commerce website? No worries, our package starts at a surprisingly low price.',
        subTitleBd: 'Aআপনি কি একটি ইকমার্স ওয়েবসাইট তৈরির খরচ নিয়ে টেনশনে আছেন? চিন্তার কিছু নেই, আমাদের  বিভিন্ন প্যাকেজগুলো  আপনাকে দিচ্ছে আশ্চর্যজনকভাবে কম দামে ওয়েবসাইট তৈরির সুবিধা ।',

    },

    {
        icon: images?.easy,
        progress: 90,
        title: "Easy Installation Process",
        titleBd: "সহজ ইনস্টলেশন প্রক্রিয়া",
        subTitle: 'Building a website now is super easy. Using our eBitans platform you can make your dream website within just a few clicks.',
        subTitleBd: 'এখন একটি ওয়েবসাইট তৈরি করা অনেক বেশি সহজ। আমাদের eBitans প্ল্যাটফর্ম ব্যবহার করে আপনি মাত্র কয়েকটি ক্লিকের মধ্যে আপনার স্বপ্নের ওয়েবসাইট টি তৈরি করে ফেলতে পারেন ।',

    },
]

const team = [
    {
        name: "Hasib Ahmed Soyad",
        nameBd: "হাসিব আহমেদ সোয়াদ",
        image: "https://ebitans.com/Image/cover/Hasib_Ahmed.jpg",
        title: "Founder & CEO",
        titleBd: "প্রতিষ্ঠাতা ও সি.ই.ও",
        facebook: "https://www.facebook.com/nansjejhggfggghjjjtrrfgggghhhj",
        instagram: "https://ebitans.com/Image/cover/Hasib_Ahmed.jpg",
        linkedin: "https://www.linkedin.com/feed/?trk=404_page",
    },
    {
        name: "Hasina Parvin",
        nameBd: "হাসিনা পারভিন",
        image: "https://ebitans.com/Image/cover/hasina_parvin.jpg",
        title: "Head Of Business Development",
        titleBd: "বিজনেস ডেভেলপমেন্ট প্রধান",
        facebook: "https://www.facebook.com/hasina.deepa",
        instagram: "https://www.instagram.com/hasinadeepa/",
        linkedin: "https://www.linkedin.com/in/hasina-parvin-0614552b/",
    },
    {
        name: "Tamanna Lina",
        nameBd: "তামান্না লিনা",
        image: "https://ebitans.com/Image/cover/1659417332510.jpg",
        title: "Head Of Digital Marketing",
        titleBd: "হেড অফ ডিজিটাল মার্কেটিং",
        facebook: "https://www.facebook.com/tamannaparin.lina",
        instagram: "https://www.instagram.com/lina.tamanna/",
        linkedin: "https://www.linkedin.com/in/tamanna-parvin-lina-008b8915a/",
    },

]

const About = ({ params: { locale } }) => {
    const bangla = locale !== "en"
    return (
        <div className="sm:pt-[85px] pt-[50px] relative z-[1]">

            <div className="sm:h-[] h-[15vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/eBitans-Web-Bannar1.png')] bg-no-repeat ">
                <h1 className='text-md sm:text-lg md:text-xl lg:text-4xl font-bold text-[#f1593a]'>Who We Are</h1>
                <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-white'>Know More About eBitans</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 container px-5 lg:px-10">
                <div className='pt-16 gap-y-10'>
                    <h1 className="text-3xl text-[#333] font-semibold font-Railway tracking-widest py-10 ">About eBitans</h1>
                    <p className="py-5 text-gray-500 font-light font-Railway whitespace-pre-wrap tracking-widest leading-loose">eBitans is the platform where you can create an E-commerce website for your business with just a matter of a few clicks. eBitans also offers E-commerce Mobile Apps, Point of Sale (POS), and Inventory Management System integrated with various features that simplify the selling process and increase your business revenue. In a word, eBitans provides Entrepreneurs an excellent solution to build sustainable stores online to sell their products online and also from physical stores.</p>

                </div>
                <div className="lg:-mr-16  lg:-mb-20 w-full">
                    <Image src={"https://ebitans.com/Image/ebitans_website_about.png"} width={500} height={500} className="lg:mt-40 h-auto w-auto" alt='' />
                </div>
            </div>

            <div className="bg-white container px-5 lg:px-10">
                <h1 className='lg:mt-20 lg:px-0 text-xl text-[#f1593a] text-center pt-20 pb-3'>Features</h1>
                <h1 className='text-5xl text-center pb-16'>Why eBitans Is Unique</h1>
                <div className="container lg:block flex justify-center pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-3 gap-3">
                        {featuresData?.map((data, id) => <SingleCircular data={data} key={id} />)}
                    </div>
                </div>
            </div>

            <div className='bg-white '>
                <h1 className='text-xl text-[#f1593a] text-center pt-40 pb-3'>Team</h1>
                <h1 className='text-5xl text-center pb-16'>Heart Of eBitans</h1>
                <div className='py-14 flex justify-center container px-5 lg:px-10'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-40 '>
                        {
                            team?.map((item, id) =>
                                <div key={id} className="group">
                                    <div className='lg:h-[300px] md:h-[400px] h-[500px] w-full relative'>
                                        <Image width={300} height={300} className='h-full w-full' src={item.image} alt="ebitans image" />
                                        <div className='absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-0 group-hover:opacity-60 duration-300'></div>
                                        <div className='flex gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  opacity-0 group-hover:opacity-100 mt-6 group-hover:mt-0 duration-500 text-white'>
                                            <a className="hover:text-[#f1593a] duration-500 hover:scale-125 text-[30px]" href={item.facebook} target="_blanck"><RiFacebookBoxLine /></a>
                                            <a className="hover:text-[#f1593a] duration-500 hover:scale-125 text-[30px]" href={item.instagram} target="_blanck"><BsInstagram /></a>
                                            <a className="hover:text-[#f1593a] duration-500 hover:scale-125 text-[30px]" href={item.linkedin} target="_blanck"><RiLinkedinBoxLine /></a>
                                        </div>
                                    </div>
                                    <div className='text-center py-6'>
                                        <h1 className='pb-1 text-lg font-bold uppercase'>{item.name}</h1>
                                        <p className='text-sm font-light text-gray-500'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='container px-5 lg:px-10'>
                <Registration />
            </div>
        </div>

    );
};

export default About;


const SingleCircular = ({ data }) => {

    return (
        <div className="flex justify-center">
            <div className="h-[330px] w-[330px] flex flex-col items-center">
                <div className="h-[192px] w-[192px] flex justify-center items-center p-3 ">
                    <CircleProgress data={data} />
                </div>
                <div className="w-full ">
                    <h4 className='text-center text-[17px] text-[#333333] font-semibold'>{data?.title}</h4>
                    <p className={" text-center text-gray-400 text-sm"}>{data?.subTitle}</p>
                </div>
            </div>
        </div>
    )
}
