import React from 'react';
import { stats } from '../mock';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-primary transition-colors duration-300">
            <div className="text-5xl font-bold text-primary mb-2">
              {stats[0].number}
            </div>
            <div className="text-white text-xl font-semibold mb-2">
              {stats[0].label}
            </div>
            <p className="text-gray-400 text-sm">
              Successfully delivered across multiple industries
            </p>
          </div>

          <div className="bg-primary rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-white mb-2">
              {stats[1].number}
            </div>
            <div className="text-white text-xl font-semibold mb-4">
              {stats[1].label}
            </div>
            <p className="text-white/90 text-sm mb-6">
              Expert team of creative professionals
            </p>
            <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
              Know More
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-primary transition-colors duration-300">
            <div className="text-5xl font-bold text-primary mb-2">
              {stats[2].number}
            </div>
            <div className="text-white text-xl font-semibold mb-2">
              Industries Served
            </div>
            <p className="text-gray-400 text-sm">
              From real estate to automotive, restaurants to corporate
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-primary mb-2">
              {stats[3].number}
            </div>
            <div className="text-black text-xl font-semibold mb-2">
              {stats[3].label}
            </div>
            <p className="text-gray-600 text-sm">
              Trusted by businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;