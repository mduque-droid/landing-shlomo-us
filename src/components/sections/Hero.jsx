import Container from '../layout/Container';
import Button from '../atomic/Button';
import Badge from '../atomic/Badge';
import AnimatedGalaxyBackground from '../shared/AnimatedGalaxyBackground';

const Hero = ({ data, onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-slate-950">
      <AnimatedGalaxyBackground />
      <Container>
        <div className="relative max-w-3xl mx-auto text-center z-10">
          <Badge color="amber" className="mb-6 inline-block">
            {data.badge}
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.6)' }}>
            {data.title}
            <span className="text-cyan-400"> {data.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
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
