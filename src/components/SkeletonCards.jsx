// src/components/SkeletonCard.jsx
import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="bg-white rounded shadow overflow-hidden animate-pulse">
            {/* Placeholder Gambar */}
            <div className="w-full h-40 bg-gray-300"></div>
            
            <div className="p-4">
                {/* Placeholder Judul */}
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                
                {/* Placeholder Deskripsi */}
                <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;