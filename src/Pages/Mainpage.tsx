import React from 'react'
import Hero from '../Components/Hero'
import Exp from '../Components/Exp'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import MinimalSocialsFooter from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function MainPage():React.ReactNode {
  return (
    <>
    <Navbar 
      home="#"
      about="#about"
      skills="#skills"
      contact="#contact"
      projects="#projects"
    />
    <Hero />
    <Exp />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <MinimalSocialsFooter />
    </>
  )
}
