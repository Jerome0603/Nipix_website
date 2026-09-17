import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Award, Search, ArrowRight, ShieldCheck, Download, Share2 } from 'lucide-react';
import {supabase} from '../lib/supabase';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Mock Certificate Data
type Certificate = {
  certificate_id: string;
  student_name: string;
  course_name: string;
  issued_at: string;
  status: string;
  issued_by: string;
  certificate_file_path?: string; // New field for file path
};
  export default function CertificateVerificationPage() {
    const [certificateId, setCertificateId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [certificate, setCertificate] = useState<Certificate | null>(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleVerify = async () => {
      const input = certificateId.trim();

      // 1️⃣ Block empty submission
      if (!input) {
        setError("Certificate ID is required");
        setHasSubmitted(true);
        return;
      }

      setLoading(true);
      setError("");
      setCertificate(null);
      setHasSubmitted(true);

      // 2️⃣ DO NOT change casing – DB is case-sensitive
      const { data, error } = await supabase
        .from("certificates")
        .select(
          "certificate_id, student_name, course_name, issued_at, status, issued_by, certificate_file_path"
        )
        .eq("certificate_id", input)
        .single();

      setLoading(false);

      // 3️⃣ Handle invalid ID
      if (error || !data) {
        setError("Invalid Certificate ID");
        return;
      }

      // 4️⃣ Optional verification gate
      if (data.status !== "Verified") {
        setError("Certificate exists but is not verified yet");
        return;
      }

      // 5️⃣ Success
      setCertificate(data);
    };

    const downloadCertificate = async (cert: any) => {
      console.log("Download clicked", cert);

      if (!cert || !cert.certificate_file_path) {
        alert("Certificate file not available");
        return;
      }

      const { data, error } = await supabase.storage
        .from("certificates")
        .createSignedUrl(cert.certificate_file_path, 60, {download: true});

      if (error) {
        console.error("Signed URL error:", error);
        alert("Download failed");
        return;
      }

      const link = document.createElement("a");
      link.href = data.signedUrl;
      link.download = cert.certificate_file_path;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };


  return (
    <div className="relative py-24 ">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#087FF8] opacity-[0.03] blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0CA2FF] opacity-[0.03] blur-[120px] -z-10" />

        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Certificate <span className="text-[#007DFF]">Verification</span>
              </h1>
              <p className="text-xl text-[#5A5A5A]">
                Enter your Certificate ID to verify authenticity.
              </p>
            </motion.div>
          </div>

          {/* Verification Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 lg:p-12 rounded-2xl shadow-2xl relative overflow-hidden mb-12"
          >
            <form onSubmit={(e) => { e.preventDefault(); handleVerify();}} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="certId" className="block text-sm font-bold text-[#1A1A1A] uppercase tracking-wide ml-1">
                  Certificate ID
                </label>
                <div className="relative">
                  <input
                    id="certId"
                    type="text"
                    value={certificateId}
                    onChange={(e) => {setCertificateId(e.target.value.toUpperCase()); setHasSubmitted(false); setError(""); setCertificate(null);}}
                    placeholder="Enter Certificate ID (e.g.,NIPIX23AB91)"
                    className={`w-full px-6 py-5 bg-white border-2 rounded-2xl text-lg font-medium transition-all duration-300 outline-none
                      ${error 
                        ? 'border-red-400 focus:border-red-500 bg-red-50/10' 
                        : 'border-[#D9EBFF] focus:border-[#087FF8] focus:ring-4 focus:ring-[#087FF8]/10'
                      }
                    `}
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#5A5A5A]/30">
                  </div>
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-red-500 text-sm font-semibold mt-2 ml-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-[#007DFF] text-white rounded-2xl font-bold text-lg hover:bg-[#066EE2] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#087FF8]/20 flex items-center justify-center gap-3 group disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Certificate
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Background Accent for form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#087FF8]/5 rounded-bl-full -z-10" />
          </motion.div>

          {/* Results Section */}
          <AnimatePresence mode="wait">
            {certificate && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className=" overflow-hidden shadow-2xl border-2 rounded-2xl border-green-500/20"
              >
                <div className="bg-green-500/10 px-8 py-4 flex items-center justify-between border-b border-green-500/20">
                  <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    Verified Certificate
                  </div>
                  <div className="text-green-600 font-mono text-xs">
                    AUTH-TOKEN: {Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                      <div>
                        <p className="text-sm font-bold text-[#5A5A5A] uppercase tracking-wide mb-1">Student Name</p>
                        <h3 className="text-2xl font-bold text-[#007DFF]">{certificate.student_name}</h3>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#5A5A5A] uppercase tracking-wide mb-1">Course / Program</p>
                        <h3 className="text-xl font-bold text-[#007DFF]">{certificate.course_name}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-bold text-[#5A5A5A] uppercase tracking-wide mb-1">Issue Date</p>
                          <p className="font-semibold text-[#1A1A1A]">{certificate.issued_at}</p>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#5A5A5A] uppercase tracking-wide mb-1">Certificate ID</p>
                          <p className="font-mono font-semibold text-[#007DFF]">{certificate.certificate_id}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#5A5A5A] uppercase tracking-wide mb-1">Issued By</p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#007DFF]">{certificate.issued_by}</span>
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-8 bg-white/50 rounded-3xl border border-[#D9EBFF] relative group">
                      <ImageWithFallback
                        src={'/src/assets/only logo.png'}
                        alt="Logo"
                        className="w-48 h-48 object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    {certificate && (
                      <button
                        type="button"
                        className="px-8 py-4 w-full bg-[#007DFF] text-white rounded-xl font-bold hover:bg-[#066EE2] transition-colors flex items-center gap-3 justify-center"
                        onClick={() => downloadCertificate(certificate)}
                      >
                        Download Certificate
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error State for Invalid ID */}
            {error && !loading && certificateId && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50 border-2 border-amber-200 p-8 rounded-[2rem] text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Certificate Not Found</h3>
                <p className="text-amber-800/80 mb-6 max-w-md mx-auto">
                  The Certificate ID <span className="font-mono font-bold">{certificateId}</span> could not be verified in our records. Please double-check the ID or contact support.
                </p>
                <button 
                  onClick={() => setCertificateId('')}
                  className="px-8 py-3 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors"
                >
                  Try Different ID
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      
      {/* Help Section */}
      <section className="bg-white py-20 mt-20 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Common Questions</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 text-left">
              <h4 className="font-bold text-[#087FF8] mb-2">Where is my ID?</h4>
              <p className="text-[#5A5A5A] text-sm">Your unique certificate ID is printed at the bottom right corner of your certificate document.</p>
            </div>
            <div className="p-6 text-left">
              <h4 className="font-bold text-[#087FF8] mb-2">Can't find your ID?</h4>
              <p className="text-[#5A5A5A] text-sm">If you've lost your certificate, contact our support team with your registered email to retrieve it.</p>
            </div>
            <div className="p-6 text-left">
              <h4 className="font-bold text-[#087FF8] mb-2">Is this official?</h4>
              <p className="text-[#5A5A5A] text-sm">Yes, this portal is the only official way to verify credentials issued by Nipix Technology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
