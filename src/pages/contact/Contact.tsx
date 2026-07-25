import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, Phone, Mail, CheckCircle, 
  MessageCircle, User, AtSign, Sparkles
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Header } from '../../components';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("5y_c1x1DRF56-CaGk");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email using EmailJS with all parameters
      const result = await emailjs.send(
        'service_8lqnt89',
        'template_9rg94uj',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'info@volaticservices.com.ng',
          time: new Date().toLocaleString(),
          year: new Date().getFullYear()
        }
      );

      if (result.text === 'OK') {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Email error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 (0) 703 675 0857',
      sub: 'Mon-Fri 9am-5pm',
      href: 'tel:+2347036750857'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@volaticservices.com.ng',
      sub: 'We reply within 24hrs',
      href: 'mailto:info@volaticservices.com.ng'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section 
        ref={sectionRef}
        className="pt-32 pb-20 px-4 sm:px-8 lg:px-16 bg-[#f8f9fe] relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3e4094] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e660eb] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3e4094] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3e4094 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <span className="inline-block px-6 py-2 bg-white text-[#3e4094] text-sm lg:text-[17px] font-semibold rounded-full border border-[#3e4094]/20 shadow-lg shadow-[#3e4094]/10">
                Get In Touch
              </span>
            </div>
            
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e4094] mb-4 mt-2">
                Let's Start a{' '}
                <span className="bg-linear-to-r from-[#3e4094] to-[#e660eb] bg-clip-text text-transparent">
                  Conversation
                </span>
              </h2>
            </div>
            
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <p className="text-gray-600 text-lg">
                Have questions about our services? We're here to help. Reach out and 
                let's discuss how we can transform your business with technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div
                className={`transform transition-all duration-1000 delay-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <h3 className="text-2xl font-bold text-[#3e4094] mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="group flex items-start space-x-4 p-4 bg-white rounded-xl border border-[#3e4094]/10 hover:border-[#e660eb]/30 hover:shadow-xl hover:shadow-[#3e4094]/5 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#3e4094] flex items-center justify-center shrink-0 group-hover:bg-[#e660eb] transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3e4094] group-hover:text-[#e660eb] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 text-sm font-medium">{item.details}</p>
                        <p className="text-xs text-gray-500">{item.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div
                className={`transform transition-all duration-1000 delay-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="bg-linear-to-r from-[#3e4094] to-[#e660eb] rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Trusted & Verified</p>
                        <p className="text-sm opacity-80">ISO Certified & GDPR Compliant</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Excellence</p>
                        <p className="text-sm opacity-80">Industry Leaders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#3e4094]/5 border border-[#3e4094]/10">
                <h3 className="text-2xl font-bold text-[#3e4094] mb-6 flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-[#e660eb]" />
                  <span>Send a Message</span>
                </h3>

                {isSubmitted ? (
                  <div className="bg-[#f8f9fe] border border-[#3e4094]/20 rounded-xl p-6 text-center animate-fade-in">
                    <CheckCircle className="w-16 h-16 text-[#e660eb] mx-auto mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold text-[#3e4094] mb-2">Message Sent! 🎉</h4>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-[#3e4094] mb-1.5">
                        <User className="w-4 h-4 inline mr-1 text-[#e660eb]" />
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pl-11 rounded-xl border border-[#3e4094]/20 focus:border-[#e660eb] focus:ring-2 focus:ring-[#e660eb]/20 outline-none transition-all bg-[#fafafa] hover:bg-white"
                          placeholder="John Doe"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#e660eb] transition-colors" />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-[#3e4094] mb-1.5">
                        <AtSign className="w-4 h-4 inline mr-1 text-[#e660eb]" />
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pl-11 rounded-xl border border-[#3e4094]/20 focus:border-[#e660eb] focus:ring-2 focus:ring-[#e660eb]/20 outline-none transition-all bg-[#fafafa] hover:bg-white"
                          placeholder="john@example.com"
                        />
                        <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#e660eb] transition-colors" />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-[#3e4094] mb-1.5">
                        <MessageCircle className="w-4 h-4 inline mr-1 text-[#e660eb]" />
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 pl-11 rounded-xl border border-[#3e4094]/20 focus:border-[#e660eb] focus:ring-2 focus:ring-[#e660eb]/20 outline-none transition-all bg-[#fafafa] hover:bg-white resize-none"
                          placeholder="Tell us about your project or how we can help..."
                        />
                        <MessageCircle className="absolute left-3 top-4 w-4 h-4 text-gray-400 group-focus-within:text-[#e660eb] transition-colors" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group bg-linear-to-r from-[#3e4094] to-[#e660eb] text-white font-semibold rounded-xl px-6 py-3.5 shadow-lg shadow-[#3e4094]/30 hover:shadow-[#3e4094]/50 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {/* Shimmer Effect */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent"></span>
                      
                      <span className="relative flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      <Sparkles className="w-3 h-3 inline mr-1 text-[#e660eb]" />
                      We'll respond within 24 hours. Your privacy is important to us.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Contact;