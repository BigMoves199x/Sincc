import React, { useRef } from 'react';
import down from '../assets/down.png';
import Frame60 from '../assets/Frame60.png';
import Frame61 from '../assets/Frame61.png';
import Frame62 from '../assets/Frame62.png';
import Frame63 from '../assets/Frame63.png';
import Frame64 from '../assets/Frame64.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vector from '../assets/Vector.png';

const Join = () => {
    const sliderRef = useRef(null); // Create a ref for the slider

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards on large screens
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 9000,
        arrows: false, // Hide default arrows
        responsive: [
            {
                breakpoint: 1024, // Adjust based on your large screen breakpoint
                settings: {
                    slidesToShow: 3, // 3 cards for larger screens
                }
            },
            {
                breakpoint: 768, // Medium screen breakpoint (e.g., tablets)
                settings: {
                    slidesToShow: 2, // Show 2 cards on medium screens
                }
            },
            {
                breakpoint: 640, // Small screen breakpoint (e.g., mobile)
                settings: {
                    slidesToShow: 1, // Show 1 card per screen on small devices
                }
            }
        ]
    };

    const cardData = [
        {
            img: Frame60,
            title: "Application and Selection",
            description: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.",
        },
        {
            img: Frame61,
            title: "Alignment Meeting and Proposal Submission",
            description: "If your application stands out, we'll invite you to an alignment meeting to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
        },
        {
            img: Frame62,
            title: "Negotiation and Agreement",
            description: "Upon successful alignment, we'll engage in discussions to finalize the terms of your EIR role, including expectations and equity arrangements.",
        },
        {
            img: Frame63,
            title: "Onboarding and Integration",
            description: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
        },
        {
            img: Frame64,
            title: "Regular Check-ins and Evaluations",
            description: "To foster ongoing success, we've established a system for regular check-ins. These sessions will allow us to monitor your progress, gather feedback, and collectively work towards continuous improvement.We appreciate your interest in joining our EIR program and contributing to the vibrant SINC Partners community. Start your application process today and be a part of our journey in shaping the future of innovation.",
        }
    ];

    return (
        <div className='relative md:top-60 -top-20 px-4'>
            <h1 className='md:m-auto flex item-center text-center font-medium w-full md:w-[911px] h-[134px] font-inter md:text-[56px] hidden md:block'>
                Join Our Entrepreneur In Residence (EIR) Program
            </h1>
            <p className='text-center m-auto py-10 max-w-full sm:w-[90%] lg:w-[934px] hidden md:block'>
                Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
            </p>
            <h1 className='text-center text-[20px] font-medium'>Service Incubation Process</h1>

            <Slider ref={sliderRef} {...settings}>
                {cardData.map((card, index) => (
                    <div key={index} className='py-10 px-8'>
                        <div className='flex flex-col md:flex-row gap-[24px]'>
                            <div className='h-[392px] w-full max-w-[380px] bg-white rounded-lg flex flex-col justify-between'>
                                <div className='p-4'>
                                    <img src={card.img} alt={card.title} />
                                    <h1 className='text-[20px] mt-4 font-inter font-medium'>
                                        {card.title}
                                    </h1>
                                    <p className='font-inter font-normal py-4 w-full text-[16px] text-[#4E4E4E] leading-[22px]'>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className='flex justify-center items-center py-10'>
                <p className='text-[16px] font-bold text-[#4E4E4E] border-solid border-b-2 border-black'>
                    Support the future
                </p>
                <span>
                    <img src={down} alt="Dropdown arrow" className='ml-2 w-[15.54px] h-[15.54px]' />
                </span>
            </div>

            <div className='flex justify-center gap-20 mb-10'>
                {/* Previous Button */}
                <div
                    className='border-[1px] border-[#4D4D4D] w-[66px] h-[66px] rounded-full flex justify-center items-center cursor-pointer'
                    onClick={() => sliderRef.current.slickPrev()} // Move to previous slide
                >
                    <img src={vector} alt="Previous" />
                </div>

                {/* Next Button */}
                <div
                    className='border-[1px] border-[#4D4D4D] w-[66px] h-[66px] rounded-full flex justify-center items-center cursor-pointer'
                    onClick={() => sliderRef.current.slickNext()} // Move to next slide
                >
                    <img src={vector} alt="Next" className='rotate-180' />
                </div>
            </div>
        </div>
    );
};

export default Join;
