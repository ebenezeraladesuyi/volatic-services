

import { MdOutlineDeveloperMode } from "react-icons/md";
import { CardProp } from "../../components";
import { TfiWorld } from "react-icons/tfi";
import { SiCssdesignawards } from "react-icons/si";
import web from "../../assets/img/webcard.jpg"

const Cards = () => {
  return (
    <div className="w-full p-4  bg-[#f5f7fa] rounded-[20px]">
      <h3 className="text-[40px] font-bold text-center text-[#3e4094]">Our Services</h3>

      <div className="p-6 px-15 gap-6 py-20 flex  justify-between items-center ">
        <CardProp
          logo={<img src={web}></img>}
          title="Web Development"
          details="We build website or web apps for blogs, business, schools, churches, organizations etc."
          // button="Learn More"
        />

        <CardProp
          logo={<MdOutlineDeveloperMode />}
          title="Mobile App Development"
          details="We build Mobile apps for blogs, business, schools, churches, organizations etc."
          // button="Learn More"
        />

        <CardProp
          logo={<SiCssdesignawards />}
          // bg={bg3}
          title="Product Design"
          details="We craft high-quality product experiences connecting brands with audiences through intuitive, impactful digital solutions."
          // button="Learn More"
        />

        <CardProp
          logo={<TfiWorld />}
          title="Desktop App Development"
          details="We build website or web apps for blogs, business, schools, churches, organizations etc."
          // button="Learn More"
        />
      </div>
    </div>
  );
};

export default Cards;
