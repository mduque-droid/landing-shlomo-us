import Container from '../layout/Container';
import wppIcon from '../../assets/wpp-icon.png';

const CTA = ({ data, onContactClick }) => {
  const whatsappUrl = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <section id="cta" className="relative overflow-hidden bg-ink text-white">
      <div className="cta-glow" aria-hidden="true" />
      <Container className="relative z-10 py-24 sm:py-32">
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-accent">Contact</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl">
            {data.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {data.description}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              onClick={onContactClick}
              className="inline-flex cursor-pointer items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-hover"
            >
              {data.button}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/40 hover:text-white"
            >
              <img src={wppIcon} alt="" className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
