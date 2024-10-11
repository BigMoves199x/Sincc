import React from 'react'
import african1 from '../assets/african1.png'
import { FaTimes } from "react-icons/fa";

const SweetEquity = ({ setShowEquity }) => {


    return (
        <div className='md:px-4 fixed inset-0 z-50 flex items-center justify-center'>
            <div className='md:w-[1200px] md:h-[580px] bg-[#212121] drop-shadow-lg rounded-[32px] md:px-24'>
                <div className='flex md:flex-col md:gap-4 md:py-8'>
                    <h1 className='text-white md:text-[26px] font-inter font-extrabold'>What is the Value of My Sweat Equity?
                    </h1>
                    <p className='md:text-[12px] text-white '>A simple analysis of what the value of your service investment will be as Service Incubator;</p>
                    <FaTimes onClick={() => setShowEquity(false)}
                        size={30}
                        className='cursor-pointer text-white absolute top-4 right-14 z-80' />
                </div>

                <div className='md:flex md:flex-cols gap-8'>
                    <div>
                        <img src={african1} alt="" className='rounded-2xl' />
                    </div>

                    <div className='md:w-[746.53px] md:h-[215.72px] bg-[#3B3A3A] md:rounded-2xl md:px-4 md:py-4'>
                        <h1 className='text-white text-[18.49px]'>CHINENYE</h1>

                        <div className='flex flex-row gap-20 py-4'>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[10.79px] text-[#8A8A8A] font-inter'>Age</p>
                                <h1 className='text-white font-inter font-bold text-[13.87px]'>26years</h1>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[10.79px] text-[#8A8A8A] font-inter'>Occupation</p>
                                <h1 className='text-white font-inter font-bold text-[13.87px]'>Software Developer</h1>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[10.79px] text-[#8A8A8A] font-inter'>Gender</p>
                                <h1 className='text-white font-inter font-bold text-[13.87px]'>Male</h1>
                            </div>

                        </div>

                        <p className='w-[708.78px] h-[90.14px] text-[12.33px] text-white leading-[22.99px] md:py-2'>Chinenye a software engineer, offers her service worth N2,812,500 ($3,750k) out of the $25k service investment requested from the portfolio company to vest within a 3 months period for a 1.5% equity (from the 10% equity been offered) by the company with the intent to build 250 functionalities of the MVP under the ASIN5 Service Incubation Program (SIP) at a valuation of $250k.
                        </p>

                    </div>

                </div>

                <div className='md:flex md:flex-cols gap-8 py-4'>
                    <div className='w-[483.82px] h-[193.37px] bg-[#3B3A3A] rounded-2xl px-4 py-4'>
                        <h1 className='text-white text-[15.41px] p-2 font-inter font-normal'>Scenario 1</h1>
                        <p className='w-[451.46px] h-[102.47px] text-[12.33px] text-white leading-[22.99px] p-2'>Within the first 12 months, if the company goes ahead to raise its pre-seed investment of N375m ($500k) for a 10% equity at a valuation of N3.75bn ($5m), Chinenye’s shares would be divested to 1.35% and her ROI would then be 20X and estimated to be N56.25m ($75,000)</p>

                    </div>

                    <div className='w-[483.82px] h-[193.37px]  bg-[#3B3A3A] rounded-2xl px-4 py-4'>
                        <h1 className='text-white text-[15.41px] p-2 font-inter font-normal'>Scenario 2</h1>
                        <p className='w-[451.46px] h-[102.47px] text-[12.33px] text-white leading-[22.99px] p-2'>Within the first 12 months, goes ahead to raise its pre-seed investment of N375m ($500k) for a 20% equity at a valuation of N3.75bn ($5m), Chinenye’s shares would be divested to 1.35% and her ROI would then be 10X and estimated to be N28.125m ($37,500)
                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SweetEquity