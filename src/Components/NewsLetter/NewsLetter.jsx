import React from 'react'
import './NewsLetter.css'

const NewsLetter=()=>{
    return(
    <div className='newsletter'>
        
        <h1 className='mt-20'>Get Exclusive Offers On Your Email</h1>
        <p className='font-semibold mt-10 '>Subscribe to our news letter and stay updated</p>
        <div className='mt-10'>
     
            <input  type='email' placeholder='Enter Your Email'/>
            <button type='submit'>Subscribe</button>
           
        </div>
        
    </div>
    )
}
export default NewsLetter