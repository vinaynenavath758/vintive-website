import React from 'react';
import { clients } from '../mock';

const Clients = () => {
  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8"
              >
                <div className="w-20 h-20 bg-neutral-800 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xl opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
