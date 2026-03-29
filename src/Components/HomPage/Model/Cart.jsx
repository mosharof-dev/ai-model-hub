import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';




const Cart = ({carts ,setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    
   
  };
   const handleDelete = (item) => {
    const filteredArray = carts.filter(c => c.id !== item.id);
    setCarts(filteredArray);
    toast.error("Delete")

  };
    // console.log(carts);
    return (
 <div className='container mx-auto'>
    <h1 className='text-5xl text-center my-5'>Cart</h1>

    {carts.length === 0 ? 
    <div className='flex flex-col items-center justify-center text-center m-16'>
  
  <div className='w-full  p-10 bg-white border border-dashed border-gray-300 rounded-3xl shadow-lg'>
    
    <h2 className='text-3xl font-semibold text-gray-800 mb-2'>
      Your Squad is Empty!
    </h2>
    
    <p className='text-xl text-gray-600 max-w-lg mx-auto'>
      It looks like you haven't picked any players for your dream team yet. Go to the "Available Players" tab to get started.
    </p>

   
  
  </div>
</div> : 
carts.map(item => 

<div key={item.id} className='my-5'>
                   <div  className='flex items-center justify-between gap-4 p-6 rounded-2xl border'>
      <div className='flex items-center gap-4'>
        <img className='w-auto h-26 rounded-2xl' src={item.image} alt={item.title} />

            <div>
                <h1 className='font-bold text-2xl'>{item.title}</h1>
                <p className='font-extrabold '>{item.description}</p>
                <div className='flex items-baseline gap-1 pt-2'>
                <span className='font-bold text-3xl text-slate-900'>${item.price}</span>
                <span className='text-zinc-500 font-medium'>/month</span>
              </div>
            </div>

</div>
        {/* Delete Button */}
        <button 
        onClick={()=> handleDelete(item)}
          className='btn text-3xl  rounded-4xl text-red-500'><MdDeleteForever /></button>
</div>

     
</div>)}
     
 <div className=" flex justify-between my-10 bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>$ {totalPrice}</div>
</div>

<button
        onClick={handlePayment}
            className="btn w-full my-5 bg-red-500 text-white text-2xl  rounded-lg"
          >
            Proceed to Checkout
</button>
    
</div>
    );
};

export default Cart;