
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
   <div className="tabs tabs-box  mt-8 justify-center bg-transparent">
  <input 
  type="radio"
   name="my_tabs_1" className="tab w-40 font-bold rounded-full"
  aria-label="AI Model"
    defaultChecked
    onClick={() => setActiveTab("AI Model")} />

  <input 
  type="radio" 
  name="my_tabs_1" 
  className="tab w-40 font-bold rounded-full"
   aria-label={`Cart (${carts.length})`}
   onClick={() => setActiveTab("Cart")} />
  
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
