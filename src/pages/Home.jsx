import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // <-- 1. DITAMBAHKAN: Untuk navigasi
import useFetchNews from "../hooks/useFetchNews"; // <-- 2. DITAMBAHKAN: Hook baru kita


const Home = () => {

    const { articles, isLoading } = useFetchNews('Unilever', 3);

    // 4. DIUBAH: useEffect ini sekarang HANYA untuk AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []); 


    return (
        <div className="overflow-hidden"> 
            {/* Hero Section */}
            <section
                className="relative bg-[url('https://images.adsttc.com/media/images/598a/488e/b22e/3893/9200/0721/large_jpg/Unilever_Headquarters__Jakarta__Indonesia__by_Aedas_04.jpg?1502234761')] bg-cover bg-center bg-no-repeat"
                data-aos="fade-in"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r 
                from-gray-200/100 via-transparent to-blue-900/30"></div>

                {/* Content */}
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 
                    sm:px-6 lg:flex lg:h-screen lg:items-end lg:px-8">
                    <div className="max-w-xl text-center lg:text-start">
                        <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">
                            Welcome to
                            <span className="font-extrabold text-blue-600"> Unilever.</span>
                        </h1>

                        <p className="mt-4 max-w-lg text-gray-700 sm:text-xl">
                            At Unilever, we are committed to making sustainable living 
                            commonplace through our innovative products and impactful initiatives.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                href="/product"
                                className="block w-full rounded bg-blue-600 px-12 py-3 
                                text-sm font-medium text-white shadow hover:bg-blue-700 
                                focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            >
                                Explore Our Products
                            </Link>

                            <Link 
                                href="/aboutus"
                                className="block w-full rounded bg-white px-12 py-3 
                                text-sm font-medium text-blue-600 shadow hover:text-blue-700 
                                focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                            >
                                Get Know Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-16 bg-gray-100" data-aos="fade-right">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get to Know Us</h2>
                        <p className="mt-4 max-w-2xl text-lg text-gray-700 mx-auto">
                            Unilever is one of the world’s leading suppliers of Beauty & Personal Care, Home Care, and Foods & Refreshment products, with sales in over 190 countries and products used by 3.4 billion people every day.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center" data-aos="zoom-in">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto">
                                <i className="fas fa-globe text-2xl"></i>
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-900">Global Presence</h3>
                            <p className="mt-2 text-gray-700">Operating in over 190 countries worldwide.</p>
                        </div>

                        <div className="text-center" data-aos="zoom-in">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto">
                                <i className="fas fa-leaf text-2xl"></i>
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-900">Sustainability</h3>
                            <p className="mt-2 text-gray-700">Committed to reducing environmental impact and improving lives.</p>
                        </div>

                        <div className="text-center" data-aos="zoom-in">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto">
                                <i className="fas fa-users text-2xl"></i>
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-900">People First</h3>
                            <p className="mt-2 text-gray-700">Empowering people through innovation and diversity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="py-16 bg-white" data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest News</h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 6. DIPERBAIKI: Menambahkan loading state */}
                        {isLoading ? (
                            <p className="col-span-3 text-center text-gray-600">Loading latest news...</p>
                        ) : (
                            articles.map((article) => (
                                // 7. DIPERBAIKI: Menggunakan key yang lebih stabil (article.url)
                                <div key={article.url} className="bg-gray-100 p-6 rounded-lg shadow" data-aos="fade-in">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="h-40 w-full object-cover rounded-lg"
                                    />
                                    <h3 className="mt-4 text-xl font-bold text-gray-900">{article.title}</h3>
                                    <p className="mt-2 text-gray-700">{article.description}</p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 block text-blue-600 font-medium"
                                    >
                                        Read More
                                    </a>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>``

            {/* Fakta Menarik */}
            <section className="relative bg-blue-100 p-12 rounded shadow-lg" data-aos="zoom-in">
                <h2 className="text-4xl font-extrabold text-center text-blue-800">Quick Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <i className="fas fa-globe text-blue-600 text-5xl mb-4"></i>
                        <h3 className="text-3xl font-extrabold text-blue-600">190+</h3>
                        <p className="mt-2 text-lg text-gray-600">Countries</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-lg">
                        <i className="fas fa-tags text-blue-600 text-5xl mb-4"></i>
                        <h3 className="text-3xl font-extrabold text-blue-600">400+</h3>
                        <p className="mt-2 text-lg text-gray-600">Brands</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-lg">
                        <i className="fas fa-users text-blue-600 text-5xl mb-4"></i>
                        <h3 className="text-3xl font-extrabold text-blue-600">149,000+</h3>
                        <p className="mt-2 text-lg text-gray-600">Employees Worldwide</p>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-gray-900 text-white" data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">Who We Are</h2>
                        <p className="mt-4 max-w-2xl mx-auto">
                            Learn more about our vision, mission, and how we're making an impact globally.
                        </p>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/vRMgeaJDkHs"
                            title="Unilever Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 bg-gray-50" data-aos="fade-left">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What People Say</h2>
                        <p className="mt-4 max-w-2xl text-lg text-gray-700 mx-auto">
                            Hear what our customers and partners have to say about us.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                            <p className="text-gray-700 italic">
                                "Unilever has been a part of my life for as long as I can remember. Their products are top-notch, and I love their commitment to sustainability."
                            </p>
                            <h4 className="mt-4 font-bold text-gray-900">- Sarah Johnson</h4>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                            <p className="text-gray-700 italic">
                                "I truly admire Unilever's efforts in making the world a better place. Their initiatives inspire us all to do better."
                            </p>
                            <h4 className="mt-4 font-bold text-gray-900">- Michael Brown</h4>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                            <p className="text-gray-700 italic">
                                "As a business partner, working with Unilever has been an incredible journey. Their professionalism is unmatched."
                            </p>
                            <h4 className="mt-4 font-bold text-gray-900">- Anna Davis</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
