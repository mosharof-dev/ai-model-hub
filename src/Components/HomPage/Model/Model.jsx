
import React, { use, } from 'react';
import ModelCard from './ModelCard';


const Model = ({ modelsPromise, carts, setCarts }) => {
  const models = use(modelsPromise);
  

  return (
    <div className="py-15 container mx-auto px-6">

          {/* Conditional tab Button */}
    

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Choose Your AI Model</h2>
        <p className='mt-4 text-zinc-600 text-lg'>One subscription gives you access to all frontier AI models</p>
      </div>

      {/* Grid: 1 col for mobile, 2 for tablet, 3 for desktop */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {models.map((model, ) => (
        <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Model;