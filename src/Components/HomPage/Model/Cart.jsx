import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success('Payment successful! Access granted.');
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.error("Model removed from cart");
  };

  return (
  <div className='bg-[#040e24]'>
      <div className='container mx-auto px-6 py-12  '>
      <h1 className='text-4xl md:text-5xl text-center mb-12 font-black text-white tracking-tight'>
        Your <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Selections</span>
      </h1>

      {carts.length === 0 ? (
        /* --- Empty State Design --- */
        <div className='flex flex-col items-center justify-center text-center py-20 px-6 border border-dotted border-gray-800 rounded-xl bg-[#0b1733] backdrop-blur-md'>
          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mb-6 border border-gray-800">
             <span className="text-5xl text-gray-700">🛒</span>
          </div>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
            Your Hub is Quiet...
          </h2>
          <p className=' max-w-md mx-auto leading-relaxed text-white '>
            You haven't selected any AI models yet. Head back to the AI Models tab to empower your workspace!
          </p>
        </div>
      ) : (
        <>
          {/* --- Cart Items List --- */}
          <div className="space-y-4">
            {carts.map((item) => (
              <div key={item.id} className='group flex items-center justify-between gap-4 p-5 rounded-3xl border border-gray-800 bg-[#0d1117]/40 backdrop-blur-sm transition-all hover:border-gray-700'>
                <div className='flex items-center gap-5'>
                  <div className="w-20 h-20 bg-[#161b22] rounded-2xl flex items-center justify-center border border-gray-800 overflow-hidden">
                    <img className='w-12 h-12 object-contain group-hover:scale-110 transition-transform' src={item.image} alt={item.title} />
                  </div>

                  <div>
                    <h3 className='font-bold text-xl text-white'>{item.title}</h3>
                    <div className='flex items-baseline gap-1'>
                      <span className='font-bold text-lg text-purple-400'>${item.price}</span>
                      <span className='text-gray-500 text-xs font-medium'>/month</span>
                    </div>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(item)}
                  className='p-3 hover:bg-red-500/10 rounded-2xl text-gray-500 hover:text-red-500 transition-all active:scale-90'
                >
                  <MdDeleteForever size={28} />
                </button>
              </div>
            ))}
          </div>

          {/* --- Summary Section --- */}
          <div className="mt-10 p-8 rounded-xl] bg-linear-to-br from-[#0d1117] to-[#05070a] border border-gray-800 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-gray-400 font-medium">Total Subscription Cost</span>
              <span className="text-4xl font-black text-white">$ {totalPrice}</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-4 bg-white hover:bg-purple-600 text-black hover:text-white text-lg font-black rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.05)] active:scale-[0.98]"
            >
              Confirm & Checkout
            </button>
          </div>
        </>
      )}
    </div>
  </div>
  );
};

export default Cart;