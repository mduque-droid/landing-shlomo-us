import Container from '../layout/Container';
import Button from '../atomic/Button';
import { useReveal } from '../../hooks/useReveal';

const Hero = ({ data, onPrimaryClick, onSecondaryClick }) => {
  const { ref, visible } = useReveal({ threshold: 0 });
  const step = (i) => ({ transitionDelay: `${i * 90}ms` });

  return (
    <section className="relative border-b border-line bg-paper">
      <Container className="py-24 sm:py-32 lg:py-40" ref={ref}>
        <div className="max-w-3xl">
          <div
            className={`reveal ${visible ? 'is-visible' : ''} flex items-center gap-2.5 text-sm text-muted`}
            style={step(0)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {data.badge}
          </div>

          <h1
            className={`reveal ${visible ? 'is-visible' : ''} mt-6 text-[2.75rem] leading-[1.05] tracking-[-0.03em] font-semibold text-ink sm:text-6xl lg:text-7xl`}
            style={step(1)}
          >
            {data.title} {data.titleHighlight}
          </h1>

          <p
            className={`reveal ${visible ? 'is-visible' : ''} mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl`}
            style={step(2)}
          >
            {data.subtitle}
          </p>

          <div
            className={`reveal ${visible ? 'is-visible' : ''} mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center`}
            style={step(3)}
          >
            <Button size="lg" onClick={onPrimaryClick}>
              {data.cta.primary}
            </Button>
            <button
              onClick={onSecondaryClick}
              className="group inline-flex items-center gap-1.5 text-base font-medium text-ink transition-colors duration-300 hover:text-accent"
            >
              {data.cta.secondary}
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        {data.stats && (
          <dl
            className={`reveal ${visible ? 'is-visible' : ''} mt-20 grid grid-cols-1 border-t border-line sm:mt-24 sm:grid-cols-3`}
            style={step(4)}
          >
            {data.stats.map((stat) => (
              <div
                key={stat.value}
                className="border-b border-line py-6 sm:border-b-0 sm:border-l sm:py-8 sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="text-3xl font-semibold tracking-[-0.02em] text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
};

export default Hero;
