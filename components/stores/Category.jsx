import Allcontext from '@/store/Allcontext'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fadeIn } from '../xAnimation'
import { motion,AnimatePresence } from 'framer-motion'
import {  useInterval} from 'react-use'

export default function Category() {
  const {category} = useContext(Allcontext)
  const [currentArray,setCurrentArray] = useState(category)
  const style ={objecFit:"contain",height:"100%",width:"100%"}

  useInterval(()=>{
    let newArray = []
    currentArray.map((item,key)=>{
      if(key !== 0){newArray.push(item)}
      return 
    })
    setCurrentArray([...newArray,currentArray[0]])
  },10000)

  const CategroryComponent = ({num})=>{
    return(
      <motion.div className='w-full rounded-md relative darkoverlay transition-all duration-100'variants={fadeIn} initial="initial" animate="animate" exit="initial">
      <Image src={currentArray[num].image} style={style} alt=""/>
      <div className='absolute w-full bottom-[20%] flex flex-col justify-center'>
        <span className="my-1 text-white text-2xl font-semibold block text-center">{currentArray[num].name}</span>
        <button className='mx-auto rounded-md mt-4 font-semibold bg-dominant text-inpadding text-base px-4 py-1'>
          <Link href={"/"}><span>Shop Now</span></Link>
        </button>
      </div>
    </motion.div>
  
    )
  }

  return (
    <section className='bg-main'>
      {/* <motion.h1></motion.h1> */}
      <div className='sm:w-10/12 lg:w-9/12 mx-auto pt-12 cont'>
      <h1 className='text-center text-2xl text-thick-text mb-8 font-extrabold md:text-3xl  '>Top Category</h1>
      <div className='flex'>
        <div className='flex flex-wrap w-full md:w-7/12'>
          <div className='w-[50%] p-[2px] h-[200px] relative darkoverlay2'>
              <CategroryComponent num = {0}/>
          </div>
          <div className='w-[50%] h-[200px] p-[2px] relative darkoverlay2'>
             <CategroryComponent num = {1}/>
          </div>
          <div className='w-full p-[2px] h-[150px] relative darkoverlay2'>
            <CategroryComponent num = {2}/>
          </div>
        </div>
        <div className='hidden p-[2px] md:block h-[350px] md:w-5/12 relative darkoverlay2'>
            <CategroryComponent num = {3}/>
        </div>
      </div>
    </div>
    </section>

  )
}
