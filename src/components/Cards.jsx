import React from 'react'
import Image from 'next/image'



const Cards = ({img, title, text, className}) => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className="group h-[45rem] w-[34rem] [perspective:1000px]">
        <div className="relative h-full w full rounded-2xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image src={img} alt="error" className='h-full w-full rounded-xl object-cover shadow-xl shadow-dark/40'/>
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-dark/90 px-4 text-center text-light [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-6xl font-bold">{title}</h1>
              {text.map((t, index) => (
                <p key={index} className={className}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards