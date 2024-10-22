import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
// import star_dull_icon from '../Assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productDisplay flex'>
        <div className="productleft">
            <div className="img-list w-[10vw]">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            </div>
            <div className="productdisplay-img w-[90vw] h-[60vh] mt-[40px]">
                <img className='productdisplay-main-img w-full h-full' src={product.image} alt="" />
            </div>
            <div className="productdisplay-right">
                <h1 className='font-bold '>{product.name}</h1>
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
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error iusto eum ex omnis vero, aliquam voluptatibus, velit ut corporis quibusdam eveniet voluptate, officia commodi sint suscipit placeat tenetur! Ut ad recusandae cumque assumenda eligendi cum reprehenderit, eius voluptatem excepturi aut perspiciatis perferendis cupiditate officiis. Mollitia optio non nostrum exercitationem!
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>Small Amount 100g</div>
                        <div>Medium Amount 250g</div>
                        <div>Large Amount 400g</div>
                        <div>Xtra LargeAmount 500h</div>
                        <div>Too Large Amount 1kg</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Women,T-shirt,Crop</p>
                <p className="productdisplay-right-category"><span>Tag :</span>Morden,</p>
            </div>
      
        </div>
    )
}

export default ProductDisplay