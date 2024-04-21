"use client"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import styles from "./home.module.css"
import images from '@/lib/images'
import { onSubmit } from '@/lib/registration'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const router = useRouter()

    const handleRegister = (data) => {
        onSubmit(data, setLoading, router )
    }


    return (
        <section className='lg:py-[80px] py-10 relative z-[1] bg-[#F9F7F6]'>
            {/* <div className='absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full'></div> */}
            <div className='relative bg-[#F9F7F6]'>
                <h2 className={`${styles.dream} ${styles.headerOne} text-center `}>LET'S TRY NOW</h2>
                <div className='absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full'></div>
            </div>
            <div className='relative z-[1] container px-5 lg:px-10 rounded-[10px] xl:-mt-24 lg:-mt-10 -mt-6'>
                <div className='text-center'>
                    {/* <p className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px] text-base uppercase`}>People who believe</p> */}
                    <h2 className={`${styles.archivo} ${styles.headerTwo}`}>Get started absolutely FREE</h2>
                    <h4 className={`${styles.archivo} text-[12px] lg:text-[22px] font-normal lg:font-medium`}>Build your e-commerce today. No credit card needed</h4>
                </div>
                <div className='lg:flex gap-1 lg:gap-10 w-full justify-center mt-12'>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className='flex gap-2 w-full'>
                            <div className='w-full '>
                                <input
                                    autoComplete='tel'
                                    placeholder='Enter Your Number'
                                    type="number"
                                    {...register("phone", { required: true, maxLength: 11, minLength: 11 })}
                                    aria-invalid={errors.phone ? "true" : "false"}
                                    className={`w-full ${styles.archivo} lg:w-[260px] px-2 w-full h-10 lg:h-12 text-xs sm:text-sm shadow-2xl ${styles.archivo} placeholder:text-[#D3CDCB] ${(errors.phone?.type === "minLength" || errors.phone?.type === "maxLength") || errors?.phone?.type === "required" ? "border-red-500 focus:border-red-500" : "border-[#a8a3a2] focus:border-[#D3CDCB]"} focus:outline-none focus:ring-0 rounded`} />
                                {errors?.phone?.type === "required" && <span className='text-xs text-red-500 block'>This field is required</span>}
                                {(errors.phone?.type === "minLength" || errors.phone?.type === "maxLength") && (
                                    <p className='text-xs text-red-500 block' role="alert">Number length must be 11</p>
                                )}
                            </div>
                            <div className='w-full relative'>
                                <input
                                    autoComplete='pass'
                                    placeholder='Enter Your Password'
                                    type={`${show ? 'text' : 'password'}`}
                                    {...register("password", { required: true })}
                                    className={`w-full ${styles.archivo} lg:w-[260px] w-full px-2 h-10 lg:h-12 text-xs sm:text-sm shadow-2xl ${styles.archivo} placeholder:text-[#D3CDCB] ${(errors.password?.type === "minLength" || errors.password?.type === "maxLength") || errors?.password?.type === "required" ? "border-red-500 focus:border-red-500" : "border-[#a8a3a2] focus:border-[#D3CDCB]"} focus:outline-none focus:ring-0 rounded`} />
                                <div className='absolute right-2 top-1/2 -translate-y-1/2 z-[2] lg:cursor-pointer'>{show ? <BsEye onClick={() => setShow(!show)} /> : <BsEyeSlash onClick={() => setShow(!show)} />}</div>
                                {errors?.password?.type === "required" && <span className='text-xs text-red-500 block'>This field is required</span>}
                            </div>
                        </div>

                        <div className='flex items-center justify-center mt-5 lg:mt-0'>
                            {loading ?
                                <button className={`group relative h-[34px] sm:h-[48px] lg:w-48 w-28 overflow-hidden rounded bg-[#f1593a] text-[12px] lg:text-lg shadow lg:ml-32`}>
                                    <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                                    <span className={`${styles.archivo} relative  text-white`}>Loading</span>
                                </button> :
                                <button type="submit" className={`group relative h-[34px] sm:h-[48px] lg:w-48 w-28 overflow-hidden rounded bg-[#f1593a] text-[12px] lg:text-lg shadow lg:ml-32`}>
                                    <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                                    <span className={`${styles.archivo} relative  text-white`}>Registration Now</span>
                                </button>}
                            <Image src={images?.arrow} alt="ebitans image" className='rotate-[90deg] -ml-7 hidden lg:block' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register