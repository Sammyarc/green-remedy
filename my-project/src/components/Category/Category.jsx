// eslint-disable-next-line no-unused-vars
import React from 'react'
import HerbalTea from '../../assets/Herbal-tea.png'
import HerbSeeds from '../../assets/Herb-seeds.png'
import HerbalRemedies from '../../assets/Herbal-remedies.png'
import HerbalBath from '../../assets/Herbal-bath-products.png'

const Category = () => {
    return (
        <div className='px-[5vw] my-10'>
            {/* Header section */}
            <div className='flex flex-col justify-center items-center'>
                <h1 data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100" className='font-Lora text-4xl text-lightTextColor font-bold'>Explore Our Herbal Categories</h1>
                <p data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200" className='text-center w-[40vw] mt-3 text-lightTextColor'>Discover a wide
                    variety of herbal products tailored to support your health and wellness needs.
                    Browse through our categories to find the perfect remedies for your lifestyle.</p>
            </div>

            {/* Body */}
            <div className='grid grid-cols-3 mt-20 gap-5'>
                <div data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100" className='border-lightGreen h-[524px] border-2 rounded-xl'>
                    <div>
                        <img
                            src={HerbalTea}
                            alt='Herbal-tea image'
                            className='w-full h-[300px] rounded-t-xl'/>
                    </div>
                    <div className='py-20 px-8'>
                        <h2 className='font-Lora font-bold text-2xl text-lightTextColor'>Herbal Teas</h2>
                        <p className='mt-2 w-[30ch] text-lightTextColor'>Strengthen your body&apos;s defences with our range of herbal teas.</p>
                    </div>

                </div>

                <div className='h-[524px] flex flex-col justify-between'>
                    <div data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200" className='h-[255px] border-lightGreen border-2 rounded-xl'>
                        <div>
                            <img
                                src={HerbSeeds}
                                alt='Herbal-Seed image'
                                className='w-full h-[116px] rounded-t-xl'/>
                        </div>
                        <div className='py-5 px-8'>
                            <h2 className='font-Lora font-bold text-2xl text-lightTextColor'>Herb Seeds and Plants</h2>
                            <p className='mt-2 w-[30ch] text-lightTextColor'>Find peace and calm with our stress-relief herbs.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200" className='h-[255px] border-lightGreen border-2 rounded-xl'>
                        <div>
                            <img
                                src={HerbalRemedies}
                                alt='Herbal-Remedies image'
                                className='w-full h-[116px] rounded-t-xl'/>
                        </div>
                        <div className='py-5 px-8'>
                            <h2 className='font-Lora font-bold text-2xl text-lightTextColor'>Herbal Remedies</h2>
                            <p className='mt-2 w-[30ch] text-lightTextColor'>Support your digestive system with our natural remedies.</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400" className='border-lightGreen h-[524px] border-2 rounded-xl'>
                    <div>
                        <img src={HerbalBath} alt='Herbal-Bath-Products image'className='w-full h-[300px] rounded-t-xl' />
                    </div>
                    <div className='py-20 px-8'>
                    <h2 className='font-Lora font-bold text-2xl text-lightTextColor'>Herbal Bath Products</h2>
                    <p className='mt-2 w-[30ch] text-lightTextColor'>Enhance your natural beauty with our herbal skin care products.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category