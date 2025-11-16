// pages/News.jsx
import React, { useEffect, useState, useRef, useCallback } from "react"; // 1. Impor useRef & useCallback
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import useFetchNews from "../hooks/useFetchNews";
import SkeletonCard from "../components/SkeletonCards"; // Pastikan 's' di akhir dihapus

const News = () => {
    const [page, setPage] = useState(1);
    const [allArticles, setAllArticles] = useState([]);

    // 2. Ganti pageSize dari 10 menjadi 9 (agar grid rapi)
    const { articles, isLoading, error, hasMore } = useFetchNews('Unilever', page, 3);

    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    // useEffect untuk MENGGABUNGKAN artikel (logika ini sudah bagus)
    useEffect(() => {
        if (articles && articles.length > 0) {
            setAllArticles(prevArticles => {
                const combined = [...prevArticles, ...articles];
                const uniqueArticlesMap = new Map(combined.map(item => [item.url, item]));
                return Array.from(uniqueArticlesMap.values());
            });
        }
    }, [articles]);

    // 3. Logika "Infinite Scroll" (Pengganti Tombol)
    const observer = useRef();
    const lastArticleElementRef = useCallback(node => {
        if (isLoading) return; // Jika sedang loading, jangan lakukan apa-apa
        if (observer.current) observer.current.disconnect(); // Putuskan observer lama

        observer.current = new IntersectionObserver(entries => {
            // Jika elemen terakhir terlihat di layar DAN masih ada data (hasMore)
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1); // Tambah halaman, picu hook
            }
        });

        if (node) observer.current.observe(node); // Amati elemen terakhir
    }, [isLoading, hasMore]); // <-- Bangun ulang observer jika status loading/hasMore berubah

    return (
        <div>
            <Banner
                title="Our Updates"
                subtitle="Stay informed with the latest updates about Unilever"
                backgroundImage="https://assets1.consumergoods.com/images/v/max_width_1440/2023-04/unilever_1466949611.jpg"
            />
            <div className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Render SEMUA artikel */}
                    {allArticles.map((article, index) => (
                        <div
                            // 4. Tambahkan 'ref' HANYA ke elemen terakhir
                            ref={allArticles.length === index + 1 ? lastArticleElementRef : null}
                            key={article.url || index} 
                            className="bg-white rounded shadow overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index % 9 * 100} // <-- 5. Ganti 10 menjadi 9
                        >
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="w-full h-40 object-cover"
                                    loading="lazy"
                                />
                            )}
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

                    {/* Tampilkan SKELETON di bawah saat sedang loading */}
                    {isLoading && (
                        Array.from({ length: 3 }).map((_, index) => ( 
                            <SkeletonCard key={`skel-${index}`} />
                        ))
                    )}
                </div>

                {/* 6. HAPUS Tombol "Load More", ganti dengan status */}
                <div className="text-center mt-12" style={{ height: '50px' }}> {/* Beri sedikit ruang */}
                    {error && (
                        <p className="text-red-600">Could not fetch news: {error}</p>
                    )}
                    {!hasMore && !isLoading && (
                        <p className="text-gray-500">You've reached the end of the news.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default News;