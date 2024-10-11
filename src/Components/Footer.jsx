import React from 'react'
import SINCLOG from '../assets/SINCLOG.png'
import Accredited from '../assets/Accredited.png'
import Whatsapp from '../assets/Whatsapp.png'
import gasus from '../assets/gasus.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-[#212121] py-16 md:py-20 px-2 sm:px-4'>

            {/* Newsletter Section */}
            <div className='text-center md:text-left flex flex-col justify-center items-center md:items-start gap-4 mb-12'>
                <h1 className='text-[#FFFFFF] text-[28px] md:text-[32px] font-semibold'>Newsletter</h1>
                <p className='text-[#FFFFFF] font-inter max-w-lg text-center md:text-left'>
                    Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
                </p>
                <div className='relative w-full md:w-auto'>
                    <input type="email" placeholder="Enter your email" className='md:w-[468px] h-[48px] rounded-full bg-[#2A2A2A] outline-none border border-white px-4 mb-4 md:mb-0' />
                    <button className='bg-white w-[150px] h-[48px] rounded-full absolute top-0 md:right-0 right-4'>Subscribe</button>
                </div>
            </div>

            <div className='border-t border-gray-600 mb-6'></div>



            {/* Grid Section */}
            <div className='md:flex md:justify-between mb-12'>
                {/* Logo & Description */}
                <div>
                    <img src={SINCLOG} alt="SINC LOGO" className='mb-4' />
                    <p className='text-white font-inter text-[14px] md:w-[190px] md:h-[216px] md:leading-[27px] leading-[20px]'>
                        SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                    </p>
                </div>

                {/* Platform Links */}
                <div className='md:w-[122px] md:h-[290px]'>
                    <h2 className='text-white font-semibold text-[16px] mb-4'>Platform</h2>
                    <ul className="font-inter space-y-2">
                        {['Kofoundme', 'InResidences', 'Service Market', 'Founder School', 'Metty', 'Grantty', 'Boldtell', 'Chekwa'].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="block text-white text-[16px]">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Initiatives Links */}
                <div className='md:w-[165px] md:h-[290px] max-w-full'>
                    <h2 className='text-white font-semibold text-[16px] mb-4'>Initiatives</h2>
                    <ul className="font-inter space-y-2">
                        {['Jabi Plains', 'Regional Pricing Initiative', 'Scholarship Program', 'SSMN Pricing', 'University STEM', 'University InResidency', '1M Nigeria Products', 'Contact'].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="block text-white text-[16px]">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='md:w-[151px] md:h-[289px] max-w-full'>
                    <h2 className='text-white font-semibold text-[16px] mb-4'>About Us</h2>
                    <ul className="font-inter space-y-2">
                        {['Who We Are', 'Our People', 'Concept Innovations', 'Our Process', 'Investors Network', 'CSR & Events', 'Career', 'Contact'].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="block text-white text-[16px]">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='md:w-[152px] md:h-[290px]'>
                    <h2 className='text-white font-semibold text-[16px] mb-4'>More</h2>
                    <ul className="font-inter space-y-2">
                        {['Services', 'Equity Jobs', 'EIR Program', 'Offers', 'Innovation News', 'FAQ', 'Blog & Resources', 'Press'].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="block text-white text-[16px]">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location & Certifications */}
                <div className='md:border-l h-[345px]'></div>
                <div className='flex flex-col space-y-4'>
                    <div>
                        <h2 className='text-white font-semibold text-[16px] mb-4'>Locations</h2>
                        <p className='text-white'>Abuja, Nigeria <br /> Lagos, Nigeria <br /> Philadelphia, USA</p>
                    </div>
                    <div className='flex space-x-4'>
                        <img src={Accredited} alt="Accredited" className='' />
                        <img src={Whatsapp} alt="Whatsapp" className='' />
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-600 md:mb-8 md:-mt-10 '></div>

            {/* Footer Bottom */}
            <div className='text-center'>
                <p className='text-white mb-4'>Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
                <img src={gasus} alt="Gasus" className='mx-auto my-4' />
                <p className='text-white mb-4'>We are a business built on the foundation of Christian values and belief</p>

                <div className='flex justify-center space-x-6 mb-6'>
                    {['Privacy Policy', 'Terms of Service', 'Security'].map((item, index) => (
                        <p key={index} className='text-white cursor-pointer'>{item}</p>
                    ))}
                </div>

                <div className='flex justify-center space-x-4 text-white'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                    <FaWhatsapp />
                    <FaYoutube />
                    <FaMailBulk />
                </div>
                <p className='text-white mt-4'>© 2024 SINC Partners. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
