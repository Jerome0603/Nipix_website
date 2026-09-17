import React from 'react';
import { Briefcase, Users, Code, Palette } from 'lucide-react';

export function Careers() {
  const openings = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Hybrid',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Project Manager',
      type: 'Full-time',
      location: 'On-site',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Technical Trainer',
      type: 'Part-time',
      location: 'Hybrid',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="careers" className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full mb-4">
            Join Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Build Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Career</span> with Nipix
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our growing team of passionate technologists and innovators. 
            We're always looking for talented individuals who share our vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <Briefcase className="mr-2" size={20} />
              Apply Now
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Openings
            </a>
          </div>
        </div>

        {/* Job Openings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {openings.map((job, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${job.color} rounded-xl mb-4`}>
                <job.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl mb-2">{job.title}</h3>
              
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                  {job.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl mb-2">Growth Opportunities</h3>
            <p className="text-gray-300">Continuous learning and career advancement paths</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="text-xl mb-2">Flexible Work</h3>
            <p className="text-gray-300">Remote and hybrid options available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl mb-2">Innovative Projects</h3>
            <p className="text-gray-300">Work on cutting-edge technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
