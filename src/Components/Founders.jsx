import React from 'react'
import Ellipse1 from '../assets/Ellipse1.png'
import Ellipse2 from '../assets/Ellipse2.png'
import Ellipse3 from '../assets/Ellipse3.png'
import down from '../assets/down.png'

const Founders = () => {
    return (
        <div className='relative md:top-60 -top-0 md:overflow-x-hidden'>

            <h1 className='text-center font-medium font-inter md:text-[56px] text-[20px]'>Co-found With Us</h1>
            <p className='text-center mx-auto w-auto max-w-[344px] h-auto text-[15px] py-4'>
                We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed
            </p>

            <div className='md:py-10 md:px-14 px-6'>

                <div className='flex flex-col md:flex-row gap-[24px]'>
                    <div className='h-[296px] w-full max-w-[380px] bg-white rounded-lg flex flex-col justify-between'>
                        <div className='p-4'>
                            <div className='relative'>
                                <img src={Ellipse1} alt="" className='w-[60px] h-[60px] mb-2' />
                                <h1 className='absolute top-[11px] left-[23px] text-white text-2xl'>
                                    1
                                </h1>
                            </div>

                            <h1 className='text-[20px] font-inter font-medium'>We Ideate</h1>
                            <p className='font-inter py-4 font-normal w-full max-w-[340px] h-auto text-[14px] md:text-[16px] text-[#4E4E4E] leading-[20px] md:leading-[22px]'>
                                We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
                            </p>
                        </div>
                    </div>

                    <div className='h-[296px] w-full max-w-[380px] bg-white rounded-lg flex flex-col justify-between'>
                        <div className='p-4'>
                            <div className='relative'>
                                <img src={Ellipse2} alt="" className='mb-2' />
                                <h1 className='absolute top-[11px] left-[23px] text-white text-2xl'>2</h1>
                            </div>

                            <h1 className='text-[18px] md:text-[20px] font-inter font-medium'>You Validate</h1>
                            <p className='font-inter py-4 font-normal w-full max-w-[340px] h-auto text-[14px] md:text-[16px] text-[#4E4E4E] leading-[20px] md:leading-[22px]'>
                                You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions.
                            </p>
                        </div>
                    </div>


                    <div className='h-[296px] w-full max-w-[380px] bg-white rounded-lg flex flex-col justify-between'>
                        <div className='p-4'>
                            <div className='relative'>
                                <img src={Ellipse3} alt="" className='mb-2' />
                                <h1 className='absolute top-[11px] left-[23px] text-white text-2xl'>
                                    3
                                </h1>
                            </div>
                            <h1 className='text-[20px] font-inter font-medium'>You Co-own</h1>
                            <p className='font-inter py-4 font-normal w-full max-w-[340px] h-auto text-[14px] md:text-[16px] text-[#4E4E4E] leading-[20px] md:leading-[22px]'>
                                After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center align-center items-center py-10'>
                    <p className='text-[16px] font-bold text-[#4E4E4E] border-solid border-b-2 border-black'>Build your dream</p>
                    <span><img src={down} alt="Dropdown arrow" className='ml-2 w-[15.54px] h-[15.54px] ' /></span>
                </div>
            </div>
        </div>
    )
}

export default Founders
