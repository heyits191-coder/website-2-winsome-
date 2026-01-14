
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden">
      {/* Left Column: Image Layout */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center h-[500px] lg:h-[600px]"
      >
        {/* Main top-left image */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="absolute top-0 left-0 w-[65%] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Living Room Design" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Secondary overlapping image */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="absolute bottom-20 right-0 w-[60%] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl z-20"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Modern Interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Pink Experience Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute bottom-0 left-0 w-[60%] bg-[#db2777] p-10 rounded-[2.5rem] text-white shadow-2xl z-30"
        >
          <div className="relative">
            <h3 className="text-7xl font-bold mb-2">6+</h3>
            <p className="text-xl font-medium leading-tight">
              Years of crafting<br />excellence
            </p>
            {/* Abstract background circles for the box */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-8"
      >
        <div>
          <span className="text-pink-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Story</span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-tight mb-8">
            Turning blueprints into <span className="text-pink-500 relative inline-block">
              masterpieces
              <span className="absolute bottom-2 left-0 w-full h-1 bg-pink-100 -z-10"></span>
            </span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed mb-4">
            Winsome Interior is more than just an interior firm; we are storytellers of space. Every corner we design is a chapter of your vision, meticulously curated with elegance and modern functionality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Innovative Concepts', icon: <CheckCircle2 className="w-5 h-5" /> },
            { title: 'Luxury Finishes', icon: <CheckCircle2 className="w-5 h-5" /> },
            { title: 'Time-Bound Delivery', icon: <CheckCircle2 className="w-5 h-5" /> },
            { title: 'Expert Architects', icon: <CheckCircle2 className="w-5 h-5" /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100/50 group hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="font-bold text-[#1e293b]">{item.title}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ x: 10 }}
          className="pt-4"
        >
          <button className="bg-[#0f172a] text-white px-10 py-5 rounded-full font-bold flex items-center space-x-3 hover:bg-pink-600 transition-all shadow-xl">
            <span>Discover Our Philosophy</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
