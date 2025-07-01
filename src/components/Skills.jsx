"use client"

import React from 'react'
import SkillItem from './SkillItem'
import SpringImg from '../../public/images/Icons/spring.png'
import JSImg from '../../public/images/Icons/js.png'
import TSImg from '../../public/images/Icons/ts.png'
import JavaImg from '../../public/images/Icons/java.png'
import NodeImg from '../../public/images/Icons/nodejs.png'
import ExpressImg from '../../public/images/Icons/express.png'
import SequelizeImg from '../../public/images/Icons/sequelize.png'
import MysqlImg from '../../public/images/Icons/mysql.png'
import PostgresqlImg from '../../public/images/Icons/postgresql.png'
import HibernateImg from '../../public/images/Icons/hibernate.png'
import SqlImg from '../../public/images/Icons/sql.png'
import PythonImg from '../../public/images/Icons/python.png'
import PandasImg from '../../public/images/Icons/pandas.png'
import RImg from '../../public/images/Icons/R.png'
import LookerImg from '../../public/images/Icons/looker.png'
import TableauImg from '../../public/images/Icons/tableau.png'
import SpreadsheetsImg from '../../public/images/Icons/spreadsheets.png'


const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-16'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight mb-24 dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]  lg:bg-circularLightlg lg:dark:bg-circularDarklg md:bg-circularLightmd md:dark:bg-circularDarkmd
        sm:bg-circularLightsm sm:dark:bg-circularDarksm
        '>

            <div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-8 shadow-dark'>
                Skills
            </div>
            <SkillItem name='JavaScript
            ' x="10vw" y="2vw" icon={JSImg}  />
            <SkillItem name='SQL' x="-10vw" y="0vw" icon={SqlImg}  />
            <SkillItem name='Java' x="-5vw" y="-8.5vw" icon={JavaImg}  />
            <SkillItem name='Pyhon' x="0vw" y="6vw" icon={PythonImg}  />
            <SkillItem name='R' x="-18vw" y="-10.5vw" icon={RImg}  />
            <SkillItem name='Looker' x="-22vw" y="16.5vw" icon={LookerImg}  />
            <SkillItem name='Pandas' x="-8vw" y="11vw" icon={PandasImg}  />
            <SkillItem name='Spring Framework' x="0vw" y="-15vw" icon={SpringImg}  />
            <SkillItem name='TypeScript' x="25vw" y="4vw" icon={TSImg}  />
            <SkillItem name='Spreadsheets' x="15vw" y="15.5vw" icon={SpreadsheetsImg}  />
            <SkillItem name='Tableau' x="-29vw" y="6vw" icon={TableauImg}  />
            <SkillItem name='Node.js' x="15vw" y="-8vw" icon={NodeImg}  />
            <SkillItem name='Express' x="15vw" y="-16vw" icon={ExpressImg}  />
            <SkillItem name='Sequilize' x="31vw" y="-16vw" icon={SequelizeImg}  />
            <SkillItem name='Hibernate'  x="-24vw" y="-23vw" icon={HibernateImg}  />
            <SkillItem name='PostgreSQL' x="-40.5vw" y="-2vw" icon={PostgresqlImg}  />
            <SkillItem name='MySQL' x="40.5vw" y="2vw" icon={MysqlImg}  />
        </div>

    </>
  )
}

export default Skills