import React from 'react';




const Project = () => {


    const [isModelOpen, setModelOpen] = React.useState(false);

    const projectModel =()=>{
        setModelOpen(true);
    }



    const projects = [
        {
            id: 1,
            title: 'E-Commerce App',
            description: 'An online shopping platform with secure login, cart, and payment integration.',
            tags: ['React', 'Spring Boot', 'MySQL'],
            image: 'https://via.placeholder.com/400x200',
            demoLink: 'https://ecommerce-app.demo.com',
            codeLink: 'https://github.com/username/ecommerce-app',
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'Personal portfolio showcasing skills, resume, and contact form.',
            tags: ['React', 'Tailwind CSS'],
            image: 'data:image/jpeg;base64,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',
            demoLink: 'https://ecommerce-app.demo.com',
            codeLink: 'https://github.com/username/portfolio',
        },
    ];

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
                                   className="bg-sky-50/10 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded-3xl"
                               >
                                   {/* Image fills the top with the card */}
                                   <div className="relative group rounded-2xl overflow-hidden shadow-md w-full h-[400px]">
                                       {/* Background Image */}


                                       {/* Hover Overlay */}
                                       <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4 pb-6 opacity-0 active:opacity-100 group-hover:opacity-100 active:translate-y-0  group-hover:translate-y-0 translate-y-4 transition-all duration-700 ease-out">
                                           <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h2>
                                           <p className="text-gray-200 text-sm">{project.description}</p>
                                          
                                           <div className="items-center justify-end mt-40">
                                               <a className="lg:button inline-flex items-center px-8 py-2 w-32 justify-center text-lg font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"  onClick={projectModel}>View</a>
                                           </div>
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