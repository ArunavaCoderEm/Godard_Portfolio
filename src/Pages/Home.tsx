import React from 'react'
import Hero from '../Components/Hero'
import Exp from '../Components/Exp'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

export default function Home():React.ReactNode {
  return (
    <>
    <Hero />
    <Exp />
    <About />
    <Skills />
    <Projects />
    </>
  )
}
