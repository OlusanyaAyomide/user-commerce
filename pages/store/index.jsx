import React,{Fragment, useContext} from 'react'
import Header from '@/components/stores/Header'
import Allcontext from '@/store/Allcontext'
import OverLay from '@/components/utils/onOverLay'
import Hero from '@/components/stores/Hero'
import Category from '@/components/stores/Category'
import FeaturdProduct from '@/components/stores/FeaturdProduct'
import Discount from '@/components/stores/Discount'
import ProductList from '@/components/stores/ProductList'

export default function Index() {
  const {onOverLay,isnavActive} = useContext(Allcontext)
  return (
      <Fragment>
        <div className='overflow-hidden'>
        <Header/>
        {onOverLay && <OverLay/>}
        <Hero/>
        <Discount/>
        <Category/>
        <FeaturdProduct/>
        <ProductList/>
        </div>      
      </Fragment>
  )
}
