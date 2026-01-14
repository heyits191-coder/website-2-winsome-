
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Category } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
// Import ArrowRight from lucide-react
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const categories: Category[] = ['All', 'Study Room', 'Toilet', 'Office', 'Miscellaneous', 'Temple'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-pink-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Curated spaces <br /> designed for <span className="text-pink-500">modern living</span>
          </h2>
          <p className="text-xl text-slate-500 font-light">
            Each project is a unique collaboration, blending our signature aesthetic with the functional requirements of our clients.
          </p>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center gap-2 mb-16 no-scrollbar overflow-x-auto pb-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-8 py-4 rounded-full text-sm font-bold transition-all relative ${
              activeFilter === cat 
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30' 
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[2.5rem] overflow-hidden aspect-square cursor-pointer shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <motion.span className="text-pink-400 text-xs font-bold uppercase tracking-[0.3em] block mb-3">{project.category}</motion.span>
                  <h4 className="text-white text-3xl font-bold leading-tight">{project.title}</h4>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-6 flex items-center space-x-3 text-white/70 font-medium"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Corner Label */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  Interior
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-32 text-center"
            >
              <p className="text-slate-400 text-2xl font-light italic">No projects found in this collection yet.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
