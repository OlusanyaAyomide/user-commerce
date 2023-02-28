import Allcontext from '@/store/Allcontext'
import React, { useContext } from 'react'
import Product from '../utils/Product'

export default function ProductList() {
  const {featured} = useContext(Allcontext)
  const products = featured.map(({name,price,discount,id,image},key)=>{
    return <Product name={name} price={price} discount={discount} image ={image} id={key} key={key}/>
  }) 
  return (
    <section className='py-16'>
      <div className='flex flex-wrap'>
        {products}
      </div>
     
    </section>
  )
}
