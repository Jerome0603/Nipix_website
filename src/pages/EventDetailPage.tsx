import React, { useState } from 'react';
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
  Trophy,
  Medal,
  Target,
  Code,
  Presentation,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Video,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function EventDetailPage() {
  const { id } = useParams();
  const [openScheduleItem, setOpenScheduleItem] = useState<number | null>(0);
  const [openProblemStatement, setOpenProblemStatement] = useState<number | null>(null);
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    teamName: '',
  });

  // Sample event data
  const event = {
    id: 1,
    title: 'National Hackathon 2025',
    subtitle: 'Build innovative solutions in 48 hours and compete for amazing prizes',
    date: 'February 15-17, 2025',
    time: '9:00 AM - 6:00 PM IST',
    mode: 'Hybrid',
    location: 'Tech Hub, Bangalore + Online',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200',
    description: 'Join India\'s biggest student hackathon where innovation meets opportunity. Spend 48 hours building transformative solutions to real-world problems. Network with industry leaders, collaborate with talented developers, and compete for prizes worth ₹10 lakhs. Whether you\'re a beginner or an expert, this hackathon offers the perfect platform to showcase your skills and turn your ideas into reality.',
    highlights: [
      '48-hour intensive coding marathon',
      '₹10 Lakhs total prize money',
      'Mentorship from industry experts',
      'Networking with 500+ participants',
      'Free food, accommodation, and swag',
      'Certificate and participation perks',
    ],
  };

  const prizes = [
    {
      position: '1st Prize',
      amount: '₹5,00,000',
      icon: Trophy,
      color: '#FFD700',
      description: 'Cash prize + Internship opportunities',
    },
    {
      position: '2nd Prize',
      amount: '₹3,00,000',
      icon: Medal,
      color: '#C0C0C0',
      description: 'Cash prize + Swag kit',
    },
    {
      position: '3rd Prize',
      amount: '₹2,00,000',
      icon: Award,
      color: '#CD7F32',
      description: 'Cash prize + Goodies',
    },
  ];

  const problemStatements = [
    {
      id: 1,
      title: 'Healthcare Accessibility',
      description: 'Build a solution to improve healthcare access in rural areas using technology. Focus on telemedicine, health records management, or AI-powered diagnostics.',
      difficulty: 'Medium',
      category: 'Healthcare',
    },
    {
      id: 2,
      title: 'Education for All',
      description: 'Create an innovative platform to make quality education accessible to underprivileged students. Consider gamification, AR/VR, or personalized learning.',
      difficulty: 'Easy',
      category: 'Education',
    },
    {
      id: 3,
      title: 'Sustainable Living',
      description: 'Develop a tech solution to promote sustainable practices and reduce carbon footprint. Think smart homes, waste management, or renewable energy.',
      difficulty: 'Hard',
      category: 'Environment',
    },
    {
      id: 4,
      title: 'Financial Inclusion',
      description: 'Design a fintech solution to bring banking and financial services to the unbanked population. Consider micro-loans, digital payments, or financial literacy.',
      difficulty: 'Medium',
      category: 'Fintech',
    },
  ];

  const schedule = [
    {
      day: 'Day 1 - Feb 15',
      sessions: [
        { time: '9:00 AM', activity: 'Registration & Check-in', description: 'Collect your swag kits and meet fellow participants' },
        { time: '10:00 AM', activity: 'Opening Ceremony', description: 'Welcome address and event overview' },
        { time: '11:00 AM', activity: 'Problem Statements Reveal', description: 'Choose your track and form teams' },
        { time: '12:00 PM', activity: 'Hacking Begins!', description: 'Start building your solution' },
        { time: '1:00 PM', activity: 'Lunch Break', description: 'Networking and team discussions' },
        { time: '6:00 PM', activity: 'Mentor Session 1', description: 'Get guidance from industry experts' },
        { time: '8:00 PM', activity: 'Dinner & Night Coding', description: 'Continue development' },
      ],
    },
    {
      day: 'Day 2 - Feb 16',
      sessions: [
        { time: '8:00 AM', activity: 'Breakfast', description: 'Fuel up for the day' },
        { time: '10:00 AM', activity: 'Mid-Point Check-in', description: 'Update judges on progress' },
        { time: '12:00 PM', activity: 'Mentor Session 2', description: 'Technical assistance and feedback' },
        { time: '1:00 PM', activity: 'Lunch Break', description: 'Relax and recharge' },
        { time: '6:00 PM', activity: 'Final Sprint', description: 'Last hours before submission' },
        { time: '11:00 PM', activity: 'Submissions Close', description: 'Deploy and submit your project' },
      ],
    },
    {
      day: 'Day 3 - Feb 17',
      sessions: [
        { time: '9:00 AM', activity: 'Project Presentations', description: 'Present to judges (Top 10 teams)' },
        { time: '12:00 PM', activity: 'Lunch & Judging', description: 'Final evaluation and deliberation' },
        { time: '3:00 PM', activity: 'Award Ceremony', description: 'Announcement of winners' },
        { time: '5:00 PM', activity: 'Networking & Closing', description: 'Connect with sponsors and mentors' },
      ],
    },
  ];

  const pastEventHighlights = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      title: 'Opening Ceremony 2024',
      description: '500+ participants gathered',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600',
      title: 'Coding Marathon',
      description: '48 hours of innovation',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c4c4?w=600',
      title: 'Team Collaboration',
      description: 'Building together',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600',
      title: 'Winner Announcement',
      description: 'Celebrating success',
    },
  ];

  const faqs = [
    {
      question: 'Who can participate in the hackathon?',
      answer: 'The hackathon is open to students, professionals, and tech enthusiasts of all skill levels. You can participate individually or in teams of up to 4 members.',
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, the hackathon is completely free to participate. We provide free food, accommodation (for offline participants), and swag kits.',
    },
    {
      question: 'Do I need to be present physically?',
      answer: 'You can participate either online or offline (Bangalore). Both modes will have equal opportunities to win prizes and interact with mentors.',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, chargers, any hardware you might need, and a valid ID proof. We will provide power outlets, WiFi, and workspace.',
    },
    {
      question: 'Can I work on a pre-existing project?',
      answer: 'No, all projects must be started from scratch during the hackathon. However, you can use open-source libraries and frameworks.',
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! We have industry experts available throughout the event to help with technical challenges, ideation, and feedback.',
    },
    {
      question: 'What technologies can we use?',
      answer: 'You\'re free to use any programming language, framework, or technology stack. Choose whatever works best for your solution.',
    },
    {
      question: 'How will projects be judged?',
      answer: 'Projects will be evaluated based on innovation, technical complexity, design, feasibility, and presentation. Top 10 teams will present to the judging panel.',
    },
  ];

  const relatedPrograms = [
    {
      icon: Presentation,
      title: 'Workshops',
      description: 'Hands-on technical training sessions',
      link: '/workshops',
      color: '#007DFF',
    },
    {
      icon: GraduationCap,
      title: 'Seminars',
      description: 'Expert-led knowledge sharing sessions',
      link: '/seminars',
      color: '#065FCC',
    },
    {
      icon: Briefcase,
      title: 'Internships',
      description: 'Real-world industry experience',
      link: '/internships',
      color: '#007DFF',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 bg-white">
      {/* 1. EVENT BANNER + REGISTRATION CTA */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] via-white to-[#D9EBFF] overflow-hidden">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#065FCC] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Event Info */}
            <div className="animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Upcoming Event</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                {event.title}
              </h1>

              <p className="text-xl text-[#1A1A1A] opacity-80 mb-8 leading-relaxed">
                {event.subtitle}
              </p>

              {/* Info Badges */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <Calendar className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Date</p>
                    <p className="font-semibold text-[#1A1A1A]">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <Clock className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Time</p>
                    <p className="font-semibold text-[#1A1A1A]">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <Video className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Mode</p>
                    <p className="font-semibold text-[#1A1A1A]">{event.mode}</p>
                  </div>
                </div>

                <div className="flex items-center glass-panel px-4 py-3 rounded-2xl">
                  <MapPin className="text-[#007DFF] mr-3" size={20} />
                  <div>
                    <p className="text-sm text-[#1A1A1A] opacity-60">Location</p>
                    <p className="font-semibold text-[#1A1A1A]">{event.location}</p>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold text-lg btn-glow hover-lift">
                  Register Now
                </button>
              </div>
            </div>

            {/* Right: 2. REGISTRATION FORM (Floating Card - Desktop) */}
            <div className="lg:block hidden">
              <div className="bg-white rounded-3xl p-8 soft-shadow animate-fade-up border-2 border-[#007DFF]/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    Register for Event
                  </h3>
                  <p className="text-[#1A1A1A] opacity-70">
                    Secure your spot today!
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
                      placeholder="Your organization"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Team Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      placeholder="Your team name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold btn-glow"
                  >
                    Submit Registration
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
                Register for Event
              </h3>
              <p className="text-[#1A1A1A] opacity-70">
                Secure your spot today!
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
                  placeholder="Your organization"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Team Name (Optional)
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  placeholder="Your team name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#007DFF] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#007DFF] text-white rounded-2xl hover:bg-[#066EE2] transition-all duration-300 font-semibold btn-glow"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. EVENT DESCRIPTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-up mb-12">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                About This Event
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-80 leading-relaxed mb-8">
                {event.description}
              </p>

              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Key Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="text-[#007DFF] mt-1 flex-shrink-0" size={20} />
                    <p className="text-[#1A1A1A] opacity-80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRIZES & REWARDS SECTION */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Win Big</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Prizes & Rewards
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Total prize pool of ₹10,00,000 for the winners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 text-center soft-shadow hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${prize.color}20` }}
                  >
                    <Icon style={{ color: prize.color }} size={40} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    {prize.position}
                  </h3>

                  <p className="text-4xl font-bold text-[#007DFF] mb-4">
                    {prize.amount}
                  </p>

                  <p className="text-[#1A1A1A] opacity-70">
                    {prize.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROBLEM STATEMENTS SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Challenges</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Problem Statements
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                Choose one track and build your solution
              </p>
            </div>

            <div className="space-y-4">
              {problemStatements.map((problem, index) => (
                <div
                  key={problem.id}
                  className={`bg-white rounded-2xl soft-shadow border-2 transition-all duration-300 animate-fade-up ${
                    openProblemStatement === index
                      ? 'border-[#007DFF] bg-[#F1F8FF]/30'
                      : 'border-gray-100 hover:border-[#007DFF]/50'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => setOpenProblemStatement(openProblemStatement === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 bg-[#007DFF] text-white rounded-full text-xs font-semibold">
                          {problem.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A]">
                        {problem.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`text-[#007DFF] transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openProblemStatement === index ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>

                  {openProblemStatement === index && (
                    <div className="px-6 pb-5 animate-fade-up">
                      <p className="text-[#1A1A1A] opacity-80 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EVENT SCHEDULE */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F1F8FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Timeline</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Event Schedule
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70">
                48-hour journey from idea to implementation
              </p>
            </div>

            <div className="space-y-6">
              {schedule.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`bg-white rounded-2xl soft-shadow border-2 transition-all duration-300 animate-fade-up ${
                    openScheduleItem === dayIndex
                      ? 'border-[#007DFF] bg-[#F1F8FF]/30'
                      : 'border-gray-100 hover:border-[#007DFF]/50'
                  }`}
                  style={{ animationDelay: `${dayIndex * 0.1}s` }}
                >
                  <button
                    onClick={() => setOpenScheduleItem(openScheduleItem === dayIndex ? null : dayIndex)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1A1A1A]">
                        {day.day}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`text-[#007DFF] transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openScheduleItem === dayIndex ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>

                  {openScheduleItem === dayIndex && (
                    <div className="px-6 pb-5 animate-fade-up">
                      <div className="space-y-4 pt-4 border-t border-gray-200">
                        {day.sessions.map((session, sessionIndex) => (
                          <div key={sessionIndex} className="flex space-x-4">
                            <div className="w-24 flex-shrink-0">
                              <span className="text-sm font-semibold text-[#007DFF]">
                                {session.time}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-[#1A1A1A] mb-1">
                                {session.activity}
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

      {/* 7. SAMPLE CERTIFICATE SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
                <span className="text-[#007DFF] font-semibold">Recognition</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                Participation Certificate
              </h2>
              <p className="text-xl text-[#1A1A1A] opacity-70 mb-12">
                Participants will receive a certificate upon completion
              </p>

              {/* Certificate Preview */}
              <div className="border-8 border-[#007DFF] rounded-3xl p-12 bg-gradient-to-br from-white to-[#F1F8FF] soft-shadow">
                <div className="border-4 border-[#065FCC] rounded-2xl p-8">
                  <div className="mb-6">
                    <Award className="text-[#007DFF] mx-auto mb-4" size={64} />
                    <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                      CERTIFICATE OF PARTICIPATION
                    </h3>
                    <p className="text-[#1A1A1A] opacity-70 mb-8">
                      This certifies that
                    </p>
                    <div className="text-4xl font-bold text-[#007DFF] mb-8 border-b-2 border-[#007DFF] pb-2 inline-block px-12">
                      [Participant Name]
                    </div>
                    <p className="text-xl text-[#1A1A1A] opacity-80 mb-4">
                      has successfully participated in
                    </p>
                    <p className="text-2xl font-bold text-[#1A1A1A] mb-8">
                      "{event.title}"
                    </p>
                    <p className="text-[#1A1A1A] opacity-70">
                      Held on {event.date}
                    </p>
                  </div>
                  <div className="text-sm text-[#1A1A1A] opacity-60 mt-8">
                    Nipix Technology • EdTech & IT Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PAST EVENT HIGHLIGHTS */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#EAF3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block glass-panel px-5 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Memories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Past Event Highlights
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-70 max-w-3xl mx-auto">
              Glimpses from our previous hackathons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pastEventHighlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="bg-white rounded-3xl overflow-hidden soft-shadow hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A] opacity-70">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              {faqs.map((faq, index) => (
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

      {/* 10. RELATED EVENTS / PROGRAMS */}
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

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Join the Hackathon?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Don't miss this opportunity to innovate, compete, and win big. Register now!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl hover:bg-[#F1F8FF] transition-all duration-300 hover-lift font-semibold text-lg">
                Register Now
              </button>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
