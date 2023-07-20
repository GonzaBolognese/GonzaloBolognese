"use client"

import Head from 'next/head'
import React from 'react'
import AnimetedText from '@/components/AnimetedText'
import Image from 'next/image'
import Imgcom from '../../../public/images/Img.jpg'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Transition from '@/components/Transition'
import HenryLogo from '../../../public/images/Henry.png'
import EducationITLogo from '../../../public/images/EducacionIT.png'


const About = () => {
  return (
    <>
        <Head> 
            <title>About Page</title>
        </Head>
        <Transition />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <div className='pt-16 z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8'>
                <AnimetedText text="My Biography" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <p className='font-medium'>
                            Hi, My name is Gonzalo Bolognese and I&apos;m a Full Stack Web Developer based in Buenos Aires, Argentina.
                        </p>
                        <p className='my-4 font-medium'>
                            I&apos;m Graduate as a Full Stack Web Developer from &nbsp; 
                            <a href='https://www.soyhenry.com/' target='_blank'>
                                <Image alt='Henry logo' src={HenryLogo} className="bg-light inline w-20 p-1.5 rounded-xl" />
                            </a>
                        </p>
                        <p className='font-medium'>
                            and graduate as a Front-End Web Developer from &nbsp; 
                            <a href="https://www.educacionit.com/" target='_blank'>
                                <Image alt='educacion IT logo' src={EducationITLogo} className='bg-light inline w-28 mb-2 rounded-xl' />
                            </a>
                        </p>
                        <p className='mb-3 font-medium'>
                            I am passionate about technology and thrive on challenges, finding creative solutions along the way.
                        </p>
                        <p className='mb-3 font-medium'>
                        With experience working on individual and team projects, I understand the value of effective communication and collaboration. I bring a strong commitment to delivering high-quality results and constantly seek innovative ways to bring ideas to life.
                        </p>
                        <p className='font-medium'>
                        I am excited to apply my skills and knowledge in a professional setting, eager to contribute to a company&apos;s success while continuously learning from experienced professionals. Let&apos;s work together to create exceptional digital experiences!
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
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                3+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Featured projects</h2>
                        </div>
                        
                    </div>
                </div>
                <Skills className="w-screen" />
                <Education />
            </div>
        </main>
    </>
  )
}

export default About 