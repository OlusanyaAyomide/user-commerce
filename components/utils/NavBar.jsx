import React from 'react'
import { motion } from 'framer-motion'
import { NavBarMotion } from '../xAnimation'
import NavBarTop from './NavBarTop'

export default function NavBar() {
  return (
    <motion.section className='fixed top-28 z-30 bg-bg-main w-9/12 sm:w-7/12 md:w-[350px] lg:w-[380px] min-h-screen justify-between cont' variants={NavBarMotion}  initial="initial" animate="animate" exit="animateback">
        <NavBarTop/>
    </motion.section>
  )
}
