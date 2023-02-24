import React from 'react'
import { motion } from 'framer-motion'
import { NavBarMotion } from '../xAnimation'

export default function NavBar() {
  return (
    <motion.section className='fixed top-28 z-30 bg-bg-main w-8/12 sm:w-6/12 md:w-[350px] lg:w-[380px] min-h-screen' variants={NavBarMotion}  initial="initial" animate="animate" exit="animateback">
fdfdfmotion.ef
    </motion.section>
  )
}
