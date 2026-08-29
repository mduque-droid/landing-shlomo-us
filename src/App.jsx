import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import siteData from './constants/siteData';
import { scrollToSection } from './utils/scroll';
import { buildWhatsAppUrl } from './utils/whatsapp';
import useLegalModal from './hooks/useLegalModal';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import ProblemSolution from './components/sections/ProblemSolution';
import Process from './components/sections/Process';
import Features from './components/sections/Features';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import LegalModal from './components/atomic/LegalModal';

// Route-level code-split: the résumé page ships in its own chunk.
const MarcoDuquePage = lazy(() => import('./pages/MarcoDuque'));

// Single WhatsApp link for every contact CTA on the page.
const whatsappUrl = buildWhatsAppUrl(
  siteData.company.whatsappNumber,
  siteData.company.whatsappMessage
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/marco-duque" element={<MarcoDuquePage />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

function MainLayout() {
  const { legalModal, openLegal, closeLegal } = useLegalModal();

  const legalContent = legalModal ? siteData.legal[legalModal] : null;

  return (
    <div className="min-h-screen bg-paper">
      <Header
        navigation={siteData.navigation}
        email={siteData.company.email}
        whatsappUrl={whatsappUrl}
      />
      <Hero
        data={siteData.hero}
        whatsappUrl={whatsappUrl}
        onSecondaryClick={() => scrollToSection('#services')}
      />
      <Services items={siteData.services} />
      <ProblemSolution items={siteData.problemSolution} />
      <Process items={siteData.process} />
      <Features items={siteData.features} />
      <CTA data={siteData.cta} whatsappUrl={whatsappUrl} />
      <Footer
        company={siteData.company}
        footer={siteData.footer}
        whatsappUrl={whatsappUrl}
        onLegalLinkClick={openLegal}
      />

      {legalContent && (
        <LegalModal
          isOpen={legalModal !== null}
          onClose={closeLegal}
          title={legalContent.title}
          content={legalContent.content}
        />
      )}
    </div>
  );
}

export default App;
