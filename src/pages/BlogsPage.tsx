import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, TrendingUp, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb } from '../components/ComponentLibrary';

export function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Career', 'Education', 'Industry News'];

  const featuredBlog = {
    title: 'The Future of AI in Education: Trends to Watch in 2025',
    excerpt: 'Artificial Intelligence is revolutionizing how we learn and teach. Discover the key trends shaping the future of EdTech.',
    author: 'Dr. Sarah Johnson',
    date: 'Dec 5, 2024',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
  };

  const blogs = [
    {
      id: 1,
      title: '10 Essential Skills Every Developer Needs in 2025',
      excerpt: 'Stay ahead of the curve with these must-have technical and soft skills for modern developers.',
      author: 'Michael Chen',
      date: 'Dec 3, 2024',
      readTime: '6 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    },
    {
      id: 2,
      title: 'How to Build a Winning Portfolio as a Designer',
      excerpt: 'Learn proven strategies to showcase your design work and land your dream job.',
      author: 'Emily Rodriguez',
      date: 'Dec 1, 2024',
      readTime: '7 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    },
    {
      id: 3,
      title: 'Understanding Cloud Computing: A Beginner\'s Guide',
      excerpt: 'Demystifying cloud technology and its applications in modern business.',
      author: 'David Kim',
      date: 'Nov 28, 2024',
      readTime: '10 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    },
    {
      id: 4,
      title: 'The Rise of Remote Learning: Challenges and Opportunities',
      excerpt: 'Exploring how online education is transforming traditional learning models.',
      author: 'Lisa Wang',
      date: 'Nov 25, 2024',
      readTime: '5 min read',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800',
    },
    {
      id: 5,
      title: 'Data Science Careers: What You Need to Know',
      excerpt: 'A comprehensive guide to breaking into the lucrative field of data science.',
      author: 'Alex Thompson',
      date: 'Nov 22, 2024',
      readTime: '9 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
    {
      id: 6,
      title: 'Top Programming Languages to Learn in 2025',
      excerpt: 'Which programming languages will dominate the tech industry next year?',
      author: 'James Wilson',
      date: 'Nov 20, 2024',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800',
    },
    {
      id: 7,
      title: 'How Tech Companies are Reshaping Hiring in 2025',
      excerpt: 'Industry insights on evolving recruitment practices and what candidates should expect.',
      author: 'Maria Garcia',
      date: 'Nov 18, 2024',
      readTime: '7 min read',
      category: 'Industry News',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    },
    {
      id: 8,
      title: 'Mastering Time Management for Online Learners',
      excerpt: 'Practical tips and strategies to stay productive while learning remotely.',
      author: 'Robert Taylor',
      date: 'Nov 15, 2024',
      readTime: '5 min read',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800',
    },
    {
      id: 9,
      title: 'The Impact of Web3 on Modern Development',
      excerpt: 'Exploring decentralized technologies and their implications for developers.',
      author: 'Chris Anderson',
      date: 'Nov 12, 2024',
      readTime: '8 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb 
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blogs' },
        ]}
      />*/}

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF] relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#003C78] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-6">
              <span className="text-[#0A66C2]">Our Blog</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-[#003C78] mb-6">
              Insights & Resources
            </h1>
            <p className="text-2xl text-[#1A1A1A] opacity-80 leading-relaxed">
              Stay updated with the latest trends, tips, and insights from the world 
              of technology and education.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-up">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full border-white/60">
                  <span className="text-white font-semibold">Featured</span>
                </div>
              </div>

              <div className="animate-slide-left">
                <div className="inline-block px-4 py-1 bg-[#E8F3FF] text-[#0A66C2] rounded-full text-sm mb-4">
                  {featuredBlog.category}
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-[#003C78] mb-6">
                  {featuredBlog.title}
                </h2>

                <p className="text-xl text-[#1A1A1A] opacity-80 mb-6 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center space-x-6 mb-8 text-[#1A1A1A] opacity-70">
                  <div className="flex items-center">
                    <User size={18} className="mr-2 text-[#0A66C2]" />
                    <span>{featuredBlog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-[#0A66C2]" />
                    <span>{featuredBlog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-[#0A66C2]" />
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>

                <button className="inline-flex items-center px-8 py-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-colors duration-200">
                  Read Full Article
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Bar - Glass */}
      <section className="py-8 bg-gradient-to-br from-[#E8F3FF] to-white sticky top-20 z-40 backdrop-blur-xl glass-panel border-y border-white/60">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#0A66C2] text-white shadow-lg'
                    : 'bg-white/60 text-[#1A1A1A] hover:bg-white hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid - 3 Columns */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden soft-shadow hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full border-white/60">
                    <span className="text-white text-sm">{blog.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#003C78] mb-3 line-clamp-2 hover:text-[#0A66C2] transition-colors cursor-pointer">
                    {blog.title}
                  </h3>

                  <p className="text-[#1A1A1A] opacity-70 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                        <User size={14} className="mr-1 text-[#0A66C2]" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-[#1A1A1A] opacity-70">
                        <Calendar size={14} className="mr-1 text-[#0A66C2]" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    <div className="text-sm text-[#1A1A1A] opacity-70">
                      {blog.readTime}
                    </div>
                  </div>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="mt-4 w-full px-4 py-3 bg-[#E8F3FF] text-[#0A66C2] rounded-xl hover:bg-[#0A66C2] hover:text-white transition-colors duration-200 font-semibold block text-center"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-[#1A1A1A] opacity-70">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup Banner */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#003C78] to-[#0A66C2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Stay in the Loop
            </h2>
            
            <p className="text-2xl text-white/90 mb-10">
              Get the latest articles, insights, and learning resources delivered 
              straight to your inbox every week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/40 glass-panel text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-[#0A66C2] rounded-xl hover:shadow-2xl transition-all duration-300 btn-glow font-semibold">
                Subscribe
              </button>
            </div>

            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}