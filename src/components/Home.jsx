import React from "react";
import {HOME} from '../constants'
import bannerimg from '../assets/banner.jpeg'
import { motion } from 'framer-motion'

function Home() {
  return (
    <section className="mx-4 flex min-h-screen flex-wrap items-center from-neutral-600">
      <motion.div
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1,delay:0.8}}
      className="w-full md:w-1/2">
      <motion.h2
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1,delay:0.5}}
      className="my-8 p-2 text-2xl font-bold md:text-3xl lg:text-3xl text-justify">
        {HOME.greet}
      </motion.h2>
      <motion.p
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,delay:0.3}}
      className="mb-2 p-4 text-3xl tracking-tighter lg:text-2xl text-justify">
        {HOME.welcome_msg}
      </motion.p>
      <motion.p 
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1,delay:1}}
      className="mb-2 p-4 text-xl text-justify">
        {HOME.description}
      </motion.p>
      <motion.p 
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1,delay:1}}
      className="mb-4 p-4 text-xl font-semibold text-justify">
        {HOME.note}
      </motion.p>
      </motion.div>
      <motion.div
      initial={{opacity:0,scale:0.8}}
      animate={{opacity:1,scale:1}}
      transition={{duration:1}}
      className="w-full md:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                src={bannerimg} width={550} height={900} alt="Ramadevi Kalappatti Narasimhan" className="rounded-3xl" />
            </div>
      </motion.div>
    </section>
  );
}

export default Home;
