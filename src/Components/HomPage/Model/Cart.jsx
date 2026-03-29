import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
   toast.success('Payement successful!')
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.error("Item Deleted");
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-5xl text-center my-10 font-bold'>Cart</h1>

      {carts.length === 0 ? (
        <div className='flex flex-col items-center justify-center text-center m-16'>
          <div className='w-full p-10 bg-white border border-dashed border-gray-300 rounded-3xl shadow-lg'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-2'>
              Your Squad is Empty!
            </h2>
            <p className='text-xl text-gray-600 max-w-lg mx-auto'>
              It looks like you haven't picked any players for your dream team yet. 
              Go to the "Available Players" tab to get started.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Main List Section */}
          <div className="space-y-5">
            {/* EKHANE { } DIYE MAP WRAP KORA HOYECHE */}
            {carts.map((item) => (
              <div key={item.id} className='flex items-center justify-between gap-4 p-6 rounded-2xl border bg-white shadow-sm'>
                <div className='flex items-center gap-4'>
                  <img className='w-24 h-24 object-cover rounded-2xl' src={item.image} alt={item.title} />

                  <div>
                    <h1 className='font-bold text-2xl'>{item.title}</h1>
                    <p className='text-gray-500'>{item.description}</p>
                    <div className='flex items-baseline gap-1 pt-2'>
                      <span className='font-bold text-3xl text-slate-900'>${item.price}</span>
                      <span className='text-zinc-500 font-medium'>/month</span>
                    </div>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(item)}
                  className='btn text-3xl p-3 hover:bg-red-50 rounded-full text-red-500 transition-colors'
                >
                  <MdDeleteForever />
                </button>
              </div>
            ))}
          </div>

          {/* Price Summary Section */}
          <div className="flex justify-between my-10 bg-black text-white p-6 rounded-lg text-3xl font-bold">
            <div>Total Price</div>
            <div>$ {totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mb-10 py-4 bg-red-500 hover:bg-red-600 text-white text-2xl font-bold rounded-lg transition-all"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;