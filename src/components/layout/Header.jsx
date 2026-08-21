import Container from './Container';
import Navigation from './Navigation';
import Button from '../atomic/Button';
import logo from '../../assets/shlomo-logo.png';

const Header = ({ navigation, onCTAClick }) => {
  const handleHome = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" onClick={handleHome} aria-label="Shlomo Software Solutions — home">
          <img
            src={logo}
            alt="Shlomo Software Solutions"
            className="h-10 w-auto"
          />
        </a>

        <Navigation items={navigation} />

        <div className="flex items-center gap-5">
          <a
            href="#cta"
            onClick={onCTAClick}
            className="hidden sm:inline text-sm text-muted hover:text-ink transition-colors duration-300"
          >
            hello@shlomo.us
          </a>
          <Button size="sm" onClick={onCTAClick}>
            Contact
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
