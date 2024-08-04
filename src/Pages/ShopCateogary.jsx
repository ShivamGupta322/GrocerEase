import React, { useContext } from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCateogary = (props) => {
  const {all_product}=useContext(ShopContext)  
  
  
  return (
    <div className=''>
      <img className='display-block m-auto w-[82%]' src={props.banner} alt="" />
      <div className='flex m-[0px 170px] justify-between items-center'>
        <p className='font-semibold'>
          <span className='font-semibold'>Showing 1-12</span>out of 36 products
        </p > 
        <div className='flex p-[10px 20px]  rounded-full border-2 border-solid border-[#888]'>
          sort by <img className='h-[1vh] mt-[1.3vh]' src={dropdown_icon} alt="" />
        </div>

      </div>
      <div className='shopcategory-products m-[20px 170px] grid gap-4 grid-cols-4 grid-rows-3'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
          }
          else{
            return null
          }
        })}
      </div>
      <div className="loadmore flex justify-center items-center ml-[43%] mt-[8vh] w-[233px] h-[69px] rounded-2xl bg-[#ededed] text-[#787878] text-[18px] font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCateogary