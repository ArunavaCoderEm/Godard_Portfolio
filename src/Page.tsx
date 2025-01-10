import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Pages/Mainpage'
import BackgroundGrid from './Components/Bgmark'
import PrivacyPolicyPage from './Pages/Privacy'
import Error_404 from './Pages/Error_404'

export default function Page():React.ReactNode {
  return (
    <>
        <BackgroundGrid />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/projectpage/:id/:name' element={<MainPage />} />
            <Route path='/privacy' element={<PrivacyPolicyPage />} />
            <Route path='/*' element={<Error_404 />} />
        </Routes>
    </>
  )
}
