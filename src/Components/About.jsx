import React from 'react'
import down from '../assets/down.png'

const About = () => {
    return (
        <div className='md:h-[170vh] h-screen flex item-center justify-center'>
            <div className='bg-[#ffffff] md:w-[889px] md:h-[240px] w-[360px] h-[238px] rounded-3xl relative top-20'>
                <h1 className='text-center font-inter flex m-auto md:w-[843px] md:h-[90px] md:text-[20px] text-[16px] w-[328px] h-[144px] md:py-8 py-4'>"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"</h1>

                <div className='md:py-14 py-6'>
                    <p className='text-center md:text-[16px] text-[14px] font-inter font-medium'>Daniel Izeghs Oratokhai</p>
                    <p className='text-center md:text-[16px] text-[14px] font-inter mt-2 hidden md:block'>Managing Partner at SINC Partners Ltd</p>
                    <p className='text-center md:text-[16px] text-[14px] font-inter mt-2 md:hidden block'>MP & CEO of SINC Partners Ltd</p>
                </div>

                <div className='py-8 block md:hidden'>
                    <h1 className='text-[20px] font-medium w-[348px] h-[52px] text-center'>Building the future together, democratizing success.</h1>
                    <p className='text-[14px] w-[354px] h-[180px] text-center leading-[20px] py-6 font-normal'>SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
                        We are a Gasus Business, a business built on the foundation of Christian values and belief.</p>


                </div>
                <div className='m-auto w-[173px] h-[43px] bg-[#303030] rounded-full block md:hidden'>
                 <p className='text-white text-[16px] font-bold text-center py-2 cursor-pointer'>Read About Us</p>

                </div>
                <div className='relative top-20 hidden md:block'>
                    <h1 className='text-[56px] w-[898px] h-[146px] m-auto text-center font-inter font-medium'>Network of builders helping startup scale</h1>
                    <div className='flex flex-col md:flex-row gap-10 justify-center items-center p-10 mt-10'>
                        {/* First Card */}
                        <div className='bg-white rounded-2xl md:w-[528px] md:h-[370px] w-[360px] h-[238px] shadow-lg'>
                            <div className='px-6 md:px-8 py-6 md:py-6'>
                                <h1 className='font-inter font-semibold text-[24px] leading-[28.8px] w-full md:w-[462px] h-[58px]'>
                                    Work with Service Incubators to expedite your time-to-market
                                </h1>
                                <p className='mt-4 text-[17px] leading-[27px] w-[480px] h-[197px]'>
                                    Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
                                    <span className='font-inter font-semibold text-[#4E4E4E] w-[450px] leading-[27px] block mt-4'>
                                        For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer, and growth marketer to build the MVP of your app or web application and validate it.
                                    </span>
                                </p>

                                <div className='flex gap-2 mt-8'>
                                    <p className='font-inter text-[17px] font-bold border-solid border-b-2 border-black cursor-pointer'>Learn More</p>
                                    <span>
                                        <img src={down} alt="Dropdown arrow" className='mt-2 w-[15.54px] h-[15.54px]' />
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Second Card */}
                        <div className='bg-white rounded-2xl w-full md:w-[528px] h-auto md:h-[370px] shadow-lg'>
                            <div className='px-6 md:px-6 py-6 md:py-6'>
                                <h1 className='font-inter font-semibold text-[24px] leading-[28.8px] w-full md:w-[462px] h-[58px]'>
                                    Access funding after your MVP is validated
                                </h1>
                                <p className='mt-4 text-[17px] leading-[27px] w-[480px] h-[197px]'>
                                    Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
                                    <span className='font-inter text-[17px] w-[480px] text-[#4E4E4E] font-semibold leading-[27px] block mt-4'>
                                        Raise $5k, $25k, $50k, and $125k in 4 bootstrap deals within 12 months.
                                    </span>
                                </p>

                                <div className='flex gap-2 mt-8'>
                                    <p className='font-inter text-[17px] font-bold border-solid border-b-2 border-black cursor-pointer'>Learn More </p>
                                    <span><img src={down} alt="Dropdown arrow" className='mt-2 w-[15.54px] h-[15.54px]' /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About