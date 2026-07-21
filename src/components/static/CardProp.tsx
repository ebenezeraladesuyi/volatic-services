// import React from 'react'
// import { TfiWorld } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import bg from "../../assets/hero.png";

interface iCardProp {
    logo : any;
    title : string,
    details : string,
    bg: any;
    // button : string,
}

const CardProp:React.FC<iCardProp> = ({logo, title, details, bg}) => {
  return (
    <div className="w-65 min-h-90 bg-white rounded-md border drop-shadow-gray-400 drop-shadow-xl p-4 relative">

      <img src={bg} alt="" className=" rounded-2xl w-70 " />

      <div className="flex flex-col items-center justify-center gap-4 pt-6">
        <div className="text-[#e660eb] w-12 h-12 flex justify-center items-center rounded text-[30px] animate-bounce">
        {/* <TfiWorld className="text-[30px]"/> */}
        {logo}
      </div>

        <h4 className="font-bold text-[20px] text-center">
          {/* Web Development */}
          {title}
        </h4>

        <h4 className="text-center ">
          {/* We build website or web apps for blogs, business, schools, churches, organizations etc.  */}
          {details}
        </h4>

        <NavLink to="/contact" className="p-2 bg-[#e660eb] rounded-md text-white px-4 animate-pulse"> 
          <button>
              Learn More
              {/* {button} */}
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default CardProp
