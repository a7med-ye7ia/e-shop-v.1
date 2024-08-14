import { IoCloseCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Categories({ isCatOpen, toggleCategory }) {
    const api_url = 'https://dummyjson.com/products';
    
    const [categories, setCategories] = useState([]);
    const getCategoryList = ()=> {
        fetch(`${api_url}/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    };
    useEffect(() => {
        getCategoryList();
    },[]);

    return <>
            <div
                className= {`fixed bg-white w-[350px] lg:top-[64.5px]  left-0 z-40 shadow-lg h-full
                        transform transition-transform duration-1000 overflow-auto ${
                    isCatOpen ? "translate-x-[0px]" : "translate-x-[-350px]"
                }`}
            >
            <div className="relative w-full text-white h-[64.5px]">
                <IoCloseCircleOutline
                    className="absolute top-2 right-2 text-3xl text-black transition duration-700 hover:text-red-600 cursor-pointer z-40"
                    onClick={toggleCategory}
                />
                <div className="relative flex justify-start items-center h-full m-3 group w-32 ">
                    <h1 className="text-2xl text-black transition duration-1000 group-hover:text-red-600 cursor-pointer group-hover:scale-110 relative">
                        Categories
                    </h1>
                    <hr className="absolute bottom-0 left-[45%] transform -translate-x-1/2 w-20 transition duration-1000 
                            group-hover:border-red-600 cursor-pointer group-hover:scale-125 border-t-[1px] border-black" />
                </div>
            </div>
            <div>
                <ul className="m-3 p-3 ">
                    {categories.map((category) => (
                        <li key={category.slug} className=" mt-2 p-3 rounded-lg hover:text-red-600 cursor-pointer transition duration-1000 w-3/4 hover:scale-125 font-medium text-2xl">
                        {category.name}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
}