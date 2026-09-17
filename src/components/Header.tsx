import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Laptop, Menu, X, GraduationCap, Users, Award, ChevronDown} from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Programs', path: '/programs', isDropdown: true},
    //{ name: 'Login', path: '/login' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const programItems = [
    { 
      name: 'Internships', 
      path: '/internships', 
      icon: <Users className="w-5 h-5" />, 
      subtitle: 'Real-world industrial training' 
    },
    { 
      name: 'Value Added Courses (VAC)', 
      path: '/vac', 
      icon: <Award className="w-5 h-5" />, 
      subtitle: 'Professional skill enhancement' 
    },
    { 
      name: 'Seminars', 
      path: '/seminars', 
      icon: <GraduationCap className="w-5 h-5" />, 
      subtitle: 'Expert-led knowledge sessions' 
    },
    { 
      name: 'Workshops', 
      path: '/workshops', 
      icon: <Laptop className="w-5 h-5" />, 
      subtitle: 'Hands-on technical learning' 
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-full ${
        isScrolled ? 'bg-white/100 backdrop-blur-xl shadow-lg rounded-full w-full mx-0' : 'bg-white/100 backdrop-blur-md shadow-md rounded-full max-w-6xl mx-auto mt-4'
      }`}
    >
      <div className="container shadow-md rounded-full backdrop-blur-md mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src={'/src/assets/LOgo.png'} 
              alt="Nipix Technology" 
              className="h-14 w-auto "
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center font-semibold space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.isDropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsProgramsOpen(true)}
                      onMouseLeave={() => setIsProgramsOpen(false)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                        location.pathname.startsWith('/programs') || 
                        location.pathname === '/internships' || 
                        location.pathname === '/vac' || 
                        location.pathname === '/seminars' || 
                        location.pathname === '/workshops'
                          ? 'bg-[#007DFF] text-white font-semibold shadow-lg'
                          : 'text-[#1A1A1A] hover:bg-[#D9EBFF] hover:text-[#007DFF]'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Overlay for better hover experience */}
                    {isProgramsOpen && (
                      <div 
                        className="absolute top-full left-0 pt-2 w-72"
                        onMouseEnter={() => setIsProgramsOpen(true)}
                        onMouseLeave={() => setIsProgramsOpen(false)}
                      >
                        <div className="glass-panel rounded-2xl shadow-2xl p-4 space-y-2 animate-fade-up border-[#087FF8]/10">
                          {programItems.map((prog) => (
                            <Link
                              key={prog.name}
                              to={prog.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#D9EBFF] transition-all duration-200 group/item"
                            >
                              <div className="mt-0.5 p-2 bg-[#F1F8FF] text-[#087FF8] rounded-lg group-hover/item:bg-[#087FF8] group-hover/item:text-white transition-colors duration-200">
                                {prog.icon}
                              </div>
                              <div>
                                <div className="font-bold text-[#1A1A1A] text-sm">{prog.name}</div>
                                <div className="text-xs text-[#5A5A5A] line-clamp-1">{prog.subtitle}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'bg-[#007DFF] text-white font-semibold shadow-lg'
                        : 'text-[#1A1A1A] hover:bg-[#D9EBFF] hover:text-[#007DFF]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/verify"
              className="px-6 py-2.5 bg-[#007DFF] text-white font-semibold  rounded-xl hover:bg-[#066EE2] hover:shadow-lg hover:scale-105 transition-all duration-200 btn-glow"
            >
              Certificate verification
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#065FCC] z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-panel mt-2 mx-4 rounded-2xl overflow-hidden shadow-2xl">
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.isDropdown ? (
                    <div className="space-y-1">
                      <div className="py-2 px-4 text-[#5A5A5A] text-xs font-bold uppercase tracking-wider mt-4 mb-2">
                        {item.name}
                      </div>
                      {programItems.map((prog) => (
                        <Link
                          key={prog.name}
                          to={prog.path}
                          className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                            location.pathname === prog.path
                              ? 'bg-[#007DFF] text-white'
                              : 'text-[#1A1A1A] hover:bg-[#D9EBFF]'
                          }`}
                        >
                          <span className="opacity-70">{prog.icon}</span>
                          {prog.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`py-3 px-4 rounded-xl transition-all duration-200 block ${
                        location.pathname === item.path
                          ? 'bg-[#007DFF] text-white font-semibold'
                          : 'text-[#1A1A1A] hover:bg-[#D9EBFF]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/verify"
                className="mt-4 px-6 py-3 bg-[#007DFF] text-white rounded-xl text-center hover:bg-[#066EE2] transition-colors duration-200"
              >
                Certificate verification
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}