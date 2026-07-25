import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, 
        //  ChevronDown 
        } from "lucide-react";
import logo from "../../assets/vol-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Career"},
    { to: "/contact", label: "Contact", isPrimary: true },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 py-3 md:py-4
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-purple-100/20" 
            : "bg-white/80 backdrop-blur-sm"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="shrink-0 transform hover:scale-105 transition-transform duration-300 ease-out"
          >
            <img 
              src={logo} 
              className="w-12 md:w-14 lg:w-16 h-auto object-contain" 
              alt="Logo" 
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <div key={link.to} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `
                    relative px-4 py-2.5 font-bold text-[15px] lg:text-[17px]
                    transition-all duration-300 ease-in-out
                    ${
                      link.isPrimary
                        ? "bg-linear-to-r from-[#e660eb] to-[#c84fd1] text-white px-6 py-2.5 rounded-full shadow-lg shadow-purple-300/40 hover:shadow-purple-400/60 hover:scale-105 active:scale-95"
                        : `text-[#3e4094] hover:text-[#e660eb] 
                           after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                           after:w-0 after:h-0.75 after:bg-linear-to-r after:from-[#e660eb] after:to-[#3e4094]
                           after:rounded-full after:transition-all after:duration-300 hover:after:w-full
                           ${isActive ? "text-[#e660eb] after:w-full" : ""}`
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200 relative z-60 shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#3e4094]" />
            ) : (
              <Menu className="w-6 h-6 text-[#3e4094]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 overflow-hidden
          transition-all duration-400 ease-in-out
          ${isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
          }
        `}
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 55,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        {/* Close button - fixed at top right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-70 p-3 rounded-full bg-purple-50 hover:bg-purple-100 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-purple-200/50"
          aria-label="Close menu"
        >
          <X className="w-7 h-7 text-[#3e4094]" />
        </button>

        <div className="w-full h-full flex items-center justify-center px-6 py-20 overflow-y-auto">
          <nav className="w-full max-w-sm">
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <div 
                  key={link.to} 
                  className="w-full"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(20px)",
                    transition: `all 400ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 80}ms`,
                  }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                    className={({ isActive }) => `
                      w-full block text-center py-4 px-6
                      font-bold text-[20px] transition-all duration-300
                      transform hover:scale-105 active:scale-95
                      ${
                        link.isPrimary
                          ? "bg-linear-to-r from-[#e660eb] to-[#c84fd1] text-white rounded-full shadow-lg shadow-purple-300/40"
                          : `text-[#3e4094] hover:text-[#e660eb] border-b-2 border-transparent hover:border-[#e660eb]
                             ${isActive ? "text-[#e660eb] border-[#e660eb]" : ""}`
                      }
                    `}
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;