import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'


function Breadcrum(props) {
  const {product} = props;
  return (
    <div className=''>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum


//time 1.49 to 2.0