// import React from 'react'

import { NavLink } from "react-router-dom"
import Company from "../../assets/img/about.jpg"
import Team from "./Team"

const About = () => {
  return (
    <div>
    <div className="font-extrabold w-full min-h-0.7 bg-black text-white py-20">
      <h1 className="text-[60px] flex justify-center">
        About Us
      </h1>
      <h3 className="flex justify-center font-light py-7"> 
        Volatic is a forward-thinking digital solutions company committed to helping <br/>individuals,
         brands, and businesses thrive in today’s technology-driven world. Through <br/>creativity, 
         innovation, and strategic thinking, we deliver impactful digital experiences<br/> that solve real
          problems and create lasting value.</h3>
          <NavLink to="/contact" className=" flex justify-center py-6">
          <button className="flex justify-center items-center w-30 h-10 rounded-[7px] border-blue-200 border 
          hover:text-blue-200 "> Contact Us</button>
          </NavLink>
</div>
    <div className="flex justify-center gap-20">

    <div>
      <h1 className=" flex justify-center pt-20 text-[40px] font-bold text-[#00AFEF]"> 
        Our Vision </h1>
        <h3 className="flex justify-center pt-3">Our vision is to build a future where businesses of all sizes can leverage<br/>
         technology to unlock their full potential. Through innovation, creativity, <br/>
         and excellence, we aim to redefine digital experiences and become a <br/>trusted partner 
         in driving sustainable growth, We aim to be recognized <br/> for delivering solutions that inspire progress,
         efficiency, and long-term <br/>success.</h3>

          <h1 className=" flex justify-center pt-5 text-[40px] font-bold text-[#00AFEF]"> 
        Our Mision </h1>
        <h3 className="flex justify-center pt-3">Our mission is to help businesses and organizations thrive
           in the digital<br/>
         age by delivering innovative, scalable, and user-focused technology <br/>solutions.
        Through strategic thinking, creative design, and modern <br/>development practices,
        we empower brands to grow, improve efficiency,<br/>  and create meaningful  
         digital experiences that drive lasting impact.</h3>
    </div>
      <img className=" mt-30 w-110 h-90 rounded-[15px]" src={Company}  alt="" />
    </div>
    <Team/>
</div>

  )
}

export default About
