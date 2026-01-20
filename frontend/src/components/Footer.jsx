import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Vintive <span className="text-primary">Studio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A creative agency specializing in visual storytelling and design solutions for brands worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('blog')} className="text-gray-400 hover:text-primary transition-colors">
                  Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Filmmaking</li>
              <li className="text-gray-400">Video Editing</li>
              <li className="text-gray-400">Motion Graphics</li>
              <li className="text-gray-400">Graphic Design</li>
              <li className="text-gray-400">Logo & Branding</li>
              <li className="text-gray-400">UI & Digital Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vintive Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
