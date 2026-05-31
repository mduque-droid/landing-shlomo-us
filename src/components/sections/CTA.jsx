import Container from '../layout/Container';
import Button from '../atomic/Button';

const CTA = ({ data }) => {
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
          <a href={`mailto:${data.email}`}>
            <Button size="lg" onClick={() => {}}>
              {data.button}
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
