import Container from '../layout/Container';
import logo from '../../assets/shlomo-logo.png';

const Footer = ({ company, footer, onLegalLinkClick, onContactClick }) => {
  const linkClasses = 'text-muted hover:text-ink transition-colors duration-300';
  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Shlomo" className="h-7 w-auto" />
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                Shlomo
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {company.tagline}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#services" className={linkClasses}>Services</a></li>
              <li><a href="#portfolio" className={linkClasses}>Portfolio</a></li>
              <li><a href="#features" className={linkClasses}>Why Shlomo</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
              Legal
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onLegalLinkClick(link.href)}
                    className={`${linkClasses} cursor-pointer text-left`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={`mailto:${company.email}`} className={linkClasses}>{company.email}</a></li>
              <li><a href={`tel:${company.phone}`} className={linkClasses}>{company.phone}</a></li>
              <li>
                <button
                  onClick={onContactClick}
                  className="mt-1 inline-flex cursor-pointer items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-hover"
                >
                  Secure contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {footer.year} {footer.copyright}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              LinkedIn
            </a>
            <a href={company.github} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              GitHub
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
