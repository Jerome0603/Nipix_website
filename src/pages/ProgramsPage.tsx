import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Presentation,
  ArrowRight,
  Award,
  Clock,
  Calendar,
  CheckCircle,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProgramsPage() {
  const programCategories = [
    {
      id: 'internships',
      title: 'Internships',
      description: 'Gain hands-on experience with real-world projects and industry mentorship',
      icon: Briefcase,
      color: '#007DFF',
      link: '/internships',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
    },
    {
      id: 'vac',
      title: 'Value Added Courses (VAC)',
      description: 'Enhance your skills with specialized courses beyond regular curriculum',
      icon: GraduationCap,
      color: '#065FCC',
      link: '/vac',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    },
    {
      id: 'seminars',
      title: 'Seminars',
      description: 'Learn from industry experts through interactive knowledge-sharing sessions',
      icon: Presentation,
      color: '#007DFF',
      link: '/seminars',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    },
    {
      id: 'workshops',
      title: 'Workshops',
      description: 'Master new technologies through practical, hands-on training workshops',
      icon: Users,
      color: '#065FCC',
      link: '/workshops',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Industry-Relevant Content',
      description: 'Curriculum designed with input from leading tech companies',
    },
    {
      icon: Zap,
      title: 'Practical Hands-On Training',
      description: 'Learn by doing with real-world projects and scenarios',
    },
    {
      icon: Award,
      title: 'Certificate on Completion',
      description: 'Earn recognized certificates to boost your resume',
    },
    {
      icon: Clock,
      title: 'Flexible Schedules',
      description: 'Choose from weekday, weekend, or online options',
    },
  ];

  const featuredImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
      title: 'Students in Training',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
      title: 'Workshop Sessions',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      title: 'Tech Events',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
      title: 'Internship Highlights',
    },
  ];

  const stats = [
    { value: '5,000+', label: 'Students Trained' },
    { value: '200+', label: 'Programs Completed' },
    { value: '95%', label: 'Success Rate' },
    { value: '150+', label: 'Industry Partners' },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* 1. PROGRAMS PAGE BANNER */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] via-white to-[#EAF3FF] relative overflow-hidden">
        {/* Floating Background Shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/3 w-64 h-64 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6 animate-fade-up">
              <span className="text-[#007DFF] font-bold">Learning Opportunities</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.1s' }}>
              <span className="text-[#007DFF]">O</span>
              <span className="text-black">ur{' '}</span>
              <span className="text-[#007DFF]">P</span>
              <span className="text-black">rograms{' '}</span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#1A1A1A] opacity-80 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Explore internships, workshops, seminars, and value-added programs crafted for industry readiness.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="glass-panel rounded-2xl p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#007DFF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#1A1A1A] opacity-70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM CATEGORY GRID */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Program Categories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-[#007DFF]">C</span>
              <span className="text-black">hoose{' '}</span>
              <span className="text-[#007DFF]">Y</span>
              <span className="text-black">our{' '}</span>
              <span className="text-[#007DFF]">P</span>
              <span className="text-black">ath</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Select from our diverse range of programs designed to accelerate your career
            </p>
          </div>

          {/* 2x2 Grid of Program Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programCategories.map((program, index) => {
              const Icon = program.icon;
              return (
                <Link
                  key={program.id}
                  to={program.link}
                  className="group bg-white rounded-3xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Section */}
                  <div className="relative h-56 bg-gradient-to-br from-[#F1F8FF] to-[#EAF3FF] overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#007DFF]" size={32} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#007DFF] transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-[#1A1A1A] opacity-70 leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* View More Button */}
                    <div className="flex items-center text-[#007DFF] font-semibold group-hover:text-[#065FCC] transition-colors">
                      <span>View More</span>
                      <ArrowRight 
                        className="ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                        size={20} 
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE OUR PROGRAMS */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-[#007DFF]">P</span>
              <span className="text-black">rogram{' '}</span>
              <span className="text-[#007DFF]">B</span>
              <span className="text-black">enefits{' '}</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              What sets our programs apart from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 text-center soft-shadow hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED IMAGES / VISUAL STRIP 
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Gallery</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-[#007DFF]">P</span>
              <span className="text-black">rograms{' '}</span>
              <span className="text-black">in{' '}</span>
              <span className="text-[#007DFF]">A</span>
              <span className="text-black">ction</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              See our students, workshops, and events in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative rounded-3xl overflow-hidden group soft-shadow hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay 
                <div className="absolute inset-0 bg-gradient-to-t from-[#007DFF]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                  </div>
                </div>

                {/* Blue Accent Border 
                <div className="absolute top-0 left-0 w-full h-1 bg-[#007DFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Success Features Strip 
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#EAF3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up">
                <div className="w-16 h-16 bg-[#007DFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">95% Success Rate</h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Our students consistently achieve their career goals
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-[#065FCC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">200+ Programs</h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Successfully completed training programs
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-[#007DFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Certified Training</h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Industry-recognized certificates for all programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6 border-white/40">
                <span className="text-[#007DFF] font-bold">Start Today</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your Journey?
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of students who have transformed their careers through our programs. 
                Take the first step towards your future today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl transition-all duration-300 hover-lift font-semibold text-lg"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 glass-panel text-[#007DFF] rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}