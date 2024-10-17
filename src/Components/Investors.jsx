import React from 'react';

const Investors = () => {
    return (
        <div className='relative md:top-64 top-4 overflow-x-hidden'>
            <h1 className='text-center font-medium font-inter text-[20px] md:text-[56px]'>
                SINC Investors Network
            </h1>
            <p className='text-center m-auto py-4 px-4 sm:px-6 max-w-full md:w-[70%]'>
                Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuations, you are guaranteed at least 2x-5x, usually being the first to invest.
                <br />
                <strong>Disclaimer:</strong> These deal flows are a statement of our projections and may differ from stage to stage and from venture to venture. The guarantee is for deal 1, usually the first to invest.
            </p>

            <div className='py-20 sm:px-8 md:px-10'>
                <p className='mt-4 text-left text-[16px] sm:text-[20px] font-inter max-w-full m-auto'>
                    <span className='font-bold'>Micro Angel Investors & Service incubators</span> (Invest from $500 & above)
                </p>
                <div className='w-full h-[0.10px] bg-black relative top-10'></div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative top-10'>
                    {/* Deal 1 */}
                    
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='flex justify-center items-center relative py-4 md:px-6'>
                            <div className="text-left">
                                <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                    Deal 1
                                </h1>
                                <div className="text-gray-800 text-[13px] mt-2 font-inter leading-[20px]">
                                    <div className='flex gap-2'>
                                        <span className='font-extrabold'>✓</span>
                                        <p>Idea Stage: <span className='font-medium'>$5k for 5% Equity</span></p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='font-extrabold'>✓</span>
                                        <p>Expected Revenue at This Stage: $0/mth</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='font-extrabold'>✓</span>
                                        <p>Duration of Raise: 1mth</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className='font-extrabold'>✓</span>
                                        <p>Who Can Invest: People with Domain Expertise and Advisors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deal 2 */}
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='px-2 py-4 md:px-6'>
                            <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                Deal 2
                            </h1>
                            <div className="text-gray-800 text-[13px] w-full max-w-[280px] mt-2 font-inter font-normal leading-[23px]">
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Build Stage: $25k worth of service for 10% Equity</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Expected Revenue at This Stage: $100+/mth</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Duration of Raise: 1-3mths</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Who Can Invest: Developers, Engineers, Growth Marketers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deal 3 */}
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='px-2 py-4 md:px-6'>
                            <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                Deal 3
                            </h1>
                            <div className="text-gray-800 text-[13px] mt-2 leading-[20px]">
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Validation Stage: $50k for 5% Equity</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Expected Revenue at This Stage: $1k+/mth</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Duration of Raise: 3-6mths</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Who Can Invest: Everyone</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deal 4 */}
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='px-2 py-4 md:px-6'>
                            <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                Deal 4
                            </h1>
                            <div className="text-gray-800 text-[13px] mt-2 leading-[20px]">
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Traction Stage: $125k worth of service for 5% Equity</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Expected Revenue at This Stage: $5k+/mth</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Duration of Raise: 6-12mths</p>
                                </div>
                                <div className='flex item-center gap-2'>
                                    <span className='font-extrabold'>✓</span>
                                    <p>Who Can Invest: Media, Influencers, Celebrities, Platform Owners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='w-full h-[0.10px] bg-black relative top-14'></div>
            </div>

            <div className='py-2 px-4 sm:px-8 md:px-10'>
                <p className='mt-2 text-left text-[16px] sm:text-[20px] font-inter'>
                    <span className='font-bold'>Angel Investors & Venture Capital </span> (Invest from $500 & above)
                </p>

                <div className='w-full h-[0.10px] bg-black relative top-10'></div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative top-10'>
                    {/* Deal 5 */}
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='py-6 px-2'>
                            <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                Deal 5
                            </h1>
                            <div className="text-gray-800 text-[13px] mt-2 font-inter leading-[20px]">
                                <p className=''><span >✓</span> Pre-seed Stage: <span className='font-medium'>$1.5M for 10% Equity</span></p>
                                <p className=''><span>✓</span> Expected Revenue at This Stage: <span className='font-medium'>$50k+/mth</span></p>
                                <p className=''><span>✓</span>Duration of Raise: <span className='font-medium'>6-18mths</span></p>
                                <p className=''><span>✓</span>Who Can Invest: <span className='font-medium'>Angel Investors, VCs, PE, Institutions</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Deal 6 */}
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='py-6 px-2'>
                            <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                Deal 6
                            </h1>
                            <div className="text-gray-800 text-[13px] mt-2 leading-[20px]">
                                <p><span>✓</span> Seed Stage: $3M for 15% Equity</p>
                                <p><span>✓</span> Expected Revenue at This Stage: $100k+/mth</p>
                                <p><span>✓</span> Duration of Raise: 6-18mths</p>
                                <p><span>✓</span> Who Can Invest: VCs, Institutions</p>
                            </div>
                        </div>
                    </div>

                    {/* Deal 7 */}
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='py-6 px-2'>
                            <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                Deal 7
                            </h1>
                            <div className="text-gray-800 text-[13px] mt-2 leading-[20px]">
                                <p><span>✓</span> Early Stage: $10M for 20% Equity</p>
                                <p><span>✓</span> Expected Revenue at This Stage: $200k+/mth</p>
                                <p><span>✓</span> Duration of Raise: 12-24mths</p>
                                <p><span>✓</span> Who Can Invest: VCs, PE, Institutions</p>
                            </div>
                        </div>
                    </div>

                    {/* Deal 8 */}
                    <div className='h-[212px] w-full max-w-[300px] m-auto'>
                        <div className='py-6 px-2'>
                            <h1 className="text-[18px] text-[#212121] font-medium font-inter">
                                Deal 8
                            </h1>
                            <div className="text-gray-800 text-[13px] mt-2 leading-[20px]">
                                <p><span>✓</span> Growth Stage: $100M for 10% Equity</p>
                                <p><span>✓</span> Expected Revenue at This Stage: $1M+/mth</p>
                                <p><span>✓</span> Duration of Raise: 2yrs</p>
                                <p><span>✓</span> Who Can Invest: VCs, PE, Institutions</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className='w-full h-[0.10px] bg-black relative top-8'></div>
            </div>
        </div>
    );
}

export default Investors;
