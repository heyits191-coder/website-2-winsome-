
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white">
                <span className="text-xl font-bold text-white">WI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wider leading-none">WINSOME</span>
                <span className="text-xs tracking-[0.2em] text-slate-400">INTERIOR</span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
              Serving clients in Pune and Mumbai, we specialize in creating personalized, functional, and stylish interiors that reflect your unique vision.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Information
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-600 rounded-full -mb-2"></span>
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">About Our Company</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">View Our Services</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Our Latest Projects</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Customer Privacy</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Portfolio
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-600 rounded-full -mb-2"></span>
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Residential Interior Design</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Turnkey Execution</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Retail Interior Design</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Hotel Interior Design</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Office Interior Design</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-600 rounded-full -mb-2"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-pink-500 mt-1" />
                <div className="text-slate-400">
                  <p>+91-8552949676</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-slate-400">info@winsomeinterior.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                <div className="text-slate-400">
                  <p className="font-bold text-white mb-1 uppercase tracking-tighter">Pune | Mumbai</p>
                  <p>Corporate Hub, Serving Maharashtra's Finest Spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Banner */}
        <div className="bg-pink-600 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">Get Exclusive Designs Straight into your Inbox!</h3>
            <p className="text-pink-100">Your Dream Space Starts Here. Subscribe for the latest design inspiration.</p>
          </div>
          <div className="w-full max-w-md">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white text-slate-900 px-6 py-5 rounded-lg focus:outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-pink-700 text-white px-6 rounded-md hover:bg-slate-900 transition-colors flex items-center space-x-2">
                <span className="hidden sm:inline">Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Winsome Interior. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
