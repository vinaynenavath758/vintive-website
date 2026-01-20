import React, { useState } from 'react';
import { testimonials } from '../mock';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleTestimonials();

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg">
            What our partners say about working with us
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center justify-center gap-6 px-4 overflow-hidden">
            {visibleIndices.map((index, position) => {
              const testimonial = testimonials[index];
              const isCenter = position === 1;
              
              return (
                <Card
                  key={`${index}-${position}`}
                  className={`bg-neutral-900 border-neutral-800 flex-shrink-0 ${
                    isCenter
                      ? 'w-full md:w-[500px] opacity-100 scale-100 z-20'
                      : 'w-full md:w-[400px] opacity-40 scale-90 hidden md:block'
                  } transition-all duration-700 ease-in-out`}
                >
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-primary fill-primary" size={20} />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 text-center italic">
                      "{testimonial.content}"
                    </p>
                    <div className="text-center">
                      <p className="text-white font-bold text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-primary">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-neutral-700 hover:border-primary hover:bg-neutral-800 z-30"
            >
              <ChevronLeft className="text-white" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-neutral-700'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-neutral-700 hover:border-primary hover:bg-neutral-800 z-30"
            >
              <ChevronRight className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
