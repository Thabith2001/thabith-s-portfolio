import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-transparent backdrop-blur shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="text-xl font-bold text-sky-500">&lt;code?&gt;</a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8 text-gray-50 text-sm font-medium">
                        <a href="#home" className="hover:text-sky-500 hover:underline hover:underline-offset-8">Home</a>
                        <a href="#project" className="hover:text-sky-500 hover:underline hover:underline-offset-8">Projects</a>
                        <a href="#about" className="hover:text-sky-500 hover:underline hover:underline-offset-8">About</a>
                        <a href="#docs" className="hover:text-sky-500 hover:underline hover:underline-offset-8">Docs</a>
                    </nav>


                    <button
                        id="menuToggle"
                        className="lg:hidden text-gray-50 hover:text-sky-500 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>


            <div
                id="mobileMenu"
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden px-4 pt-2 pb-4 space-y-2 bg-neutral-800/70 backdrop-blur`}
            >
                {['Home', 'Projects', 'About', 'Docs'].map((text, index) => {
                    const hrefs = ['#home', '#project', '#about', '#docs'];
                    return (
                        <a
                            key={index}
                            href={hrefs[index]}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-50 transition delay-100 duration-700 ease-in-out text-base
                   hover:text-sky-500 hover:font-bold
                   active:text-sky-500 active:font-bold"
                        >
                            {text}
                        </a>
                    );
                })}
            </div>


        </header>
    );
};

export default Header;
