import React,{useContext,useEffect,useState} from 'react'
import { toggleAnimation,toggleCenter } from '../xAnimation'
import  AllContext from '@/store/Allcontext'
import { motion,useAnimation } from 'framer-motion'

export default function NavbarButton() {
    const [mounted,setMounted] = useState(false)
    const {isnavActive,setisNavActive} = useContext(AllContext)
    const control = useAnimation()
    
    useEffect(()=>{
      if (!mounted){
        setMounted(true)
        return}
        if(isnavActive){control.start("animate")}
        else{
          control.start("animateback")}
    
    },[isnavActive])
  return (
        <button className='flex flex-col justify-between h-[22px]  w-[30px] cursor-pointer' onClick={()=>{setisNavActive((prev=>!prev))}}>
            <motion.span className='toggler' variants={toggleAnimation(1)} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleCenter()} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleAnimation(3)} initial="initial" animate={control}></motion.span>
        </button>
  )
}
