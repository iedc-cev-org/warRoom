import { Back } from 'gsap'
import React from 'react'
import Home from '../components/Home'
import About from '@/components/About'
import Guidelines from '@/components/Guidelines'
import Footer from '@/components/Footer'
import Background from '@/components/Background'
import Registration from '@/components/Registration'

export default function page() {
  return (
      <>
      <Background/>
         <Home/>
         <About/>
         <Guidelines />
         <Registration/>
         <Footer/>
      </>
    )
}