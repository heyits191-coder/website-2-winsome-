
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${scrolled ? 'border-pink-600' : 'border-white'}`}>
             <span className={`text-xl font-bold ${scrolled ? 'text-pink-600' : 'text-white'}`}>WI</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-wider leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>WINSOME</span>
            <span className={`text-xs tracking-[0.2em] ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>INTERIOR</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-pink-500 transition-colors ${
                scrolled ? 'text-slate-600' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium flex items-center space-x-2 hover:bg-pink-700 transition-all transform hover:-translate-y-1">
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white bg-pink-600 p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 text-lg font-medium hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-pink-600 text-white px-6 py-4 rounded-md font-medium w-full text-center">
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
