import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers w-[65%] h-[60vh] flex m-auto p-[0px 140px] mb-[150px] bg-gradient-to-tr from-zinc-100 to-red-300'>
        <div className="offers-left flex-1 flex-col justify-center">
            <h1 className='text-[#171717] text-[80px] font-semibold'>Exclusive</h1>
            <h1 className='text-[#171717] text-[80px] font-semibold'>Offers For You</h1>
            <p className='text-[#171717] text-[22px] font-bold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[282px] h-[70px] rounded-lg bg-[#ff4141] text-white text-[22px] font-semibold mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className="offers-right flex items-center justify-end pt-[50px]">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers