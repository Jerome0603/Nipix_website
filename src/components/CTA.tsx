import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTA() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Ready to Build Your Idea with Nipix?
          </h2>
          
          <p className="text-xl lg:text-2xl mb-10 text-white/90">
            Let's transform your vision into reality. Get in touch with our team 
            and start your digital transformation journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-2xl transition-shadow duration-200 group"
            >
              <MessageCircle className="mr-2" size={20} />
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Explore Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/30">
            <div>
              <div className="text-4xl lg:text-5xl mb-2">100+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl mb-2">50+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
