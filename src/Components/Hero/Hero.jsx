import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_image from  '../Assets/hero_image.png'
import newhero from '../Assets/new123-removebg-preview.png'
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-tr from-zinc-100 to-red-300 flex'>
        <div className='animation flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-3' >
            <h2 className='text-[#090909] text-[26px] font-semibold'>New Arrivals</h2>
            <div >
                <div  className=' flex items-center gap-[20px]'>
                   <p className=' text-[#171717] text-[100px] font-bold '>New</p>
                   <img className='w-[105px]'  src={hand_icon} alt="" />  
                </div>
                <p className='text-[#171717] text-[100px] font-bold mt-[5vh]'>Groceries</p>
                <p className='text-[#171717] text-[100px] font-bold mt-[15vh]'>for Everyday</p>
            </div>
            <div className="flex justify-center items-center gap-[15px] cursor-pointer w-[310px] h-[70px] rounded-[75px] border-solid border-2 border-black mr-[30px] mt-[5vh] bg-[#ff4141] text-white text-[22px] font-medium">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        <div className='hero-right'>
            <img className='mt-[20vh]' src={newhero} alt="" />
        </div>

    </div>
  )
}

export default Hero
