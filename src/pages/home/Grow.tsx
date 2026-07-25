import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaGraduationCap, 
  FaBriefcase, 
  FaBuilding,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaGlobe
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Grow = () => {
  const growthPrograms = [
    {
      icon: FaGraduationCap,
      title: "Internship Program",
      description: "Learn with Volatic. Partners with leading tech companies to build the next generation of tech talent through hands-on experience.",
      features: [
        "Real-world project experience",
        "Mentorship from industry experts",
        "Structured learning path",
        "Career placement opportunities"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaBriefcase,
      title: "SIWES & Career Development",
      description: "Build your career path with professional guidance, real-world industrial training, and mentorship from industry experts.",
      features: [
        "Industrial training placements",
        "Career mentorship programs",
        "Professional skill development",
        "Job placement assistance"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaBuilding,
      title: "Innovation Hub",
      description: "Volatic Academy's premium collaborative workspace with 24/7 power, high-speed Starlink internet, and an environment designed for innovation.",
      features: [
        "24/7 power supply",
        "High-speed Starlink internet",
        "Collaborative workspaces",
        "Networking & community events"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaHandshake,
      title: "Partnership & Collaboration",
      description: "Strategic partnerships with organizations, educational institutions, and government bodies to drive tech innovation and economic growth.",
      features: [
        "Corporate partnerships",
        "Educational collaborations",
        "Government initiatives",
        "Community development programs"
      ],
      color: "from-emerald-500 to-teal-500"
    }
  ];

//   const stats = [
//     { label: "Interns Placed", value: "300+" },
//     { label: "Partner Companies", value: "50+" },
//     { label: "Training Programs", value: "25+" },
//     { label: "Success Rate", value: "92%" }
//   ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0e1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#e660eb]/10 border border-[#e660eb]/20 text-[#e660eb] text-sm font-semibold mb-4">
            How We Help You Grow
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            <span className="text-white">Your Growth Journey</span>
            <br />
            <span className="bg-linear-to-r from-[#e660eb] to-[#3e4094] bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            From skill development to innovation hubs and strategic partnerships, we provide 
            the tools, training, and opportunities you need to build, grow, and succeed in 
            the technology industry.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {growthPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#e660eb]/30 transition-all duration-300 h-full">
                {/* Icon with Gradient */}
                <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${program.color} flex items-center justify-center mb-5 shadow-lg shadow-purple-500/20`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e660eb] shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-[#e660eb] to-[#3e4094] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* CTA Section with Single Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#3e4094] to-[#e660eb] p-1"
        >
          <div className="relative bg-[#0a0e1a] rounded-3xl p-8 md:p-12 text-center">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-linear-to-br from-[#3e4094]/10 to-[#e660eb]/10"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center gap-2 mb-4">
                <FaUsers className="w-8 h-8 text-[#e660eb]" />
                <FaLightbulb className="w-8 h-8 text-[#3e4094]" />
                <FaRocket className="w-8 h-8 text-[#e660eb]" />
                <FaGlobe className="w-8 h-8 text-[#3e4094]" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to <span className="text-[#e660eb]">Grow</span> Your Career or Business?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Whether you're looking to upskill, find talent, build an innovation hub, 
                or form strategic partnerships, we're here to help you succeed. 
                Let's start your growth journey today.
              </p>
              <NavLink to="/contact">
                <button className="group px-10 py-4 bg-white text-[#3e4094] font-bold rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto">
                  Contact Us Today
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Grow;