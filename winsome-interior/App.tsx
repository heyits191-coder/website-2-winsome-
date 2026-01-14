
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Header scrolled={scrolled} />
      <SocialSidebar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20 lg:py-32">
          <About />
        </section>
        <section className="py-20 bg-slate-50">
          <WhyChooseUs />
        </section>
        <section id="services" className="py-20 lg:py-32">
          <Services />
        </section>
        <section id="process" className="py-20 lg:py-32 bg-slate-900 text-white">
          <HowItWorks />
        </section>
        <section id="projects" className="py-20 lg:py-32">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
