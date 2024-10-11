import React from 'react'
import New1 from '../assets/New1.png'
import New2 from '../assets/New2.png'
import New3 from '../assets/New3.png'

const Blogs = () => {
    return (
        <div className='py-40 relative top-48 mb-20'>
            <h1 className='text-center text-[20px] md:text-[56px] font-inter font-semibold'>Blogs & Resources</h1>
            <div className='block md:flex md:flex-cols gap-8 md:justify-center item-center md:py-10'>
                <div className='flex item-center justify-center mb-2 md:mb-0'>
                    <img src={New1} alt="" />
                </div>
                <div className='flex item-center justify-center mb-2 md:mb-0'>
                    <img src={New2} alt="" />
                </div>
                <div className='flex item-center justify-center'>
                    <img src={New3} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Blogs