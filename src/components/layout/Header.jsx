import Container from './Container';
import Navigation from './Navigation';
import Button from '../atomic/Button';
import logo from '../../assets/shlomo-logo.png';

const Header = ({ company, navigation, onCTAClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-50 border-b border-gray-200">
      <Container className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shlomo Logo" className="h-10 w-auto" />
          <span className="font-bold text-slate-900 hidden sm:block text-sm">{company.name}</span>
        </div>
        <Navigation items={navigation} />
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            🇺🇸
          </span>
          <Button size="sm" onClick={onCTAClick}>
            Contact
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
