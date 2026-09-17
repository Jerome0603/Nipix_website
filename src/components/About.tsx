import React from 'react';
import { Award, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Award,
      title: '5+ Years Experience',
      description: 'Proven track record in delivering exceptional IT solutions',
    },
    {
      icon: Target,
      title: '50+ Successful Projects',
      description: 'From startups to enterprises, we deliver results',
    },
    {
      icon: Users,
      title: 'Hands-On Training Excellence',
      description: 'Empowering the next generation of tech professionals',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
              About Us
            </div>
            
            <h2 className="text-4xl lg:text-5xl">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nipix Technology</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Nipix Technology is a premier IT solutions and training company dedicated to transforming businesses 
              through innovative technology. We specialize in custom software development, mobile applications, 
              web solutions, and comprehensive training programs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experienced professionals combines technical expertise with industry best practices 
              to deliver solutions that drive growth and success. We're committed to excellence, innovation, 
              and empowering individuals through practical, hands-on training.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg flex-shrink-0">
                    <highlight.icon size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">{highlight.title}</div>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwdGVhbSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyNzUwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nipix Technology Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
