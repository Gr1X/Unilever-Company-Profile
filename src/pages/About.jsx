import React from "react";
import Banner from "../components/Banner";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Banner
                title="About Us"
                subtitle="Enhancing lives through sustainable living and innovation."
                backgroundImage="https://tbcdn.talentbrew.com/company/34155/31939/content/uflp1.png"
            />

            <div className="p-8 space-y-4">
                {/* Misi dan Visi - Gambar di Kanan */}
                <div className="relative bg-blue-50 rounded-lg shadow-lg flex justify-between items-center">
                    <div className="max-w-lg p-12">
                        <h2 className="text-4xl font-extrabold text-blue-800">
                        Our Mission & Vision
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            At Unilever, our mission is to make sustainable living commonplace.
                            We aim to improve the health and well-being of people worldwide,
                            reduce environmental impact, and enhance the livelihoods of millions.
                        </p>
                    </div>
                    <div className="relative w-1/2 h-full">
                        <img
                        src="https://www.unilever.co.id/content-images/92ui5egz/production/f83b29a6b10b1d6fc5d046622896a2ff80c55680-1920x1080.png?rect=0,36,1920,1008&w=1200&h=630&fm=jpg"
                        alt="Mission and Vision"
                        className="w-full h-full object-cover rounded-e-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-800/70 rounded-s-lg"></div>
                    </div>
                </div>

                {/* Sejarah Singkat - Gambar di Kiri */}
                <div className="relative bg-white rounded-lg shadow-lg flex items-center justify-between">
                    <div className="relative w-1/2 h-full">
                        <img
                            src="https://statik.tempo.co/data/2023/11/25/id_1257614/1257614_720.jpg"
                            alt="History"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-800/70 rounded-s-lg"></div>
                    </div>
                    <div className="max-w-lg p-12 text-right">
                        <h2 className="text-4xl font-extrabold text-gray-800">Our History</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                        Founded in 1929 through the merger of Margarine Unie and Lever Brothers,
                        Unilever has grown into one of the world’s largest consumer goods
                        companies. With brands like Dove, Knorr, Lifebuoy, and more, Unilever
                        has become a household name in over 190 countries.
                        </p>
                    </div>
                </div>

                {/* Nilai-Nilai Perusahaan - Ikon */}
                <div className="relative bg-green-100 p-12 rounded-lg shadow-lg">
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-green-800">Sustainability Commitment</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        We are committed to reducing our environmental footprint by using
                        renewable energy, reducing plastic waste, and promoting sustainable
                        farming practices. Our goal is to create a brighter future for generations
                        to come.
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <i className="fas fa-leaf text-6xl text-green-700"></i>
                    </div>
                </div>
            </div>
            <div className="relative bg-gray-50 p-12 shadow-lg">
                    <h2 className="text-4xl font-extrabold text-gray-800 text-center">Our Core Values</h2>
                        <ul className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
                            <li className="flex items-start">
                            <i className="fas fa-check-circle text-blue-600 text-2xl mr-4"></i>
                            Integrity and respect in all that we do.
                            </li>
                            <li className="flex items-start">
                            <i className="fas fa-lightbulb text-blue-600 text-2xl mr-4"></i>
                            Continuous innovation for better living.
                            </li>
                            <li className="flex items-start">
                            <i className="fas fa-users text-blue-600 text-2xl mr-4"></i>
                            Commitment to diversity and inclusion.
                            </li>
                            <li className="flex items-start">
                            <i className="fas fa-leaf text-blue-600 text-2xl mr-4"></i>
                            Sustainability as a cornerstone of our operations.
                            </li>
                        </ul>
                </div>
        </div>
    );
};

export default AboutUs;
