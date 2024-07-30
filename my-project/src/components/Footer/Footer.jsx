/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../../assets/logo/green remedies llogo-white 1.png'
import Twitter from '../../assets/Icons/twitter.svg'
import Instagram from '../../assets/Icons/instagram.svg'
import Facebook from '../../assets/Icons/facebook.svg'

const QuickLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "#",
    },
    {
        id: 3,
        name: "About us",
        link: "#",
    },
    {
        id: 4,
        name: "Contact us",
        link: "#",
    },
    {
        id: 5,
        name: "Health resources",
        link: "#",
    },

]

const CustomerService = [
    {
        id: 1,
        name: "Testimonial",
        link: "#",
    },
    {
        id: 2,
        name: "Privacy Policy",
        link: "#",
    },
    {
        id: 3,
        name: "Join our team",
        link: "#",
    },
    {
        id: 4,
        name: "Affliate program",
        link: "#",
    },
    {
        id: 5,
        name: "Terms & Condition",
        link: "#",
    },

]

const Account = [
    {
        id: 1,
        name: "My Account",
        link: "#",
    },
    {
        id: 2,
        name: "Order History",
        link: "#",
    },
    {
        id: 3,
        name: "Payment and shipping option",
        link: "#",
    },
]

const Footer = () => {
    return (
        <div className='bg-darkGreen'>
            {/* Footer top */}
            <div className='px-[5vw] py-[5vw] flex justify-between'>
                <div className='w-1/4'>
                    <a href='#'>
                    <img src={Logo} alt="Green Remedies Logo"/>
                    </a>
                    <p className='text-milkWhite font-OpenSans text-sm mt-3'>Green Remedies offers a curated selection of high-quality traditional herbs
                        to enhance your well-being naturally. Trust in our expertise and commitment to
                        purity.</p>
                    <div className='flex items-center mt-5 gap-2'>
                        <a href='#' className='w-[48px] h-[48px] flex justify-center items-center bg-milkWhite rounded-xl'>
                            <img src={Instagram} alt='Instagram Profile Link' />
                        </a>
                        <a href='#' className='w-[48px] h-[48px] flex justify-center items-center bg-milkWhite rounded-xl'>
                            <img src={Facebook} alt='Facebook Profile Link' />
                        </a>
                        <a href='#' className='w-[48px] h-[48px] flex justify-center items-center bg-milkWhite rounded-xl'>
                            <img src={Twitter} alt='Twitter Profile Link' />
                        </a>
                    </div>
                </div>
                <div className='flex justify-between w-2/4'>
                    <div>
                        <h2 className='font-Lora font-semibold text-milkWhite text-2xl'>Quick Links</h2>
                        <ul className='mt-4'>
                        {
                        QuickLinks.map((data) => (
                          <li key={data.id} className='py-1.5'>
                            <a href={data.link} className="text-milkWhite hover:text-gray-300">{data.name}</a>
                          </li>
                        ))
                    }
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-Lora font-semibold text-milkWhite text-2xl'>Customer service</h2>
                        <ul className='mt-4'>
                        {
                        CustomerService.map((data) => (
                          <li key={data.id} className='py-1.5'>
                            <a href={data.link} className="text-milkWhite hover:text-gray-300">{data.name}</a>
                          </li>
                        ))
                    }
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-Lora font-semibold text-milkWhite text-2xl'>Account Information</h2>
                        <ul className='mt-4'>
                        {
                        Account.map((data) => (
                          <li key={data.id} className='py-1.5'>
                            <a href={data.link} className="text-milkWhite hover:text-gray-300">{data.name}</a>
                          </li>
                        ))
                    }
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer bottom */}
            <div className='flex justify-center items-center py-4'>
                <p className='text-white '>Copyright 2024 - Green Remedies, All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer