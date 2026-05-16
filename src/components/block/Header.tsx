// import React from 'react'

import { NavLink } from "react-router-dom"
import logo from "../../assets/vol-logo.png"

const Header = () => {
  return (
    <div className="px-10 py-2 flex justify-between bg-transparent fixed z-40  w-full">
      <img src={logo} className="w-12 rounded-[10px] " alt="" />

      <div className="flex items-center gap-5">


        <NavLink to="/" className="p-2 font-extrabold text-[19px] flex justify-center items-center text-[#3e4094] hover:text-[#e660eb] ">
            <button>Home</button>
        </NavLink>



        <NavLink to="/about" className="p-2 font-extrabold text-[19px] flex justify-center items-center text-[#3e4094] hover:text-[#e660eb] ">
            <button>About</button>
        </NavLink>

        <NavLink to="/contact" className="p-2 bg-[#e660eb] w-[120px] text-[#f3f3f8] font-bold rounded-4xl flex justify-center items-center ">
            <button>Contact</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Header
