"use client"

import Head from 'next/head'
import React from 'react'
import AnimetedText from '@/components/AnimetedText'
import Image from 'next/image'
import Imgcom from '../../../public/images/Img.jpg'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Transition from '@/components/Transition'
import UnsamLogo from '../../../public/images/Unsam.png'
import GoogleLogo from '../../../public/images/Google.png'
import Experience from '@/components/Experience'


const About = () => {
  return (
    <>
        <Head> 
            <title>Sobre Mi</title>
        </Head>
        <Transition />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <div className='pt-16 z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8'>
                <AnimetedText text="Sobre Mi" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <p className='font-medium'>
                            Mi nombre es Gonzalo Bolognese, soy Analista de Datos con formación y enfoque en Data Science.
                        </p>
                        <p className='my-4 font-medium'>
                            Estudiante de Lic. en Ciencia de Datos en &nbsp; 
                            <a href='https://www.unsam.edu.ar/img/logo_ecyt.png' target='_blank'>
                                <Image alt='Unsam logo' src={UnsamLogo} className="bg-light inline w-24 p-1.5 rounded-xl" />
                            </a>
                        </p>
                        <p className='font-medium'>
                            Certificado por Google en Data Analytics &nbsp; 
                            <a href="https://grow.google/certificates/data-analytics/" target='_blank'>
                                <Image alt='Google logo' src={GoogleLogo} className='bg-light inline w-20 rounded-xl' />
                            </a>
                        </p>
                        <p className='mb-3 font-medium mt-4'>
                            Me apasiona aplicar la estadística y la programación para resolver problemas complejos y extraer insights de valor a partir de los datos.
                        </p>
                        <p className='mb-3 font-medium'>
                            Disfruto del trabajo en equipo para transformar ideas en soluciones de datos funcionales. Mi experiencia en análisis con Pandas y experiencia en desarrollo backend con Spring Boot me permite abordar los problemas desde una perspectiva integral.
                        </p>
                        <p className='font-medium'>
                        Estoy emocionado de aplicar mis habilidades y conocimientos en un entorno profesional, ansioso por contribuir al éxito de una empresa mientras continúo aprendiendo de profesionales con experiencia.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 
                    border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                    xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={Imgcom} alt='Error Pic' className='w-full h-auto rounded-2xl'
                        priority
                        sizes='(max-width: 768) 100vw,
                        (max-width: 1200px) 50vw,
                        50vw '/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                2+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Años de Desarrollo</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                5+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Proyectos realizados</h2>
                        </div>
                        
                    </div>
                </div>
                <Skills className="w-screen" />
                <Experience />
                <Education />
            </div>
        </main>
    </>
  )
}

export default About 