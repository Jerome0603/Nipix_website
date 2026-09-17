import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Mail } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF] relative overflow-hidden">
      {/* Parallax Background Shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#003C78] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.6s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-12 animate-fade-up">
            <div className="text-[200px] lg:text-[300px] font-bold text-[#0A66C2] opacity-20 leading-none">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#003C78] mb-6">
              Page Not Found
            </h1>
            <p className="text-2xl text-[#1A1A1A] opacity-80 mb-4">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-xl text-[#1A1A1A] opacity-70 mb-12">
              It might have been moved or deleted. Let's get you back on track!
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/"
              className="glass-panel rounded-2xl p-6 hover-lift transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A66C2] transition-colors">
                <Home className="text-[#0A66C2] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#003C78] mb-2">Go Home</h3>
              <p className="text-[#1A1A1A] opacity-70 text-sm">
                Back to homepage
              </p>
            </Link>

            <Link
              to="/courses"
              className="glass-panel rounded-2xl p-6 hover-lift transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A66C2] transition-colors">
                <Search className="text-[#0A66C2] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#003C78] mb-2">Browse Courses</h3>
              <p className="text-[#1A1A1A] opacity-70 text-sm">
                Explore our programs
              </p>
            </Link>

            <Link
              to="/blogs"
              className="glass-panel rounded-2xl p-6 hover-lift transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A66C2] transition-colors">
                <Search className="text-[#0A66C2] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#003C78] mb-2">Read Blogs</h3>
              <p className="text-[#1A1A1A] opacity-70 text-sm">
                Latest insights
              </p>
            </Link>

            <Link
              to="/contact"
              className="glass-panel rounded-2xl p-6 hover-lift transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A66C2] transition-colors">
                <Mail className="text-[#0A66C2] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#003C78] mb-2">Contact Us</h3>
              <p className="text-[#1A1A1A] opacity-70 text-sm">
                Get in touch
              </p>
            </Link>
          </div>

          {/* Go Back Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 glass-panel text-[#003C78] rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg mr-4"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </button>

            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-all duration-300 btn-glow font-semibold text-lg"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-16 glass-panel rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-[#003C78] mb-4">
              Still can't find what you're looking for?
            </h2>
            <p className="text-lg text-[#1A1A1A] opacity-80 mb-6">
              Our support team is always here to help you navigate through our platform.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-colors font-semibold"
            >
              Contact Support
              <Mail className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
