import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import RootLayout from './layouts/RootLayout';

// Lazy loading all pages for optimal code splitting & minimal bundle size
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const OurProcess = lazy(() => import('./pages/OurProcess'));
const Industries = lazy(() => import('./pages/Industries'));
const TechStack = lazy(() => import('./pages/TechStack'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Smooth, minimalist loading spinner for lazy-loaded route changes
const PageFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-transparent">
    <div className="w-8 h-8 rounded-full border-2 border-accent-blue border-t-transparent animate-spin" />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="why-choose-us" element={<WhyChooseUs />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="portfolio/:id" element={<ProjectDetail />} />
                <Route path="process" element={<OurProcess />} />
                <Route path="industries" element={<Industries />} />
                <Route path="tech-stack" element={<TechStack />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
export const mainApp = App;
