"use client"
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import styles from "./home.module.css"
import { onSubmit } from '@/lib/registration';
import images from '@/lib/images';

const HeroRegister = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const router = useRouter()

    const handleRegister = (data) => {
        onSubmit(data, setLoading, router, reset)
    }


    return (
        <>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className='flex gap-2 w-full'>
                    <div className='w-full '>
                        <input
                            autoComplete='tel'
                            placeholder='Enter Your Number'
                            type="number"
                            {...register("phone", { required: true, maxLength: 11, minLength: 11 })}
                            aria-invalid={errors.phone ? "true" : "false"}
                            className={`w-full ${styles.archivo} ${(errors.phone?.type === "minLength" || errors.phone?.type === "maxLength") || errors?.phone?.type === "required" ? "border-red-500 focus:border-red-500" : "border-[#a8a3a2] focus:border-[#D3CDCB]"} h-[40px] sm:h-[48px] drop-shadow-4xl text-xs lg:text-base border-[1.5px] placeholder:text-[#D3CDCB] focus:outline-none focus:ring-0 rounded-sm px-4`} />
                        {errors?.phone?.type === "required" && <span className='text-xs text-red-500 block'>This field is required</span>}
                        {(errors.phone?.type === "minLength" || errors.phone?.type === "maxLength") && (
                            <p className='text-xs text-red-500 block' role="alert">Number length must be 11</p>
                        )}
                    </div>
                    <div className='w-full lg:mr-20 relative'>
                        <input
                            autoComplete='pass'
                            placeholder='Enter Your Password'
                            type={`${show ? 'text' : 'password'}`}
                            {...register("password", { required: true })}
                            className={`w-full ${styles.archivo} h-[40px] sm:h-[48px] drop-shadow-4xl text-xs lg:text-base placeholder:text-[#D3CDCB] border-[1.5px] ${(errors.password?.type === "minLength" || errors.password?.type === "maxLength") || errors?.password?.type === "required" ? "border-red-500 focus:border-red-500" : "border-[#a8a3a2] focus:border-[#D3CDCB]"} focus:outline-none focus:ring-0 rounded-sm px-4`} />
                        <div className='absolute right-2 top-1/2 -translate-y-1/2 z-[2] lg:cursor-pointer'>{show ? <BsEye onClick={() => setShow(!show)} /> : <BsEyeSlash onClick={() => setShow(!show)} />}</div>
                        {errors?.password?.type === "required" && <span className='text-xs text-red-500 block'>This field is required</span>}
                    </div>
                </div>

                <div className='flex items-center justify-center lg:justify-start lg:-mt-5 mt-3'>
                    {loading ?
                        <button className={`group relative h-12 w-48 overflow-hidden rounded-lg bg-[#F1593A] text-lg shadow `}>
                            <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                            <span className={`${styles.archivo} relative  text-white`}>Loading</span>
                        </button> :
                        <button type="submit" className={`group relative h-12 w-60 overflow-hidden rounded-[3px] bg-[#F1593A] text-lg shadow `}>
                            <div className={`absolute inset-0 w-1 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                            <span className={`${styles.archivo} relative  text-white`}>Registration Now</span>
                        </button>
                    }
                    <Image src={images?.arrow} alt="ebitans image" className='rotate-[90deg] -ml-7 hidden lg:block relative -z-[1]' />
                </div>
            </form>
        </>
    )
}

export default HeroRegister