import Allcontext from '@/store/Allcontext'
import React, { useContext } from 'react'
import Link from 'next/link'
import { DropDownMotion } from '../xAnimation'
import { motion } from 'framer-motion'


export default function Dropdown() {
  const {category} = useContext(Allcontext)
  const CategoryList = category.map((item,key)=>{
    return(
      <span className='relative py-2 px-2 block pr-20 onhover overflow-hidden '><Link href={`${item.name}`}><span className='whitespace-nowrap'>{item.name}</span></Link></span>
    )
  })
  return (
    <motion.div className='absolute top-6 left-0 dropdown text-normal-text z-20 rounded-md overflow-hidden bg-bg-main' variants={DropDownMotion} initial="initial" animate="animate">
     {CategoryList}
  </motion.div>
  )
}
