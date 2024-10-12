import React from 'react';

const Concept = () => {
    return (
        <div className='relative md:top-40 top-0 px-4 py-10'>
            <h1 className='md:text-[56px] text-[24px] text-center font-medium font-inter'>
                Our Concept Innovations
            </h1>
            <p className='text-center text-[14px] md:text-[16px] text-[#4E4E4E] mt-4 md:w-[934px] w-full m-auto'>
                We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;
            </p>

            <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-10 py-10 md:py-20'>
                <div className='bg-white rounded-lg p-6 h-auto w-full md:w-[352px]'>
                    <h1 className='text-center text-[18px] md:text-[22px] font-semibold font-inter'>
                        Service Incubator
                    </h1>
                    <p className='text-center text-[14px] md:text-[16px] font-inter mt-4 leading-6'>
                        A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
                    </p>
                </div>
                <div className='bg-white rounded-lg p-6 h-auto w-full md:w-[352px]'>
                    <h1 className='text-center text-[18px] md:text-[22px] font-semibold font-inter'>
                        Virtualting
                    </h1>
                    <p className='text-center text-[14px] md:text-[16px] font-inter mt-4 leading-6'>
                        A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource
                    </p>
                </div>
                <div className='bg-white rounded-lg p-6 h-auto w-full md:w-[352px]'>
                    <h1 className='text-center text-[18px] md:text-[22px] font-semibold font-inter'>
                        Diiming
                    </h1>
                    <p className='text-center text-[14px] md:text-[16px] font-inter mt-4 leading-6'>
                        A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Concept;
