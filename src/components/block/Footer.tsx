import { 
          // FaFacebook, 
          FaTwitter, 
          // FaInstagram, 
          FaLinkedin, 
          // FaYoutube 
        } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/vol-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    // { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    // { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    // { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0a0e1a]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img 
                src={logo} 
                alt="Volatic Services" 
                className="h-20 w-auto object-contain bg-white rounded-lg"
              />
            </NavLink>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              We are a trusted technology company delivering innovative 
              solutions to clients both locally and internationally. With a strong 
              blend of professionalism, creativity, and proven expertise.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/5 hover:bg-[#e660eb] text-gray-400 hover:text-white 
                           rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg 
                           hover:shadow-[#e660eb]/20 border border-white/10"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#e660eb]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-[#e660eb] transition-colors duration-200 
                             text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#e660eb] rounded-full opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-200"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#e660eb]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MdPhone className="text-[#e660eb] text-xl shrink-0" />
                <a href="tel:+2347036750857" className="hover:text-[#e660eb] transition-colors">
                  +234 (0) 703 675 0857
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MdEmail className="text-[#e660eb] text-xl shrink-0" />
                <a href="mailto:info@volaticservices.com.ng" className="hover:text-[#e660eb] transition-colors">
                  info@volaticservices.com.ng
                </a>
              </li>
            </ul>
          </div>

          {/* Services Overview */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#e660eb]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-400 hover:text-[#e660eb] transition-colors duration-200 
                           text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#e660eb] rounded-full opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-200"></span>
                  Software Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-400 hover:text-[#e660eb] transition-colors duration-200 
                           text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#e660eb] rounded-full opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-200"></span>
                  UI/UX Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-400 hover:text-[#e660eb] transition-colors duration-200 
                           text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#e660eb] rounded-full opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-200"></span>
                  Cloud & Infrastructure
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-400 hover:text-[#e660eb] transition-colors duration-200 
                           text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#e660eb] rounded-full opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-200"></span>
                  Security & Compliance
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              &copy; {currentYear} <span className="font-semibold text-white">Volatic Services</span>. 
              All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-[#e660eb] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#e660eb] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#e660eb] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;