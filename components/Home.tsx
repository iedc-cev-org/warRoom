import React from 'react'
import Image from 'next/image'

export default function 
() {
  return (
    <div className='relative min-h-screen text-white overflow-hidden'>
      <div className='absolute top-0 left-0 h-full w-full bg-black/60 inset-0 z-10'/>
      <video
        src='/home.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='md:hidden absolute top-0 left-0 h-full w-full object-cover'
      />
      <Image
        src='/homi.jpg'
        alt='Overlay'
        fill
        className='md:block hidden absolute top-0 left-0 h-full w-full object-cover'
      />

      <div className='absolute h-full w-full top-0 left-0 z-30 px-2 md:px-4 lg:px-8'>
        <div className="h-20 flex items-center" ><div>
          <Image src='/iedc.png' alt='Logo' width={120} height={100} />
        </div>
        </div>
        <div className='flex justify-center items-center h-[calc(100vh-5rem)]'>
          <p className='text-6xl md:text-7xl font-nebula'>WarRoom</p>
        </div>
      </div>
    </div>
  )
}
