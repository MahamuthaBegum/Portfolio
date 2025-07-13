import React from "react";

function Projects() {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-2xl shadow-2xl mt-10">
            <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 tracking-tight drop-shadow-lg">
                MY PROJECTS
            </h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                {/* Weather App */}
                <div className="flex-1 p-6 bg-white/80 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-blue-100">
                    <h2 className="text-2xl font-bold mb-3 text-blue-700 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        Weather App
                    </h2>
                    <p className="mb-3 text-gray-700">
                        A responsive React app to check live weather updates using OpenWeatherMap API.
                        Features include animated icons, search by city, and light/dark themes.
                    </p>
                    <p className="mb-4 text-xs text-gray-500">
                        <span className="font-semibold">Tech Stack:</span> React, Tailwind CSS, REST API
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="https://weatherapp-react-iota.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition"
                        >
                            Live
                        </a>
                        <a
                            href="https://github.com/MahamuthaBegum/Weatherapp-React.git"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Bulk Mail App */}
                <div className="flex-1 p-6 bg-white/80 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-blue-100">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">Bulk Mail App</h3>
                    <p className="text-gray-700 mb-3">
                        A MERN stack application that allows users to send bulk emails using a form interface.
                        Includes user authentication and email history tracking.
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                        <span className="font-semibold">Tech Stack:</span> MongoDB, Express.js, React, Node.js
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="https://bulk-mail-ten.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition"
                        >
                            Live
                        </a>
                        <a
                            href="https://github.com/MahamuthaBegum/Bulk_Mail"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* E-Commerce Website */}
                <div className="flex-1 p-6 bg-white/80 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-blue-100">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">E-Commerce Website</h3>
                    <p className="text-gray-700 mb-3">
                        A full-stack e-commerce web application built using the MERN stack. Features include product
                        listing, product details, shopping cart, checkout, user authentication, and order tracking.
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                        <span className="font-semibold">Tech Stack:</span> MongoDB, Express.js, React, Node.js, Firebase Auth
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="https://health-sync-lyart.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition"
                        >
                            Live
                        </a>
                        <a
                            href="https://github.com/MahamuthaBegum/HealthSync.git"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;


