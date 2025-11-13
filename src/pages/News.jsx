import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Inisialisasi AOS
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });

       // Fetch data dari API
    fetch('https://newsapi.org/v2/everything?q=Unilever&language=en&apiKey=69875cd5393948188cedea2e4758edf3')
        .then((response) => response.json())
        .then((data) => {
            if (data.articles) {
                setArticles(data.articles.slice(0, 10)); // Ambil 10 artikel
            } else {
                console.error("No articles found in the response.");
            }
        })
        .catch((error) => console.error("Error fetching API:", error));

    }, []);

    return (
        <div>
            {/* Banner */}
            <Banner
                title="Our Updates"
                subtitle="Stay informed with the latest updates about Unilever"
                backgroundImage="https://assets1.consumergoods.com/images/v/max_width_1440/2023-04/unilever_1466949611.jpg"
            />

            {/* Konten Berita */}
            <div className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white rounded shadow overflow-hidden"
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                        >
                            {/* Gambar Berita */}
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="w-full h-40 object-cover"
                                />
                            )}
                            {/* Informasi Berita */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    {article.description?.slice(0, 100)}...
                                </p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline block mt-4"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
