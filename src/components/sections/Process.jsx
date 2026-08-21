import Container from '../layout/Container';
import { useReveal } from '../../hooks/useReveal';

const Step = ({ item, index, isLast }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Connector line to the next step (desktop only) */}
      {!isLast && (
        <span
          className="absolute left-5 top-11 hidden h-[calc(100%-1rem)] w-px bg-line lg:block lg:left-0 lg:top-5 lg:h-px lg:w-full"
          aria-hidden="true"
        />
      )}

      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface font-mono text-sm font-semibold text-accent transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(0,96,57,0.18)]">
        {item.step}
      </div>
      <h3 className="mt-5 text-base font-semibold text-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
    </div>
  );
};

const Process = ({ data }) => {
  return (
    <section id="process" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-accent">Process</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            From free audit to lasting savings
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A simple, transparent engagement. No long contracts to get started —
            just a clear path from diagnosis to results.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {data.process.map((item, index) => (
            <Step
              key={item.step}
              item={item}
              index={index}
              isLast={index === data.process.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
