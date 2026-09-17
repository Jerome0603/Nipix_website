import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, BookOpen, LayoutDashboard, ArrowRight } from 'lucide-react';

export function ThankYouPage() {
  useEffect(() => {
    // Confetti effect or celebration animation can be added here
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF] relative overflow-hidden">
      {/* Parallax Background Shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#003C78] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.6s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-fade-up">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-500" size={64} />
            </div>
          </div>

          {/* Success Message */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#003C78] mb-6">
              Registration Successful!
            </h1>
            <p className="text-2xl text-[#1A1A1A] opacity-80 mb-4">
              Welcome to Nipix Technology
            </p>
            <p className="text-xl text-[#1A1A1A] opacity-70 mb-12">
              Thank you for registering. We've sent a confirmation email to your inbox with all the details you need to get started.
            </p>
          </div>

          {/* Info Card */}
          <div className="glass-panel rounded-2xl p-8 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-[#003C78] mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <span className="text-white font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003C78] mb-1">
                    Check Your Email
                  </h3>
                  <p className="text-[#1A1A1A] opacity-80">
                    We've sent you a confirmation email with important details and next steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <span className="text-white font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003C78] mb-1">
                    Complete Your profile
                  </h3>
                  <p className="text-[#1A1A1A] opacity-80">
                    By filling out your profile, you'll help us tailor the experience to your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <span className="text-white font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003C78] mb-1">
                    Start Learning
                  </h3>
                  <p className="text-[#1A1A1A] opacity-80">
                    Access your internship materials and begin your journey with us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/"
              className="glass-panel rounded-2xl p-6 hover-lift transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A66C2] transition-colors">
                <Home className="text-[#0A66C2] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#003C78] mb-2">Go to Home</h3>
              <p className="text-[#1A1A1A] opacity-70 text-sm">
                Explore our website
              </p>
            </Link>

            <Link
              to="/courses"
              className="bg-gradient-to-br from-[#003C78] to-[#0A66C2] rounded-2xl p-6 hover-lift transition-all duration-300 text-center group shadow-xl"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Browse Courses</h3>
              <p className="text-white/80 text-sm">
                Start learning now
              </p>
              <ArrowRight className="mx-auto mt-3 text-white" size={20} />
            </Link>

            {/*<Link
              to="/programs"
              className="glass-panel rounded-2xl p-6 hover-lift transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A66C2] transition-colors">
                <LayoutDashboard className="text-[#0A66C2] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#003C78] mb-2">Explore Programs</h3>
              <p className="text-[#1A1A1A] opacity-70 text-sm">
                Discover our programs
              </p>
            </Link>*/}
          </div>

          {/* Support Section */}
          <div className="mt-12 glass-panel rounded-2xl p-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-[#1A1A1A] opacity-80">
              Need help?{' '}
              <Link to="/contact" className="text-[#0A66C2] hover:text-[#003C78] font-semibold transition-colors">
                Contact our support team
              </Link>
              {' '}or email us at{' '}
              <a href="mailto:support@nipix.tech" className="text-[#0A66C2] hover:text-[#003C78] font-semibold transition-colors">
                support@nipixtechnology.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}