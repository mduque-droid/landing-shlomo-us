import Container from '../layout/Container';
import Icon from '../atomic/Icon';
import logo from '../../assets/shlomo-logo.png';

const Footer = ({ company, footer, onLegalLinkClick }) => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shlomo Logo" className="h-8 w-auto" />
              <span className="font-bold text-white text-sm">{company.name}</span>
            </div>
            <p className="text-sm text-gray-400">{company.tagline}</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-600 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-600 transition-colors">
                  Why Shlomo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onLegalLinkClick(link.href)}
                    className="hover:text-cyan-600 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-cyan-600 transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-cyan-600 transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
                  <Icon name="external-link" size={18} />
                </a>
                <a href={company.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
                  <Icon name="external-link" size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-sm text-gray-400 text-center">
          <p>
            © {footer.year} {footer.copyright}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
