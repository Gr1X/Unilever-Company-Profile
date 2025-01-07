import React from "react";

const Banner = ({ title, subtitle, backgroundImage }) => {
    return (
        <section
        className="relative bg-cover bg-center bg-no-repeat h-80 flex items-end"
        style={{
            backgroundImage: `url(${backgroundImage})`,
        }}
        >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
            {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
        </div>
        </section>
    );
};

export default Banner;
