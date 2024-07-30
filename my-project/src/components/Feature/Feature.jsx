// eslint-disable-next-line no-unused-vars
import React from 'react'
import Truck from '../../assets/Icons/delivery-truck 1.svg'
import Headphone from '../../assets/Icons/headphones 1.svg'
import Package from '../../assets/Icons/package.svg'
import ShoppingBag from '../../assets/Icons/shopping-bag.svg'

const Feature = () => {
    return (
        <div 
            className='mx-[5vw] grid grid-cols-4 shadow-xl bg-white -translate-y-20 rounded-md'>
            <div
                className='flex justify-center items-center flex-col p-9 border-r-[1px] border-darkerGreen'>
                <div
                    className='w-16 h-16 flex justify-center items-center rounded-full bg-darkerGreen'>
                    <img src={Truck} alt='Truck icon'/>
                </div>
                <h2 className='text-lg text-lightTextColor font-Poppins font-semibold mt-2'>Free Shipping</h2>
                <p className='text-lightTextColor font-Poppins text-sm mt-2'>Free shipping with discount</p>
            </div>

            <div
                className='flex justify-center items-center flex-col p-9 border-r-[1px] border-darkerGreen'>
                <div
                    className='w-16 h-16 flex justify-center items-center rounded-full bg-darkerGreen'>
                    <img src={Headphone} alt='Truck icon'/>
                </div>
                <h2 className='text-lg text-lightTextColor font-Poppins font-semibold mt-2'>Great Support 24/7</h2>
                <p className='text-lightTextColor font-Poppins text-sm mt-2'>Instant access to Contact</p>
            </div>

            <div
                className='flex justify-center items-center flex-col p-9 border-r-[1px] border-darkerGreen'>
                <div
                    className='w-16 h-16 flex justify-center items-center rounded-full bg-darkerGreen'>
                    <img src={ShoppingBag} alt='Truck icon'/>
                </div>
                <h2 className='text-lg text-lightTextColor font-Poppins font-semibold mt-2'>100% Secure Payment</h2>
                <p className='text-lightTextColor font-Poppins text-sm mt-2'>We ensure your money is save</p>
            </div>

            <div className='flex justify-center items-center flex-col p-9'>
                <div
                    className='w-16 h-16 flex justify-center items-center rounded-full bg-darkerGreen'>
                    <img src={Package} alt='Truck icon'/>
                </div>
                <h2 className='text-lg text-lightTextColor font-Poppins font-semibold mt-2'>Money-Back Guarantee</h2>
                <p className='text-lightTextColor font-Poppins text-sm mt-2'>30 days money-back guarantee</p>
            </div>
        </div>

    )
}

export default Feature