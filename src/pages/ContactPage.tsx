import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ComponentLibrary';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export function ContactPage() {
  const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Save to DB
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

    if (dbError) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // 2. Trigger Email Function
    const { data, error: functionError } =
      await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      });

    if (functionError) {
      console.error("Function error:", functionError);
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    setSubmitStatus("success");
    setFormData(initialFormData);
    setIsSubmitting(false);
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '23/2 Devaraj street, West Tambaram, Chennai - 600045, Tamil Nadu, India',
      action: null,
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 90256 08199',
      action: 'tel:+919025608199',
    },
    {
      icon: Mail,
      title: 'Email ID',
      content: 'support@nipixtechnology.com',
      action: 'mailto:support@nipixtechnology.com',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM',
      action: null,
    },
  ];

  const quickSupport = [
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Talk to our team directly',
      action: 'tel:+919025608199',
      color: '#007DFF',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get response within 24 hours',
      action: 'mailto:support@nipixtechnology.com',
      color: '#065FCC',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Chat with us on WhatsApp',
      action: 'https://wa.me/919025608199',
      color: '#25D366',
    },
  ];

  const socialMedia = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/nipix-technology',
      color: '#0A66C2',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/nipixtechnology',
      color: '#E4405F',
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />*/}

      {/* 1. TOP BANNER */}
      <section className="relative h-[350px] flex items-center overflow-hidden bg-gradient-to-br from-[#007DFF] to-[#007DFF] mt-4">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/3 w-72 h-72 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

        {/* Background Illustration */}
        <div className="absolute right-0 top-0 bottom-0 w-full opacity-100 hidden lg:block">
          <ImageWithFallback
            src="../src/assets/contactpage.png"
            alt="Contact Support"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Get In Touch</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Contact Us
            </h1>

            <p className="text-xl lg:text-2xl text-black opacity-100 leading-relaxed">
              We're here to help you. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* LEFT SIDE - Contact Form Card */}
            <div className="animate-fade-up">
              <div className="bg-white rounded-3xl p-8 lg:p-10 soft-shadow border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-[#1A1A1A] opacity-70">
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="VAC-inquiry">Value Added Course Inquiry</option>
                      <option value="Admission">Admission Process</option>
                      <option value="Technical-support">Technical Support</option>
                      <option value="Partnership">Partnership Opportunities</option>
                      <option value="Feedback">Feedback & Suggestions</option>
                      <option value="Specific-inquiry">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={6}
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold text-lg flex items-center justify-center btn-glow hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl flex items-center animate-fade-up">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
                    <div className="flex-1">
                      <p className="text-green-700 font-semibold">Thank you for contacting Nipix!</p>
                      <p className="text-green-600 text-sm">We'll get back to you shortly.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE - Contact Info Card */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 lg:p-10 soft-shadow border border-gray-100">
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">
                    Contact Information
                  </h2>

                  <div className="space-y-8">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#1A1A1A] mb-1">
                              {info.title}
                            </h3>
                            {info.action ? (
                              <a
                                href={info.action}
                                className="text-[#007DFF] hover:text-[#065FCC] transition-colors whitespace-pre-line"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-[#1A1A1A] opacity-70 whitespace-pre-line">
                                {info.content}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden"
                  >
                  <div className="p-6 border-b border-border">
                      <h3 className="font-semibold text-text-primary flex items-center">
                        <MapPin className="mr-2" size={20} />
                        Visit Our Campus
                      </h3>
                  </div>
                  <div className="h-80 relative">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title="Nipix Technology Campus Location"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d408.97317607137325!2d80.10574013702544!3d12.924422116782617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzI3LjkiTiA4MMKwMDYnMjEuMyJF!5e1!3m2!1sen!2sin!4v1753964218097!5m2!1sen!2sin"
                      className="border-0"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#007DFF] rounded-full flex items-center justify-center">
                          <MapPin size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-text-primary text-sm">Nipix Technology</div>
                          <div className="text-xs text-text-secondary">Tambaram , Chennai</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK SUPPORT SECTION */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Need Help?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">Q</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">uick{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">S</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">upport</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {quickSupport.map((support, index) => {
              const Icon = support.icon;
              return (
                <a
                  key={index}
                  href={support.action}
                  target={support.action.startsWith('http') ? '_blank' : undefined}
                  rel={support.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-white rounded-3xl p-8 text-center soft-shadow hover-lift transition-all duration-300 hover:bg-[#F1F8FF]/50 border border-gray-100 hover:border-[#007DFF] animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                    style={{ 
                      backgroundColor: `${support.color}15`,
                    }}
                  >
                    <Icon 
                      size={32} 
                      style={{ color: support.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#007DFF] transition-colors">
                    {support.title}
                  </h3>

                  <p className="text-[#1A1A1A] opacity-70">
                    {support.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FOLLOW US SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Stay Connected</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">F</span>
                <span className="text-4xl lg:text-5xl font-bold text-black">ollow{' '}</span>
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">U</span>
                <span className="text-4xl lg:text-5xl font-bold text-black">s{' '}</span>
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70 mb-12 max-w-2xl mx-auto">
                Connect with us on social media for updates, tips, and community news
              </p>

              {/* Social Icons */}
              <div className="flex items-center justify-center flex-wrap gap-6">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      aria-label={social.name}
                    >
                      <div 
                        className="w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover-lift"
                        style={{ 
                          borderColor: social.color,
                          backgroundColor: 'white'
                        }}
                      >
                        <Icon 
                          size={28} 
                          style={{ color: social.color }}
                          className="group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="glass-panel px-3 py-1 rounded-full whitespace-nowrap">
                          <span className="text-sm text-[#1A1A1A] font-semibold">
                            {social.name}
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section 
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#EAF3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up">
                <MessageCircle className="text-[#007DFF] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  Quick Response
                </h3>
                <p className="text-[#1A1A1A] opacity-70">
                  We respond to all inquiries within 24 hours
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <Facebook className="text-[#007DFF] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  24/7 Support
                </h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Our support team is always here to help you
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Mail className="text-[#007DFF] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  Email Updates
                </h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Get instant email notifications for your queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA STRIP 
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        {/* Background Pattern 
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6 border-white/40">
                <span className="text-white font-semibold">Start Today</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your Learning Journey?
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive courses and programs designed to help you achieve your career goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
