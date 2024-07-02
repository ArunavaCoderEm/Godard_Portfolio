import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import BackgroundGrid from './Components/Bgmark'

export default function Page():React.ReactNode {
  return (
    <>
        <Navbar />
        <BackgroundGrid />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </>
  )
}
