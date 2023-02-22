import Allcontext from '@/store/Allcontext'
import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

export default function CartIcon() {
  const {cartItem} = useContext(Allcontext)
  return (
    <div className='ml-6 relative'>
        <span className='text-3xl text-thick-text'><AiOutlineShoppingCart/></span>
        {cartItem.length>0 && <span className='absolute -top-3 -right-2 h-5 w-5 rounded-full bg-dominant text-inpadding flex justify-center items-center'>{cartItem.length}</span>}
    </div>
  )
}
