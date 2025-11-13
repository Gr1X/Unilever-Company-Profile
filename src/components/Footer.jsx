const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo dan Deskripsi */}
                <div>
                    <div className="flex items-center mb-4">
                        <img
                        src="/Asset/logoputih.png"
                        alt="Unilever Logo"
                        className="h-32 w-auto"
                        />
                    </div>
                    <p className="text-sm text-gray-300">
                        Committed to creating a better future through sustainable living and innovation.
                    </p>
                </div>
    
                {/* Navigasi */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/" className="hover:text-blue-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/aboutus" className="hover:text-blue-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/news" className="hover:text-blue-400">
                                News
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-blue-400">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/products" className="hover:text-blue-400">
                                Products
                            </a>
                        </li>
                    </ul>
                </div>
    
                {/* Kontak dan Sosial Media */}
                <div>
                <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                <p className="text-sm text-gray-300">
                    Green Office Park 1, BSD City, Tangerang
                </p>
                <p className="text-sm text-gray-300 mt-2">Phone: +62 21 8082 7000</p>
                <p className="text-sm text-gray-300">Email: info@unilever.co.id</p>
    
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-300 hover:text-blue-400">
                    <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-blue-400">
                    <i className="fab fa-twitter text-lg"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-blue-400">
                    <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-blue-400">
                    <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
                </div>
                </div>
            </div>
    
            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Unilever Indonesia. All Rights Reserved.
            </div>
            </div>
        </footer>
        );
    };

export default Footer;
