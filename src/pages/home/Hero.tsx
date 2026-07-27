import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaArrowRight,
  // FaCode,
  // FaPalette,
  // FaCloud,
  // FaShieldAlt,
  // FaLaptopCode
} from "react-icons/fa";

const Hero = () => {
  // const services = [
  //   { icon: FaCode, label: "Software Development" },
  //   { icon: FaPalette, label: "UI/UX Design" },
  //   { icon: FaCloud, label: "Cloud Infrastructure" },
  //   { icon: FaShieldAlt, label: "Security & Compliance" },
  // ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white my-3 mb-5 lg:mb-0 m:mt-5 l:mt-10">
      
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-purple-50/30 z-10"></div>
        
        {/* Abstract tech background pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3e4094" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#e660eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3e4094]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#00AFEF]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e4094]/10 border border-[#3e4094]/20 mb-6"
            >
              <span className="w-2 h-2 bg-[#3e4094] rounded-full animate-pulse"></span>
              <span className="text-[#3e4094] text-sm font-semibold">Full-Service Tech Solutions</span>
            </motion.div> */}

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              <span className="text-[#3e4094]">Transforming Ideas</span>
              <br />
              <span className="bg-linear-to-r from-[#3e4094] to-[#e660eb] bg-clip-text text-transparent">
                Into Digital Reality
              </span>
            </motion.h1>

            {/* Description - Catch-all for all services */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              We deliver end-to-end technology solutions—from custom software development 
              and intuitive UI/UX design to robust cloud infrastructure and enterprise-grade 
              security. 
            </motion.p>

            {/* Service Tags */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-[#3e4094]/5 backdrop-blur-sm rounded-full border border-[#3e4094]/10"
                >
                  <service.icon className="w-4 h-4 text-[#3e4094]" />
                  <span className="text-[#3e4094] text-sm font-medium">{service.label}</span>
                </div>
              ))}
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <NavLink to="/contact">
                <button className="group px-8 py-3.5 bg-linear-to-r from-[#3e4094] to-[#e660eb] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#3e4094]/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                  Contact Us
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </NavLink>
              
              <NavLink to="/about">
                <button className="px-8 py-3.5 bg-[#3e4094]/10 backdrop-blur-sm border border-[#3e4094]/20 text-[#3e4094] font-bold rounded-xl hover:bg-[#3e4094]/20 transition-all duration-300 hover:scale-105 active:scale-95">
                  Learn More
                </button>
              </NavLink>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-8 mt-10 pt-8 border-t border-[#3e4094]/10"
            >
              {[
                { label: "Projects Delivered", value: "500+" },
                { label: "Happy Clients", value: "200+" },
                { label: "Years Experience", value: "10+" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-[#3e4094]">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right Side - Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidde lg:block relative"
          >
            <div className="relative">
              {/* Main Illustration Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#3e4094]/10 shadow-2xl shadow-[#3e4094]/5">
                {/* Abstract Tech Illustration */}
                <div className="relative h-100 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Central Node */}
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#3e4094" strokeWidth="2" opacity="0.2">
                      <animate attributeName="r" from="60" to="80" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="200" cy="200" r="40" fill="url(#grad1)" opacity="0.8">
                      <animate attributeName="r" from="40" to="45" dur="2s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Connected Nodes - Representing different services */}
                    {[
                      { angle: 0, label: "Web" },
                      { angle: 45, label: "Mobile" },
                      { angle: 90, label: "Desktop" },
                      { angle: 135, label: "UI/UX" },
                      { angle: 180, label: "Cloud" },
                      { angle: 225, label: "Security" },
                      { angle: 270, label: "API" },
                      { angle: 315, label: "AI" },
                    ].map((item, i) => {
                      const rad = (item.angle * Math.PI) / 180;
                      const x = 200 + 100 * Math.cos(rad);
                      const y = 200 + 100 * Math.sin(rad);
                      return (
                        <g key={i}>
                          <circle cx={x} cy={y} r="12" fill="#e660eb" opacity="0.6">
                            <animate attributeName="r" from="12" to="16" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                          </circle>
                          <line x1="200" y1="200" x2={x} y2={y} stroke="#3e4094" strokeWidth="1" opacity="0.15">
                            <animate attributeName="opacity" from="0.15" to="0.4" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite" />
                          </line>
                          {/* Small data dots flowing */}
                          <circle r="3" fill="#3e4094" opacity="0.8">
                            <animateMotion dur={`${2 + i * 0.2}s`} repeatCount="indefinite" path={`M200,200 L${x},${y}`} />
                          </circle>
                          {/* Labels */}
                          <text 
                            x={x + (x > 200 ? 20 : -20)} 
                            y={y + (y > 200 ? 25 : -25)} 
                            fontSize="10" 
                            fill="#3e4094" 
                            opacity="0.6"
                            textAnchor="middle"
                            className="font-semibold"
                          >
                            {item.label}
                          </text>
                        </g>
                      );
                    })}
                    
                    <defs>
                      <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#e660eb" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#3e4094" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating Labels */}
                <div className="absolute top-4 left-4 bg-white shadow-lg rounded-lg px-4 py-2 border border-[#3e4094]/10">
                  <span className="text-xs font-semibold text-[#3e4094]">💻 Software</span>
                </div>
                <div className="absolute top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 border border-[#3e4094]/10">
                  <span className="text-xs font-semibold text-[#3e4094]">🎨 Design</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg px-4 py-2 border border-[#3e4094]/10">
                  <span className="text-xs font-semibold text-[#3e4094]">☁️ Cloud</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 border border-[#3e4094]/10">
                  <span className="text-xs font-semibold text-[#3e4094]">🔒 Security</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;