import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import SustainabilitySection from './components/SustainabilitySection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets and animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
  <BrowserRouter basename="/college-static-website-seven">
    <div className="relative overflow-hidden">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ParticleBackground />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <CoursesSection />
            <SustainabilitySection />
            <NewsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  </BrowserRouter>
);
}

export default App;