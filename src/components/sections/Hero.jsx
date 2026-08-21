import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import Button from '../atomic/Button';
import { useReveal } from '../../hooks/useReveal';

const Hero = ({ data, onPrimaryClick, onSecondaryClick }) => {
  const { ref, visible } = useReveal({ threshold: 0 });
  const auraRef = useRef(null);
  const step = (i) => ({ transitionDelay: `${i * 90}ms` });

  // Subtle vertical parallax on the aura: it trails the scroll at ~0.18x,
  // creating depth without motion sickness. Skipped for reduced-motion.
  useEffect(() => {
    const el = auraRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--aura-y', `${window.scrollY * 0.18}px`);
        frame = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      {/* Aurora backdrop — soft green blobs drifting behind the headline */}
      <div className="hero-aura" aria-hidden="true">
        <div className="hero-aura__inner" ref={auraRef}>
          <span className="aura-blob aura-blob--1" />
          <span className="aura-blob aura-blob--2" />
          <span className="aura-blob aura-blob--3" />
        </div>
      </div>

      <Container className="relative z-10 py-24 sm:py-32 lg:py-40" ref={ref}>
        <div className="max-w-3xl">
          <div
            className={`reveal ${visible ? 'is-visible' : ''} flex items-center gap-2.5 text-sm text-muted`}
            style={step(0)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {data.badge}
          </div>

          <h1
            className={`hero-title reveal ${visible ? 'is-visible' : ''} mt-6 text-[2.75rem] leading-[1.05] tracking-[-0.03em] font-semibold text-ink sm:text-6xl lg:text-7xl`}
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
          <dl className="mt-20 grid grid-cols-1 border-t border-line sm:mt-24 sm:grid-cols-3">
            {data.stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`reveal ${visible ? 'is-visible' : ''} group border-b border-line py-6 sm:border-b-0 sm:border-l sm:py-8 sm:pl-8 sm:first:border-l-0 sm:first:pl-0`}
                style={step(4 + i)}
              >
                {/* Accent tick that draws in on reveal */}
                <span
                  className={`block h-0.5 w-8 origin-left rounded-full bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    visible ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  style={{ transitionDelay: `${(5 + i) * 90}ms` }}
                />
                <dt className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-accent">
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
