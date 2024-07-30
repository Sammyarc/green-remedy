// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/logo/green remedies llogo-black.png";
import Search from "../../assets/Icons/search.svg";
import Signup from "../../assets/Icons/person.svg";
import Cart from "../../assets/Icons/cart.svg";

const Menu = [
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
        name: "Health-Resources",
        link: "#",
    },
    {
        id: 4,
        name: "About us",
        link: "#",
    },
    {
        id: 5,
        name: "Contact us",
        link: "#",
    },

]

const Navbar = () => {
    return (
        <div className="px-[5vw] bg-milkWhite">
            {/* upper Navbar */}

            <div className="py-[1.5vw]">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#">
                            <img src={Logo} alt='Green Remedies Logo' className="lg:w-[214px] lg:h-[75px]"/>
                        </a>
                    </div>

                    {/* search button */}

                    <div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for herbal remedies"
                                className="lg:w-[492px] lg:h-[48px] border-2 border-lightTextColor rounded-full px-10 outline-none font-OpenSans text-lightTextColor bg-transparent focus:border-darkGreen"/>
                            <img
                                src={Search}
                                alt="Search Icon"
                                className="absolute top-1/2 -translate-y-1/2 left-4"/>
                        </div>
                    </div>

                    {/* signup and cart button */}

                    <div className="flex gap-14 items-center">
                        {/*  signup */}
                        <div className="flex gap-2 items-center cursor-pointer">
                            <div
                                className="w-10 h-10 rounded-full bg-darkGreen flex justify-center items-center">
                                <img src={Signup} alt="Signup Icon"/>
                            </div>
                            <span className="text-xl text-textColor">Sign-in/Sign-up</span>
                        </div>
                        {/* cart button */}
                        <div className="flex gap-2 items-center cursor-pointer">
                            <div
                                className="w-10 h-10 rounded-full bg-darkGreen flex justify-center items-center">
                                <img src={Cart} alt="Cart Icon"/>
                            </div>
                            <span className="text-xl text-textColor">Cart</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* lower Navbar */}

            <div className="py-4">
                <ul className="flex justify-center items-centerm gap-6">
                    {
                        Menu.map((data) => (
                          <li key={data.id}>
                            <a href={data.link} className="text-xl text-lightTextColor hover:text-darkGreen transition font-medium">{data.name}</a>
                          </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
