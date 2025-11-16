import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useFetchNews from "../hooks/useFetchNews";
import { FaGlobe, FaLeaf, FaUsers, FaTags } from "react-icons/fa";

// 2. DITAMBAHKAN: URL untuk gambar placeholder jika gambar berita rusak
const placeholderImage = "https://via.placeholder.com/400x225?text=News";

const Home = () => {
    const { articles, isLoading, error } = useFetchNews('Unilever', 3);

    useEffect(() => {
        AOS.init({
            duration: 800, // Durasi sedikit lebih cepat
            once: true,
            offset: 50, // Memicu animasi sedikit lebih awal
        });
    }, []);

    return (
        // Menggunakan bg-white sebagai dasar global
        <div className="overflow-hidden bg-white">
            
            {/* Hero Section */}
            <section
                className="relative bg-[url('https://images.adsttc.com/media/images/598a/488e/b22e/3893/9200/0721/large_jpg/Unilever_Headquarters__Jakarta__Indonesia__by_Aedas_04.jpg?1502234761')] bg-cover bg-center bg-no-repeat"
                data-aos="fade-in"
            >
                {/* 3. IMPROVEMENT: Gradient diubah agar teks lebih kontras dan mudah dibaca */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

                {/* Content */}
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 
                    sm:px-6 lg:flex lg:h-screen lg:items-end lg:px-8">
                    <div className="max-w-xl text-center lg:text-start" data-aos="fade-up" data-aos-delay="200">
                        <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">
                            Welcome to
                            <span className="font-extrabold text-blue-600"> Unilever.</span>
                        </h1>

                        {/* 4. IMPROVEMENT: Teks dibuat sedikit lebih gelap (gray-800) untuk kontras */}
                        <p className="mt-4 max-w-lg text-gray-800 sm:text-xl">
                            At Unilever, we are committed to making sustainable living 
                            commonplace through our innovative products and impactful initiatives.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            {/* 5. FIX: 'href' diganti menjadi 'to' untuk React Router */}
                            <Link
                                to="/product" // <-- PERUBAHAN
                                className="block w-full rounded bg-blue-600 px-12 py-3 
                                text-sm font-medium text-white shadow-lg hover:bg-blue-700 
                                focus:outline-none focus:ring active:bg-blue-500 sm:w-auto
                                transition-colors" // Transisi ditambahkan
                            >
                                Explore Our Products
                            </Link>

                            <Link
                                to="/aboutus" // <-- PERUBAHAN
                                className="block w-full rounded bg-white px-12 py-3 
                                text-sm font-medium text-blue-600 shadow-lg hover:text-blue-700 
                                focus:outline-none focus:ring active:text-blue-500 sm:w-auto
                                transition-colors" // Transisi ditambahkan
                            >
                                Get Know Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            {/* 6. IMPROVEMENT: Animasi diseragamkan menjadi 'fade-up' */}
            <section className="py-16 lg:py-24 bg-gray-50" data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get to Know Us</h2>
                        <p className="mt-4 max-w-3xl text-lg text-gray-700 mx-auto">
                            Unilever is one of the world’s leading suppliers of Beauty & Personal Care, Home Care, and Foods & Refreshment products, with sales in over 190 countries and products used by 3.4 billion people every day.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* 7. IMPROVEMENT: Menggunakan 'react-icons' */}
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto shadow-lg">
                                <FaGlobe className="text-3xl" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-gray-900">Global Presence</h3>
                            <p className="mt-2 text-gray-700">Operating in over 190 countries worldwide.</p>
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto shadow-lg">
                                <FaLeaf className="text-3xl" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-gray-900">Sustainability</h3>
                            <p className="mt-2 text-gray-700">Committed to reducing environmental impact and improving lives.</p>
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto shadow-lg">
                                <FaUsers className="text-3xl" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-gray-900">People First</h3>
                            <p className="mt-2 text-gray-700">Empowering people through innovation and diversity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            {/* 8. IMPROVEMENT: Latar belakang section diubah agar card 'pop-out' */}
            <section className="py-16 lg:py-24 bg-white" data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest News</h2>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {isLoading && (
                            <p className="col-span-3 text-center text-gray-600">Loading latest news...</p>
                        )}
                        
                        {error && (
                            <p className="col-span-3 text-center text-red-600">Could not fetch news: {error}</p>
                        )}

                        {!isLoading && !error && (
                            articles.slice(0, 3).map((article, index) => (
                                // 9. IMPROVEMENT: Card dibuat 'bg-white' dengan 'shadow-lg'
                                <div 
                                    key={article.url} 
                                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" // flex flex-col untuk 'Read More'
                                    data-aos="fade-up" 
                                    data-aos-delay={index * 100} // Stagger animation
                                >
                                    <img
                                        src={article.urlToImage || placeholderImage} // Fallback jika urlToImage null
                                        alt={article.title}
                                        className="h-48 w-full object-cover" 
                                        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                                    />
                                    <div className="p-6 flex flex-col flex-grow"> {/* flex-grow agar card sama tinggi */}
                                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{article.title}</h3>
                                        <p className="mt-2 text-gray-700 line-clamp-3 flex-grow">{article.description}</p> {/* line-clamp untuk membatasi teks */}
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 block text-blue-600 font-medium hover:text-blue-700 transition-colors"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Quick Facts Section */}
            {/* 11. IMPROVEMENT: Dibuat lebih 'branded' dengan warna primer */}
            <section className="py-16 lg:py-24 bg-blue-600 text-white" data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-center">Quick Facts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-blue-700 p-8 rounded-lg shadow-xl text-center" data-aos="fade-up" data-aos-delay="100">
                            <FaGlobe className="text-white text-5xl mb-4 mx-auto" />
                            <h3 className="text-4xl font-extrabold">190+</h3>
                            <p className="mt-2 text-lg text-blue-100">Countries</p>
                        </div>
                        <div className="bg-blue-700 p-8 rounded-lg shadow-xl text-center" data-aos="fade-up" data-aos-delay="200">
                            <FaTags className="text-white text-5xl mb-4 mx-auto" />
                            <h3 className="text-4xl font-extrabold">400+</h3>
                            <p className="mt-2 text-lg text-blue-100">Brands</p>
                        </div>
                        <div className="bg-blue-700 p-8 rounded-lg shadow-xl text-center" data-aos="fade-up" data-aos-delay="300">
                            <FaUsers className="text-white text-5xl mb-4 mx-auto" />
                            <h3 className="text-4xl font-extrabold">149,000+</h3>
                            <p className="mt-2 text-lg text-blue-100">Employees Worldwide</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 lg:py-24 bg-gray-900 text-white" data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">Who We Are</h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Learn more about our vision, mission, and how we're making an impact globally.
                        </p>
                    </div>

                    <div className="mt-12 flex justify-center">
                        {/* 12. IMPROVEMENT: Aspect ratio box untuk video responsive */}
                        <div className="w-full max-w-4xl aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/vRMgeaJDkHs"
                                title="Unilever Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg shadow-2xl absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 lg:py-24 bg-gray-50" data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What People Say</h2>
                        <p className="mt-4 max-w-2xl text-lg text-gray-700 mx-auto">
                            Hear what our customers and partners have to say about us.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
                            <p className="text-gray-700 italic text-lg">
                                "Unilever has been a part of my life for as long as I can remember. Their products are top-notch, and I love their commitment to sustainability."
                            </p>
                            <h4 className="mt-6 font-bold text-gray-900">- Sarah Johnson</h4>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-gray-700 italic text-lg">
                                "I truly admire Unilever's efforts in making the world a better place. Their initiatives inspire us all to do better."
                            </p>
                            <h4 className="mt-6 font-bold text-gray-900">- Michael Brown</h4>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
                            <p className="text-gray-700 italic text-lg">
                                "As a business partner, working with Unilever has been an incredible journey. Their professionalism is unmatched."
                            </p>
                            <h4 className="mt-6 font-bold text-gray-900">- Anna Davis</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;