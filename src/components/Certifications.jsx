import React from 'react'
import {motion} from 'framer-motion'
import { CERTIFICATIONS } from '../constants'

function Certifications() {
  return (
    <section className='pt-20' id='certifications'>
        <motion.h2
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className='mb-20 text-center text-3xl lg:text-4xl'>
            Certifications
        </motion.h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {CERTIFICATIONS.map((certification)=>
            <motion.div
            initial={{opacity:0,scale:0.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            whileHover={{scale:1.05}}
            key={certification.id} className='group relative overflow-hidden rounded-3xl'>
                <motion.img
                    whileHover={{scale:1.1}}
                     src={certification.image}
                     alt={certification.name}
                     className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' />
            </motion.div>
            )}
        </div>
    </section>
  )
}

export default Certifications
