// import React from 'react'

import { CiMail } from "react-icons/ci"
import { IoCallOutline, IoLocationOutline } from "react-icons/io5"



const Contact = () => {
  return (
    <div>
    <div className="w-full min-h-7 pt-20 bg-blue-800">
    <div  className="font-extrabold text-[50px]  flex justify-center text-white">
      Start a Conversation With Us Today 
    </div>
    <h1 className="font-light text-[15px] text-white flex justify-center">Let’s bring your idea to life</h1>
    <h1 className=" text-[20px] text-white flex justify-center py-6"> From project ideas and vision to
       future possibilities, we are here to help you <br/>
      create impactful digital solution  and also shape the future.</h1>
    </div>
    <div className="bg-[#b0cbdf]">
    <h1 className=" pt-7 px-10 font-extrabold text-4xl">
      Contact Us
    </h1>
    <h1 className="text-[15px]  pt-4 px-10"> Your information is securely handled to enable us contact you <br/>
        and discuss your project in detail. </h1>

        <h1 className="px-10 pt-4 flex items-center gap-1.5"> <span className="text-3xl text-blue-900
         bg-blue-200 rounded-[7px] w-8 h-8 hover:animate-bounce"> <CiMail/></span> 
        <span className="text-blue-800">  Email:</span> volaticacademy@gmail.com</h1>
        <h1 className="px-10 pt-4 flex items-center gap-1.5"> <span className="text-3xl
         text-blue-900 bg-blue-200 rounded-[7px] w-8 h-8 hover:animate-bounce"> <IoCallOutline/></span> <span className="text-blue-800"> Phone:</span>
          +234 (0) 703 675 0857 / +234
         (0) 814 890 537</h1>
        <h1 className="px-10 pt-4 flex items-center gap-1.5"> <span className="text-3xl text-blue-900
        bg-blue-200 rounded-[7px] w-8 h-8 hover:animate-bounce">
          <IoLocationOutline/></span> <span className="text-blue-800"> Office Address:</span> 3, Nova Road 3,
         Adebayo, Ado-Ekiti, Ekiti State</h1>

          <div className="flex justify-center">
         <div className="mx-10 my-10  w-150 min-h-100 border-2 border-gray-400 rounded-2xl
          shadow-gray-500 shadow-2xl bg-[#6096bf] animate-pulse">
            <div>
            <h1 className="mx-8 mt-10 text-[18px] font-medium text-white"> First name:  </h1>
            <input className="border 
             border-gray-300 mx-8 mt-2 rounded-[7px] w-130 h-10 placeholder:text-[#c4c9dc] placeholder:px-7 
             placeholder:text-[15px]" type="text" placeholder="first name"/>

              <h1 className="mx-8 mt-8 text-[18px] font-medium text-white"> Last name:  </h1>
              <input className="border
             border-gray-300 mx-8 mt-2 rounded-[7px] w-130 h-10 placeholder:text-[#BDCAE6] placeholder:px-7 
             placeholder:text-[15px]" type="text" placeholder="last name"/>

              <h1 className="mx-8 mt-8 text-[18px] font-medium text-white"> Email:  </h1>
              <input className="border
             border-gray-300 mx-8 mt-2 rounded-[7px] w-130 h-10 placeholder:text-[#BDCAE6] placeholder:px-7 
             placeholder:text-[15px]" type="email" placeholder="you@mail.com"/>

              <h1 className="mx-8 mt-8 text-[18px] font-medium text-white"> Phone number:  </h1>
              <input className="border
             border-gray-300 mx-8 mt-2 rounded-[7px] w-130 h-10 placeholder:text-[#BDCAE6] placeholder:px-7 
             placeholder:text-[15px]" type="string" placeholder="+234 000 000 0000"/>

              <h1 className="mx-8 mt-8 text-[18px] font-medium text-white"> Message:  </h1>
              <input className="border border-gray-300 mx-8 mt-2 rounded-[7px] w-130 h-30
               placeholder:text-gray-200 placeholder:px-7 
             placeholder:text-[15px]" type="text" placeholder=""/>

             <button className="w-130 rounded-[7px] text-[#5C76BC] font-medium h-10 border
              border-blue-400 bg-white mx-8 my-10">Send message </button>
            </div>
            </div>
         </div>
         </div>
    </div>
  )
}

export default Contact
