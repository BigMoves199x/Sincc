import React from 'react'

const Concept = () => {
    return (
        <div className='relative top-0 md:top-40 -top-40'>

            <h1 className='md:text-[56px] text-[20] text-center font-medium font-inter'>Our Concept Innovations</h1>
            <p className='text-center text-[14px] text-[#4E4E4E] mt-4 md:w-[934px] md:h-[44px] w-[354px] h-[80px] m-auto'>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>

            <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-10 md:py-20 px-8'>

                <div className='h-[212px] w-[352px] bg-white rounded-lg md:px-4 md:py-6'>
                    <h1 className='text-center md:text-[22px] text-[18px] font-semibold font-inter'>Service Incubator</h1>
                    <p className='text-center text-[16px] font-inter mt-4 w-[320px] leading-6'>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP</p>
                </div>
                <div className='h-[212px] w-[352px] bg-white rounded-lg px-4 py-6'>
                    <h1 className='text-center md:text-[22px] text-[18px] font-semibold font-inter'>Virtualting</h1>
                    <p className='text-center text-[16px] font-inter mt-4 w-[320px] leading-6'>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource</p>
                </div>
                <div className='h-[212px] w-[352px] bg-white rounded-lg md:px-4 md:py-6'>
                    <h1 className='text-center md:text-[22px] text-[18px] font-semibold font-inter'>Diiming</h1>
                    <p className='text-center text-[16px] font-inter mt-4 w-[320px] leading-6'>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice </p>
                </div>
            </div>
        </div>
    )
}

export default Concept