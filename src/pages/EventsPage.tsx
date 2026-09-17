import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Star,
  Medal,
  Award,
} from 'lucide-react';
import { Breadcrumb } from '../components/ComponentLibrary';

export function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'closed'>('all');

  // Events data with status
  const events = [
    {
      id: 1,
      title: 'National Hackathon 2025',
      description: 'Build innovative solutions in 48 hours and compete for amazing prizes',
      date: 'Feb 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      mode: 'Hybrid',
      location: 'Tech Hub, Bangalore',
      participants: 128,
      maxParticipants: 500,
      status: 'upcoming' as const,
    },
    {
      id: 2,
      title: 'AI & ML Competition',
      description: 'Showcase your machine learning skills in real-world problem solving',
      date: 'Feb 20, 2025',
      time: '10:00 AM - 5:00 PM',
      mode: 'Online',
      location: 'Virtual Platform',
      participants: 245,
      maxParticipants: 300,
      status: 'ongoing' as const,
    },
    {
      id: 3,
      title: 'Web Development Workshop',
      description: 'Learn modern web development with React and TypeScript',
      date: 'Feb 25, 2025',
      time: '2:00 PM - 5:00 PM',
      mode: 'Offline',
      location: 'Nipix Campus, Mumbai',
      participants: 85,
      maxParticipants: 100,
      status: 'upcoming' as const,
    },
    {
      id: 4,
      title: 'UI/UX Design Challenge',
      description: 'Create stunning user experiences and win exciting rewards',
      date: 'Feb 28, 2025',
      time: '11:00 AM - 4:00 PM',
      mode: 'Online',
      location: 'Figma Platform',
      participants: 150,
      maxParticipants: 200,
      status: 'ongoing' as const,
    },
    {
      id: 5,
      title: 'Cloud Computing Bootcamp',
      description: 'Master AWS, Azure, and Google Cloud in a hands-on intensive session',
      date: 'Jan 15, 2025',
      time: '9:00 AM - 6:00 PM',
      mode: 'Hybrid',
      location: 'Delhi Tech Center',
      participants: 200,
      maxParticipants: 200,
      status: 'closed' as const,
    },
    {
      id: 6,
      title: 'Data Science Symposium',
      description: 'Explore the latest in data analytics and visualization techniques',
      date: 'Mar 5, 2025',
      time: '10:00 AM - 3:00 PM',
      mode: 'Offline',
      location: 'IIT Campus, Chennai',
      participants: 42,
      maxParticipants: 150,
      status: 'upcoming' as const,
    },
    {
      id: 7,
      title: 'Cybersecurity Challenge 2025',
      description: 'Test your security skills in capture-the-flag competitions',
      date: 'Jan 28, 2025',
      time: '8:00 AM - 8:00 PM',
      mode: 'Online',
      location: 'HackTheBox Platform',
      participants: 180,
      maxParticipants: 180,
      status: 'closed' as const,
    },
    {
      id: 8,
      title: 'Mobile App Development Sprint',
      description: 'Build cross-platform mobile apps with Flutter and React Native',
      date: 'Mar 10, 2025',
      time: '1:00 PM - 5:00 PM',
      mode: 'Hybrid',
      location: 'Pune Innovation Hub',
      participants: 67,
      maxParticipants: 120,
      status: 'upcoming' as const,
    },
  ];

  // Leaderboard data
  const leaderboard = [
    { rank: 1, name: 'Team Alpha Coders', score: 9850, avatar: '🥇' },
    { rank: 2, name: 'Dev Ninjas', score: 9520, avatar: '🥈' },
    { rank: 3, name: 'Code Warriors', score: 9180, avatar: '🥉' },
    { rank: 4, name: 'Tech Titans', score: 8950, avatar: '⭐' },
    { rank: 5, name: 'Pixel Pioneers', score: 8720, avatar: '⭐' },
    { rank: 6, name: 'Data Dynamos', score: 8500, avatar: '⭐' },
    { rank: 7, name: 'Cloud Crusaders', score: 8320, avatar: '⭐' },
    { rank: 8, name: 'AI Architects', score: 8100, avatar: '⭐' },
    { rank: 9, name: 'Full Stack Force', score: 7890, avatar: '⭐' },
    { rank: 10, name: 'Cyber Squad', score: 7650, avatar: '⭐' },
  ];

  // Filter events
  const filteredEvents = events.filter(event => {
    if (activeFilter === 'all') return true;
    return event.status === activeFilter;
  });

  // Get status badge styling
  const getStatusBadge = (status: 'upcoming' | 'ongoing' | 'closed') => {
    switch (status) {
      case 'upcoming':
        return {
          text: 'Upcoming',
          className: 'bg-blue-50 text-[#007DFF] border border-[#007DFF]/30',
        };
      case 'ongoing':
        return {
          text: 'Ongoing',
          className: 'bg-green-50 text-green-600 border border-green-600/30 animate-pulse',
        };
      case 'closed':
        return {
          text: 'Closed',
          className: 'bg-gray-100 text-gray-500 border border-gray-300',
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1F8FF] to-white">
      {/* Breadcrumb 
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Events', path: '/events' },
            ]}
          />
        </div>
      </div>*/}

      {/* Hero Header */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-6">
              <span className="text-[#007DFF] font-semibold">Join Us</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
              Events & Competitions
            </h1>
            
            <p className="text-xl text-[#1A1A1A] opacity-80 leading-relaxed max-w-3xl mx-auto">
              Participate in hackathons, workshops, and competitions to showcase your skills and win exciting prizes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
            {(['all', 'upcoming', 'ongoing', 'closed'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#007DFF] text-white shadow-lg'
                    : 'bg-white text-[#1A1A1A] hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)} Events
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[70%_30%] gap-8">
            {/* LEFT COLUMN - Events List (Stacked Cards) */}
            <div className="space-y-6">
              {/* Section Heading */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                  {activeFilter === 'all' ? 'All Events' : 
                   activeFilter === 'upcoming' ? 'Upcoming Events' :
                   activeFilter === 'ongoing' ? 'Ongoing Events' : 'Past Events'}
                </h2>
                <p className="text-[#1A1A1A] opacity-70">
                  {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} available
                </p>
              </div>

              {/* Stacked Event Cards */}
              {filteredEvents.length > 0 ? (
                <div className="space-y-6">
                  {filteredEvents.map((event, index) => {
                    const statusBadge = getStatusBadge(event.status);
                    const participationPercentage = (event.participants / event.maxParticipants) * 100;
                    const isDisabled = event.status === 'closed';

                    return (
                      <div
                        key={event.id}
                        className={`bg-white rounded-2xl overflow-hidden soft-shadow transition-all duration-300 border border-gray-100 animate-fade-up ${
                          isDisabled 
                            ? 'opacity-60' 
                            : 'hover-lift hover:shadow-2xl hover:border-[#007DFF]'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="p-6 lg:p-8">
                          {/* Status Badge - Top Left */}
                          <div className="flex items-start justify-between mb-4">
                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${statusBadge.className}`}>
                              {statusBadge.text}
                            </span>
                          </div>

                          {/* Event Title */}
                          <h3 className="text-2xl lg:text-3xl font-bold text-[#003C78] mb-3">
                            {event.title}
                          </h3>

                          {/* Description */}
                          <p className="text-[#1A1A1A] opacity-70 mb-6 leading-relaxed">
                            {event.description}
                          </p>

                          {/* Event Meta Row */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {/* Date */}
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#E8F3FF] rounded-xl flex items-center justify-center flex-shrink-0">
                                <Calendar size={18} className="text-[#007DFF]" />
                              </div>
                              <div>
                                <div className="text-xs text-[#1A1A1A] opacity-60">Date</div>
                                <div className="font-semibold text-[#003C78] text-sm">{event.date}</div>
                              </div>
                            </div>

                            {/* Time */}
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#E8F3FF] rounded-xl flex items-center justify-center flex-shrink-0">
                                <Clock size={18} className="text-[#007DFF]" />
                              </div>
                              <div>
                                <div className="text-xs text-[#1A1A1A] opacity-60">Time</div>
                                <div className="font-semibold text-[#003C78] text-sm">{event.time}</div>
                              </div>
                            </div>

                            {/* Mode */}
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#E8F3FF] rounded-xl flex items-center justify-center flex-shrink-0">
                                <CheckCircle size={18} className="text-[#007DFF]" />
                              </div>
                              <div>
                                <div className="text-xs text-[#1A1A1A] opacity-60">Mode</div>
                                <div className="font-semibold text-[#003C78] text-sm">{event.mode}</div>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#E8F3FF] rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin size={18} className="text-[#007DFF]" />
                              </div>
                              <div>
                                <div className="text-xs text-[#1A1A1A] opacity-60">Location</div>
                                <div className="font-semibold text-[#003C78] text-sm line-clamp-1">{event.location}</div>
                              </div>
                            </div>
                          </div>

                          {/* Participant Count / Slots */}
                          <div className="mb-6 pb-6 border-b border-gray-100">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <div className="flex items-center gap-2 text-[#1A1A1A] opacity-70">
                                <Users size={16} className="text-[#007DFF]" />
                                <span className="font-medium">
                                  {event.participants} / {event.maxParticipants} Participants
                                </span>
                              </div>
                              <span className="font-bold text-[#007DFF]">
                                {Math.round(participationPercentage)}% Full
                              </span>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#007DFF] to-[#065FCC] rounded-full transition-all duration-500"
                                style={{ width: `${participationPercentage}%` }}
                              />
                            </div>
                          </div>

                          {/* CTA Button */}
                          {isDisabled ? (
                            <button
                              disabled
                              className="w-full px-8 py-4 bg-gray-300 text-gray-500 rounded-xl font-bold cursor-not-allowed"
                            >
                              Registration Closed
                            </button>
                          ) : (
                            <Link
                              to={`/events/${event.id}`}
                              className="block w-full px-8 py-4 bg-gradient-to-r from-[#007DFF] to-[#065FCC] text-white text-center rounded-xl font-bold hover:shadow-2xl transition-all btn-glow hover:scale-[1.02]"
                            >
                              {event.status === 'ongoing' ? 'Join Now' : 'Register Now'}
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="glass-panel rounded-2xl p-12 inline-block">
                    <Calendar size={64} className="text-[#007DFF] mx-auto mb-4 opacity-50" />
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">No events found</h3>
                    <p className="text-[#1A1A1A] opacity-70">
                      Try selecting a different filter
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN - Leaderboard Panel */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl overflow-hidden soft-shadow border border-gray-100">
                {/* Leaderboard Header */}
                <div className="bg-gradient-to-r from-[#007DFF] to-[#065FCC] p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Leaderboard</h3>
                      <p className="text-white/80 text-sm">Top performers this month</p>
                    </div>
                  </div>
                </div>

                {/* Leaderboard List */}
                <div className="p-6">
                  <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                    {leaderboard.map((team) => (
                      <div
                        key={team.rank}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                          team.rank <= 3
                            ? 'bg-gradient-to-r from-[#F1F8FF] to-[#E8F3FF] border-2 border-[#007DFF]/30'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        {/* Rank Badge */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${
                            team.rank === 1
                              ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                              : team.rank === 2
                              ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white'
                              : team.rank === 3
                              ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                              : 'bg-white text-[#007DFF] border-2 border-[#007DFF]/30'
                          }`}
                        >
                          {team.rank <= 3 ? team.avatar : team.rank}
                        </div>

                        {/* Team Info */}
                        <div className="flex-grow min-w-0">
                          <div className="font-bold text-[#003C78] text-sm truncate">
                            {team.name}
                          </div>
                          <div className="text-xs text-[#1A1A1A] opacity-60">
                            {team.score.toLocaleString()} points
                          </div>
                        </div>

                        {/* Score Indicator */}
                        {team.rank <= 3 && (
                          <div className="flex-shrink-0">
                            {team.rank === 1 && <Medal size={20} className="text-yellow-600" />}
                            {team.rank === 2 && <Medal size={20} className="text-gray-500" />}
                            {team.rank === 3 && <Medal size={20} className="text-orange-600" />}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* View Full Leaderboard Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="w-full px-6 py-3 bg-[#007DFF] text-white rounded-xl font-semibold hover:bg-[#065FCC] transition-all duration-200 flex items-center justify-center gap-2 group">
                      View Full Leaderboard
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="mt-6 bg-gradient-to-br from-[#F1F8FF] to-white rounded-2xl p-6 border border-[#007DFF]/20">
                <h4 className="font-bold text-[#003C78] mb-4">Event Stats</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#1A1A1A] opacity-70">Total Events</span>
                    <span className="font-bold text-[#007DFF]">{events.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#1A1A1A] opacity-70">Upcoming</span>
                    <span className="font-bold text-[#007DFF]">
                      {events.filter(e => e.status === 'upcoming').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#1A1A1A] opacity-70">Ongoing</span>
                    <span className="font-bold text-green-600">
                      {events.filter(e => e.status === 'ongoing').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#1A1A1A] opacity-70">Total Participants</span>
                    <span className="font-bold text-[#007DFF]">
                      {events.reduce((sum, e) => sum + e.participants, 0)}+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Next Event?
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Register now and be part of our vibrant tech community
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl transition-all duration-300 hover-lift font-semibold text-lg"
              >
                Contact Us
              </Link>

              <Link
                to="/programs"
                className="inline-flex items-center justify-center px-10 py-5 glass-panel text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-white/40"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #007DFF;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #065FCC;
        }
      `}</style>
    </div>
  );
}