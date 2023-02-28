import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { NavBarMotion } from '../xAnimation'
import NavBarTop from './NavBarTop'
import GetIcon from '@/helper/icons'
import Allcontext from '@/store/Allcontext'
import Link from 'next/link'
import { FaInfoCircle,FaGlobe} from "react-icons/fa"


export default function NavBar() {
  const {category} = useContext(Allcontext)
  const categoryList = category.map((item,key)=>{
    return(
    <div className='py-2 my-2 text-lg relative flex font-bold text-thick-text navhover items-center' key={key}>
      <span className='mr-2 text-xl'><GetIcon value={item.name}/></span>
      <span>{item.name}</span>
    </div>)
  })
  return (
    <motion.section className='absolute left-0 top-[52px] z-30 border-none bg-bg-main w-9/12 sm:w-6/12 md:w-[300px] lg:w-[320px] min-h-screen h-full cont ' variants={NavBarMotion}  initial="initial" animate="animate" exit="animateback">
        <NavBarTop/>
        <div className='py-2 pb-8 border-b border-dominant'>
          <span className='text-base text-normal-text py-2 mb-2 font-bold'>Categories</span>
          {categoryList}
        </div>
        <div className='relative'>
          <div className='py-2 my-2 text-lg relative flex font-bold text-thick-text items-center'>
            <span className='mr-2 text-xl'><FaInfoCircle/></span>
            <span><Link href={"/"}>About Us</Link></span>
          </div>
          <div className='py-2 my-2 text-lg relative flex font-bold text-thick-text items-center'>
            <span className='mr-2 text-xl'><FaGlobe/></span>
            <span><Link href={"/"}>Explore</Link></span>
          </div>
        </div>
    </motion.section>
  )
}
