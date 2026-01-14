
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-pink-500"></div>
            <span className="text-pink-400 font-semibold tracking-widest uppercase text-sm">Award Winning Studio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.1]"
          >
            Designing your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-200">dream spaces</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light"
          >
            We transform ordinary rooms into extraordinary experiences. Elevate your lifestyle with our bespoke architectural and interior solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-10 py-5 rounded-full font-semibold flex items-center justify-center space-x-3 hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/30"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-semibold flex items-center justify-center space-x-3 hover:bg-white/20 transition-all"
            >
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 fill-white text-white" />
              </div>
              <span>Watch Story</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating House Animation (Abstract) */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="hidden xl:block absolute right-20 top-1/2 -translate-y-1/2 z-10 w-96 h-96 opacity-20 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="white">
          <path d="M50 10L10 40V90H90V40L50 10Z" fill="none" stroke="white" strokeWidth="1" />
          <rect x="35" y="60" width="10" height="30" stroke="white" strokeWidth="1" fill="none" />
          <rect x="55" y="50" width="20" height="20" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      {/* Bottom Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-0 right-0 p-12 space-x-16 z-10 bg-black/20 backdrop-blur-xl rounded-tl-[100px] border-t border-l border-white/10"
      >
        <div className="text-white">
          <motion.p 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="text-5xl font-bold text-pink-400"
          >150+</motion.p>
          <p className="text-slate-300 text-xs uppercase tracking-[0.2em] mt-2">Projects</p>
        </div>
        <div className="text-white border-l border-white/10 pl-16">
          <motion.p 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
            className="text-5xl font-bold text-pink-400"
          >06+</motion.p>
          <p className="text-slate-300 text-xs uppercase tracking-[0.2em] mt-2">Years</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
