import { delay } from 'framer-motion';
import React from 'react'
import Typewriter from 'typewriter-effect';

export default function CustomTypeWriter({strings}){
  return (
    <div>
        <Typewriter
            options={{
                strings,
                autoStart:true,
                loop:true,
                pauseFor:10000,
                delay:110,
                deleteSpeed:10,
            }}  
        />
    </div>
  )
}
