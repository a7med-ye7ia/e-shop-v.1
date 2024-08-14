import React, { useEffect, useState } from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
export default function ProductSection() {
    const api_url = "https://dummyjson.com/products";
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
            };
    useEffect(() => {
        getProducts();
    }, []);
    
    const [productsByCategory , setProductsByCategory] = useState([]);
    const getProductsByCategoryList = (CategoryName) => {
        fetch(`${api_url}/category/${CategoryName}`)
        .then((res) => res.json())
        .then((data) => setProductsByCategory(data.products));
    };
    useEffect(()=>{
        getProductsByCategoryList();
    },[])
    
    return (
        <section className="mt-20 min-h-screen px-4">
            <div className="relative flex justify-center m-3 group">
                <h1 className="text-2xl text-black transition duration-1000 mb-2
                    group-hover:text-red-600 cursor-pointer group-hover:scale-110 relative">
                    All Products
                </h1>
                <hr className="absolute bottom-0 left-[50%] transform -translate-x-1/2 w-20 transition duration-1000 
                    group-hover:border-red-600 cursor-pointer group-hover:scale-125 border-t-[2px] border-black" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {products.map(product => (
                    <div key={product.id} className="border shadow rounded-lg p-4 flex flex-col">
                        <img
                            src={product.thumbnail}  
                            alt={product.title}
                            className="w-full mb-4 h-48 object-cover rounded-t-lg hover:scale-110 transition duration-700"
                        />
                        <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-red-600 hover:scale-105 transition duration-1000">
                            {product.title}
                        </h3>
                        <p className="text-gray-700 mb-4 cursor-pointer hover:text-red-600 transition duration-1000">
                            {product.description}
                        </p>
                        <div className="flex items-center justify-end gap-2 mb-4">
                            <FaStarHalfStroke className="text-yellow-400 text-2xl mb-1 ml-3 hover:scale-125 transition duration-1000" />
                            <div className="px-2 py-1 bg-red-200 rounded-full text-red-600 hover:scale-125 cursor-pointer transition duration-1000">
                                {product.rating}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold hover:text-red-600 hover:scale-125 cursor-pointer transition duration-1000">
                                {product.price}$
                            </span>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600 
                                hover:border-red-600 hover:border-[1px] transition duration-1000 hover:scale-110">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}