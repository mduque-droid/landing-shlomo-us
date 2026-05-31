import Container from './Container';
import Navigation from './Navigation';
import Button from '../atomic/Button';

const Header = ({ company, navigation, onCTAClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-50 border-b border-gray-200">
      <Container className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-slate-900 hidden sm:block">{company.name}</span>
        </div>
        <Navigation items={navigation} />
        <Button size="sm" onClick={onCTAClick}>
          Contacto
        </Button>
      </Container>
    </header>
  );
};

export default Header;
