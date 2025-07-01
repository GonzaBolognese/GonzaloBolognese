"use client"

import Head from 'next/head'
import Image from 'next/image'
import profile from '../../public/images/image.png'
import AnimetedText from '@/components/AnimetedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import Footer from '@/components/Footer'
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher'
import Transition from '@/components/Transition'

export default function Home() {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
    <Head>
    <title>GB Portfolio</title>
    </Head>
    <Transition />
    <main className='flex lg:items-center items-center text-dark w-full dark:text-light min-h-screen'>
      <div className='pt-0 md:pt-8 sm:pt-4 z-0 inline-block h-full w-full bg-light dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8'>
      <div className="flex items-center justify-between w-full lg:flex-col">
        <div className='w-1/2 md:w-full sm:mb-4'>
          <Image src={profile} alt="ImageIA" className="w-full h-auto lg:hidden md:inline-block md:w-full "
          priority
          sizes='(max-width: 768) 100vw,
          (max-width: 1200px) 50vw,
          50vw '
          />
        </div>
        <div className='w-1/2 flex flex-col items-left self-center lg:w-full lg:text-center md:w-full md:text-center ml-8'>
          <AnimetedText text="Data Analytics & Science" className='!text-6xl !text-left 
          xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'/>
          <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
          Mi nombre es Gonzalo Bolognesem, soy Data Analytics y estudiante de Data Science. 
          </p>
          <div className='flex items-center self-start mt-2 lg:self-center'>
            <Link href="/Gonzalo-Bolognese-CV.pdf" target={"_blank"}
            className='flex items-center bg-dark text-light dark:bg-light dark:text-dark
            p-2.5 px-6 rounded-lg text-lg font-semibold
          hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light
            border-2 border-solid border-transparent hover:border-dark hover:dark:border-light
            md:p-2 md:px-4 md:text-base sm:p-1 sm:px-2'
            download={true}
            >Curriculum <LinkArrow className={"w-6 ml-1"}/>
            </Link>
            <Link href="mailto:gonza.1703@gmail.com" target={"_blank"}
            className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline
            md:text-base 
            '>Contacto</Link>
          </div>
        </div>
      </div>
      </div>
    </main>
      <Footer/>
    </>
  )
}
