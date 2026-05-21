// import React from 'react'

import { NavLink } from "react-router-dom";
import akeem from "../../assets/akeemPositive.png";
import the from "../../assets/academos.png";
import open from "../../assets/Rccg.png";
import walk from "../../assets/walking.png";





const WorkDone = () => {
  return (
    <div className=" w-full h-[85] grid gap-3 px-15 justify-center items-center  bg-[#e4e6eb] rounded-2xl  ">
      <h2 className=" text-center text-3xl text-blue-400 font-bold mt-6">
        OUR RECENT WORKS
      </h2>
      <p className=" text-center  text-[19px] px-10 ">
        We’ve helped businesses grow by creating modern digital solutions
        tailored to their goals. From responsive websites and mobile
        applications to branding and custom software, our work focuses on
        improving user experience, increasing visibility, and streamlining
        operations.
      </p>
      <div className="grid grid-cols-2 gap-7 p-7 flex-wrap justify-center items-center bg-[#e4e6eb] rounded-2xl ">

        <div className="p-4   rounded-2xl   shadow-2xs  bg-white">
          <div className=" flex flex-col gap-4 mt-1.5 px-3  w-full">
            <div className=" bg-[#e660eb] rounded-2xl">
              <img src={the} className="rounded-4xl" alt="" />
            </div>
            <h3 className=" text-3xl font-bold text-[#3f97a1]">The Academos</h3>
            <p className="  text-[#3f97a1]">
              this platform connects academic authors directly with students, creating a trusted marketplace where quality educational materials are easily accessible at affordable prices.
            </p>
            <div className=" pr-57.5 pt-4.25 animate-bounce">
              <NavLink
                to="/ https://theacademos.com"
                className="p-2  px-17 py-3 font-medium  bg-[#84e0fa] text-white rounded hover:bg-[#e660eb] "
              >
                <button>Overview</button>
              </NavLink>
            </div>
          </div>
        </div>

<div className="p-4   rounded-2xl   shadow-2xs  bg-white">
          <div className=" flex flex-col gap-6 mt-1.5 px-3  w-full">
            <div className=" bg-blue-400 rounded-2xl">
              <img src={akeem} className="rounded-4xl" alt="" />
            </div>
            <h3 className=" text-3xl font-bold text-[#3f97a1]">Akeem Positive</h3>
            <p className="  text-[#3f97a1]">
              This portfolio showcases Akeem Positive projects, skills, and achievements in delivering impactful technology solutions worldwide.
            </p>
            <div className=" pr-57.5 pt-4.25 animate-bounce">
              <NavLink
                to="/ https://akeempositive.com "
                className="p-2  px-17 py-3 font-medium  bg-[#84e0fa] text-white rounded hover:bg-[#e660eb] "
              >
                <button>Overview</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="p-4   rounded-2xl   shadow-2xs  bg-white">
          <div className=" flex flex-col gap-4 mt-1.5 px-3  w-full">
            <div className=" bg-blue-400 rounded-2xl">
              <img src={walk} className="rounded-4xl" alt="" />
            </div>
            <h3 className=" text-3xl font-bold text-[#3f97a1]">Walking2health</h3>
            <p className="  text-[#3f97a1]">
               Walking2health is a platform to inspire healthy lifestyles through walking, building a global community focused on wellness.
            </p>
            <div className=" pr-57.5 pt-4.25 animate-bounce">
              <NavLink
                to="/ https://walking2health.com"
                className="p-2  px-17 py-3 font-medium  bg-[#84e0fa] text-white rounded hover:bg-[#e660eb] "
              >
                <button>Overview</button>
              </NavLink>
            </div>
          </div>
        </div>


       <div className="p-4   rounded-2xl   shadow-2xs  bg-white">
          <div className=" flex flex-col gap-4 mt-1.5 px-3  w-full">
            <div className=" bg-[#e660eb] rounded-2xl">
              <img src={open} className="rounded-4xl" alt="" />
            </div>
            <h3 className=" text-3xl font-bold text-[#3f97a1]">RCCG Openheavens</h3>
            <p className="  text-[#3f97a1]">
              This platform showcases our ministry, programs, and community impact, inviting everyone to grow in faith together.
            </p>
            <div className=" pr-57.5 pt-4.25 animate-bounce">
              <NavLink
                to="/ https://www.rccgopenheavens.com/"
                className="p-2  px-17 py-3 font-medium  bg-[#84e0fa] text-white rounded hover:bg-[#e660eb] "
              >
                <button>Overview</button>
              </NavLink>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default WorkDone;
