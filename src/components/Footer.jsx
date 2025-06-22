import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-transparent  backdrop-blur  border-t-1 border-sky-500 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                    <a href="#" className="text-4xl font-bold text-sky-500 mb-4 md:mb-0">thabith.dev</a>


                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <div className="flex flex-wrap gap-4 text-sm sm:mb-4">
                            <a
                                href="https://maps.app.goo.gl/C7MaGWXKZypMvTgG9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:text-white"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                </svg>
                                Location
                            </a>

                            <a href="tel:+94766553936" className="flex items-center gap-1 hover:text-white">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.73 3.83.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.4 22 2 13.6 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.33.25 2.63.73 3.83a1 1 0 01-.21 1.11l-2.2 2.2z" />
                                </svg>
                                Phone
                            </a>

                            <a
                                href="mailto:thabith20010909@gmail.com"
                                className="flex items-center gap-1 hover:text-white"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                Gmail
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://web.facebook.com/thabith.thabith.75436/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 active:text-blue-700">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.6 8.07 8 8.93v-6.31h-2.4v-2.62h2.4v-2c0-2.38 1.42-3.7 3.6-3.7 1.04 0 2.12.18 2.12.18v2.34h-1.2c-1.18 0-1.54.73-1.54 1.48v1.7h2.62l-.42 2.62h-2.2v6.31c4.4-.86 8-4.53 8-8.93 0-5.5-4.46-9.96-9.96-9.96z" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/thabithshahulhameed" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 active:text-blue-700">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M21.6 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h19.2c1.3 0 2.4-1.1 2.4-2.4V2.4C24 1.1 22.9 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zm-1.8-12.3c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zm15 12.3h-3.6v-5.4c0-1.3-.5-2.1-1.8-2.1-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.8v5.4H9.6V9.6h3.6v1.5c.5-.8 1.4-1.8 3.3-1.8 2.4 0 4.2 1.5 4.2 4.7v6.4z" />
                                </svg>
                            </a>

                            <a href="https://github.com/Thabith2001" target="_blank" rel="noopener noreferrer" className="hover:text-white active:text-white">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.725-4.033-1.415-4.033-1.415-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>

                            <a href="https://wa.me/+94766553936" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 active:text-green-500">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                                    <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.82 0.735 5.656 2.128 8.128l-2.128 7.872 7.872-2.128c2.472 1.393 5.308 2.128 8.128 2.128 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.091c-2.452 0-4.864-0.642-6.966-1.872l-0.495-0.287-4.665 1.262 1.262-4.665-0.287-0.495c-1.23-2.102-1.872-4.514-1.872-6.966 0-7.228 5.873-13.091 13.091-13.091s13.091 5.873 13.091 13.091c0 7.228-5.873 13.091-13.091 13.091zM23.173 19.02c-0.325-0.162-1.922-0.949-2.221-1.056-0.299-0.108-0.517-0.162-0.735 0.162-0.217 0.325-0.844 1.056-1.035 1.274-0.19 0.217-0.381 0.244-0.706 0.081-0.325-0.162-1.373-0.505-2.615-1.61-0.966-0.861-1.618-1.922-1.807-2.247-0.19-0.325-0.021-0.5 0.142-0.662 0.146-0.146 0.325-0.381 0.487-0.571 0.162-0.19 0.217-0.325 0.325-0.542 0.108-0.217 0.054-0.406-0.027-0.571-0.081-0.162-0.735-1.772-1.008-2.427-0.265-0.636-0.536-0.55-0.735-0.561l-0.624-0.011c-0.217 0-0.571 0.081-0.871 0.406s-1.145 1.118-1.145 2.723 1.171 3.161 1.334 3.377c0.162 0.217 2.304 3.521 5.586 4.933 0.78 0.337 1.387 0.539 1.861 0.689 0.782 0.249 1.492 0.214 2.052 0.13 0.625-0.093 1.922-0.784 2.195-1.541 0.271-0.756 0.271-1.404 0.19-1.541-0.081-0.136-0.299-0.217-0.624-0.379z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    &copy; 2025 thabith.dev. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
