import { FiShoppingCart } from "react-icons/fi";

export default function CartIcon({onCartClick}){
    return <>
    <div className="relative flex items-center group" onClick={onCartClick}>
        <button className="border-0">
            <FiShoppingCart className="text-2xl text-white transition ease-in-out duration-500 group-hover:text-red-600 group-hover:translate-x-1" />
        </button>
        <span className="absolute bottom-3 left-4 flex text-white bg-red-600 rounded-full w-4 h-4 text-xs justify-center items-center cursor-pointer ease-in-out duration-500 group-hover:translate-x-1">
            0
        </span>
    </div>
    </>
}