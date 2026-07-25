import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
//   FaArrowRight, 
  FaUsers, 
  FaBuilding, 
  FaRocket, 
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle
} from "react-icons/fa";
// import { NavLink } from "react-router-dom";

const Target = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images (using placeholder images - replace with actual images)
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      alt: "Team collaborating in modern office"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      alt: "Developers working together"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      alt: "Professionals in meeting"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
      alt: "Business team discussion"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const targetCustomers = [
    {
      icon: FaBuilding,
      title: "Enterprises & Corporations",
      description: "You've built a great business and proven your product. Now it's time to scale with custom software solutions, cloud infrastructure, and digital transformation strategies that drive growth.",
      benefits: [
        "Digital transformation consulting",
        "Enterprise-grade solutions",
        "Scalable cloud infrastructure",
        "Security & compliance frameworks"
      ]
    },
    {
      icon: FaRocket,
      title: "Startups & Scale-ups",
      description: "You focus on innovating, prototyping, and launching your amazing new idea. We handle the technology, infrastructure, and scalability so you can focus on what matters most.",
      benefits: [
        "Rapid MVP development",
        "Scalable architecture",
        "Tech stack optimization",
        "Funding-ready solutions"
      ]
    },
    {
      icon: FaChartLine,
      title: "Growing Businesses",
      description: "You have a proven product and loyal customers. Now extend your digital presence, enhance customer experience, and expand into new markets with our technology expertise.",
      benefits: [
        "Custom software solutions",
        "UI/UX optimization",
        "System modernization",
        "Market expansion support"
      ]
    },
    {
      icon: FaUsers,
      title: "Non-Profit & Social Impact",
      description: "Making a difference in the world requires efficient technology. We help mission-driven organizations build platforms that maximize impact and reach.",
      benefits: [
        "Impact-focused solutions",
        "Cost-effective technology",
        "Community engagement platforms",
        "Donation & volunteer systems"
      ]
    }
  ];

  return (
    <section className="pt-10 pb-5 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
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
            Who We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3e4094] mb-4">
            <span className="text-[#3e4094]">Partners in</span>
            <br />
            <span className="bg-linear-to-r from-[#3e4094] to-[#e660eb] bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We partner with organizations across every stage of growth, delivering 
            technology solutions that solve real problems and create lasting value.
          </p>
        </motion.div>

        {/* Image Carousel & Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-5">
          
          {/* Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#3e4094]/10">
              {/* Main Image */}
              <div className="aspect-4/3 w-full">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#3e4094]/60 via-transparent to-transparent"></div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-8 bg-white" 
                        : "w-4 bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Slide Counter */}
              <div className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-sm font-medium">
                {currentSlide + 1} / {slides.length}
              </div>

              {/* Testimonial Quote Overlay */}
              {/* <div className="absolute bottom-20 left-6 right-6 z-20 text-white">
                <p className="text-lg font-semibold drop-shadow-lg">
                  "Technology is best when it brings people together."
                </p>
              </div> */}
            </div>
          </motion.div>

          {/* Customer Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {targetCustomers.map((customer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-[#3e4094]/10 hover:border-[#e660eb]/30 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3e4094]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e660eb]/10 transition-colors duration-300">
                    <customer.icon className="w-6 h-6 text-[#3e4094] group-hover:text-[#e660eb] transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#3e4094] mb-2">
                      {customer.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {customer.description}
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {customer.benefits.map((benefit, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 text-xs text-gray-500">
                          <FaCheckCircle className="w-3 h-3 text-[#e660eb] shrink-0" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Target;