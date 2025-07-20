import React from 'react'
import { useRef } from 'react'
import LiIcon from './LiIcon'
import { motion, useScroll } from 'framer-motion'

const Details = ({position, company, companyLink, time, señority, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <div>
                <h3 className='capitalize font-bold text-2xl'>{position} - <a href={companyLink} target="_blank" className='text-primary capitalize'>{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time}&nbsp;  |&nbsp;   {señority}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {Array.isArray(work) ? (
                        <ul className='list-disc list-inside mt-2'>
                            {work.map((item, index) => (
                                <li key={index} className='font-medium w-full md:text-sm'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='font-medium w-full md:text-sm'>
                            {work}
                        </p>
                    )}
                </p>
            </div>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll (
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experiencia
        </h2>

        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div
             style={{scaleY: scrollYProgress}}
             className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
             md:w-[2px] md:left-[30xp] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Analista de Datos y Desarrollador Odoo"
                        company="Newcom LCS"
                        companyLink="https://www.newcom-lcs.com/"
                        time="2025 - 2025"
                        señority="Junior"
                        work={[" Business Intelligence : Diseño y desarrollo de soluciones de datos (ETL y dashboards en Looker Studio y Odoo) para transformar métricas en decisiones estratégicas.",
                              " Desarrollo y Mantenimiento Odoo : Creación de nuevos módulos en Python para optimizar procesos y resolución de incidencias para garantizar la estabilidad del ERP.",
                              " Partner Técnico : Colaboración directa con líderes de equipo para definir KPIs y traducir las necesidades del negocio en soluciones técnicas funcionales."]}
                    />
                    <Details
                        position="Back End Developer"
                        company="No Country"
                        companyLink="https://www.nocountry.tech/"
                        time="2024 - 2024"
                        señority="Contrato de prácticas"
                        work="Durante mi práctica profesional en No Country, estoy ganando experiencia trabajando en equipos multidisciplinarios en Simulaciones Remotas de Desarrollo Web enfocada en el desarrollo Backend para perfeccionar mis habilidades en Java.
En el rol de Backend Developer, mis responsabilidades incluyeron el diseño, implementación y mantenimiento de la lógica del servidor y la arquitectura de bases de datos. Utilizando tecnologías Java como Spring Boot, Spring Security, Hibernate, MySQL Y MVC. "
                    />
            </ul>
        </div>
    </div>
  )
}

export default Experience