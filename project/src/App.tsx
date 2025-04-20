import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import OnboardingSection from './components/OnboardingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <div className="App bg-deep-red text-white">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <OnboardingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;