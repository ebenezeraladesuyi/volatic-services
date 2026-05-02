// import React from 'react'
// import { TfiWorld } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

interface iCardProp {
    logo : any;
    title : string,
    details : string,
    // button : string,
}

const CardProp:React.FC<iCardProp> = ({logo, title, details}) => {
  return (
    <div className="w-65 h-85 bg-white rounded-md border drop-shadow-gray-400 drop-shadow-xl p-4 flex flex-col items-center justify-center gap-4">
      <div className="bg-gray-400 w-12 h-12 flex justify-center items-center rounded text-[30px]">
        {/* <TfiWorld className="text-[30px]"/> */}
        {logo}
      </div>

      <h4 className="font-bold text-[20px]">
        {/* Web Development */}
        {title}
      </h4>

      <h4 className="text-center">
        {/* We build website or web apps for blogs, business, schools, churches, organizations etc.  */}
        {details}
      </h4>

      <NavLink to="/contact" className="p-2 bg-gray-400 rounded-md text-white px-4 animate-pulse"> 
        <button>
            Learn More
            {/* {button} */}
        </button>
      </NavLink>
    </div>
  )
}

export default CardProp
