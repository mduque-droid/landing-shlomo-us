import Container from '../layout/Container';
import Button from '../atomic/Button';

const CTA = ({ data, onContactClick }) => {
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={onContactClick}>
              {data.button}
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-lg transition-colors duration-200 text-white font-semibold flex items-center gap-2"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1eaa54'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
              title="Chat on WhatsApp"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
