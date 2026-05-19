import img from "../../assets/AkeenSuaraLogo-white-zV7HtKG5 (1).png"
import img1 from "../../assets/TheAcademos-logo-white-BceLjIwy.png"
// import img2 from "../../assets/DEVME-LOGO-yDLv1DHc.png"
import img3 from "../../assets/myheaithlogo.png"
// import img4 from "../../assets/vol-logo.png"
import img5 from "../../assets/swys-logo-4qhb7FMs.png"
import img6 from "../../assets/logo1-DaLM_1M2.jpg"
import img7 from "../../assets/afro-new-logo-d7G4EUt6.png"

const Testimonies = () => {
  return (
    <div className="bg-[#F4F8FB] ">
      <div className="justify-center text-center items-center">
      <h2 className="text-xl pt-5">Testimonial</h2>
      <h1 className="text-3xl text-blue-300">Our Trusted Client</h1>
      <p className="text-xs max-w-4xl text-center pl-80">Our mission is to drive progress and enhance the lives of our client by delivering superior product and services that exceeded expectations</p>
      </div>

      <div className="flex gap-7 p-10 ">
      <div className=" bg-white p-6 rounded-4xl ">
       <img src={img7} alt="" width={100} className="rounded-4xl"/>
       {/* <h2>Olofinte Joseph</h2> */}
       <p className="pt-3">“The professionalism and creativity from Volatic were exceptional. They paid attention to every detail and delivered exactly what we wanted.</p>
      </div>

      <div className="bg-blue-300 p-6 rounded-4xl  text-white rotate-2">
       <img src={img1} alt="" width={150} className="rounded-4xl"/>
       {/* <h2 className="text-xl text-center font-bold ">Olofinte Joseph</h2> */}
       <p className="pt-2">"Working with volatic was smooth from start to finish. They listened to our ideas, added creative direction, and built a website that increased both our traffic and customer engagement"</p>
      </div>

      <div className="bg-white p-6 rounded-4xl text-w ">
       <img src={img5} alt="" width={150} className="rounded-4xl"/>
       {/* <h2 className="font-bold text-center text-xl">Olofinte Joseph</h2> */}
       <p className="pt-3">”Professional, reliable, and very skilled. The website was not only beautiful but also optimized for mobile devices and performance. Exceptional service from start to finish.”</p>
      </div>
       </div>

<div className="flex gap-7 p-10 ">
      <div className="bg-white p-6 rounded-4xl">
       <img src={img6} alt="" width={80} className="rounded-4xl"/>
       {/* <h2 className="font-semibold text-center text-xl">Ayoka consult</h2> */}
       <p className="pt-3">“Volatic delivered a stunning website that not only looks amazing but also performs excellently across all devices. We’ve already seen an increase in customer engagement.”</p>
      </div>

      <div className="bg-blue-300 p-6 rounded-4xl text-white rotate-2">
       <img src={img} alt="" width={80} className="rounded-4xl"/>
       {/* <h2>Olofinte Joseph</h2> */}
       <p className="pt-3">“From the first consultation to the final launch, Volatic showed incredible professionalism and creativity. Our new website now feels modern, fast, and user-friendly.”</p>
      </div>

      <div className="bg-white p-6 rounded-4xl  animate-scroll">
        <div className="flex">
       <img src={img3} alt="" width={80}  className="rounded-4xl justify-end"/>
       <h3 className="pt-15 font-bold text-blue-950">MyHealthSureNG</h3></div>
       {/* <h2 className="text-taupe-950">Olofinte Joseph</h2> */}
       <p className="pt-3">“Choosing Volatic was one of the best decisions for our company. Their design quality and customer support were outstanding.”</p>
      </div>

    
</div>

  
    </div>
  )
}

export default Testimonies