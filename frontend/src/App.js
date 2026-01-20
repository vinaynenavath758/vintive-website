import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import useScrollAnimation from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import BlogDetail from './pages/BlogDetail';

const HomePage = () => {
  useScrollAnimation();

  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
