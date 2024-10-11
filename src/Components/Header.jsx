import { useState } from 'react';
import sinclogo from '../assets/sinclogo.png';
import NG_FLAG from '../assets/NG_FLAG.svg'
import { IoMenuOutline } from "react-icons/io5";


const Header = () => {
    const [isHoverAbout, setIsHoverAbout] = useState(false);
    const [isHoverPlatform, setIsHoverPlatform] = useState(false);
    const [isHoverInitiatives, setIsHoverInitiatives] = useState(false);
    const [isHoverMore, setIsHoverMore] = useState(false);

    return (
        <div className='bg-[#F9F9F9] w-[390px] h-[72px] w-full md:w-full md:h-[98px] z-50 fixed'>
            <div className='flex space-x-48 relative top-4 md:left-[80px] left-[20px]'>
                <div className='flex flex-cols gap-6'>
                    <div className='md:w-28 w-[72px] h-[40px]'>
                        <img src={sinclogo} alt="Sinc Logo" />
                    </div>
                    <IoMenuOutline size={24} className='md:hidden ml-60 mt-2'/>

                    {/* About Dropdown */}
                    <div>

                    </div>
                    <div
                        className='relative top-6 font-inter font-medium'
                        onMouseEnter={() => setIsHoverAbout(true)}
                        onMouseLeave={() => setIsHoverAbout(false)}
                    >
                        <a className='text-base font-semibold font-inter cursor-default hidden md:block'>About</a>
                        {isHoverAbout && (
                            <div className="absolute left-0 top-5 mt-2 w-48 bg-white font-inter rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Who We Are</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our People</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Concept Innovations</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Process</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Investors Network</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">CSR & Events</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Careers</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</a>
                            </div>
                        )}
                    </div>

                    {/* Other Menu Items */}
                    <div className='relative top-6 font-inter md:gap-4 hidden md:flex'>
                        <a className='text-base font-semibold cursor-pointer'>SIP</a>
                        <a className='text-base font-semibold cursor-pointer'>Studio</a>
                        <a className='text-base font-semibold cursor-pointer'>SEEQ</a>
                    </div>

                    {/* Platform Dropdown */}
                    <div
                        className='relative top-6 font-inter font-medium hidden md:block'
                        onMouseEnter={() => setIsHoverPlatform(true)}
                        onMouseLeave={() => setIsHoverPlatform(false)}
                    >
                        <a className='text-base font-semibold font-inter cursor-default'>Platform</a>
                        {isHoverPlatform && (
                            <div className="absolute left-0 top-5 mt-2 w-48 bg-white rounded-md font-inter shadow-lg">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Kofoundme</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">InResidences</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service Market</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Founder School</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Metty</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Grantty</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Boldtell</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Chekwa</a>
                            </div>
                        )}
                    </div>

                    <div
                        className='relative top-6 font-inter font-medium hidden md:block'
                        onMouseEnter={() => setIsHoverInitiatives(true)}
                        onMouseLeave={() => setIsHoverInitiatives(false)}
                    >
                        <a className='text-base font-semibold font-inter cursor-default'>Initiatives</a>
                        {isHoverInitiatives && (
                            <div className="absolute left-0 top-5 mt-2 w-48 bg-white font-inter rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Jabi Plains</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Regional Pricing Initiative</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Scholarship Program</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">SSMN Pricing</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">University STEM</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">University InRessidency</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> 1M <img className="inline" src={NG_FLAG} width={20} alt="" /> Nigeria Products</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</a>
                            </div>
                        )}
                    </div>

                    <div
                        className='relative top-6 font-inter font-medium hidden md:block'
                        onMouseEnter={() => setIsHoverMore(true)}
                        onMouseLeave={() => setIsHoverMore(false)}
                    >
                        <a className='text-base font-semibold font-inter cursor-default'>More</a>
                        {isHoverMore && (
                            <div className="absolute left-0 top-5 mt-2 w-48 bg-white font-inter rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Services</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Equity Jobs</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">EIR Program</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Offers</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Innovations News</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">FAQ</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog and Resources</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Press</a>
                            </div>
                        )}
                        
                    </div>

                </div>

                {/* Buttons on the Right */}
                <div className='flex flex-cols gap-4 relative top-2 font-inter hidden md:flex'>
                    <div className='bg-[#20888F] rounded-full w-36 h-14 flex items-center justify-center px-7 py-4'>
                        <h1 className='text-sm font-semibold font-inter text-white whitespace-nowrap '>SINC with us</h1>
                    </div>
                    <div className='bg-[#303030] rounded-full w-36 h-14 flex items-center justify-center px-7 py-4'>
                        <h1 className='text-sm font-semibold text-white font-inter whitespace-nowrap'>Apply to SIP 1.0</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
