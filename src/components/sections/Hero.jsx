import Container from '../layout/Container';
import Button from '../atomic/Button';
import Badge from '../atomic/Badge';

const Hero = ({ data, onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="bg-slate-50 py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Badge color="amber" className="mb-6 inline-block">
            {data.badge}
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            {data.title}
            <span className="text-cyan-600"> {data.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onPrimaryClick}>
              {data.cta.primary}
            </Button>
            <Button size="lg" variant="secondary" onClick={onSecondaryClick}>
              {data.cta.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
