import React from 'react';
import {projects} from "../../Data/Projects.js";


const Project = () => {

    return (
        <main id="project" className="text-sky-500 flex items-center justify-center">
            <div className=" w-full p-8">

                <div className=" rounded-2xl shadow-xl p-10 border border-sky-700 bg-transparent">
                    {/* Hero Section */}
                    <div className="pt-32 pb-12 text-center">
                        <h1 className="text-4xl font-bold text-sky-500 mb-4">My Projects</h1>
                        <p className="text-xl text-gray-100">A collection of my recent work and experiments</p>
                    </div>

                    {/* Projects Grid */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-sky-50/10 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded-3xl flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="relative group rounded-t-3xl overflow-hidden shadow-md w-full h-[250px]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4 pb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                            {/* Optional hover content */}
                                        </div>
                                    </div>

                                    {/* Title + Description + Button in Flex Column */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-200 text-sm mb-4">{project.description}</p>

                                        {/* Push button to bottom */}
                                        <div className="mt-auto flex justify-end">
                                            <button
                                                className="inline-flex items-center px-6 py-2 justify-center text-md font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-200 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
                                                onClick={() => window.open(project.codeLink, '_blank')}
                                            >
                                                Github Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

            </div>
        </main>
    );
};

export default Project;