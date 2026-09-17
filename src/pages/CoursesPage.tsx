import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  Clock, 
  Users, 
  Star, 
  Award, 
  TrendingUp,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Zap,
  Target,
  Gift
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CoursesPage() {
  const [selectedTab, setSelectedTab] = useState<'paid' | 'combo' | 'domain' | 'free'>('paid');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setAllCourses(data || []);
      }

      setLoading(false);
    };

    fetchCourses();
  }, []);

  // Filter courses by selected tab
  const filteredCourses = allCourses.filter(
    course => course.type === selectedTab
  );

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Reset to page 1 when changing tabs
  const handleTabChange = (tab: 'paid' | 'combo' | 'domain' | 'free') => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'paid' as const, label: 'Paid Courses', icon: BookOpen },
    { id: 'combo' as const, label: 'Combo Courses', icon: Zap },
    { id: 'domain' as const, label: 'Domain-Based Courses', icon: Target },
    { id: 'free' as const, label: 'Free Courses', icon: Gift },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Courses' },
        ]}
      />*/}

      {/* COURSES PAGE HERO SECTION */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-r from-[#007DFF] to-[#007DFF] overflow-hidden mt-4">
        {/* Subtle Background Shapes */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-56 h-56 bg-white rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.2s' }} />
        
        {/* Background Illustration */}
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-100 hidden lg:block">
              <ImageWithFallback
                src="../src/assets/coursepage.png"
                alt="About Education"
                className="w-full h-full object-cover"
              />
            </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* LEFT SIDE - Text Content */}
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Take your knowledge to the next level
              </h1>
              
              <p className="text-lg text-black/90">
                Explore industry-focused courses designed for real-world skills.
              </p>
            </div>

            {/* RIGHT SIDE - Illustration 
            <div className="hidden lg:block animate-slide-left">
              <div className="relative">
                <ImageWithFallback
                  src="../src/assets/courses.png"
                  alt="Online Learning"
                  className="w-full h-auto rounded-3xl shadow-2xl opacity-90"
                  style={{ maxHeight: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR (TABS) */}
      <section className="top-20 z-40 py-6 bg-white border-b border-gray-15 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap gap-3 bg-white p-2 rounded-2xl">
              {tabs.map((tab) => {
                icon: Code
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      inline-flex items-center px-6 py-3 rounded-2xl transition-all duration-300 font-semibold
                      ${selectedTab === tab.id
                        ? 'bg-[#007DFF] text-white shadow-lg scale-105'
                        : 'bg-white text-[#007DFF] border-2 border-[#007DFF] hover:bg-[#F1F8FF] hover:scale-102'
                      }
                    `}
                  >
                    
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSE GRID SECTION */}
      <section className="py-16 lg:py-24 bg-white min-h-[600px]" id="course-grid">
        <div className="container mx-auto px-6 lg:px-12">
          {currentCourses.length > 0 ? (
            <>
              {/* Course Count */}
              <div className="mb-6 animate-fade-up">
                <p className="text-[#1A1A1A] opacity-70">
                  Showing {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, filteredCourses.length)} of {filteredCourses.length} courses
                </p>
              </div>

              {/* Course Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCourses.map((course, index) => {
                  icon: Code
                  return (
                    <div
                      key={course.slug}
                      className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift border border-gray-100 transition-all duration-300 h-[540px] flex flex-col"
                      style={{ 
                        animationDelay: `${index * 0.05}s`,
                        animation: 'fadeUp 0.6s ease-out forwards'
                      }}
                    >
                      {/* 1. TOP IMAGE / THUMBNAIL */}
                      <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-[#D9EBFF] to-[#F1F8FF] flex-shrink-0">
                        <ImageWithFallback
                          src={course.thumbnail_url}
                          alt={course.title}
                          className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Course Content */}
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
                        <Link to={`/courses/${course.slug}`}>
                          <h3 className="text-xl font-bold text-[#003C78] mb-3 line-clamp-2 group-hover:text-[#007DFF] transition-colors cursor-pointer">
                            {course.title}
                          </h3>
                        </Link>

                        {/* 4. COURSE SHORT DESCRIPTION */}
                        <p className="text-[#1A1A1A] opacity-70 text-sm leading-relaxed line-clamp-2 mb-4">
                          {course.description}
                        </p>

                        {/* 5. INSTRUCTOR INFO 
                        <div className="flex items-center mb-4">
                          <Users size={16} className="text-[#007DFF] mr-2" />
                          <span className="text-sm text-[#1A1A1A] opacity-70">({course.total_enrolled})</span>
                        </div>*/}

                        {/* 6. RATING & DURATION ROW */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Star className="fill-current text-yellow-400" size={16} />
                            <span className="ml-1 text-sm font-semibold text-[#1A1A1A]">{course.rating}</span>
                            <span className="ml-1 text-sm text-[#1A1A1A] opacity-50">({course.reviews})</span>
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

                        {/* 8. BOTTOM TAGS ROW 
                        <div className="flex flex-wrap gap-2 mb-4">
                          {/*<span className="text-xs text-[#007DFF] hover:underline cursor-pointer">
                            JavaScript
                          </span>
                          <span className="text-xs text-[#1A1A1A] opacity-30">•</span>
                          <span className="text-xs text-[#007DFF] hover:underline cursor-pointer">
                            Programming
                          </span>
                          <span className="text-xs text-[#1A1A1A] opacity-30">•</span>
                          <span className="text-xs text-[#007DFF] hover:underline cursor-pointer">
                            {course.level}
                          </span>
                        </div>*/}

                        {/* 9 & 10. PRICE + CTA ROW */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            {course.original_price && (
                              <div className="text-sm text-gray-500 line-through">₹{course.original_price}</div>
                            )}
                            <div className="text-2xl font-bold text-[#007DFF]">₹{course.price}</div>
                          </div>
                          <Link
                            to={`/courses/${course.slug}`}
                            className="px-6 py-3 bg-[#007DFF] text-white rounded-xl hover:bg-[#066EE2] transition-all duration-200 font-semibold"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            // 6. EMPTY STATE
            <div className="text-center py-20 animate-fade-up">
              <div className="max-w-md mx-auto">
                <GraduationCap className="w-24 h-24 text-[#007DFF] mx-auto mb-6 opacity-50" />
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  No courses available in this category yet.
                </h3>
                <p className="text-lg text-[#1A1A1A] opacity-70 mb-8">
                  Check back soon or Refresh the page.
                </p>
                <button
                  onClick={() => handleTabChange('paid')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#007DFF] text-white rounded-2xl hover:shadow-2xl transition-all duration-300 btn-glow font-semibold"
                >
                  Browse All Courses
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. PAGINATION BAR */}
      {totalPages > 1 && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`
                  p-3 rounded-xl transition-all duration-200
                  ${currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-[#007DFF] text-[#007DFF] hover:bg-[#007DFF] hover:text-white'
                  }
                `}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`
                    w-12 h-12 rounded-xl font-semibold transition-all duration-200
                    ${currentPage === pageNumber
                      ? 'bg-[#007DFF] text-white shadow-lg scale-110'
                      : 'bg-white border-2 border-gray-200 text-[#1A1A1A] hover:border-[#007DFF] hover:text-[#007DFF]'
                    }
                  `}
                >
                  {pageNumber}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`
                  p-3 rounded-xl transition-all duration-200
                  ${currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-[#007DFF] text-[#007DFF] hover:bg-[#007DFF] hover:text-white'
                  }
                `}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Page Info */}
            <div className="text-center mt-6">
              <p className="text-sm text-[#1A1A1A] opacity-70">
                Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007DFF] to-[#065FCC] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Not Sure Which Course to Choose?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Our learning advisors are here to help you find the perfect course 
              based on your goals, experience, and career aspirations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007DFF] rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover-lift"
              >
                Talk to an Advisor
              </Link>
              
              <button className="inline-flex items-center justify-center px-10 py-5 glass-panel text-[#007DFF] rounded-2xl hover:shadow-xl transition-all duration-300 text-lg font-semibold border-white/40 hover-lift">
                Download Course Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}