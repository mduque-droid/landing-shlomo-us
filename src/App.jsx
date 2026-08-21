import { Routes, Route } from 'react-router-dom';
import siteData from './constants/siteData';
import { scrollToSection } from './utils/scroll';
import useUiModals from './hooks/useUiModals';
import ErrorBoundary from './components/shared/ErrorBoundary';
import MarcoDuquePage from './pages/MarcoDuque';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import ProblemSolution from './components/sections/ProblemSolution';
import Process from './components/sections/Process';
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

  return (
    <div className="min-h-screen bg-paper">
      <Header
        navigation={siteData.navigation}
        onCTAClick={actions.openContact}
      />
      <Hero
        data={siteData.hero}
        onPrimaryClick={actions.openContact}
        onSecondaryClick={() => scrollToSection('#services')}
      />
      <Services data={siteData} />
      <ProblemSolution data={siteData} />
      <Process data={siteData} />
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
        challenges={siteData.contactChallenges}
      />
    </div>
  );
}

export default App;
