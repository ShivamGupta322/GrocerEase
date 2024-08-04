import React from 'react'
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div className=' w-[350px] hover:scale-105 item'>
        <Link to={`/product/${props.id}`}>
          <img className='h-[30vh]' src={props.image} alt="" />
        </Link>
        <p className=''>{props.name}</p>
        <div className="flex gap-[20px] item-prices">
            <div className="text-[#374151] text-sm font-semibold item-prices-new">
            ₹{props.new_price} 
            </div>
            <div className="text-[#8c8c8c] text-sm font-semibold hover:scale-105 hover:-translate-y-1 item-prices-old">
            ₹{props.old_price} 
            </div>
        </div>
    </div>
  )
}

export default Item