import { useState, useEffect } from 'react';

const useFetchNews = (query, articleCount) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
        const API_URL = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}`;

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles.slice(0, articleCount));
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                setIsLoading(false);
            });
            
    }, [query, articleCount]); 

    return { articles, isLoading };
};

export default useFetchNews;