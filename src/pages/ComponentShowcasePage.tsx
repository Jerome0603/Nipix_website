import React, { useState } from 'react';
import {
  Typography,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  Input,
  GlassInput,
  TextArea,
  NavBar,
  Footer,
  CourseCard,
  ProgramCard,
  EventCard,
  BlogCard,
  Badge,
  Icons,
  Accordion,
  TestimonialCard,
  CTABanner,
} from '../components/ComponentLibrary';

export function ComponentShowcasePage() {
  // State for inputs
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [successInput, setSuccessInput] = useState('Valid Input');

  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Typography.DisplayHeader className="mb-6">
              Component Library Showcase
            </Typography.DisplayHeader>
            <Typography.BodyText className="text-xl">
              Explore all reusable components built with the Nipix Technology Master Style Guide
            </Typography.BodyText>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Typography System</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Consistent typography styles for headers, titles, body text, and captions
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-8 lg:p-12 space-y-8">
            <div>
              <Typography.Caption className="mb-2">Display Header</Typography.Caption>
              <Typography.DisplayHeader>
                The Future of EdTech
              </Typography.DisplayHeader>
            </div>

            <div>
              <Typography.Caption className="mb-2">Section Title</Typography.Caption>
              <Typography.SectionTitle>
                Build Your Career in Technology
              </Typography.SectionTitle>
            </div>

            <div>
              <Typography.Caption className="mb-2">Subsection Title</Typography.Caption>
              <Typography.SubsectionTitle>
                Learn from Industry Experts
              </Typography.SubsectionTitle>
            </div>

            <div>
              <Typography.Caption className="mb-2">Body Text</Typography.Caption>
              <Typography.BodyText>
                Our comprehensive courses and programs are designed to help you master in-demand 
                skills and advance your career in the technology industry. With expert instructors, 
                hands-on projects, and flexible learning options, we make it easy to achieve your goals.
              </Typography.BodyText>
            </div>

            <div>
              <Typography.Caption className="mb-2">Caption Text</Typography.Caption>
              <Typography.Caption>
                Caption text for additional details and metadata
              </Typography.Caption>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-20 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Button Components</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Primary, Secondary, and Tertiary buttons with multiple states
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Buttons */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Primary Buttons</h3>
              <div className="space-y-4">
                <div>
                  <Typography.Caption className="mb-2">Default</Typography.Caption>
                  <PrimaryButton>
                    Enroll Now
                    <Icons.ArrowRight className="ml-2" size={20} />
                  </PrimaryButton>
                </div>
                <div>
                  <Typography.Caption className="mb-2">Loading State</Typography.Caption>
                  <PrimaryButton loading>
                    Processing...
                  </PrimaryButton>
                </div>
                <div>
                  <Typography.Caption className="mb-2">Disabled State</Typography.Caption>
                  <PrimaryButton disabled>
                    Not Available
                  </PrimaryButton>
                </div>
                <div>
                  <Typography.Caption className="mb-2">Full Width</Typography.Caption>
                  <PrimaryButton fullWidth>
                    Get Started
                  </PrimaryButton>
                </div>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Secondary Buttons</h3>
              <div className="space-y-4">
                <div>
                  <Typography.Caption className="mb-2">Default Glass</Typography.Caption>
                  <SecondaryButton>
                    Learn More
                  </SecondaryButton>
                </div>
                <div>
                  <Typography.Caption className="mb-2">Loading State</Typography.Caption>
                  <SecondaryButton loading>
                    Loading...
                  </SecondaryButton>
                </div>
                <div>
                  <Typography.Caption className="mb-2">Disabled State</Typography.Caption>
                  <SecondaryButton disabled>
                    Coming Soon
                  </SecondaryButton>
                </div>
                <div>
                  <Typography.Caption className="mb-2">Tertiary (Text Only)</Typography.Caption>
                  <TertiaryButton>
                    Read More
                    <Icons.ArrowRight className="ml-2" size={18} />
                  </TertiaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Input Fields Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Input Components</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Standard and glass input fields with various states
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Inputs */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Standard Inputs</h3>
              <div className="space-y-6">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  value={inputValue}
                  onChange={setInputValue}
                  helperText="We'll never share your information"
                  required
                />
                
                <Input
                  label="Email Address"
                  placeholder="you@example.com"
                  value={successInput}
                  onChange={setSuccessInput}
                  type="email"
                  success
                />

                <Input
                  label="Phone Number"
                  placeholder="+1 234 567 8900"
                  value={errorInput}
                  onChange={setErrorInput}
                  error="Please enter a valid phone number"
                />

                <Input
                  label="Disabled Field"
                  placeholder="Not editable"
                  value="Disabled"
                  onChange={() => {}}
                  disabled
                />
              </div>
            </div>

            {/* Glass Inputs & Text Area */}
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Glass Inputs</h3>
              <div className="space-y-6">
                <GlassInput
                  label="Email Address"
                  placeholder="Enter your email"
                  value={emailValue}
                  onChange={setEmailValue}
                  type="email"
                  required
                />

                <TextArea
                  label="Message"
                  placeholder="Tell us about yourself..."
                  value={textAreaValue}
                  onChange={setTextAreaValue}
                  rows={5}
                  helperText="Minimum 10 characters"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Components */}
      <section className="py-20 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Badge Components</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Category, outline, and tag badges in pill style
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <Typography.Caption className="mb-3 block">Solid Badges</Typography.Caption>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="solid">Featured</Badge>
                  <Badge variant="solid">Best Seller</Badge>
                  <Badge variant="solid">New</Badge>
                  <Badge variant="solid">Premium</Badge>
                </div>
              </div>

              <div>
                <Typography.Caption className="mb-3 block">Outline Badges</Typography.Caption>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline">Beginner</Badge>
                  <Badge variant="outline">Intermediate</Badge>
                  <Badge variant="outline">Advanced</Badge>
                  <Badge variant="outline">Expert</Badge>
                </div>
              </div>

              <div>
                <Typography.Caption className="mb-3 block">Tag Badges</Typography.Caption>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="tag">Online</Badge>
                  <Badge variant="tag">In-Person</Badge>
                  <Badge variant="tag">Hybrid</Badge>
                  <Badge variant="tag">Self-Paced</Badge>
                  <Badge variant="tag">Live Sessions</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Components */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Card Components</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Course, Program, Event, and Blog cards with hover effects
            </p>
          </div>

          {/* Course Cards */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#003C78] mb-8">Course Cards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CourseCard
                id={1}
                title="Full Stack Web Development"
                description="Master modern web development with React, Node.js, and cloud deployment"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                duration="12 weeks"
                level="Intermediate"
                price="$599"
              />
              <CourseCard
                id={2}
                title="Data Science & Machine Learning"
                description="Learn data analysis, visualization, and ML algorithms from scratch"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                duration="16 weeks"
                level="Advanced"
                price="$799"
              />
            </div>
          </div>

          {/* Program Card */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#003C78] mb-8">Program Card (Horizontal)</h3>
            <ProgramCard
              id={1}
              title="Professional Web Development Bootcamp"
              description="A comprehensive 6-month program covering frontend, backend, databases, and deployment. Build real-world projects and launch your tech career."
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              duration="6 months"
              modules={12}
            />
          </div>

          {/* Event Cards */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#003C78] mb-8">Event Cards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard
                id={1}
                title="Tech Innovation Summit 2025"
                description="Join industry leaders discussing the future of AI and technology"
                image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
                date="Mar 15"
                time="9:00 AM - 5:00 PM"
                location="Virtual + Live"
              />
              <EventCard
                id={2}
                title="Career Fair & Networking"
                description="Connect with top tech companies and explore career opportunities"
                image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
                date="Apr 20"
                time="2:00 PM - 6:00 PM"
                location="Silicon Valley, CA"
              />
            </div>
          </div>

          {/* Blog Cards */}
          <div>
            <h3 className="text-3xl font-bold text-[#003C78] mb-8">Blog Cards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                id={1}
                title="The Future of AI in Education"
                excerpt="Exploring how artificial intelligence is transforming the learning landscape"
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                category="Technology"
                author="Dr. Sarah Johnson"
                date="Dec 8, 2024"
                readTime="8 min read"
              />
              <BlogCard
                id={2}
                title="Top Programming Languages 2025"
                excerpt="Stay ahead by mastering these in-demand programming languages"
                image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800"
                category="Career"
                author="Michael Chen"
                date="Dec 5, 2024"
                readTime="6 min read"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Component */}
      <section className="py-20 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Accordion Component</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Expandable sections for FAQs, curriculum, and event details
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Accordion */}
            <div>
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Standard Style</h3>
              <Accordion
                items={[
                  {
                    title: 'What are the prerequisites?',
                    content: 'Basic understanding of programming concepts is helpful but not required. We start from the fundamentals and build up to advanced topics.',
                  },
                  {
                    title: 'How long is the program?',
                    content: 'The program duration varies from 12 to 24 weeks depending on the course. You can learn at your own pace with lifetime access to materials.',
                  },
                  {
                    title: 'Do I get a certificate?',
                    content: 'Yes! Upon successful completion, you receive a verified certificate that you can share on LinkedIn and your resume.',
                  },
                ]}
              />
            </div>

            {/* Glass Accordion */}
            <div>
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Glass Style</h3>
              <Accordion
                glassBg
                items={[
                  {
                    title: 'Is financial aid available?',
                    content: 'We offer flexible payment plans and scholarships for qualified students. Contact our admissions team to learn more.',
                  },
                  {
                    title: 'What kind of support do I get?',
                    content: '24/7 access to our community, weekly live Q&A sessions with instructors, and dedicated mentorship throughout your journey.',
                  },
                  {
                    title: 'Can I learn at my own pace?',
                    content: 'Absolutely! All courses are self-paced with suggested timelines. You have lifetime access to all course materials.',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Testimonial Components</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Hero testimonials and card grid layouts
            </p>
          </div>

          {/* Hero Testimonial */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#003C78] mb-8">Hero Testimonial</h3>
            <TestimonialCard
              variant="hero"
              name="Sarah Williams"
              role="Senior Software Engineer"
              company="Google"
              image="https://i.pravatar.cc/200?img=5"
              rating={5}
              text="This program completely transformed my career. The hands-on projects and expert mentorship gave me the confidence to land my dream job at Google. Highly recommended!"
            />
          </div>

          {/* Grid Testimonials */}
          <div>
            <h3 className="text-3xl font-bold text-[#003C78] mb-8">Card Grid</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="John Anderson"
                role="Product Manager"
                company="Microsoft"
                image="https://i.pravatar.cc/150?img=12"
                rating={5}
                text="Amazing learning experience! The instructors are top-notch and the curriculum is perfectly structured."
              />
              <TestimonialCard
                name="Emily Chen"
                role="UX Designer"
                company="Adobe"
                image="https://i.pravatar.cc/150?img=9"
                rating={5}
                text="Best investment in my career. I learned practical skills that I use every single day at work."
              />
              <TestimonialCard
                name="Michael Brown"
                role="Data Scientist"
                company="Amazon"
                image="https://i.pravatar.cc/150?img=14"
                rating={5}
                text="The project-based approach helped me build a strong portfolio. Got multiple job offers after graduating!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banners */}
      <section className="py-20 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">CTA Banner Components</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Full-width and half-width call-to-action banners
            </p>
          </div>

          <div className="space-y-8">
            {/* Full Width CTA */}
            <div>
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Full Width Banner</h3>
              <CTABanner
                title="Ready to Start Your Journey?"
                description="Join thousands of students who have transformed their careers with Nipix Technology"
                buttonText="Enroll Today"
                buttonHref="/contact"
              />
            </div>

            {/* Half Width CTA */}
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Half Width Banner</h3>
              <CTABanner
                variant="half"
                title="Get Started Today"
                description="Transform your career with our industry-leading programs"
                buttonText="View Courses"
                buttonHref="/courses"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Icon Set */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Icon Library</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Comprehensive icon set with consistent 24px sizing and Deep Blue stroke
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Social Icons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-[#003C78] mb-4">Social</h3>
              <div className="flex flex-wrap gap-4">
                <Icons.Linkedin className="text-[#003C78]" size={24} />
                <Icons.Twitter className="text-[#003C78]" size={24} />
                <Icons.Facebook className="text-[#003C78]" size={24} />
                <Icons.Instagram className="text-[#003C78]" size={24} />
              </div>
            </div>

            {/* Course Icons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-[#003C78] mb-4">Courses</h3>
              <div className="flex flex-wrap gap-4">
                <Icons.Code className="text-[#003C78]" size={24} />
                <Icons.Palette className="text-[#003C78]" size={24} />
                <Icons.Cloud className="text-[#003C78]" size={24} />
                <Icons.Brain className="text-[#003C78]" size={24} />
              </div>
            </div>

            {/* Event Icons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-[#003C78] mb-4">Events</h3>
              <div className="flex flex-wrap gap-4">
                <Icons.Calendar className="text-[#003C78]" size={24} />
                <Icons.MapPin className="text-[#003C78]" size={24} />
                <Icons.Clock className="text-[#003C78]" size={24} />
                <Icons.Users className="text-[#003C78]" size={24} />
              </div>
            </div>

            {/* UI Icons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-[#003C78] mb-4">UI</h3>
              <div className="flex flex-wrap gap-4">
                <Icons.Menu className="text-[#003C78]" size={24} />
                <Icons.Search className="text-[#003C78]" size={24} />
                <Icons.Check className="text-[#003C78]" size={24} />
                <Icons.X className="text-[#003C78]" size={24} />
                <Icons.ArrowRight className="text-[#003C78]" size={24} />
                <Icons.Star className="text-[#003C78]" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing & Animation Tokens */}
      <section className="py-20 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#003C78] mb-4">Design System Tokens</h2>
            <p className="text-[#1A1A1A] opacity-70">
              Spacing scale and animation guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Spacing System */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Spacing Scale</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[#003C78] font-mono text-sm">xs (8px)</div>
                  <div className="h-8 bg-[#0A66C2]" style={{ width: '8px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[#003C78] font-mono text-sm">sm (12px)</div>
                  <div className="h-8 bg-[#0A66C2]" style={{ width: '12px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[#003C78] font-mono text-sm">md (16px)</div>
                  <div className="h-8 bg-[#0A66C2]" style={{ width: '16px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[#003C78] font-mono text-sm">lg (24px)</div>
                  <div className="h-8 bg-[#0A66C2]" style={{ width: '24px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[#003C78] font-mono text-sm">xl (32px)</div>
                  <div className="h-8 bg-[#0A66C2]" style={{ width: '32px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[#003C78] font-mono text-sm">2xl (48px)</div>
                  <div className="h-8 bg-[#0A66C2]" style={{ width: '48px' }}></div>
                </div>
              </div>
            </div>

            {/* Animation Tokens */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003C78] mb-6">Animation Tokens</h3>
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-[#E8F3FF] rounded-xl">
                  <div className="font-bold text-[#003C78] mb-1">fade-up</div>
                  <div className="text-[#1A1A1A] opacity-70">Duration: 600ms | Easing: cubic-bezier(.22,.8,.36,1)</div>
                </div>
                <div className="p-4 bg-[#E8F3FF] rounded-xl">
                  <div className="font-bold text-[#003C78] mb-1">slide-left</div>
                  <div className="text-[#1A1A1A] opacity-70">Duration: 500ms | Easing: cubic-bezier(.22,.8,.36,1)</div>
                </div>
                <div className="p-4 bg-[#E8F3FF] rounded-xl">
                  <div className="font-bold text-[#003C78] mb-1">slide-right</div>
                  <div className="text-[#1A1A1A] opacity-70">Duration: 500ms | Easing: cubic-bezier(.22,.8,.36,1)</div>
                </div>
                <div className="p-4 bg-[#E8F3FF] rounded-xl">
                  <div className="font-bold text-[#003C78] mb-1">float</div>
                  <div className="text-[#1A1A1A] opacity-70">Duration: 3000ms | Easing: ease-in-out</div>
                </div>
                <div className="p-4 bg-[#E8F3FF] rounded-xl">
                  <div className="font-bold text-[#003C78] mb-1">hover-lift</div>
                  <div className="text-[#1A1A1A] opacity-70">Duration: 300ms | Transform: translateY(-8px)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
