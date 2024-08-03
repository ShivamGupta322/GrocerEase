import React from 'react'
import './NewsLetter.css'

const NewsLetter=()=>{
    return(
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our news letter and stay ipdated</p>
        <div>
            <input type='email' placeholder='Enter Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
    )
}
export default NewsLetter