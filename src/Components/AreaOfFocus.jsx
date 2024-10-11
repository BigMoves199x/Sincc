import React from 'react'

const AreaOfFocus = () => {
    return (
        <div className='relative md:top-40 -top-10 md:px-20'>
            <h1 className='text-center md:text-5xl text-[20px] font-medium font-inter'>Our Area of Focus</h1>
            <p className='text-center md:text-[17px] text-[15px] text-[#4E4E4E] font-inter m-auto mt-8 md:w-[920px] w-[354px] md:h-[72px] leading-[23.8px]'>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>
            <div className='md:flex justify-center items-center py-20 px-[20px] '>
                <div className='bg-[#303030] md:h-[160px] md:w-[240px] w-[354px] h-[100px]'>
                    <div className='flex flex-col p-6 md:gap-10 gap-4 md:text-[20px] text-[16px]'>
                        <h1 className='text-white font-inter'>01</h1>
                        <p className='text-white  font-inter'>Business Support & Incubation</p>
                    </div>
                </div>
                <div className='bg-[#F47733] md:h-[160px] md:w-[240px] w-[354px] h-[100px]'>
                    <div className='flex flex-col p-[20px] md:gap-10 gap-4 md:text-[20px] text-[16px]'>
                        <h1 className='text-white font-inter'>02</h1>
                        <p className='text-white font-inter md:w-[180px] md:h-[48px] w-[220px] h-[19px] md:leading-[24px]'>On-Demand & As-A-Service</p>
                    </div>
                </div>
                <div className='bg-[#FF78BF] md:h-[160px] md:w-[240px] w-[354px] h-[100px]'>
                    <div className='flex flex-col p-[20px] md:gap-10 gap-4 md:text-[20px] text-[16px]'>
                        <h1 className='text-white font-inter'>03</h1>
                        <p className='text-white font-inter md:w-[180px] md:h-[48px] w-[220px] h-[19px] md:leading-[24px]'>Marketplace & Crowdsourcing</p>
                    </div>
                </div>
                <div className='bg-[#20888F] md:h-[160px] md:w-[240px] w-[354px] h-[100px]'>
                    <div className='flex flex-col p-[20px] md:gap-10 gap-4 md:text-[20px] text-[16px]'>
                        <h1 className='text-white font-inter'>04</h1>
                        <p className='text-white font-inter md:w-[180px] md:h-[48px] w-[287px] h-[19px] leading-[24px]'>Aggregation & Shared Economy</p>
                    </div>
                </div>
                <div className='bg-[#FF78BF] md:h-[160px] md:w-[240px] w-[354px] h-[100px]'>
                    <div className='flex flex-col p-[20px] md:gap-10 gap-4 md:text-[20px] text-[16px]'>
                        <h1 className='text-white font-inter'>05</h1>
                        <p className='text-white font-inter md:w-[180px] md:h-[48px] w-[287px] h-[19px] leading-[24px]'>Decentralized Economy & Digital Assets</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AreaOfFocus