import React, { useEffect, useState } from 'react'
// import data_product from '../Assets/data'
import Item from '../Item/Item'

function Popular() {

  const [popularProducts, setPopularProducts] = useState([])

useEffect(()=>{
  fetch('http://localhost:4000/popularinsnacks')
  .then((response)=>response.json())
  .then((data)=>setPopularProducts(data))
},[])

  return (
    <>
    <div className='bg-zinc-200 mb-[1px]'>
    <div className="wave-border">
        <svg
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <path
            d="M0,128 C80,96 160,192 240,192 C320,192 400,96 480,128 C560,160 640,224 720,208 C800,192 880,96 960,96 C1040,96 1120,192 1200,192 L1200,320 L0,320 Z"
            style={{ fill: '#FB9F89' }} // Same wave color here
            transform="scale(1, -1) translate(0, -320)" // Flip vertically
          />
        </svg>
      </div>
     
    <div className=' flex flex-col items-center gap-[10px] h-[50vh] overflow-hidden '>
        <h1 className='text-[#171717] text-[50px] font-semibold'>Popular in Snacks</h1>
        <hr className='w-[200px] h-[6px] rounded-sm bg-[#252525]'/>
        <div className=" flex gap-[4vw] ml-[10vw] mt-[4vh]">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
    <div className='wave-border'>
        <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M0,128 C80,96 160,192 240,192 C320,192 400,96 480,128 C560,160 640,224 720,208 C800,192 880,96 960,96 C1040,96 1120,192 1200,192 L1200,320 L0,320 Z"
          style={{ fill: '#FB9F89' }}
        />
      </svg>
        </div>

        </div>
    
    </>
  )
}

export default Popular