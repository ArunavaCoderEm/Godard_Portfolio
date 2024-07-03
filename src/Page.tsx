import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Pages/Mainpage'
import BackgroundGrid from './Components/Bgmark'
import PrivacyPolicyPage from './Pages/Privacy'

export default function Page():React.ReactNode {
  return (
    <>
        <BackgroundGrid />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/privacy' element={<PrivacyPolicyPage />} />
        </Routes>
    </>
  )
}
