import React from "react";

const About = () => {
    return (
        <main
            id="about"
            className="min-h-screen  flex items-center justify-center p-8 ">
            <div className="border border-sky-700 rounded-xl shadow-xl p-8">
                <section className="w-full max-w-6xl ">
                    <div className=" rounded-2xl shadow-xl p-10  ">
                        {/* Profile Image */}
                        <div
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-sky-500 shrink-0 mb-10 p-1 md:place-items-center">
                            <img
                                src="/thabith.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* About Content */}
                            <div>
                                <h2 className="text-3xl font-bold text-sky-500 mb-4">
                                    About Me
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Hi, I'm{" "}
                                    <span className="font-semibold text-sky-500">
                  Mohammed Thabith Shahul Hameed
                </span>
                                    , a passionate software engineer with a strong background in
                                    Java, Spring Boot, and modern front-end technologies like React.
                                    I thrive in collaborative environments and love building
                                    real-world solutions that make a difference.
                                </p>
                                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                                    I recently completed my BSc (Hons) in Software Engineering from
                                    Birmingham City University via the Java Institute for Advanced
                                    Technology. My focus lies in building responsive web
                                    applications, crafting intuitive user interfaces, and working
                                    with SQL databases to handle data-driven tasks efficiently.
                                </p>
                                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                                    When I’m not coding, you’ll find me playing cricket or
                                    badminton, or exploring new tech ideas to boost my thinking
                                    level. I'm also a health conscious individual who trains daily
                                    and is currently on a goal-driven fitness journey.
                                </p>

                                {/* Skills Section */}
                                <div className="container mx-auto px-4 py-8 ">
                                    <div className="mt-8">
                                        <h3 className="text-2xl font-bold text-sky-500 mb-6">
                                            Technical Skills
                                        </h3>
                                        <div className="space-y-6">
                                            {/* Java/Spring */}
                                            <div className="skill-item">
                                                <div className="flex items-center mb-2 gap-1">
                                                    <img
                                                        width="28"
                                                        height="28"
                                                        src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
                                                        alt="Java"
                                                    />
                                                    <img
                                                        width="25"
                                                        height="25"
                                                        src="https://img.icons8.com/color/48/spring-logo.png"
                                                        alt="Spring Boot"
                                                    />
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                          Java, Spring Boot
                        </span>
                                                </div>
                                            </div>

                                            {/* JavaScript */}
                                            <div className="skill-item">
                                                <div className="flex items-center mb-2 gap-1">
                                                    <img
                                                        width="25"
                                                        height="25"
                                                        src="https://img.icons8.com/color/48/javascript--v1.png"
                                                        alt="JavaScript"
                                                    />
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">JavaScript</span>
                                                </div>
                                            </div>

                                            {/* React/Vite */}
                                            <div className="skill-item">
                                                <div className="flex items-center mb-2 gap-1">
                                                    <img
                                                        width="25"
                                                        height="25"
                                                        src="https://img.icons8.com/plasticine/100/react.png"
                                                        alt="React"
                                                    />
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">React, Vite</span>
                                                </div>
                                            </div>

                                            {/* HTML/CSS/Tailwind */}
                                            <div className="skill-item">
                                                <div className="flex items-center mb-2 gap-1">
                                                    <img
                                                        width="25"
                                                        height="25"
                                                        src="https://img.icons8.com/color/48/html-5--v1.png"
                                                        alt="HTML"
                                                    />
                                                    <img
                                                        width="25"
                                                        height="25"
                                                        src="https://img.icons8.com/color/48/css3.png"
                                                        alt="CSS"
                                                    />
                                                    <img
                                                        width="25"
                                                        height="25"
                                                        src="https://img.icons8.com/fluency/48/tailwind_css.png"
                                                        alt="Tailwind"
                                                    />
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                          HTML, CSS, Tailwind
                        </span>
                                                </div>
                                            </div>

                                            {/* SQL */}
                                            <div className="skill-item">
                                                <div className="flex items-center mb-2 gap-1">
                                                    <img
                                                        width="24"
                                                        height="24"
                                                        src="https://img.icons8.com/external-those-icons-flat-those-icons/24/external-MySQL-programming-and-development-those-icons-flat-those-icons.png"
                                                        alt="MySQL"
                                                    />
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                          MySQL, Data Management
                        </span>
                                                </div>
                                            </div>

                                            {/* Agile */}
                                            <div className="skill-item">
                                                <div className="flex items-center mb-2 gap-1">
                                                    <img
                                                        width="24"
                                                        height="24"
                                                        src="https://img.icons8.com/external-obvious-flat-kerismaker/48/external-agile-product-management-flat-obvious-flat-kerismaker.png"
                                                        alt="Agile"
                                                    />
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                          Agile Collaboration
                        </span>
                                                </div>
                                            </div>

                                            {/* Problem Solving */}
                                            <div className="skill-item">
                                                <div className="flex items-center mb-2 gap-1">
                                                    <img
                                                        width="25"
                                                        height="25"
                                                        src="https://img.icons8.com/external-flat-concept-vectorslab/53/external-Problem-Solving-business-and-finance-flat-concept-vectorslab.png"
                                                        alt="Problem Solving"
                                                    />
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                          Problem Solving & Communication
                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Resume Button */}
                        <div className="mt-6">
                            <a
                                href="/MohamedThabith(software engineering).pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-sky-500 text-gray-900 font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-sky-600 active:bg-sky-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
                            >
                                📄 Download Resume
                            </a>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
