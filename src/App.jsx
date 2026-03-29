
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
    defaultChecked />

  <input 
  type="radio" 
  name="my_tabs_1" 
  className="tab w-40 font-bold rounded-full"
   aria-label="Card ()"  />
  
</div>
   {/* AI Model */}
   <Model modelsPromise={modelsPromise}></Model>

   <Cart></Cart>
   {/* Footer  */}
   <Footer></Footer>
     

    </>
  )
}

export default App
