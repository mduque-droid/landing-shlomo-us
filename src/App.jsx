import siteData from './constants/siteData';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Features from './components/sections/Features';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
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
      <Services data={siteData} />
      <Portfolio data={siteData} />
      <Features data={siteData} />
      <CTA data={siteData.cta} />
      <Footer company={siteData.company} footer={siteData.footer} />
    </div>
  );
}

export default App;
