import { useState } from 'react';
import siteData from './constants/siteData';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Features from './components/sections/Features';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import LegalModal from './components/atomic/LegalModal';
import MigrationModal from './components/atomic/MigrationModal';
import EngineeringModal from './components/atomic/EngineeringModal';
import ComplianceModal from './components/atomic/ComplianceModal';
import ContactFormModal from './components/sections/ContactFormModal';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleHeroClick = () => {
    const ctaSection = document.querySelector('#cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeaderCTA = () => {
    const ctaSection = document.querySelector('#cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegalModal = (type) => {
    setActiveModal(type);
  };

  const handleCloseLegalModal = () => {
    setActiveModal(null);
  };

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  const handleOpenServiceModal = (serviceId) => {
    setActiveServiceModal(serviceId);
  };

  const handleCloseServiceModal = () => {
    setActiveServiceModal(null);
  };

  const modalContent = activeModal === 'privacy'
    ? siteData.legal.privacy
    : activeModal === 'terms'
    ? siteData.legal.terms
    : null;

  return (
    <div className="bg-slate-50">
      <Header
        company={siteData.company}
        navigation={siteData.navigation}
        onCTAClick={handleHeaderCTA}
      />
      <Hero
        data={siteData.hero}
        onPrimaryClick={handleHeroClick}
        onSecondaryClick={handlePortfolioClick}
      />
      <Services data={siteData} onShowServiceModal={handleOpenServiceModal} />
      <Portfolio data={siteData} />
      <Features data={siteData} />
      <CTA data={siteData.cta} onContactClick={handleOpenContactForm} />
      <Footer
        company={siteData.company}
        footer={siteData.footer}
        onLegalLinkClick={handleOpenLegalModal}
        ctaData={siteData.cta}
      />

      {modalContent && (
        <LegalModal
          isOpen={activeModal !== null}
          onClose={handleCloseLegalModal}
          title={modalContent.title}
          content={modalContent.content}
        />
      )}

      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
        pgpUrl="/.well-known/pgp-public-key.asc"
        company={siteData.company}
      />

      <EngineeringModal
        isOpen={activeServiceModal === 'custom-engineering'}
        onClose={handleCloseServiceModal}
      />

      <ComplianceModal
        isOpen={activeServiceModal === 'compliance'}
        onClose={handleCloseServiceModal}
      />

      <MigrationModal
        isOpen={activeServiceModal === 'zero-downtime'}
        onClose={handleCloseServiceModal}
      />
    </div>
  );
}

export default App;
