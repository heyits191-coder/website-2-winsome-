
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="text-pink-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Expertise</span>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
          Solutions for every <br /> <span className="text-pink-500">design dimension</span>
        </h2>
        <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
          From architectural planning to turnkey interior execution, we cover the full spectrum of high-end design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -15 }}
            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Section */}
            <div className="h-64 overflow-hidden relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              {/* Floating Action Button */}
              <motion.div 
                className="absolute top-6 right-6 w-14 h-14 bg-white text-pink-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:rotate-12 group-hover:scale-100 shadow-xl"
              >
                <ArrowUpRight className="w-7 h-7" />
              </motion.div>

              <div className="absolute bottom-6 left-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-2">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                {service.description}
              </p>
              <button className="text-slate-900 font-bold text-sm flex items-center space-x-3 group-hover:text-pink-600 transition-colors">
                <span className="uppercase tracking-widest">Learn More</span>
                <div className="w-8 h-[1px] bg-slate-200 group-hover:w-12 group-hover:bg-pink-600 transition-all"></div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex justify-center"
      >
        <button className="bg-slate-50 border border-slate-200 text-slate-900 px-12 py-5 rounded-full font-bold flex items-center space-x-3 hover:bg-slate-900 hover:text-white transition-all">
          <span>Explore All Capabilities</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default Services;
