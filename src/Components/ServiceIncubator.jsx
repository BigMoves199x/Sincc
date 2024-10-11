import React from 'react'
import { FaTimes } from 'react-icons/fa'
import mark from '../assets/mark.png'


const ServiceIncubator = ({ setShowService }) => {
    return (

        <div className='md:px-2 fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative md:w-[1200px] md:h-[580px] bg-[#212121] drop-shadow-lg rounded-3xl'>
                <FaTimes
                    onClick={() => setShowService(false)}
                    size={30}
                    className='cursor-pointer text-white absolute top-4 right-14 z-80'
                />
                <h1 className='text-[20px] text-white px-24 py-10 w-[920px] leading-[26.4px]'>As a service incubator offering your services for equity, this is what you get for a 200 function project</h1>


                <div className='flex flex-col gap-[170px] md:px-24 md:py-4 font-extrabold font-inter'>

                    {/* Rotated Border Line */}
                    <div className='border-[0.83px] border-[solid] border-[#4D4D4D] w-[170px] rotate-90 absolute left-[320px] top-[234px]'>

                    </div>


                    <div className='border-[0.83px] border-[solid] border-[#4D4D4D] w-[170px] rotate-90 absolute left-[680px] top-[234px]'>

                    </div>

                    <div className='border-[0.83px] border-[solid] border-[#4D4D4D] w-[170px] rotate-90 absolute left-[320px] top-[405px]'>

                    </div>

                    <div className='border-[0.83px] border-[solid] border-[#4D4D4D] w-[170px] rotate-90 absolute left-[680px] top-[405px]'>

                    </div>


                    {/* Horizontal Border Line */}
                    <div className='border-[0.83px] border-[solid] border-[#4D4D4D] w-[1022.5px]'>

                    </div>

                    <div className='border-[0.83px] border-[solid] border-t border-[#4D4D4D] w-[1022.5px]'>

                    </div>

                    <div className='border-[0.83px] border-[solid] border-t border-[#4D4D4D] w-[1022.5px]'>

                    </div>
                </div>

                {/* First line */}
                <div className='relative -top-[340px] left-28'>
                    <h1 className='text-[#F47733] mb-2 text-[15px]'>Product Manager</h1>

                    <div className='flex flex-col gap-2'>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Builds 200 functions </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Over 3 months period </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Valued at N2,812,500 or $3,750 </p>
                        </div>
                        <div className='flex item-center gap-2'>
                            <img src={mark} alt="" className='w-[10px] mt-[3px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Gets 1.5% equity in the business</p>
                        </div>

                    </div>


                </div>


                {/* Second line */}
                <div className='relative -top-[465px] left-[450px]'>
                    <h1 className='text-[#F8A4D0] mb-2 text-[15px]'> UX Writer</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Builds 200 functions </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Over 3 months period </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Valued at N1,406,250 or $3,750 </p>
                        </div>
                        <div className='flex item-center gap-2'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Gets 1% equity in the business </p>
                        </div>
                    </div>


                </div>

                <div className='relative -top-[590px] left-[820px]'>
                    <h1 className='text-[#4946E9] mb-2 text-[15px]'>UI/UX Designer</h1>

                    <div className='flex flex-col gap-2'>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Builds 200 functions </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Over 3 months period  </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Valued at N2,343,750 or $3,125 </p>
                        </div>
                        <div className='flex item-center gap-2'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Gets 1.25% equity in the business</p>
                        </div>
                    </div>


                </div>



                {/* bottom line text */}

                {/* Second line */}
                <div className='relative -top-[540px] left-28'>
                    <h1 className='text-[#F47733] mb-2 text-[15px]'>Frontend or Mobile Developer</h1>

                    <div className='flex flex-col gap-2'>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Builds 200 functions </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Over 3 months period  </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Valued at N2,343,750 or $3,125 </p>
                        </div>
                        <div className='flex item-center gap-2'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Gets 1.25% equity in the business </p>
                        </div>

                    </div>

                </div>


                {/* Third line */}
                <div className='relative -top-[665px] left-[450px]'>
                    <h1 className='text-[#F8A4D0] mb-2 text-[15px]'>Backend Engineering gets</h1>

                    <div className='flex flex-col gap-2'>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Builds 200 functions </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Over 3 months period </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Valued at N2,812,500 or $3,750 </p>
                        </div>
                        <div className='flex item-center gap-2'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Gets 1.25% equity in the business </p>
                        </div>
                    </div>


                </div>


                {/* fourth line */}
                <div className='relative -top-[790px] left-[820px]'>
                    <h1 className='text-[#4946E9] mb-2 text-[15px]'>QA & Web Marketer</h1>

                    <div className='flex flex-col gap-2'>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Builds 200 functions </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Over 3 months period  </p>
                        </div>
                        <div className='flex item-center'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Valued at N2,812,500 or $3,750 </p>
                        </div>
                        <div className='flex item-center gap-2'>
                            <img src={mark} alt="" className='mr-2 mt-[3px] w-[10px] h-[10px]' />
                            <p className='text-[11.67px] text-white'>Gets 1% equity in the business </p>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default ServiceIncubator