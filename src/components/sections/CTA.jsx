import Container from '../layout/Container';
import wppIcon from '../../assets/wpp-icon.png';

const CTA = ({ data, onContactClick }) => {
  const buttonClasses = 'px-10 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 bg-amber-500 hover:bg-amber-600 text-slate-900 inline-flex items-center gap-2 cursor-pointer border-none';
  const whatsappButtonClasses = 'px-10 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 text-white inline-flex items-center gap-2';
  const whatsappUrl = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <section id="cta" className="py-20 sm:py-32 bg-slate-900">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onContactClick} className={buttonClasses}>
              {data.button}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1eaa54'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
              title="Chat on WhatsApp"
            >
              <img src={wppIcon} alt="WhatsApp" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
