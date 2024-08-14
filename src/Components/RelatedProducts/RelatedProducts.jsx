import React from 'react'
import data_product from '../Assets/data'
const RelatedProducts = () => {
  return (
    <div className='flex flex-column items-center gap-2 h-[90vh]'>
      <h1 className='text-[#171717]'>RelatedProducts</h1>
      <hr className='w-[200px] h-1 border-1 bg-[#252525]' />
      <div className='mt-5 gap-3 flex'>
     {data_product.map((item,i)=>{
        return <item  key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
     })}
      </div>
    </div>
  )
}

export default RelatedProducts;
