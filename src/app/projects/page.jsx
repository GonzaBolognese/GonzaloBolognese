"use client"

import Head from 'next/head'
import React from 'react'
import AnimetedText from '@/components/AnimetedText'
import { GithubIcon } from '@/components/Icons'
import MangiareImg from '../../../public/images/Mangiare.jpg'
import PaseoPetImg from '../../../public/images/PaseoPet.jpg'
import HenryGamesImg from '../../../public/images/HenryGames.png'
import PasosFirmes from '../../../public/images/Pasos-firmes.jpg'
import TaTeTi from '../../../public/images/ta-te-ti.png'
import Link from 'next/link'
import Image from 'next/image'
import Transition from '@/components/Transition'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <article className='w-[95%] flex items-center justify-between ml-8 relative rounded-br-2xl rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xl:ml-0 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
      dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className='w-1/2 flex flex-col items-start justsfy-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-lg'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 
        px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
          Visit Project
        </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}) => {
  return (
    <article className='w-[95%] flex flex-col items-center justify-center rounded-2xl ml-8 border border-solid border-dark
    bg-light p-6 relative dark:bg-dark dark:border-light xl:ml-0 xs:p-4'>
       <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
       rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank"
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className='w-full flex flex-col items-start justsfy-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-lg'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit</Link>
        <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>
        </div>
      </div>
    </article>
  )
}

const proyects = () => {
  return (
    <>
      <Head>
        <title>Gonzalo Bolognese | Proyectos Personales</title>
        <meta name='description' content='any description'/>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Transition /> 
        <div className='pt-16'>
          <AnimetedText text="Proyectos Personales" className="mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs :!text-4xl" />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject 
              type="Web colaborativa"
              title="Pasos Firmes"
              summary="Pasos Firmes es una plataforma web que facilita el intercambio y reutilización de dispositivos ortopédicos. Permite a los usuarios registrar y publicar artículos ortopédicos en desuso, buscar equipos específicos y contactar a otros usuarios para coordinar el préstamo o donación de estos dispositivos. La plataforma promueve la colaboración comunitaria y mejora el acceso a equipamiento esencial para personas con discapacidad."
              img={PasosFirmes}
              github="https://github.com/No-Country/s16-06-m-java-react"
              link="https://github.com/No-Country/s16-06-m-java-react"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project 
                type="App"
                title="Paseo Pet"
                summary="Paseo Pet es una aplicación para pasear perros desarrollada como parte de un proyecto universitario con fines educativos. La idea principal de la aplicación es conectar a paseadores de perros de una área específica con perros que necesitan un paseo. La aplicación está desarrollada en PHP y utiliza PHPMyAdmin como base de datos."
                img={PaseoPetImg}
                github="https://github.com/GonzaBolognese/Paseopet"
                link="https://paseopet.000webhostapp.com/"
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project 
                type="App"
                title="Mangiar-e"
                summary="Mangiar-e es una app culinaria que te permite descubrir recetas filtrándolas por ingredientes, adaptándose a lo que tienes en casa. Si te falta algo, ¡no te preocupes! Puedes adquirirlo en su tienda integrada y pagar con MercadoPago. Además, puedes socializar y gestionar contenido, revisar recetas, marcar tus favoritas y compartir las tuyas."
                img={MangiareImg}
                github="https://github.com/Matu36/MANGIARE"
                link="https://mangiare.vercel.app/"
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project 
                type="Game"
                title="Ta-Te-Ti"
                summary="Este es un proyecto de Ta-Te-Ti desarrollado con React y Vue.js. El juego permite a dos jugadores turnarse para marcar X o O en una cuadrícula de 3x3 y determinar el ganador. También guarda el estado del juego y el historial de victorias en el almacenamiento local del navegador."
                img={TaTeTi}
                github="https://github.com/GonzaBolognese/tateti"
                link="https://tateti-omega.vercel.app/"
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project 
                type="Api App"
                title="Henry Games"
                summary="The objective of the project was to build an App using React, Redux, Node, and Sequelize."
                img={HenryGamesImg}
                github="https://github.com/GonzaBolognese/PI-Videogames-PT-08/tree/main/PI-Videogames-PT-08"
                link="https://github.com/GonzaBolognese/PI-Videogames-PT-08/tree/main/PI-Videogames-PT-08"
                />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default proyects