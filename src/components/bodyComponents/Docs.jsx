import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { documents } from "../../Data/Documents.js";


export default function Docs() {
    const [selectedDoc, setSelectedDoc] = useState(null);

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 3,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                    spacing: 15,
                },
            },
        },
    });

    return (
        <div id="docs" className="p-8 mb-9 relative">
           <div className="border border-sky-700 p-8 rounded-xl shadow-xl">
               <h1 className="text-3xl font-bold text-center mb-8 text-sky-500">My Documents</h1>

               <div className="relative">
                   {/* Keen Slider wrapper */}
                   <div ref={sliderRef} className="keen-slider ">
                       {documents.map((doc, index) => (
                           <div
                               key={index}
                               onClick={() => doc.src && setSelectedDoc(doc)}
                               className={`keen-slider__slide relative group rounded-xl overflow-hidden shadow-md ${
                                   !doc.src ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                               }`}

                           >
                               <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                   <img
                                       src={doc.cover}
                                       alt={doc.title}
                                       className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                   />
                               </div>
                               <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-center px-3 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                   <h2 className="text-lg font-semibold text-white mb-2 drop-shadow-lg">{doc.title}</h2>
                                   <p className="text-gray-200 text-sm">{doc.description}</p>
                                   {!doc.src && <p className="text-red-400 mt-3 text-sm">No file available</p>}
                               </div>

                           </div>
                       ))}
                   </div>

                   {/* Arrow Controls */}
                   <button
                       onClick={() => slider.current?.prev()}
                       className="absolute top-1/2 -translate-y-1/2 left-0 p-2 bg-sky-900 rounded-full shadow-md hover:bg-sky-950 z-10"
                   >
                       <ChevronLeft size={24} />
                   </button>

                   <button
                       onClick={() => slider.current?.next()}
                       className="absolute top-1/2 -translate-y-1/2 right-0 p-2 bg-sky-900 rounded-full shadow-md hover:bg-sky-950 z-10"
                   >
                       <ChevronRight size={24} />
                   </button>
               </div>

               {/* Dialog */}
                 <Dialog open={!!selectedDoc} onClose={() => setSelectedDoc(null)} className="fixed z-50 inset-0">
                   <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 p-4">
                       {selectedDoc?.src && (
                           <Dialog.Panel className="bg-white rounded-lg max-w-[90vw] w-full h-auto p-4 relative overflow-hidden">
                               <button
                                   className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                                   onClick={() => setSelectedDoc(null)}
                               >
                                   <X />
                               </button>
                               <Dialog.Title className="text-lg sm:text-xl font-bold mb-4 text-center">
                                   {selectedDoc.title}
                               </Dialog.Title>
                               <div className="max-h-[75vh] overflow-auto  rounded flex justify-center items-center">
                                   {selectedDoc.type === "image" ? (
                                       <img
                                           src={selectedDoc.src}
                                           alt={selectedDoc.title}
                                           className="max-h-[70vh] w-auto object-contain border border-stone-500"
                                       />
                                   ) : (
                                       <iframe
                                           src={selectedDoc.src}
                                           title={selectedDoc.title}
                                           className="w-full h-[70vh] border rounded"
                                       />
                                   )}
                               </div>
                           </Dialog.Panel>
                       )}
                   </div>
               </Dialog>

           </div>
        </div>
    );
}
