import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award,
  TrendingUp,
  MessageSquare,
  Video,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SeminarsPageSkeleton } from '../components/SeminarPageSkeleton';
import { supabase } from '../lib/supabase';
import { useEffect } from 'react';
import seminarsPageImage from '../assets/seminarpage.png';

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


export function SeminarsPage() {
  const [activeFilter, setActiveFilter] = useState<'upcoming' | 'past'>('upcoming');
  const [seminarsData, setSeminarsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [shouldAnimateHeroStats, setShouldAnimateHeroStats] = useState(false);
  const [shouldAnimateSuccessMetrics, setShouldAnimateSuccessMetrics] = useState(false);
  const heroStatsRef = useRef<HTMLDivElement | null>(null);
  const successMetricsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fetchSeminars = async () => {
      const { data, error } = await supabase
        .from('seminars')
        .select('*')
        .eq('status', 'published')
        .order('date', { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setSeminarsData(data || []);
      }

      setLoading(false);
    };

    fetchSeminars();
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

    const metricsSection = successMetricsRef.current;
    if (!metricsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimateSuccessMetrics(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(metricsSection);

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return <SeminarsPageSkeleton />;
  }

  const upcomingSeminars = seminarsData.filter(
    seminar => seminar.type === 'upcoming'
  );

  const pastSeminars = seminarsData.filter(
    seminar => seminar.type === 'past'
  );

  const stats = [
    { value: 50, suffix: '+', label: 'Seminars conducted' },
    { value: 2000, suffix: '+', label: 'Participants' },
    { value: 4.8, suffix: '/5', decimals: 1, label: 'Average Rating' },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Industry Experts',
      description: 'Learn from professionals with years of real-world experience',
    },
    {
      icon: TrendingUp,
      title: 'Latest Insights',
      description: 'Stay updated with current trends and emerging technologies',
    },
    {
      icon: MessageSquare,
      title: 'Interactive Sessions',
      description: 'Engage in Q&A and hands-on demonstrations',
    },
    {
      icon: Award,
      title: 'Participation Certificate',
      description: 'Receive a certificate to showcase your learning',
    },
  ];

  const displaySeminars = activeFilter === 'upcoming' ? upcomingSeminars : pastSeminars;

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Programs', href: '/programs' },
          { label: 'Seminars' },
        ]}
      />
      {/* 1. TOP BANNER */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-[#007DFF] to-[#007DFF] mt-4">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/3 w-72 h-72 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

        {/* Background Illustration */}
        <div className="absolute right-0 top-0 bottom-0 w-full opacity-100 hidden lg:block">
          <ImageWithFallback
            src={seminarsPageImage}
            alt="Seminar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl animate-fade-up">

            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Seminars
            </h1>

            <p className="text-xl lg:text-2xl text-black opacity-100 leading-relaxed mb-8">
              Expert-led sessions to gain insights into industry trends and technologies
            </p>

            {/* Stats */}
            <div ref={heroStatsRef} className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-3xl">
              {stats.map((stats, index) => (
                <div key={index} className="glass-panel rounded-2xl p-3 sm:p-4 text-center min-w-0">
                  <div className="text-[1.9rem] sm:text-2xl font-bold text-[#007DFF] leading-none">
                    <AnimatedStatNumber
                      value={stats.value}
                      suffix={stats.suffix}
                      decimals={stats.decimals}
                      shouldAnimate={shouldAnimateHeroStats}
                    />
                  </div>
                  <div className="mt-2 text-sm sm:text-xs leading-snug text-[#1A1A1A] opacity-70 break-words">
                    {stats.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. UPCOMING / PAST SEMINARS FILTER 
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveFilter('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeFilter === 'upcoming'
                  ? 'bg-[#007DFF] text-white shadow-lg'
                  : 'bg-gray-100 text-[#1A1A1A] hover:bg-gray-200'
              }`}
            >
              Upcoming Seminars
            </button>

            <button
              onClick={() => setActiveFilter('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeFilter === 'past'
                  ? 'bg-[#007DFF] text-white shadow-lg'
                  : 'bg-gray-100 text-[#1A1A1A] hover:bg-gray-200'
              }`}
            >
              Past Seminars
            </button>
          </div>
        </div>
      </section>*/}

      {/* 2. SEMINAR CARDS GRID */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">
                {activeFilter === 'upcoming' ? 'Join Us' : 'Our Archive'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              {activeFilter === 'upcoming' ? 'Seminars' : 'Past Seminars'}
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              {activeFilter === 'upcoming'
                ? 'Book your spot for expert-led sessions on cutting-edge technologies'
                : 'Explore our successful seminars from the past'}
            </p>
          </div>

          {/* Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displaySeminars.map((seminar, index) => (
              <Link 
                key={seminar.id}
                to={`/seminar/${seminar.slug}`}
                className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-[#007DFF] hover:bg-[#F1F8FF]/20 hover:scale-[1.03] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail Image */}
                <div className="relative h-56 bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF] overflow-hidden">
                  <ImageWithFallback
                    src={`${seminar.image_url}&w=500&q=60&auto=format`}
                    alt={seminar.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500"
                  />

                  {/* Featured Badge 
                  {seminar.featured && (
                    <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full border-white/60">
                      <span className="text-[#007DFF] text-sm font-semibold">Featured</span>
                    </div>
                  )}*/}

                  {/* Mode Badge */}
                  <div className="absolute top-4 right-4 flex items-center glass-panel px-3 py-1 rounded-full border-white/60">
                    {seminar.mode === 'Online' && <Video size={14} className="text-[#007DFF] mr-1" />}
                    {seminar.mode === 'Offline' && <MapPin size={14} className="text-[#007DFF] mr-1" />}
                    {seminar.mode === 'Hybrid' && <CheckCircle size={14} className="text-[#007DFF] mr-1" />}
                    <span className="text-[#007DFF] text-sm font-semibold">{seminar.mode}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Seminar Title */}
                  <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#007DFF] transition-colors line-clamp-2">
                    {seminar.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed line-clamp-2">
                    {seminar.description}
                  </p>

                  {/* Date & Time Badges */}
                  <div className="space-y-2">
                    {/*<div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                      <Calendar size={16} className="mr-2 text-[#007DFF]" />
                      {seminar.date}
                    </div>*/}
                    <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                      <Clock size={16} className="mr-2 text-[#007DFF]" />
                      {seminar.time}
                    </div>
                    <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                      <Users size={16} className="mr-2 text-[#007DFF]" />
                      {seminar.participants} expected
                    </div>
                  </div>

                  {/* Speaker Info 
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-[#007DFF] font-semibold">
                      By {seminar.main_speaker}
                    </p>
                  </div>*/}

                  {/* View Details Button */}
                  <button className="w-full px-6 py-3 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold btn-glow">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY ATTEND OUR SEMINARS */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Benefits</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Why Attend Our Seminars
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Experience knowledge sharing at its finest
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

      {/* Success Metrics */}
      <section ref={successMetricsRef} className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up">
                <div className="text-5xl font-bold text-[#007DFF] mb-2">
                  <AnimatedStatNumber value={50} suffix="+" shouldAnimate={shouldAnimateSuccessMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Seminars Conducted</p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold text-[#007DFF] mb-2">
                  <AnimatedStatNumber value={2000} suffix="+" shouldAnimate={shouldAnimateSuccessMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Total Participants</p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-bold text-[#007DFF] mb-2">
                  <AnimatedStatNumber value={4.9} suffix="/5" decimals={1} shouldAnimate={shouldAnimateSuccessMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION 
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
                <span className="text-white font-semibold">Limited Seats Available</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Don't Miss Our Next Seminar
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join industry experts and expand your knowledge with our upcoming seminars. 
                Register now to secure your spot!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg"
                >
                  Register Now
                </Link>

                <Link
                  to="/events"
                  className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
