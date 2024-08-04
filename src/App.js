
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCateogary from './Pages/ShopCateogary';
import Product from './Pages/Product';
import Cart from './Pages/Cart';


import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.jpg' ;
import women_banner from './Components/Assets/banner_women.png' 
import kid_banner from './Components/Assets/banner_kids.png'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Snacks' element={<ShopCateogary banner={men_banner} category="Snacks"/>}/>
        {/* <Route path='/ColdDrinks' element={<ShopCateogary banner={women_banner} category="ColdDrinks"/>}/> */}
        {/* <Route path='/BreakFast' element={<ShopCateogary banner={kid_banner} cateogary="BreakFast"/>}/> */}
        <Route path='/Vegetables' element={<ShopCateogary banner={women_banner}  category="Vegetables"/>}/>
        <Route path='/HouseHolds' element={<ShopCateogary banner={kid_banner} category="HouseHolds"/>}/>

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
