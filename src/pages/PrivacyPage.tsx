import React from 'react';
import { Breadcrumb } from '../components/SharedComponents';
import { Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react';

export function PrivacyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy' },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb */}
      <section className="sticky top-20 z-40 glass-panel py-4 border-b border-white/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-12">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#E8F3FF] to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0A66C2] rounded-2xl mb-6">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#003C78] mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Last updated: December 10, 2024
            </p>
            <p className="text-lg text-[#1A1A1A] opacity-70 mt-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center glass-panel rounded-2xl p-6">
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="text-[#0A66C2]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#003C78] mb-2">Secure & Encrypted</h3>
              <p className="text-[#1A1A1A] opacity-70">
                Your data is encrypted and securely stored
              </p>
            </div>

            <div className="text-center glass-panel rounded-2xl p-6">
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="text-[#0A66C2]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#003C78] mb-2">You Control Your Data</h3>
              <p className="text-[#1A1A1A] opacity-70">
                Access, update, or delete your information anytime
              </p>
            </div>

            <div className="text-center glass-panel rounded-2xl p-6">
              <div className="w-16 h-16 bg-[#E8F3FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="text-[#0A66C2]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#003C78] mb-2">Transparent</h3>
              <p className="text-[#1A1A1A] opacity-70">
                Clear information about data usage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <div className="flex items-start mb-4">
                <Database className="text-[#0A66C2] mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#003C78] mb-6">1. Information We Collect</h2>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#003C78] mb-4">Personal Information</h3>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A] mb-6">
                <li>Name, email address, and phone number</li>
                <li>Account credentials (username and password)</li>
                <li>Payment and billing information</li>
                <li>Profile information and preferences</li>
                <li>Course progress and performance data</li>
                <li>Communications with us</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#003C78] mb-4">Automatically Collected Information</h3>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                When you use our Service, we automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A]">
                <li>Device information (type, operating system, browser)</li>
                <li>IP address and location data</li>
                <li>Usage data (pages visited, time spent, features used)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">2. How We Use Your Information</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A]">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about courses, programs, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Personalize and improve your experience</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">3. Information Sharing and Disclosure</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A] mb-6">
                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Service providers:</strong> With vendors who perform services on our behalf</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect rights</li>
                <li><strong>Business transfers:</strong> In connection with mergers or acquisitions</li>
              </ul>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                All third-party service providers are required to maintain the confidentiality and security of your information.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">4. Data Security</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We take the security of your personal information seriously and implement appropriate technical 
                and organizational measures to protect it, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A] mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your personal information, 
                we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">5. Your Rights and Choices</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-[#1A1A1A]">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data portability:</strong> Receive your data in a structured format</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent for data processing where applicable</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">6. Cookies and Tracking Technologies</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A]">
                <li><strong>Essential cookies:</strong> Required for the Service to function</li>
                <li><strong>Analytics cookies:</strong> Help us understand how you use our Service</li>
                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">7. Data Retention</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill 
                the purposes outlined in this Privacy Policy. We will also retain and use your information as 
                necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                When you delete your account, we will delete your personal information within 30 days, except 
                for information we are required to retain for legal or business purposes.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">8. Children's Privacy</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us so we can delete it.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">9. Changes to This Privacy Policy</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this 
                Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-[#E8F3FF] to-white">
              <div className="flex items-start mb-4">
                <Mail className="text-[#0A66C2] mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#003C78] mb-6">10. Contact Us</h2>
                </div>
              </div>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <ul className="space-y-3 text-lg text-[#1A1A1A]">
                <li className="flex items-center">
                  <Mail className="mr-3 text-[#0A66C2]" size={20} />
                  <a href="mailto:privacy@nipix.tech" className="text-[#0A66C2] hover:text-[#003C78] font-semibold">
                    privacy@nipix.tech
                  </a>
                </li>
                <li>Phone: +1 234 567 8900</li>
                <li>Address: Silicon Valley, CA, United States</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
