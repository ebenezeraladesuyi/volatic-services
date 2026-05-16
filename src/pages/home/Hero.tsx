import { NavLink } from "react-router-dom";
import her from "../../assets/hero-img.png";
import Traction from "../../components/static/Traction";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="">
      <div className="font-extrabold py-15 w-full min-h-screen flex   items-center justify-center bg-gray-200 sm:px-6  ">
        <div className="bg-[#2564d9] rounded-4xl w-307.5 px-15 flex justify-center items-center ">
          <div className="flex justify-center items-center bg-[#f6f6f7] rounded-3xl h-120  ">
            <img src={her} alt="" className=" w-137.5" />
          </div>
          <div className="flex  justify-center flex-col px-17.5 gap-3.75  min-w-32.5 min-h-screen ">
            <h1 className=" text- text-[40px] w-97.5 font-semibold text-white   ">
              Smart Technology Services for a{" "}
              <span>
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Smarter Future")
                      .pauseFor(1500)
                      .deleteAll()

                      .typeString("Advance Future")
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </h1>
            <p className="w-112.5 text-gray-200 font-medium text-[17px]">
              We provide innovative digital solutions that help businesses
              adapt, grow, and succeed in today’s fast-changing world. From
              modern web development to scalable software and IT solutions, we
              combine technology and creativity to deliver results that matter.
            </p>
            <div className="flex justify-center items-center gap-3.25 ">
              <div className=" pr-57.5 pt-4.25 animate-bounce">
                <NavLink
                  to="/contact"
                  className="p-2  px-17 py-3 font-medium  bg-[#84e0fa] text-white rounded hover:bg-[#e660eb] "
                >
                  <button>Contact</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Traction />
    </div>
  );
};

export default Hero;
