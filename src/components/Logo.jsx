import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"; 

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 '>
      <Link href="/">
        <motion.div className='inline-flex items-center justify-center w-11 h-11 lg:w-9 lg:h-9 text-xl bg-black transform rotate-45 text-white font-bold border border-solid border-transparent mt-1  dark:border-light'
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:2, repeat: Infinity}
        }}>
          <span className='transform -rotate-45 text-lg lg:text-sm '>GB</span>
        </motion.div>
      </Link>
    </div>
  )
}

export default Logo
