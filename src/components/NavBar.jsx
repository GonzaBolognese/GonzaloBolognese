"use client"

import Logo from "./Logo"
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon } from "./Icons"
import { motion } from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import Link from "next/link"
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from "react"
import { useRouter } from "next/navigation"

const Custom = ({href, title, className= "" }) => {
  const pathname = usePathname()

  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
        h-[1px] inline-block bg-dark
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? "w-full" : "w-0"}
        dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobile = ({href, title, className= "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return(
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}

      <span
        className={`
        h-[1px] inline-block bg-light
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? "w-full" : "w-0"}
        dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen)
  }
  
  return (
    <header 
    className='bg-light  dark:bg-dark border-b-2 border-solid border-dark  dark:text-light dark:border-light 
    w-full px-32 py-8 font-medium flex items-center justify-between sticky top-0 z-10 lg:px-16 md:px-12 sm:px-8'>
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

     <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <Custom href="/" title="Home" className="mr-4" />
          <Custom href="/about" title="Sobre Mi" className="mx-4" />
          <Custom href="/projects" title="Proyectos" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://www.linkedin.com/in/gonzalo-bolognese/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-8 mr-3"
          >
            <LinkedinIcon />
          </motion.a>
          <motion.a href="https://github.com/GonzaBolognese" target={"_blank"} title="Github" 
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-9 ml-3"
          >
            <GithubIcon />
          </motion.a>

          <button
          onClick={() => setMode(mode ==="light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1 "
          >
            {
              mode === "dark" ?
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
          </button>

        </nav>
     </div>

     {
      isOpen ?
      <motion.div
      initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
      animate={{scale:1, opacity:1}}
      className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32 
      ">
         <nav className="flex items-center flex-col justify-center">
           <CustomMobile href="/" title="Home" className="" toggle={handleClick}/>
           <CustomMobile href="/about" title="About" className="" toggle={handleClick}/>
           <CustomMobile href="/projects" title="Projects" className="" toggle={handleClick}/>
         </nav>
 
         <nav className="flex items-center justify-center flex-wrap mt-2">
           <motion.a href="https://www.linkedin.com/in/gonzalo-bolognese/" target={"_blank"}
           whileHover={{y:-2}}
           whileTap={{scale:0.9}}
           className="w-8 mr-3 sm:mx-1"
           >
             <LinkedinIcon />
           </motion.a>
           <motion.a href="https://github.com/GonzaBolognese" target={"_blank"} title="Github" 
           whileHover={{y:-2}}
           whileTap={{scale:0.9}}
           className="w-9 ml-3 bg-light rounded-full dark:bg-dark sm:mx-1"
           >
             <GithubIcon />
           </motion.a>
 
           <button
           onClick={() => setMode(mode ==="light" ? "dark" : "light")}
           className="ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1"
           >
             {
               mode === "dark" ?
               <SunIcon className={"fill-dark"} />
               : <MoonIcon className={"fill-dark"} />
             }
           </button>
 
         </nav>
      </motion.div>

      : null
     }

        <div className="absolute left-[50%] top-5 lg:top-2 translate-x-[-50%]">
          <Logo />
        </div>
    </header>
  )
}

export default NavBar