import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Palette, Database, Cloud, Server, Shield, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'End-to-end software development solutions tailored to your unique business requirements and goals.',
      features: ['Scalable Architecture', 'Agile Methodology', 'Quality Assurance', 'Ongoing Support'],
      color: '#0A66C2',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Excellence', 'App Store Optimization'],
      color: '#4BB8FF',
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Security Focused'],
      color: '#2296A8',
    },
    {
      icon: Palette,
      title: 'UI/UX Design Services',
      description: 'Create stunning, intuitive designs that engage users and drive business results.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: '#073B73',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and optimize your infrastructure for scalability and cost-efficiency.',
      features: ['Cloud Migration', 'AWS & Azure', 'DevOps', 'Infrastructure as Code'],
      color: '#0A66C2',
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Dashboards'],
      color: '#4BB8FF',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      client: 'Retail Company',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjUxODg5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Full-featured online shopping platform with payment integration',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Healthcare App',
      client: 'Medical Services',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1MjAyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Patient management system with telemedicine features',
      tags: ['Flutter', 'Firebase', 'WebRTC'],
    },
    {
      title: 'ERP System',
      client: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2NTE4NTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Enterprise resource planning for inventory and sales',
      tags: ['Python', 'PostgreSQL', 'React'],
    },
    {
      title: 'Learning Platform',
      client: 'Education Sector',
      image: 'https://images.unsplash.com/photo-1762330918491-f4288a62adb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY1MjM0MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Online education platform with video streaming',
      tags: ['Next.js', 'AWS', 'Tailwind'],
    },
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'Flutter', logo: '📱' },
    { name: 'AWS', logo: '☁️' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '☸️' },
    { name: 'TensorFlow', logo: '🧠' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'GraphQL', logo: '◆' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-[#F2F5F7]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white border border-[#4BB8FF] text-[#0A66C2] rounded-full mb-6">
              IT Solutions & Services
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#073B73] mb-6">
              Technology Solutions That Drive Results
            </h1>
            <p className="text-xl text-[#6E6E6E] leading-relaxed">
              From concept to deployment, we deliver comprehensive IT solutions 
              that transform businesses and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-[#F2F5F7] text-[#0A66C2] rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#073B73] mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-[#6E6E6E]">
              End-to-end technology services tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-[#F2F5F7] rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl text-[#073B73] mb-4">{service.title}</h3>
                
                <p className="text-[#6E6E6E] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#6E6E6E]">
                      <span className="w-2 h-2 bg-[#4BB8FF] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Thumbnails */}
      <section className="py-20 lg:py-28 bg-[#F2F5F7]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-white text-[#0A66C2] rounded-full mb-4">
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#073B73] mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-[#6E6E6E]">
              Explore our portfolio of successful projects delivered to clients worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-[#4BB8FF] mb-2">{project.client}</div>
                  <h3 className="text-2xl text-[#073B73] mb-3">{project.title}</h3>
                  <p className="text-[#6E6E6E] mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#F2F5F7] text-[#0A66C2] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 lg:py-28 bg-[#073B73] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 text-[#4BB8FF] rounded-full mb-4">
              Technology Stack
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6">
              Powered by Modern Technologies
            </h2>
            <p className="text-xl text-white/80">
              We leverage the latest tools and frameworks to build robust solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">{tech.logo}</div>
                <div className="text-sm text-white/90">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#0A66C2] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-xl mb-10 text-white/90">
              Let's discuss how we can help bring your ideas to life with our 
              expert development team and proven methodologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A66C2] rounded-lg hover:bg-[#F2F5F7] transition-colors duration-200"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
