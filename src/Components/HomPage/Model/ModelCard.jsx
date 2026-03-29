import React, { useState } from 'react';


const ModelCard = ({model}) => {
const [isSubscribed, setSubscribed] = useState(false)

const handleSubscription = () =>{
  setSubscribed(isSubscribed)
}
    return (
        <div>
              <div 
            
            className='group bg-white shadow-sm  rounded-xl border border-zinc-100 overflow-hidden flex flex-col'
          > 
            {/* Top Image Section - Design match for image */}
            <div className='relative flex justify-center items-center h-64 bg-zinc-100 p-8 overflow-hidden'>
              
              {/* Popular Badge (Optional: Only if model is popular) */}
              <div className="absolute top-4 right-4 bg-[#751aff] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                {model.status}
              </div>

              {/* Hover effect: Scale 110% on group hover */}
              <img 
                className='w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110' 
                src={model.image} 
                alt={model.title} 
              />
            </div>

            {/* Content Section */}
            <div className='p-8 space-y-4 flex-grow flex flex-col'>
              <h2 className='font-bold text-2xl text-slate-800'>{model.title}</h2>
              
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                {model.description}
              </p>
              
              <div className='flex items-baseline gap-1 pt-2'>
                <span className='font-bold text-3xl text-slate-900'>${model.price}</span>
                <span className='text-zinc-500 font-medium'>/month</span>
              </div>
              
              {/* Button: Design match as per photo */}
              <button onClick={handleSubscription} className='w-full font-bold py-4 rounded-2xl bg-[#FF3B3B] hover:bg-red-600 text-white transition-colors duration-300 shadow-lg shadow-red-200'>
                {isSubscribed ? "Subscribed" : "Subscribe Now"}
              </button>
            </div>
          </div>
        </div>
    );
};

export default ModelCard;