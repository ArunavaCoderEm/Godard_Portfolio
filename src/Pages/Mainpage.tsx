import React from 'react'
import Hero from '../Components/Hero'
import Exp from '../Components/Exp'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import MinimalSocialsFooter from '../Components/Footer'
import TestimonialSlider from '../Components/Testimonials'

export default function MainPage():React.ReactNode {
  return (
    <>
    <Hero />
    <Exp />
    <Projects />
    <About />
    <Skills />
    <TestimonialSlider />
    <Contact />
    <MinimalSocialsFooter />
    </>
  )
}
