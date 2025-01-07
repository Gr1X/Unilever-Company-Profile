import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); // Set scroll threshold
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-20 transition-all duration-300 ${isScrolled ? "bg-blue-600 shadow-lg" : "bg-transparent"}`}>
            <div className="flex justify-between items-center p-4 px-10">
                {/* Logo di Kiri */}
                <div className="flex items-center">
                    <img
                        src={isScrolled ? "/Asset/logoputih.png" : "/Asset/logobiru.png"}
                        alt="Unilever Logo"
                        className="h-20 w-auto transition-all duration-300"
                    />
                </div>

                {/* Menu Navigasi */}
                <div className="grid items-center">
                    <div className="flex items-center justify-end mb-2">
                        <div className="flex items-center justify-center w-5 h-5 text-blue-800">
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
            </div>
        </nav>
    );
};

export default Navbar;
