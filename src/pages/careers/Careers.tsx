import { motion } from "framer-motion";
import { 
//   FaArrowRight, 
  FaLaptopCode, 
  FaPalette, 
  FaBrain,
  FaCheckCircle,
//   FaUsers,
//   FaRocket,
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaGraduationCap,
//   FaAward,
  FaRegSmile,
//   FaGlobe,
//   FaCoffee,
//   FaGithub,
//   FaSlack
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Header } from "../../components";

const Career = () => {
  const jobOpenings = [
    {
      id: "backend-intern",
      icon: FaLaptopCode,
      title: "Backend Web Development Intern",
      type: "Internship",
      location: "Remote / Hybrid",
      duration: "3-6 months",
      description: "Join our engineering team to build scalable backend systems, APIs, and microservices. Work with modern technologies and learn from experienced developers.",
      responsibilities: [
        "Design and implement RESTful APIs and microservices",
        "Work with PostgreSQL, MongoDB, and Redis databases",
        "Write clean, maintainable, and well-documented code",
        "Collaborate with frontend developers on API integration",
        "Participate in code reviews and team meetings",
        "Contribute to system architecture and design decisions"
      ],
      requirements: [
        "Basic knowledge of Node.js, Python, or Java",
        "Understanding of database systems (SQL and NoSQL)",
        "Familiarity with Git and version control",
        "Strong problem-solving and analytical skills",
        "Good communication and teamwork abilities",
        "Currently pursuing or recently completed degree in Computer Science or related field"
      ],
      perks: [
        "Mentorship from senior engineers",
        "Hands-on experience with production systems",
        "Flexible working hours",
        "Remote work options",
        "Potential for full-time conversion",
        "Learning and development budget"
      ]
    },
    {
      id: "frontend-intern",
      icon: FaPalette,
      title: "Frontend Web Development Intern",
      type: "Internship",
      location: "Remote / Hybrid",
      duration: "3-6 months",
      description: "Build responsive, user-friendly web applications with modern frontend technologies. Work closely with designers and backend engineers to create exceptional user experiences.",
      responsibilities: [
        "Develop responsive web applications with React, React-Native and TypeScript",
        "Implement pixel-perfect designs from Figma",
        "Optimize application performance and loading speed",
        "Write clean, maintainable, and accessible code",
        "Collaborate with UI/UX designers on user experience",
        "Participate in sprint planning and code reviews"
      ],
      requirements: [
        "Basic knowledge of React, React-Native, Vue.js, or Angular",
        "Understanding of HTML5, CSS3, and JavaScript/TypeScript",
        "Familiarity with responsive design principles",
        "Knowledge of version control with Git",
        "Attention to detail and design sensibility",
        "Currently pursuing or recently completed degree in Computer Science or related field"
      ],
      perks: [
        "Work on real-world projects",
        "Mentorship from senior frontend engineers",
        "Flexible working hours",
        "Remote work options",
        "Design-focused culture",
        "Opportunity to shape product UI/UX"
      ]
    },
    {
      id: "data-scientist",
      icon: FaBrain,
      title: "Data Scientist Intern",
      type: "Internship",
      location: "Remote / Hybrid",
      duration: "3-6 months",
      description: "Work on cutting-edge data science projects including machine learning, predictive analytics, and AI applications. Turn data into actionable insights for our clients.",
      responsibilities: [
        "Build and train machine learning models",
        "Perform exploratory data analysis and feature engineering",
        "Develop data pipelines and ETL processes",
        "Create data visualizations and dashboards",
        "Collaborate on AI/ML research projects",
        "Present findings to stakeholders and clients"
      ],
      requirements: [
        "Basic knowledge of Python and data science libraries (Pandas, NumPy, Scikit-learn)",
        "Understanding of machine learning concepts",
        "Experience with SQL and data manipulation",
        "Familiarity with data visualization tools (Tableau, Power BI, or Matplotlib)",
        "Strong analytical and problem-solving skills",
        "Currently pursuing or recently completed degree in Data Science, Statistics, or related field"
      ],
      perks: [
        "Work on real AI/ML projects",
        "Access to GPU resources and cloud platforms",
        "Mentorship from experienced data scientists",
        "Flexible working hours",
        "Remote work options",
        "Opportunity to publish research"
      ]
    }
  ];

//   const benefits = [
//     { icon: FaCoffee, label: "Flexible Working Hours" },
//     { icon: FaGlobe, label: "Remote/Hybrid Work" },
//     { icon: FaGraduationCap, label: "Learning & Development" },
//     { icon: FaRocket, label: "Real-World Projects" },
//     { icon: FaUsers, label: "Mentorship Program" },
//     { icon: FaAward, label: "Internship Certificate" },
//   ];

//   const tools = [
//     { name: "React", color: "from-cyan-500 to-blue-500" },
//     { name: "Node.js", color: "from-emerald-500 to-green-500" },
//     { name: "Python", color: "from-yellow-500 to-orange-500" },
//     { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
//     { name: "PostgreSQL", color: "from-indigo-500 to-purple-500" },
//     { name: "Docker", color: "from-blue-400 to-cyan-400" },
//     { name: "Git", color: "from-orange-500 to-red-500" },
//     { name: "AWS", color: "from-yellow-600 to-orange-600" },
//   ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8 lg:px-16 bg-[#f8f9fe]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3e4094] mb-6">
              Build Your Career with
              <br />
              <span className="bg-linear-to-r from-[#3e4094] to-[#e660eb] bg-clip-text text-transparent">
                Volatic Services
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We're looking for passionate, talented individuals to join our team and 
              help us build technology that transforms businesses. Grow your skills, 
              work on meaningful projects, and be part of a dynamic, supportive community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#e660eb]/10 text-[#e660eb] text-sm font-semibold mb-4">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3e4094]">
              Join Our <span className="text-[#e660eb]">Team</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                id={job.id}
                className="scroll-mt-24"
              >
                <div className="bg-white rounded-3xl border border-[#3e4094]/10 hover:border-[#e660eb]/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Job Header */}
                  <div className="p-8 border-b border-[#3e4094]/10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#3e4094]/10 flex items-center justify-center shrink-0">
                          <job.icon className="w-7 h-7 text-[#3e4094]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#3e4094]">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 mt-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#e660eb]/10 text-[#e660eb]">
                              <FaBriefcase className="w-3 h-3" />
                              {job.type}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#3e4094]/10 text-[#3e4094]">
                              <FaMapMarkerAlt className="w-3 h-3" />
                              {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                              <FaClock className="w-3 h-3" />
                              {job.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <NavLink to="/contact">
                        <button className="px-6 py-2.5 bg-[#3e4094] text-white font-semibold rounded-xl hover:bg-[#e660eb] transition-all duration-300 hover:scale-105 text-sm">
                          Apply Now
                        </button>
                      </NavLink>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-bold text-[#3e4094] mb-3 flex items-center gap-2">
                          <FaCheckCircle className="w-4 h-4 text-[#e660eb]" />
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e660eb] shrink-0 mt-1.5"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="font-bold text-[#3e4094] mb-3 flex items-center gap-2">
                          <FaGraduationCap className="w-4 h-4 text-[#e660eb]" />
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#3e4094] shrink-0 mt-1.5"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Perks */}
                    <div className="mt-6 pt-6 border-t border-[#3e4094]/10">
                      <h4 className="font-bold text-[#3e4094] mb-3 flex items-center gap-2">
                        <FaRegSmile className="w-4 h-4 text-[#e660eb]" />
                        What We Offer
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.perks.map((perk, idx) => (
                          <span key={idx} className="text-sm bg-gray-50 px-3 py-1.5 rounded-full text-gray-600 border border-gray-200">
                            {perk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#f8f9fe]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
              Why Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3e4094]">
              Internship <span className="text-[#e660eb]">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#3e4094]/10 hover:border-[#e660eb]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3e4094]/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#3e4094]" />
                </div>
                <span className="font-medium text-[#3e4094]">{benefit.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#3e4094]">
                Technologies You'll Work With
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className={`px-4 py-2 bg-linear-to-r ${tool.color} text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transition-all duration-300 cursor-default`}
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div> */}
        {/* </div> */}
      {/* </section> */} 

      {/* Application Process */}
      {/* <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#3e4094]/10 text-[#3e4094] text-sm font-semibold mb-4">
              How to Apply
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3e4094]">
              Application <span className="text-[#e660eb]">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Submit Application", desc: "Send your CV and portfolio/portfolio link" },
              { step: "02", title: "Initial Screening", desc: "Review of your application and credentials" },
              { step: "03", title: "Technical Assessment", desc: "Coding challenge or technical interview" },
              { step: "04", title: "Offer & Onboarding", desc: "Receive offer and start your journey" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-[#3e4094]/10 flex items-center justify-center mx-auto mb-3 text-2xl font-extrabold text-[#3e4094]">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#3e4094] text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[30%] h-0.5 bg-[#3e4094]/10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Career;