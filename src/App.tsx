import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ComponentShowcasePage } from './pages/ComponentShowcasePage';
import { InternshipsPage } from './pages/InternshipsPage';
import { InternshipDetailPage } from './pages/InternshipDetailPage';
import { VACPage } from './pages/VACPage';
import { VACDetailPage } from './pages/VACDetailPage';
import { SeminarsPage } from './pages/SeminarsPage';
import { SeminarDetailPage } from './pages/SeminarDetailPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { WorkshopDetailPage } from './pages/WorkshopDetailPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import CertificateVerificationPage from './pages/CertificateVerificationPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/program/:id" element={<ProgramDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/internship/:id" element={<InternshipDetailPage />} />
          <Route path="/verify" element={<CertificateVerificationPage />} />
          <Route path="/vac" element={<VACPage />} />
          <Route path="/programs/vac" element={<VACPage />} />
          <Route path="/programs/vac/:domain" element={<VACDetailPage />} />
          <Route path="/seminars" element={<SeminarsPage />} />
          <Route path="/programs/seminars" element={<SeminarsPage />} />
          <Route path="/seminar/:slug" element={<SeminarDetailPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/programs/workshops" element={<WorkshopsPage />} />
          <Route path="/workshop/:slug" element={<WorkshopDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/components" element={<ComponentShowcasePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}