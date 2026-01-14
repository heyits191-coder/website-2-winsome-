
import React from 'react';
import { Linkedin, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, color: '#0077b5', title: 'LinkedIn', href: '#' },
    { icon: <MessageSquare className="w-6 h-6" />, color: '#25d366', title: 'WhatsApp', href: 'https://wa.me/918552949676' },
    { icon: <Facebook className="w-6 h-6" />, color: '#1877f2', title: 'Facebook', href: '#' },
    { icon: <Instagram className="w-6 h-6" />, color: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', title: 'Instagram', href: '#' },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-6">
      {socialLinks.map((link, i) => (
        <motion.a 
          key={link.title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 + (i * 0.1), type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ x: -10, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={link.href}
          target={link.title === 'WhatsApp' ? "_blank" : "_self"}
          rel={link.title === 'WhatsApp' ? "noopener noreferrer" : ""}
          style={{ background: link.color.includes('gradient') ? link.color : link.color }}
          className="w-14 h-14 text-white rounded-2xl flex items-center justify-center shadow-2xl relative group"
          title={link.title}
        >
          {link.icon}
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {link.title}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
