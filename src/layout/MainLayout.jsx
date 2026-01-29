import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../compoment/common/Navbar.jsx'
import Footer from '../compoment/common/Footer.jsx'
import Top from '../compoment/common/Top.jsx'
import AnimateCursor from '../compoment/Animated Crousel/AnimateCursor.jsx'


const MainLayout = () => {
  return (
    < >
    <AnimateCursor/>
      <Top/>
      <Navbar/>
      <Outlet/>  
      <Footer/>
    </ >
  )
}

export default MainLayout
