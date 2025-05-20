import React from "react";

const HomeMain = () => {
    return (
        <main
            id="home"
            className="min-h-screen backdrop-blur text-white flex items-center justify-center"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
                    Hi, I’m <span className="text-sky-500">Mohamed Thabith</span>
                </h1>
                <p className="text-lg md:text-2xl mb-6 text-gray-300 animate-fade-in-delay">
                    A passionate <span className="text-sky-500">Software Engineer</span> crafting modern solutions.
                </p>
                <div className="space-x-4">
                    <a
                        href="#project"
                        className="inline-block bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 active:opacity-90 duration-150"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-block border border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600 active:text-white text-sky-500 font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 active:scale-95 active:opacity-90 duration-150"
                    >
                        Contact Me
                    </a>
                </div>

            </div>
        </main>
    );
};

export default HomeMain;
