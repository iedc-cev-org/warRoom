import { Back } from 'gsap'
import React from 'react'
import Home from '../components/Home'
import About from '@/components/About'
import Guidelines from '@/components/Guidelines'
import Footer from '@/components/Footer'

export default function page() {
  return (
      <>
         <Home/>
         <About/>
         <Guidelines />
         <Footer/>
      </>
    )
}