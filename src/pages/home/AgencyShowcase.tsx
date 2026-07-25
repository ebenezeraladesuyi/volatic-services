import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaUsers, 
  FaSmile, 
  FaRocket,
  FaCheckCircle,
//   FaLightbulb,
  FaCode,
  FaPalette,
  FaBrain,
  FaChartLine,
  FaMoneyBill
} from "react-icons/fa";
// import { NavLink } from "react-router-dom";

const AgencyShowcase = () => {
  const stats = [
    { 
      icon: FaUsers, 
      value: "1M+", 
      label: "Monthly Active Users",
      description: "Businesses trust our solutions"
    },
    { 
      icon: FaSmile, 
      value: "92%", 
      label: "Client Satisfaction",
      description: "From our awesome customers"
    },
    { 
      icon: FaRocket, 
      value: "100+", 
      label: "Projects Delivered",
      description: "Across 10+ countries"
    },
  ];

  const services = [
    { icon: FaCode, label: "Software Development", color: "from-blue-500 to-indigo-500" },
    { icon: FaChartLine, label: "Product Innovation", color: "from-emerald-500 to-teal-500" },
    { icon: FaMoneyBill, label: "Core Banking API", color: "from-purple-500 to-violet-500" },
    { icon: FaPalette, label: "Elite UI/UX Design", color: "from-pink-500 to-rose-500" },
  ];

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
            Technology Agency
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3e4094] mb-4">
            Real Impact.
            {/* <span className="block bg-linear-to-r from-[#e660eb] to-[#3e4094] bg-clip-text text-transparent">
              Transforming Ideas Into Reality
            </span> */}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a technology agency focused on robust development, elite UI/UX, 
            advanced AI, building Core Banking API, and strategic product innovation. 
            We partner with organizations to transform complex ideas into functional, 
            scalable, and beautifully engineered solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#3e4094]/10">
              {/* Main Image Container */}
              <div className="aspect-4/3 w-full bg-linear-to-br from-[#3e4094] to-[#e660eb] p-1">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  {/* Abstract Tech Illustration */}
                  <svg viewBox="0 0 800 600" className="w-full h-full">
                    {/* Background Pattern */}
                    <defs>
                      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#3e4094" opacity="0.1"/>
                      </pattern>
                      <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3e4094" stopOpacity="0.05"/>
                        <stop offset="100%" stopColor="#e660eb" stopOpacity="0.05"/>
                      </linearGradient>
                    </defs>
                    
                    <rect width="800" height="600" fill="url(#dots)"/>
                    <rect width="800" height="600" fill="url(#techGrad)"/>
                    
                    {/* Central Tech Node */}
                    <circle cx="400" cy="300" r="80" fill="#3e4094" opacity="0.1">
                      <animate attributeName="r" from="80" to="100" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="400" cy="300" r="50" fill="#e660eb" opacity="0.15">
                      <animate attributeName="r" from="50" to="70" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Orbiting Nodes */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 400 + 150 * Math.cos(rad);
                      const y = 300 + 150 * Math.sin(rad);
                      return (
                        <g key={i}>
                          <circle cx={x} cy={y} r="15" fill="#3e4094" opacity="0.2">
                            <animate attributeName="r" from="15" to="20" dur={`${2 + i * 0.2}s`} repeatCount="indefinite"/>
                          </circle>
                          <line x1="400" y1="300" x2={x} y2={y} stroke="#3e4094" strokeWidth="1" opacity="0.1">
                            <animate attributeName="opacity" from="0.1" to="0.3" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite"/>
                          </line>
                          {/* Floating Icons */}
                          <foreignObject x={x - 20} y={y - 20} width="40" height="40">
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                                {i % 4 === 0 && <FaCode className="w-4 h-4 text-[#3e4094]" />}
                                {i % 4 === 1 && <FaPalette className="w-4 h-4 text-[#e660eb]" />}
                                {i % 4 === 2 && <FaBrain className="w-4 h-4 text-[#3e4094]" />}
                                {i % 4 === 3 && <FaChartLine className="w-4 h-4 text-[#e660eb]" />}
                              </div>
                            </div>
                          </foreignObject>
                        </g>
                      );
                    })}
                    
                    {/* Floating Data Points */}
                    {[...Array(30)].map((_, i) => (
                      <circle
                        key={i}
                        cx={Math.random() * 800}
                        cy={Math.random() * 600}
                        r="2"
                        fill="#3e4094"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="opacity"
                          from="0.3"
                          to="0.8"
                          dur={`${2 + Math.random() * 3}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                  </svg>

                  {/* Floating Labels */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-4 py-3 border border-[#3e4094]/10">
                    <span className="text-sm font-bold text-[#3e4094]">🚀 Innovation</span>
                  </div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-4 py-3 border border-[#3e4094]/10">
                    <span className="text-sm font-bold text-[#3e4094]">💡 AI-Powered</span>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-4 py-3 border border-[#3e4094]/10">
                    <span className="text-sm font-bold text-[#3e4094]">⚡ Scalable</span>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-4 py-3 border border-[#3e4094]/10">
                    <span className="text-sm font-bold text-[#3e4094]">🔒 Secure</span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer group">
                      <div className="w-16 h-16 rounded-full bg-linear-to-r from-[#3e4094] to-[#e660eb] flex items-center justify-center shadow-lg shadow-[#3e4094]/30">
                        <FaArrowRight className="w-6 h-6 text-white ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-2xl px-8 py-4 border border-[#3e4094]/10 flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-gray-700">ISO Certified</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-gray-700">GDPR Compliant</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-linear-to-br ${service.color} p-0.5 rounded-2xl shadow-lg`}
                >
                  <div className="bg-white rounded-2xl p-4 h-full hover:bg-opacity-95 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center shrink-0`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-[#3e4094]">{service.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#3e4094]/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-[#3e4094] mx-auto mb-2" />
                  <div className="text-2xl font-extrabold text-[#3e4094]">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              {/* <NavLink to="/contact">
                <button className="group px-8 py-4 bg-linear-to-r from-[#3e4094] to-[#e660eb] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#3e4094]/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3">
                  Let's Work Together
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </NavLink> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;