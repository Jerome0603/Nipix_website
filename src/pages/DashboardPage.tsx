import React from 'react';
import { Book, Award, TrendingUp, Clock, CheckCircle, AlertCircle, PlayCircle, Download } from 'lucide-react';

export function DashboardPage() {
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    enrolledCourses: 3,
    completedCourses: 5,
    totalHours: 240,
  };

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      progress: 75,
      status: 'In Progress',
      modules: 12,
      completedModules: 9,
      nextLesson: 'Building RESTful APIs',
      dueDate: 'Dec 20, 2024',
    },
    {
      id: 2,
      title: 'UI/UX Design Mastery',
      progress: 45,
      status: 'In Progress',
      modules: 8,
      completedModules: 4,
      nextLesson: 'Advanced Prototyping',
      dueDate: 'Jan 15, 2025',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      progress: 30,
      status: 'In Progress',
      modules: 10,
      completedModules: 3,
      nextLesson: 'State Management',
      dueDate: 'Feb 1, 2025',
    },
  ];

  const certificates = [
    {
      title: 'JavaScript Fundamentals',
      issueDate: 'Nov 15, 2024',
      credentialId: 'NX-2024-JS-4521',
    },
    {
      title: 'React Development',
      issueDate: 'Oct 28, 2024',
      credentialId: 'NX-2024-RC-3892',
    },
    {
      title: 'Database Design',
      issueDate: 'Sep 10, 2024',
      credentialId: 'NX-2024-DB-2156',
    },
  ];

  const upcomingDeadlines = [
    {
      course: 'Full Stack Web Development',
      task: 'Final Project Submission',
      date: 'Dec 20, 2024',
      priority: 'high',
    },
    {
      course: 'UI/UX Design Mastery',
      task: 'Portfolio Review',
      date: 'Dec 25, 2024',
      priority: 'medium',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#F2F5F7]">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Side Navigation */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
              <div className="text-center mb-6 pb-6 border-b border-[#F2F5F7]">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#0A66C2]"
                />
                <h3 className="text-xl text-[#073B73] mb-1">{user.name}</h3>
                <p className="text-[#6E6E6E] text-sm">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <a href="#" className="flex items-center px-4 py-3 bg-[#0A66C2] text-white rounded-lg">
                  <Book className="mr-3" size={20} />
                  Dashboard
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-[#6E6E6E] hover:bg-[#F2F5F7] rounded-lg transition-colors">
                  <PlayCircle className="mr-3" size={20} />
                  My Courses
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-[#6E6E6E] hover:bg-[#F2F5F7] rounded-lg transition-colors">
                  <Award className="mr-3" size={20} />
                  Certificates
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-[#6E6E6E] hover:bg-[#F2F5F7] rounded-lg transition-colors">
                  <TrendingUp className="mr-3" size={20} />
                  Progress
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Greeting */}
            <div className="bg-gradient-to-r from-[#0A66C2] to-[#4BB8FF] rounded-xl shadow-lg p-8 text-white">
              <h1 className="text-3xl lg:text-4xl mb-2">
                Welcome back, {user.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-lg text-white/90">
                You're making great progress. Keep up the excellent work!
              </p>
            </div>

            {/* Progress Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center">
                    <Book className="text-white" size={24} />
                  </div>
                  <TrendingUp className="text-[#31C48D]" size={20} />
                </div>
                <div className="text-3xl text-[#073B73] mb-2">{user.enrolledCourses}</div>
                <div className="text-[#6E6E6E]">Active Courses</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#31C48D] rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <TrendingUp className="text-[#31C48D]" size={20} />
                </div>
                <div className="text-3xl text-[#073B73] mb-2">{user.completedCourses}</div>
                <div className="text-[#6E6E6E]">Completed Courses</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#4BB8FF] rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <TrendingUp className="text-[#31C48D]" size={20} />
                </div>
                <div className="text-3xl text-[#073B73] mb-2">{user.totalHours}h</div>
                <div className="text-[#6E6E6E]">Learning Hours</div>
              </div>
            </div>

            {/* Course List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-[#073B73]">My Courses</h2>
                <a href="#" className="text-[#0A66C2] hover:text-[#073B73]">View All</a>
              </div>

              <div className="space-y-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-[#F2F5F7] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl text-[#073B73] mb-2">{course.title}</h3>
                        <p className="text-[#6E6E6E] text-sm">
                          Next: {course.nextLesson}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#4BB8FF] text-white text-sm rounded-full">
                        {course.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#6E6E6E]">
                          Progress: {course.completedModules}/{course.modules} modules
                        </span>
                        <span className="text-sm text-[#0A66C2]">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-[#F2F5F7] rounded-full h-3">
                        <div
                          className="bg-[#0A66C2] h-3 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#6E6E6E] text-sm">
                        <Clock size={16} className="mr-2" />
                        Due: {course.dueDate}
                      </div>
                      <button className="px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#073B73] transition-colors">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl text-[#073B73] mb-6">Upcoming Deadlines</h2>
              
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div
                    key={index}
                    className={`flex items-start p-4 rounded-lg border-l-4 ${
                      deadline.priority === 'high'
                        ? 'bg-red-50 border-red-500'
                        : 'bg-[#FACC15]/10 border-[#FACC15]'
                    }`}
                  >
                    <AlertCircle
                      className={deadline.priority === 'high' ? 'text-red-500' : 'text-[#FACC15]'}
                      size={20}
                    />
                    <div className="ml-4 flex-1">
                      <div className="text-[#073B73] mb-1">{deadline.task}</div>
                      <div className="text-sm text-[#6E6E6E]">{deadline.course}</div>
                    </div>
                    <div className="text-sm text-[#6E6E6E]">{deadline.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-[#073B73]">My Certificates</h2>
                <a href="#" className="text-[#0A66C2] hover:text-[#073B73]">View All</a>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="border border-[#F2F5F7] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-[#31C48D] rounded-lg flex items-center justify-center mb-4">
                      <Award className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg text-[#073B73] mb-2">{cert.title}</h3>
                    <p className="text-sm text-[#6E6E6E] mb-1">Issued: {cert.issueDate}</p>
                    <p className="text-xs text-[#6E6E6E] mb-4">ID: {cert.credentialId}</p>
                    <button className="flex items-center text-[#0A66C2] hover:text-[#073B73] text-sm">
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
