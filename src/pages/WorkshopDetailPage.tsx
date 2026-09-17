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
    GraduationCap,
    Presentation,
    Briefcase,
    CheckCircle,
    Video,
    Code,
    Loader2
  } from 'lucide-react';
  import { ImageWithFallback } from '../components/figma/ImageWithFallback';
  import { Breadcrumb } from '../components/ComponentLibrary';
  import { supabase } from '../lib/supabase';
  import { CourseSkeleton } from '../components/CourseSkeleton';



  export function WorkshopDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [openAgendaItem, setOpenAgendaItem] = useState<number | null>(0);
    const [openFaqItem, setOpenFaqItem] = useState<number | null>(null);
    const [workshopData, setWorkshopData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      session: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
      const fetchWorkshop = async () => {
        if (!slug) return;

        const { data, error } = await supabase
          .from("workshops")
          .select(`
            *,
            workshop_learning_outcomes ( content, sort_order ),
            workshop_trainers ( name, designation, organization, bio, image_url ),
            workshop_agenda_days (
              day,
              time,
              title,
              sort_order,
              workshop_agenda_sessions (
                time,
                topic,
                description,
                sort_order
              )
            ),
            workshop_past_events (
              id,
              title,
              date,
              participants,
              image_url
            ),
            workshop_testimonials (
              name,
              role,
              rating,
              feedback,
              image_url
            ),
            workshop_faqs (
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

        setWorkshopData(data);
        setLoading(false);
      };

      fetchWorkshop();
    }, [slug]);


    if (loading) {
      return <CourseSkeleton />;
    }

    if (!workshopData) {
      return (
        <div className="pt-20 text-center">
          <h2 className="text-2xl font-bold">Workshop not found</h2>
        </div>
      );
    }


    const relatedPrograms = [
      {
        icon: Presentation,
        title: 'Seminars',
        description: 'Expert-led sessions on industry trends and technologies',
        link: '/seminars',
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
        registration_type: 'workshop',
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: null,
        status: 'pending',
        extra_data: {
          organization: formData.organization,
          session: formData.session,
          workshop_title: workshopData.title,
        },
      });

      if (error) {
        console.error(error);
        setIsSubmitting(false);
        return;
      }

      // 🔵 Trigger Email Function
      await supabase.functions.invoke("send-workshop-registration", {
        body: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          session: formData.session,
          workshopTitle: workshopData.title,
        },
      });

      setIsSubmitting(false);

      // clear form and redirect to thank you
      setFormData({ fullName: '', email: '', phone: '', organization: '', session: '' });
      window.location.href = '/thank-you';
      setIsSubmitted(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const learningOutcomes =
      workshopData.workshop_learning_outcomes
        ?.sort((a:any,b:any)=>a.sort_order-b.sort_order)
        .map((o:any)=>o.content) ?? [];
    
    const agenda =
      workshopData.workshop_agenda_days
        ?.sort((a:any,b:any)=>a.sort_order-b.sort_order) ?? [];
    
    const faqs =
      workshopData.workshop_faqs
        ?.sort((a:any,b:any)=>a.sort_order-b.sort_order) ?? [];

    return (
      <div className="pt-20 bg-white">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Workshops', href: '/workshops' },
            { label: workshopData.title },
          ]}
        />
        {/* 1. WORKSHOP BANNER */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] via-white to-[#D9EBFF] overflow-hidden">
          {/* Floating Background Shapes */}
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start ">
              {/* Left: Workshop Info */}
              <div className="animate-fade-up px-6 py-8 lg:p-0">
                

                <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                  {workshopData.title}
                </h1>

                <p className="text-xl text-[#1A1A1A] opacity-80 mb-8 leading-relaxed">
                  {workshopData.subtitle}
                </p>

                {/* Info Badges */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                    <Calendar className="text-[#007DFF] mr-3" size={20} />
                    <div>
                      <p className="text-sm text-[#1A1A1A] opacity-60">Date</p>
                      <p className="font-semibold text-[#1A1A1A]">{workshopData.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                    <Clock className="text-[#007DFF] mr-3" size={20} />
                    <div>
                      <p className="text-sm text-[#1A1A1A] opacity-60">Duration</p>
                      <p className="font-semibold text-[#1A1A1A]">{workshopData.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                    <Video className="text-[#007DFF] mr-3" size={20} />
                    <div>
                      <p className="text-sm text-[#1A1A1A] opacity-60">Mode</p>
                      <p className="font-semibold text-[#1A1A1A]">{workshopData.mode}</p>
                    </div>
                  </div>

                  <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                    <MapPin className="text-[#007DFF] mr-3" size={20} />
                    <div>
                      <p className="text-sm text-[#1A1A1A] opacity-60">Location</p>
                      <p className="font-semibold text-[#1A1A1A]">{workshopData.location}</p>
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold text-lg btn-glow hover-lift">
                    Register Now
                  </button>
                </div>
              </div>

              {/* Right: 2. REGISTRATION FORM (Floating Card - Desktop) */}
              <div className="lg:block hidden">
                <div className="bg-white rounded-3xl p-8 soft-shadow animate-fade-up border-2 border-[#007DFF]">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                      Register for {workshopData.title} Workshop
                    </h3>
                    <p className="text-[#1A1A1A] opacity-70">
                      Book your slot today
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
                        Select Workshop Session *
                      </label>
                      <select
                        name="session"
                        value={formData.session}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Choose session</option>
                        <option value="one-day">One day</option>
                        <option value="two-days">Two days</option>
                        <option value="five-days">Five days</option>
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
                        'Book now'
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
                  Register for Workshop
                </h3>
                <p className="text-[#1A1A1A] opacity-70">
                  Book your slot today
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
                    Select Workshop Session *
                  </label>
                  <select
                    name="session"
                    value={formData.session}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Choose session</option>
                    <option value="one-day">One day</option>
                    <option value="two-days">Two days</option>
                    <option value="five-days">Five days</option>
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
                    'Book now'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 3. WORKSHOP DESCRIPTION */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="animate-fade-up mb-12">
                <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                  About This Workshop
                </h2>
                <p className="text-xl text-[#1A1A1A] opacity-80 leading-relaxed mb-8">
                  {workshopData.description}
                </p>

                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  Key Learning Outcomes
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningOutcomes.map((outcome: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 animate-fade-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CheckCircle className="text-[#007DFF] mt-1 flex-shrink-0" size={20} />
                      <p className="text-[#1A1A1A] opacity-80">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORKSHOP AGENDA / SCHEDULE */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                  <span className="text-[#007DFF] font-semibold">Schedule</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                  Workshop Agenda
                </h2>
                <p className="text-xl text-[#1A1A1A] opacity-70">
                  3-day intensive hands-on training program
                </p>
              </div>

              <div className="space-y-6">
                {agenda.map((day: any, dayIndex: number) => (
                  <div
                    key={dayIndex}
                    className={`bg-white rounded-2xl soft-shadow border-2 transition-all duration-300 animate-fade-up ${
                      openAgendaItem === dayIndex
                        ? 'border-[#007DFF] bg-[#F1F8FF]/30'
                        : 'border-gray-100 hover:border-[#007DFF]/50'
                    }`}
                    style={{ animationDelay: `${dayIndex * 0.1}s` }}
                  >
                    <button
                      onClick={() => setOpenAgendaItem(openAgendaItem === dayIndex ? null : dayIndex)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="px-4 py-1 bg-[#007DFF] text-white rounded-full text-sm font-semibold">
                            {day.day}
                          </span>
                          <div className="flex items-center text-[#1A1A1A] opacity-70">
                            <Clock size={18} className="mr-2 text-[#007DFF]" />
                            {day.time}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1A1A]">
                          {day.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`text-[#007DFF] transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openAgendaItem === dayIndex ? 'rotate-180' : ''
                        }`}
                        size={24}
                      />
                    </button>

                    {openAgendaItem === dayIndex && (
                      <div className="px-6 pb-5 animate-fade-up">
                        <div className="space-y-4 pt-4 border-t border-gray-200">
                          {day.workshop_agenda_sessions
                            ?.sort((a:any,b:any)=>a.sort_order-b.sort_order)
                            .map((session:any, sessionIndex:number) => (
                            <div key={sessionIndex} className="flex space-x-4">
                              <div className="w-32 flex-shrink-0">
                                <span className="text-sm font-semibold text-[#007DFF]">
                                  {session.time}
                                </span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-[#1A1A1A] mb-1">
                                  {session.topic}
                                </h4>
                                <p className="text-[#1A1A1A] opacity-70 text-sm">
                                  {session.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TRAINER / MENTOR DETAILS */}
        {(workshopData.workshop_trainers ?? []).length > 0 && (
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Meet the Trainers</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Expert Trainers
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
                Learn from industry professionals with extensive real-world experience
              </p>
            </div>

            <div className={`gap-8 max-w-5xl mx-auto ${
               workshopData.workshop_trainers.length === 1
                 ? 'flex justify-center'
                 : 'grid md:grid-cols-2 justify-items-center'
                     }`}>
              {(workshopData.workshop_trainers ?? []).map((trainer: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 soft-shadow hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={trainer.image_url}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">
                        {trainer.name}
                      </h3>
                      <p className="text-[#007DFF] font-semibold mb-1">
                        {trainer.designation}
                      </p>
                      <p className="text-[#1A1A1A] opacity-70 text-sm">
                        {trainer.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#1A1A1A] opacity-80 leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* 6. SUCCESSFUL PAST WORKSHOPS 
        {(workshopData.workshop_past_events ?? []).length > 0 && (
        <section className="py-20 lg:py-24 bg-gradient-to-br from-[#EAF3FF] to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Success Stories</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Successful Past Workshops
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
                Join thousands who have upskilled through our workshops
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
              {(workshopData.workshop_past_events ?? []).map((pastWorkshop: any, index: number) => (
                <div
                  key={pastWorkshop.id}
                  className="bg-white rounded-3xl overflow-hidden soft-shadow hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">  
                    <ImageWithFallback
                      src={pastWorkshop.image_url}
                      alt={pastWorkshop.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                      {pastWorkshop.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-[#1A1A1A] opacity-70 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-[#007DFF]" />
                        {pastWorkshop.date}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2 text-[#007DFF]" />
                        {pastWorkshop.participants}
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
        )}*/}

        {/* 7. SAMPLE CERTIFICATE SECTION */}
        <section className="py-20 lg:py-24 bg-[#007DFF]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-up">
                <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                  <span className="text-[#007DFF] font-semibold">Certification</span>
                </div>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                  Certificate of Completion
                </h2>
                <p className="text-xl text-[#1A1A1A] opacity-70 mb-12">
                  Participants will receive a certificate after successful completion
                </p>

                {/* Certificate Mockup */}
                <div className="mt-6">
                    <img
                      src="https://hlpeopzlejlbvsvkkaiq.supabase.co/storage/v1/object/sign/Certificate_templates/workshop_sample.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzZiM2U0ZC01MmJlLTRkNmEtYmFjZi0xMDYxNWQ5ZTBjNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDZXJ0aWZpY2F0ZV90ZW1wbGF0ZXMvd29ya3Nob3Bfc2FtcGxlLmpwZWciLCJpYXQiOjE3NzEyNTAzMTIsImV4cCI6NDkyNDg1MDMxMn0.D3LI0emNCiYSQpKddiTKeAqwpJo9dOnZC2rQoQeAckk"
                      alt="Sample Certificate"
                      className="rounded-lg border mt-2"
                    />
                </div>
                <p className="text-white/80 mt-8">
                Add this certificate to your LinkedIn profile and resume to showcase your achievements
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PARTICIPANT TESTIMONIALS */}
        {(workshopData.workshop_testimonials ?? []).length > 0 && (
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
                Hear from attendees of our previous workshops
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {(workshopData.workshop_testimonials ?? []).map((testimonial: any, index: number) => (
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
        {(faqs ?? []).length > 0 && (
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
                {(faqs ?? []).map((faq: any, index: number) => (
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
        )}

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
                Ready to Transform Your Skills?
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Don't miss this opportunity to learn from experts. Register now!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg">
                  Register Now
                </button>
                <Link
                  to="/workshops"
                  className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
                >
                  View All Workshops
                </Link>
              </div>
            </div>
          </div>
        </section>*/}
      </div>
    );
  }
