import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award,
  Target,
  Lightbulb,
  Video,
  CheckCircle,
  TrendingUp,
  Code,
  Wrench
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/ComponentLibrary';
import { supabase } from '../lib/supabase';
import { SeminarsPageSkeleton } from '../components/SeminarPageSkeleton';

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

export function WorkshopsPage() {
  const [activeFilter, setActiveFilter] = useState<'upcoming' | 'past'>('upcoming');
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [shouldAnimateHeroStats, setShouldAnimateHeroStats] = useState(false);
  const [shouldAnimateSuccessMetrics, setShouldAnimateSuccessMetrics] = useState(false);
  const heroStatsRef = useRef<HTMLDivElement | null>(null);
  const successMetricsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const { data, error } = await supabase
        .from('workshops')
        .select(`
          *,
          workshop_trainers (name),
          workshop_learning_outcomes (content, sort_order)
        `)
        .eq('status', 'published')
        .order('date', { ascending: true });

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setWorkshops(data || []);
      setLoading(false);
    };

    fetchWorkshops();
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

  const benefits = [
    {
      icon: Wrench,
      title: 'Practical Hands-On Training',
      description: 'Learn by doing with real projects and live coding sessions',
    },
    {
      icon: Users,
      title: 'Industry Mentors',
      description: 'Get guidance from experienced professionals working in top companies',
    },
    {
      icon: Lightbulb,
      title: 'Live Demonstrations',
      description: 'Watch experts solve real-world problems in real-time',
    },
    {
      icon: Award,
      title: 'Certificate of Participation',
      description: 'Receive a recognized certificate to enhance your resume',
    },
  ];

  const upcomingWorkshops = workshops.filter(
    w => w.type === 'upcoming'
  );

  const pastWorkshops = workshops.filter(
    w => w.type === 'past'
  );

  const stats = [
    { value: 50, suffix: '+', label: 'workshops conducted' },
    { value: 2000, suffix: '+', label: 'Students Trained' },
    { value: 4.8, suffix: '/5', decimals: 1, label: 'Average Rating' },
  ];

  const displayWorkshops = activeFilter === 'upcoming' ? upcomingWorkshops : pastWorkshops;

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Programs', href: '/programs' },
          { label: 'Workshops' },
        ]}
      />*/}
      {/* 1. TOP BANNER */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-[#007DFF] to-[#007DFF] mt-4">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-100 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#007DFF] rounded-full opacity-100 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 w-72 h-72 bg-[#007DFF] rounded-full opacity-100 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

        {/* Background Illustration */}
        <div className="absolute right-0 top-0 bottom-0 w-full opacity-100 hidden lg:block">
          <ImageWithFallback
            src="../src/assets/workshoppage.png"
            alt="Workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl animate-fade-up">

            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Workshops
            </h1>

            <p className="text-xl lg:text-2xl text-black opacity-100 leading-relaxed mb-8">
              Hands-on practical sessions designed to build real-world skills
            </p>

            {/* Stats */}
            <div ref={heroStatsRef} className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-3xl">
              {stats.map((stat, index) => (
                <div key={index} className="glass-panel rounded-2xl p-3 sm:p-4 text-center min-w-0">
                  <div className="text-[1.9rem] sm:text-2xl font-bold text-[#007DFF] leading-none">
                    <AnimatedStatNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      shouldAnimate={shouldAnimateHeroStats}
                    />
                  </div>
                  <div className="mt-2 text-sm sm:text-xs leading-snug text-[#1A1A1A] opacity-70 break-words">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. UPCOMING / PAST WORKSHOPS FILTER 
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
              Upcoming Workshops
            </button>

            <button
              onClick={() => setActiveFilter('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeFilter === 'past'
                  ? 'bg-[#007DFF] text-white shadow-lg'
                  : 'bg-gray-100 text-[#1A1A1A] hover:bg-gray-200'
              }`}
            >
              Past Workshops
            </button>
          </div>
        </div>
      </section>

      {/* 2. WORKSHOP CARDS GRID */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">
                {activeFilter === 'upcoming' ? 'Join Us' : 'Our Archive'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              {activeFilter === 'upcoming' ? 'Workshops' : 'Past Workshops'}
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              {activeFilter === 'upcoming'
                ? 'Book your spot for intensive hands-on training sessions led by us'
                : 'Explore our successful workshops from the past'}
            </p>
          </div>

          {/* Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayWorkshops.map((workshop, index) => (
              <Link
                key={workshop.id}
                to={`/workshop/${workshop.slug}`}
                className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] hover:bg-[#F1F8FF]/20 hover:scale-[1.03] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail Image */}
                <div className="relative h-56 bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF] overflow-hidden">
                  <ImageWithFallback
                    src={`${workshop.image_url}?auto=format`}
                    alt={workshop.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Featured Badge 
                  {workshop.featured && (
                    <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full border-white/60">
                      <span className="text-[#007DFF] text-sm font-semibold">Featured</span>
                    </div>
                  )}*/}

                  {/* Mode Badge */}
                  <div className="absolute top-4 right-4 flex items-center glass-panel px-3 py-1 rounded-full border-white/60">
                    {workshop.mode === 'Online' && <Video size={14} className="text-[#007DFF] mr-1" />}
                    {workshop.mode === 'Offline' && <MapPin size={14} className="text-[#007DFF] mr-1" />}
                    {workshop.mode === 'Hybrid' && <CheckCircle size={14} className="text-[#007DFF] mr-1" />}
                    <span className="text-[#007DFF] text-sm font-semibold">{workshop.mode}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Workshop Title */}
                  <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#007DFF] transition-colors line-clamp-2">
                    {workshop.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed line-clamp-2">
                    {workshop.description}
                  </p>

                  {/* Date & Duration Badges */}
                  <div className="space-y-2">
                    
                    <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                      <Clock size={16} className="mr-2 text-[#007DFF]" />
                      {workshop.duration}
                    </div>
                    <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                      <Users size={16} className="mr-2 text-[#007DFF]" />
                      {workshop.participants} seats
                    </div>
                  </div>

                  {/* Trainer Info 
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-[#007DFF] font-semibold">
                      By {workshop.workshop_trainers?.[0]?.name || 'Expert Trainer'}
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

      {/* 3. WHY ATTEND OUR WORKSHOPS */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Benefits</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Why Attend Our Workshops
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Transform your skills with intensive, practical training
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
                  <AnimatedStatNumber value={100} suffix="+" shouldAnimate={shouldAnimateSuccessMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Workshops Conducted</p>
              </div>

              <div className="glass-panel rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold text-[#007DFF] mb-2">
                  <AnimatedStatNumber value={8000} suffix="+" shouldAnimate={shouldAnimateSuccessMetrics} />
                </div>
                <p className="text-[#1A1A1A] opacity-70">Students Trained</p>
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
                <span className="text-[#007DFF] font-semibold">Limited Seats Available</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Upgrade Your Skills with Our Workshops
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join our hands-on workshops and learn from industry experts. Build real-world 
                projects and take your skills to the next level!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg"
                >
                  Register Now
                </Link>

                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center px-10 py-5 glass-panel text-[#007DFF] rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
