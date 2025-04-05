import './App.css'
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Collection from "./Pages/Collection"
import Shop from "./Pages/Shop"
import ProductCard from './Components/ProductCard'
// import ProductPage from './Components/ProductPage'
 import ProductDetail from './Components/ProductDetail'
// import Men from './ShopComponent/Men'
// import Women from './ShopComponent/Women'
// import Jwellery from './ShopComponent/Jwellery'
import Cart from './Pages/Cart'
import { useState } from 'react';
import Favourite from './Pages/Favourite'
function App() {
  const [cartItems, setCartItems] = useState([]); 
 const addToCart = (product) => {

  setCartItems([...cartItems, product]);
}; 
 return (
    <>
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Header/>}>
<Route index  element={<Home/>}/>
<Route path='shop' element={<Shop/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='collection' element={<Collection/>} />
<Route path='/products' element={<ProductCard/>}/>
<Route path='/product/:id' element={<ProductDetail addToCart={addToCart}/>}/>
<Route path='cart' element={<Cart cartItems={cartItems}/>} /> 
<Route path='favourite' element={< Favourite/>} /> 



{/* <Route path='men' element={<Men/>}/>  <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='jewellery' element={<Jewellery />} />
<Route path='women' element={<Women/>}/>
<Route path='jwellery' element={<Jwellery/>}/> */}
{/* <Route path='/product/:id' element={<ProductPage/>}/> */}
<Route/>

  </Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
