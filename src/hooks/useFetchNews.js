// src/hooks/useFetchNews.js
import { useState, useEffect } from 'react';

// Tambahkan argumen 'page' dan 'pageSize'
const useFetchNews = (query, page = 1, pageSize = 10) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true); // Untuk tahu kapan harus berhenti

    useEffect(() => {
        // Jangan reset 'articles' di sini, biarkan komponen yang atur
        setIsLoading(true);
        setError(null);
        
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
        // Tambahkan 'page' dan 'pageSize' ke API URL
        const API_URL = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;

        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.articles) {
                    setArticles(data.articles);
                    // Jika artikel yang kembali < 10, berarti sudah habis
                    setHasMore(data.articles.length === pageSize);
                } else {
                    setError("No articles found.");
                    setHasMore(false);
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                setError(error.message);
                setIsLoading(false);
            });
            
    // Hook ini sekarang akan berjalan setiap kali 'query' atau 'page' berubah
    }, [query, page, pageSize]);

    // Kembalikan 'articles' baru dan 'hasMore'
    return { articles, isLoading, error, hasMore };
};

export default useFetchNews;