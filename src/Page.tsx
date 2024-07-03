import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Pages/Mainpage'
import BackgroundGrid from './Components/Bgmark'

export default function Page():React.ReactNode {
  return (
    <>
        <BackgroundGrid />
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    </>
  )
}
