import { motion } from "framer-motion";
import { 
  FaCode, 
  FaPalette, 
  FaCloud, 
  FaShieldAlt,
  FaArrowRight,
  FaUsers,
  FaRocket,
  // FaChartLine,
  // FaAward,
  FaHandshake,
  // FaLightbulb,
  FaCheckCircle,
  FaGlobe,
  FaHeart
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Header } from "../../components";

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: "Purpose-Driven",
      description: "We start every project by asking 'Why does this matter?' ensuring every solution has real impact."
    },
    {
      icon: FaUsers,
      title: "Customer-Centric",
      description: "Your success is our success. We build solutions that truly serve your customers and business."
    },
    {
      icon: FaRocket,
      title: "Innovation First",
      description: "We push boundaries and embrace emerging technologies to deliver future-ready solutions."
    },
    {
      icon: FaHandshake,
      title: "Partnership Mindset",
      description: "We don't just build for you—we build with you, becoming an extension of your team."
    }
  ];

  const journey = [
    { year: "2022", label: "Founded with a vision to transform businesses through technology" },
    { year: "2023", label: "Expanded services to include UI/UX design and cloud solutions" },
    { year: "2024", label: "Launched Volatic Academy to train the next generation of tech talent" },
    { year: "2025", label: "Became a full-service technology agency with global reach" },
  ];

  const stats = [
    { value: "100+", label: "Projects Delivered", icon: FaCode },
    { value: "1M+", label: "Happy Users", icon: FaUsers },
    { value: "10+", label: "Team Members", icon: FaRocket },
    { value: "10+", label: "Countries Served", icon: FaGlobe },
  ];

  const teamPhilosophy = [
    "We believe technology should empower, not complicate.",
    "We build solutions that solve real problems, not just check boxes.",
    "We invest in relationships, not just transactions.",
    "We create lasting value, not just temporary fixes."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
              About Volatic Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3e4094] mb-6">
              Building Technology That
              <br />
              <span className="bg-linear-to-r from-[#3e4094] to-[#e660eb] bg-clip-text text-transparent">
                Transforms Lives
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We are a technology agency on a mission to help businesses and organizations 
              harness the power of technology to create meaningful change. From startups 
              to enterprises, we partner with you to turn complex ideas into elegant, 
              scalable, and impactful digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#f8f9fe]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3e4094] mb-4">
                From Vision to
                <br />
                <span className="text-[#e660eb]">Global Impact</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Volatic Services was founded with a simple but powerful belief: 
                technology should be a force for good. We saw businesses struggling 
                with complex, inefficient systems and knew we could do better.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we've grown into a full-service technology agency serving 
                clients across 20+ countries. But our mission remains the same—to 
                build technology that truly transforms how businesses operate and grow.
              </p>
              <div className="flex flex-wrap gap-3">
                {teamPhilosophy.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-[#e660eb]" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-[#3e4094]/10 border border-[#3e4094]/10">
                <div className="space-y-6">
                  {journey.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-[#3e4094]/10 flex items-center justify-center text-[#3e4094] font-bold text-sm group-hover:bg-[#e660eb] group-hover:text-white transition-all duration-300">
                          {item.year}
                        </div>
                        {index < journey.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-12 bg-[#3e4094]/10 group-hover:bg-[#e660eb]/30 transition-all duration-300"></div>
                        )}
                      </div>
                      <div className="pt-1">
                        <p className="text-gray-700 text-sm">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
              What We Believe
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3e4094]">
              Our Core <span className="text-[#e660eb]">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-[#3e4094]/10 hover:border-[#e660eb]/30 hover:shadow-xl transition-all duration-300 bg-white text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#3e4094]/10 group-hover:bg-[#e660eb]/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-[#3e4094] group-hover:text-[#e660eb] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#3e4094] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
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
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#e660eb]" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services We Offer (Preview) */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3e4094] mb-4">
              Our <span className="text-[#e660eb]">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end technology solutions designed to help you build, scale, and succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaCode, title: "Software Development", desc: "Custom web, mobile, and desktop applications." },
              { icon: FaPalette, title: "UI/UX Design", desc: "Human-centered design for exceptional experiences." },
              { icon: FaCloud, title: "Cloud & Infrastructure", desc: "Scalable cloud solutions and DevOps." },
              { icon: FaShieldAlt, title: "Security & Compliance", desc: "Enterprise-grade security and compliance." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-[#3e4094]/10 hover:border-[#e660eb]/30 hover:shadow-xl transition-all duration-300 bg-white group"
              >
                <service.icon className="w-8 h-8 text-[#3e4094] group-hover:text-[#e660eb] transition-colors duration-300 mb-3" />
                <h3 className="font-bold text-[#3e4094] mb-1">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <NavLink to="/services">
              <button className="px-8 py-3 bg-[#3e4094] text-white font-bold rounded-xl hover:bg-[#e660eb] transition-all duration-300 hover:scale-105">
                View All Services
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#f8f9fe]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#3e4094] to-[#e660eb] p-1"
          >
            <div className="relative bg-white rounded-3xl p-8 md:p-12 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3e4094] mb-4">
                  Ready to Build Something <span className="text-[#e660eb]">Amazing</span>?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Let's talk about your vision, your challenges, and how we can help you 
                  turn your ideas into reality.
                </p>
                <NavLink to="/contact">
                  <button className="px-10 py-4 bg-linear-to-r from-[#3e4094] to-[#e660eb] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#3e4094]/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
                    Start a Conversation
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;