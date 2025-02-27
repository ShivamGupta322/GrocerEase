import React, { createContext, useEffect, useState } from 'react'

// import all_product from '../Assets/all_product'
export const ShopContext=createContext(null);



const getDefaultCart =()=>{
  let cart={};
  for (let index=0; index < 300+1; index++){
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [all_product,setAll_Product] = useState([]);
  const[cartItems,setCartItems] = useState(getDefaultCart());
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data))


    //to fetch the the cart item added by the user and he is login again 
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',

        },
        body:"",
      }).then((response)=>response.json())
      .then((data)=>setCartItems(data)); 
    }
  },[])

  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data))
    }
    setMessage('Product Added to your Cart 🎉');
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }


  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data))

    }
  }


  // const getTotalCartAmount=()=>{
  //   let totalAmount = 0;
  //   for(const item in cartItems)
  //     {
  //     if(cartItems[item]>0)
  //       {
  //       let itemInfo = all_product.find((product)=>product.id===Number(item))
  //       totalAmount += itemInfo.new_price * cartItems[item];
  //       // console.log(itemInfo)
  //       // console.log(cartItems)
  //       // console.log(all_product)
  //     } 
    
    
  //   }
  //   return totalAmount;
  // }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(product => product.id === Number(item));
        
        console.log("Item Info:", itemInfo); // Log itemInfo to check its properties
  
        if (itemInfo && itemInfo.new_price !== undefined) {
          totalAmount += itemInfo.new_price * cartItems[item];
        } else {
          console.warn(`'new_price' is missing for product with id ${item}`);
        }
      }
    }
    return totalAmount;
  };



  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item];
      }
    }
    return totalItem;
    }
  const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,message,showMessage};
  return (
    <ShopContext.Provider value={contextValue}>
     {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;

