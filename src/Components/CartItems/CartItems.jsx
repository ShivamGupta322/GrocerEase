import React, { useContext, useState } from 'react';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
    const navigate = useNavigate();
    const [promoCode, setPromoCode] = useState(''); // State to store the promo code
    const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility

    const handlePromoCodeSubmit = () => {
        setShowPopup(true); // Always show the popup on submit
    };

    const closePopup = () => {
        setShowPopup(false); // Close the popup
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main hover:bg-zinc-50">
                                <img src={e.image} alt="" className='carticon-products-icon h-20'/>
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <div className='cartitems-quantity'>
                                    <button className='border-solid border-2 border-black  mr-3 rounded-full active:bg-red-500 hover:bg-zinc-200 active:text-white' onClick={() => removeFromCart(e.id)}>-</button>
                                    <span>{cartItems[e.id]}</span>
                                    <button className='border-solid border-2 border-black  ml-3 rounded-full active:bg-green-500 hover:bg-zinc-200 active:text-white' onClick={() => addToCart(e.id)}>+</button>
                                </div>
                                <p>₹{e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt=""/>
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
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
                    </div>
                
                <button className='bg-[#ff5a5a] h-[160px] rounded-md text-white active:bg-red-600 ' onClick={() => { navigate('/order') }}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="text">
                        <input 
                            className='bg-transparent h-7 mt-4 w-54 p-4 rounded-md border-2' 
                            type="text" 
                            placeholder='Promo code' 
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                    </div>
                    <button className='mt-5 bg-black rounded-md text-zinc-400 px-3 py-2' onClick={handlePromoCodeSubmit}>Submit</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <p>Sorry, Promocode is Expired or Invalid</p>
                        <button className="close-popup" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartItems;
