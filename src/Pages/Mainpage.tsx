import React from 'react'
import Hero from '../Components/Hero'
import Exp from '../Components/Exp'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import TestimonialSlider from '../Components/Testimonials'
import Experience from './Experience'
import Blogs from './Blogs'

export default function MainPage():React.ReactNode {
  return (
    <>
    <Hero />
    <Exp />
    <Projects />
    <Experience />
    <About />
    <Blogs />
    <Skills />
    <TestimonialSlider />
    <Contact />
    </>
  )
}
