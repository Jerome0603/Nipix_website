import React from 'react';
import { Users, BookOpen, DollarSign, Zap } from 'lucide-react';

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Users,
      title: 'Experienced Development Team',
      description: 'Our seasoned professionals bring years of expertise in cutting-edge technologies and industry best practices.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Practical & Real-World Training',
      description: 'Hands-on learning experiences with real projects, preparing you for actual industry challenges.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality. Get premium solutions that fit your budget.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Fast & Quality Delivery',
      description: 'Agile development process ensuring timely delivery while maintaining the highest quality standards.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            What Makes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nipix Different</span>
          </h2>
          <p className="text-xl text-gray-600">
            We're committed to delivering excellence through innovation, expertise, and dedication.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">
                <div className={`p-6 bg-gradient-to-r ${benefit.color} rounded-2xl`}>
                  <benefit.icon className="text-white" size={40} />
                </div>
              </div>
              
              <h3 className="text-xl text-gray-900">{benefit.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
