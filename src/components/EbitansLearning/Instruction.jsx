"use client"
import { Accordion } from 'keep-react'
import { useState } from 'react'
import styles from "@/components/home/home.module.css"

const Instruction = () => {

    const [active, setActive] = useState(1)

    return (
        <div className='relative z-[4]'>
            <Accordion openFirstPanel={true} flush={true}>
                {
                    instruction?.map(item =>
                        <Accordion.Panel key={item?.id} className="relative border-b-0">
                            <p className={`absolute ${styles.paragraph} w-[3px] ${active === item?.id ? "h-full" : "h-0"} duration-[1s] bg-[#E99989] left-0 top-0`}></p>
                            <Accordion.Container className='text-left'>
                                <h3 onClick={() => setActive(prevId => prevId === item?.id ? null : item?.id)} className={`${styles.archivo} ${active === item?.id ? "text-[#f1593a]" : "text-[#D0C8C6]"} text-xl lg:text-3xl font-bold`}>{item?.title}</h3>
                            </Accordion.Container>
                            <Accordion.Content className={`${styles.archivo} ${styles.paragraph} lg:my-5 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between`}>
                                <div>
                                    <p className='text-black'>{item?.subTitle}</p>
                                    <button className={`group relative z-[4] h-12 w-48 overflow-hidden rounded-lg bg-[#f1593a] text-lg shadow mt-5 lg:mt-10`}>
                                        <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                                        <span className={`${styles.archivo} relative  text-white`}>Register Now</span>
                                    </button>
                                </div>
                                <div>
                                    <iframe
                                        className="h-[300px] w-full rounded"
                                        src={item?.video}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title="video"
                                    />{" "}
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                    )
                }
            </Accordion>
        </div>
    )
}

export default Instruction

const instruction = [
    {
        id: 1,
        title: "Journey starts with Registration Now",
        subTitle: "Go to 'www.admin.ebitans.com/register' and register your account with 'Your Name', 'Mobile Number' & 'Password'",
        video: "https://www.youtube.com/embed/muglgJznY68",

    },
    {
        id: 2,
        title: "Website Create",
        subTitle: "Create your website by entering your 'Shop Name' & 'Store Category",
        video: "https://www.youtube.com/embed/yRF5qLPfl5E",

    },
    {
        id: 3,
        title: "Add Category",
        subTitle: "To give your website a proper look needs to add products, for that first need to add categories, subcategories, product variants, brands and suppliers.",
        video: "https://www.youtube.com/embed/_siCvBJQt4k",

    },
    {
        id: 4,
        title: "Add Product",
        subTitle: "Now add your product with proper image, description and price.",
        video: "https://www.youtube.com/embed/0Ua3zIcwazk",

    },
    {
        id: 5,
        title: "Website Logo & Information",
        subTitle: "Upload your business logo, address, contact information and integrate your website with social media platforms.",
        video: "https://www.youtube.com/embed/hG8TV4Ry61U",

    },
    {
        id: 6,
        title: "Theme Selection",
        subTitle: "To give your website a beautiful look select a theme from our theme store and customise your theme through few clicks.",
        video: "https://www.youtube.com/embed/EGm3FvomjO8",

    },
    {
        id: 7,
        title: "Select Header Menu",
        subTitle: "Select header menu and theme highlighted color for better personalization.",
        video: "https://www.youtube.com/embed/vR9p3CT1e5s",

    },
    {
        id: 8,
        title: "Add Slider & Banner",
        subTitle: "ding slider and ad banner image for your product promotional purpose.",
        video: "https://www.youtube.com/embed/Yv74r5kIxrU",

    },
    {
        id: 9,
        title: "Add More Page",
        subTitle: "Add pages which is related to your business. Ex: About, Terms & Conditions, Contact, etc.",
        video: "",

    },
    {
        id: 10,
        title: "Add Personal Domain",
        subTitle: "Finally, add you own domain to spread your business worldwide.",
        video: "https://www.youtube.com/embed/NYelOP9lv90",

    },

]