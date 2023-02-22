import Allcontext from '@/store/Allcontext'
import React, { useContext,useState } from 'react'
import Link from 'next/link'
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io"
import Dropdown from '../stores/dropdown'

export default function Categories() {
  const {category} = useContext(Allcontext)
  const {dropDownToggle,setDropDownToggle}  = useContext(Allcontext)
  const categoryItems = category.map((item,key)=>{
    if (key < 2) return(
        <span className='relative header-text hidden md:block isactive' key ={key}><Link href={`/${item.name}`}>{item.name}</Link></span>
    )
    else if (key === 2){
        return(
        <div className='header-text relative md:flex items-center hidden' key={key}>
          <span className='relative isactive'>Show All</span><button onClick={()=>{setDropDownToggle((prev=>!prev))}} className="ml-2"
         >{!dropDownToggle?<IoIosArrowDown/>:<IoIosArrowUp/>}</button>
          {dropDownToggle && <Dropdown/>}
        </div>
        ) 
    }
  })
  return (
    <div className='flex w-full py-2 justify-around items-center text-thick-text'>
        <span className='relative header-text isactive'>
            <Link href={"/"}>Home</Link>
        </span>
        {categoryItems}
        <span className='relative header-text isactive'>
            <Link href={"/"}>About Us</Link>
        </span>
    </div>
  )
}
