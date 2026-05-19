import  logo from  "../../assets/vola2-D73dZL37-removebg-preview.png"

const Footer = () => {
  return (
    <div className="bg-[#cfedf8]">
    <div className=" flex  gap-6   p-15">
      
      <div>
      <img src={logo} alt="" width={150}/>
      <h1 className="max-w-3xl pt-4">We are a trusted technology and printing company delivering innovative solutions to clients both locally and internationally. With a strong blend of professionalism, creativity, and proven expertise, we are committed to delivering exceptional results that exceed expectations.</h1>
<div className="pt-2.5">
     <h1>Phone:</h1> <span>+234 (0) 703 675 0857</span>
     <h1>Address:</h1> <span>3, Nova Road 3, Adebayo, Ado-Ekiti, Ekiti State</span>
     <h1>Email:</h1> <span>volaticacademy@gmail.com</span>
     </div>
     </div>

     <div className="mt-15 gap-8 ">
      <h1>Working Hours</h1>
       <hr className="  border-[2px] w-[80px]"/>
    <div className="flex gap-14 mt-10">
      <h2 className="">Monday</h2>
      <p>9:00am - 5:00pm</p>
</div>
  <hr className="  border-[1px] w-[280px]"/>

<div className="flex gap-14 mt-4">
      <h2>Tuesday</h2>
      <p>9:00am - 5:00pm</p>
      </div>
      <hr className="  border-[1px] w-[280px]"/>

<div className="flex gap-14 mt-4">
      <h2>Wednesday</h2>
      <p>9:00am - 5:00pm</p>
      </div>
    <hr className="  border-[1px] w-[280px]"/>

<div className=" flex gap-14 mt-4">
      <h2>Thursday</h2>
      <p>9:00am - 5:00pm</p>
      </div>
       <hr className="  border-[1px] w-[280px]"/>

      <div className="flex gap-14 mt-4">
      <h2>Friday</h2>
      <p>9:00am - 5:00pm</p>
      </div>
   <hr className="  border-[1px] w-[280px]"/>
      </div>
     
     </div>
      <div>
 <p className="text-center">Copyright © 2026 volatic services All Right Reserved.</p>
  </div>
     </div>
  
  )
}

export default Footer
