import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Globe } from 'lucide-react';
import { heroImages } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[0]}
          alt="Creative Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
          Visual Stories
          <br />
          <span className="text-primary">That Inspire</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          We craft cinematic experiences and design solutions that elevate brands across the globe
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            View Our Work
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6"
          >
            Start a Project
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Globe size={16} />
          <span>Based in India · Working Worldwide</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
