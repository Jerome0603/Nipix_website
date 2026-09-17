import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// Import all required icons from lucide-react
import { 
  Clock,
  MapPin,
  Users,
  Calendar,
  Briefcase,
  Award,
  ArrowRight,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { 
  //BannerSection, 
  //HighlightsSection, 
  CertificatePreview,
  RegistrationForm,
  Testimonials,
  FAQBlock
} from '../components/SharedComponents';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Breadcrumb, Input } from '../components/ComponentLibrary';
import { supabase } from '../lib/supabase';
import { CourseSkeleton } from '../components/CourseSkeleton';

export function InternshipDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [internship, setInternship] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const hasItems = (arr?: any[]) => Array.isArray(arr) && arr.length > 0;

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      college: "",
      message: "",
    });

  useEffect(() => {
    const fetchInternship = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from('internships')
        .select(`
          *,
          internship_skills(skill),
          internship_responsibilities(responsibility, sort_order),
          internship_requirements(requirement),
          internship_benefits(benefit, sort_order),
          internship_testimonials(*),
          internship_faqs(*)
        `)
        .eq('id', id)
        .maybeSingle();
        console.log("Internship Data:", data);

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setInternship(data);
      setLoading(false);
    };

    fetchInternship();
  }, [id]);

  if (loading) return <CourseSkeleton />;
  if (!internship) { return <div className="pt-20 text-center">Internship not found</div>;}    

    const toggleModule = (id: number) => {
      setOpenModule(openModule === id ? null : id);
    };
  
    const toggleFaq = (id: number) => {
      setOpenFaq(openFaq === id ? null : id);
    };
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleChange = (e: { target: { name: string; value: string } }) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const { error } = await supabase.from("registrations").insert({
        registration_type: "internship",
        intership_id: internship.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || null,
        status: "pending",
        extra_data: {
          program_title: internship.title,
          college_name: formData.college,
        },
      });

      if (error) {
        console.error(error);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);

      alert('Registration successful 🎉');
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          message: '',
        });
        setIsSubmitted(true);
    };

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Internship', href: '/internships'},
          { label: internship.title },
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF] relative overflow-hidden">
        {/* Parallax Shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#0A66C2] rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#007DFF] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1.2s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="flex gap-3 mb-4">
                <span className="px-4 py-2 bg-[#0A66C2] text-white rounded-full text-sm font-semibold">
                  {internship.type}
                </span>
                {internship.stipend && (
                <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                  {internship.stipend.split('-')[0].trim()}
                </span>
                )}
              </div>

              <div className="flex items-center text-[#0A66C2] mb-4">
                <Briefcase size={20} className="mr-2" />
                <span className="font-semibold">{internship.company}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#007DFF] mb-6 leading-tight">
                {internship.title}
              </h1>

              <p className="text-2xl text-[#1A1A1A] opacity-80 mb-8">
                {internship.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass-panel p-4 rounded-xl">
                  <Clock className="text-[#0A66C2] mb-2" size={24} />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Duration</div>
                  <div className="text-[#007DFF] font-semibold">{internship.duration}</div>
                </div>

                <div className="glass-panel p-4 rounded-xl">
                  <Users className="text-[#0A66C2] mb-2" size={24} />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Openings</div>
                  <div className="text-[#007DFF] font-semibold">{internship.openings} positions</div>
                </div>

                {/*<div className="glass-panel p-4 rounded-xl">
                  <Calendar className="text-[#0A66C2] mb-2" size={24} />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Start Date</div>
                  <div className="text-[#007DFF] font-semibold">{new Date(internship.start_date).toLocaleDateString()}</div>
                </div>*/}

                <div className="glass-panel p-4 rounded-xl">
                  <MapPin className="text-[#0A66C2] mb-2" size={24} />
                  <div className="text-sm text-[#1A1A1A] opacity-70">Location</div>
                  <div className="text-[#007DFF] font-semibold">{internship.type}</div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl">
                <div className="flex items-center">
                  <Calendar className="text-yellow-600 mr-2" size={20} />
                  <span className="text-yellow-800 font-semibold">
                    Application Deadline: {new Date(internship.deadline).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="animate-slide-left">
              <div className="glass-panel rounded-3xl p-4 shadow-2xl">
                <ImageWithFallback
                  src={internship.image_url}
                  alt={internship.title}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div className="animate-fade-up">
                <h2 className="text-4xl font-bold text-[#007DFF] mb-6">About This Internship</h2>
                <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6">
                  {internship.description}
                </p>
              </div>

              {/* Skills You'll Learn */}
              {hasItems(internship.skills) && internship.skills && (
              <div className="animate-fade-up">
                <h2 className="text-4xl font-bold text-[#007DFF] mb-6">Skills You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {internship.internship_skills?.map((item: any, index: number) => (
                    <div key={index} className="flex items-start glass-panel p-4 rounded-xl">
                      <CheckCircle className="text-[#0A66C2] mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#1A1A1A]">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Responsibilities */}
              {hasItems(internship.internship_responsibilities) && internship.internship_responsibilities && (
              <div className="animate-fade-up">
                <h2 className="text-4xl font-bold text-[#007DFF] mb-6">Your Responsibilities</h2>
                <div className="space-y-4">
                  {internship.internship_responsibilities!.map((item: any, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-lg text-[#1A1A1A] pt-1">{item.responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Requirements */}
              {hasItems(internship.internship_requirements) && internship.internship_requirements && (
              <div className="animate-fade-up">
                <h2 className="text-4xl font-bold text-[#007DFF] mb-6">Requirements</h2>
                <div className="bg-[#E8F3FF] rounded-2xl p-8">
                  <div className="space-y-4">
                    {internship.internship_requirements.map((req: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-[#0A66C2] mr-3 flex-shrink-0 mt-1" size={20} />
                        <span className="text-[#1A1A1A]">{req.requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              )}

              {/* Benefits */}
              {hasItems(internship.internship_benefits) && internship.internship_benefits && (
              <div className="animate-fade-up">
                <h2 className="text-4xl font-bold text-[#007DFF] mb-6">What You'll Get</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {internship.internship_benefits.map((benefit: any, index: number) => (
                    <div key={index} className="flex items-start bg-white rounded-xl p-6 soft-shadow">
                      <Award className="text-[#0A66C2] mr-4 flex-shrink-0" size={24} />
                      <span className="text-[#1A1A1A]">{benefit.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              )}
            </div>
            

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
            <RegistrationForm
              type="internship"
              referenceId={internship.id}
              itemName={internship.title}
            />
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Preview */}
      {internship.certificate_enabled && (
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <CertificatePreview
            title="Internship Completion Certificate"
            description="Receive a verified certificate and letter of recommendation upon successful completion"
          />
        </div>
      </section>
      )}

      {/* Testimonials */}
      {hasItems(internship.internship_testimonials) && internship.internship_testimonials && (
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <Testimonials testimonials={internship.internship_testimonials} />
        </div>
      </section>
      )}

      {/* FAQ */}
      {hasItems(internship.internship_faqs) && internship.internship_faqs && (
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <FAQBlock faqs={internship.internship_faqs} />
        </div>
      </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-[#007DFF] to-[#007DFF] rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Apply now and take the first step towards a successful tech career
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#registration"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#0A66C2] rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <Link
                  to="/internships"
                  className="inline-flex items-center justify-center px-10 py-4 glass-panel text-[#0A66C2] rounded-xl hover:shadow-xl transition-all duration-300 border-white/40 font-semibold text-lg"
                >
                  View All Internships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}