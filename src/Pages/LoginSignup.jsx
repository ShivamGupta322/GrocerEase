import React from 'react'

const LoginSignup = () => {
  return (
    <div className='h-[85vh] w-full bg-[#fce3fe] pt-[30px]'>
      <div className='w-[580px] h-[500px] bg-white m-auto px-4 py-6'>
        <h1 className=' my-10 mx-2 font-semibold '>Signup</h1>
        <div className='  mt-2 gap-10 flex flex-col '  >
          <input className='h-8 w-full pl-2 border-1 text-[#5c5c5c]  text-md border-2 ' type="text" placeholder='Your Name' />
          <input className='h-8 w-full pl-2 border-1 text-[#5c5c5c]  text-md border-2' type="email" placeholder='Email Adress' />
          <input className='h-8 w-full  pl-2 border-1 text-[#5c5c5c] text-md border-2' type="password" placeholder='Password' />
                 
        </div>
        <button className='bg-red-500 mt-5 rounded-lg px-3 py-2 text-white w-full'>Continue</button>
        <p className='mt-3 text-[#5c5c5c] '> Alreay have an accont? <span className='text-[#ff4141]'>Login</span></p>
        <div className='flex items-center mt-3 gap-2 text-[#5c5c5c]'>
          <input type="checkbox" name='' />
          <p>By continue ,i agree to the terms of use & privacy policy</p>
          
        </div>
      </div>

    </div>
  )
}

export default LoginSignup