import React, { useContext } from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import '../Pages/ShopCategory.css'

const ShopCateogary = (props) => {
  const {all_product}=useContext(ShopContext)  
  
  
  return (
    <div className=' mt-[13vh] '>
      <img className=' display-block m-auto w-full h-[40vh] object-fill mb-10'  src={props.banner} alt="" />
      <div className='flex m-[0px 170px] mb-10 px-10 justify-between items-center'>
        <p className=' font-semibold'>
          <span className='font-semibold mb-10'> 12 Showing </span>out of {all_product.length} products
        </p > 
        <div className='px-2 py-3 mr-20 flex p-[10px 20px]  rounded-full border-2 border-solid border-[#888]'>
          sort by <img className='h-[1vh] mt-[1.3vh]' src={dropdown_icon} alt="" />
        </div>

      </div>
    <div className='main-div bg-no-repeat bg-cover'>
    <div className="wave-border">
        <svg
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <path
            d="M0,128 C80,96 160,192 240,192 C320,192 400,96 480,128 C560,160 640,224 720,208 C800,192 880,96 960,96 C1040,96 1120,192 1200,192 L1200,320 L0,320 Z"
            style={{ fill: '#FB9F89' }} // Same wave color here
            transform="scale(1, -1) translate(0, -320)" // Flip vertically
          />
        </svg>
      </div>
      
      <div className=' pl-8 pt-2 shopcategory-products  grid gap-20 grid-cols-4 grid-rows-3  '>
    
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item  key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
          }
          else{
            return null
          }
          
        })}
        
        
      </div>
      <div className='wave-border'>
        <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M0,128 C80,96 160,192 240,192 C320,192 400,96 480,128 C560,160 640,224 720,208 C800,192 880,96 960,96 C1040,96 1120,192 1200,192 L1200,320 L0,320 Z"
          style={{ fill: '#FB9F89' }}
        />
      </svg>
        </div>
      </div>
      <div className="loadmore mb-10  flex justify-center items-center ml-[43%] mt-[8vh] w-[233px] h-[69px] rounded-2xl bg-[#ededed] text-[#787878] text-[18px] font-medium">
        Explore More
      </div>
      
    </div>
  )
}

export default ShopCateogary