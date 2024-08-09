import React, { useContext } from 'react'
import './PlaceOrder.css'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
    const {getTotalCartAmount}=useContext(ShopContext)
  return (
    <form className='place-order mt-[16vh]'>
       <div className="place-order-left">
        <p className='title'>
            Delivery Information
        </p>
        <div className="multi-fields">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>

        <div className="multi-fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Zip Code'/>
            <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
        </div> 

        <div className="place-order-right">
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
            <button >PROCEED TO Payment</button>
            </div>
        </div>
    </form>
  )
}

export default PlaceOrder