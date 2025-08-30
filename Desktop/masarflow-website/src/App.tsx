import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import AboutUsPage from './components/AboutUsPage';
import OurWorkPage from './components/OurWorkPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <HeroSection />
            <ServicesSection />
            <WhyChooseSection />
            <TestimonialsSection />
            <Footer />
          </>
        } />
        <Route path="/privacy-policy" element={
          <>
            <Header />
            <PrivacyPolicy />
            <Footer />
          </>
        } />
        <Route path="/terms" element={
          <>
            <Header />
            <TermsOfService />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <Header />
            <ServicesPage />
            <Footer />
          </>
        } />
        <Route path="/contact-us" element={
          <>
            <Header />
            <ContactPage />
            <Footer />
          </>
        } />
        <Route path="/about-us" element={
          <>
            <Header />
            <AboutUsPage />
            <Footer />
          </>
        } />
        <Route path="/our-work" element={
          <>
            <Header />
            <OurWorkPage />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
