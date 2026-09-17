import React from 'react';
import {
  ArrowRight,
  Clock,
  Users,
  Award,
  MapPin,
  Calendar,
  Check,
  PlayCircle,
  ShoppingCart,
  Shield,
  Infinity,
  FileText,
  Briefcase,
  Star,
  MessageCircle,
  DollarSign,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ============================================================================
// 1️⃣ COURSES — PRODUCT / PURCHASE CARD
// Component Name: CourseProductCard
// ============================================================================

interface CourseProductCardProps {
  id: number;
  title: string;
  image: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  duration: string;
  instructor?: string;
  rating?: number;
  reviews?: number;
  hasVideo?: boolean;
}

export const CourseProductCard = ({
  id,
  title,
  image,
  price,
  oldPrice,
  discount,
  duration,
  instructor,
  rating = 4.8,
  reviews = 1250,
  hasVideo = true,
}: CourseProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] flex flex-col">
      {/* Top: Media Thumbnail (Image/Video) with Play Icon Overlay */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF] group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Video Play Icon Overlay */}
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <PlayCircle size={40} className="text-[#007DFF] ml-1" fill="#007DFF" fillOpacity="0.2" />
            </div>
          </div>
        )}
        
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
            {discount}
          </div>
        )}
      </div>

      {/* Below Media: Course Info */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-[#003C78] mb-3 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>

        {/* Instructor & Rating */}
        {instructor && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-[#1A1A1A] opacity-70">
              <Users size={16} className="text-[#007DFF]" />
              <span>{instructor}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-[#1A1A1A]">{rating}</span>
              <span className="text-xs text-[#1A1A1A] opacity-50">({reviews})</span>
            </div>
          </div>
        )}

        {/* Price (Bold) */}
        <div className="mb-5">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-[#007DFF]">{price}</span>
            {oldPrice && (
              <span className="text-xl text-[#1A1A1A] opacity-40 line-through">{oldPrice}</span>
            )}
          </div>
        </div>

        {/* Primary Button: Enroll Now */}
        <Link
          to={`/courses/${id}`}
          className="w-full px-6 py-4 bg-gradient-to-r from-[#007DFF] to-[#065FCC] text-white text-center rounded-xl font-bold hover:shadow-2xl transition-all mb-3 btn-glow hover:scale-[1.02] block"
        >
          Enroll Now
        </Link>

        {/* Secondary Button: Add to Cart */}
        <button className="w-full px-6 py-3 bg-white border-2 border-[#007DFF] text-[#007DFF] text-center rounded-xl font-semibold hover:bg-[#F1F8FF] transition-all mb-5 flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-4"></div>

        {/* Includes List (Hours, Access, Certificate) */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-[#007DFF] uppercase tracking-wide mb-3">
            This course includes:
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D9EBFF] rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock size={16} className="text-[#007DFF]" />
            </div>
            <span className="text-sm text-[#1A1A1A] opacity-80">{duration} of content</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D9EBFF] rounded-lg flex items-center justify-center flex-shrink-0">
              <Infinity size={16} className="text-[#007DFF]" />
            </div>
            <span className="text-sm text-[#1A1A1A] opacity-80">Lifetime access</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D9EBFF] rounded-lg flex items-center justify-center flex-shrink-0">
              <Award size={16} className="text-[#007DFF]" />
            </div>
            <span className="text-sm text-[#1A1A1A] opacity-80">Certificate of completion</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D9EBFF] rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText size={16} className="text-[#007DFF]" />
            </div>
            <span className="text-sm text-[#1A1A1A] opacity-80">Downloadable resources</span>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-sm text-green-600 bg-green-50 py-2 px-3 rounded-xl">
            <Shield size={16} />
            <span className="font-semibold">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2️⃣ EVENTS — DATE-FIRST VISUAL CARD
// Component Name: EventDateCard
// ============================================================================

interface EventDateCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  month: string;
  day: string;
  location: string;
  time?: string;
  featured?: boolean;
}

export const EventDateCard = ({
  id,
  title,
  description,
  image,
  month,
  day,
  location,
  time,
  featured = false,
}: EventDateCardProps) => {
  return (
    <Link
      to={`/events/${id}`}
      className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] block relative"
    >
      {/* Image-Heavy Card */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Date Block Visually Separated (Left/Top) */}
        <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#007DFF] w-20">
          {/* Month Header */}
          <div className="bg-gradient-to-r from-[#007DFF] to-[#065FCC] text-white text-center py-2">
            <div className="text-xs font-bold uppercase tracking-wider">{month}</div>
          </div>
          {/* Day Number */}
          <div className="bg-white text-center py-3">
            <div className="text-3xl font-bold text-[#003C78] leading-none">{day}</div>
          </div>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Event Title */}
        <h3 className="text-2xl font-bold text-[#003C78] mb-3 line-clamp-2 group-hover:text-[#007DFF] transition-colors">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={18} className="text-[#007DFF] flex-shrink-0" />
          <span className="text-sm font-medium text-[#1A1A1A] opacity-70">{location}</span>
        </div>

        {/* Time */}
        {time && (
          <div className="flex items-center gap-2 mb-4">
            <Clock size={18} className="text-[#007DFF] flex-shrink-0" />
            <span className="text-sm font-medium text-[#1A1A1A] opacity-70">{time}</span>
          </div>
        )}

        {/* Short Description */}
        <p className="text-[#1A1A1A] opacity-70 line-clamp-2 text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* CTA: View / Register */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-[#007DFF] font-bold group-hover:text-[#065FCC] transition-colors">
            View Event
          </span>
          <ArrowRight className="text-[#007DFF] group-hover:translate-x-2 transition-transform" size={20} />
        </div>
      </div>
    </Link>
  );
};

// ============================================================================
// 3️⃣ WORKSHOPS — SESSION / MEETUP CARD
// Component Name: WorkshopSessionCard
// ============================================================================

interface WorkshopSessionCardProps {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  mode: 'Online' | 'Offline';
  seatsAvailable?: number;
  totalSeats?: number;
  instructor?: string;
}

export const WorkshopSessionCard = ({
  id,
  title,
  image,
  date,
  time,
  mode,
  seatsAvailable,
  totalSeats,
  instructor,
}: WorkshopSessionCardProps) => {
  const seatsFilled = totalSeats && seatsAvailable ? totalSeats - seatsAvailable : 0;
  const seatsPercentage = totalSeats ? (seatsFilled / totalSeats) * 100 : 0;
  const isAlmostFull = seatsPercentage > 80;

  return (
    <Link
      to={`/workshop/${id}`}
      className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] block"
    >
      {/* Clean Informational Card - Image on Top */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Mode Badge (Online / Offline) */}
        <div className="absolute top-4 right-4 glass-panel px-4 py-2 rounded-xl border-white/60 backdrop-blur-xl">
          <span className={`font-bold text-sm ${mode === 'Online' ? 'text-green-600' : 'text-blue-600'}`}>
            {mode}
          </span>
        </div>
      </div>

      {/* Below Image: Workshop Info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#003C78] mb-4 line-clamp-2 group-hover:text-[#007DFF] transition-colors">
          {title}
        </h3>

        {/* Date & Time */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D9EBFF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar size={18} className="text-[#007DFF]" />
            </div>
            <div>
              <div className="text-xs text-[#1A1A1A] opacity-60">Date</div>
              <div className="font-semibold text-[#003C78] text-sm">{date}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D9EBFF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-[#007DFF]" />
            </div>
            <div>
              <div className="text-xs text-[#1A1A1A] opacity-60">Time</div>
              <div className="font-semibold text-[#003C78] text-sm">{time}</div>
            </div>
          </div>

          {instructor && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D9EBFF] rounded-xl flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-[#007DFF]" />
              </div>
              <div>
                <div className="text-xs text-[#1A1A1A] opacity-60">Instructor</div>
                <div className="font-semibold text-[#003C78] text-sm">{instructor}</div>
              </div>
            </div>
          )}
        </div>

        {/* Seats / Capacity Info */}
        {totalSeats && seatsAvailable !== undefined && (
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[#1A1A1A] opacity-60 font-medium">
                {seatsFilled} / {totalSeats} seats filled
              </span>
              {isAlmostFull && (
                <span className="text-red-600 font-bold animate-pulse">Almost Full!</span>
              )}
            </div>
            {/* Capacity Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isAlmostFull 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600' 
                    : 'bg-gradient-to-r from-[#007DFF] to-[#065FCC]'
                }`}
                style={{ width: `${seatsPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* CTA: View Details */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[#007DFF] font-bold text-sm group-hover:text-[#065FCC] transition-colors">
            View Details
          </span>
          <ArrowRight className="text-[#007DFF] group-hover:translate-x-1 transition-transform" size={18} />
        </div>
      </div>
    </Link>
  );
};

// ============================================================================
// 4️⃣ SEMINARS — TALK / SPEAKER CARD
// Component Name: SeminarTalkCard
// ============================================================================

interface SeminarTalkCardProps {
  id: number;
  title: string;
  speaker: string;
  speakerRole?: string;
  image: string;
  date: string;
  time: string;
  topic?: string;
  mode?: 'Online' | 'Offline';
}

export const SeminarTalkCard = ({
  id,
  title,
  speaker,
  speakerRole,
  image,
  date,
  time,
  topic,
  mode,
}: SeminarTalkCardProps) => {
  return (
    <Link
      to={`/seminar/${id}`}
      className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] block"
    >
      {/* Vertical Card - Header Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Mode Badge */}
        {mode && (
          <div className="absolute top-4 right-4 glass-panel px-4 py-2 rounded-xl border-white/60 backdrop-blur-xl">
            <span className={`font-bold text-sm ${mode === 'Online' ? 'text-green-600' : 'text-blue-600'}`}>
              {mode}
            </span>
          </div>
        )}

        {/* Topic Tag */}
        {topic && (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
            <span className="text-[#007DFF] font-semibold text-sm">{topic}</span>
          </div>
        )}
      </div>

      {/* Speaker-Focused Content */}
      <div className="p-6">
        {/* Seminar Title */}
        <h3 className="text-xl font-bold text-[#003C78] mb-4 line-clamp-2 group-hover:text-[#007DFF] transition-colors">
          {title}
        </h3>

        {/* Speaker Info - Prominently Displayed */}
        <div className="mb-5 pb-5 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#007DFF] to-[#065FCC] rounded-full flex items-center justify-center flex-shrink-0">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-[#007DFF] font-semibold uppercase tracking-wide mb-1">Speaker</div>
              <div className="font-bold text-[#003C78]">{speaker}</div>
              {speakerRole && (
                <div className="text-sm text-[#1A1A1A] opacity-60 mt-1">{speakerRole}</div>
              )}
            </div>
          </div>
        </div>

        {/* Date/Time Emphasized */}
        <div className="space-y-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D9EBFF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar size={18} className="text-[#007DFF]" />
            </div>
            <div>
              <div className="text-xs text-[#1A1A1A] opacity-60">Date</div>
              <div className="font-bold text-[#003C78]">{date}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D9EBFF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-[#007DFF]" />
            </div>
            <div>
              <div className="text-xs text-[#1A1A1A] opacity-60">Time</div>
              <div className="font-bold text-[#003C78]">{time}</div>
            </div>
          </div>
        </div>

        {/* CTA - No Pricing */}
        <div className="pt-4 border-t border-gray-100">
          <div className="w-full px-6 py-3 bg-gradient-to-r from-[#007DFF] to-[#065FCC] text-white text-center rounded-xl font-bold hover:shadow-xl transition-all btn-glow group-hover:scale-[1.02]">
            Register for Seminar
          </div>
        </div>
      </div>
    </Link>
  );
};

// ============================================================================
// 5️⃣ BLOGS — EDITORIAL CARD
// Component Name: BlogEditorialCard
// ============================================================================

interface BlogEditorialCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime?: string;
  comments?: number;
}

export const BlogEditorialCard = ({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  authorImage,
  date,
  readTime,
  comments,
}: BlogEditorialCardProps) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] flex flex-col lg:flex-row">
      {/* Desktop: Image Left, Mobile: Stacked */}
      <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF] relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Text Right (Desktop) / Below (Mobile) */}
      <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
        <div>
          {/* Category Tags */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#007DFF] to-[#065FCC] text-white rounded-xl text-xs font-bold uppercase tracking-wide">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-[#003C78] mb-4 line-clamp-2 group-hover:text-[#007DFF] transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#1A1A1A] opacity-70 line-clamp-3 leading-relaxed mb-6">
            {excerpt}
          </p>
        </div>

        {/* Meta Row (Author, Date) */}
        <div>
          <div className="flex items-center gap-4 mb-5 pb-5 border-t border-gray-100 pt-5">
            {/* Author Image */}
            {authorImage && (
              <img
                src={authorImage}
                alt={author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#007DFF]/30"
              />
            )}
            
            {/* Author Info */}
            <div className="flex-grow">
              <div className="font-bold text-[#003C78] text-sm">{author}</div>
              <div className="flex items-center gap-3 text-xs text-[#1A1A1A] opacity-60 mt-1">
                <span>{date}</span>
                {readTime && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-[#007DFF]" />
                      {readTime}
                    </span>
                  </>
                )}
                {comments !== undefined && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={12} className="text-[#007DFF]" />
                      {comments}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            to={`/blog/${id}`}
            className="inline-flex items-center text-[#007DFF] font-bold hover:text-[#065FCC] transition-colors group-hover:gap-3 gap-2"
          >
            Read more
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
};

// ============================================================================
// 6️⃣ INTERNSHIPS — PROGRAM OPPORTUNITY CARD
// Component Name: InternshipProgramCard
// ============================================================================

interface InternshipProgramCardProps {
  id: number;
  title: string;
  image: string;
  duration: string;
  mode: 'Remote' | 'On-site' | 'Hybrid';
  location?: string;
  stipend?: string;
  benefits?: string[];
}

export const InternshipProgramCard = ({
  id,
  title,
  image,
  duration,
  mode,
  location,
  stipend,
  benefits = ['Certificate', 'Real Projects', 'Career Support'],
}: InternshipProgramCardProps) => {
  return (
    <Link
      to={`/internship/${id}`}
      className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#007DFF] block"
    >
      {/* Vertical Card - Image on Top */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F1F8FF] to-[#D9EBFF]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Mode Badge */}
        <div className="absolute top-4 right-4 glass-panel px-4 py-2 rounded-xl border-white/60 backdrop-blur-xl">
          <span className="text-[#007DFF] font-bold text-sm">{mode}</span>
        </div>

        {/* Stipend Badge */}
        {stipend && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2">
            <DollarSign size={16} />
            {stipend}
          </div>
        )}
      </div>

      {/* Program Details */}
      <div className="p-6">
        {/* Program Title */}
        <h3 className="text-xl font-bold text-[#003C78] mb-4 line-clamp-2 group-hover:text-[#007DFF] transition-colors">
          {title}
        </h3>

        {/* Duration & Location */}
        <div className="space-y-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D9EBFF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-[#007DFF]" />
            </div>
            <div>
              <div className="text-xs text-[#1A1A1A] opacity-60">Duration</div>
              <div className="font-semibold text-[#003C78] text-sm">{duration}</div>
            </div>
          </div>

          {location && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D9EBFF] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#007DFF]" />
              </div>
              <div>
                <div className="text-xs text-[#1A1A1A] opacity-60">Location</div>
                <div className="font-semibold text-[#003C78] text-sm">{location}</div>
              </div>
            </div>
          )}
        </div>

        {/* Benefits List */}
        <div className="mb-5">
          <div className="text-xs font-bold text-[#007DFF] uppercase tracking-wide mb-3">
            Program Benefits
          </div>
          <div className="space-y-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#D9EBFF] rounded-lg flex items-center justify-center flex-shrink-0">
                  {benefit.toLowerCase().includes('certificate') && <Award size={16} className="text-[#007DFF]" />}
                  {benefit.toLowerCase().includes('project') && <Target size={16} className="text-[#007DFF]" />}
                  {benefit.toLowerCase().includes('career') && <Briefcase size={16} className="text-[#007DFF]" />}
                  {!benefit.toLowerCase().includes('certificate') && 
                   !benefit.toLowerCase().includes('project') && 
                   !benefit.toLowerCase().includes('career') && <Check size={16} className="text-[#007DFF]" />}
                </div>
                <span className="text-sm text-[#1A1A1A] opacity-80 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: Apply Now */}
        <div className="pt-4 border-t border-gray-100">
          <div className="w-full px-6 py-4 bg-gradient-to-r from-[#007DFF] to-[#065FCC] text-white text-center rounded-xl font-bold hover:shadow-2xl transition-all btn-glow group-hover:scale-[1.02]">
            Apply Now
          </div>
        </div>
      </div>
    </Link>
  );
};