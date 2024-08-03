
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCateogary from './Pages/ShopCateogary';
import Product from './Pages/Product';
import Cart from './Pages/Cart';


import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Snacks' element={<ShopCateogary cateogary="Snack"/>}/>
        <Route path='/ColdDrinks' element={<ShopCateogary cateogary="ColdDrinks"/>}/>
        <Route path='/BreakFast' element={<ShopCateogary cateogary="BreakFast"/>}/>
        <Route path='/Vegetables' element={<ShopCateogary cateogary="Vegetables"/>}/>
        <Route path='/HouseHolds' element={<ShopCateogary cateogary="HouseHolds"/>}/>

        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

        
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
