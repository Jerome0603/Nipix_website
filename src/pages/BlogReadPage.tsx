import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Calendar,
  Clock,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Link2,
  CheckCircle,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogReadPage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Scroll animations observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const blog = {
    title: 'The Future of AI in Education: Transforming How We Learn',
    description: 'Exploring how artificial intelligence is revolutionizing education and creating personalized learning experiences',
    author: {
      name: 'Dr. Sarah Johnson',
      role: 'Chief AI Officer',
      image: 'https://i.pravatar.cc/400?img=1',
      bio: 'AI researcher and educator with 15+ years of experience in machine learning and educational technology. Passionate about making AI accessible to everyone.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    publishDate: 'December 8, 2024',
    readingTime: '8 min read',
    category: 'Artificial Intelligence',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400',
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'Machine Learning Fundamentals for Beginners',
      category: 'Machine Learning',
      excerpt: 'A comprehensive guide to understanding the basics of machine learning and its applications.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
      readTime: '6 min read',
      date: 'Dec 5, 2024',
    },
    {
      id: 3,
      title: 'Top 10 Programming Languages to Learn in 2025',
      category: 'Programming',
      excerpt: 'Stay ahead of the curve by mastering these in-demand programming languages.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800',
      readTime: '7 min read',
      date: 'Dec 3, 2024',
    },
    {
      id: 4,
      title: 'Building Career-Ready Skills in Tech',
      category: 'Career',
      excerpt: 'Essential skills and strategies to accelerate your tech career in the modern workplace.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      readTime: '5 min read',
      date: 'Dec 1, 2024',
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = blog.title;
    
    const shareUrls: { [key: string]: string } = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="pt-20 bg-white">
      {/* 1. Glass Breadcrumb Bar */}
      <section className="sticky top-20 z-40 glass-panel py-4 border-b border-white/60 backdrop-blur-xl animate-fade-up">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-[#0A66C2] hover:text-[#003C78] transition-colors">
              Home
            </Link>
            <ChevronRight size={16} className="mx-2 text-[#1A1A1A] opacity-40" />
            <Link to="/blogs" className="text-[#0A66C2] hover:text-[#003C78] transition-colors">
              Blogs
            </Link>
            <ChevronRight size={16} className="mx-2 text-[#1A1A1A] opacity-40" />
            <span className="text-[#1A1A1A] opacity-70 truncate max-w-md">{blog.title}</span>
          </div>
        </div>
      </section>

      {/* 2. Blog Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF] relative overflow-hidden">
        {/* Parallax Background Shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#003C78] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '0.6s' }} />

        <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
          <div className="animate-fade-up">
            {/* Category Tag */}
            <div className="inline-block px-4 py-2 bg-[#0A66C2] text-white rounded-full mb-6">
              <span>{blog.category}</span>
            </div>

            {/* Blog Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#003C78] mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Description */}
            <p className="text-2xl text-[#1A1A1A] opacity-80 mb-8 leading-relaxed">
              {blog.description}
            </p>

            {/* Author Info Row */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center">
                <img
                  src={blog.author.image}
                  alt={blog.author.name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-[#0A66C2]/40 object-cover"
                />
                <div>
                  <div className="text-[#003C78] font-semibold text-lg">{blog.author.name}</div>
                  <div className="text-[#1A1A1A] opacity-70 text-sm">{blog.author.role}</div>
                </div>
              </div>

              <div className="h-8 w-px bg-[#1A1A1A] opacity-20" />

              <div className="flex items-center text-[#1A1A1A] opacity-70">
                <Calendar size={18} className="mr-2 text-[#0A66C2]" />
                <span>{blog.publishDate}</span>
              </div>

              <div className="flex items-center glass-panel px-4 py-2 rounded-full">
                <Clock size={18} className="mr-2 text-[#0A66C2]" />
                <span className="text-[#003C78] font-semibold">{blog.readingTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="glass-panel rounded-3xl p-3 shadow-2xl animate-float">
              <div className="rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Blog Content Body (Editorial Style) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <article className="prose-custom">
            {/* Introduction */}
            <div className="scroll-animate mb-12">
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming 
                education in ways we couldn't have imagined just a decade ago. From personalized learning 
                paths to intelligent tutoring systems, AI is reshaping how students learn and how educators 
                teach.
              </p>
              <p className="text-xl text-[#1A1A1A] leading-relaxed">
                In this comprehensive guide, we'll explore the current state of AI in education, its 
                transformative potential, and what the future holds for learners and institutions worldwide.
              </p>
            </div>

            {/* Section 1 */}
            <div className="scroll-animate mb-12">
              <h2 className="text-4xl font-bold text-[#003C78] mb-6">
                The Current Landscape of AI in Education
              </h2>
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                Today's educational institutions are leveraging AI in multiple innovative ways. Machine 
                learning algorithms analyze student performance data to identify learning gaps, while 
                natural language processing powers intelligent chatbots that provide 24/7 student support.
              </p>
              <p className="text-xl text-[#1A1A1A] leading-relaxed">
                Major universities and online learning platforms have already integrated AI-powered features 
                that enhance the learning experience and improve educational outcomes.
              </p>
            </div>

            {/* Bullet List */}
            <div className="scroll-animate mb-12">
              <h3 className="text-3xl font-bold text-[#003C78] mb-6">
                Key Applications of AI in Modern Education
              </h3>
              <ul className="space-y-4">
                {[
                  'Personalized learning pathways that adapt to individual student needs and pace',
                  'Intelligent tutoring systems providing real-time feedback and guidance',
                  'Automated grading and assessment, freeing up educator time for mentorship',
                  'Predictive analytics to identify at-risk students before they fall behind',
                  'Natural language processing for language learning and writing assistance',
                  'Virtual reality and AI-powered simulations for immersive learning experiences',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-[#0A66C2] mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-xl text-[#1A1A1A] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inline Image with Caption */}
            <div className="scroll-animate mb-12">
              <div className="rounded-2xl overflow-hidden soft-shadow mb-4">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200"
                  alt="AI and Education Technology"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <p className="text-center text-[#1A1A1A] opacity-70 italic">
                AI-powered educational tools are creating personalized learning experiences for millions of students worldwide
              </p>
            </div>

            {/* Pull Quote */}
            <div className="scroll-animate mb-12">
              <div className="glass-panel rounded-2xl p-8 border-l-4 border-[#0A66C2] shadow-xl">
                <Quote className="text-[#0A66C2] mb-4" size={40} />
                <blockquote className="text-2xl text-[#003C78] font-semibold leading-relaxed mb-4">
                  "AI in education is not about replacing teachers—it's about empowering them with 
                  tools to provide better, more personalized education to every student."
                </blockquote>
                <cite className="text-[#1A1A1A] opacity-70 not-italic">
                  — Dr. Sarah Johnson, Chief AI Officer at Nipix Technology
                </cite>
              </div>
            </div>

            {/* Section 2 */}
            <div className="scroll-animate mb-12">
              <h2 className="text-4xl font-bold text-[#003C78] mb-6">
                Personalized Learning at Scale
              </h2>
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                One of the most significant impacts of AI in education is the ability to deliver personalized 
                learning experiences to thousands—even millions—of students simultaneously. Traditional 
                one-size-fits-all approaches are being replaced by adaptive systems that understand each 
                student's unique learning style, pace, and preferences.
              </p>
              <p className="text-xl text-[#1A1A1A] leading-relaxed">
                These AI-powered platforms continuously analyze student interactions, performance data, and 
                engagement patterns to dynamically adjust content difficulty, suggest relevant resources, 
                and provide targeted interventions exactly when students need them most.
              </p>
            </div>

            {/* Numbered List */}
            <div className="scroll-animate mb-12">
              <h3 className="text-3xl font-bold text-[#003C78] mb-6">
                The Five Pillars of AI-Driven Personalized Learning
              </h3>
              <ol className="space-y-6">
                {[
                  {
                    title: 'Adaptive Content Delivery',
                    description: 'AI adjusts the complexity and format of learning materials based on student performance and preferences.',
                  },
                  {
                    title: 'Intelligent Assessment',
                    description: 'Continuous evaluation through various formats, providing immediate feedback and identifying knowledge gaps.',
                  },
                  {
                    title: 'Predictive Analytics',
                    description: 'Machine learning models forecast student outcomes and recommend proactive interventions.',
                  },
                  {
                    title: 'Dynamic Pathways',
                    description: 'Learning journeys that automatically adapt based on mastery, interests, and career goals.',
                  },
                  {
                    title: 'Real-Time Support',
                    description: 'AI-powered assistants available 24/7 to answer questions and provide guidance.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-10 h-10 bg-[#0A66C2] text-white rounded-xl flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-2xl font-bold text-[#003C78] mb-2">{item.title}</h4>
                      <p className="text-xl text-[#1A1A1A] leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Section 3 */}
            <div className="scroll-animate mb-12">
              <h2 className="text-4xl font-bold text-[#003C78] mb-6">
                Challenges and Ethical Considerations
              </h2>
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                While the potential of AI in education is enormous, we must also address important challenges 
                and ethical considerations. Data privacy, algorithmic bias, and the digital divide are critical 
                issues that require careful attention and thoughtful solutions.
              </p>
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                Educational institutions must ensure that AI systems are transparent, fair, and respect student 
                privacy. This means implementing robust data protection measures, regularly auditing algorithms 
                for bias, and ensuring equitable access to AI-powered educational tools.
              </p>
              <p className="text-xl text-[#1A1A1A] leading-relaxed">
                The goal should always be to use AI as a tool to enhance human teaching, not replace it. 
                The irreplaceable value of human mentorship, emotional support, and creative inspiration 
                must remain at the heart of education.
              </p>
            </div>

            {/* Inline Image 2 */}
            <div className="scroll-animate mb-12">
              <div className="rounded-2xl overflow-hidden soft-shadow mb-4">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
                  alt="Students learning with AI technology"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <p className="text-center text-[#1A1A1A] opacity-70 italic">
                Balancing technology with human interaction remains crucial in modern education
              </p>
            </div>

            {/* Conclusion */}
            <div className="scroll-animate mb-12">
              <h2 className="text-4xl font-bold text-[#003C78] mb-6">
                Looking Ahead: The Future of Learning
              </h2>
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                As AI technology continues to evolve, we can expect even more innovative applications in 
                education. From AI-powered career counseling to immersive virtual learning environments, 
                the possibilities are boundless.
              </p>
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                The key to success lies in thoughtful implementation—using AI to enhance and support 
                human teaching, not replace it. When used responsibly, AI has the potential to democratize 
                education, making high-quality learning accessible to everyone, everywhere.
              </p>
              <p className="text-xl text-[#1A1A1A] leading-relaxed">
                At Nipix Technology, we're committed to developing AI-powered educational solutions that 
                prioritize student success, teacher empowerment, and equitable access. The future of 
                education is here, and together, we're shaping it to be more personalized, effective, 
                and inclusive than ever before.
              </p>
            </div>

            {/* Final CTA Box */}
            <div className="scroll-animate">
              <div className="bg-gradient-to-br from-[#E8F3FF] to-white rounded-2xl p-8 soft-shadow">
                <h3 className="text-3xl font-bold text-[#003C78] mb-4">
                  Ready to Experience AI-Powered Learning?
                </h3>
                <p className="text-xl text-[#1A1A1A] opacity-80 mb-6">
                  Join thousands of students who are transforming their careers with our AI-enhanced courses and programs.
                </p>
                <Link
                  to="/courses"
                  className="inline-flex items-center px-8 py-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-all duration-300 btn-glow"
                >
                  Explore Our Courses
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 4. Share Article Bar */}
      <section className="py-8 bg-[#E8F3FF]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="glass-panel rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <Share2 className="text-[#0A66C2] mr-3" size={24} />
              <span className="text-[#003C78] font-semibold text-lg">Share this article:</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleShare('linkedin')}
                className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={20} />
              </button>

              <button
                onClick={() => handleShare('twitter')}
                className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Share on Twitter"
              >
                <Twitter size={20} />
              </button>

              <button
                onClick={() => handleShare('facebook')}
                className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} />
              </button>

              <button
                onClick={handleCopyLink}
                className={`w-12 h-12 flex items-center justify-center rounded-xl hover:scale-110 transition-all duration-300 shadow-lg ${
                  copiedLink
                    ? 'bg-green-500 text-white'
                    : 'bg-[#0A66C2] text-white hover:bg-[#003C78]'
                }`}
                aria-label="Copy link"
              >
                {copiedLink ? <CheckCircle size={20} /> : <Link2 size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Author Box */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="glass-panel rounded-2xl p-8 lg:p-12 shadow-xl animate-fade-up">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Author Image */}
              <img
                src={blog.author.image}
                alt={blog.author.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#0A66C2]/40 shadow-lg flex-shrink-0"
              />

              {/* Author Info */}
              <div className="flex-1">
                <div className="text-sm text-[#0A66C2] uppercase tracking-wide mb-2">
                  About the Author
                </div>
                <h3 className="text-3xl font-bold text-[#003C78] mb-2">{blog.author.name}</h3>
                <p className="text-lg text-[#0A66C2] mb-4">{blog.author.role}</p>
                <p className="text-lg text-[#1A1A1A] opacity-80 leading-relaxed mb-6">
                  {blog.author.bio}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3">
                  <a
                    href={blog.author.social.linkedin}
                    className="w-11 h-11 flex items-center justify-center bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={blog.author.social.twitter}
                    className="w-11 h-11 flex items-center justify-center bg-[#0A66C2] text-white rounded-xl hover:bg-[#003C78] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Related Articles Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
              <span className="text-[#0A66C2]">Keep Reading</span>
            </div>
            <h2 className="text-5xl font-bold text-[#003C78] mb-6">
              Related Articles
            </h2>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Continue exploring insights and stories from the world of technology and education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden soft-shadow hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A66C2] text-white rounded-full text-sm">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1A1A1A] opacity-70 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-2" />
                    {article.readTime}
                  </div>

                  <h3 className="text-2xl font-bold text-[#003C78] mb-3 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-[#1A1A1A] opacity-80 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center text-[#0A66C2] font-semibold hover:text-[#003C78] transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#003C78] to-[#0A66C2] relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-2xl text-white/90">
              Get the latest insights on AI, technology, and education delivered to your inbox weekly
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-xl glass-panel text-white placeholder-white/60 border-2 border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-[#0A66C2] rounded-xl hover:shadow-2xl transition-all duration-300 btn-glow font-semibold text-lg"
              >
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm text-center mt-4">
              Join 10,000+ professionals getting weekly insights. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
