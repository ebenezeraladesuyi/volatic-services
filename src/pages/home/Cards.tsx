// import React from 'react'

import { MdOutlineDeveloperMode } from "react-icons/md";
import { CardProp } from "../../components"
import { TfiWorld } from "react-icons/tfi";
import { SiCssdesignawards } from "react-icons/si";

const Cards = () => {
  return (
    <div className="w-full p-4">

      <h3 className="text-[40px] font-bold text-center">Our Services</h3>

      <div className="p-6 px-20 gap-5 flex flex-wrap justify-between items-center">
        <CardProp
          logo={<TfiWorld />}
          title="Web Development"
          details="We build website or web apps for blogs, business, schools, churches, organizations etc."
          // button="Learn More"
        />

        <CardProp
          logo={<MdOutlineDeveloperMode />}
          title="Mobile Development"
          details="We build Mobile apps for blogs, business, schools, churches, organizations etc."
          // button="Learn More"
        />


        <CardProp
          logo={<SiCssdesignawards />}
          title="Product Design"
          details="We design website or web apps for blogs, business, schools, churches, organizations etc."
          // button="Learn More"
        />


        <CardProp
          logo={<TfiWorld />}
          title="Web Development"
          details="We build website or web apps for blogs, business, schools, churches, organizations etc."
          // button="Learn More"
        />
      </div>
    </div>
  )
}

export default Cards
