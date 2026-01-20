import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Film, Layers, Palette, Sparkles, Monitor } from 'lucide-react';
import { services } from '../mock';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const iconMap = {
  Video: Video,
  Film: Film,
  Layers: Layers,
  Palette: Palette,
  Sparkles: Sparkles,
  Monitor: Monitor
};

const serviceIdMap = {
  'Filmmaking': 'filmmaking',
  'Video Editing': 'video-editing',
  'Motion Graphics': 'motion-graphics',
  'Graphic Design': 'graphic-design',
  'Logo & Branding': 'branding',
  'UI & Digital Design': 'ui-ux'
};

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle) => {
    const serviceId = serviceIdMap[serviceTitle];
    if (serviceId) {
      navigate(`/service/${serviceId}`);
    }
  };

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive creative services tailored for your industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                onClick={() => handleServiceClick(service.title)}
                className="bg-neutral-900 border-neutral-800 hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;