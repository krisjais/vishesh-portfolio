"use client"
import { useEffect, useState } from "react";

export default function ProjectGallery() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (proj) => {
    setSelected(proj);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const projects = [
    {
      title: "Wonderlust Travels",
      tech: "Tailwind ",
      image: "/Screenshot (230).png", 
    },
    {
      title: "Ecommerce Platform",
      tech: "Tailwind • Stripe",
      image: "/Screenshot (231).png",
    },
    {
      title: "Apple Clone",
      tech: "Next.js • 3D",
      image: "/Screenshot (232).png",
    },
    {
      title: "Snadeal clone",
      tech: "Figma • OpenAI",
      image: "/1e34efcc-5eef-4784-8b8a-d808b702b36c.jpg",
    },
    {
      title: "GOOZOOP",
      tech: "FIGMA",
      image: "/dbf3d8ca-26b9-4c1f-a4b9-8af99e0df803.jpg",
    },
    {
      title: "Social Dashboard",
      tech: "Open AI • Tailwind • React",
      image: "/Screenshot (234).png",
    },
    {
      title: "InterntionShip Tracker",
      tech: "Next.js • Tailwind • MongoDB",
       ,
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.5em] mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Project <span className="text-indigo-500 italic font-light">Showcase.</span>
          </h3>
        </div>

        {/* --- SYMMETRICAL COLOR-TRANSITION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div key={index} className="reveal group cursor-pointer" onClick={() => openModal(proj)}>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-lg transition-all duration-500">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>

              <div className="mt-6 px-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-black uppercase tracking-tighter dark:text-white group-hover:text-indigo-500 transition-colors">
                    {proj.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">0{index + 1}</span>
                </div>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  {proj.tech}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn" onClick={closeModal}>
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] max-w-4xl w-full mx-4 overflow-hidden shadow-2xl animate-scaleUp border border-white/10" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
              <div className="relative group/modal">
                <img src={selected.image} alt={selected.title} className="w-full h-[65vh] object-cover" />
                <button 
                  onClick={closeModal} 
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md dark:bg-slate-800/40 dark:hover:bg-slate-800/60 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:rotate-90 duration-300"
                >
                  <span className="text-2xl text-white">✕</span>
                </button>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl font-black tracking-tighter uppercase">{selected.title}</h3>
                    <p className="text-sm font-bold text-indigo-500 uppercase tracking-widest mt-2">{selected.tech}</p>
                  </div>
                  <a href="https://github.com/krisjais/Tailwind-Project" className="px-8 py-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </section>
  );
}