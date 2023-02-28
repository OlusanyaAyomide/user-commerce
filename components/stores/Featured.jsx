import Allcontext from '@/store/Allcontext'
import React, { useContext } from 'react'

export default function Featured() {
  const {featured} = useContext(Allcontext)
  const style ={objectFit:"contain",height:"100%",width:"100%"}
  const FeaturedList = featured.map((item,key)=>{
    return(
      <div className={`relative ${key===0?"h-full w-10/12 md:w-10/12 lg:w-8/12 ml-[12.835%] sm:w-[300px] bg-red-500 z-30":key===1?" w-4/12 h-[60%] right-[5%] sm:right-[12%] md:right-0 lg:right-[5.67%] z-20 bg-green-500":"w-4/12 h-[40%] bg-pink-500 z-10 right-[12%] md:right-[4%] sm:right-[25%]  lg:right-[10%]"} `}>
          {/* {key === 0 &&<div className='w-full h-full'></div>} */}
      </div>
    )
  })
  return (
    <section className='flex cont -my-1 w-full md:w-6/12 skew-y-1 h-[400px] items-end py- justify-center'>
      {FeaturedList}
    </section>
  )
}
