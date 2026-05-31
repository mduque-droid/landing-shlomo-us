import Container from '../layout/Container';
import Icon from '../atomic/Icon';

const Footer = ({ company, footer }) => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-white">{company.name}</span>
            </div>
            <p className="text-sm text-gray-400">{company.tagline}</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-600 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-600 transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-600 transition-colors">
                  Por Qué Shlomo
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
                  <a href={link.href} className="hover:text-cyan-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
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
