import React from 'react';
import { Breadcrumb } from '../components/SharedComponents';

export function TermsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Terms & Conditions' },
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
            <h1 className="text-5xl lg:text-6xl font-bold text-[#003C78] mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-[#1A1A1A] opacity-80">
              Last updated: December 10, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">1. Acceptance of Terms</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                By accessing and using Nipix Technology's website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of our website located at nipix.tech 
                (together or individually "Service") operated by Nipix Technology.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">2. Use License</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                Permission is granted to temporarily access the materials (information or software) on Nipix 
                Technology's website for personal, non-commercial transitory viewing only. This is the grant of 
                a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A]">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Nipix Technology's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">3. Course Enrollment and Payment</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                When you enroll in a course or program, you agree to pay the fees specified at the time of 
                enrollment. All fees are non-refundable except as expressly stated in our Refund Policy.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We reserve the right to change our fees at any time. If we change fees, we will provide notice 
                of the change on the Service at least 30 days in advance.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                You are responsible for all charges incurred under your account, including applicable taxes and 
                fees. You authorize us to charge your chosen payment method for the total amount of your order.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">4. User Accounts</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. Failure to do so constitutes a breach of the Terms, which may result 
                in immediate termination of your account on our Service.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for 
                any activities or actions under your password.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                You agree not to disclose your password to any third party. You must notify us immediately 
                upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">5. Intellectual Property</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of Nipix Technology and its licensors. The Service is protected by copyright, 
                trademark, and other laws of both the United States and foreign countries.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                Our trademarks and trade dress may not be used in connection with any product or service 
                without the prior written consent of Nipix Technology.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">6. Prohibited Uses</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[#1A1A1A]">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate Nipix Technology, an employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of Service</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">7. Limitation of Liability</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                In no event shall Nipix Technology, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible 
                losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">8. Termination</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We may terminate or suspend your account and bar access to Service immediately, without prior 
                notice or liability, under our sole discretion, for any reason whatsoever and without limitation, 
                including but not limited to a breach of Terms.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                All provisions of Terms which by their nature should survive termination shall survive 
                termination, including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity and limitations of liability.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">9. Changes to Terms</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days' notice prior to any new terms 
                taking effect.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                By continuing to access or use our Service after any revisions become effective, you agree to 
                be bound by the revised terms. If you do not agree to the new terms, you are no longer 
                authorized to use Service.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[#003C78] mb-6">10. Contact Us</h2>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="space-y-2 text-lg text-[#1A1A1A]">
                <li>Email: legal@nipix.tech</li>
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
