// eslint-disable-next-line no-unused-vars
import React from 'react'
import VideoSrc from '../../assets/video.png'

const Video = () => {
    return (
        <div className='mt-[5vw] px-[5vw] py-[5vw]'>
            {/* Header */}
            <div className='flex flex-col justify-center items-center'>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='font-Lora text-4xl text-lightTextColor font-bold'>How To Order Products On Our Website</h2>
                <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className='text-center w-[30vw] mt-3 text-darkTextColor'>Watch
                    this quick tutorial to learn how to easily purchase your favorite herbal
                    products on our website.</p>
            </div>

            {/* Body */}
            <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                className='px-[2vw] mt-16 flex justify-center'>
                <img
                    src={VideoSrc}
                    alt='A video explaining how to order products on our website'
                    className='w-[80vw] h-[756px]'/>
            </div>
        </div>
    )
}

export default Video