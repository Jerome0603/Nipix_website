import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Download,
  ChevronDown,
  Star,
  Award,
  Target,
  TrendingUp,
  Code,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Video,
  Loader2
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/ComponentLibrary';
import { supabase } from '../lib/supabase';
import { CourseSkeleton } from '../components/CourseSkeleton';


export function SeminarDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [openAgendaItem, setOpenAgendaItem] = useState<number | null>(0);
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(null);
  const [seminarData, setSeminarData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    session: '',
  });

  useEffect(() => {
    const fetchSeminar = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("seminars")
        .select(`
          *,
          seminar_key_takeaways (
            content,
            sort_order
          ),
          seminar_speakers (
            name,
            designation,
            organization,
            bio,
            image_url
          ),
          seminar_agenda (
            time,
            title,
            description,
            sort_order
          ),
          seminar_testimonials (
            name,
            role,
            feedback,
            rating,
            image_url
          ),
          seminar_past_events (
            id,
            title,
            date,
            participants,
            image_url
          ),
          seminar_faqs (
            question,
            answer,
            sort_order
          )
        `)
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setSeminarData(data);
      setLoading(false);
    };

    fetchSeminar();
  }, [slug]);

  if (loading) {
    return <CourseSkeleton />;
  }

  if (!seminarData) {
    return (
      <div className="pt-20 text-center text-xl font-semibold">
        Seminar not found
      </div>
    );
  }

  const speakers =
    seminarData.seminar_speakers ?? [];

  const agenda =
    seminarData.seminar_agenda
      ?.sort((a: any, b: any) => a.sort_order - b.sort_order) ?? [];

  const testimonials =
    seminarData.seminar_testimonials ?? [];

  const pastSeminars =
    seminarData.seminar_past_events ?? [];

  const faqs =
    seminarData.seminar_faqs
      ?.sort((a: any, b: any) => a.sort_order - b.sort_order) ?? [];

  const keyTakeaways =
    seminarData.seminar_key_takeaways
      ?.sort((a: any, b: any) => a.sort_order - b.sort_order)
      .map((t: any) => t.content) ?? [];

  const relatedPrograms = [
    {
      icon: Code,
      title: 'Workshops',
      description: 'Hands-on technical workshops for practical skill development',
      link: '/programs',
      color: '#007DFF',
    },
    {
      icon: GraduationCap,
      title: 'Value Added Courses',
      description: 'Short-term intensive courses to enhance your skillset',
      link: '/vac',
      color: '#065FCC',
    },
    {
      icon: Briefcase,
      title: 'Internships',
      description: 'Real-world experience with industry projects',
      link: '/internships',
      color: '#007DFF',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from('registrations').insert({
      registration_type: 'seminar',
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: null,
      status: 'pending',
      extra_data: {
        organization: formData.organization,
        session: formData.session,
        seminar_title: seminarData.title,
      },
    });

    if (error) {
      setIsSubmitting(false);
      alert(error.message);
      return;
    }

    // 🔥 Call resend function
    await supabase.functions.invoke("send-seminar-registration", {
      body: {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        session: formData.session,
        seminarTitle: seminarData.title,
        seminarDate: seminarData.date,
      },
    });

    setIsSubmitting(false);

    // Redirect to thank-you page on success
    setFormData({ fullName: '', email: '', phone: '', organization: '', session: '' });
    window.location.href = '/thank-you';  
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb*/}
      <Breadcrumb
        items={[
          { label: 'Seminars', href: '/seminars' },
          { label: seminarData.title },
        ]}
      />
      {/* 1. SEMINAR BANNER */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-br from-[#F1F8FF] via-white to-[#D9EBFF] overflow-hidden">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Seminar Info */}
            <div className="animate-fade-up">

              <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                {seminarData.title}
              </h1>

              <p className="text-xl text-[#1A1A1A] opacity-80 mb-8 leading-relaxed">
                {seminarData.description}
                {seminarData.subtitle}
              </p>

              {/* Info Badges */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <Calendar className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Date</p>
                    <p className="font-semibold text-[#1A1A1A]">{seminarData.date}</p>
                  </div>
                </div>

                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <Clock className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Time</p>
                    <p className="font-semibold text-[#1A1A1A]">{seminarData.time}</p>
                  </div>
                </div>

                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <Video className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Mode</p>
                    <p className="font-semibold text-[#1A1A1A]">{seminarData.mode}</p>
                  </div>
                </div>

                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <MapPin className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Platform</p>
                    <p className="font-semibold text-[#1A1A1A]">{seminarData.location}</p>
                  </div>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold text-lg btn-glow hover-lift">
                  Register Now
                </button>

                {/*<button className="px-8 py-4 border-2 border-[#007DFF] text-[#007DFF] rounded-2xl hover:bg-[#007DFF] hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                  <Download className="mr-2" size={20} />
                  Download Brochure
                </button>*/}
              </div>
            </div>

            {/* Right: 2. REGISTRATION FORM (Floating Card - Desktop) */}
            <div className="lg:block hidden">
              <div className="bg-white rounded-3xl p-8 soft-shadow animate-fade-up border-2 border-[#007DFF]/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    Register for {seminarData.title} Seminar
                  </h3>
                  <p className="text-[#1A1A1A] opacity-70">
                    Fill the form to secure your spot
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
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
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
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
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      College / Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your organization name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Select Session *
                    </label>
                    <select
                      name="session"
                      value={formData.session}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Choose session</option>
                      <option value="morning">Morning Session (10 AM - 1 PM)</option>
                      <option value="afternoon">Afternoon Session (2 PM - 5 PM)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold btn-glow disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-[#007DFF]"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin" size={20} />
                        Booking now...
                      </span>
                    ) : (
                      `Book ${seminarData.title} seminar`
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGISTRATION FORM (Mobile - Stacked Below Banner) */}
      <section className="lg:hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 soft-shadow border-2 border-[#007DFF]/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Register for {seminarData.title} Seminar
              </h3>
              <p className="text-[#1A1A1A] opacity-70">
                Fill the form to secure your spot
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                  required
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
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                  required
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
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  College / Company
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Your organization name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Select Session *
                </label>
                <select
                  name="session"
                  value={formData.session}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Choose session</option>
                  <option value="morning">Morning Session (10 AM - 1 PM)</option>
                  <option value="afternoon">Afternoon Session (2 PM - 5 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold btn-glow disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-[#007DFF]"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    Submitting...
                  </span>
                ) : (
                  `Book ${seminarData.title} seminar`
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. SEMINAR DESCRIPTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-up mb-12">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                About This Seminar
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-80 leading-relaxed mb-8">
                {seminarData.long_description}
              </p>

              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Key Takeaways
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {keyTakeaways.map((takeaway: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="text-[#007DFF] mt-1 flex-shrink-0" size={20} />
                    <p className="text-[#1A1A1A] opacity-80">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPEAKER DETAILS SECTION */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Meet the Experts</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Our Speakers
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Learn from industry leaders with years of practical experience
            </p>
          </div>

          <div className={`gap-8 max-w-5xl mx-auto ${
              speakers.length === 1
                ? 'flex justify-center'
                 : 'grid md:grid-cols-2 justify-items-center'
               }`}>
            {speakers.map((speaker: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 soft-shadow hover-lift animate-fade-up "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={speaker.image_url}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-[#007DFF] font-semibold mb-1">
                      {speaker.designation}
                    </p>
                    <p className="text-[#1A1A1A] opacity-70 text-sm">
                      {speaker.organization}
                    </p>
                  </div>
                </div>
                <p className="text-[#1A1A1A] opacity-80 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEMINAR AGENDA / SCHEDULE */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Schedule</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Seminar Agenda
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                What to expect during the session
              </p>
            </div>

            <div className="space-y-4">
              {agenda.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl soft-shadow border-2 transition-all duration-300 animate-fade-up ${
                    openAgendaItem === index
                      ? 'border-[#007DFF] bg-[#F1F8FF]/30'
                      : 'border-gray-100 hover:border-[#007DFF]/50'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => setOpenAgendaItem(openAgendaItem === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center text-[#007DFF] font-semibold">
                          <Clock size={18} className="mr-2" />
                          {item.time}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A]">
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`text-[#007DFF] transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openAgendaItem === index ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>

                  {openAgendaItem === index && (
                    <div className="px-6 pb-5 animate-fade-up">
                      <p className="text-[#1A1A1A] opacity-80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESSFUL PAST SEMINARS */}
      {pastSeminars.length > 0 && (
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#EAF3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Successful Past Seminars
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Join the thousands who have benefited from our expert sessions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pastSeminars.map((pastSeminar: any, index: number) => (
              <div
                key={pastSeminar.id}
                className="bg-white rounded-3xl overflow-hidden soft-shadow hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={pastSeminar.image_url}
                    alt={pastSeminar.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    {pastSeminar.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-[#1A1A1A] opacity-70 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-[#007DFF]" />
                      {pastSeminar.date}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-[#007DFF]" />
                      {pastSeminar.participants}
                    </div>
                  </div>
                  <div className="glass-panel px-4 py-2 rounded-full text-center">
                    <span className="text-[#007DFF] font-semibold text-sm">
                      Successfully Completed
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 7. SAMPLE CERTIFICATE SECTION */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Certification</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                Certificate of Participation
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70 mb-12">
                All participants will receive a certificate upon completion
              </p>

              {/* Certificate Mockup */}
                <div className="mt-6">
                    <img
                      src="https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/sign/Certificate_templates/seminar_sample.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzZiM2U0ZC01MmJlLTRkNmEtYmFjZi0xMDYxNWQ5ZTBjNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDZXJ0aWZpY2F0ZV90ZW1wbGF0ZXMvc2VtaW5hcl9zYW1wbGUuanBlZyIsImlhdCI6MTc3MTI1MDczOCwiZXhwIjo0OTI0ODUwNzM4fQ.tpuLZRpMuvLg2JLWTO-j9hndCRGDLOUG3Al5GRwA9K8"
                      alt="Sample Certificate"
                      className="rounded-lg border mt-2"
                    />
                </div>
                <p className="text-[#1A1A1A]/80 mt-8">
                Add this certificate to your LinkedIn profile and resume to showcase your achievements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PARTICIPANT TESTIMONIALS */}
      {testimonials.length > 0 && (
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#EAF3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Reviews</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              What Participants Say
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Hear from attendees of our previous seminars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 soft-shadow hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image_url}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                    <p className="text-sm text-[#1A1A1A] opacity-70">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#007DFF] fill-current" size={20} />
                  ))}
                </div>

                <p className="text-[#1A1A1A] opacity-80 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 9. FAQ SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Help Center</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                Find answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq: any, index: number) => (
                <div
                  key={index}
                  className={`rounded-2xl border-2 transition-all duration-300 animate-fade-up ${
                    openFaqItem === index
                      ? 'border-[#007DFF] bg-[#EAF3FF]'
                      : 'border-[#D9DEE5] bg-white hover:border-[#007DFF]/50'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => setOpenFaqItem(openFaqItem === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-bold text-[#1A1A1A] pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`text-[#007DFF] transition-transform duration-300 flex-shrink-0 ${
                        openFaqItem === index ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>

                  {openFaqItem === index && (
                    <div className="px-6 pb-5 animate-fade-up">
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

      {/* 10. RELATED PROGRAMS SECTION */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Explore More</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Related Programs
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Discover other learning opportunities at Nipix
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Link
                  key={index}
                  to={program.link}
                  className="bg-white rounded-3xl p-8 text-center soft-shadow hover-lift animate-fade-up hover:border-2 hover:border-[#007DFF] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: `linear-gradient(135deg, ${program.color}, #065FCC)` }}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                    {program.title}
                  </h3>

                  <p className="text-[#1A1A1A] opacity-70 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="inline-flex items-center text-[#007DFF] font-semibold">
                    <span>Explore</span>
                    <ChevronDown className="ml-2 -rotate-90" size={20} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA 
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Join the Seminar?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Don't miss this opportunity to learn from industry experts. Register now!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg">
                Register Now
              </button>
              <Link
                to="/seminars"
                className="inline-flex items-center justify-center px-10 py-5 glass-panel text-[#007DFF] rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
              >
                View All Seminars
              </Link>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
