import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import  { ShopContext } from '../Context/ShopContext';
import '../NavBar/Navbar.css'


function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='fixed w-full top-0 left-0 flex justify-around	p-[16px] shadow-[0_1px_3px_-2px_black] bg-white'>
        <Link to='/'>
        <div className='flex items-center gap-[10px]'>
            <img src={logo} alt="" />
            <p className='text-[#171717] text-2xl font-semibold'>GrocerEase</p>
        </div>
        </Link>
        <ul  className='flex items-center list-none gap-[50px] text-[#626262]  font-medium text-sm'>
            <li onClick={()=>{setMenu("Shop")}} className='flex flex-col items-center cursor-pointer justify-center gap-[3px] '><Link to='/'>Shop</Link> {menu==="Shop"?<hr className='  w-[80%] h-[3px] rounded-md  bg-red-600'/>:<></>}</li>
            <li onClick={()=>{setMenu("Snacks")}} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'><Link to='/Snacks'>Snacks & ColdDrinks</Link>  {menu==="Snacks"?<hr className='  w-[80%] h-[3px] rounded-md  bg-red-600'/>:<></>}</li>
            {/* <li onClick={()=>{setMenu("Cold Drinks")}} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'> <Link to='/Cold Drinks'>Cold Drinks</Link> {menu==="Cold Drinks"?<hr className='  w-[80%] h-[3px] rounded-md  bg-red-600'/>:<></>}</li> */}
            {/* <li onClick={()=>{setMenu("BreakFast")}} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'><Link to='/BreakFast'>BreakFast</Link> {menu==="BreakFast"?<hr className='  w-[80%] h-[3px] rounded-md  bg-red-600'/>:<></>}</li> */}
            <li onClick={()=>{setMenu("Vegetables")}} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'><Link to='/Vegetables'>Vegetables and Fruits </Link> {menu==="Vegetables"?<hr className='  w-[80%] h-[3px] rounded-md  bg-red-600'/>:<></>}</li> 
            <li onClick={()=>{setMenu("HouseHolds")}} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'><Link to='/HouseHolds'>HouseHolds</Link> {menu==="HouseHolds"?<hr className='  w-[80%] h-[3px] rounded-md  bg-red-600'/>:<></>}</li>
        </ul>
        <div className='flex items-center gap-[45px]'>
          {localStorage.getItem('auth-token')?<button id='button' className='' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'> <button id='button' className=''>Login</button></Link> }
          
            <Link to='/cart'><img  src={cart_icon} alt="" /></Link>
            <div className='hover:animate-ping w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] text-sm rounded-xl bg-red-500 text-white'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar