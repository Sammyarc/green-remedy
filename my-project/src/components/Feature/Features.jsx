// eslint-disable-next-line no-unused-vars
import React from 'react'

const Features = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className='mx-[5vw] my-[5vw] grid grid-cols-4 gap-5'>
            <div
                className='flex justify-center items-center flex-col p-9 bg-darkGreen rounded-lg'>
                <h2 className='text-5xl text-white font-Lora font-medium'>37+</h2>
                <p className='text-white font-Poppins text-sm mt-2'>Years of Hard Work</p>
            </div>

            <div
                className='flex justify-center items-center flex-col p-9 bg-darkGreen rounded-lg'>
                <h2 className='text-5xl text-white font-Lora font-medium'>500k+</h2>
                <p className='text-white font-Poppins text-sm mt-2'>Happy Customers</p>
            </div>

            <div
                className='flex justify-center items-center flex-col p-9 bg-darkGreen rounded-lg'>
                <h2 className='text-5xl text-white font-Lora font-medium'>28</h2>
                <p className='text-white font-Poppins text-sm mt-2'>Qualified Team Members</p>
            </div>

            <div
                className='flex justify-center items-center flex-col p-9 bg-darkGreen rounded-lg'>
                <h2 className='text-5xl text-white font-Lora font-medium'>750k+</h2>
                <p className='text-white font-Poppins text-sm mt-2'>Monthly Orders</p>
            </div>

        </div>
    )
}

export default Features