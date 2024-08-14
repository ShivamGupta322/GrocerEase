import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import newhero from '../Assets/new123-removebg-preview.png';
import '../Hero/Hero.css';

const Hero = () => {
  const scrollToNewCollections = () => {
    const element = document.getElementById('latest-collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='h-[100vh] bg-gradient-to-tr from-zinc-100 to-red-300 flex'>
      <div className='animation flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-3'>
        <div>
          <div className='flex items-center gap-[20px]'>
            <p className='text-[#171717] text-[100px] font-bold'>New</p>
            <img className='hand w-[105px]' src={hand_icon} alt="" />
          </div>
          <p className='text-[#171717] text-[100px] font-bold mt-[5vh]'>Groceries</p>
          <p className='text-[#171717] text-[100px] font-bold mt-[15vh]'>for Everyday</p>
        </div>
        <div
          className="flex justify-center items-center gap-[15px] cursor-pointer w-[310px] h-[70px] rounded-[75px] border-solid border-2 border-black mr-[30px] mt-[5vh] bg-[#ff4141] text-white text-[22px] font-medium active:bg-red-600"
          onClick={scrollToNewCollections}
        >
          <button >Newly Added</button>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='hero-right'>
        <img className='mt-[20vh]' src={newhero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
