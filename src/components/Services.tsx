import React from 'react';
import { Globe, Smartphone, Palette, Code, GraduationCap, Briefcase } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage and delight users.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide seamless user experiences and drive engagement.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Scalable enterprise software and custom solutions tailored to your unique business needs.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: GraduationCap,
      title: 'Workshops & Training',
      description: 'Comprehensive hands-on training programs in web development, mobile apps, and modern technologies.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Briefcase,
      title: 'Internship Programs',
      description: 'Real-world experience opportunities for aspiring developers and designers to build their careers.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IT Solutions</span>
          </h2>
          <p className="text-xl text-gray-600">
            From concept to deployment, we provide end-to-end technology services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl mb-4 text-gray-900">{service.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
