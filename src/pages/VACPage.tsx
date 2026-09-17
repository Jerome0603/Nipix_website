import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Clock,
  Users,
  TrendingUp,
  Code,
  Database,
  Palette,
  Smartphone,
  Brain,
  Cloud,
  Lock,
  BarChart,
  Zap,
  Globe,
  ShoppingCart,
  Video,
  ChevronRight,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/ComponentLibrary';
import { supabase } from '../lib/supabase';
import vacPageImage from '../assets/vacpage.png';

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

export function VACPage() {

  const [vacList, setVacList] = useState<any[]>([]);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchVAC = async () => {
      const { data, error } = await supabase
        .from("vac_programs")
        .select("*")
        .eq("status", "published");

      if (!error && data) {
        setVacList(data);
      }
    };

    fetchVAC();
  }, []);

  useEffect(() => {
    const statsSection = statsRef.current;
    if (!statsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimateStats(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);


  const benefits = [
    {
      icon: Award,
      title: 'Industry-Certified Content',
      description: 'Curriculum designed by industry experts and aligned with market demands',
    },
    {
      icon: Clock,
      title: 'Short-Term Intensive Learning',
      description: 'Complete courses in 2-6 weeks with focused, accelerated learning',
    },
    {
      icon: Target,
      title: 'Hands-On Practical Sessions',
      description: 'Learn by doing with real-world projects and live coding exercises',
    },
    {
      icon: CheckCircle,
      title: 'Recognized Certification',
      description: 'Earn certificates valued by employers across the industry',
    },
  ];

  const stats = [
    { value: 3, suffix: '+', label: 'VAC Programs' },
    { value: 200, suffix: '+', label: 'Students Enrolled' },
    { value: 4.8, suffix: '/5', decimals: 1, label: 'Average Rating' },
  ];

  const iconMap: Record<string, any> = {
    'artificial-intelligence': Brain,
    'full-stack': Code,
    'cloud': Cloud,
    'ui-ux': Palette,
    'data-science': Database,
    'cybersecurity': Lock,
    'mobile': Smartphone,
    'digital-marketing': TrendingUp,
    'devops': Zap,
  };

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Value Added Courses' },
        ]}
      />*/}

      {/* 1. VAC PAGE BANNER */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-[#007DFF] to-[#007DFF] mt-4">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/3 w-72 h-72 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

        {/* Background Illustration */}
        <div className="absolute right-0 top-0 bottom-0 w-full opacity-100 hidden lg:block">
          <ImageWithFallback
            src={vacPageImage}
            alt="Education"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl animate-fade-up">

            <h1 className="text-5xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Value Added Courses (VAC)
            </h1>

            <p className="text-xl lg:text-2xl text-[#1A1A1A] opacity-80 leading-relaxed mb-8">
              Enhance your skills with short-term, industry-focused programs.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-3xl">
              {stats.map((stat, index) => (
                <div key={index} className="glass-panel rounded-2xl p-3 sm:p-4 text-center min-w-0">
                  <div className="text-[1.9rem] sm:text-2xl font-bold text-[#007DFF] leading-none">
                    <AnimatedStatNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      shouldAnimate={shouldAnimateStats}
                    />
                  </div>
                  <div className="mt-2 text-sm sm:text-xs leading-snug text-[#1A1A1A] opacity-70 break-words">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DOMAIN CARDS SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Course Categories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">E</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">xplore{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">V</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">alue{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">A</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">dded{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">C</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ourses{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">D</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">omains{' '}</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Choose from our diverse range of value-added courses across multiple domains
            </p>
          </div>

          {/* Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vacList.map((domain, index) => {
              const Icon = iconMap[domain.slug] || Brain;
              return (
                <Link
                  key={index}
                  to={`/programs/vac/${domain.slug}`}
                  className="group bg-white rounded-2xl p-7 soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] hover:bg-[#F1F8FF]/30 hover:scale-[1.03] animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Large Domain Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} strokeWidth={2} />
                  </div>

                  {/* Domain Name */}
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#007DFF] transition-colors">
                    {domain.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed mb-4 line-clamp-2">
                    {domain.description}
                  </p>

                  {/* Courses Count */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <span className="text-sm text-[#007DFF] font-semibold">
                      {domain.duration} · {domain.level}
                    </span>
                  </div>

                  {/* View More Arrow - More Prominent */}
                  <div className="flex items-center justify-between text-[#007DFF] font-bold group-hover:text-[#065FCC] transition-colors pt-2">
                    <span className="text-base">Explore Programs</span>
                    <div className="w-8 h-8 bg-[#007DFF] rounded-lg flex items-center justify-center group-hover:bg-[#065FCC] transition-all group-hover:translate-x-2">
                      <ArrowRight 
                        className="text-white" 
                        size={18} 
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY VAC IS IMPORTANT SECTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Why Choose VAC</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">W</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">hy{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">VAC{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">is{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">I</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">mportant{' '}</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Discover the advantages of value-added courses for your career growth
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

      {/* Additional Features Strip */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up border-2 border-[#007DFF]/20">
                <div className="w-16 h-16 bg-[#007DFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Expert Instructors</h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Learn from industry professionals with years of real-world experience
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up border-2 border-[#007DFF]/20" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-[#007DFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Project-Based Learning</h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Build real-world projects that you can showcase in your portfolio
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up border-2 border-[#007DFF]/20" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-[#007DFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Fast-Track Learning</h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Accelerated programs designed to fit your busy schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories 
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#EAF3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">S</span>
                <span className="text-4xl lg:text-5xl font-bold text-black">uccess{' '}</span>
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">S</span>
                <span className="text-4xl lg:text-5xl font-bold text-black">tories</span>
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                How VAC programs transformed careers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Priya Sharma',
                  role: 'Data Analyst',
                  course: 'Data Science VAC',
                  result: 'Got promoted within 3 months',
                },
                {
                  name: 'Rajesh Kumar',
                  role: 'Full Stack Developer',
                  course: 'Cloud Computing VAC',
                  result: '40% salary increase',
                },
                {
                  name: 'Ananya Patel',
                  role: 'UI/UX Designer',
                  course: 'UI/UX Design VAC',
                  result: 'Switched to dream role',
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 soft-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] text-center mb-1">
                    {story.name}
                  </h3>
                  <p className="text-[#007DFF] text-center mb-3 font-semibold">
                    {story.role}
                  </p>
                  <div className="bg-[#F1F8FF] rounded-2xl p-4 mb-3">
                    <p className="text-sm text-[#065FCC] font-semibold mb-1">
                      Completed: {story.course}
                    </p>
                    <p className="text-sm text-[#1A1A1A] opacity-70">
                      Result: {story.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* 4. BLUE CTA SECTION */}
      <section className="py-24 lg:py-20 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
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
                <span className="text-[#007DFF] font-semibold">Get Started Today</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Upgrade Your Skills Today
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of learners who have advanced their careers with our industry-focused 
                value-added courses. Start your journey to success now!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg"
                >
                  Explore VAC Programs
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
