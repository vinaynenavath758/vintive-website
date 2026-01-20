import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #2c65b0 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Bring Your
            <br />
            <span className="text-primary">Vision to Life?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-8">
            Let's create something extraordinary together. Start your project today.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
