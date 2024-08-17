import React from 'react'
import exclusive_image from '../Assets/exclusive_image2.jpeg'
import './Offers.css'

const Offers = () => {
  return (
    <>
    <div className='background-exclusive'>
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

      <div className='box'>

    <div className='in offers w-[65%] h-[60vh] flex m-auto p-[0px 140px]  bg-gradient-to-tr from-zinc-100 to-blue-700'>
        <div className="offers-left flex-1 flex-col justify-center">
            <h1 className='text-[#171717] text-[80px] font-semibold'>Exclusive</h1>
            <h1 className='text-[#171717] text-[80px] font-semibold'>Offers For You</h1>
            <p className='text-[#171717] text-[22px] font-bold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[282px] h-[70px] rounded-lg bg-[#4161ff] text-white text-[22px] font-semibold mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className="offers-right flex items-center justify-end pt-[50px]">
            <img className='h-[58vh] mb-[6.5vh]' src={exclusive_image} alt="" />
        </div>
    </div>
    </div>
   </div>
    </>
  )
}

export default Offers