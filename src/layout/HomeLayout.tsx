// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"
import ScrollToTop from "../components/static/ScrollToTop"
// import { Footer, Header } from "../components"

const HomeLayout = () => {
  return (
    <div>
      <ScrollToTop />
        <Header />

        <Outlet />

        <Footer />
      
    </div>
  )
}

export default HomeLayout
