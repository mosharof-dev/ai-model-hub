import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
  const isSubscribed = carts.some(item => item.id === model.id);

  const handleSubscription = () => {
    if (isSubscribed) {
      toast.error("Already in cart!");
      return;
    }
    setCarts([...carts, model]);
    toast.success(`${model.title} Added to cart!`);
  };

  // Badge Color Mapping based on Status
const getStatusStyles = (status) => {
  switch (status?.toLowerCase()) {
    case 'popular':
      return 'bg-purple-500/10 border-purple-500/30 text-purple-400';

    case 'new':
      return 'bg-rose-500/10 border-rose-500/30 text-rose-400';

    case 'featured':
      return 'bg-blue-500/10 border-blue-500/30 text-blue-400';

    case 'free':
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';

    case 'premium':
      return 'bg-amber-500/10 border-amber-500/30 text-amber-400';

    case 'trending':
      return 'bg-pink-500/10 border-pink-500/30 text-pink-400';

    case 'sale':
      return 'bg-red-500/10 border-red-500/30 text-red-400';

    case 'beta':
      return 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400';

    case 'favourite':
      return 'bg-orange-500/10 border-orange-500/30 text-orange-400';

    case 'mostwanted':
      return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400';

    default:
      return 'bg-gray-500/10 border-gray-500/30 text-gray-400';
  }
};

  return (
    <div className="group relative h-full">
      {/* Main Card: Deep Blue-ish Navy Background */}
      <div className={`relative h-full flex flex-col bg-[#061c40]/80 backdrop-blur-xl border border-gray-800/50 rounded-xl p-7 transition-all duration-500 
        hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2 overflow-hidden
        ${isSubscribed ? 'ring-2 ring-purple-600/40' : ''}`}>
        
        {/* Top Section: Icon & Dynamic Status Badge */}
        <div className="flex justify-between items-start mb-8">
          <div className="w-16 h-16 bg-[#0d1117] border border-gray-800 rounded-2xl flex justify-center items-center shadow-xl group-hover:scale-110 transition-transform duration-500">
            <img 
              src={model.image} 
              alt={model.title} 
              className="w-9 h-9 object-contain"
            />
          </div>
          
          {model.status && (
            <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em] border ${getStatusStyles(model.status)}`}>
              {model.status}
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className=" space-y-4">
          <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
            {model.title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
            {model.description}
          </p>
        </div>

        {/* Bottom Section: Price & Action */}
        <div className="mt-10 pt-6 border-t border-gray-800/40 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className={`text-3xl font-black ${model.price === 0 ? 'text-emerald-400 ': 'text-white'}`}>
              ${model.price}
            </span>
            <span className="text-gray-500 text-xs font-medium ml-1">/month</span>
          </div>

          <button 
            onClick={handleSubscription}
            className={`relative z-10 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform active:scale-95
              ${isSubscribed 
                ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700' 
                : 'bg-white text-black hover:bg-purple-600 hover:text-white shadow-[0_10px_20px_rgba(255,255,255,0.05)]'}`}
          >
            {isSubscribed ? "In Cart" : "Subscribe"}
          </button>
        </div>

        {/* Subtle Hover Glow */}
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-600/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

export default ModelCard;

// git add .
// git commit -m "feat: complete ui redesign with dark cyberpunk theme and bug fixes"