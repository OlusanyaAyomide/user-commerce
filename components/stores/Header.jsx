import React from 'react'
import Image from 'next/image'
import Meta from '../../public/Meta.png'
import NavbarButton from '../utils/NavbarButton'
import Categories from '../utils/Categories'
import {BsSearch} from "react-icons/bs"
export default function Header() {

  return (
    <section>
      <div className='flex relative right-gradient'>
            <div className='text-sm overflow-hidden circle text-inpadding md:cont pl-1 bg-dominant topheader font-oswald tracking-widest w-4/12 rounded-br-[45px]'>08132526280</div>
            <div className='px-2 md:px-4 lg:px-6 topheader w-6/12'>
              <div className=' w-full h-full overflow-hidden '>
                <Image src = {Meta} alt = "" style={{objectFit:"contain",width:"100%",height:"100%"}} priority/>
              </div>
            </div>
            <div className='flex justify-end rounded-bl-[45px] cont bg-dominant w-3/12'><span className='fa-brands fa-rocketchat  text-inpadding text-xl topheader '></span></div>
        </div>
        <div className='flex cont py-2 items-center'>
          <NavbarButton/>
          <span className='text-3xl text-normal-text mx-4 md:mx-6 lg:mx-7'>
            <BsSearch/>
          </span>
          <Categories/>
          <span className='ml-6'>AAA</span>
        </div>
    </section>
  )
}
