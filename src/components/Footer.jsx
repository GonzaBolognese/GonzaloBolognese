import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light content-end
    px-8 sm:text-base'>
        <div className='py-8 flex items-center justify-between lg:flex-col lg:py-6 sm:text-sm'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2 sm:text-sn'>
            Build with&nbsp;<Link href="/">Gonzalo Bolognese</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer