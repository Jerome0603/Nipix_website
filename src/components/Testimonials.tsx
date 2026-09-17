import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'Nipix Technology delivered an exceptional mobile app that exceeded our expectations. Their team\'s professionalism and technical expertise are outstanding.',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      image: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      text: 'Working with Nipix has been a game-changer for our business. They transformed our ideas into a beautiful, functional web platform that our users love.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Training Participant',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'The internship program at Nipix gave me real-world experience that I couldn\'t get anywhere else. The hands-on training was invaluable for my career.',
    },
    {
      name: 'David Kumar',
      role: 'Founder, HealthTech Pro',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Nipix developed our healthcare management system with incredible attention to detail. The solution is robust, scalable, and exactly what we needed.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from those we've worked with.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <Quote className="text-blue-600 opacity-20" size={64} />
            </div>

            <div className="mb-8">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="text-gray-900 mb-1">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
