import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Clock,
  Download,
  CheckCircle,
  Calendar,
  DollarSign,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Award,
  Target,
  TrendingUp,
  Code,
  Briefcase,
  GraduationCap,
  BookOpen,
  Sparkles,
  Shield,
  Zap,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProgramDetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileSticky, setIsMobileSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const program = {
    title: 'Professional Certification Program',
    tagline: 'Transform your career with industry-recognized certification in 12 weeks',
    duration: '12 Weeks',
    mode: 'Hybrid (Online + Live)',
    level: 'Beginner to Intermediate',
    price: '$1,299',
    nextBatch: 'Jan 20, 2025',
    seatsAvailable: '15/30',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
    mentor: 'Dr. Sarah Johnson',
  };

  const learningModules = [
    {
      icon: Code,
      title: 'Foundation Skills',
      description: 'Master core concepts and fundamental principles',
      color: '#0A66C2',
    },
    {
      icon: Sparkles,
      title: 'Advanced Techniques',
      description: 'Learn cutting-edge industry practices',
      color: '#003C78',
    },
    {
      icon: Target,
      title: 'Real-World Projects',
      description: 'Build 5+ portfolio-ready projects',
      color: '#0A66C2',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work on group projects with peers',
      color: '#003C78',
    },
    {
      icon: TrendingUp,
      title: 'Career Development',
      description: 'Resume building and interview prep',
      color: '#0A66C2',
    },
    {
      icon: Award,
      title: 'Certification Prep',
      description: 'Prepare for industry certifications',
      color: '#003C78',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Lifetime access to resources',
      color: '#0A66C2',
    },
    {
      icon: Shield,
      title: 'Mentorship Support',
      description: '1-on-1 guidance from experts',
      color: '#003C78',
    },
  ];

  const outcomes = [
    {
      title: 'Skills Mastered',
      items: ['React & Node.js', 'Python & Django', 'Cloud Technologies', 'DevOps Practices', 'Agile Methodology'],
      icon: Zap,
    },
    {
      title: 'Tools You\'ll Use',
      items: ['VS Code', 'Git & GitHub', 'Docker', 'AWS', 'Jira & Confluence'],
      icon: Code,
    },
    {
      title: 'Job Roles Ready',
      items: ['Full Stack Developer', 'Software Engineer', 'DevOps Engineer', 'Cloud Specialist', 'Tech Lead'],
      icon: Briefcase,
    },
    {
      title: 'Certifications',
      items: ['Nipix Professional Certificate', 'AWS Certified Developer', 'Scrum Master (optional)', 'Portfolio Projects'],
      icon: GraduationCap,
    },
  ];

  const mentors = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Learning Officer',
      bio: 'Former Google Education Lead',
      image: 'https://i.pravatar.cc/400?img=1',
      linkedin: '#',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Software Architect',
      bio: 'Ex-Microsoft Senior Engineer',
      image: 'https://i.pravatar.cc/400?img=13',
      linkedin: '#',
    },
    {
      name: 'Emily Rodriguez',
      role: 'DevOps Specialist',
      bio: '10+ years in Cloud Computing',
      image: 'https://i.pravatar.cc/400?img=5',
      linkedin: '#',
    },
  ];

  const gallery = [
    { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', caption: 'Interactive Workshop Session' },
    { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', caption: 'Team Project Collaboration' },
    { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', caption: 'Graduation Day Celebration' },
    { image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800', caption: 'Guest Speaker Session' },
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Full Stack Developer at Tech Giants Inc',
      image: 'https://i.pravatar.cc/150?img=14',
      rating: 5,
      text: 'This program completely transformed my career trajectory. The hands-on approach and mentorship were invaluable.',
    },
    {
      name: 'Maria Garcia',
      role: 'Software Engineer at StartupXYZ',
      image: 'https://i.pravatar.cc/150?img=10',
      rating: 5,
      text: 'Best decision I ever made! Landed my dream job within 3 weeks of completing the program.',
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer at Cloud Solutions',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'The curriculum is industry-relevant and the instructors are top-notch. Highly recommended!',
    },
    {
      name: 'Lisa Wang',
      role: 'Tech Lead at Digital Agency',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'From career switcher to tech lead in 18 months. This program gave me the foundation I needed.',
    },
  ];

  const faqs = [
    {
      question: 'What are the prerequisites for this program?',
      answer: 'No prior experience required! This program is designed for beginners and intermediate learners. Basic computer skills and eagerness to learn are all you need.',
    },
    {
      question: 'Is this program available online or offline?',
      answer: 'This is a hybrid program combining the best of both worlds. Live online sessions are held 3 times a week, with optional in-person workshops once a month at our campus.',
    },
    {
      question: 'How much time do I need to commit weekly?',
      answer: 'We recommend dedicating 12-15 hours per week, including live sessions (6 hours), self-paced learning (4-6 hours), and project work (2-3 hours). The schedule is flexible to accommodate working professionals.',
    },
    {
      question: 'What kind of certification will I receive?',
      answer: 'Upon successful completion, you\'ll receive an industry-recognized Nipix Professional Certificate. Additionally, we prepare you for external certifications like AWS and provide vouchers for certification exams.',
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes! We offer comprehensive career support including resume reviews, portfolio building, mock interviews, and access to our exclusive job board with 150+ hiring partners. 98% of our graduates land jobs within 3 months.',
    },
    {
      question: 'What is the payment structure?',
      answer: 'We offer flexible payment options: full payment ($1,299), two installments ($699 each), or EMI plans. We also have scholarships available for eligible candidates.',
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'Yes, we offer a 14-day money-back guarantee from the start date. If you\'re not satisfied with the program, you can request a full refund within the first two weeks.',
    },
    {
      question: 'Will I get lifetime access to course materials?',
      answer: 'Absolutely! You get lifetime access to all program materials, recordings, resources, and future updates at no additional cost.',
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="pt-20 bg-white">
      {/* 1. Transparent Breadcrumb Bar */}
      <section className="sticky top-20 z-40 glass-panel py-4 border-b border-white/60 backdrop-blur-xl animate-fade-up">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-[#0A66C2] hover:text-[#003C78] transition-colors">
              Home
            </Link>
            <ChevronRight size={16} className="mx-2 text-[#1A1A1A] opacity-40" />
            <Link to="/programs" className="text-[#0A66C2] hover:text-[#003C78] transition-colors">
              Programs
            </Link>
            <ChevronRight size={16} className="mx-2 text-[#1A1A1A] opacity-40" />
            <span className="text-[#1A1A1A] opacity-70">{program.title}</span>
          </div>
        </div>
      </section>

      {/* 2. Program Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF] relative overflow-hidden">
        {/* Parallax Background Shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#003C78] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="animate-fade-up">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-6">
                <span className="text-[#0A66C2]">Premium Program</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#003C78] mb-6 leading-tight">
                {program.title}
              </h1>

              <p className="text-2xl text-[#1A1A1A] opacity-80 mb-8 leading-relaxed">
                {program.tagline}
              </p>

              {/* Key Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center glass-panel px-5 py-3 rounded-xl">
                  <Clock className="text-[#0A66C2] mr-2" size={20} />
                  <span className="text-[#003C78] font-semibold">{program.duration}</span>
                </div>
                <div className="flex items-center glass-panel px-5 py-3 rounded-xl">
                  <MapPin className="text-[#0A66C2] mr-2" size={20} />
                  <span className="text-[#003C78] font-semibold">{program.mode}</span>
                </div>
                <div className="flex items-center glass-panel px-5 py-3 rounded-xl">
                  <Award className="text-[#0A66C2] mr-2" size={20} />
                  <span className="text-[#003C78] font-semibold">{program.level}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-all duration-300 btn-glow text-lg font-semibold"
                >
                  Join Program
                </Link>

                <button className="inline-flex items-center justify-center px-8 py-4 glass-panel text-[#003C78] rounded-xl hover:shadow-xl transition-all duration-300 font-semibold">
                  <Download className="mr-2" size={20} />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Column - Floating Glass Card with Image */}
            <div className="relative animate-slide-left">
              <div className="glass-panel rounded-3xl p-4 shadow-2xl animate-float">
                <div className="rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[450px] object-cover"
                  />
                </div>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -bottom-8 -left-8 glass-panel px-6 py-4 rounded-2xl shadow-xl hidden lg:block">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A66C2]">98%</div>
                  <div className="text-sm text-[#1A1A1A] opacity-70 mt-1">Job Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Program Overview Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - Description & Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-[#003C78] mb-6">Program Overview</h2>

              <div className="mb-10">
                <p className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed mb-4">
                  Our Professional Certification Program is a comprehensive 12-week journey designed to 
                  transform you into a job-ready professional. Combining expert-led instruction, hands-on 
                  projects, and personalized mentorship, this program equips you with the in-demand skills 
                  that employers are actively seeking.
                </p>
                <p className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed mb-4">
                  Whether you're looking to switch careers, advance in your current role, or start your own 
                  venture, this program provides the perfect foundation. With a proven track record of 98% 
                  job placement within 3 months, you'll be part of a success story.
                </p>
                <p className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed">
                  Join thousands of successful graduates who have transformed their careers through our 
                  industry-leading curriculum, taught by professionals with real-world experience from 
                  companies like Google, Microsoft, and Amazon.
                </p>
              </div>

              <h3 className="text-3xl font-bold text-[#003C78] mb-6">Key Program Benefits</h3>

              <div className="space-y-4">
                {[
                  'Live instructor-led sessions 3x per week with industry experts',
                  'Hands-on projects that build your professional portfolio',
                  '1-on-1 mentorship sessions with dedicated career advisors',
                  'Access to exclusive job board with 150+ hiring partners',
                  'Industry-recognized certification upon successful completion',
                  'Lifetime access to all course materials and future updates',
                  'Peer networking and collaboration opportunities',
                  'Resume review, mock interviews, and career coaching',
                  'Flexible learning schedule for working professionals',
                  '14-day money-back guarantee if not satisfied',
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start animate-fade-up bg-[#E8F3FF] rounded-xl p-4 hover-lift"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="text-[#0A66C2] mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-[#1A1A1A] opacity-80 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Highlight Box (Glass) */}
            <div>
              <div className="glass-panel rounded-2xl p-8 shadow-xl sticky top-32">
                <h3 className="text-2xl font-bold text-[#003C78] mb-6">Program Highlights</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between pb-4 border-b border-white/60">
                    <div className="flex items-center">
                      <Clock className="text-[#0A66C2] mr-3" size={24} />
                      <span className="text-[#1A1A1A] opacity-70">Duration</span>
                    </div>
                    <span className="text-[#003C78] font-semibold">{program.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-white/60">
                    <div className="flex items-center">
                      <DollarSign className="text-[#0A66C2] mr-3" size={24} />
                      <span className="text-[#1A1A1A] opacity-70">Program Fee</span>
                    </div>
                    <span className="text-[#003C78] font-semibold text-2xl">{program.price}</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-white/60">
                    <div className="flex items-center">
                      <Calendar className="text-[#0A66C2] mr-3" size={24} />
                      <span className="text-[#1A1A1A] opacity-70">Next Batch</span>
                    </div>
                    <span className="text-[#003C78] font-semibold">{program.nextBatch}</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-white/60">
                    <div className="flex items-center">
                      <Users className="text-[#0A66C2] mr-3" size={24} />
                      <span className="text-[#1A1A1A] opacity-70">Seats Left</span>
                    </div>
                    <span className="text-red-500 font-semibold">{program.seatsAvailable}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="text-[#0A66C2] mr-3" size={24} />
                      <span className="text-[#1A1A1A] opacity-70">Lead Mentor</span>
                    </div>
                    <span className="text-[#003C78] font-semibold text-sm">{program.mentor}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full px-6 py-4 bg-[#0A66C2] text-white text-center rounded-xl hover:bg-[#003C78] transition-colors duration-200 font-semibold text-lg mb-4"
                >
                  Enroll Now
                </Link>

                <button className="block w-full px-6 py-4 glass-panel text-[#003C78] text-center rounded-xl hover:shadow-lg transition-all duration-200 font-semibold">
                  <MessageCircle className="inline mr-2" size={20} />
                  Talk to Advisor
                </button>

                <p className="text-xs text-[#1A1A1A] opacity-60 text-center mt-4">
                  Limited seats available • Early bird discount expires soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What You Will Learn - Modules Grid */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#0A66C2]">Comprehensive Curriculum</span>
            </div>
            <h2 className="text-5xl font-bold text-[#003C78] mb-6">
              What You Will Learn
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              8 core learning modules designed to make you industry-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningModules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 soft-shadow hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: module.color }}
                >
                  <module.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#003C78] mb-3">{module.title}</h3>
                <p className="text-[#1A1A1A] opacity-70">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Program Outcomes Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#0A66C2]">Career Outcomes</span>
            </div>
            <h2 className="text-5xl font-bold text-[#003C78] mb-6">
              What You'll Achieve
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              The skills, tools, and credentials you'll gain from this program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#E8F3FF] to-white rounded-2xl p-8 soft-shadow hover-lift border-2 border-[#0A66C2]/20"
              >
                <div className="w-14 h-14 bg-[#0A66C2] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <outcome.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#003C78] mb-4">{outcome.title}</h3>
                <ul className="space-y-2">
                  {outcome.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#1A1A1A] opacity-80">
                      <CheckCircle className="text-[#0A66C2] mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mentors Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#0A66C2]">Expert Mentors</span>
            </div>
            <h2 className="text-5xl font-bold text-[#003C78] mb-6">
              Learn from Industry Leaders
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Get guided by professionals with years of real-world experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden hover-lift shadow-xl animate-slide-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-[#003C78] mb-2">{mentor.name}</h3>
                  <p className="text-[#0A66C2] mb-2">{mentor.role}</p>
                  <p className="text-sm text-[#1A1A1A] opacity-70 mb-4">{mentor.bio}</p>
                  <a
                    href={mentor.linkedin}
                    className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-colors"
                  >
                    <Linkedin size={18} className="mr-2" />
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Program Gallery */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#0A66C2]">Previous Batches</span>
            </div>
            <h2 className="text-5xl font-bold text-[#003C78] mb-6">
              Program Gallery
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Glimpses from our successful program batches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden hover-lift soft-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#E8F3FF]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg drop-shadow-lg">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#0A66C2]">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-[#003C78] mb-6">
              What Our Alumni Say
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Real experiences from graduates who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl p-8 hover-lift shadow-xl animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-current text-yellow-400" size={18} />
                  ))}
                </div>

                <p className="text-[#1A1A1A] opacity-80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#0A66C2]/40"
                  />
                  <div>
                    <div className="text-[#003C78] font-semibold">{testimonial.name}</div>
                    <div className="text-[#1A1A1A] opacity-70 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section - Accordion */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#0A66C2]">Have Questions?</span>
              </div>
              <h2 className="text-5xl font-bold text-[#003C78] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-80">
                Find answers to common questions about the program
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-panel rounded-2xl overflow-hidden hover-lift transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#E8F3FF]/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-bold text-[#003C78] text-left pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="text-[#0A66C2] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#0A66C2] flex-shrink-0" size={24} />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-8 py-6 bg-white border-t border-white/60 animate-slide-right">
                      <p className="text-[#1A1A1A] opacity-80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Banner */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#003C78] to-[#0A66C2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Join the {program.title} Today!
            </h2>

            <p className="text-2xl text-white/90 mb-10">
              Limited seats available for the next batch starting {program.nextBatch}. 
              Don't miss this opportunity to transform your career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#0A66C2] rounded-xl hover:shadow-2xl transition-all duration-300 btn-glow text-lg font-semibold"
              >
                Enroll Now
              </Link>

              <button className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-xl hover:shadow-xl transition-all duration-300 text-lg font-semibold border-white/40">
                <MessageCircle className="mr-2" size={22} />
                Talk to Advisor
              </button>
            </div>

            <p className="text-white/70 text-sm mt-6">
              ⚡ Early bird discount: Save $200 if you enroll before Dec 31, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom CTA */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isMobileSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="glass-panel border-t border-white/60 backdrop-blur-xl p-4">
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="flex-1 px-6 py-4 bg-[#0A66C2] text-white text-center rounded-xl hover:bg-[#003C78] transition-colors font-semibold"
            >
              Join Program
            </Link>
            <button className="px-6 py-4 glass-panel text-[#003C78] rounded-xl hover:shadow-lg transition-all font-semibold border border-[#0A66C2]/30">
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
