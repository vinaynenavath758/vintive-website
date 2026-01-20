import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { serviceDetails } from '../mock';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId];

  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-white">Service not found</div>;
  }

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center reveal-on-scroll">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Offer</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 reveal-on-scroll">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-4 reveal-on-scroll">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our {service.title.toLowerCase()} expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;