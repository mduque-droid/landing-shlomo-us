import Container from '../layout/Container';
import Icon from '../atomic/Icon';
import logo from '../../assets/shlomo-logo.png';
import wppIcon from '../../assets/wpp-icon.png';

const UptimeBadge = ({ uptime }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950 border border-emerald-900 rounded-full w-fit">
    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></span>
    <span className="text-xs font-semibold text-emerald-400">Systems: {uptime} Operational</span>
  </div>
);

const Footer = ({ company, footer, onLegalLinkClick, onContactClick }) => {
  const linkClasses = 'hover:text-cyan-400 transition-colors duration-200';

  return (
    <footer className="bg-slate-950 text-gray-300 py-16 border-t border-slate-900">
      <Container>
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand + Uptime */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Shlomo Logo" className="h-8 w-auto" />
              <span className="font-bold text-white text-sm">{company.name}</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">{company.tagline}</p>
            <UptimeBadge uptime={company.uptime} />
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className={linkClasses}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className={linkClasses}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#features" className={linkClasses}>
                  Why Shlomo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onLegalLinkClick(link.href)}
                    className={`${linkClasses} text-left cursor-pointer`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className={linkClasses}>
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone}`} className={linkClasses}>
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors duration-200 text-sm inline-block"
                >
                  Secure Contact
                </a>
              </li>
              <li className="flex gap-4 mt-6 pt-3 border-t border-slate-800">
                <a
                  href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <img src={wppIcon} alt="WhatsApp" className="w-5 h-5" />
                </a>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                  aria-label="LinkedIn"
                >
                  <Icon name="external-link" size={18} />
                </a>
                <a
                  href={company.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                  aria-label="GitHub"
                >
                  <Icon name="external-link" size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-900"></div>

        {/* Bottom */}
        <div className="pt-8 text-xs text-gray-500 text-center">
          <p>
            © {footer.year} {footer.copyright}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
