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
            <div className="w-full h-[60vh] md:h-screen bg-white">
                <div className="flex flex-col md:flex-row h-full items-center justify-between md:gap-20 w-full mx-0 px-0">
                    <div className="">
                        <div className="text-left md:text-left md:p-8 relative md:left-10 top-10 py-28 px-10">
                            <h1 className="text-[20px] md:text-[32px] text-[#212121] font-medium font-inter md:w-[480px] md:leading-[51.2px]">
                                SINC Partners is a service incubation company
                            </h1>
                            <p className="md:text-[24px] text-[20px] text-[#212121] font-inter font-normal text-gray-800 w-[354px] h-[171px] md:w-[491px] mt-2 md:leading-[34.4px]">
                                Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                            </p>
                            <button className="bg-[#303030] font-inter font-medium text-white py-2 px-6 mt-6 md:mt-10 rounded-full">
                                Sinc With Us
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-screen hidden md:block">
                        <img
                            src={image}
                            alt="SINC Partners"
                            className="w-full h-screen md:h-screen object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Second Slide */}
            <div className="w-full h-[60vh] md:h-screen bg-white">
                <div className="flex flex-col md:flex-row h-full justify-between md:gap-[180px] w-full mx-0 px-0">
                    <div className="">
                        <div className="text-left md:text-left md:relative md:left-20 md:top-10 py-40 px-10">
                            <h1 className="text-[20px] md:text-[32px] text-[#212121] font-medium font-inter md:w-[480px] w-[354px] md:leading-[51.2px]">
                                Come with an idea, leave with a company.
                            </h1>
                            <p className="md:text-[24px] text-[20px] text-[#212121] font-inter font-normal w-[354px] h-[171px] md:w-[491px] mt-2 md:leading-[34.4px]">
                                You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.
                            </p>
                            <button className="bg-gray-800 text-white py-2 px-6 mt-6 rounded-full">
                                Sinc With Us
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[40vh] md:h-full scale-125 hidden md:block py-10 relative right-20">
                        <img
                            src={image2}
                            alt="Empowering Startups"
                            className="max-w-full h-screen object-contain"
                        />
                    </div>
                </div>
            </div>


            {/* Third Slide */}
            <div className="w-full h-[60vh] md:h-screen bg-white">
                <div className="flex flex-col md:flex-row h-full justify-between md:gap-20 w-full mx-0 px-0">
                    <div className="">
                        <div className="text-left md:text-left md:p-8 md:relative md:top-40 md:left-10 py-40 px-4" >
                            <h1 className="text-2xl md:text-[32px] text-[#212121] font-medium font-inter md:w-[480px] w-[324px] px-4 md:leading-[51.2px]">
                                We are big on these 3 things;
                            </h1>
                            <div className="text-lg md:text-xl text-gray-800 mt-4">
                                <div className="flex items-center leading-9 font-inter font-normal">
                                    <span className="px-4">✓</span>
                                    <span>Service Incubation & Ecosystem Advocacy</span>
                                </div>
                                <div className="flex items-center leading-9 font-inter font-normal">
                                    <span className="px-4">✓</span>
                                    <span>Building SAAS & Marketing Tech Platforms</span>
                                </div>
                                <div className="flex items-center leading-9 font-inter font-normal">
                                    <span className="px-4">✓</span>
                                    <span>Institutional Innovations</span>
                                </div>
                            </div>
                            <button className="bg-gray-800 font-inter font-medium text-white py-2 px-6 mt-6 rounded-full">
                                Sinc With Us
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:h-screen hidden md:block">
                        <img
                            src={image3}
                            alt="SINC Partners"
                            className="w-full h-screen object-cover"
                        />
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Hero;
