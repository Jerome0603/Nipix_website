import React, { useState, ReactNode } from 'react';
import { 
  ArrowRight, 
  Loader, 
  ChevronDown, 
  ChevronUp,
  Star,
  Check,
  X,
  Menu,
  Search,
  Code,
  Palette,
  Cloud,
  Brain,
  Users,
  Calendar,
  MapPin,
  Clock,
  Award,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Briefcase,
  PlayCircle,
  Presentation,
  Wrench,
  DollarSign,
  FileCheck,
  Target,
  Tag,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ============================================================================
// ANIMATION TOKENS & DOCUMENTATION
// ============================================================================
/*
Animation Tokens Reference:

1. fade-up
   - Tailwind Class: animate-fade-up
   - Duration: 600ms
   - Easing: cubic-bezier(.22,.8,.36,1)
   - Usage: Initial page load, scroll reveals

2. slide-left
   - Tailwind Class: animate-slide-left
   - Duration: 500ms
   - Easing: cubic-bezier(.22,.8,.36,1)
   - Usage: Right-to-left content reveals

3. slide-right
   - Tailwind Class: animate-slide-right
   - Duration: 500ms
   - Easing: cubic-bezier(.22,.8,.36,1)
   - Usage: Left-to-right content reveals

4. float
   - Tailwind Class: animate-float
   - Duration: 3000ms
   - Easing: ease-in-out
   - Usage: Floating background shapes, cards

5. hover-lift
   - Tailwind Class: hover-lift
   - Duration: 300ms
   - Transform: translateY(-8px)
   - Usage: Cards, buttons on hover

Stagger Timing Examples:
- First item: 0ms (delay-0)
- Second item: 80ms (style={{ animationDelay: '0.08s' }})
- Third item: 160ms (style={{ animationDelay: '0.16s' }})
- Fourth item: 240ms (style={{ animationDelay: '0.24s' }})
*/

// ============================================================================
// SPACING SYSTEM
// ============================================================================
/*
Spacing Scale (use consistently):
- xs: 8px (2 in Tailwind)
- sm: 12px (3 in Tailwind)
- md: 16px (4 in Tailwind)
- lg: 24px (6 in Tailwind)
- xl: 32px (8 in Tailwind)
- 2xl: 48px (12 in Tailwind)

Usage Examples:
- Component padding: p-6 (24px), p-8 (32px)
- Gap between items: gap-3 (12px), gap-4 (16px), gap-6 (24px)
- Section spacing: py-12 (48px), py-20 (80px)
*/

// ============================================================================
// TYPOGRAPHY STYLES
// ============================================================================

export const Typography = {
  DisplayHeader: ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <h1 className={`text-5xl lg:text-6xl font-semibold text-[#003C78] leading-tight ${className}`}>
      {children}
    </h1>
  ),

  SectionTitle: ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <h2 className={`text-4xl lg:text-5xl font-bold text-[#003C78] tracking-tight ${className}`}>
      {children}
    </h2>
  ),

  SubsectionTitle: ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <h3 className={`text-3xl font-bold text-[#003C78] ${className}`}>
      {children}
    </h3>
  ),

  BodyText: ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <p className={`text-lg text-[#1A1A1A] leading-relaxed ${className}`}>
      {children}
    </p>
  ),

  Caption: ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <span className={`text-sm text-[#1A1A1A] opacity-70 ${className}`}>
      {children}
    </span>
  ),
};

// ============================================================================
// 1. BUTTON COMPONENTS
// ============================================================================

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

// Primary Button - Solid Blue
export const PrimaryButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
  href,
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center px-8 py-4 
    bg-[#0A66C2] text-white rounded-xl 
    transition-all duration-300
    ${!disabled && !loading ? 'hover:bg-[#003C78] hover:-translate-y-1 hover:shadow-xl btn-glow' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (href && !disabled && !loading) {
    return (
      <Link to={href} className={baseClasses}>
        {loading ? <Loader className="animate-spin mr-2" size={20} /> : null}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
    >
      {loading ? <Loader className="animate-spin mr-2" size={20} /> : null}
      {children}
    </button>
  );
};

// Secondary Glass Button
export const SecondaryButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
  href,
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center px-8 py-4 
    glass-panel text-[#003C78] rounded-xl 
    border border-white/60
    transition-all duration-300
    ${!disabled && !loading ? 'hover:shadow-xl hover:-translate-y-1' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (href && !disabled && !loading) {
    return (
      <Link to={href} className={baseClasses}>
        {loading ? <Loader className="animate-spin mr-2" size={20} /> : null}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
    >
      {loading ? <Loader className="animate-spin mr-2" size={20} /> : null}
      {children}
    </button>
  );
};

// Tertiary Button - Text Only
export const TertiaryButton = ({ 
  children, 
  onClick, 
  disabled = false,
  className = '',
  href,
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center text-[#003C78] font-semibold
    transition-all duration-300
    ${!disabled ? 'hover:text-[#0A66C2] hover:underline' : 'opacity-50 cursor-not-allowed'}
    ${className}
  `;

  if (href && !disabled) {
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

// ============================================================================
// 2. INPUT FIELD COMPONENTS
// ============================================================================

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  error?: string;
  success?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

// Default Input
export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  success,
  helperText,
  disabled = false,
  required = false,
  className = '',
}: InputProps) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-[#003C78] font-semibold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-3 rounded-xl bg-white border-2
          text-[#1A1A1A] placeholder-[#1A1A1A]/40
          transition-all duration-300
          ${error ? 'border-red-500 focus:ring-red-500' : success ? 'border-green-500 focus:ring-green-500' : 'border-gray-200 focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20'}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
          focus:outline-none
        `}
      />
      {error && (
        <div className="flex items-center mt-2 text-red-500 text-sm">
          <X size={16} className="mr-1" />
          {error}
        </div>
      )}
      {success && !error && (
        <div className="flex items-center mt-2 text-green-500 text-sm">
          <Check size={16} className="mr-1" />
          Looks good!
        </div>
      )}
      {helperText && !error && !success && (
        <p className="mt-2 text-sm text-[#1A1A1A] opacity-60">{helperText}</p>
      )}
    </div>
  );
};

// Glass Input
export const GlassInput = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled = false,
  required = false,
  className = '',
}: InputProps) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-[#003C78] font-semibold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-6 py-4 rounded-xl 
          glass-panel border-2 border-white/60
          text-[#003C78] placeholder-[#003C78]/50
          backdrop-blur-xl
          transition-all duration-300
          ${error ? 'border-red-500' : 'focus:border-[#0A66C2]'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20
        `}
      />
      {error && (
        <div className="flex items-center mt-2 text-red-500 text-sm">
          <X size={16} className="mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

// Text Area
interface TextAreaProps extends Omit<InputProps, 'type'> {
  rows?: number;
}

export const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  success,
  helperText,
  disabled = false,
  required = false,
  rows = 4,
  className = '',
}: TextAreaProps) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-[#003C78] font-semibold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-xl bg-white border-2
          text-[#1A1A1A] placeholder-[#1A1A1A]/40
          transition-all duration-300 resize-y
          ${error ? 'border-red-500 focus:ring-red-500' : success ? 'border-green-500 focus:ring-green-500' : 'border-gray-200 focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20'}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
          focus:outline-none
        `}
      />
      {error && (
        <div className="flex items-center mt-2 text-red-500 text-sm">
          <X size={16} className="mr-1" />
          {error}
        </div>
      )}
      {success && !error && (
        <div className="flex items-center mt-2 text-green-500 text-sm">
          <Check size={16} className="mr-1" />
          Looks good!
        </div>
      )}
      {helperText && !error && !success && (
        <p className="mt-2 text-sm text-[#1A1A1A] opacity-60">{helperText}</p>
      )}
    </div>
  );
};

// ============================================================================
// 3. NAVIGATION BAR COMPONENT
// ============================================================================

interface NavBarProps {
  isScrolled?: boolean;
  transparent?: boolean;
}

export const NavBar = ({ isScrolled = false, transparent = false }: NavBarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Events', href: '/events' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ];

  const programsItems = [
    { 
      label: 'Value Added Courses', 
      href: '/vac', 
      icon: PlayCircle,
      subtitle: 'Specialized training'
    },
    { 
      label: 'Seminars', 
      href: '/seminars', 
      icon: Presentation,
      subtitle: 'Educational sessions'
    },
    { 
      label: 'Workshops', 
      href: '/workshops', 
      icon: Wrench,
      subtitle: 'Practical training'
    },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || !transparent ? 'glass-panel backdrop-blur-xl shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-[#007DFF]">
              Nipix Technology
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home, About, Courses */}
            <Link
              to="/"
              className="text-[#003C78] hover:text-[#007DFF] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#003C78] hover:text-[#007DFF] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-[#003C78] hover:text-[#007DFF] transition-colors font-medium"
            >
              Courses
            </Link>
            
            {/* Programs Dropdown (NOT A LINK) */}
            <div 
              className="relative group"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button className="flex items-center text-[#003C78] hover:text-[#007DFF] transition-colors font-medium cursor-pointer">
                Programs
                <ChevronDown 
                  size={18} 
                  className={`ml-1 transition-transform duration-200 ${programsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Panel */}
              {programsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                  {/* Arrow Caret */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 backdrop-blur-2xl rotate-45 border-l border-t border-gray-200"></div>
                  
                  {/* Dropdown Content */}
                  <div className="relative bg-white/90 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-gray-200 w-72 animate-fade-up">
                    <div className="space-y-2">
                      {programsItems.map((program) => {
                        const Icon = program.icon;
                        return (
                          <Link
                            key={program.label}
                            to={program.href}
                            className="flex items-start p-3 rounded-xl hover:bg-[#D9EBFF]/50 transition-all duration-200 hover:translate-x-1 group"
                          >
                            <div className="w-10 h-10 bg-[#007DFF] rounded-xl flex items-center justify-center flex-shrink-0 mr-3 group-hover:scale-110 transition-transform">
                              <Icon className="text-white" size={20} />
                            </div>
                            <div className="flex-grow">
                              <div className="text-[#003C78] font-semibold group-hover:text-[#007DFF] transition-colors">
                                {program.label}
                              </div>
                              <div className="text-xs text-[#1A1A1A] opacity-60">
                                {program.subtitle}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Events, Blogs, Contact */}
            <Link
              to="/events"
              className="text-[#003C78] hover:text-[#007DFF] transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              to="/blogs"
              className="text-[#003C78] hover:text-[#007DFF] transition-colors font-medium"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-[#003C78] hover:text-[#007DFF] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#007DFF] text-white rounded-xl hover:bg-[#066EE2] transition-all duration-300 btn-glow font-semibold"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#003C78]"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-white/60">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#003C78] hover:text-[#007DFF] transition-colors font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Programs Accordion */}
            <div>
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="flex items-center justify-between w-full text-[#003C78] hover:text-[#007DFF] transition-colors font-medium py-2"
              >
                Programs
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-200 ${mobileProgramsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {mobileProgramsOpen && (
                <div className="mt-2 ml-4 space-y-2 animate-slide-right">
                  {programsItems.map((program) => {
                    const Icon = program.icon;
                    return (
                      <Link
                        key={program.label}
                        to={program.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileProgramsOpen(false);
                        }}
                        className="flex items-start p-3 rounded-xl bg-white/30 hover:bg-[#D9EBFF]/50 transition-all"
                      >
                        <div className="w-8 h-8 bg-[#007DFF] rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                          <Icon className="text-white" size={16} />
                        </div>
                        <div>
                          <div className="text-[#003C78] font-semibold text-sm">
                            {program.label}
                          </div>
                          <div className="text-xs text-[#1A1A1A] opacity-60">
                            {program.subtitle}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-6 py-4 bg-[#007DFF] text-white text-center rounded-xl hover:bg-[#066EE2] transition-colors font-semibold"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// ============================================================================
// 4. FOOTER COMPONENT
// ============================================================================

export const Footer = () => {
  const footerLinks = {
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'Team', href: '/about#team' },
      { label: 'Careers', href: '/contact' },
      { label: 'Contact', href: '/contact' },
    ],
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'Programs', href: '/programs' },
      { label: 'Events', href: '/events' },
      { label: 'Blogs', href: '/blogs' },
    ],
    courses: [
      { label: 'Web Development', href: '/courses' },
      { label: 'Data Science', href: '/courses' },
      { label: 'UI/UX Design', href: '/courses' },
      { label: 'Cloud Computing', href: '/courses' },
    ],
    contact: [
      { label: 'Email: info@nipix.tech', href: 'mailto:info@nipix.tech' },
      { label: 'Phone: +1 234 567 8900', href: 'tel:+12345678900' },
      { label: 'Location: Silicon Valley, CA', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#003C78] to-[#0A66C2] text-white py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Desktop 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">About Nipix</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 Nipix Technology. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// 5. CARD COMPONENTS
// ============================================================================

// Course Card
interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level?: string;
  price?: string;
  instructor?: string;
  rating?: number;
  reviews?: number;
  category?: string;
  tags?: string[];
}

export const CourseCard = ({ 
  id, 
  title, 
  description, 
  image, 
  duration, 
  level, 
  price, 
  instructor = 'Jennifer Lee',
  rating = 4.8,
  reviews = 23456,
  category = 'Programming',
  tags = ['JavaScript', 'Programming', 'Beginner']
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 h-[540px] flex flex-col">
      {/* 1. TOP IMAGE / THUMBNAIL */}
      <div className="relative h-[200px] overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* 2. CATEGORY TAGS */}
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 bg-[#D9EBFF] text-[#007DFF] rounded-full text-xs font-semibold">
            {category}
          </span>
          {level && (
            <span className="px-3 py-1 bg-[#D9EBFF] text-[#007DFF] rounded-full text-xs font-semibold">
              {level}
            </span>
          )}
        </div>
        
        {/* 3. COURSE TITLE */}
        <h3 className="text-xl font-bold text-[#003C78] mb-3 line-clamp-2">{title}</h3>
        
        {/* 4. COURSE SHORT DESCRIPTION */}
        <p className="text-[#1A1A1A] opacity-70 mb-4 line-clamp-2 text-sm">{description}</p>
        
        {/* 5. INSTRUCTOR INFO */}
        <div className="flex items-center mb-4">
          <Users size={16} className="text-[#007DFF] mr-2" />
          <span className="text-sm text-[#1A1A1A] opacity-70">{instructor}</span>
        </div>
        
        {/* 6. RATING & DURATION ROW */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="fill-current text-yellow-400" size={16} />
            <span className="ml-1 text-sm font-semibold text-[#1A1A1A]">{rating}</span>
            <span className="ml-1 text-sm text-[#1A1A1A] opacity-50">({reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center text-[#007DFF]">
            <Clock size={16} className="mr-1" />
            <span className="text-sm font-semibold">{duration}</span>
          </div>
        </div>

        {/* Spacer to push bottom content down */}
        <div className="flex-grow"></div>

        {/* 7. DIVIDER */}
        <div className="border-t border-gray-200 mb-4"></div>

        {/* 8. BOTTOM TAGS ROW */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs text-[#007DFF] hover:underline cursor-pointer">
              {tag}
              {index < tags.length - 1 && <span className="ml-2 text-[#1A1A1A] opacity-30">•</span>}
            </span>
          ))}
        </div>

        {/* 9 & 10. PRICE + CTA ROW */}
        <div className="flex items-center justify-between">
          {price && (
            <span className="text-2xl font-bold text-[#007DFF]">{price}</span>
          )}
          <Link
            to={`/courses/${id}`}
            className="px-6 py-3 bg-[#007DFF] text-white rounded-xl hover:bg-[#066EE2] transition-colors font-semibold"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

// Program Card - Horizontal Design
interface ProgramCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  modules: number;
}

export const ProgramCard = ({ id, title, description, image, duration, modules }: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 flex flex-col lg:flex-row">
      <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="lg:w-3/5 p-8">
        <h3 className="text-3xl font-bold text-[#003C78] mb-4">{title}</h3>
        <p className="text-[#1A1A1A] opacity-80 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center text-[#0A66C2]">
            <Clock size={20} className="mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-[#0A66C2]">
            <Award size={20} className="mr-2" />
            <span>{modules} Modules</span>
          </div>
        </div>

        <Link
          to={`/program/${id}`}
          className="inline-flex items-center px-8 py-3 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-colors"
        >
          View Details
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  );
};

// Event Card
interface EventCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
}

export const EventCard = ({ id, title, description, image, date, time, location }: EventCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 left-4 glass-panel px-4 py-2 rounded-xl border-white/60">
          <div className="text-white font-bold text-lg">{date.split(' ')[1]}</div>
          <div className="text-white text-sm">{date.split(' ')[0]}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#003C78] mb-3">{title}</h3>
        <p className="text-[#1A1A1A] opacity-70 mb-4">{description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-[#1A1A1A] opacity-70">
            <Clock size={16} className="mr-2 text-[#0A66C2]" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-[#1A1A1A] opacity-70">
            <MapPin size={16} className="mr-2 text-[#0A66C2]" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <Link
          to={`/events/${id}`}
          className="block w-full px-6 py-3 glass-panel text-[#003C78] text-center rounded-xl hover:shadow-lg transition-all font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

// Blog Card
interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const BlogCard = ({ id, title, excerpt, image, category, author, date, readTime }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A66C2] text-white rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#003C78] mb-3 line-clamp-2">{title}</h3>
        <p className="text-[#1A1A1A] opacity-70 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mb-4">
          <span className="text-sm text-[#1A1A1A] opacity-70">{author}</span>
          <span className="text-sm text-[#1A1A1A] opacity-70">{date}</span>
        </div>

        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-[#0A66C2] font-semibold hover:text-[#003C78] transition-colors"
        >
          Read More
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </article>
  );
};

// ============================================================================
// 6. BADGE COMPONENTS
// ============================================================================

interface BadgeProps {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'tag';
  className?: string;
}

export const Badge = ({ children, variant = 'solid', className = '' }: BadgeProps) => {
  const variants = {
    solid: 'bg-[#0A66C2] text-white',
    outline: 'bg-transparent border-2 border-[#0A66C2] text-[#0A66C2]',
    tag: 'bg-[#E8F3FF] text-[#0A66C2] border border-[#0A66C2]/20',
  };

  return (
    <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// ============================================================================
// 7. ICON SET
// ============================================================================

export const Icons = {
  // Navigation
  Menu,
  Search,
  X,
  
  // Social
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  
  // Course/Content
  Code,
  Palette,
  Cloud,
  Brain,
  
  // Program/Events
  Users,
  Calendar,
  MapPin,
  Clock,
  Award,
  
  // UI
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Star,
  Loader,
  Briefcase,
  PlayCircle,
  Presentation,
  Wrench,
  DollarSign,
  FileCheck,
  Target,
  Tag,
  TrendingUp,
};

// ============================================================================
// 8. ACCORDION COMPONENT
// ============================================================================

interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  glassBg?: boolean;
}

export const AccordionItem = ({ title, content, isOpen, onClick, glassBg = false }: AccordionItemProps) => {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${glassBg ? 'glass-panel' : 'bg-white soft-shadow'}`}>
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#E8F3FF]/50 transition-colors"
      >
        <h3 className="text-xl font-bold text-[#003C78] text-left">{title}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-[#0A66C2]" size={24} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-white/50 border-t border-white/60 animate-slide-right">
          <div className="text-[#1A1A1A] opacity-80 leading-relaxed">{content}</div>
        </div>
      )}
    </div>
  );
};

// Accordion Container
interface AccordionProps {
  items: { title: string; content: ReactNode }[];
  glassBg?: boolean;
  className?: string;
}

export const Accordion = ({ items, glassBg = false, className = '' }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          glassBg={glassBg}
        />
      ))}
    </div>
  );
};

// ============================================================================
// 9. TESTIMONIAL CARD COMPONENT
// ============================================================================

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  image: string;
  rating: number;
  text: string;
  variant?: 'default' | 'hero';
  className?: string;
}

export const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  image, 
  rating, 
  text, 
  variant = 'default',
  className = '' 
}: TestimonialCardProps) => {
  if (variant === 'hero') {
    return (
      <div className={`glass-panel rounded-3xl p-8 lg:p-12 shadow-2xl animate-fade-up ${className}`}>
        <div className="flex mb-6">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="fill-current text-yellow-400" size={28} />
          ))}
        </div>
        
        <blockquote className="text-2xl lg:text-3xl text-[#003C78] font-semibold mb-8 leading-relaxed">
          "{text}"
        </blockquote>

        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full mr-6 object-cover border-4 border-[#0A66C2]/40"
          />
          <div>
            <div className="text-xl font-bold text-[#003C78]">{name}</div>
            <div className="text-[#0A66C2]">{role}</div>
            {company && <div className="text-[#1A1A1A] opacity-70 text-sm">{company}</div>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-panel rounded-2xl p-6 shadow-xl hover-lift animate-fade-up ${className}`}>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="fill-current text-yellow-400" size={18} />
        ))}
      </div>

      <p className="text-[#1A1A1A] opacity-80 mb-6 leading-relaxed">
        "{text}"
      </p>

      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#0A66C2]/40"
        />
        <div>
          <div className="text-[#003C78] font-semibold">{name}</div>
          <div className="text-[#1A1A1A] opacity-70 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 10. CTA BANNER COMPONENT
// ============================================================================

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'full' | 'half';
  className?: string;
}

export const CTABanner = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  variant = 'full',
  className = '' 
}: CTABannerProps) => {
  return (
    <section 
      className={`
        py-20 lg:py-28 bg-gradient-to-br from-[#003C78] to-[#0A66C2] relative overflow-hidden
        ${variant === 'half' ? 'rounded-3xl' : ''}
        ${className}
      `}
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h2>
          
          {description && (
            <p className="text-xl lg:text-2xl text-white/90 mb-10">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={buttonHref}
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#0A66C2] rounded-xl hover:shadow-2xl transition-all duration-300 btn-glow text-lg font-semibold"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// 11. BREADCRUMB / PATH BAR COMPONENT
// ============================================================================

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  // For mobile, show Home > ... > Current if more than 3 items
  const shouldCollapse = items.length > 3;
  
  return (
    <nav className={`py-3 lg:py-4 animate-fade-up ${className}`} aria-label="Breadcrumb">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Desktop: Full breadcrumb */}
        <ol className="hidden md:flex items-center flex-wrap gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                {!isLast && item.href ? (
                  <Link
                    to={item.href}
                    className="text-sm text-[#007DFF] hover:text-[#065FCC] hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm text-[#065FCC] font-semibold">
                    {item.label}
                  </span>
                )}
                
                {!isLast && (
                  <span className="mx-2 text-sm text-gray-400">{'>'}</span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Mobile: Collapsed breadcrumb (Home > ... > Current) */}
        <ol className="flex md:hidden items-center flex-wrap gap-2">
          {shouldCollapse ? (
            <>
              {/* First item (Home) */}
              <li className="flex items-center">
                <Link
                  to={items[0].href || '/'}
                  className="text-sm text-[#007DFF] hover:text-[#065FCC] hover:underline transition-colors"
                >
                  {items[0].label}
                </Link>
                <span className="mx-2 text-sm text-gray-400">{'>'}</span>
              </li>
              
              {/* Ellipsis */}
              <li className="flex items-center">
                <span className="text-sm text-gray-400">...</span>
                <span className="mx-2 text-sm text-gray-400">{'>'}</span>
              </li>
              
              {/* Last item (Current) */}
              <li>
                <span className="text-sm text-[#065FCC] font-semibold">
                  {items[items.length - 1].label}
                </span>
              </li>
            </>
          ) : (
            // Show full breadcrumb if 3 or fewer items
            items.map((item, index) => {
              const isLast = index === items.length - 1;
              
              return (
                <li key={index} className="flex items-center">
                  {!isLast && item.href ? (
                    <Link
                      to={item.href}
                      className="text-sm text-[#007DFF] hover:text-[#065FCC] hover:underline transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-[#065FCC] font-semibold">
                      {item.label}
                    </span>
                  )}
                  
                  {!isLast && (
                    <span className="mx-2 text-sm text-gray-400">{'>'}</span>
                  )}
                </li>
              );
            })
          )}
        </ol>
      </div>
    </nav>
  );
};

// ============================================================================
// EXAMPLE USAGE & DEMO COMPONENT
// ============================================================================

export const ComponentLibraryShowcase = () => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  return (
    <div className="p-12 space-y-24 bg-gray-50">
      {/* Typography */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#003C78]">Typography</h2>
        <div className="space-y-6 bg-white p-8 rounded-2xl">
          <Typography.DisplayHeader>Display Header</Typography.DisplayHeader>
          <Typography.SectionTitle>Section Title</Typography.SectionTitle>
          <Typography.SubsectionTitle>Subsection Title</Typography.SubsectionTitle>
          <Typography.BodyText>Body text with comfortable line height and readability</Typography.BodyText>
          <Typography.Caption>Caption text for small details</Typography.Caption>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#003C78]">Buttons</h2>
        <div className="flex flex-wrap gap-4 bg-white p-8 rounded-2xl">
          <PrimaryButton>Primary Button</PrimaryButton>
          <PrimaryButton loading>Loading</PrimaryButton>
          <PrimaryButton disabled>Disabled</PrimaryButton>
          <SecondaryButton>Secondary Button</SecondaryButton>
          <TertiaryButton>Tertiary Button</TertiaryButton>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#003C78]">Input Fields</h2>
        <div className="space-y-6 bg-white p-8 rounded-2xl">
          <Input
            label="Default Input"
            placeholder="Enter text..."
            value={inputValue}
            onChange={setInputValue}
            helperText="This is helper text"
          />
          <GlassInput
            label="Glass Input"
            placeholder="Enter email..."
            value={emailValue}
            onChange={setEmailValue}
            type="email"
          />
          <TextArea
            label="Text Area"
            placeholder="Enter message..."
            value={textAreaValue}
            onChange={setTextAreaValue}
            rows={4}
          />
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#003C78]">Badges</h2>
        <div className="flex flex-wrap gap-4 bg-white p-8 rounded-2xl">
          <Badge variant="solid">Solid Badge</Badge>
          <Badge variant="outline">Outline Badge</Badge>
          <Badge variant="tag">Tag Badge</Badge>
        </div>
      </section>

      {/* Accordion */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#003C78]">Accordion</h2>
        <Accordion
          items={[
            { title: 'Question 1', content: 'Answer to question 1 with detailed information.' },
            { title: 'Question 2', content: 'Answer to question 2 with detailed information.' },
            { title: 'Question 3', content: 'Answer to question 3 with detailed information.' },
          ]}
        />
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#003C78]">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="John Doe"
            role="Software Engineer"
            company="Tech Corp"
            image="https://i.pravatar.cc/150?img=12"
            rating={5}
            text="This course changed my career! Highly recommended for anyone looking to level up."
          />
          <TestimonialCard
            name="Jane Smith"
            role="Product Designer"
            image="https://i.pravatar.cc/150?img=5"
            rating={5}
            text="Amazing learning experience with excellent support from instructors."
          />
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// RE-EXPORT DISTINCT CARD COMPONENTS
// ============================================================================

export { 
  CourseProductCard,
  EventDateCard,
  WorkshopSessionCard,
  SeminarTalkCard,
  BlogEditorialCard,
  InternshipProgramCard,
} from './SectionCards';