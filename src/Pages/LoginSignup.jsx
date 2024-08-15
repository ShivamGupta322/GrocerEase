import React, { useState } from 'react'

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",
  })

  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async ()=>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept: "application/form-data",
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }




  const signup = async ()=>{
    console.log("Sign Up Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept: "application/form-data",
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
    
  }

  return (
    <div className='h-[85vh] mt-[13vh] w-full bg-[#fce3fe] pt-[30px]'>
      <div className='w-[580px] h-[500px] bg-white m-auto px-4 py-6 shadow-lg shadow-zinc-500/50 rounded-2xl mt-[5vh]'>
        <h1 className=' my-10 mx-2 font-semibold '>{state}</h1>
        <div className='  mt-2 gap-10 flex flex-col '  >
         {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} className='h-10 w-full pl-2 border-1 text-[#5c5c5c]  text-md border-2 ' type="text" placeholder='Your Name' />:<></>} 
          <input name='email' value={formData.email} onChange={changeHandler} className='h-10 w-full pl-2 border-1 text-[#5c5c5c]  text-md border-2' type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} className='h-10 w-full  pl-2 border-1 text-[#5c5c5c] text-md border-2' type="password" placeholder='Password' />
                 
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} className='bg-red-500 mt-5 rounded-lg px-3 py-2 text-white w-full'>Continue</button>
        {state==="Sign Up"?<p className='mt-3 text-[#5c5c5c] '> Alreay have an accont? <span onClick={()=>{setState("Login")}} className='text-[#ff4141] cursor-pointer'>Login Here</span></p>:<p className='mt-3 text-[#5c5c5c] '> Create an Account? <span onClick={()=>{setState("Sign Up")}} className='text-[#ff4141] cursor-pointer'>Click Here</span></p>}
        
        
        <div className='flex items-center mt-3 gap-2 text-[#5c5c5c]'>
          <input type="checkbox" name='' />
          <p>By continue ,i agree to the terms of use & privacy policy</p>
          
        </div>
      </div>

    </div>
  )
}

export default LoginSignup