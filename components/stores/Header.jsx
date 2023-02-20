import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Meta from '../../public/Meta.png'
import { motion,useAnimation } from 'framer-motion'
import { toggleAnimation } from '../xAnimation'

export default function Header() {
  const [toggle,setToggle] = useState(false)
  const [mounted,setMounted] = useState(false)
  const control = useAnimation()
  useEffect(()=>{
    console.log("gereee")
    if (!mounted){
      setMounted(true)
      return}
    control.start("animate")
  },[toggle])
  return (
    <section>
      <div className='flex relative bg-dominant  right-gradient'>
            <div className='text-sm overflow-hidden circle text-inpadding md:cont pl-1 bg-dominant topheader font-oswald tracking-widest w-4/12 rounded-br-[45px]'>08132526280</div>
            <div className='px-2 md:px-4 lg:px-6 topheader w-6/12'>
              <div className=' w-full h-full overflow-hidden '>
                <Image src = {Meta} alt = "" style={{objectFit:"contain",width:"100%",height:"100%"}}/>
                {/* <img src={Meta} alt="" className='h-full w-full object-cover' /> */}
              </div>
            </div>
            <div className='flex justify-end rounded-bl-[45px] cont bg-dominant w-3/12'><span className='fa-brands fa-rocketchat  text-inpadding text-xl topheader '></span></div>
        </div>
        <div className='flex py-2 cont'>
            <div className='flex flex-col justify-between h-[24px]  w-[30px] cursor-pointer' onClick={()=>{setToggle((prev=>!prev))}}>
              <motion.span className='toggler' variants={toggleAnimation(toggle,1)} initial="initial" animate={control}></motion.span>
              <motion.span className='toggler'></motion.span>
              <motion.span className='toggler' variants={toggleAnimation(toggle,3)} initial="initial" animate={control}></motion.span>
            </div>
        </div>
    </section>
  )
}
