import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import LoadingScreen from '../components/LoadingScreen';
import CookieBanner from '../components/CookieBanner';
import FloatingContact from '../components/FloatingContact';
import { useLenis } from '../hooks/useLenis';

export const RootLayout: React.FC = () => {
  // Trigger kinetic smooth scroll initialization
  useLenis();

  const location = useLocation();

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Dynamic noise texture overlay */}
      <div className="noise-overlay" />

      {/* Top scroll progress indicator */}
      <ScrollProgress />

      {/* Lag-smoothed cursor trailing circles */}
      <CustomCursor />

      {/* Animated geometric preloader */}
      <LoadingScreen />

      {/* Glassmorphic header node */}
      <Navbar />

      {/* Main scrolling viewport */}
      <main className="flex-grow pt-24 pb-16 relative z-10 w-full">
        <Outlet />
      </main>

      {/* Floating actions menu */}
      <FloatingContact />

      {/* Privacy cookie consent box */}
      <CookieBanner />

      {/* Detailed site footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
