import React from 'react'
import {SOCIAL_MEDIA_LINKS} from  '../constants'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className='mb-8 mt-20'>
        <motion.div
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        className='flex items-center justify-center'>
            <img src={logo} width={200} className='my-10' />
        </motion.div>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((smlink,index)=>(
                <motion.a
                initial={{opacity:0,x:-10}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:index*0.5}}
                key={index} href={smlink.href} target='_blank' rel='noopener noreferrer'>
                    {smlink.icon}
                </motion.a>
            ))}
        </div>
        <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
            &copy;compileTab. All rights reserved.
        </p>
    </div>
  )
}

export default Footer
