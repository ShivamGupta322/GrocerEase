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
    <div className=' flex flex-col items-center gap-[10px] h-[90vh] ml-[8vw] overflow-hidden'>
        <h1 className='text-[#171717] text-[50px] font-semibold'>Popular in Snacks</h1>
        <hr className='w-[200px] h-[6px] rounded-sm bg-[#252525]'/>
        <div className="mt-[50px] flex gap-[5px]">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular