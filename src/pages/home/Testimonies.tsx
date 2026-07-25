import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "../../assets/DEVME-Icon.png";
import img1 from "../../assets/TheAcademos-logo-white-BceLjIwy.png";
import img3 from "../../assets/myheaithlogo.png";
import img5 from "../../assets/swys-logo-4qhb7FMs.png";
import img6 from "../../assets/logo1-DaLM_1M2.jpg";
import img7 from "../../assets/afro-new-logo-d7G4EUt6.png";

const Testimonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      image: img7,
      name: "AfroScholarHub",
      role: "EdTech",
      text: "The professionalism and creativity from Volatic were exceptional. They paid attention to every detail and delivered exactly what we wanted.",
      rating: 5,
      color: "bg-white"
    },
    {
      id: 2,
      image: img1,
      name: "The Academos",
      role: "EdTech",
      text: "Working with Volatic was smooth from start to finish. They listened to our ideas, added creative direction, and built a website that increased both our traffic and customer engagement.",
      rating: 5,
      color: "bg-[#3e4094]"
    },
    {
      id: 3,
      image: img5,
      name: "SWYS",
      role: "Youth Organization",
      text: "Professional, reliable, and very skilled. The website was not only beautiful but also optimized for mobile devices and performance. Exceptional service from start to finish.",
      rating: 5,
      color: "bg-white"
    },
    {
      id: 4,
      image: img6,
      name: "Ayoka Consult",
      role: "Consulting Firm",
      text: "Volatic delivered a stunning website that not only looks amazing but also performs excellently across all devices. We've already seen an increase in customer engagement.",
      rating: 5,
      color: "bg-white"
    },
    {
      id: 5,
      image: img,
      name: "DevMe",
      role: "Socail Enterprise",
      text: "From the first consultation to the final launch, Volatic showed incredible professionalism and creativity. Our new website now feels modern, fast, and user-friendly.",
      rating: 5,
      color: "bg-[#3e4094]"
    },
    {
      id: 6,
      image: img3,
      name: "MyHealthSureNG",
      role: "Health Tech",
      text: "Choosing Volatic was one of the best decisions for our company. Their design quality and customer support were outstanding.",
      rating: 5,
      color: "bg-white"
    }
  ];

  const visibleTestimonials = 3;
  const totalSlides = Math.ceil(testimonials.length / visibleTestimonials);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * visibleTestimonials;
    return testimonials.slice(start, start + visibleTestimonials);
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3e4094] mb-4">
            Our Trusted <span className="text-[#e660eb]">Clients</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our mission is to drive progress and enhance the lives of our clients by 
            delivering superior products and services that exceed expectations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${testimonial.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#3e4094]/10 relative overflow-hidden group`}
            >
              {/* Quote Icons */}
              <FaQuoteLeft className={`absolute top-4 left-4 text-4xl ${
                testimonial.color === "bg-[#3e4094]" 
                  ? "text-white/10" 
                  : "text-[#3e4094]/5"
              }`} />
              <FaQuoteRight className={`absolute bottom-4 right-4 text-4xl ${
                testimonial.color === "bg-[#3e4094]" 
                  ? "text-white/10" 
                  : "text-[#3e4094]/5"
              }`} />

              {/* Client Logo */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-3 border ${
                    testimonial.color === "bg-[#3e4094]" 
                      ? "border-white/20" 
                      : "border-[#3e4094]/10"
                  }`}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className={`font-bold ${
                      testimonial.color === "bg-[#3e4094]" 
                        ? "text-white" 
                        : "text-[#3e4094]"
                    }`}>
                      {testimonial.name}
                    </h3>
                    <p className={`text-sm ${
                      testimonial.color === "bg-[#3e4094]" 
                        ? "text-gray-300" 
                        : "text-gray-500"
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={`w-4 h-4 ${
                      testimonial.color === "bg-[#3e4094]" 
                        ? "text-yellow-400" 
                        : "text-[#e660eb]"
                    }`} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`text-sm leading-relaxed ${
                  testimonial.color === "bg-[#3e4094]" 
                    ? "text-gray-200" 
                    : "text-gray-700"
                }`}>
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between gap-4">
          {/* Dot Indicators */}
          <div className="flex gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-[#3e4094]" 
                    : "w-2 bg-[#3e4094]/30 hover:bg-[#3e4094]/50"
                }`}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-[#3e4094]/20 hover:border-[#3e4094] hover:bg-[#3e4094]/5 transition-all duration-300 hover:scale-110"
            >
              <FaArrowLeft className="w-4 h-4 text-[#3e4094]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-[#3e4094]/20 hover:border-[#3e4094] hover:bg-[#3e4094]/5 transition-all duration-300 hover:scale-110"
            >
              <FaArrowRight className="w-4 h-4 text-[#3e4094]" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Join our growing family of satisfied clients
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-[#3e4094] text-white font-bold rounded-xl hover:bg-[#e660eb] transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonies;