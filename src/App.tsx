/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import DigitalService from './components/DigitalService';
import Faq from './components/Faq';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import VirtualAssistant from './components/VirtualAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100 flex flex-col font-sans selection:bg-[#C9A227]/30 selection:text-amber-200">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <PracticeAreas />
        <DigitalService />
        <Faq />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Virtual Assistant with Human Avatar */}
      <VirtualAssistant />

      {/* Persistent Floating WhatsApp Call-to-Action */}
      <FloatingWhatsApp />
    </div>
  );
}
