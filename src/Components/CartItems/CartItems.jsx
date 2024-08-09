import React, { useContext } from 'react'
import './CartItems.css'

import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../Context/ShopContext';

import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const{getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);
    const navigate= useNavigate();
  return (
    
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p >Price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return  <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt=""  className='carticon-products-icon'/>
                    <p>{e.name}</p>
                    <p>₹{e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>₹{e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr/>
              </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div >
                    <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount()}</h3>
                    </div>
                <div/>
            
            </div>
            <button onClick={()=>{navigate('/order')}}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="text">
                    <input className='bg-transparent h-7 mt-4 w-54 p-4 rounded-md border-2  ' type="text" placeholder='Promo code' />
                  
                </div>
                <button className='mt-5 bg-black rounded-md text-zinc-400 px-3 py-2'>Submit</button>
            </div>
        </div>
        
    </div>
  )
}

export default CartItems
