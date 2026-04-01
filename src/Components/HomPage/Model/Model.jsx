import React, { use } from 'react';
import ModelCard from './ModelCard';

const Model = ({ modelsPromise, carts, setCarts }) => {
  const models = use(modelsPromise);

  return (
    <section className="py-24 relative overflow-hidden bg-[#02040a]">
      {/* Background Grid (Banner match) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
           backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header: Dark Theme Colors */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Choose Your <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">AI Model</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            One subscription gives you access to all frontier AI models
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.map((model) => (
            <ModelCard 
              key={model.id} 
              model={model} 
              carts={carts} 
              setCarts={setCarts} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Model;