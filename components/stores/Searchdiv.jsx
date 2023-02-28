import React, { useState } from 'react'
import {BsSearch} from "react-icons/bs"
import { searchMotion } from '../xAnimation'
import { motion } from 'framer-motion'

export default function SearchDiv() {
  const [focus,setFocus] = useState(false)
  return (
    <motion.div className='absolute  overflow-hidden top-12 w-full py-8 bg-bg-main insetshadow rcont px-12' variants={searchMotion} initial = "initial" animate="animate" >
      <div className={`relative bg-inputvar ${focus?"shadow-md shadow-normal-text":""} pl-2 rounded-lg sm:w-[60%] md:w-[40%] lg:w-[30%] text-base tracking-wide`}>
        <input type="text" className="block w-full py-2  pl-8 bg-transparent outline-none" 
        onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}/>
        <span className='absolute text-xl top-[20%] text-normal-text'>{<BsSearch/>}</span>
      </div>
    </motion.div>
  )
}
