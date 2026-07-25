import { motion } from "framer-motion";
import { 
  FaCode, 
  FaPalette, 
  FaCloud, 
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaLock,
  FaUserSecret,
  FaBrain,
  FaRocket,
//   FaChartLine,
  FaRegBuilding,
  FaLaptopCode,
  FaCloudUploadAlt,
  FaRegClock,
  FaRegLightbulb,
  FaRegGem,
  FaUsers
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Header } from "../../components";

const Services = () => {
  const services = [
    {
      id: "software-engineering",
      icon: FaCode,
      title: "Software Engineering",
      subtitle: "Custom Software Development",
      description: "We build robust, scalable, and high-performance software solutions tailored to your business needs. From web and mobile applications to enterprise systems, we deliver excellence at every stage.",
      gradient: "from-blue-500 to-cyan-500",
      details: [
        {
          title: "Web Development",
          icon: FaLaptopCode,
          items: [
            "Frontend Development: React, Angular, Vue.js, Next.js",
            "Backend Development: Node.js, Python, Java, PHP, .NET",
            "Full-Stack Development: End-to-end web applications",
            "Progressive Web Apps (PWA): Offline-capable web apps",
            "API Development & Integration: RESTful, GraphQL APIs"
          ]
        },
        {
          title: "Mobile Development",
          icon: FaMobileAlt,
          items: [
            "Native iOS Development: Swift, Objective-C",
            "Native Android Development: Kotlin, Java",
            "Cross-Platform: React Native, Flutter, Xamarin",
            "Mobile App Design: UI/UX for mobile experiences"
          ]
        },
        {
          title: "Desktop Applications",
          icon: FaServer,
          items: [
            "Windows Applications: C#, .NET",
            "Mac Applications: Swift, Cocoa",
            "Cross-Platform: Electron, Java"
          ]
        },
        {
          title: "Enterprise Solutions",
          icon: FaRegBuilding,
          items: [
            "ERP Systems: Custom enterprise resource planning",
            "CRM Solutions: Customer relationship management",
            "Business Intelligence: Data analytics and reporting",
            "Legacy System Modernization: Upgrading outdated systems"
          ]
        }
      ]
    },
    {
      id: "core-banking-api",
      icon: FaBrain,
      title: "Core Banking API",
      subtitle: "Financial Technology Solutions",
      description: "Enterprise-grade banking APIs that power modern financial services. Enable seamless payments, card processing, onboarding, and core banking integration with unparalleled security and reliability.",
      gradient: "from-purple-500 to-pink-500",
      details: [
        {
          title: "API Development",
          icon: FaNetworkWired,
          items: [
            "RESTful API Design: Scalable and secure endpoints",
            "GraphQL APIs: Flexible data fetching",
            "API Gateway: Centralized API management",
            "API Documentation: Comprehensive developer docs"
          ]
        },
        {
          title: "Payment Processing",
          icon: FaRocket,
          items: [
            "Payment Gateway Integration: Multiple payment methods",
            "Card Processing: Credit/debit card handling",
            "Recurring Payments: Subscription management",
            "Settlement & Reconciliation: Automated processing"
          ]
        },
        {
          title: "Core Banking Integration",
          icon: FaDatabase,
          items: [
            "Core Banking Systems: Integration with existing banking cores",
            "Account Management: Account opening and maintenance",
            "Transaction Processing: Real-time transactions",
            "Reporting & Analytics: Comprehensive reporting"
          ]
        },
        {
          title: "Security & Compliance",
          icon: FaLock,
          items: [
            "PCI DSS Compliance: Payment card security",
            "GDPR Compliance: Data protection regulations",
            "Encryption: End-to-end data encryption",
            "Fraud Detection: Advanced fraud prevention"
          ]
        }
      ]
    },
    {
      id: "ui-ux-design",
      icon: FaPalette,
      title: "UI/UX Design",
      subtitle: "Human-Centered Design",
      description: "We create intuitive, beautiful, and engaging digital experiences that users love. Our design process combines creativity with data-driven insights to deliver exceptional results.",
      gradient: "from-pink-500 to-rose-500",
      details: [
        {
          title: "User Research",
          icon: FaUsers,
          items: [
            "User Interviews: Understanding user needs",
            "User Personas: Creating user archetypes",
            "Journey Mapping: User journey visualization",
            "Competitive Analysis: Market research and insights"
          ]
        },
        {
          title: "UI Design",
          icon: FaRegGem,
          items: [
            "Visual Design: Pixel-perfect interfaces",
            "Design Systems: Scalable design components",
            "Wireframing: Low to high-fidelity wireframes",
            "Prototyping: Interactive prototypes"
          ]
        },
        {
          title: "UX Design",
          icon: FaRegLightbulb,
          items: [
            "Information Architecture: Content organization",
            "User Flows: Task completion paths",
            "Usability Testing: Real user feedback",
            "Accessibility: WCAG compliance"
          ]
        },
        {
          title: "Design Thinking",
          icon: FaRegBuilding,
          items: [
            "Product Strategy: Product vision and roadmap",
            "Design Sprints: Rapid problem solving",
            "A/B Testing: Data-driven design decisions",
            "Design Reviews: Expert evaluation"
          ]
        }
      ]
    },
    {
      id: "cloud-infrastructure",
      icon: FaCloud,
      title: "Cloud & Infrastructure",
      subtitle: "Scalable Cloud Solutions",
      description: "We design, deploy, and manage enterprise-grade cloud infrastructure that scales with your business. Modernize your IT operations with our comprehensive cloud services.",
      gradient: "from-blue-500 to-indigo-500",
      details: [
        {
          title: "Cloud Solutions",
          icon: FaCloudUploadAlt,
          items: [
            "AWS: Amazon Web Services expertise",
            "Azure: Microsoft Azure solutions",
            "GCP: Google Cloud Platform services",
            "Multi-Cloud: Hybrid cloud strategies"
          ]
        },
        {
          title: "DevOps",
          icon: FaRocket,
          items: [
            "CI/CD Pipelines: Continuous integration/deployment",
            "Infrastructure as Code: Terraform, CloudFormation",
            "Containerization: Docker, Kubernetes",
            "Monitoring: Prometheus, Grafana, ELK stack"
          ]
        },
        {
          title: "Database Management",
          icon: FaDatabase,
          items: [
            "SQL Databases: PostgreSQL, MySQL, SQL Server",
            "NoSQL: MongoDB, Cassandra, DynamoDB",
            "Database Optimization: Performance tuning",
            "Data Migration: Seamless data transfer"
          ]
        },
        {
          title: "Infrastructure",
          icon: FaServer,
          items: [
            "Server Management: On-premise and cloud",
            "Network Architecture: Secure network design",
            "Disaster Recovery: Business continuity planning",
            "Scalability: Auto-scaling and load balancing"
          ]
        }
      ]
    },
    {
      id: "security-compliance",
      icon: FaShieldAlt,
      title: "Security & Compliance",
      subtitle: "Enterprise-Grade Security",
      description: "Protect your business with our comprehensive security solutions. From audits to compliance frameworks, we ensure your systems meet the highest industry standards.",
      gradient: "from-emerald-500 to-teal-500",
      details: [
        {
          title: "Security Audits",
          icon: FaUserSecret,
          items: [
            "Vulnerability Assessment: Identifying security gaps",
            "Penetration Testing: Ethical hacking",
            "Security Audits: Comprehensive security reviews",
            "Risk Assessment: Risk identification and mitigation"
          ]
        },
        {
          title: "Compliance Frameworks",
          icon: FaCheckCircle,
          items: [
            "GDPR: Data protection compliance",
            "PCI DSS: Payment card security",
            "HIPAA: Healthcare data protection",
            "ISO 27001: Information security management"
          ]
        },
        {
          title: "Data Protection",
          icon: FaDatabase,
          items: [
            "Data Encryption: End-to-end encryption",
            "Data Privacy: Privacy policy implementation",
            "Data Backup: Secure data backup solutions",
            "Identity Management: Authentication and authorization"
          ]
        },
        {
          title: "Security Operations",
          icon: FaRegClock,
          items: [
            "Security Monitoring: 24/7 threat monitoring",
            "Incident Response: Security breach handling",
            "Security Training: Employee security awareness",
            "Security Consulting: Expert security guidance"
          ]
        }
      ]
    }
  ];

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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3e4094] mb-6">
              Technology Solutions That
              <br />
              <span className="bg-linear-to-r from-[#3e4094] to-[#e660eb] bg-clip-text text-transparent">
                Drive Business Growth
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We deliver end-to-end technology solutions—from custom software development 
              and intuitive UI/UX design to robust cloud infrastructure and enterprise-grade 
              security. Explore our comprehensive services below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
                id={service.id}
              >
                {/* Service Header */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                  <div>
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#3e4094] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-[#e660eb] font-semibold text-sm mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  {service.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl border border-[#3e4094]/10 hover:border-[#e660eb]/30 hover:shadow-xl transition-all duration-300 bg-white group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                          <detail.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-[#3e4094] text-lg">
                          {detail.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {detail.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="w-4 h-4 text-[#e660eb] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {index < services.length - 1 && (
                  <div className="border-b border-[#3e4094]/10 mt-16"></div>
                )}
              </motion.div>
            ))}
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
                  Let's discuss your project and find the perfect technology solution for your business.
                </p>
                <NavLink to="/contact">
                  <button className="px-10 py-4 bg-linear-to-r from-[#3e4094] to-[#e660eb] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#3e4094]/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
                    Get in Touch
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

export default Services;