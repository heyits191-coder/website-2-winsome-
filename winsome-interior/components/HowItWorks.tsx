
import React from 'react';
import { HOW_IT_WORKS } from '../constants';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-24"
      >
        <span className="text-pink-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Process</span>
        <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-10">
          Crafting your vision <br /> <span className="text-pink-400">step by step</span>
        </h2>
        <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          We follow a rigorous methodology to ensure that every creative spark results in a functional and elegant reality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Animated Connecting Line (Desktop) */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '50%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden lg:block absolute top-[148px] left-[25%] h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent z-0 opacity-30"
        ></motion.div>
        
        {HOW_IT_WORKS.map((step, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="relative z-10 group text-center flex flex-col items-center"
          >
            {/* Number Background Glow */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 text-8xl font-black text-pink-500 opacity-10 pointer-events-none select-none"
            >
              0{i+1}
            </motion.div>

            {/* Icon Box with Animation */}
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-32 h-32 rounded-[2rem] border border-slate-800 flex items-center justify-center mb-10 bg-slate-900 group-hover:bg-pink-600 group-hover:border-pink-600 group-hover:shadow-[0_0_50px_rgba(219,39,119,0.4)] transition-all duration-500 transform relative overflow-hidden"
            >
              <div className="relative z-10 scale-125">
                {step.icon}
              </div>
              <motion.div 
                className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              ></motion.div>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-pink-400 transition-colors uppercase tracking-widest">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light px-4">
              {step.description}
            </p>
            
            {/* Indicator Dot */}
            <div className="w-2 h-2 rounded-full bg-slate-800 mt-10 group-hover:bg-pink-500 group-hover:scale-150 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
