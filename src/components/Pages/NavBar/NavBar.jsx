import { GiShop } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function NavBar({ CartPage, CartIcon, CategoryPage }) {
    const list = [
        { name: "Home", link: "/" },
        { name: "Categories", link: "/" },
        { name: "Products", link: "/" },
        { name: "ContactUs", link: "/" },
    ];

    const [open, setOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCategoriesOpen, setCategoriesOpen] = useState(false);

    

    return (
        <nav className="bg-black w-full fixed top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-2 px-7 lg:px-10">
                <a href="#" className="flex items-center space-x-2 cursor-pointer group">
                    <GiShop className="text-2xl text-red-600 group-hover:text-white transition-colors duration-700" />
                    <h1 className="text-white text-2xl font-bold group-hover:text-red-600 transition-colors duration-700">E-Shop</h1>
                </a>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-white text-4xl hover:text-red-600 transition-colors duration-700 lg:hidden absolute right-[75px] top-[14px] cursor-pointer"
                >
                    {open ? (
                        <IoMdClose className="text-2xl text-white transition ease-in-out duration-500 hover:text-red-600 hover:translate-x-1" />
                    ) : (
                        <IoMdMenu className="text-2xl text-white transition ease-in-out duration-500 hover:text-red-600 hover:translate-x-1" />
                    )}
                </div>

                <div
                    className={`absolute w-full bg-black lg:static lg:flex lg:items-center lg:justify-between lg:pb-0 pb-12 left-0 lg:w-auto z-50 ${
                        open ? "top-[50px]" : "top-[-490px]"
                    }`}
                >
                    <ul className="lg:flex lg:items-center lg:pb-0 pb-12 lg:z-auto z-[-1] w-full lg:w-auto lg:pl-0 pl-9 lg:mb-0 mb-4">
                        {list.map((item) => (
                            <li
                                key={item.name}
                                className={`text-white text-xl hover:text-red-600 transition-colors duration-700 lg:ml-8 lg:my-0 my-7 ${
                                    item.name === "Categories" ? "cursor-pointer" : ""
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.name === "Categories") {
                                        (!isCategoriesOpen) ? setCategoriesOpen(!isCategoriesOpen) : setCategoriesOpen(isCategoriesOpen);;
                                    }
                                }}
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    <form className="relative flex items-center w-full lg:w-1/2 mt-4 lg:mt-0 px-9 lg:px-0 group lg:ml-8">
                        <input
                            className="form-input block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-[50px]"
                            type="search"
                            placeholder="Search by Products"
                            aria-label="Search"
                        />
                        <button
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-black border-white rounded-r-[50px] border group-hover:border-red-600 transition-colors duration-500"
                            type="submit"
                        >
                            <FaSearch className="hover:scale-125 group-hover:text-red-600 transition-colors duration-500" />
                        </button>
                    </form>
                </div>
                <div className="relative">
                    <CartIcon onCartClick={() => setIsCartOpen(!isCartOpen)} />
                    <CartPage isOpen={isCartOpen} toggleCart={() => setIsCartOpen(!isCartOpen)} />
                    <CategoryPage isCatOpen={isCategoriesOpen} toggleCategory={() => setCategoriesOpen(!isCategoriesOpen)} />
                </div>
            </div>
        </nav>
    );
}
