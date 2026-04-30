// import React from 'react'

import { NavLink } from "react-router-dom"
import logo from "../../assets/vol-logo.png"

const Header = () => {
  return (
    <div className="px-10 py-2 flex justify-between">
      <img src={logo} className="w-16" alt="" />

      <div className="flex items-center gap-5">
        <NavLink to="/about" className="p-2 bg-black text-white rounded">
            <button>About</button>
        </NavLink>


        <NavLink to="/contact" className="p-2 bg-black text-white rounded ">
            <button>Contact</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Header
