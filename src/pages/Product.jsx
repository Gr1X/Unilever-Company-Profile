import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: "ease-in-out", 
            once: true,
        });
    }, []);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products.slice(0, 25))); 
    }, []);

    
    const truncateText = (text, limit) => {
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (
        <div>
            <Banner
                title="Our Products"
                subtitle="Explore the wide range of Unilever's products"
                backgroundImage="https://hul-performance-highlights.hul.co.in/performance-highlights-fy-2022-2023/images/ourbrandbanner1.jpg"
            />

            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    {truncateText(product.description, 100)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
