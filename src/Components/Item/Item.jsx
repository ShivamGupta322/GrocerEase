import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { ShopContext } from '../Context/ShopContext'; // Update the path as per your project structure

function Item(props) {
  const { addToCart } = useContext(ShopContext); // Access the addToCart function from the context
  const [showMessage, setShowMessage] = useState(false); // Local state to handle message visibility

  const handleAddToCart = () => {
    addToCart(props.id); // Call the addToCart function with the product ID
    setShowMessage(true); // Show the message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 2 seconds
    }, 2000);
  };

  return (
    <div className='w-[260px] hover:scale-105 card'>
      <Link to={`/product/${props.id}`}>
        <img className='h-[25vh]' src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="flex gap-[20px] item-prices">
        <div className="text-[#374151] text-sm font-semibold item-prices-new">
          ₹{props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-sm font-semibold item-prices-old">
          <strike>₹{props.old_price}</strike>
          <button className='add-btn active:bg-green-950' onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
      {showMessage && <div className="add-message ">Product Added to your Cart 🎉</div>}
    </div>
  );
}

export default Item;
