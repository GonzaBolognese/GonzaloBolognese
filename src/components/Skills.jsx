"use client"

import React from 'react'
import SkillItem from './SkillItem'
import HtmlImg from '../../public/images/Icons/html.png'
import CssImg from '../../public/images/Icons/css.png'
import TailwindImg from '../../public/images/Icons/tailwind.png'
import BootstrapImg from '../../public/images/Icons/bootstrap.png'
import SpringImg from '../../public/images/Icons/spring.png'
import JSImg from '../../public/images/Icons/js.png'
import TSImg from '../../public/images/Icons/ts.png'
import NextImg from '../../public/images/Icons/nextjs.png'
import ReactImg from '../../public/images/Icons/react.png'
import JavaImg from '../../public/images/Icons/java.png'
import NodeImg from '../../public/images/Icons/nodejs.png'
import ExpressImg from '../../public/images/Icons/express.png'
import SequelizeImg from '../../public/images/Icons/sequelize.png'
import MysqlImg from '../../public/images/Icons/mysql.png'
import PostgresqlImg from '../../public/images/Icons/postgresql.png'
import PHPImg from '../../public/images/Icons/php.png'
import HibernateImg from '../../public/images/Icons/hibernate.png'


const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-16'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight mb-24 dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]  lg:bg-circularLightlg lg:dark:bg-circularDarklg md:bg-circularLightmd md:dark:bg-circularDarkmd
        sm:bg-circularLightsm sm:dark:bg-circularDarksm
        '>

            <div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-8 shadow-dark'>
                Web
            </div>
            <SkillItem name='JavaScript' x="10vw" y="2vw" icon={JSImg} experience="Advanced" />
            <SkillItem name='HTML' x="-10vw" y="0vw" icon={HtmlImg} experience="Intermediate" />
            <SkillItem name='Java' x="-5vw" y="-8.5vw" icon={JavaImg} experience="Advanced" />
            <SkillItem name='PHP' x="0vw" y="6vw" icon={PHPImg} experience="Basic" />
            <SkillItem name='CSS' x="-18vw" y="-10.5vw" icon={CssImg} experience="Intermediate" />
            <SkillItem name='Bootstrap' x="-22vw" y="16.5vw" icon={BootstrapImg} experience="Intermediate" />
            <SkillItem name='React' x="-8vw" y="11vw" icon={ReactImg} experience="Advanced" />
            <SkillItem name='Spring Framework' x="0vw" y="-15vw" icon={SpringImg} experience="Advanced" />
            <SkillItem name='TypeScript' x="25vw" y="4vw" icon={TSImg} experience="Basic" />
            <SkillItem name='Tailwind CSS' x="15vw" y="15.5vw" icon={TailwindImg} experience="Intermediate" />
            <SkillItem name='Next.js' x="-29vw" y="6vw" icon={NextImg} experience="Intermediate" />
            <SkillItem name='Node.js' x="15vw" y="-8vw" icon={NodeImg} experience="Advanced" />
            <SkillItem name='Express' x="15vw" y="-16vw" icon={ExpressImg} experience="Advanced" />
            <SkillItem name='Sequilize' x="31vw" y="-16vw" icon={SequelizeImg} experience="Intermediate" />
            <SkillItem name='Hibernate'  x="-24vw" y="-23vw" icon={HibernateImg} experience="Intermediate" />
            <SkillItem name='PostgreSQL' x="-40.5vw" y="-2vw" icon={PostgresqlImg} experience="Intermediate" />
            <SkillItem name='MySQL' x="40.5vw" y="2vw" icon={MysqlImg} experience="Intermediate" />
        </div>

    </>
  )
}

export default Skills