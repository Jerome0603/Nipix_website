import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';


export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Programs', path: '/programs' },
  ];

  const resources = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Career Support', path: '/contact' },
  ];

  const popularCourses = [
    { name: 'Python Programming', path: '/courses/python-programming-basic-to-advanced' },
    { name: 'JavaScript Fundamentals', path: '/courses/java-programming-basic-to-advanced' },
    { name: 'App Development', path: '/courses/flutter-app-development' },
    { name: 'Machine Learning', path: '/courses/machine-learning' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/nipix-technology', label: 'LinkedIn', color: '#007DFF' },
    { icon: Instagram, href: 'https://instagram.com/nipixtechnology', label: 'Instagram', color: '#E4405F' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={'/src/assets/LOgo.png'} 
                alt="Nipix Technology" 
                className="h-12 w-auto"
              />
            </Link>
            
            <p className="text-white leading-relaxed mb-6 max-w-sm">
              Empowering the next generation of tech professionals through innovative 
              education and hands-on training. Join thousands of successful graduates 
              worldwide.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 group"
                >
                  <social.icon className="text-white group-hover:text-[#007DFF] transition-colors" size={20} />
                </a>    
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <Link
                    to={course.path}
                    className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section 
        <div className="glass-panel rounded-2xl p-8 lg:p-10 mb-12 border-white/40 bg-[rgb(8,127,248)]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-3 text-white">Stay Updated</h3>
              <p className="text-white/80">
                Get the latest course updates, tech insights, and exclusive offers 
                delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/30 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-[#007DFF] rounded-xl hover:shadow-2xl transition-all duration-200 btn-glow font-semibold flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>*/}

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white">
              &copy; {currentYear} Nipix Technology. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}