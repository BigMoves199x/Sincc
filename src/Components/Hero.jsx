import React from 'react';
import image from '../assets/Image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {/* First Slide */}
            <div className="w-full h-[355px] md:h-screen bg-white">
                <div className="flex flex-col md:flex-row h-full items-center justify-between md:gap-20 w-full mx-0 px-2">
                    <div className="text-left md:text-left md:p-8 relative md:left-10 top-4 py-20 px-6 md:py-20 md:px-10">
                        <h1 className="text-[18px] md:text-[32px] text-[#212121] font-medium font-inter md:w-[480px]  w-[358px] md:leading-[51.2px]">
                            SINC Partners is a service incubation company
                        </h1>
                        <p className="md:text-[24px] text-[18px] text-[#212121] font-inter font-normal text-gray-800  w-[360px] md:w-[491px] mt-2 md:leading-[34.4px]">
                            Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                        </p>
                        <button className="bg-[#303030] font-inter font-medium text-white py-2 px-6 mt-6 md:mt-10 rounded-full">
                            Sinc With Us
                        </button>
                    </div>

                    <div className="hidden md:block w-full h-[40vh] md:h-screen">
                        <img
                            src={image}
                            alt="SINC Partners"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Second Slide */}
            <div className="w-full h-[355px] md:h-screen bg-white">
                <div className="flex flex-col md:flex-row h-full justify-between md:gap-[180px] w-full mx-0 px-0">
                    <div className=" text-left md:text-left md:p-8 relative md:left-10 top-4 py-20 px-6 md:py-20 md:px-10 ">
                        <h1 className="w-[354px] md:text-[32px] text-[20px] text-[#212121] font-medium font-inter md:w-[480px] w-full md:leading-[51.2px] leading-[32px]">
                            Come with an idea, leave with a company.
                        </h1>
                        <p className="w-[354px] md:text-[24px] text-[17px] text-[#212121] font-inter font-normal w-full md:w-[491px] mt-4 md:leading-[34.4px] leading-[27.2px]">
                            You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.
                        </p>
                        <button className="text-[16px] bg-gray-800 text-white py-2 px-6 mt-6 rounded-full">
                            Sinc With Us
                        </button>
                    </div>

                    <div className="hidden md:block w-full h-[40vh] md:h-screen py-10 relative right-20">
                        <img
                            src={image2}
                            alt="Empowering Startups"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Third Slide */}
            <div className="w-full h-[355px] md:h-screen bg-white">
                <div className="flex flex-col md:flex-row h-full justify-between md:gap-20 w-full mx-0 px-2">
                    <div className="text-left md:text-left md:p-8 relative md:left-10 top-4 py-20 px-0 md:py-20 md:px-10">
                        <h1 className="text-[18px] md:text-[32px] text-[#212121] font-medium font-inter md:w-[480px] w-full px-2 md:leading-[51.2px] whitespace-nowrap">
                            We are big on these 3 things;
                        </h1>
                        <div className=" md:w-[348px] text-[17px] md:text-xl text-gray-800 mt-4">
                            <div className="w-[491px] flex items-center leading-8 md:leading-9 font-inter font-normal">
                                <span className="px-2">✓</span>
                                <p className="whitespace-nowrap w-">Service Incubation & Ecosystem Advocacy</p>
                            </div>
                            <div className="flex items-center leading-8 md:leading-9 font-inter font-normal">
                                <span className="px-2">✓</span>
                                <span className="whitespace-nowrap">Building SAAS & Marketing Tech Platforms</span>
                            </div>
                            <div className="flex items-center leading-8 md:leading-9 font-inter font-normal">
                                <span className="px-2">✓</span>
                                <span className="whitespace-nowrap">Institutional Innovations</span>
                            </div>
                        </div>

                        <button className="bg-gray-800 font-inter font-medium text-white py-2 px-6 mt-6 rounded-full">
                            Sinc With Us
                        </button>
                    </div>

                    <div className="hidden md:block w-full h-[40vh] md:h-screen">
                        <img
                            src={image3}
                            alt="SINC Partners"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

        </Slider>
    );
};

export default Hero;
