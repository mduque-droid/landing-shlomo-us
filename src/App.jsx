import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import siteData from './constants/siteData';
import { scrollToSection } from './utils/scroll';
import useUiModals from './hooks/useUiModals';
import serviceModals from './components/atomic/serviceModals';
import ErrorBoundary from './components/shared/ErrorBoundary';
import MarcoDuquePage from './pages/MarcoDuque';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Features from './components/sections/Features';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import LegalModal from './components/atomic/LegalModal';
import ContactFormModal from './components/sections/ContactFormModal';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/marco-duque" element={<MarcoDuquePage />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </ErrorBoundary>
  );
}

function MainLayout() {
  const { state, actions } = useUiModals();

  const legalContent = state.legalModal ? siteData.legal[state.legalModal] : null;
  const ActiveServiceModal = state.serviceModal ? serviceModals[state.serviceModal] : null;

  return (
    <div className="min-h-screen bg-paper">
      <Header
        navigation={siteData.navigation}
        onCTAClick={() => scrollToSection('#cta')}
      />
      <Hero
        data={siteData.hero}
        onPrimaryClick={() => scrollToSection('#cta')}
        onSecondaryClick={() => scrollToSection('#portfolio')}
      />
      <Services data={siteData} onShowServiceModal={actions.openService} />
      <Portfolio data={siteData} />
      <Features data={siteData} />
      <CTA data={siteData.cta} onContactClick={actions.openContact} />
      <Footer
        company={siteData.company}
        footer={siteData.footer}
        onLegalLinkClick={actions.openLegal}
        onContactClick={actions.openContact}
      />

      {legalContent && (
        <LegalModal
          isOpen={state.legalModal !== null}
          onClose={actions.closeLegal}
          title={legalContent.title}
          content={legalContent.content}
        />
      )}

      <ContactFormModal
        isOpen={state.contactOpen}
        onClose={actions.closeContact}
        pgpUrl={siteData.company.pgpUrl}
      />

      {ActiveServiceModal && (
        <Suspense fallback={null}>
          <ActiveServiceModal isOpen onClose={actions.closeService} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
