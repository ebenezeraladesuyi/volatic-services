// import React from 'react'

import { MdOutlineDeveloperMode } from "react-icons/md";
import { CardProp } from "../../components";
import { TfiWorld } from "react-icons/tfi";
import { SiCssdesignawards } from "react-icons/si";
import bg1 from "../../assets/desktop.jpg";
import bg2 from "../../assets/mobileapp.jpg";
import bg3 from "../../assets/ui-ux.jpg";

import bg4 from "../../assets/webcard.jpg";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Cards = () => {
  return (
    <div className="w-full p-4  bg-[#f5f7fa] rounded-[20px]">
      <h3 className="text-[40px] font-bold text-center text-[#3e4094]">Our Services</h3>

      <div className="p-6 px-15 gap-6 py-20 flex  justify-between items-center ">
        <CardProp
          logo={<TbDeviceDesktopCode />
}
          bg={bg1}
          title="Desktop Apps Development"
          details="We build reliable desktop applications improving productivity, streamlining workflows, and delivering smooth cross-platform performance."
          // button="Learn More"
        />

        <CardProp
          logo={<MdOutlineDeveloperMode />}
          bg={bg2}
          title="Mobile Apps Development"
          details="We build modern mobile apps with seamless experiences, optimized performance, and secure functionality everywhere."
          // button="Learn More"
        />

        <CardProp
          logo={<SiCssdesignawards />}
          bg={bg3}
          title="Product Design"
          details="We craft high-quality product experiences connecting brands with audiences through intuitive, impactful digital solutions."
          // button="Learn More"
        />

        <CardProp
          logo={<TfiWorld />}
          bg={bg4}
          title="Web Development"
          details="We develop tailored web applications enhancing productivity, simplifying business processes, and supporting long-term business growth."
          // button="Learn More"
        />
      </div>
    </div>
  );
};

export default Cards;
