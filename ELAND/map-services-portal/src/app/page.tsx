'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import About from '@/components/About';
import MapSection from '@/components/MapSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Approach />
      <About />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  );
}
