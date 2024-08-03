import React from 'react'

function Item(props) {
  return (
    <div className=' w-[350px]'>
        <img src={props.image} alt="" />
        <p className=''>{props.name}</p>
        <div className="flex gap-[20px]">
            <div className="text-[#374151] text-sm font-semibold ">
               {props.new_price} 
            </div>
            <div className="item-price-old">
                {props.old_price} 
            </div>
        </div>
    </div>
  )
}

export default Item