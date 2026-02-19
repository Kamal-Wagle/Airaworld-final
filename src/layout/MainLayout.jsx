import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../compoment/common/Navbar.jsx'
import Footer from '../compoment/common/Footer.jsx'
import Top from '../compoment/common/Top.jsx'

const MainLayout = () => {
  return (
    < >
      <Top />
      <Navbar />
      <Outlet />
      <Footer />
    </ >
  )
}

export default MainLayout
