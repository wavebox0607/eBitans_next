
export const metadata = {
    title: "Return and Refund Policy",
    description: "This Return & Refund Policy outlines the conditions under which you can return a product and receive a refund.",
  };

const RefundPolicy = ({ params: { locale } }) => {
    const bangla = locale !== "en"
    return (
        <div className='relative z-[1] bg-[#F9F7F6] lg:pt-[85px] pt-[50px]'>
            <div className="sm:h-[40vh] h-[15vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/eBitans-Web-Bannar1.png')] bg-no-repeat ">
                <h1 className='text-md sm:text-lg md:text-xl lg:text-4xl font-bold text-[#f1593a]'>{!bangla ? "eBitans" : "eBitans"}</h1>
                <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-white'>{!bangla ? "Return & Refund Policy" : "রিটার্ন & রিফান্ড পলিসি"}</h1>
            </div>
            <div className='container px-5 lg:px-10 pt-10 text-justify'>
                <h3 className="text-3xl font-bold pt-8 pb-4">{!bangla ? "Trial Period" : "পরীক্ষামূলক ব্যবহারের সুযোগ"}</h3>
                <p className=' text-m sm:text-lg md:text-xl lg:text-2xl'>{!bangla ? "eBitans offers a 30-day trial period for our services. During this time, customers have full access to our platform to experience its features and benefits. This trial period allows customers to make an informed decision about whether to subscribe to our services." : "eBitans-এ আমরা আমাদের সেবার জন্য ৩০ দিনের একটি পরীক্ষামূলক ব্যবহারের জন্য সময় প্রদান করি। এ সময়ের মধ্যে গ্রাহকরা আমাদের প্ল্যাটফর্মের কার্যকারিতা ও সুবিধাগুলি সম্পূর্ণরূপে অনুভব করতে এবং মূল্যায়ন করতে পারবেন। এই পরীক্ষামূলক সময়ের মধ্যে গ্রাহকদেরকে আমাদের সেবার সম্পর্কে এক্সেস বা বিনামূল্যে ব্যবহার করার সুবিধা দিয়ে থাকি।"}</p>
            </div>
            <div className='container px-5 lg:px-10 py-0 text-justify'>
                <h3 className="text-3xl font-bold pt-8 pb-4">{!bangla ? "Decision Making" : "সিদ্ধান্ত নেওয়ার ক্ষমতা"}</h3>
                <p className=' text-m sm:text-lg md:text-xl lg:text-2xl'>{!bangla ? "After the trial period, customers can decide whether to continue using our services. If they choose to continue, they can select a monthly subscription plan and pay the associated fees. The trial period eliminates the need for a traditional return policy." : "পরীক্ষামূলক সময় শেষ হওয়ার পর, গ্রাহকরা আমাদের সেবা চালিয়ে যাওয়ার বিষয়ে পুরো পুরি সচেতনতার সাথে সিদ্ধান্ত নিতে পারেন। তারা যদি eBitans এর সাথে সেবা শুরু করতে চান, তাহলে তারা মাসিক সাবস্ক্রিপশন প্ল্যান বেছে নিতে পারেন, এবং সে ক্ষেত্রে সেবার সাথে জড়িত সকল ফি সমূহ ভালো মতো জেনে বা বুঝে পেমেন্ট করার সুযোগ প্রদান করছি। যেহেতু শুরুতেই এক মাসের ট্রায়াল সুবিধা থাকছে তাই ট্রায়ালের কারনে আলাদা করে কোন রিটার্ন পলিসির প্রয়োজনীয়তা কাস্টমার বা eBitans অনুভব করেন না। "}</p>
            </div>
            <div className='container px-5 lg:px-10 py-0 text-justify'>
                <h3 className="text-3xl font-bold pt-8 pb-4">{!bangla ? "Subscription Cancellation" : "সাবস্ক্রিপশন বাতিলের স্বাধীনতা"}</h3>
                <p className=' text-m sm:text-lg md:text-xl lg:text-2xl'>{!bangla ? "Customers can cancel their subscription at any time. There are no penalties or fees for cancellation. We are committed to customer satisfaction and providing flexibility." : "কাস্টমারের কথা চিন্তা করে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি আমাদের সেবায় অন্তর্ভুক্ত করেছি তা হলো যে কোন সময় সাবস্ক্রিপশন বাতিলের স্বাধীনতা। যেহেতু আমরা আমাদের গ্রাহকদের, তাদের সুবিধা মতো সেবা প্রদানের ক্ষেত্রে প্রতিশ্রুতিবদ্ধ। যদি তারা কোনও রক্ষণাবেক্ষণের সমস্যার সম্মুখীন হয় বা অন্য কোন কারণে আমাদের সেবা তাদের চাহিদা অনুযায়ী মানসম্মত মনে না করে, তাহলে তারা eBitans-এর কোনো শর্ত বা জরিমানার মুখোমুখি না হয়ে যে কোনো সময় তাদের সাবস্ক্রিপশন বাতিল করতে পারবেন।"}</p>
            </div>
            <div className='container px-5 lg:px-10 pb-40 text-justify'>
                <h3 className="text-3xl font-bold pt-8 pb-4">{!bangla ? "Key Points" : "মূল বার্তা"}</h3>
                <p className=' text-m sm:text-lg md:text-xl lg:text-2xl'>{!bangla ? "eBitans offers a trial period and subscription-based model. The trial period eliminates the need for a separate return policy. Customers can make an informed decision about whether to subscribe. Customers can cancel their subscription at any time." : "eBitans গ্রাহকদের ট্রায়াল ব্যবহারের সুযোগ প্রদান করে, ট্রায়াল ব্যবহারের সুযোগ থাকায় আলাদা রিটার্ন পলিসির প্রয়োজন নেই। ট্রায়াল শেষে গ্রাহকরা সাবস্ক্রাইব করবেন কি না তা স্বাধীনভাবে সিদ্ধান্ত নিতে পারবেন। গ্রাহকরা যেকোনো সময় তাদের সাবস্ক্রিপশন বাতিল করতে পারবেন। eBitans গ্রাহকের প্রতি বিশ্বাস, স্বচ্ছতা এবং গুরুত্ব প্রদানের প্রতি প্রতিশ্রুতিবদ্ধ।"}</p>
            </div>
        </div>
    )
}

export default RefundPolicy