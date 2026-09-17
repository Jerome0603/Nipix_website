import React, { useState, useRef, useEffect as useEffectHook, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlidingLogoMarquee, SlidingLogoMarqueeItem, } from "../components/ui/sliding-logo-marquee";
import TypingText from '../components/ui/typing-text';
import { ShinyText } from "../components/ui/shiny-text"
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from '../components/ui/3d-scroll-trigger';
import { supabase } from '../lib/supabase';
import { 
  ArrowRight, 
  BookOpen, 
  Code, 
  Users, 
  Award, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Briefcase,
  GraduationCap,
  Target,
  TrendingUp,
  Quote,
  Calendar,
  MapPin,
  Building2,
  Clock,
  Wrench,
  Hammer,
  Check,
  Folder,
  CheckCircle,
  Play
} from 'lucide-react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, useInView } from 'framer-motion';
import heroStudentsImage from '../assets/02.jpg';
import sophiyaVideo from '../assets/sophiya.mp4';
import karthickAndDayanathiVideo from '../assets/Karthick and dayanathi.mp4';
import jenewerVideo from '../assets/jenewer.mp4';
import dharaniVideo from '../assets/dharani.mp4';

function AnimatedStatNumber({
  value,
  suffix = "",
  shouldAnimate,
}: {
  value: number;
  suffix?: string;
  shouldAnimate: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffectHook(() => {
    if (!shouldAnimate) {
      setDisplayValue(0);
      return;
    }

    let frameId = 0;
    const duration = 3400;
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
      {suffix}
    </span>
  );
}


const getIcon = (iconName: string, props?: any) => {
  const defaultProps = { size: 20, strokeWidth: 2, ...props };
  
  switch(iconName) {
    case 'Wrench':
      return <Wrench {...defaultProps} />;
    case 'Hammer':
      return <Hammer {...defaultProps} />;
    case 'BookOpen':
      return <BookOpen {...defaultProps} />;
    case 'Sparkles':
      return <Sparkles {...defaultProps} />;
    case 'Check':
      return <Check {...defaultProps} />;
    case 'Target':
      return <Target {...defaultProps} />;
    case 'Quote':
      return <Quote {...defaultProps} />;
    case 'Code':
      return <Code {...defaultProps} />;
    case 'Folder':
      return <Folder {...defaultProps} />;
    case 'CheckCircle':
      return <CheckCircle {...defaultProps} />;
    case 'Clock':
      return <Clock {...defaultProps} />;
    case 'Play':
      return <Play {...defaultProps} />;
    default:
      return null;
  }
};

export function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [featuredCourses, setFeaturedCourses] = useState<any[]>([]);
  const shouldAnimateHeroStats = useInView(heroStatsRef, { amount: 0.35 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const segmentWidth = scrollRef.current.scrollWidth / 3;
      const scrollAmount = direction === 'left' ? -400 : 400;

      if (direction === 'left' && scrollRef.current.scrollLeft <= segmentWidth * 0.15) {
        scrollRef.current.scrollLeft += segmentWidth;
      }

      if (direction === 'right' && scrollRef.current.scrollLeft >= segmentWidth * 1.85) {
        scrollRef.current.scrollLeft -= segmentWidth;
      }

      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const successStories = [
    {
      id: 1,
      name: "Sophia's Testimonial",
      course: "App Development",
      duration: "6 months",
      beforeRole: "Final Year B.Tech Student",
      afterRole: "App Development",
      beforeSalary: "₹0",
      afterSalary: "₹8.5 LPA",
      salaryIncrease: "New Career",
      avatar: "",
      company: "TCS",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Bangalore",
      testimonial: `I joined the app development course with no prior knowledge and gradually understood the core concepts step by step. My trainer guided me well, addressing my difficulties and making each topic clear. Through the course, I also contributed to an internship in the content writing team, where I learned to apply concepts, use AI tools, and deliver reports on time. This journey helped me grow from basics to deeper understanding, and I'm grateful for the structured learning and support. Thanks for NIPIX Technology!`,
      videoThumbnail: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/sophiya_thumbnail.png",
      videoUrl: sophiyaVideo,
      skills: ["Dart Programming", "Flutter Framework", "Firebase"],
      projects: ["E commerce App", "To do App", "Chat App"],
      timeline: "Applied → 3 month course training → 6 months internship"
    },
    {
      id: 2,
      name: "Karthick & Dayanathi's Testimonial",
      age: 22,
      course: "Value Added Course in Embedded System and IoT",
      duration: "6 months",
      beforeRole: "Commerce Graduate",
      afterRole: "Value Added Course in Embedded System and IoT",
      beforeSalary: "₹0",
      afterSalary: "₹6.2 LPA",
      salaryIncrease: "Career Switch",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "Zomato",
      companyLogo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop",
      location: "Gurgaon",
      testimonial: `The Value Added Course was an excellent learning experience — both interactive and practical. With the guidance of our trainers, my team and I developed a Car Parking System project and proudly won first prize. The unique token reward system kept us motivated throughout, and the sessions were engaging, well-structured, and easy to follow. It was one of the best learning experiences we've had, and we look forward to more such courses. Thanks for NIPIX Technology!`,
      videoThumbnail: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/karthick_thumbnail.png",
      videoUrl: karthickAndDayanathiVideo,
      skills: ["Embedded System", "Arduino Programming", "IoT"],
      projects: ["Smart Car Parking System"],
      timeline: "Applied → 5 Days value added course → Final project"
    },
    {
      id: 3,
      name: "Jenewar's Testimonial",
      age: 23,
      course: "Value Added Course in Embedded System and IoT",
      duration: "6 Days",
      beforeRole: "Final Year B.Tech Student",
      afterRole: "Value Added Course in Embedded System and IoT",
      beforeSalary: "₹0",
      afterSalary: "₹8.5 LPA",
      salaryIncrease: "New Career",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "TCS",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Bangalore",
      testimonial: `From the very first day, learning with Nipix Technology was an extraordinary experience. The sessions were interactive, activity-based, and full of fun, ensuring that no one ever felt left out. Each day introduced us to new concepts and domains, which I initially thought might be dry, but they turned out to be highly engaging and practical. The hands-on approach made the learning journey both exciting and rewarding. Thanks for NIPIX Technology!`,
      videoThumbnail: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/jenewer_thumbnail.png",
      videoUrl: jenewerVideo,
      skills: ["Embedded System", "Arduino Programming", "IoT"],
      projects: ["Smart Alert System"],
      timeline: "Applied → 5 Days value added course → Final project"
    },
    {
      id: 4,
      name: "Dharani's Testimonial",
      age: 23,
      course: "Machine Learning Internship",
      duration: "6 months",
      beforeRole: "Final Year B.Tech Student",
      afterRole: "Machine Learning",
      beforeSalary: "₹0",
      afterSalary: "₹8.5 LPA",
      salaryIncrease: "New Career",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "TCS",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Bangalore",
      testimonial: `This is not just about receiving a certificate — it has been an experience where I truly felt comfortable and supported throughout my learning journey. The environment made me feel at ease, and I could focus on growing step by step. If you decide to join, you will find this platform to be more than just a course; it is a space to share your thoughts, gain knowledge, and build your skills with confidence. It has been a wonderful opportunity for me, and I am thankful for the guidance and support provided. Thanks for NIPIX Technology!`,
      videoThumbnail: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/dharani_thumbnail.png",
      videoUrl: dharaniVideo,
      skills: ["Python", "TensorFlow", "Data Science", "Deep Learning"],
      projects: ["Prompt to image Generation"],
      timeline: "Applied → 1 month training → 6 months internship"
    },
  ];

  const handleStoryChange = (index: number) => {
    setCurrentStory(index);
    setIsPlaying(false);
  };

  const currentStudent = successStories[currentStory];

  const events = [
    {
      id: 1,
      title: 'Tech Innovation Summit 2025',
      date: 'Jan 20, 2025',
      type: 'Conference',
      attendees: '500+',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      date: 'Feb 15, 2025',
      type: 'Workshop',
      attendees: '150+',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    },
    {
      id: 3,
      title: 'Career Fair & Networking Event',
      date: 'Mar 1, 2025',
      type: 'Networking',
      attendees: '1000+',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    },
  ];


  const phases = [
    {
      title: "Build",
      subtitle: "Create with Purpose",
      icon: "Wrench",
      color: "from-primary to-success",
      description: "We encourage learners to start by creating something tangible — a project, prototype, or product — turning ideas into action from day one.",
      features: [
        "Turn concepts into real projects",
        "Focus on learning by doing",
        "Encourage creativity and experimentation",
        "Develop problem-solving skills through making"
      ],
      image: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/build1.png",
      outcome: "Learners gain hands-on experience by turning concepts into tangible projects, building confidence and technical skills from the start."
    },
    {
      title: "Break",
      subtitle: "Test & Push Limits",
      icon: "Hammer",
      color: "from-destructive to-warning",
      description: "We break down the walls between theoretical education and practical industry needs. No more outdated curricula or irrelevant assignments.",
      features: [
        "Identify skill gaps in current education",
        "Remove theoretical-only learning barriers",
        "Challenge outdated teaching methods",
        "Break free from generic degree programs"
      ],
      image: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/break.png",
      outcome: "Students learn critical thinking and problem-spotting by testing their creations, identifying flaws, and challenging traditional approaches."
    },
    {
      title: "Understand",
      subtitle: "Learn from Experience",
      icon: "BookOpen",
      color: "from-secondary to-primary",
      description: "Learners analyze outcomes, reflect on mistakes, and extract deep insights to understand both successes and failures.",
      features: [
        "Analyze what worked and what didn’t",
        "Learn by reflecting on experiments",
        "Strengthen fundamentals through practice",
        "Develop resilience through iteration"
      ],
      image: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/understand.png",
      outcome: "Learners develop a deep understanding of fundamentals by analyzing mistakes, reflecting on outcomes, and strengthening problem-solving skills."
    },
    {
      title: "Innovate",
      subtitle: "Create Impact",
      icon: "Sparkles",
      color: "from-success to-accent",
      description: "The final step is innovation — applying insights to build impactful, real-world solutions that drive change and inspire progress.",
      features: [
        "Transform knowledge into solutions",
        "Encourage entrepreneurial thinking",
        "Focus on real-world impact",
        "Foster continuous improvement and innovation"
      ],
      image: "https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/innovate.png",
      outcome: "Students evolve into innovators and solution-creators, capable of delivering real-world, industry-ready solutions with long-lasting impact."
    }
  ];

  useEffectHook(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('value-proposition');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffectHook(() => {
    const fetchFeaturedCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        console.error(error);
        return;
      }

      setFeaturedCourses(data || []);
    };

    fetchFeaturedCourses();
  }, []);

  const feedbacks = [
    {
      name: 'Mahalakshmi',
      role: 'Machine learning Intern',
      content: 'Learned by building, not just listening',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=alex',
    },
    {
      name: 'Asruthaa',
      role: 'Machine learning Intern',
      content: 'It was a great learning experience that helped me strengthen my technical and practical skills.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
      name: 'Akshaya',
      role: 'App development Intern',
      content: "The support and encouragement from the team made this experience truly meaningful.",
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=james',
    },
    {
      name: 'Janavi',
      role: 'Machine learning Intern',
      content: 'They deliver innovative solutions with professionalism, reliability, and strong technical expertise.',
      rating: 4,
      avatar: 'https://i.pravatar.cc/150?u=elena',
    },
    {
      name: 'Bhaghyashree',
      role: 'App development Intern',
      content: 'The team provided excellent guidance, and I value the learning experience.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=olivia',
    },
    {
      name: 'Surthiga',
      role: 'App development Intern',
      content: 'Great learning experience with real-time project exposure',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=liam',
    }
  ];

  useEffectHook(() => {
    const setInitialScrollPosition = () => {
      const el = scrollRef.current;
      if (el) {
        const segmentWidth = el.scrollWidth / 3;
        if (segmentWidth > 0) {
          el.scrollLeft = segmentWidth;
        }
      }
    };

    const frameId = requestAnimationFrame(setInitialScrollPosition);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const FeedbackCard = ({
    feedback,
  }: {
    feedback: { content: string; name: string; role: string; avatar: string; rating: number };
  }) => (
    <div
      className="flex-shrink-0 rounded-2xl border border-border/50 bg-background p-8 shadow-sm whitespace-normal"
      style={{
        flexBasis: 'min(360px, calc(100vw - 2rem))',
        width: 'min(360px, calc(100vw - 2rem))',
        minWidth: 'min(360px, calc(100vw - 2rem))',
        height: '280px',
      }}
    >
      <div className="flex h-full flex-col">
        <div className="mb-6 flex gap-1">
          {Array.from({ length: feedback.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 md:h-6 md:w-6" />
          ))}
        </div>
        <p
          className="mb-8 min-w-0 w-full overflow-hidden text-base italic leading-7 text-foreground/80"
          style={{
            whiteSpace: 'normal',
            overflowWrap: 'break-word',
            wordBreak: 'normal',
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
          }}
        >
          "{feedback.content}"
        </p>
        <div className="flex items-center gap-4">
          <img
            src={feedback.avatar}
            alt={feedback.name}
            className="h-12 w-12 rounded-full border-2 border-primary/20 object-cover"
          />
          <div>
            <h4 className="text-base font-bold text-foreground md:text-lg">{feedback.name}</h4>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {feedback.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const techStack = [
    { name: 'React', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/React.png'},
    { name: 'Python', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Python.png'},
    { name: 'JavaScript', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/JavaScript.png'},
    { name: 'Node.js', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Node.png'},
    { name: 'Flutter', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Flutter.png'},
    { name: 'Django', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Django.png'},
    { name: 'HTML/CSS', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/HTML.png'},
    { name: 'MongoDB', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Mongodb.png'},
    { name: 'AWS', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/aws.png'},
    { name: 'Docker', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Docker.png'},
    { name: 'Git', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Github.png'},
    { name: 'TypeScript', src: 'https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/public/public-asset/Typescript.png'},
  ];

  const techMarqueeItems: SlidingLogoMarqueeItem[] = techStack.map(
            (tech, index) => ({
              id: String(index),
              content: (
                <div className="flex items-center justify-center min-w-[120px] px-6">
                  <div className="text-4xl text-[#007DFF]">
                    <img src={tech.src} alt={tech.name} 
                    className="h-12 w-[90px] object-contain grayscale hover:grayscale-0 transition" />
                  </div>
                  {/*<span className="text-sm font-semibold text-[#1A1A1A]">
                    {tech.name}
                  </span>*/}
                </div>
              ),
            })
          );

  const partners = [
    { name: 'Tech University', logo: '🎓' },
    { name: 'Innovation Institute', logo: '💡' },
    { name: 'Digital Academy', logo: '🏛️' },
    { name: 'Global Tech College', logo: '🌐' },
    { name: 'Future Skills Center', logo: '🚀' },
    { name: 'Career Development Hub', logo: '📚' },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#D9EBFF] via-white to-[#F1F8FF]">
        {/* Floating Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-up mt-12 lg:mt-0">
              {/*<div className="inline-flex items-center space-x-2 glass-panel px-5 py-3 rounded-full">
                <Sparkles className="text-[#007DFF]" size={20} />
                <span className="text-[#065FCC]">Premium EdTech Platform</span>
              </div>*/}
              <TypingText delay={0.5} duration={2} className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#007DFF]">N</span>
                <span className="text-black">ext{' '}</span>
                <span className="text-[#007DFF]">I</span>
                <span className="text-black">nnovation{' '}</span>
                <span className="text-[#007DFF]">P</span>
                <span className="text-black">latform{' '}</span>
                <span className="text-black">f</span>
                <span className="text-black">or{' '}</span>
                <span className="text-[#007DFF]">I</span> 
                <span className="text-black">nspired{' '}</span>
                <span className="text-[#007DFF]">X</span>
                <span className="text-black">perience{' '}</span>
              </TypingText>
              <p className="mt-4 text-xl text-[#1A1A1A] leading-relaxed opacity-90">
                Transform your future with world-class tech education. Join thousands of students 
                mastering in-demand skills through our expert-led courses and hands-on projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:shadow-2xl transition-all duration-300 btn-glow group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center px-8 py-4 glass-panel text-[#065FCC] rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  View Programs
                </Link>
              </div>

              {/* Quick Stats */}
              <div ref={heroStatsRef} className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#007DFF]">
                    <AnimatedStatNumber value={10} suffix="K+" shouldAnimate={shouldAnimateHeroStats} />
                  </div>
                  <div className="text-sm text-[#1A1A1A] opacity-70 mt-1">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#007DFF]">
                    <AnimatedStatNumber value={25} suffix="+" shouldAnimate={shouldAnimateHeroStats} />
                  </div>
                  <div className="text-sm text-[#1A1A1A] opacity-70 mt-1">Courses & Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#007DFF]">
                    <AnimatedStatNumber value={98} suffix="%" shouldAnimate={shouldAnimateHeroStats} />
                  </div>
                  <div className="text-sm text-[#1A1A1A] opacity-70 mt-1">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-slide-left">
              <div className="relative rounded-3xl overflow-hidden soft-shadow">
                <ImageWithFallback
                  src={heroStudentsImage}
                  alt="Students Learning Together"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Glass Card */}
              <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl shadow-2xl max-w-xs hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#007DFF] rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#065FCC]">
                      <AnimatedStatNumber value={5000} suffix="+" shouldAnimate={shouldAnimateHeroStats} />
                    </div>
                    <div className="text-sm text-[#1A1A1A] opacity-70">Students Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY BASIC DETAILS SECTION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Right - Illustration */}
            <div className="relative animate-slide-left">
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF] leading-tight">L</span>
                <span className="text-4xl lg:text-5xl font-bold text-black leading-tight">eading{' '}</span>
                <span className="text-4xl lg:text-5xl font-bold text-black leading-tight">the{' '}</span>
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF] leading-tight">F</span>
                <span className="text-4xl lg:text-5xl font-bold text-black leading-tight">uture{' '}</span>
                <span className="text-4xl lg:text-5xl font-bold text-black leading-tight">of{' '}</span>
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF] leading-tight">T</span>
                <span className="text-4xl lg:text-5xl font-bold text-black leading-tight">ech{' '}</span>
                <span className="text-4xl lg:text-5xl font-bold text-[#007DFF] leading-tight">E</span>
                <span className="text-4xl lg:text-5xl font-bold text-black leading-tight">ducation{' '}</span>
              <div className="relative rounded-3xl overflow-hidden soft-shadow mt-12">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200"
                  alt="Tech Education"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Left - Text Content */}
            <div className="space-y-6 animate-fade-up mt-12">
              <p className="mt-4 text-lg text-[#1A1A1A] opacity-80 leading-relaxed">
                Nipix Technology is a forward-thinking EdTech and IT solutions company focused on transforming learners into creators through practical, 
                real-world learning. We bridge the gap between academic knowledge and industry expectations by offering 
                hands-on training, internships, and product-based learning experiences designed and guided by experienced industry professionals.
              </p>
              
              <p className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed">
                Our mission is to empower students and aspiring technologists with future-ready skills through innovative curriculum, real-time projects, 
                and dedicated mentorship. By fostering creativity, innovation, and entrepreneurial thinking, Nipix Technology builds a 
                strong community of learners equipped to solve real-world problems and lead in today’s rapidly evolving technology landscape.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="glass-card p-6 rounded-2xl">
                  <GraduationCap className="text-[#007DFF] mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-[#065FCC] mb-2">Expert Mentors</h3>
                  <p className="text-[#1A1A1A] opacity-70">Learn from seasoned industry professionals with over a decade of real-world experience</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <Target className="text-[#007DFF] mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-[#065FCC] mb-2">Industry-Ready Training</h3>
                  <p className="text-[#1A1A1A] opacity-70">Practical, hands-on learning designed to build real-world skills and professional confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION SECTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#007DFF] font-bold">Our Methodology</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">B</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">uild-</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">B</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">reak-</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">U</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">nderstand-</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">I</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">nnovate</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              A proven 4-phase approach that transforms students from theoretical learners to industry-ready professionals with guaranteed career outcomes.
            </p>
          </div>

          {/* Phase Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activePhase === index
                    ? 'bg-[#007DFF] text-white shadow-lg scale-105'
                    : 'bg-white text-[#1A1A1A] hover:bg-[#F1F8FF] border border-gray-200'
                }`}
              >
                <span className={activePhase === index ? 'text-white' : 'text-[#007DFF]'}>
                  {getIcon(phase.icon, { size: 20 })}
                </span>
                <span className="font-semibold">{phase.title}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          <div className="bg-white rounded-3xl overflow-hidden soft-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white text-[#007DFF] border border-[#007DFF] mb-4">
                    <span className="text-[#007DFF]">
                      {getIcon(phases[activePhase].icon, { size: 24 })}
                    </span>
                    <span className="font-bold text-lg text-[#007DFF]">
                      {phases[activePhase].title}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4">
                    {phases[activePhase].subtitle}
                  </h3>
                  <p className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed">
                    {phases[activePhase].description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {phases[activePhase].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600">
                        {getIcon('Check', { size: 14 })}
                      </div>
                      <span className="text-[#1A1A1A] opacity-80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Outcome Badge */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">
                      {getIcon('Target', { size: 20 })}
                    </span>
                    <div>
                      <div className="font-semibold text-[#1A1A1A] mb-1">Expected Outcome</div>
                      <div className="text-sm text-[#1A1A1A] opacity-70">{phases[activePhase].outcome}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative bg-gradient-to-br from-[#D9EBFF] to-[#F1F8FF] p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <ImageWithFallback
                      src={phases[activePhase].image}
                      alt={`${phases[activePhase].title} Phase`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Phase {activePhase + 1}</div>
                      <div className="text-lg font-bold">{phases[activePhase].title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {phases.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activePhase 
                    ? 'w-8 bg-[#007DFF]' 
                    : index < activePhase 
                      ? 'w-4 bg-green-500' 
                      : 'w-4 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. COURSES OFFERED SECTION */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-16 animate-fade-up">
            <h2 className="mb-6 justify-center">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">C</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ourses{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">O</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ffered</span>
            </h2>
            <Link
              to="/courses"
              className="hidden md:inline-flex items-center text-[#007DFF] hover:text-[#065FCC] font-semibold transition-colors"
            >
              View All
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift border border-gray-100 cursor-pointer h-[540px] flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 1. TOP IMAGE / THUMBNAIL */}
                <div className="relative h-[200px] bg-gradient-to-br from-[#D9EBFF] to-[#F1F8FF] overflow-hidden flex-shrink-0">
                  <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-[#D9EBFF] to-[#F1F8FF] flex-shrink-0">
                    <ImageWithFallback
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  {/* 2. CATEGORY TAGS */}
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#D9EBFF] text-[#007DFF] rounded-full text-xs font-semibold">
                      {course.type === 'paid' ? 'Premium' : course.type === 'combo' ? 'Combo Package' : course.type === 'domain' ? 'Domain Specific' : 'Free Course'}
                    </span>
                    <span className="px-3 py-1 bg-[#D9EBFF] text-[#007DFF] rounded-full text-xs font-semibold">
                      {course.level}
                    </span>
                  </div>
                  
                  {/* 3. COURSE TITLE */}
                  <h3 className="text-xl font-bold text-[#003C78] mb-3 line-clamp-2 group-hover:text-[#007DFF] transition-colors">{course.title}</h3>
                  
                  {/* 4. COURSE SHORT DESCRIPTION */}
                  <p className="text-[#1A1A1A] opacity-70 text-sm mb-4 line-clamp-2">{course.description}</p>
                  
                  {/* 6. RATING & DURATION ROW */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="fill-current text-yellow-400" size={16} />
                      <span className="ml-1 text-sm font-semibold text-[#1A1A1A]">{course.rating}</span>
                      <span className="ml-1 text-sm text-[#1A1A1A] opacity-50">({course.reviews || 0})</span>
                    </div>
                    <div className="flex items-center text-[#007DFF]">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm font-semibold">{course.duration}</span>
                    </div>
                  </div>

                  {/* Spacer to push bottom content down */}
                  <div className="flex-grow"></div>

                  {/* 7. DIVIDER */}
                  <div className="border-t border-gray-200 mb-4"></div>

                  {/* 8. BOTTOM TAGS ROW */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs text-[#007DFF]">{course.language}</span>
                    <span className="text-xs text-[#1A1A1A] opacity-30">•</span>
                    <span className="text-xs text-[#007DFF]">{course.mode}</span>
                    <span className="text-xs text-[#1A1A1A] opacity-30">•</span>
                    <span className="text-xs text-[#007DFF]">{course.level}</span>
                  </div>

                  {/* 9 & 10. PRICE + CTA ROW */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      {course.original_price && (
                        <div className="text-sm text-gray-500 line-through">₹{course.original_price}</div>
                      )}
                      <span className="text-2xl font-bold text-[#007DFF]">₹{course.price}</span>
                    </div>
                    <span className="px-5 py-2 bg-[#007DFF] text-white rounded-xl hover:bg-[#066EE2] transition-colors font-semibold text-sm">
                      Enroll Now
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/courses"
              className="inline-flex items-center text-[#007DFF] hover:text-[#065FCC] font-semibold"
            >
              View All Courses
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. STUDENTS TESTIMONIALS SECTION - Enhanced Success Stories */}
      <section className="py-24 lg:py-32 bg-white" id="success-stories">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#007DFF] font-bold">Success Stories</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">Real </span>
              <span className="text-4xl lg:text-5xl font-bold text-black">Students, </span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">Real </span>
              <span className="text-4xl lg:text-5xl font-bold text-black">Success</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Hear from our successful students and their career transformations
            </p>
          </div>

          {/* Success Stories Card */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Left Side - Student Information */}
              <div className="space-y-6">
                {/* Student Header */}
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      {currentStudent?.name}
                    </h3>
                    <p className="text-[#065FCC] font-semibold">
                      {currentStudent?.course}
                    </p>
                    <p className="text-sm text-[#1A1A1A] opacity-60">
                      {currentStudent?.duration}
                    </p>
                  </div>
                </div>

                {/* Salary Journey 
                <div className="bg-gradient-to-r from-[#007DFF]/10 to-[#065FCC]/10 rounded-2xl p-6 border border-[#007DFF]/20">
                  <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center">
                    <CheckCircle className="mr-2 text-green-600" size={20} />
                    Salary Journey
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#1A1A1A] opacity-70">Before:</span>
                      <span className="font-semibold text-[#1A1A1A]">
                        {currentStudent?.beforeSalary}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1A1A1A] opacity-70">After:</span>
                      <span className="font-semibold text-green-600">
                        {currentStudent?.afterSalary}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-[#007DFF]/20 flex justify-between">
                      <span className="text-[#1A1A1A] opacity-70">Increase:</span>
                      <span className="font-bold text-[#007DFF]">
                        {currentStudent?.salaryIncrease}
                      </span>
                    </div>
                  </div>
                </div>*/} 

                {/* Testimonial Quote */}
                <div className="bg-white border-2 border-[#007DFF]/20 rounded-2xl p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Quote className="text-[#007DFF] flex-shrink-0 mt-1" size={20} />
                  </div>
                  <p className="text-[#1A1A1A] italic leading-relaxed text-sm">
                    "{currentStudent?.testimonial}"
                  </p>
                </div>

                {/* Skills Mastered */}
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center">
                    <Code className="mr-2 text-[#007DFF]" size={20} />
                    Skills Mastered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStudent?.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#007DFF]/10 text-[#007DFF] rounded-full text-xs font-semibold border border-[#007DFF]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects Completed */}
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center">
                    <Folder className="mr-2 text-[#007DFF]" size={20} />
                    Key Projects
                  </h4>
                  <div className="space-y-2">
                    {currentStudent?.projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex items-center text-[#1A1A1A] text-sm"
                      >
                        <CheckCircle className="mr-2 text-green-600 flex-shrink-0" size={16} />
                        {project}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Side - Video Player & Timeline */}
              <div className="space-y-6 flex flex-col">
                {/* Video Player */}
                <div className="flex items-center justify-center flex-1">
                  {!isPlaying ? (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                      onClick={() => setIsPlaying(true)}>
                      <img
                        src={currentStudent?.videoThumbnail}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                        <div className="bg-[#007DFF] rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play className="text-white" size={32} fill="white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                      <video
                        src={currentStudent?.videoUrl}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        onEnded={() => setIsPlaying(false)}
                      />
                    </div>
                  )}
                </div>

                {/* Timeline */}
                <div className="bg-[#F1F8FF] rounded-2xl p-6 border border-[#007DFF]/20">
                  <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center">
                    <Clock className="mr-2 text-[#007DFF]" size={20} />
                    Success Timeline
                  </h4>
                  <p className="text-sm text-[#1A1A1A] leading-relaxed">
                    {currentStudent?.timeline}
                  </p>
                </div>
              </div>
              
            </motion.div>
            

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {successStories.map((story, index) => (
                <motion.button
                  key={story.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleStoryChange(index)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
                    index === currentStory
                      ? 'bg-[#007DFF] text-white shadow-lg'
                      : 'bg-[#F1F8FF] text-[#1A1A1A] hover:bg-[#007DFF]/20 border border-[#007DFF]/30'
                  }`}
                >
                  <div className="font-bold">{story.name.split("'")[0]}</div>
                  <div className="text-xs opacity-75">{story.afterRole}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEEDBACK SECTION */}
      <section className="py-24 w-full bg-background overflow-hidden relative">
        <div className="container px-4 mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#007DFF] font-bold">Feedbacks</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-4 text-3xl font-black tracking-tight md:text-5xl"
          >
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">W</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">hat{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">O</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ur{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">S</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">tudents{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">S</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ay</span>
            </h2>
          </motion.h2>
        </div>

        <div className="relative group max-w-[100vw] overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={() => {
              if (!scrollRef.current) return;

              const segmentWidth = scrollRef.current.scrollWidth / 3;
              if (scrollRef.current.scrollLeft <= 0) {
                scrollRef.current.scrollLeft += segmentWidth;
              }

              if (scrollRef.current.scrollLeft >= segmentWidth * 2) {
                scrollRef.current.scrollLeft -= segmentWidth;
              }
            }}
            className="flex gap-8 overflow-x-auto py-12 whitespace-nowrap scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`.feedback-scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
            <div className="feedback-scrollbar-hide flex gap-8">
              {[...feedbacks, ...feedbacks, ...feedbacks].map((feedback, index) => (
                <FeedbackCard key={`${feedback.name}-${index}`} feedback={feedback} />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        </div>
      </section>
      {/* 6. RECENT EVENTS SECTION
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#007DFF] font-bold">Upcoming Events</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">R</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ecent{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">E</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">vents</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Connect, learn, and grow with fellow tech enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift border border-gray-100 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 px-4 py-1 bg-[#007DFF] text-white rounded-full text-sm font-semibold">
                    {event.type}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#007DFF] transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-[#1A1A1A] opacity-70">
                    <p className="flex items-center">
                      <Calendar size={16} className="mr-2 text-[#007DFF]" />
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <Users size={16} className="mr-2 text-[#007DFF]" />
                      {event.attendees} Registered
                    </p>
                  </div>

                  <div className="flex items-center text-[#007DFF] font-semibold group-hover:text-[#065FCC] transition-colors pt-2">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>*/}

      {/* 7. TECH STACK TAUGHT SECTION */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#007DFF] font-bold">Technologies</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">T</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ech{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">S</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">tack{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">W</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">e{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">T</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">each</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Master the most in-demand technologies in the industry
            </p>
          </div>
          <SlidingLogoMarquee
            items={techMarqueeItems}
            speed={50}
            height="120px"
            pauseOnHover={true}
            enableBlur={true}
            blurIntensity={1}
          />
        </div>
      </section>

      {/* 8. MOU DETAILS SECTION (Partner Institutions) 
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#007DFF] font-bold">Partnerships</span>
            </div>
            <h2 className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">O</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">ur{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">P</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">artner{' '}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#007DFF]">I</span>
              <span className="text-4xl lg:text-5xl font-bold text-black">nstitutions</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Collaborating with leading institutions to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 soft-shadow hover-lift border border-gray-100 text-center cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-6xl mb-4">{partner.logo}</div>
                <h3 className="text-sm font-semibold text-[#1A1A1A]">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER 
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        {/* Background Pattern 
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of successful students and start your journey towards 
              a rewarding tech career today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover-lift"
              >
                Browse Courses
                <ArrowRight className="ml-2" size={22} />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 glass-panel text-[#007DFF] rounded-2xl hover:shadow-xl transition-all duration-300 text-lg font-semibold border-white/40"
              >
                Talk to Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
