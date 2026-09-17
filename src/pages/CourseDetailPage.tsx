import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { supabase } from '../lib/supabase';
import { 
  ChevronRight, 
  Clock, 
  Award, 
  Download, 
  CheckCircle, 
  Calendar, 
  Users, 
  Star,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  Globe,
  Video,
  Check,
  Target,
  Code,
  Database,
  Smartphone,
  ChevronLeft,
  Briefcase,
  GraduationCap
  ,
  Loader2
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/ComponentLibrary';
import { CourseSkeleton } from '../components/CourseSkeleton';

// ===== Supabase Course Types =====

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;

  description?: string;

  duration?: string;
  level?: string;
  mode?: string;
  language?: string;

  originalPrice?: number;
  price?: number;

  startDate?: string;

  rating?: number;
  reviews?: number;
  students?: number;

  hasCertificate?: boolean;
  certificateImage?: string;

  modules: {
    id: string;
    title: string;
    duration?: string;
    lessons: string[];
  }[];

  keyOutcomes: string[];
  learningOutcomes: string[];
  requirements: string[];

  projects: {
    id: string;
    title: string;
    description?: string;
    output?: string;
    icon?: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];

  testimonials: {
    id: string;
    name: string;
    role?: string;
    company?: string;
    text: string;
    rating?: number;
    image?: string;
  }[];
}


export function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);

  const [openModule, setOpenModule] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasItems = (arr?: any[]) => Array.isArray(arr) && arr.length > 0;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
  });

  useEffect(() => {
    const fetchCourse = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          modules:course_modules (*,
            lessons:course_lessons (*)),
          learning_outcomes:course_learning_outcomes (*),
          requirements:course_requirements (*),
          projects:course_projects (*),
          faqs:course_faqs (*),
          testimonials:course_testimonials (*)
        `)
        .eq('slug', slug)
        .eq('status', 'published') // Only fetch published courses
        .single();

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (!data) {
        setLoading(false);
        return;
      }

      console.log("Slug from URL:", slug);
      console.log("Supabase data:", data);
      console.log("Supabase error:", error);

      // 🔥 Transform relational structure to match your UI
      const formattedCourse: Course = {
        id: data.id,
        slug: data.slug,
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,

        duration: data.duration,
        level: data.level,
        mode: data.mode,
        language: data.language,

        originalPrice: data.original_price,
        price: data.price,

        startDate: data.start_date,

        rating: data.rating || 0,
        reviews: 0, // If you don't have reviews column
        students: data.total_enrolled || 0,

        hasCertificate: data.certificate_enabled,
        certificateImage: data.certificate_image,

        modules:
          data.modules?.map((m: any) => ({
            id: m.id,
            title: m.title,
            duration: m.duration,
            lessons: m.lessons?.map((l: any) => l.title) || [],
          })) || [],

        keyOutcomes:
          data.learning_outcomes
            ?.filter((o: any) => o.type === "key")
            .map((o: any) => o.outcome) || [],

        learningOutcomes:
          data.learning_outcomes
            ?.filter((o: any) => o.type === "learning")
            .map((o: any) => o.outcome) || [],

        requirements:
          data.requirements?.map((r: any) => r.requirement) || [],

        projects:
          data.projects?.map((p: any) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            output: p.expected_output,
            icon: p.icon,
          })) || [],

        faqs:
          data.faqs?.map((f: any) => ({
            question: f.question,
            answer: f.answer,
          })) || [],

        testimonials:
          data.testimonials?.map((t: any) => ({
            id: t.id,
            name: t.name,
            role: t.role,
            company: t.company,
            text: t.content,
            rating: t.rating,
            image: t.avatar_url,
          })) || [],
      };

      setCourse(formattedCourse);
      setLoading(false);
    };

    fetchCourse();
  }, [slug]);

  useEffect(() => {
    if (!course || !course.certificateImage) return;

    const getSignedUrl = async () => {
      const { data, error } = await supabase
        .storage
        .from('Certificate_templates')
        .createSignedUrl(course.certificateImage as string, 60);

      if (!error && data) {
        setCertificateUrl(data.signedUrl);
      } else {
        console.error("Signed URL error:", error);
      }
    };

    getSignedUrl();
  }, [course]);


  if (loading) {
    return <CourseSkeleton />;
  }

  if (!course) {
    return <div className="pt-20 text-center">Course not found</div>;
  }

  const toggleModule = (id: string) => {
    setOpenModule(openModule === id ? null : id);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const nextTestimonial = () => {
    if (course.testimonials?.length === 0) return;
    setCurrentTestimonial((prev) => (prev + 1) % course.testimonials.length);
  };

  const prevTestimonial = () => {
    if (course.testimonials?.length === 0) return;
    setCurrentTestimonial((prev) => (prev - 1 + course.testimonials.length) % course.testimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  {/*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted! Our team will contact you soon.');
  };*/}

  {/*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };*/}
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("registrations").insert({
        registration_type: "course",        // course | internship | seminar | workshop | vac
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: null,                       // optional
        extra_data: {
          level: formData.batch,
          course_title: course.title,
        },
      });

    if (error) {
      console.error("SUPABASE ERROR:", error);
      setIsSubmitting(false);
      alert(error.message);
      return;
    }

    await supabase.functions.invoke("send-course-registration", {
      body: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        batch: formData.batch,
        courseTitle: course.title,
      },
    });

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Courses', href: '/courses' },
          { label: course.title },
        ]}
      />

      {/* 1. COURSE BANNER + REGISTRATION FORM */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F1F8FF] via-white to-[#D9EBFF] relative overflow-hidden">
        {/* Floating Background Shapes */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* LEFT SIDE - Course Info */}
            <div className="lg:col-span-3 animate-fade-up">
              {/*<div className="inline-block glass-panel px-4 py-2 rounded-full mb-6">
                <span className="text-[#007DFF]">Featured Course</span>
              </div>*/}

              <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                {course.title}  
              </h1>

              <p className="text-xl text-[#1A1A1A] opacity-80 mb-8 leading-relaxed">
                {course.subtitle}
              </p>

              {/* Key Info Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center glass-panel px-4 py-2 rounded-2xl">
                  <Clock className="text-[#007DFF] mr-2" size={18} />
                  <span className="text-[#065FCC] font-semibold text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center glass-panel px-4 py-2 rounded-2xl">
                  <Award className="text-[#007DFF] mr-2" size={18} />
                  <span className="text-[#065FCC] font-semibold text-sm">{course.level}</span>
                </div>
                <div className="flex items-center glass-panel px-4 py-2 rounded-2xl">
                  <Video className="text-[#007DFF] mr-2" size={18} />
                  <span className="text-[#065FCC] font-semibold text-sm">{course.mode}</span>
                </div>
                <div className="flex items-center glass-panel px-4 py-2 rounded-2xl">
                  <Globe className="text-[#007DFF] mr-2" size={18} />
                  <span className="text-[#065FCC] font-semibold text-sm">{course.language}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#registration-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 btn-glow font-semibold"
                >
                  Apply Now
                </a>

                {/*<button className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#007DFF] text-[#007DFF] rounded-2xl hover:bg-[#F1F8FF] transition-all duration-300 font-semibold">
                  <Download className="mr-2" size={20} />
                  Download Syllabus
                </button>*/}
              </div>

              {/* Rating & Students */}
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <Star className="fill-current text-yellow-400" size={20} />
                  <span className="ml-2 text-[#1A1A1A] font-semibold">{course.rating}</span>
                  <span className="ml-1 text-[#1A1A1A] opacity-60 text-sm">({course.reviews || 0} reviews)</span>
                </div>
                <div className="flex items-center text-[#1A1A1A] opacity-70">
                  <Users size={20} className="mr-2 text-[#007DFF]" />
                  {course.students || 0} enrolled
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Registration Form Card */}
            <div className="lg:col-span-2 animate-slide-left" id="registration-form">
              <div className="glass-card rounded-3xl p-8 shadow-2xl sticky top-32">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Register for {course.title}</h3>

                {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#007DFF] focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#007DFF] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#007DFF] focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Your level *
                    </label>
                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#007DFF] focus:outline-none transition-colors"
                    >
                      <option value="">Choose the level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold text-lg btn-glow disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-[#007DFF]"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin" size={20} />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Registration"
                    )}
                  </button>
                </form>

                ) : (
                  <div className="text-center py-10 animate-fade-up">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>

                    <h3 className="text-3xl font-bold text-[#1A1A1A] mb-3">
                      Congratulations 🎉
                    </h3>

                    <p className="text-lg text-[#1A1A1A] opacity-80 mb-4">
                      You have successfully registered for
                    </p>

                    <p className="text-2xl font-bold text-[#007DFF] mb-6">
                      {course.title}
                    </p>

                    <div className="bg-[#F1F8FF] rounded-2xl p-4 text-sm text-[#065FCC]">
                      Our team will contact you shortly with next steps.
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="mb-4">
                    <span className="text-[#1A1A1A] opacity-70 block mb-2">Course Fee</span>
                    <div className="flex items-baseline gap-3">
                      {course.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">₹{course.originalPrice}</div>
                      )}
                      <span className="text-4xl font-bold text-[#007DFF]">₹{course.price}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#1A1A1A] opacity-70">Starts</span>
                    <span className="text-[#065FCC] font-semibold">{course.startDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSE DESCRIPTION SECTION */}
      
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">About this Course</h2>
            
            <p className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed mb-8">
              {course.description}
            </p>

            {/* Key Outcomes Highlight Box */}
            {course.keyOutcomes?.length > 0 && (
            <div className="bg-[#F1F8FF] rounded-3xl p-8 border-2 border-[#007DFF]/20">
              <h3 className="text-2xl font-bold text-[#065FCC] mb-6 flex items-center">
                <Target className="mr-3" size={28} />
                Key Outcomes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {course.keyOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-[#007DFF] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#1A1A1A] opacity-80">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU WILL LEARN (LEARNING OUTCOMES) */}
      {course.learningOutcomes?.length > 0 && (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#007DFF]">Learning Outcomes</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                What You Will Learn
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                Master these essential skills and concepts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {course.learningOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white rounded-2xl p-6 soft-shadow hover-lift"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 bg-[#007DFF] rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <span className="text-[#1A1A1A] opacity-80 leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 4. MODULES SECTION (SYLLABUS) */}
      {course.modules?.length > 0 && (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#007DFF]">Course Content</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Course Modules
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                {course.modules.length} comprehensive modules with {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons
              </p>
            </div>

            <div className="space-y-4">
              {course.modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#007DFF] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className={`w-full px-6 py-6 flex items-center justify-between transition-colors duration-200 ${
                      openModule === module.id ? 'bg-[#F1F8FF]' : 'hover:bg-[#F1F8FF]/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-2xl flex items-center justify-center">
                        <PlayCircle className="text-white" size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-[#1A1A1A]">{module.title}</h3>
                        <div className="flex items-center mt-1 text-sm">
                          <Clock className="text-[#007DFF] mr-2" size={16} />
                          <span className="text-[#1A1A1A] opacity-70">{module.duration}</span>
                          <span className="mx-3 text-[#1A1A1A] opacity-40">•</span>
                          <span className="text-[#1A1A1A] opacity-70">{module.lessons.length} Lessons</span>
                        </div>
                      </div>
                    </div>

                    {openModule === module.id ? (
                      <ChevronUp className="text-[#007DFF]" size={24} />
                    ) : (
                      <ChevronDown className="text-[#007DFF]" size={24} />
                    )}
                  </button>

                  {openModule === module.id && (
                    <div className="px-6 py-6 bg-[#F1F8FF] border-t-2 border-[#007DFF]/20 animate-slide-right">
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, index) => (
                          <li
                            key={index}
                            className="flex items-center text-[#1A1A1A] opacity-80 hover:opacity-100 transition-opacity"
                          >
                            <PlayCircle className="text-[#007DFF] mr-3 flex-shrink-0" size={18} />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 5. REQUIREMENTS SECTION */}
      {course.requirements?.length > 0 && (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#007DFF]">Prerequisites</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Requirements
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 soft-shadow">
              <div className="space-y-4">
                {course.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-8 h-8 bg-[#007DFF] rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <Check className="text-white" size={18} />
                    </div>
                    <span className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 6. REAL-TIME PROJECTS SECTION */}
      {course.projects?.length > 0 && (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#007DFF]">Hands-On Learning</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Real-Time Projects
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                Build production-ready applications to showcase in your portfolio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {course.projects.map((project, index) => {
                const iconMap: Record<string, React.ElementType> = {
                  target: Target,
                  code: Code,
                  database: Database,
                  smartphone: Smartphone,
                  briefcase: Briefcase,
                };

                const iconKey = typeof project.icon === "string"
                  ? project.icon.toLowerCase()
                  : "";

                const Icon = iconMap[iconKey] || Target;
                return (
                  <div
                    key={project.id}
                    className="bg-white border-2 border-gray-100 rounded-3xl p-8 soft-shadow hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{project.title}</h3>
                    
                    <p className="text-[#1A1A1A] opacity-70 leading-relaxed mb-4">
                      {project.description}
                    </p>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 7. SAMPLE CERTIFICATE SECTION */}
      {course.hasCertificate && course.certificateImage && (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <GraduationCap className="w-20 h-20 text-[#007DFF] mx-auto mb-6 opacity-90" />
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Get Certified
              </h2>
              
              <p className="text-xl text-[#1A1A1A]/90 mb-12 max-w-2xl mx-auto">
                Upon successful completion, you will receive an industry-recognized certificate 
                from Nipix Technology that validates your skills and expertise.
              </p>

              {/* Certificate Mockup */}
                <div className="mt-6">
                  {certificateUrl && (
                    <img
                      src={certificateUrl}
                      alt="Sample Certificate"
                      className="rounded-lg border mt-2"
                    />
                  )}
                </div>
              
              <p className="text-white/80 mt-8">
                Add this certificate to your LinkedIn profile and resume to showcase your achievements
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 8. STUDENT TESTIMONIALS SECTION */}
      {course.testimonials.length > 0 && (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#007DFF]">Success Stories</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Student Testimonials
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                Hear from our successful students
              </p>
            </div>

            {/* Testimonial Carousel */}
            <div className="relative">
              <div className="bg-[#F1F8FF] rounded-3xl p-8 lg:p-12 border-2 border-[#007DFF]/20 soft-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={course.testimonials?.[currentTestimonial]?.image}
                    alt={course.testimonials?.[currentTestimonial]?.name}
                    className="w-20 h-20 rounded-full mr-6 object-cover border-4 border-[#007DFF]"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      {course.testimonials?.[currentTestimonial]?.name}
                    </h3>
                    <p className="text-[#007DFF] font-semibold">
                      {course.testimonials?.[currentTestimonial]?.role}
                    </p>
                    <p className="text-[#1A1A1A] opacity-60 text-sm">
                      {course.testimonials?.[currentTestimonial]?.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-6">
                  {[...Array(course.testimonials?.[currentTestimonial]?.rating || 0)].map((_, i) => (
                    <Star key={i} className="fill-current text-yellow-400" size={24} />
                  ))}
                </div>

                <p className="text-xl text-[#1A1A1A] opacity-80 leading-relaxed">
                  "{course.testimonials?.[currentTestimonial]?.text}"
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-14 h-14 glass-panel rounded-full flex items-center justify-center hover:bg-[#007DFF] hover:text-[#007DFF] transition-all shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-14 h-14 glass-panel rounded-full flex items-center justify-center hover:bg-[#007DFF] hover:text-[#007DFF] transition-all shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {course.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-[#007DFF] w-8'
                        : 'bg-gray-300 w-3 hover:bg-[#007DFF]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 9. RELATED COURSES SECTION 
      {course.relatedCourses?.length > 0 && (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#007DFF]">Continue Learning</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Related Courses
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70">
              Expand your skills with these recommended courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {course.relatedCourses.map((relatedCourse, index) => {
              const Icon = relatedCourse.icon;
              return (
                <Link
                  key={relatedCourse.id}
                  to={`/courses/${relatedCourse.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden soft-shadow hover-lift border border-gray-100 h-[540px] flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* 1. TOP IMAGE / THUMBNAIL 
                  <div className="relative h-[200px] bg-gradient-to-br from-[#D9EBFF] to-[#F1F8FF] overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* 2. CATEGORY TAGS 
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#D9EBFF] text-[#007DFF] rounded-full text-xs font-semibold">
                        Programming
                      </span>
                      <span className="px-3 py-1 bg-[#D9EBFF] text-[#007DFF] rounded-full text-xs font-semibold">
                        Intermediate
                      </span>
                    </div>
                    
                    {/* 3. COURSE TITLE 
                    <h3 className="text-xl font-bold text-[#003C78] mb-3 line-clamp-2 group-hover:text-[#007DFF] transition-colors">
                      {relatedCourse.title}
                    </h3>

                    {/* 4. COURSE SHORT DESCRIPTION 
                    <p className="text-[#1A1A1A] opacity-70 text-sm leading-relaxed line-clamp-2 mb-4">
                      {relatedCourse.description}
                    </p>

                    {/* 5. INSTRUCTOR INFO 
                    <div className="flex items-center mb-4">
                      <Users size={16} className="text-[#007DFF] mr-2" />
                      <span className="text-sm text-[#1A1A1A] opacity-70">Emily Chen</span>
                    </div>

                    {/* 6. RATING & DURATION ROW 
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="fill-current text-yellow-400" size={16} />
                        <span className="ml-1 text-sm font-semibold text-[#1A1A1A]">4.7</span>
                        <span className="ml-1 text-sm text-[#1A1A1A] opacity-50">(12,450)</span>
                      </div>
                      <div className="flex items-center text-[#007DFF]">
                        <Clock size={16} className="mr-1" />
                        <span className="text-sm font-semibold">{relatedCourse.duration}</span>
                      </div>
                    </div>

                    {/* Spacer to push bottom content down 
                    <div className="flex-grow"></div>

                    {/* 7. DIVIDER 
                    <div className="border-t border-gray-200 mb-4"></div>

                    {/* 8. BOTTOM TAGS ROW 
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs text-[#007DFF] hover:underline cursor-pointer">
                        JavaScript
                      </span>
                      <span className="text-xs text-[#1A1A1A] opacity-30">•</span>
                      <span className="text-xs text-[#007DFF] hover:underline cursor-pointer">
                        Programming
                      </span>
                      <span className="text-xs text-[#1A1A1A] opacity-30">•</span>
                      <span className="text-xs text-[#007DFF] hover:underline cursor-pointer">
                        Intermediate
                      </span>
                    </div>

                    {/* 9 & 10. PRICE + CTA ROW 
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-[#007DFF]">{relatedCourse.price}</div>
                      <span className="px-5 py-2 bg-[#007DFF] text-white rounded-xl hover:bg-[#066EE2] transition-colors font-semibold text-sm">
                        Enroll Now
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      )}*/}

      {/* 10. FAQ SECTION */}
      {course.faqs?.length > 0 && (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-[#007DFF]">Have Questions?</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                Find answers to common questions about this course
              </p>
            </div>

            <div className="space-y-4">
              {course.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#007DFF] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full px-6 py-6 flex items-center justify-between text-left transition-colors duration-200 ${
                      openFaq === index ? 'bg-[#F1F8FF]' : 'hover:bg-[#F1F8FF]/50'
                    }`}
                  >
                    <h3 className="text-lg font-bold text-[#1A1A1A] pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="text-[#007DFF] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#007DFF] flex-shrink-0" size={24} />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-6 py-6 bg-[#F1F8FF] border-t-2 border-[#007DFF]/20 animate-slide-right">
                      <p className="text-[#1A1A1A] opacity-80 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Support CTA */}
            <div className="mt-12 text-center glass-panel rounded-3xl p-8">
              <p className="text-lg text-[#1A1A1A] opacity-80 mb-4">
                Still have questions? Our team is here to help!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 btn-glow font-semibold"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Final CTA Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of successful students and transform your career with expert-led training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#registration-form"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover-lift"
              >
                Enroll Now
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 glass-panel text-[#007DFF] rounded-2xl hover:shadow-xl transition-all duration-300 text-lg font-semibold border-white/40 hover-lift-shadow"
              >
                Talk to Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
