import React from 'react'
import african from '../assets/african.png'
import { FaTimes } from "react-icons/fa";
import Venture from '../assets/Venture.png'
import Micro from '../assets/Micro.png'
import Tech from '../assets/Tech.png'
import Start from '../assets/Start.png'
import Future from '../assets/Future.png'
import Ingressive from '../assets/Ingressive.png'
import Combinator from '../assets/Combinator.png'
import Startup from '../assets/Startup.png'
import arrowright from '../assets/arrowright.png'


const Math = ({ setShowMath }) => {


    return (

        <div className='md:px-4 md:py-4 fixed inset-0 z-50 flex items-center justify-center'>
            <div className='md:w-[1200px] md:h-[580px] bg-white rounded-[32px] drop-shadow-lg md:px-10 '>
                <div className='flex md:flex-col md:gap-4 md:py-2'>
                    <h1 className='text-[#1F66AB] md:text-[29px] font-inter font-extrabold'>The Math (Equation) </h1>
                    <p className='md:text-[13px] text-[#212121] '>Below is the average equity to dollar ratio for different incubators and accelerators  </p>
                    <p className='md:text-[17px] text-[#F47733] font-semibold font-inter'>Incubators</p>
                    <FaTimes
                        onClick={() => setShowMath(false)}
                        size={30}
                        className='cursor-pointer absolute top-4 right-14 z-80'
                    />
                </div>

                <div className='flex flex-cols gap-2 '>
                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>

                        <div className='px-2 py-[12px]'>
                            <img src={Venture} alt="" />

                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$20k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 10% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $2,000</span> </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>

                        <div className='px-2 py-[12px]'>
                            <img src={Micro} alt="" />

                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$25k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 7% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $3,571.4</span> </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>

                        <div className='px-2 py-[12px]'>
                            <img src={Tech} alt="" />

                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$20k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 6% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $3,333</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>

                        <div className='px-2 py-[12px]'>
                            <img src={Start} alt="" />

                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$20k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 6% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $3,333</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <h1 className='relative top-10 text-[#1F66AB] text-[17.12px] font-semibold font-inter mb-2'>
                    Accelerator
                </h1>
                <div className='flex flex-cols gap-2 py-14'>
                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>
                        <div className='px-2 py-[12px]'>
                            <img src={Future} alt="" />

                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$50k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 10% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $5,000</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>

                        <div className='px-2 py-[12px]'>
                            <img src={Ingressive} alt="" />
                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$200k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 10% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $20,000</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>

                        <div className='px-2 py-[12px]'>
                            <img src={Combinator} alt="" />
                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$125k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 7% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $17,857</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-[#FFFFFF] w-[175.48px] h-[164.36px] border-solid border-[#E9E9E9] border-[0.86px]'>

                        <div className='px-2 py-[12px]'>
                            <img src={Startup} alt="" />
                            <div className='flex flex-col gap-[10px] py-[10px]'>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Investment: <span className='text-[#1F66AB] font-semibold font-inter'>$150k</span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'>Equity: <span className='text-[#1F66AB] font-semibold font-inter'> 6% </span> </p>
                                </div>
                                <div className='flex item-center'>
                                    <img src={arrowright} alt="" className='object-contain mr-2' />
                                    <p className='text-[13.7px] text-[#212121]'> 1% Equity = <span className='text-[#1F66AB] font-semibold font-inter'> $25,000</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='md:absolute md:top-[150px] md:left-[820.16px] md:w-[353.54px] md:h-[402.33px]'>
                    <img src={african} alt="" />
                </div>

            </div>

        </div>

    )
}

export default Math