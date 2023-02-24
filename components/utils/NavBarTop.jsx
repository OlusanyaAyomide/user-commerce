import React, { useEffect } from 'react'
import Image from 'next/image'
import Meta from "../../public/Meta.png"
import { useTheme } from 'next-themes'

export default function NavBarTop() {
  const { theme, setTheme } = useTheme();

  const handleModeChange = ()=>{
    if(theme === "system"){
      setTheme("lightD")
      return
    }

    if (theme.includes("D")){
        setTheme(theme.slice(0,-1))
    }
    else{setTheme(`${theme}D`)}
  }

  return (
    <div className='flex py-4 items-center border-dominant border-b'>
    <div className='w-full flex items-center'>
      <div>
        <div className='w-[60px] h-[60px] rounded-full overflow-hidden bg-overlay'>
          <Image src={Meta} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}}/>
        </div>
      </div>
      <div className='ml-2 md:mx-2'>
        <span className="block text-normal-text mb-1 font-semibold">Meta Technologies</span>  
        <span className="block mt-1 text-sm text-normal-text">Driving passion for future</span>
      </div>
    </div>
    <div className='w-[44px] p-[2px] h-[20px] bg-thickoverlay rounded-full flex cursor-pointer' onClick={handleModeChange}>
      <div className={`h-full bg-inpadding rounded-full w-[16px] transition-all roundshadow duration-500 ${theme.includes("D")?"translate-x-[120%]":""}`}></div>
    </div>
  </div>
  )
}
