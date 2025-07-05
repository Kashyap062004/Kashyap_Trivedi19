import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Resume />
      <ContactForm />
      <Footer />
    </>
  );
}