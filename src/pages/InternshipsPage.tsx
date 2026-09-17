import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Clock,
  MapPin,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Code,
  Database,
  Smartphone,
  Brain,
  Palette,
  Cloud
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/ComponentLibrary';
import { supabase } from '../lib/supabase';

function AnimatedStatNumber({
  value,
  suffix = "",
  shouldAnimate,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  shouldAnimate: boolean;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayValue(0);
      return;
    }

    let frameId = 0;
    const duration = 2400;
    const start = performance.now();

    const updateValue = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = value * easedProgress;
      setDisplayValue(decimals > 0 ? Number(nextValue.toFixed(decimals)) : Math.round(nextValue));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      }
    };

    frameId = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(frameId);
  }, [decimals, shouldAnimate, value]);

  return (
    <span>
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function InternshipsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [shouldAnimateHeroStats, setShouldAnimateHeroStats] = useState(false);
  const [shouldAnimateMetrics, setShouldAnimateMetrics] = useState(false);
  const heroStatsRef = useRef<HTMLDivElement | null>(null);
  const metricsRef = useRef<HTMLElement | null>(null);

  const [internships, setInternships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      const { data, error } = await supabase
        .from('internships')
        .select(`
          id,
          title,
          description,
          duration,
          openings,
          type,
          image_url
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setInternships(data || []);
      setLoading(false);
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    if (loading) return;

    const heroSection = heroStatsRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimateHeroStats(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    const metricsSection = metricsRef.current;
    if (!metricsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimateMetrics(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(metricsSection);

    return () => observer.disconnect();
  }, [loading]);

  const highlights = [
    {
      icon: Briefcase,
      title: 'Real-Time Industry Projects',
      description: 'Work on live projects that add value to your portfolio',
    },
    {
      icon: Star,
      title: 'Certificates Upon Completion',
      description: 'Receive industry-recognized certificates and LOR',
    },
    {
      icon: Users,
      title: 'Mentorship Support',
      description: 'Get guidance from experienced industry professionals',
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Choose schedules that fit your availability',
    },
  ];

  const stats = [
    { value: '5+', label: 'Internship Opportunities' },
    { value: '200+', label: 'Students Enrolled' },
    { value: '4.8/5', label: 'Average Rating' },
  ];

  const totalPages = Math.ceil(internships.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInternships = internships.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Programs', href: '/programs' },
          { label: 'Internships' },
        ]}
      />*/}

      {/* 1. INTERNSHIP BANNER */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-[#007DFF] to-[#007DFF] mt-4">
        {/* Floating Background Shapes 
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-100 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#065FCC] rounded-full opacity-100 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/3 w-72 h-72 bg-[#007DFF] rounded-full opacity-100 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

        {/* Background Illustration */}
        <div className="absolute right-0 top-0 bottom-0 w-full opacity-100 hidden lg:block">
          <ImageWithFallback
            src="../src/assets/internshippage.png"
            alt="Internship"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl animate-fade-up">

            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Internships
            </h1>

            <p className="text-xl lg:text-2xl text-black opacity-100 leading-relaxed mb-8">  
              Gain hands-on experience with real industry projects.
            </p>

            {/* Stats */}
            <div ref={heroStatsRef} className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-3xl">
              {stats.map((stat, index) => (
                <div key={index} className="glass-panel rounded-2xl p-3 sm:p-4 text-center min-w-0">
                  <div className="text-[1.9rem] sm:text-2xl font-bold text-[#007DFF] leading-none">
                    {index === 0 && <AnimatedStatNumber value={5} suffix="+" shouldAnimate={shouldAnimateHeroStats} />}
                    {index === 1 && <AnimatedStatNumber value={200} suffix="+" shouldAnimate={shouldAnimateHeroStats} />}
                    {index === 2 && <AnimatedStatNumber value={4.8} suffix="/5" decimals={1} shouldAnimate={shouldAnimateHeroStats} />}
                  </div>
                  <div className="mt-2 text-sm sm:text-xs leading-snug text-[#1A1A1A] opacity-70 break-words">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERNSHIP CARDS GRID */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Current Openings</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">A</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">vailable{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">I</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">nternships{' '}</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Choose from our diverse internship opportunities across various domains
            </p>
          </div>

          {/* Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentInternships.map((internship, index) => {
              return (
                <Link
                  key={internship.id}
                  to={`/internship/${internship.id}`}
                  className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] animate-fade-up hover:scale-[1.03]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image/Icon Thumbnail */}
                  <div className="relative h-56 bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF] overflow-hidden">
                    <ImageWithFallback
                      src={internship.image_url}
                      alt={internship.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Icon Badge Overlay */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="text-[#007DFF]" size={28} strokeWidth={2} />
                    </div>

                    {/* Mode Badge */}
                    <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full border-white/60">
                      <span className="text-[#007DFF] text-sm font-semibold">{internship.type}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    {/* Internship Title */}
                    <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#007DFF] transition-colors line-clamp-2">
                      {internship.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[#1A1A1A] opacity-70 leading-relaxed line-clamp-2">
                      {internship.description}
                    </p>

                    {/* Skills Tags 
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#F1F8FF] text-[#007DFF] rounded-full text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>*/}

                    {/* Duration & Openings */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                        <Clock size={16} className="mr-2 text-[#007DFF]" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                        <Users size={16} className="mr-2 text-[#007DFF]" />
                        {internship.openings} openings
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full px-6 py-3 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold btn-glow">
                      View Details
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border-2 border-gray-200 text-[#1A1A1A] opacity-70 hover:border-[#007DFF] hover:text-[#007DFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-xl font-semibold transition-all ${
                    currentPage === index + 1
                      ? 'bg-[#007DFF] text-white'
                      : 'border-2 border-gray-200 text-[#1A1A1A] opacity-70 hover:border-[#007DFF] hover:text-[#007DFF]'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border-2 border-gray-200 text-[#1A1A1A] opacity-70 hover:border-[#007DFF] hover:text-[#007DFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. HIGHLIGHTS SECTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Why Join Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">I</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">nternships{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">B</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">enefits</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              What makes our internships stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
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
                    {highlight.title}
                  </h3>

                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics Strip */}
      <section ref={metricsRef} className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up">
                <div className="text-5xl font-bold text-[#007DFF] mb-2">
                  <AnimatedStatNumber value={100} suffix="+" shouldAnimate={shouldAnimateMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Successful Interns</p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold text-[#007DFF] mb-2">
                  <AnimatedStatNumber value={98} suffix="%" shouldAnimate={shouldAnimateMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Student Satisfaction</p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-bold text-[#007DFF] mb-2">
                  <AnimatedStatNumber value={5} suffix="+" shouldAnimate={shouldAnimateMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Internship programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL-TO-ACTION STRIP 
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
                <span className="text-white font-semibold">Start Your Journey</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Kickstart Your Career Today
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join our internship program and gain real-world experience that sets you apart 
                from the competition. Limited seats available!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl transition-all duration-300 hover-lift font-semibold text-lg"
                >
                  Apply for Internship
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
                >
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
