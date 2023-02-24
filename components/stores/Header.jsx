import React, { useContext } from 'react'
import Image from 'next/image'
import Meta from '../../public/Meta.png'
import NavbarButton from '../utils/NavbarButton'
import Categories from '../utils/Categories'
import {BsSearch} from "react-icons/bs"
import CartIcon from './CartIcon'
import SearchDiv from './Searchdiv'
import Allcontext from '@/store/Allcontext'

export default function Header() {
  const {isSearching,setIsSearching,setOnOverLay,setIsSideActive} = useContext(Allcontext)
  const handleSearch=()=>{
    setIsSearching((prev=>!prev))
    setOnOverLay((prev=>!prev))
    setIsSideActive(false)
  }
  return (
    <section className='relative z-20'>
      <div className='flex relative right-gradient text-thick-text'>
            <div className='text-sm overflow-hidden circle text-inpadding md:cont pl-1 bg-dominant topheader font-oswald tracking-widest w-4/12 rounded-br-[45px]'>08132526280</div>
            <div className='px-2 md:px-4 lg:px-6 topheader w-6/12'>
              <div className=' w-full h-full overflow-hidden '>
                <Image src = {Meta} alt = "" style={{objectFit:"contain",width:"100%",height:"100%"}} priority/>
              </div>
            </div>
            <div className='flex justify-end rounded-bl-[45px] cont bg-dominant w-3/12'><span className='fa-brands fa-rocketchat  text-inpadding text-xl topheader '></span></div>
        </div>
        <div className='flex cont py-2 items-center relative bg-bg-main'>
          <NavbarButton/>
          <span className='text-3xl mx-4 md:mx-6 lg:mx-7 text-thick-text cursor-pointer' onClick={handleSearch}>
            <BsSearch/>
          </span>
          <Categories/>
          <span><CartIcon/></span>
          {isSearching && <SearchDiv/>}
        </div>
    </section>
  )
}
