// eslint-disable-next-line no-unused-vars
import React from 'react';
import hero from '../../assets/Hero-image.png';

const Hero = () => {
    return (
        <div
            className='flex justify-between gap-4 items-center px-[5vw] pt-[5vw] pb-[10vw] bg-darkGreen'>
            <div className='max-w-[502px]'>
                <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className='text-5xl font-Lora font-bold w-[415px] leading-tight text-milkWhite'>Embrace Nature&apos;s Healing Power</h1>
                <p 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className='mt-3 text-milkWhite font-OpenSans'>At Green Remedies, we connect
                    you with nature&apos;s finest remedies to enhance your well-being. Explore our
                    collection and find the perfect natural solution for your health needs.</p>
                <a
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="200"
                    href='#'
                    className='bg-milkWhite text-lightTextColor mt-8 w-[199px] h-[56px] text-lg flex justify-center items-center rounded-3xl font-bold text-md'>Explore our herbs</a>
            </div>
            <div data-aos="zoom-in" data-aos-once="true">
                <img src={hero} alt='An image of different herbs'/>
            </div>
        </div>
    )
}

export default Hero