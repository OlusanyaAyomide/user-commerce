import React,{Fragment, useContext} from 'react'
import Header from '@/components/stores/Header'
import Allcontext from '@/store/Allcontext'
import OverLay from '@/components/utils/onOverLay'
import Hero from '@/components/stores/Hero'
import NavBar from '@/components/utils/NavBar'
import { AnimatePresence } from 'framer-motion'

export default function Index() {
  const {onOverLay,isnavActive} = useContext(Allcontext)
  return (
      <Fragment>
        <div className='overflow-hidden'>
        <Header/>
        {onOverLay && <OverLay/>}
        <Hero/>
        <AnimatePresence>{isnavActive &&  <NavBar/>}</AnimatePresence>
        </div>      
      </Fragment>
  )
}
