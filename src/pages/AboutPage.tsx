import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Target,
  Flag,
  Rocket,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/ComponentLibrary';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { TeamCarousel } from "../components/ui/team-carousel"
import aboutPageImage from '../assets/aboutpage.png';


type AboutTab = "vision" | "mission";

function AnimatedStatNumber({
  value,
  suffix = "",
  separator = "",
  shouldAnimate,
}: {
  value: number;
  suffix?: string;
  separator?: string;
  shouldAnimate: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let frameId = 0;
    const duration = 3000;
    const start = performance.now();

    const updateValue = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      }
    };

    frameId = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(frameId);
  }, [shouldAnimate, value]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {separator}
      {suffix}
    </span>
  );
}

export function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutTab>("vision");
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);

  const statsRef = useRef<HTMLElement | null>(null);

  useEffect((): (() => void) => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    const target = document.getElementById("about-video");
    if (target) observer.observe(target);

    return (): void => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 3, spacing: 24 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 20 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 12 } },
    },
    created: (s) => setCurrentSlide(s.track.details.rel),
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  const values = [
    {
      icon: Users,
      title: 'Industry Experts',
      description: 'Learn from professionals with real-world experience in top tech companies',
    },
    {
      icon: BookOpen,
      title: 'Hands-on Learning',
      description: 'Practical projects and assignments that prepare you for actual work scenarios',
    },
    {
      icon: Award,
      title: 'Recognized Certifications',
      description: 'Industry-recognized certificates that add value to your professional profile',
    },
    {
      icon: TrendingUp,
      title: 'Career Support',
      description: 'Dedicated placement assistance and career guidance throughout your journey',
    },
  ];

  const team = [
    {
      id: '1',
      name: 'Prashanth',
      role: 'Founder & CEO',
      bio: '15+ years in EdTech innovation and leadership',
      image: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/prashanth.jpg',
    },
    {
      id: '2',
      name: 'Nishok',
      role: 'Chief Marketing Officer',
      bio: 'Former Google Education Lead with global experience',
      image: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/nishok.jpg',
    },
    {
      id: '3',
      name: 'Krishnan',
      role: 'Development Head',
      bio: 'Ex-Microsoft Senior Architect with 12+ years experience',
      image: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/krishnan.png',
    },
    {
      id: '4',
      name: 'Vignesh',
      role: 'Project Manager',
      bio: 'Curriculum designer with expertise in modern tech stacks',
      image: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/wikki.jpg',
    },
    {
      id: '5',
      name: 'Jerome Joshua',
      role: 'Chief Operating Officer',
      bio: 'Passionate about student outcomes and career growth',
      image: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/jerome.jpg',
    },
  ];

  const stats = [
    {
      value: 10,
      suffix: 'k+',
      label: 'Students Trained',
    },
    {
      value: 200,
      suffix: '+',
      label: 'Programs Conducted',
    },
    {
      value: 5000,
      suffix: '+',
      label: 'Students certified',
    },
    {
      value: 98,
      suffix: '%',
      label: 'Student Satisfaction',
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />*/}

      {/* 1. TOP BANNER */}
      <section className="relative h-[380px] flex items-center overflow-hidden bg-white mt-4">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 right-10 hidden lg:block w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 hidden lg:block w-80 h-80 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/3 hidden lg:block w-72 h-72 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

        {/* Background Illustration */}
        <div className="absolute inset-0 w-full h-full opacity-100">
          <ImageWithFallback
            src={aboutPageImage}
            alt="About Education"
            className="w-full h-full object-cover object-[72%_center] sm:object-center"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-up text-center">

            <h1 className="text-4xl lg:text-5xl font-bold text-[#007DFF] mb-6 leading-tight">
              About Us
            </h1>

            <p className="text-xl lg:text-2xl text-black opacity-100 leading-relaxed">
              Empowering students with industry-ready skills and practical knowledge
            </p>

            
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* LEFT SIDE - Text Content */}
            <div className="animate-fade-up">
              {/*<div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-bold">Our Journey</span>
              </div>*/}
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">W</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ho{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">W</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">e{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">A</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">re</span>
            </h2>

              <div className="space-y-4 text-lg text-[#1A1A1A] opacity-80 leading-relaxed">
                <p>
                  Nipix Technology is an innovative education technology company committed to shaping the next generation of thinkers, builders, and change makers. 
                  Through our unique blend of reverse learning, real-world problem solving, and hands-on project execution, we empower learners to go beyond theory and truly innovate.
                </p>

                <p>
                  At the core of our philosophy is the <span className="text-[#007DFF] font-bold"> "Build → Break → Understand → Innovate" </span> model—a learner-first approach that emphasizes creation over consumption. 
                  This method ensures every learner actively engages with technology, grasps the fundamentals by experimentation, and ultimately develops solutions that create real-world impact.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - Image */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-3xl overflow-hidden soft-shadow border border-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
                  alt="Education and Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION SECTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">What Drives Us</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">V</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ision{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">&{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">M</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ission</span>
            </h2>
          </div>

            {/*<p className="text-lg text-black max-w-6xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
              Nipix Technology is an innovative education technology company committed to shaping the next generation of thinkers, builders, and change makers. 
              Through our unique blend of reverse learning, real-world problem solving, and hands-on project execution, we empower learners to go beyond theory and truly innovate.
              At the core of our philosophy is the <span className="text-[#007DFF] font-bold"> "Build → Break → Understand → Innovate" </span> model—a learner-first approach that emphasizes creation over consumption. 
              This method ensures every learner actively engages with technology, grasps the fundamentals by experimentation, and ultimately develops solutions that create real-world impact.
            </p>*/}

          <div className="grid lg:grid-cols-2 mt-12 gap-16 items-center">
            {/* VISION CARD */}
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 rounded-lg p-1 shadow-inner">
              <button
                onClick={() => setActiveTab("vision")}
                className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === "vision"
                    ? "bg-[#007DFF] text-white shadow-xl"
                    : "text-black hover:text-[#007DFF]"
                }`}
              >
                <Eye size={16} className="inline mr-2" strokeWidth={2} />
                Vision
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === "mission"
                    ? "bg-[#007DFF] text-white shadow-xl"
                    : "text-black hover:text-[#007DFF]"
                }`}
              >
                <Target size={16} className="inline mr-2" strokeWidth={2} />
                Mission
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border"
            >
              {activeTab === "vision" ? (
                <>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-[#007DFF]/20 rounded-full flex items-center justify-center">
                      <Eye size={24} className="text-[#007DFF]" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">Our Vision</h3>
                  </div>
                  <p className="text-lg text-black leading-relaxed">
                    To become a global leader in innovative education technology, 
                    where every student and professional — regardless of background or academic stream — can transform 
                    ideas into impactful real-world innovations through 
                    real-time project-based learning and industry-ready solutions.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-[#007DFF]/20 rounded-full flex items-center justify-center">
                      <Target size={24} className="text-[#007DFF]" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">Our Mission</h3>
                  </div>
                  <p className="text-lg text-black leading-relaxed">
                    Nipix Technology aims to inspire students to become creators, 
                    not just consumers — by bridging the gap between academic learning and real-world skills through hands-on training, 
                    internships, and product development. Our mission is to deliver high-quality tech education that fosters creativity, 
                    innovation, and entrepreneurial thinking, while nurturing a strong community of learners and 
                    future leaders through mentorship and practical experience.
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
            {/* Visual Side → Clean Auto-Play Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div id="about-video" className="relative">
                <div className="bg-gradient-to-br from-[#007DFF]/20 to-[#065FCC]/20 rounded-2xl p-6 group">
                  <ImageWithFallback
                    src={aboutPageImage}
                    alt="Nipix Technology introduction"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES / WHY CHOOSE US */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Why Choose Us</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">O</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ur{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">C</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ore{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">V</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">alues</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              What sets us apart and makes us the preferred choice for students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 text-center soft-shadow hover-lift animate-fade-up border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {value.title}
                  </h3>

                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-20 lg:py-auto bg-gradient-to-br from-[#EAF3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Leadership</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">M</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">eet{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">O</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ur{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">T</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">eam</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming education
            </p>
          </div>

          <TeamCarousel 
            members={team}
            title=""
            //autoPlay={3000}
            onMemberChange={(member, index) => {
              console.log('Active member:', member.name);
            }}
          />
        </div>
      </section>

      {/* 6. ACHIEVEMENTS / STATS SECTION */}
      <section ref={statsRef} className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-bold">Our Impact</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">A</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">chievements{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">T</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">hat{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">M</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">atter</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-panel rounded-3xl p-8 text-center animate-fade-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-6xl font-bold text-[#007DFF] mb-2">
                    <AnimatedStatNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      shouldAnimate={shouldAnimateStats}
                    />
                  </div>
                  <p className="text-xl text-[#1A1A1A] opacity-70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 soft-shadow hover-lift animate-fade-up text-center">
                <Lightbulb className="text-[#007DFF] mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  Innovation
                </h3>
                <p className="text-[#1A1A1A] opacity-70 leading-relaxed">
                  Constantly updating our curriculum with the latest industry trends and technologies
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 soft-shadow hover-lift animate-fade-up text-center" style={{ animationDelay: '0.1s' }}>
                <ShieldCheck className="text-[#007DFF] mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  Quality Assurance
                </h3>
                <p className="text-[#1A1A1A] opacity-70 leading-relaxed">
                  Rigorous quality standards ensure every student receives exceptional education
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 soft-shadow hover-lift animate-fade-up text-center" style={{ animationDelay: '0.2s' }}>
                <GraduationCap className="text-[#007DFF] mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  Lifelong Learning
                </h3>
                <p className="text-[#1A1A1A] opacity-70 leading-relaxed">
                  Supporting continuous skill development long after course completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION 
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
                <span className="text-white font-semibold">Join Our Community</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Join Us in Shaping Future Careers
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Be part of a transformative learning experience that prepares you for the future. 
                Start your journey with Nipix Technology today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
