import React from "react";
import Banner from "../components/Banner";

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen pb-12">
        <Banner
            title="Contact Us"
            subtitle="We'd love to hear from you! Feel free to reach out or visit us at our main office."
            backgroundImage="https://storage.googleapis.com/palma/mandau/Hyo1ESxRNaPNAOWOP1xZ.jpeg"
        />

        {/* Main Content */}
            <div className="mt-12 max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Embed Google Maps */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <h2 className="text-2xl font-bold text-blue-800 text-center py-4">
                    Our Location
                    </h2>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104373.91921571792!2d106.52508032940155!3d-6.311601726072515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb4a34a66e5d%3A0x90972b7464869d41!2sGrha%20Unilever!5e0!3m2!1sid!2sid!4v1736222628777!5m2!1sid!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-blue-800 text-center">
                    Get in Touch
                    </h2>
                    <div className="mt-6 space-y-6 text-gray-700">
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-blue-600 text-2xl mr-4"></i>
                            <p>
                            <strong>Address:</strong> Green Office Park 1, BSD City,
                                Tangerang
                            </p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone-alt text-blue-600 text-2xl mr-4"></i>
                            <p>
                            <strong>Phone:</strong> +62 21 8082 7000
                            </p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-blue-600 text-2xl mr-4"></i>
                            <p>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:info@unilever.co.id"
                                className="text-blue-600 hover:underline"
                            >
                                info@unilever.co.id
                            </a>
                            </p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-8 text-center">
                    <h3 className="text-lg font-bold text-gray-800">Follow Us</h3>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="text-blue-600 hover:text-blue-400">
                        <i className="fab fa-facebook-f text-2xl"></i>
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-400">
                        <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-400">
                        <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-400">
                        <i className="fab fa-linkedin-in text-2xl"></i>
                        </a>
                    </div>
                    </div>
                </div>
                </div>

                {/* Additional Section */}
                <div className="bg-blue-100 mt-12 py-12 rounded-lg text-center shadow-lg">
                <h3 className="text-3xl font-bold text-blue-800">
                    Have Questions or Need Assistance?
                </h3>
                <p className="mt-4 text-gray-700">
                    Feel free to contact us via phone, email, or visit us at our office.
                    We're here to help!
                </p>
                <a
                    href="mailto:info@unilever.co.id"
                    className="inline-block mt-6 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700"
                >
                    Email Us
                </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
