"use client"
import React, { useState } from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

const SkillItem = ({ name, x, y, icon}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDetails = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.div className="flex items-center justify-center rounded-full shadow-dark
     shadow-lg absolute dark:text-dark dark:bg-light lg:text-sm lg:py-1.5
     lg:px-3 lg:bg-transparent lg:dark:bg-transparent lg:text-dark  lg:font-bold xs:text-2xs xs:py-0
     xs:px-0
     "
      initial={{x:0, y:0}}
      whileInView={{ x:x, y:y }}
      transition={{ duration: 1 }}
      viewport={{once: true}}
    >
      <button
        className="w-20 h-20 xl:w-16 xl:h-16 lg:w-12 lg:h-12 sm:w-10 sm:h-10 rounded-full bg-gray-200 text-gray-800 text-center leading-20 transition-colors duration-300 hover:bg-gray-300"
        onClick={toggleDetails}
      >
        <Image src={icon} alt={name} className="w-10 h-10 xl:w-8 xl:h-8 lg:w-6 lg:h-6 sm:w-5 sm:h-5 mx-auto " />
      </button>
      {isActive && (
        <div className="top-full left-0 mt-2 lg:mt-1 w-48 p-4 lg:p-2 bg-white shadow-md rounded-lg xl:w-40 lg:w-32 md:w-24 sm:w-16">
          <h4 className="text-xl font-bold mb-2 lg:mb-1  text-center xl:text-lg lg:text-md md:text-sm sm:text-xs">{name}</h4>
        </div>
      )}
    </motion.div>
  );
};

export default SkillItem;