import Allcontext from '@/store/Allcontext'
import React, { useContext } from 'react'
import Image from 'next/image'

export default function Discount() {
    const {topDiscounts} = useContext(Allcontext)
    const style = {ObjectFit:"contain",height:"100%",width:"100%"}
    const DiscountList = topDiscounts.map((item,key)=>{
        return(
        <div className={`w-full sm:w-6/12 flex items-center ${key === 0?"mb-5 sm:mb-0":"mt-5 sm:mt-0"}`} key={key}>
            <div className='w-5/12 sm:w-[150px] h-[120px]  rounded-md'>
                <div className='w-full h-full relative imageoverlay overflow-hidden rounded-md'>
                <Image src={item.image} style={style} alt=""/>
                </div>
            </div>
            <div className='pl-2 w-8/12'>
                <h1 className='text-lg text-thick-text'>{item.name}</h1>
                <span className="block my-2 text-sm text-normal-text">{item.description}</span>
                <span className="block my-2 font-extrabold text-thick-text">₦ {item.price}</span>
                <button className="block px-8 py-2 mt-4 text-inpadding rounded-md bg-dominant"><span className='whitespace-nowrap'>Shop Now</span></button>
            </div>
        </div>
        )
 
    })
  return (
    <section className='-mt-12 cont mx-4 md:mx-12 rounded-md bg-bg-main relative z-10 shadow-md shadow-normal-text'>
        <div className='py-8 px-2 sm:px-8'>
            <h1 className='text-xl font-cxtrabold text-thick-text my-2'>Top Discounts</h1>
            <div className='flex flex-col sm:flex-row'>
                {DiscountList}
            </div>
        </div>

    </section>
  )
}
