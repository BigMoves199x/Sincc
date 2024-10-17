import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skin from '../assets/Skin.png'
import kree from '../assets/kree.png'
import krow from '../assets/krow.png'
import wettaa from '../assets/wettaa.png'
import down from '../assets/down.png'

const EquityJobs = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,  // Enable center mode
                    centerPadding: '40px',  // Add padding around the slides
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,  // Enable center mode
                    centerPadding: '40px',  // Add padding around the slide
                },
            },
        ],
    };
    


    return (
        <div className="relative py-10 md:py-40 top-40">
            <h1 className="text-2xl text-center font-bold mb-4">Equity jobs</h1>
            <p className="mb-4 text-center max-w-full w-[335px] h-[63px] mx-auto">See companies and startups offering equity or a mix of cash and equity for very important positions in their company</p>
            <Slider {...settings}>
                {/* Each slide will show 4 cards on large screens */}
                <div className=" py-8">
                    <div className='w-[278px] h-[449px] bg-white rounded-2xl mx-2 px-4 py-4'>
                        <img src={Skin} alt="" />
                        <p className='text-[14px] font-inter py-4'>This company is a SAAS Startup that builds AI copy generator...</p>

                        <h1 className='text-[18px] font-inter font-semibold'>Chief Executive Officer</h1>

                        {/* First Flex Group */}
                        <div className='grid grid-cols-2 gap-4 py-2'>
                            <div className=''>
                                <h1 className="font-semibold text-[#8E8E8E] text-[14px]">LOCATION</h1>
                                <p className='text-[14px]'>Abuja, Nigeria</p>
                            </div>
                            <div className=''>
                                <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">INDUSTRY</h1>
                                <p className='text-[14px]'>On-demand print</p>
                            </div>
                        </div>

                        {/* Second Flex Group */}
                        <div className='grid grid-cols-2 gap-4 py-2'>
                            <div className=''>
                                <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">EQUITY</h1>
                                <p className='text-[14px]'>1.2%</p>
                            </div>
                            <div className=''>
                                <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">STIPEND</h1>
                                <p className='text-[14px]'>NGN 200,000/mth</p>
                            </div>
                        </div>

                        {/* Third Flex Group */}
                        <div className='grid grid-cols-2 gap-4 py-2'>
                            <div className=''>
                                <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">DEADLINE</h1>
                                <p className='text-[14px] w-[120px]'>24th, January 2024</p>
                            </div>
                            <div className=''>
                                <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">ROLE TYPE</h1>
                                <p className='text-[14px] w-[55px] ml-14'>Full-time</p>
                            </div>
                        </div>

                        <div className='relative top-[14px] w-[185px] h-[47px] bg-[#303030] rounded-3xl flex items-center justify-center'>
                            <p className='text-[16px] text-white'>View Details</p>
                        </div>
                    </div>


                </div>


                <div className="flex justify-center py-8">
                    
                        <div className='w-[278px] h-[449px] bg-white rounded-lg mx-2 px-4 py-4'>
                            <img src={kree} alt="" />
                            <p className='text-[14px] font-inter py-4'>This company is a SAAS Startup that builds AI copy generator...</p>

                            <h1 className='text-[18px] font-inter font-semibold'>UX Strategist</h1>

                            {/* First Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px]">LOCATION</h1>
                                    <p className='text-[14px]'>Abuja, Nigeria</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">INDUSTRY</h1>
                                    <p className='text-[14px]'>E-commercet</p>
                                </div>
                            </div>

                            {/* Second Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">EQUITY</h1>
                                    <p className='text-[14px]'>1.2%</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">STIPEND</h1>
                                    <p className='text-[14px]'>NGN 200,000/mth</p>
                                </div>
                            </div>

                            {/* Third Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">DEADLINE</h1>
                                    <p className='text-[14px] w-[120px]'>24th, January 2024</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">ROLE TYPE</h1>
                                    <p className='text-[14px] w-[55px] ml-14'>Full-time</p>
                                </div>
                            </div>

                            <div className='relative top-[14px] w-[185px] h-[47px] bg-[#303030] rounded-3xl flex items-center justify-center'>
                                <p className='text-[16px] text-white'>View Details</p>
                            </div>
                        </div>

                   
                </div>



                <div className="flex justify-center py-8">
                 
                        <div className='w-[278px] h-[449px] bg-white rounded-lg mx-2 px-4 py-4'>
                            <img src={krow} alt="" />
                            <p className='text-[14px] font-inter py-4'>This company is a SAAS Startup that builds AI copy generator...</p>

                            <h1 className='text-[18px] font-inter font-semibold'>CTO & Head of innovations</h1>

                            {/* First Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px]">LOCATION</h1>
                                    <p className='text-[14px]'>Abuja, Nigeria</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">INDUSTRY</h1>
                                    <p className='text-[14px]'>Fintech</p>
                                </div>
                            </div>

                            {/* Second Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">EQUITY</h1>
                                    <p className='text-[14px]'>1.2%</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">STIPEND</h1>
                                    <p className='text-[14px]'>NGN 200,000/mth</p>
                                </div>
                            </div>

                            {/* Third Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">DEADLINE</h1>
                                    <p className='text-[14px] w-[120px]'>24th, January 2024</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">ROLE TYPE</h1>
                                    <p className='text-[14px] w-[55px] ml-14'>Full-time</p>
                                </div>
                            </div>

                            <div className='relative top-[14px] w-[185px] h-[47px] bg-[#303030] rounded-3xl flex items-center justify-center'>
                                <p className='text-[16px] text-white'>View Details</p>
                            </div>
                        </div>

                 
                </div>


                <div className="flex justify-center py-8">
                 
                        <div className='w-[278px] h-[449px] bg-white rounded-lg mx-2 px-4 py-4'>
                            <img src={wettaa} alt="" />
                            <p className='text-[14px] font-inter py-4'>This company is a SAAS Startup that builds AI copy generator...</p>

                            <h1 className='text-[18px] font-inter font-semibold'>Backend Developer</h1>

                            {/* First Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px]">LOCATION</h1>
                                    <p className='text-[14px]'>Abuja, Nigeria</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">INDUSTRY</h1>
                                    <p className='text-[14px]'>Transportation</p>
                                </div>
                            </div>

                            {/* Second Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">EQUITY</h1>
                                    <p className='text-[14px]'>1.2%</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">STIPEND</h1>
                                    <p className='text-[14px]'>NGN 200,000/mth</p>
                                </div>
                            </div>

                            {/* Third Flex Group */}
                            <div className='grid grid-cols-2 gap-4 py-2'>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] ">DEADLINE</h1>
                                    <p className='text-[14px] w-[120px]'>24th, January 2024</p>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-[#8E8E8E] text-[14px] text-right">ROLE TYPE</h1>
                                    <p className='text-[14px] w-[55px] ml-14'>Full-time</p>
                                </div>
                            </div>

                            <div className='relative top-[14px] w-[185px] h-[47px] bg-[#303030] rounded-3xl flex items-center justify-center'>
                                <p className='text-[16px] text-white'>View Details</p>
                            </div>
                        </div>

                    


                </div>

            </Slider>
            <div className='flex justify-center align-center items-center py-4'>
                <p className='text-[16px] font-bold text-[#4E4E4E] border-solid border-b-2 border-black'>See More Equity Jobs</p>
                <span><img src={down} alt="Dropdown arrow" className='ml-2 w-[15.54px] h-[15.54px] ' /></span>
            </div>
        </div>
    );
}

export default EquityJobs;
