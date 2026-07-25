// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"
import ScrollToTop from "../components/static/ScrollToTop"

const ServicesLayout = () => {
  return (
    <div>
      <ScrollToTop />
        <Header />

        <Outlet />

        <Footer />
      
    </div>
  )
}

export default ServicesLayout
