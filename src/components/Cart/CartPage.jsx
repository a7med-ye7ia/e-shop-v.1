import { IoCloseCircleOutline } from "react-icons/io5";

import { FaArrowAltCircleDown , FaArrowAltCircleUp } from "react-icons/fa";

export default function CartPage({ isOpen, toggleCart }) {
    return (
        <>
            <div
                className={`fixed bg-white w-[350px] top-0 z-50 right-0 shadow-lg h-full transform transition-transform duration-1000 ${
                    isOpen ? "translate-x-0" : "translate-x-[350px]"
                }`}
            >
                <div className="relative w-full bg-black text-white h-[64.5px] group transition duration-1000">
                    <IoCloseCircleOutline
                        className="absolute top-3 left-3 text-3xl text-white group-hover:text-red-600 cursor-pointer transition duration-1000"
                        onClick={toggleCart}
                    />
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-3xl text-red-600 cursor-pointer group-hover:scale-125 transition duration-1000">
                            Cart Items
                        </h1>
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="py-4" id="alert">
                        <div className="w-11/12 m-auto p-auto">
                            <div className="bg-red-600 text-white m-3 p-4 rounded cursor-pointer border-[2px] border-black hover:scale-110 transition duration-1000">
                                Cart was empty!
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-11/12 m-auto relative border border-black bg-white hover:scale-105 cursor-pointer transition duration-1000">
    <div className="flex justify-between items-center">
        <div>
            <span className="text-black mt-5">Samsung Universe</span>
            <div className="flex flex-col">
                <span className="font-bold text-black">SAMSUNG UNIVERSE 9</span>
                <p className="text-black">
                    Price: <span>1</span> x <span>1249</span> : <span>1249</span>
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
            <FaArrowAltCircleUp
                className="text-black hover:text-red-600  transition duration-1000 hover:scale-105  cursor-pointer"
                aria-hidden="true"
            />
            <FaArrowAltCircleDown
                className="text-black hover:text-red-600  transition duration-1000 hover:scale-105  cursor-pointer"
                aria-hidden="true"
            />
        </div>
    </div>
</div>
</div>
        </>
    );
}
