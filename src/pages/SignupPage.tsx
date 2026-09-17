import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Handle signup logic here
    console.log('Signup:', formData);
    // Redirect to thank you page
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF] relative overflow-hidden">
      {/* Parallax Background Shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#003C78] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.6s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#003C78] mb-4">
              Create Your Account
            </h1>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Start your learning journey with Nipix Technology
            </p>
          </div>

          {/* Signup Form */}
          <div className="glass-panel rounded-2xl p-8 lg:p-10 shadow-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-[#003C78] font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 pl-12 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all text-[#1A1A1A]"
                    placeholder="Enter your full name"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]" size={20} />
                </div>
              </div>

              {/* Email & Phone in Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                  <label className="block text-[#003C78] font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all text-[#1A1A1A]"
                      placeholder="you@example.com"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]" size={20} />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-[#003C78] font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all text-[#1A1A1A]"
                      placeholder="+1 234 567 8900"
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]" size={20} />
                  </div>
                </div>
              </div>

              {/* Password Fields in Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Password Field */}
                <div>
                  <label className="block text-[#003C78] font-semibold mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 pl-12 pr-12 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all text-[#1A1A1A]"
                      placeholder="Create password"
                      minLength={8}
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]" size={20} />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0A66C2] hover:text-[#003C78] transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-[#1A1A1A] opacity-60 mt-1">
                    Minimum 8 characters
                  </p>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-[#003C78] font-semibold mb-2">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 pl-12 pr-12 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none transition-all text-[#1A1A1A]"
                      placeholder="Confirm password"
                      minLength={8}
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]" size={20} />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0A66C2] hover:text-[#003C78] transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="bg-[#E8F3FF] rounded-xl p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-[#0A66C2] focus:ring-[#0A66C2] mt-0.5 flex-shrink-0"
                  />
                  <span className="ml-3 text-[#1A1A1A] opacity-80">
                    I agree to the{' '}
                    <Link to="/terms" className="text-[#0A66C2] hover:text-[#003C78] font-semibold">
                      Terms & Conditions
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-[#0A66C2] hover:text-[#003C78] font-semibold">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-all duration-300 btn-glow font-semibold text-lg flex items-center justify-center"
              >
                Create Account
                <ArrowRight className="ml-2" size={20} />
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#1A1A1A] opacity-70">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Signup Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="px-4 py-3 glass-panel rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold text-[#003C78]"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="px-4 py-3 glass-panel rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold text-[#003C78]"
                >
                  <svg className="w-5 h-5 mr-2" fill="#0A66C2" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
            </form>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-[#1A1A1A] opacity-70">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#0A66C2] hover:text-[#003C78] transition-colors font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
