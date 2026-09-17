import React, { ReactNode, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight,
  ChevronRight as BreadcrumbArrow,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Award,
} from 'lucide-react';
import { internships } from '../data/internships';
import { supabase } from '../lib/supabase';


// ============================================================================
// A. SEARCH BAR COMPONENT
// ============================================================================

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  className?: string;
}

export const SearchBar = ({ 
  placeholder = 'Search...', 
  value, 
  onChange, 
  onSearch,
  className = '' 
}: SearchBarProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="w-full px-6 py-4 pl-14 rounded-xl glass-panel border-2 border-white/60 text-[#065FCC] placeholder-[#065FCC]/50 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-[#5BB0FF]/20 transition-all duration-300"
      />
      <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#007DFF]" size={20} />
    </div>
  );
};

// ============================================================================
// B. PAGINATION COMPONENT
// ============================================================================

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
          currentPage === 1
            ? 'glass-panel opacity-50 cursor-not-allowed'
            : 'glass-panel hover:bg-[#007DFF] hover:text-white'
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 text-[#065FCC]">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl font-semibold transition-all duration-300 ${
                currentPage === page
                  ? 'bg-[#007DFF] text-white shadow-lg'
                  : 'glass-panel text-[#065FCC] hover:bg-[#007DFF] hover:text-white'
              }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
          currentPage === totalPages
            ? 'glass-panel opacity-50 cursor-not-allowed'
            : 'glass-panel hover:bg-[#007DFF] hover:text-white'
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

// ============================================================================
// C. BREADCRUMB COMPONENT
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
  return (
    <nav className={`flex items-center text-sm ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link
              to={item.href}
              className="text-[#0A66C2] hover:text-[#007DFF] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1A1A1A] opacity-70">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <BreadcrumbArrow size={16} className="mx-2 text-[#1A1A1A] opacity-40" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

// ============================================================================
// D. CTA BANNER COMPONENT (Enhanced)
// ============================================================================

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'full' | 'compact';
  className?: string;
}

export const CTABanner = ({
  title,
  description,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  variant = 'full',
  className = '',
}: CTABannerProps) => {
  return (
    <section
      className={`
        ${variant === 'full' ? 'py-20 lg:py-28' : 'py-12 lg:py-16'}
        bg-gradient-to-br from-[#007DFF] to-[#0A66C2] 
        relative overflow-hidden rounded-2xl
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
          <h2 className={`${variant === 'full' ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl'} font-bold text-white mb-6`}>
            {title}
          </h2>

          {description && (
            <p className="text-xl text-white/90 mb-10">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={buttonHref}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#0A66C2] rounded-xl hover:shadow-2xl transition-all duration-300 btn-glow font-semibold text-lg"
            >
              {buttonText}
            </Link>

            {secondaryButtonText && secondaryButtonHref && (
              <Link
                to={secondaryButtonHref}
                className="inline-flex items-center justify-center px-10 py-4 glass-panel text-white rounded-xl hover:shadow-xl transition-all duration-300 border-white/40 font-semibold text-lg"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// E. TESTIMONIALS COMPONENT
// ============================================================================

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  image: string;
  rating: number;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  variant?: 'grid' | 'carousel';
  className?: string;
}

export const Testimonials = ({ testimonials, variant = 'grid', className = '' }: TestimonialsProps) => {
  return (
    <section className={className}>
      <div className="text-center mb-16">
        <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
          <span className="text-[#0A66C2]">Student Success Stories</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#007DFF] mb-6">
          What Our Students Say
        </h2>
        <p className="text-xl text-[#1A1A1A] opacity-80">
          Hear from learners who transformed their careers with us
        </p>
      </div>

      <div className={`grid ${variant === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="glass-panel rounded-2xl p-8 shadow-xl hover-lift animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="fill-current text-yellow-400" size={18} />
              ))}
            </div>

            <p className="text-[#1A1A1A] opacity-80 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#0A66C2]/40"
              />
              <div>
                <div className="text-[#007DFF] font-semibold">{testimonial.name}</div>
                <div className="text-[#1A1A1A] opacity-70 text-sm">{testimonial.role}</div>
                {testimonial.company && (
                  <div className="text-[#0A66C2] text-xs">{testimonial.company}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// F. CONTACT INFO BLOCK
// ============================================================================

interface ContactInfoProps {
  phone?: string;
  email?: string;
  supportText?: string;
  className?: string;
}

export const ContactInfoBlock = ({ 
  phone = '+1 234 567 8900',
  email = 'info@nipix.tech',
  supportText = 'Available 24/7 for support',
  className = '' 
}: ContactInfoProps) => {
  return (
    <div className={`glass-panel rounded-2xl p-8 shadow-xl ${className}`}>
      <h3 className="text-2xl font-bold text-[#007DFF] mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
            <Phone className="text-white" size={20} />
          </div>
          <div>
            <div className="text-[#007DFF] font-semibold mb-1">Phone</div>
            <a href={`tel:${phone}`} className="text-[#1A1A1A] opacity-80 hover:text-[#0A66C2] transition-colors">
              {phone}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
            <Mail className="text-white" size={20} />
          </div>
          <div>
            <div className="text-[#007DFF] font-semibold mb-1">Email</div>
            <a href={`mailto:${email}`} className="text-[#1A1A1A] opacity-80 hover:text-[#0A66C2] transition-colors">
              {email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div>
            <div className="text-[#007DFF] font-semibold mb-1">Quick Support</div>
            <p className="text-[#1A1A1A] opacity-80">{supportText}</p>
          </div>
        </div>
      </div>

      <Link
        to="/contact"
        className="mt-8 block w-full px-6 py-3 bg-[#0A66C2] text-white text-center rounded-xl hover:bg-[#007DFF] transition-colors font-semibold"
      >
        Get in Touch
      </Link>
    </div>
  );
};

// ============================================================================
// G. FAQ BLOCK COMPONENT
// ============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

export const FAQBlock = ({ 
  faqs, 
  title = 'Frequently Asked Questions',
  description = 'Find answers to common questions',
  className = '' 
}: FAQBlockProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
          <span className="text-[#0A66C2]">Have Questions?</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#007DFF] mb-4">
          {title}
        </h2>
        <p className="text-xl text-[#1A1A1A] opacity-80">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-panel rounded-2xl overflow-hidden hover-lift transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#E8F3FF]/50 transition-colors duration-200"
            >
              <h3 className="text-lg font-bold text-[#007DFF] text-left pr-4">
                {faq.question}
              </h3>
              <ChevronRight
                className={`text-[#0A66C2] flex-shrink-0 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-90' : ''
                }`}
                size={24}
              />
            </button>

            {openIndex === index && (
              <div className="px-8 py-6 bg-white border-t border-white/60 animate-slide-right">
                <p className="text-[#1A1A1A] opacity-80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// H. CERTIFICATE PREVIEW COMPONENT
// ============================================================================

interface CertificatePreviewProps {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
}

export const CertificatePreview = ({
  title = 'Sample Certificate',
  description = 'Upon completion, you will receive a verified certificate',
  image = 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/sign/Certificate_templates/internship_sample.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzZiM2U0ZC01MmJlLTRkNmEtYmFjZi0xMDYxNWQ5ZTBjNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDZXJ0aWZpY2F0ZV90ZW1wbGF0ZXMvaW50ZXJuc2hpcF9zYW1wbGUuanBlZyIsImlhdCI6MTc3MTI1MDE0MSwiZXhwIjozMzMwNzI1MDE0MX0.sKSX6P3BFSl8lNMI-ZNpoio7cqRWt6ppnyj13fsXGQQ',
  className = '',
}: CertificatePreviewProps) => {
  return (
    <section className={className}>
      <div className="text-center mb-12">
        <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
          <span className="text-[#0A66C2] font-bold">Certification</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#007DFF] mb-4">
          {title}
        </h2>
        <p className="text-xl text-[#1A1A1A] opacity-80">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-3xl p-6 shadow-2xl animate-float">
          <img
            src={image}
            alt="Sample Certificate"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center glass-panel px-6 py-3 rounded-xl">
            <Award className="text-[#0A66C2] mr-3" size={24} />
            <span className="text-[#007DFF] font-semibold">
              Verified & Shareable on LinkedIn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// I. REGISTRATION FORM COMPONENT
// ============================================================================

interface RegistrationFormProps {
  type?: 'course' | 'event' | 'internship' | 'vac' | 'seminar' | 'workshop';
  referenceId: string;
  itemName: string;
  onSubmit?: (data: any) => void;
  className?: string;
  
}
  export const RegistrationForm = ({
    referenceId,
    itemName,
    onSubmit,
    className = '' 
  }: RegistrationFormProps) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      college: '',
      message: '',
    });
  
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const { error } = await supabase.from("registrations").insert({
          registration_type: "internship",        // course | internship | seminar | workshop | vac
          reference_id: referenceId,            // ID from your page
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || null,
          extra_data: {
            college: formData.college,
            internship_title: itemName,
          },
        });
  
      if (error) {
        console.error("SUPABASE ERROR:", error);
        setIsSubmitting(false);
        alert(error.message);
        return;
      }

      const { error: functionError } = await supabase.functions.invoke("send-internship-registration", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          message: formData.message,
          internshipTitle: itemName,
        },
      });

      if (functionError) {
        console.error("INTERNSHIP EMAIL ERROR:", functionError);
        setIsSubmitting(false);
        alert(functionError.message);
        return;
      }

    // Redirect to thank you page
    window.location.href = '/thank-you';
  };

  return (
    <div className={`glass-panel rounded-2xl p-8 shadow-xl sticky top-32 ${className}`}>
      <h3 className="text-2xl font-bold text-[#007DFF] mb-2">Register Now</h3>
      <p className="text-[#1A1A1A] opacity-70 mb-6">
        Enroll in {itemName}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#007DFF] font-semibold mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-[#007DFF] font-semibold mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-[#007DFF] font-semibold mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label className="block text-[#007DFF] font-semibold mb-2">
            College Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.college}
            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all"
            placeholder="Enter your college name"
          />
        </div>

        <div>
          <label className="block text-[#007DFF] font-semibold mb-2">
            Message (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all resize-y"
            placeholder="Any questions or special requirements?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-[#007DFF] text-white rounded-xl hover:bg-[#0A66C2] transition-colors font-semibold text-lg disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-[#007DFF]"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center justify-center gap-2">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Registering...
            </span>
          ) : (
            'Complete Registration'
          )}
        </button>

        <p className="text-xs text-[#1A1A1A] opacity-60 text-center">
          By registering, you agree to our Terms & Privacy Policy
        </p>
      </form>
    </div>
  );
};
