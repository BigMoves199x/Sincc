import React from 'react';

const AreaOfFocus = () => {
  return (
    <div className='relative md:top-40 top-10 md:px-20 px-4'>
      <h1 className='text-center md:text-5xl text-[20px] font-medium font-inter'>
        Our Area of Focus
      </h1>
      <p className='text-center md:text-[17px] text-[15px] text-[#4E4E4E] font-inter m-auto mt-8 md:w-[920px] w-full leading-[23.8px]'>
        In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab
      </p>
      <div className='md:flex md:justify-center md:items-center py-20 gap-4'>
        <div className='bg-[#303030] md:h-[160px] md:w-[240px] w-full h-[100px] flex justify-center items-center mb-4 md:mb-0'>
          <div className='flex flex-col p-6 md:gap-4 gap-2 text-white text-center'>
            <h1 className='text-[20px]'>01</h1>
            <p className='text-[16px] font-inter'>Business Support & Incubation</p>
          </div>
        </div>
        <div className='bg-[#F47733] md:h-[160px] md:w-[240px] w-full h-[100px] flex justify-center items-center mb-4 md:mb-0'>
          <div className='flex flex-col p-6 md:gap-4 gap-2 text-white text-center'>
            <h1 className='text-[20px]'>02</h1>
            <p className='text-[16px] font-inter'>On-Demand & As-A-Service</p>
          </div>
        </div>
        <div className='bg-[#FF78BF] md:h-[160px] md:w-[240px] w-full h-[100px] flex justify-center items-center mb-4 md:mb-0'>
          <div className='flex flex-col p-6 md:gap-4 gap-2 text-white text-center'>
            <h1 className='text-[20px]'>03</h1>
            <p className='text-[16px] font-inter'>Marketplace & Crowdsourcing</p>
          </div>
        </div>
        <div className='bg-[#20888F] md:h-[160px] md:w-[240px] w-full h-[100px] flex justify-center items-center mb-4 md:mb-0'>
          <div className='flex flex-col p-6 md:gap-4 gap-2 text-white text-center'>
            <h1 className='text-[20px]'>04</h1>
            <p className='text-[16px] font-inter'>Aggregation & Shared Economy</p>
          </div>
        </div>
        <div className='bg-[#FF78BF] md:h-[160px] md:w-[240px] w-full h-[100px] flex justify-center items-center'>
          <div className='flex flex-col p-6 md:gap-4 gap-2 text-white text-center'>
            <h1 className='text-[20px]'>05</h1>
            <p className='text-[16px] font-inter'>Decentralized Economy & Digital Assets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
