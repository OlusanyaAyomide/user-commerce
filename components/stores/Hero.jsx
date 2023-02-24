import React, { useContext, useState } from 'react'
import HeroImage from "../../public/Hero-Image.jpg" 
import Image from 'next/image'
import Allcontext from '@/store/Allcontext'
import CustomTypeWriter from '../utils/CustomTypeWriter'

export default function Hero() {
  const {settings:{heroSection:{position,stripBackground,textStrings}}} = useContext(Allcontext)
  const [onFocus,setOnFocus] = useState(false)
  return (
    <section className='w-full h-[500px] relative'>
        <Image src={HeroImage} alt="" style={{objectFit:"cover",height:"100%", width:"100%"}} priority/>
        {stripBackground && <div className='absolute inset-0 hero-gradient opacity-20 before:absolute before:inset-0 before:bg-overlay before:opacity-100'></div>}
        <div className='absolute bg-overlay inset-0'></div>
        <div className={`absolute text-inpadding bottom-12 w-8/12 sm:text-[38px] md:w-[600px] md:text-5xl lg:text-6xl text-4xl font-extrabold  ${position === "left"?"left-2 md:left-4 lg:left-8":" right-2 md:right-2 lg:right-8"}`}>
          {textStrings.length > 1 && <div className='min-h-[200px]'>
          <CustomTypeWriter strings={textStrings}/></div>}
          {textStrings.length === 1 && <div className='min-h-[150px]'><span>{textStrings}</span></div>}
     
        <div className={`w-full py-1 rounded-xl bg-inpadding text-base flex mt-8 ${onFocus?"shadow-md":""} px-1 shadow-normal-text text-normal-text`}>
          <input type="email" className='bg-transparent  py-1 px-2 w-full outline-none' placeholder='Email'
          onFocus={()=>{setOnFocus(true)}} onBlur={()=>{setOnFocus(false)}}/>
          <button className='bg-dominant px-4 text-inpadding py-1 rounded-lg '><span className='whitespace-nowrap'>Get Notified</span></button>
        </div>
        </div>
    </section>
  )

}
