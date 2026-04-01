
import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Banner from './Components/HomPage/Banner/Banner'
import Cart from './Components/HomPage/Model/Cart'
import Model from './Components/HomPage/Model/Model'
import NavBar from './Components/NavBar/NavBar'

const getModels = async () => {
 const res = await fetch('/models.json')
 return res.json()
}

const modelsPromise = getModels()
function App() {

    const [activeTab, setActiveTab] = useState("AI Model");
    const [carts, setCarts] = useState([])
  // console.log(carts);
  // console.log(activeTab);
 
  return (
    <>
    {/* NavBar Section */}
   <NavBar></NavBar>
   {/* Banner Section */}
   <Banner></Banner>
   {/* Button Tabs */}
  
<div className="flex justify-center py-8 bg-[#041026]">

  <div className="inline-flex p-1 bg-[#0d1117]/80 backdrop-blur-md border border-gray-800 rounded-full shadow-2xl">
    
    {/* Tab 1: AI Model */}
    <button
      onClick={() => setActiveTab("AI Model")}
      className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ${
        activeTab === "AI Model"
          ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]"
          : "text-gray-500 hover:text-gray-300"
      }`}
    >
      AI Model
    </button>

    {/* Tab 2: Cart */}
    <button
      onClick={() => setActiveTab("Cart")}
      className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-500 flex items-center gap-2 ${
        activeTab === "Cart"
          ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]"
          : "text-gray-500 hover:text-gray-300"
      }`}
    >
      Cart 
      <span className={`px-2 py-0.5 rounded-full text-[10px] shadow-inner ${
        activeTab === "Cart" ? "bg-white/20 text-white" : "bg-gray-800 text-gray-500"
      }`}>
        {carts.length}
      </span>
    </button>
  </div>
</div>
   {/* AI Model */}
  
   {activeTab === "AI Model" ?  
   <Model modelsPromise={modelsPromise} carts={carts} setCarts={setCarts}></Model> 
   
   : 
   
   <Cart carts={carts} setCarts={setCarts}></Cart> }
   
   {/* Footer  */}
   <Footer></Footer>
     

    </>
  )
}

export default App
