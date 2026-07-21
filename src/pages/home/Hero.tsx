import { NavLink } from "react-router-dom"
import { Header } from "../../components"


const Hero = () => {
  return (
    <div>
      <Header/>
       <div className=" font-extrabold w-full min-h-screen  px-10  flex items-center
              bg-[url('src/assets/img/HeroBG.jpg')] bg-cover bg-center ">
      <div className=" ">
          <h1 className="pb-6 text-[40px] text-[#00AFEF]">
          Powering Digital Progress <br/> <span className="text-white">with Tech for</span>  <br/> Global Advancement
        </h1>
        <p className="pb-6 text-[#D8D0D0]" >Transform the way your business operate with powerful software <br/> 
          built for growth, efficiency, and scalability.Connect with customers<br/>
          and suppliers effortlessly and scale without limit.</p>
          <div className="flex gap-10 ">
            <NavLink to="/contact">  <button className="w-27.5 h-10
             bg-white rounded-[7px]">Contact Us </button> </NavLink>
             <NavLink to="/about">  <button className="w-27.5 h-10
             bg-white rounded-[7px]">Services </button> </NavLink>
          </div>
      </div>
    </div>

    </div>
   
  )
}

export default Hero
