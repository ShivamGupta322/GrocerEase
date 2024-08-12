
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import SearchResults from './Components/SearchResults/SearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCateogary from './Pages/ShopCateogary';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ScrollToTop from './Pages/ScrollToTop';


import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.jpg' ;
import women_banner from './Components/Assets/banner_women.png' 
import kid_banner from './Components/Assets/banner_kids.png'
import Footer from './Components/Footer/Footer';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
      
                <Route path="/search" element={<SearchResults />} />
        <Route path='/' element={<Shop/>}/>
        <Route path='/Snacks' element={<ShopCateogary banner={men_banner} category="Snacks"/>}/>
        {/* <Route path='/ColdDrinks' element={<ShopCateogary banner={women_banner} category="ColdDrinks"/>}/> */}
        {/* <Route path='/BreakFast' element={<ShopCateogary banner={kid_banner} cateogary="BreakFast"/>}/> */}
        <Route path='/Vegetables' element={<ShopCateogary banner={women_banner}  category="Vegetables"/>}/>
        <Route path='/HouseHolds' element={<ShopCateogary banner={kid_banner} category="HouseHolds"/>}/>

        <Route path='/product/:productId' element={<Product/>}/>
        {/* <Route path=':productId' element={<Product/>}/> */}
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/order' element={<PlaceOrder />}/>

        
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
