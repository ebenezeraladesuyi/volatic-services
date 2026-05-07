// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer } from "../components"
// import { Footer, Header } from "../components"

const HomeLayout = () => {
  return (
    <div>
        {/* <Header /> */}

        <Outlet />

        <Footer />
      
    </div>
  )
}

export default HomeLayout
