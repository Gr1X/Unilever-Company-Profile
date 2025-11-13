import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Pastikan Font Awesome sudah terpasang di proyek Anda
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Set scroll threshold
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Fungsi untuk menutup menu mobile saat link diklik
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`
            fixed w-full z-20 transition-all duration-300 
            ${(isScrolled || isOpen) ? "bg-blue-600 shadow-lg" : "bg-transparent"}
        `}> {/* <-- Logika ini (transparan ke biru) sekarang berlaku di SEMUA ukuran layar */}
            
            {/* Kontainer Utama */}
            <div className="flex justify-between items-center p-4 px-6 md:px-10">
                
                {/* Logo di Kiri - Dinamis dan Responsif */}
                <div className="flex-shrink-0">
                    <Link to="/" onClick={handleLinkClick}>
                        <img
                            // Logo ini (biru ke putih) sekarang berlaku di SEMUA ukuran layar
                            src={(isScrolled || isOpen) ? "/Asset/logoputih.png" : "/Asset/logobiru.png"}
                            alt="Unilever Logo"
                            // Ukuran logo dibuat responsif
                            className="h-12 md:h-20 w-auto transition-all duration-300"
                        />
                    </Link>
                </div>

                {/* Menu Navigasi (Desktop) - Tersembunyi di mobile */}
                <div className="hidden md:grid items-center">
                    <div className="flex items-center justify-end mb-2">
                        <div className="flex items-center justify-center w-5 h-5">
                            <i className="fas fa-globe text-white"></i>
                        </div>
                        <span className="ml-2 text-xs font-medium text-white">Unilever Indonesia</span>
                    </div>
                    <ul className="flex justify-center space-x-6 text-white">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/product">Our Products</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </div>

                {/* Tombol Hamburger (Mobile) - Tersembunyi di desktop */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </button>
                </div>
            </div>

            {/* Menu Dropdown (Mobile) */}
            <div className={`
                md:hidden transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? 'max-h-96' : 'max-h-0'}
            `}>
                <ul className="flex flex-col items-center space-y-4 text-white py-4">
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/news" onClick={handleLinkClick}>News</Link></li>
                    <li><Link to="/product" onClick={handleLinkClick}>Our Products</Link></li>
                    <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
                    <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
                </ul>
                <div className="flex items-center justify-center pb-4">
                    <div className="flex items-center justify-center w-5 h-5">
                        <i className="fas fa-globe text-white"></i>
                    </div>
                    <span className="ml-2 text-xs font-medium text-white">Unilever Indonesia</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;