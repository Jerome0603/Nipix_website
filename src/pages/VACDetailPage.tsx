import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  Video,
  FileText,
  Code,
  Brain,
  Cloud,
  Palette,
  Database,
  Lock,
  Smartphone,
  Zap,
  Globe,
  Star,
  Play,
} from 'lucide-react';
const iconMap: Record<string, any> = {
  "ai-ml": Brain,
  "full-stack": Code,
  "cloud": Cloud,
  "ui-ux": Palette,
  "data-science": Database,
  "cybersecurity": Lock,
  "mobile": Smartphone,
  "digital-marketing": TrendingUp,
  "devops": Zap,
};
import { Breadcrumb } from '../components/ComponentLibrary';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { supabase } from '../lib/supabase';
import { CourseSkeleton } from '../components/CourseSkeleton';


export function VACDetailPage() {
  const { domain } = useParams<{ domain: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchVAC = async () => {
      if (!domain) return;

      const { data, error } = await supabase
        .from("vac_programs")
        .select(`
          *,
          vac_curriculum (
            id,
            module,
            sort_order,
            vac_lessons (
              lesson,
              sort_order
            )
          )
        `)
        .eq("slug", domain)
        .eq("status", "published")
        .maybeSingle();

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setData(data);
      setLoading(false);
    };

    fetchVAC();
  }, [domain]);

  if (loading) return <CourseSkeleton />;
  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Domain Not Found</h1>
          <p className="text-[#1A1A1A] opacity-70 mb-8">
            The VAC domain you're looking for doesn't exist.
          </p>
          <Link
            to="/vac"
            className="inline-flex items-center px-8 py-4 bg-[#007DFF] text-white rounded-xl font-semibold hover:bg-[#065FCC] transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to VAC Programs
          </Link>
        </div>
      </div>
    );
  }

  const Icon =  iconMap[data.slug] ?? Brain;

  const curriculum =
    data?.vac_curriculum
      ?.sort((a: any, b: any) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .map((module: any) => ({
        module: module.module,
        lessons: module.vac_lessons
          ?.sort((a: any, b: any) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
          .map((l: any) => l.lesson),
      })) ?? [];

  const features = [
    { icon: Video, text: 'Live interactive sessions' },
    { icon: FileText, text: 'Comprehensive study materials' },
    { icon: Code, text: 'Hands-on coding projects' },
    { icon: Award, text: 'Industry-recognized certificate' },
    { icon: Users, text: 'Mentorship & support' },
    { icon: Globe, text: 'Lifetime access to content' },
  ];

  const benefits = [
    'Industry-relevant curriculum',
    'Expert instructor guidance',
    'Hands-on practical projects',
    'Certificate upon completion',
    'Career support & guidance',
    'Access to alumni network',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb 
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <Breadcrumb
            items={[
              { label: 'Programs', href: '/programs' },
              { label: 'Value Added Courses', href: '/vac' },
              { label: data.name, href: `/programs/vac/${domain}` },
            ]}
          />
        </div>
      </div>*/}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F1F8FF] to-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="animate-fade-up">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-[#007DFF] hover:text-[#065FCC] mb-6 font-semibold transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to VAC Programs
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)` }}
                >
                  <Icon className="text-[#007DFF]" size={32} />
                </div>
                <div className="inline-block glass-panel px-4 py-2 rounded-full">
                  <span className="text-[#007DFF] font-semibold">Value Added Course</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                {data.title}
              </h1>

              <p className="text-xl text-[#1A1A1A] opacity-80 leading-relaxed mb-8">
                {data.long_description}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="glass-panel rounded-xl p-4 text-center">
                  <Clock size={24} className="text-[#007DFF] mx-auto mb-2" />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Duration</div>
                  <div className="font-bold text-[#1A1A1A]">{data.duration}</div>
                </div>
                <div className="glass-panel rounded-xl p-4 text-center">
                  <Target size={24} className="text-[#007DFF] mx-auto mb-2" />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Level</div>
                  <div className="font-bold text-[#1A1A1A] text-xs">{data.level}</div>
                </div>
                <div className="glass-panel rounded-xl p-4 text-center">
                  <Users size={24} className="text-[#007DFF] mx-auto mb-2" />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Students</div>
                  <div className="font-bold text-[#1A1A1A]">{data.students}</div>
                </div>
                <div className="glass-panel rounded-xl p-4 text-center">
                  <Star size={24} className="text-yellow-500 mx-auto mb-2" />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Rating</div>
                  <div className="font-bold text-[#1A1A1A]">{data.rating}/5</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#007DFF] to-[#065FCC] text-white rounded-xl font-bold hover:shadow-2xl transition-all btn-glow hover:scale-[1.02]"
                >
                  Enroll Now - {data.price}
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 glass-panel text-[#007DFF] rounded-xl font-semibold hover:bg-[#F1F8FF] transition-all border-2 border-[#007DFF]/30">
                  <Play size={20} className="mr-2" />
                  Watch Intro Video
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-3xl overflow-hidden soft-shadow border-4 border-white">
                <ImageWithFallback
                  src={data.image_url}
                  alt={data.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-panel rounded-2xl p-6 hover-lift animate-fade-up border-2 border-[#007DFF]/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-xl flex items-center justify-center mb-4">
                    <FeatureIcon className="text-white" size={24} />
                  </div>
                  <p className="font-semibold text-[#1A1A1A]">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#007DFF] font-semibold">Course Curriculum</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                What You'll Learn
              </h2>
            </div>

            <div className="space-y-4">
              {curriculum.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 soft-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#007DFF] rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{item.module}</h3>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {item.lessons.map((lesson: any, lessonIndex: number) => (
                      <li key={lessonIndex} className="flex items-center gap-3 text-[#1A1A1A] opacity-70">
                        <CheckCircle size={18} className="text-[#007DFF] flex-shrink-0" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                Why Choose This Program?
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                Join thousands of successful learners
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 glass-panel rounded-2xl p-6 animate-fade-up border-2 border-[#007DFF]/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle size={24} className="text-[#007DFF] flex-shrink-0 mt-1" />
                  <p className="text-[#1A1A1A] font-semibold text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 soft-shadow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl font-bold text-white">
                    {data.instructor.charAt(0)}
                  </span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="text-sm text-[#007DFF] font-semibold mb-2">Your Instructor</div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-3">{data.instructor}</h3>
                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed mb-4">
                    Industry expert with 3+ years of experience. Has trained over 5,000 students and worked with top tech companies.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-[#F1F8FF] text-[#007DFF] rounded-lg text-sm font-semibold">
                      3+ Years Experience
                    </span>
                    <span className="px-4 py-2 bg-[#F1F8FF] text-[#007DFF] rounded-lg text-sm font-semibold">
                      5,000+ Students
                    </span>
                    <span className="px-4 py-2 bg-[#F1F8FF] text-[#007DFF] rounded-lg text-sm font-semibold">
                      ⭐ 4.9 Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join this program today and accelerate your career growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg"
              >
                Enroll Now - {data.price}
              </Link>
              <Link
                to="/vac"
                className="inline-flex items-center justify-center px-10 py-5 glass-panel text-[#007DFF] rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
              >
                View All VAC Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
