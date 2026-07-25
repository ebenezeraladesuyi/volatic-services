import { motion } from "framer-motion";
import { 
  FaCode, 
  FaShieldAlt, 
//   FaRocket, 
//   FaCogs,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaPalette,
//   FaMobileAlt,
//   FaServer,
//   FaBrain
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const WhatWeDo = () => {
  const coreServices = [
    {
      icon: FaCode,
      title: "Custom Software Development",
      description: "Full-stack web, mobile, and desktop applications built with cutting-edge technologies. Scalable, secure, and tailored to your business needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaPalette,
      title: "Elite UI/UX Design",
      description: "Human-centered design that transforms complex ideas into intuitive, beautiful, and engaging digital experiences your users will love.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: FaCloud,
      title: "Cloud & Infrastructure",
      description: "Enterprise-grade cloud solutions with DevOps, containerization, and serverless architectures for maximum scalability and reliability.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Comprehensive security audits, penetration testing, and compliance frameworks ensuring your systems meet the highest industry standards.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: FaUsers,
      title: "Customer-Centric",
      description: "We start with understanding your users' needs, then build solutions that truly serve them."
    },
    {
      icon: FaChartLine,
      title: "Data-Driven",
      description: "Every decision is backed by insights and analytics, ensuring your solutions evolve with your business."
    },
    {
      icon: FaDatabase,
      title: "Future-Ready",
      description: "We build systems that not only solve today's problems but adapt to tomorrow's challenges."
    }
  ];

//   const techStack = [
//     "React", "Node.js", "Python", "TypeScript",
//     "AWS", "Azure", "Docker", "Kubernetes",
//     "PostgreSQL", "MongoDB", "Redis", "GraphQL"
//   ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0e1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - "Start With Why" Inspired */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#e660eb]/10 border border-[#e660eb]/20 text-[#e660eb] text-sm font-semibold mb-4">
            Why We Exist
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-white">Building Technology That</span>
            <br />
            <span className="bg-linear-to-r from-[#e660eb] to-[#3e4094] bg-clip-text text-transparent">
              Transforms Businesses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We believe technology should empower, not complicate. Every solution 
            we build starts with a simple question: <span className="text-white font-semibold">"Why does this matter?"</span> 
            This purpose-driven approach ensures we create digital products that truly 
            transform how businesses operate and grow.
          </p>
        </motion.div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#e660eb]/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <NavLink 
                  to="/services" 
                  className="inline-flex items-center gap-2 mt-4 text-[#e660eb] hover:text-white transition-colors duration-300 text-sm font-semibold group/link"
                >
                  Learn More
                  <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us - Purpose Driven */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 border border-[#3e4094]/20 text-[#3e4094] text-sm font-semibold mb-4">
            Our Purpose
          </span>
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Why Choose <span className="text-[#e660eb]">Volatic</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just build technology—we build solutions with a purpose. Every line of code is written with your success in mind.
          </p>
        </motion.div>

        {/* Purpose Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:border-[#e660eb]/50 transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-7 h-7 text-[#e660eb]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-semibold mb-4">
              Our Technology Stack
            </span>
            <h3 className="text-2xl font-bold text-white">Built with Modern Technology</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:border-[#e660eb]/50 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div> */}

        {/* CTA Banner - "Start With Why" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#3e4094] to-[#e660eb] p-1"
        >
          <div className="relative bg-[#0a0e1a] rounded-3xl p-8 md:p-12 text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-[#3e4094]/10 to-[#e660eb]/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Build <span className="text-[#e660eb]">Something</span>?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Let's start with why. Schedule a discovery call and let us understand your 
                vision, challenges, and goals. Together, we'll build technology that truly matters.
              </p>
              <NavLink to="/contact">
                <button className="px-8 py-4 bg-white text-[#3e4094] font-bold rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 active:scale-95">
                  Let's Talk Purpose
                </button>
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;