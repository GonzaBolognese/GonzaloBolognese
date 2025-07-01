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
            Educación
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div
             style={{scaleY: scrollYProgress}}
             className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
             md:w-[2px] md:left-[30xp] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                        type='Lic. en Ciencia de Datos'
                        time='2024 - Actualidad'
                        place='Universidad Nacional de San Martin (UNSAM)'
                        link="https://unsam.edu.ar/escuelas/ecyt/661/ciencia/ciencia-de-datos"
                        info='
                        Iniciando mi formación en la Licenciatura en Ciencia de Datos en la Universidad Nacional de Buenos Aires, Mi interés se centra en fusionar mi pasión por la programación y la estadística.
                        '
                    />
                    <Details 
                        type='Google Data Analytics Professional Certificate'
                        time='2025 - 2025'
                        place='Coursera'
                        link='https://www.coursera.org/google-certificates/data-analytics-certificate?gwg_campaign_id=null&gwg_exp=null'
                        info='
                        Durante mi formación con el Certificado de Google Data Analytics, desarrollé competencias prácticas para resolver problemas de negocio utilizando datos. Puse en práctica mis habilidades en proyectos que abarcaron desde la limpieza de datos y el análisis con SQL y R, hasta la creación de narrativas visuales impactantes con Tableau.
                        ' 
                    />

            </ul>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Education