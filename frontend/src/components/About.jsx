import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Crafting Visual Excellence
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Vintive Studio is a creative powerhouse specializing in visual storytelling and design solutions.
              Based in India with a global perspective, we work with clients across continents to bring their visions to life.
            </p>
            <p>
              Our multidisciplinary team combines expertise in filmmaking, video editing, motion graphics, and design
              to deliver comprehensive creative solutions. We don't just create content—we craft experiences that
              resonate with audiences and drive results.
            </p>
            <p>
              From real estate and construction to automotive and hospitality, we've partnered with diverse industries
              to tell their stories through compelling visuals and strategic design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
