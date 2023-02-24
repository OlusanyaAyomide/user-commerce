import React from 'react'
import ThemeChanger from '@/components/ThemeChanger'
import gown1 from "../public/gown1.png"
import Image from 'next/image'

export default function index() {
  const array = [
    {big:"header Text 1",small:"small text 1"},
    {big:"header Text 2",small:"small text 2"},
    {big:"header Text 3",small:"small text 3"},
  ]
  const circles = array.map((item,key)=>{
    return(
      <div key={key} className='flex items-center mx-6 flex-col justify-center h-[250px] w-[250px] rounded-full bg-dominant'>
          <span className='text-3xl text-inpadding'>{item.big}</span>
          <span className="text-2xl text-thick-text">{item.big}</span>
          <span className="text-base text-normal-text">{item.big}</span>
      </div>
    )
  })
  return (
    <div className='overflow-hidden bg-gradient-to-r from-bg-main to-bg-sec'>
      <ThemeChanger/>
      <div className='h-[100vh]  flex items-center justify-center'>
      <div className='flex '>
        {circles}
      </div>
    </div>
    <div className='p-12'>
     <input type="text" className='w-full rounded-xl text-sm px-6 py-2 bg-inputvar text-normal-text border border-normal-text/50 outline-none' placeholder='Enter a text'/>
    </div>
    <div className='my-4 h-[450px] w-[300px] overflow-hidden relative before:absolute before:inset-0 before:bg-overlay'>
      <Image src={gown1} alt=""/>
    </div>
    </div>
 
  )
}
