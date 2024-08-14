import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
// import star_dull_icon from '../Assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart,message,showMessage}=useContext(ShopContext);
    


  return (
    <div className='productDisplay flex'>
        <div className="productleft ">
            <div className="img-list w-[10opx] h-[60px] mt-2 Class
Properties
object-contain">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            </div>
            <div className="productdisplay-img w-[80vw] h-[60vh] mt-[40px]">
                <img className='productdisplay-main-img w-full h-full Class
Properties
object-contain' src={product.image} alt="" />
            </div>
            <div className="productdisplay-right">
                <h1 className='font-bold text-black'>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                    ₹{product.old_price}
                    </div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description ">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Quantity</h1>
                    <div className="productdisplay-right-sizes">
                        <div>Small Amount 100g</div>
                        <div>Medium Amount 250g</div>
                        <div>Large Amount 400g</div>
                        <div>EXtra Large Amount 500g</div>
                        <div>Too Large Amount 1kg</div>
                    </div>
                </div>
                <div className='flex gap-[20px]'>
                <button className='active:bg-green-600' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                {showMessage && (<p className={`fade-message ${showMessage ? 'visible' : ''} text-green-600 mt-4`}>{message}</p>)}
                </div>
                <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
                <p className="productdisplay-right-category"><span>Tag :</span>Fresh</p>
            </div>
      
        </div>
    )
}

export default ProductDisplay