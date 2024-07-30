// eslint-disable-next-line no-unused-vars
import React from 'react'

const Product = () => {
    return (
        <div className='mt-[10vw] px-[5vw] py-[5vw] bg-lightGreen'>
            {/* Header */}
            <div className='flex flex-col justify-center items-center'>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='font-Lora text-4xl text-lightTextColor font-bold'>Our latest arrivals</h2>
                <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className='text-center w-[40vw] mt-3 text-darkTextColor'>Explore
                    our newest herbal products, carefully selected for quality and effectiveness.
                    Find fresh solutions for your health and wellness needs.</p>
                <a
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    href='#'
                    className='mt-[2vw] w-[194px] h-[54.5px] flex justify-center items-center bg-darkGreen text-white rounded-2xl font-PublicSans font-semibold border border-white'>Shop All</a>
            </div>

            {/* Body */}
            <div></div>
        </div>
    )
}

export default Product