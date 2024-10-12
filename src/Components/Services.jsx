import React, { useState } from 'react'
import Polygon1 from '../assets/Polygon1.png'
import Polygon2 from '../assets/Polygon2.png'
import Polygon3 from '../assets/Polygon3.png'
import down from '../assets/down.png'
import Math from './Math'
import ServiceIncubator from './ServiceIncubator'
import SweetEquity from './SweetEquity'


const Services = () => {

  const [showMath, setShowMath] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showEquity, setShowEquity] = useState(false);

  const toggleMath = () => {
    setShowMath(!showMath); // Toggle the Math component visibility
  };

  return (
    <div className='relative md:top-40 -top-10 px-4'>

      <h1 className='text-center font-medium font-inter md:text-[56px] text-[24px]'>Our Service Incubation Model</h1>
      <p className='text-center text-[15px] w-full sm:w-[90%] lg:w-[70%] m-auto py-4'>
        The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as being first to invest.
      </p>

      <div className='py-10 md:py-20 px-4 md:px-10'>
        <h1 className='text-[28px] md:text-[32px] font-inter font-medium text-center'>Hypothesis</h1>
        <p className='mt-4 text-[16px] md:text-[18px] text-center font-inter'>Just a few reasons we know it's time for this model within the ecosystem</p>

        <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-center mt-10'>
          <div className='bg-white rounded-lg p-6 w-full max-w-[380px]'>
            <img src={Polygon1} alt="" className='animate-spin-slow' />
            <p className='font-inter font-normal py-4 text-[16px] md:text-[17px] text-[#4E4E4E] leading-[22px]'>
              Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support.
            </p>
          </div>

          <div className='bg-white rounded-lg p-6 w-full max-w-[380px]'>
            <img src={Polygon2} alt="" className='animate-spin-slow' />
            <p className='font-inter py-4 font-normal text-[16px] md:text-[17px] text-[#4E4E4E] leading-[22px]'>
              If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment.
            </p>
          </div>

          <div className='bg-white rounded-lg p-6 w-full max-w-[380px]'>
            <img src={Polygon3} alt="" className='animate-spin-slow' />
            <p className='font-inter py-4 font-normal text-[16px] md:text-[17px] text-[#4E4E4E] leading-[22px]'>
              Young professionals who don’t have a lot of money to invest nor are accredited investors will have opportunities to take equity at the early stage of their career, usually being the first to invest and almost guaranteed of return.
            </p>
          </div>
        </div>

        <div className='mt-10 md:mt-20'>
          <h1 className='text-[28px] md:text-[32px] text-center font-semibold'>Case Study</h1>
          <p className='text-center mx-auto text-[15px] w-full max-w-full sm:w-[90%] lg:w-[60%] px-4 py-4'>
            See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time
          </p>


          <div className='flex flex-col md:flex-row gap-6 justify-center py-10 px-4'>
            <div className='w-full max-w-[286px] h-[48px] bg-white rounded-full border border-black'>
              <p onClick={() => setShowService(true)} className='text-center p-2 text-[18px] md:text-[20px] cursor-pointer'>Service Incubator Equity</p>
              {showService && <ServiceIncubator setShowService={setShowService} />}
            </div>

            <div className='w-full max-w-[286px] h-[48px] bg-white rounded-full border border-black'>
              <p onClick={toggleMath} className='text-center p-2 text-[18px] md:text-[20px] cursor-pointer'>SEEQ Maths Equation</p>
              {showMath && <Math setShowMath={setShowMath} />}
            </div>

            <div className='w-full max-w-[286px] h-[48px] bg-white rounded-full border border-black'>
              <p onClick={() => setShowEquity(true)} className='text-center p-2 text-[18px] md:text-[20px] cursor-pointer'>Value of my Equity Over Time</p>
              {showEquity && <SweetEquity setShowEquity={setShowEquity} />}
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <p className='text-[16px] text-[#4E4E4E] font-bold border-solid border-b-2 border-black'>Become A Service Incubator</p>
            <span><img src={down} alt="Dropdown arrow" className='ml-2 w-[16px] h-[16px]' /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
