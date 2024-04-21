import styles from "@/components/home/home.module.css"
import instructionStyles from "./instruction.module.css"
import Instruction from "@/components/EbitansLearning/Instruction"
import Registration from "@/components/pricing/Registration"

export const metadata = {
    title: "eBitans Learning",
    description: "Step-by-step tutorials on setting up your Ebitans store, adding products, managing orders, and configuring essential settings",
  };


const EbitansLearning = () => {

    return (
        <div className='bg-[#F9F7F6] lg:pt-28 pt-20 relative'>
            <div className=''>
                <div className='relative bg-[#F9F7F6]'>
                    <h1 className={`${styles.dream} ${styles.headerOne} text-center `}>BUILD YOUR DREAM</h1>
                    <div className='absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full'></div>
                </div>
                <div className='text-center lg:-mt-20 relative z-[4] container px-5 lg:px-10'>
                    <div className={`${instructionStyles.bgAnimate} w-[345px] h-[345px] bg-[#F3BEB3] bg-opacity-50 blur-3xl rounded-full`}></div>
                    <h1 className={`${styles.archivo} ${styles.headerOne} uppercase max-w-[893px] mx-auto`}>BUILD YOUR OWN ECOMMERCE WEBSITE IN A MINUTE</h1>
                    <h5 className={`${styles.archivo} ${styles.headerFive} font-normal py-10 max-w-[490px] mx-auto`}>Helping businesses go online and grow bigger with high-tech ecommerce website.</h5>
                </div>
            </div>
            <div className='container px-5 lg:px-10'>
                <div className='pt-8 bg-transparent relative z-[4] pb-20'>
                    <Instruction />
                </div>
            </div>
            <div className='container px-5 lg:px-10'>
                <Registration />
            </div>
        </div>

    )
}

export default EbitansLearning