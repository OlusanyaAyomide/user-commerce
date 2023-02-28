import React, { useState } from 'react'
import Image from 'next/image'

export default function Product({name,price,image,discount}) {
  const num = Math.round(Math.random()*10)
  const [randum,setrandum] = useState(num)
  console.log(randum)
  const style = {objectFit:"contain",height:"100%",width:"100%",background:"var(--product-overlay)"
  ,borderRadius:"10px",paddingTop:"8px",paddingBottom:"8px"}
  const style2 = {objectFit:"contain",height:"100%",width:"100%",background:"var(--sundrytwo)"
  ,borderRadius:"10px",paddingTop:"8px",paddingBottom:"8px"}
  const style3 = {objectFit:"contain",height:"100%",width:"100%",background:"var(--sundry)"
  ,borderRadius:"10px",paddingTop:"8px",paddingBottom:"8px"}
  return (
    <div className='w-6/12 px-2 md:w-4/12 lg:w-3/12 mb-12 flex flex-col justify-between'>
        <div className='w-full  rounded-md h-[200px] px-4 py-2 productshadow'>
          <Image src={image} alt="" priority style={randum===8?style2:randum>8?style3:style}/>
        </div>
        <div className='mt-2 mb-2 px-4'>
          <h1 className='text-thick-text text-lg font-semibold leading-4'>{name}</h1>
          <div className="flex text-dominant justify-between mt-1 ">
            <span className='font-extrabold text-lg'>₦  {discount?discount:price}</span>
            {discount && <span className=' text-light-text line-through'>{price}</span>}
          </div>
        </div>
        <button className={`block ${randum===8?"bg-sundrytwo":randum>8?"sundry":""} border-2 w-full mt-4 border-dominant font-extrabold text-xl text-thick-text rounded-md py-2 ${randum<8?"cartgrad":""}`}>Add To Cart</button>
    </div>
  )
}
