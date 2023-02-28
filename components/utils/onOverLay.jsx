import Allcontext from '@/store/Allcontext'
import React, { useContext } from 'react'

export default function OverLay() {
  const {setOnOverLay,setisNavActive,setIsSearching} = useContext(Allcontext)
  const handleClick = ()=>{
    setisNavActive(false)
    setIsSearching(false)
    setOnOverLay(false)
  }
  return (
    <div className='fixed inset-0 z-10 bg-overlay blurer' onClick={handleClick}></div>
  )
}
