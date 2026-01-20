import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white cursor-pointer"
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Vintive <span className="text-primary">Studio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-primary transition-colors">
              Insights
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-300 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-gray-300 hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left text-gray-300 hover:text-primary transition-colors">
              Insights
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Start a Project
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
