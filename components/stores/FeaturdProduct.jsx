import Allcontext from '@/store/Allcontext'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FeaturedAnimation } from '../xAnimation'
import { motion,useAnimation } from 'framer-motion'
import { useInterval } from 'react-use'


export default function FeaturdProduct() {
  const {featured} = useContext(Allcontext)
  const [TopFeatured,setFeatured] = useState(featured)
  const control = useAnimation()

  const style ={objectFit:"contain",height:"100%",width:"250px"}
  const style2 ={objectFit:"contain",height:"100%",width:"100%"}


  useInterval(()=>{
    let newArray = []
    TopFeatured.map((item,key)=>{
      if(key !== 0){newArray.push(item)}
      return 
    })
    setFeatured([...newArray,TopFeatured[0]])
    control.start("animate")
  },5000)

  const featuredList = TopFeatured.map((item,key)=>{
    return(
      <div className={`&${key===0?"w-6/12 md:w-[250px] featuredshadow1 pt-2":key===1?"w-4/12 md:w-[200px] featuredshadow2 pb-2":"w-3/12 md:w-[150px] featuredshadow2 pb-2"} rounded-xl mx-4 flex-shrink-0 bg-main`} key ={key} >
        <div className='px-2 w-full'>
            <h1 className={`text-thick-text ${key===0?"text-lg font-bold my-2":"text-sm font-semibold my-1"} text-center`}>{item.tagline}</h1>
            <div className={`${key === 0?"h-[250px]":key===1?"h-[150px]":"h-[100px]"} relative imageoverlay rounded-lg`}>
              {key === 0 && <Image src = {item.image} alt="" style={style}/>}
              {key !== 0 && <Image src = {item.image} alt="" style={style2}/>}
            </div>
            <div className={`${key===0?"my-2":"my-1"}`}>
              <h1 className={`${key === 0?"text-lg my-1":"text-sm my-1"} text-normal-text font-semibold`}>{item.name}</h1>
              {!item.discount && <h1 className={`${key === 0?"text-lg my-1":"text-sm my-1"} text-normal-text font-semibold`}>{item.price}</h1>}
              {item.discount && <div className={`flex justify-between  ${key === 0?"text-lg my-1":"text-base my-1"} text-normal-text font-semibold`}>
                  <span>{item.discount}</span>
                  <span className='line-through text-base decoration-2 decoration-normal-text text-light-text'>{item.price}</span>
                </div>}
            </div>
        </div>
        {key===0 && <Link href={""}><button className="block w-full py-2 rounded-lg text-inpadding bg-dominant text-lg">View Product</button></Link>}
      </div>
    )
  })
  return (
    <section className='cont py-8 '>
       <h1 className='text-center text-2xl text-thick-text mb-8 font-extrabold md:text-3xl  '>Featured Products</h1>
      <div className='flex md:justify-center items-center py-4 overflow-auto'>
      {featuredList}
      </div>
   
    </section>
  )
}
