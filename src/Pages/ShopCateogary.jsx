import React, { useContext } from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCateogary = (props) => {
  const {all_product}=useContext(ShopContext)  
  return (
    <div className=''>
      <img className='display-block m-auto w-[82%]' src={props.banner} alt="" />
      <div>
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div>
          sort by <img src={dropdown_icon} alt="" />
        </div>

      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return <h1>hello</h1>;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCateogary