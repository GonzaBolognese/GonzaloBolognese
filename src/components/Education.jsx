import React from 'react'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Footer from './Footer'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, link, info}) => {
    const ref = useRef (null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type} -&nbsp;
                <a 
                 href={link}
                 target='_blank'
                 className='text-primary capitalize'
                 >
                  {place}
                 </a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll (
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <>
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div
             style={{scaleY: scrollYProgress}}
             className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
             md:w-[2px] md:left-[30xp] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                    type='FULL STACK WEB DEVELOPER'
                    time='2022 - 2023'
                    place='Henry'
                    link='https://www.soyhenry.com/'
                    info='Bootcamp in which I was able to acquire skills to develop a complete website, including design, functionality, relational database, and API manipulation. I highly value the learning of programming and mathematical concepts such as algorithms, recursion, and data structures.
                    '
                    />
                    <Details 
                    type='FRONT END WEB DEVELOPER'
                    time='2021 - 2022'
                    place='Educación IT'
                    link='https://www.educacionit.com/'
                    info='
                    Accelerated course with web development modules covering HTML, CSS, and JavaScript for creating responsive websites, as well as development with React. Modules include UX/UI design and an introduction to the Object Paradigm.
                    '
                    />
                    <Details 
                    type='ACTUARIO EN ADMINISTRACIÓN'
                    time='2022 - 2023'
                    place='Universidad de Buenos Aires (UBA)'
                    link="https://www.uba.ar/#/"
                    info='
                    Completed up to the third year. I decided to pause my degree to explore other academic and professional options. Relevant subjects passed: Algebra, Mathematical Analysis I and II, Statistics.'
                    />
                   
            </ul>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Education