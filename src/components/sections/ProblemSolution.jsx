import Container from '../layout/Container';
import { useReveal } from '../../hooks/useReveal';

const Row = ({ item, index }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} grid gap-4 border-t border-line py-8 md:grid-cols-2 md:gap-12`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 text-lg leading-none text-red-500" aria-hidden="true">
          ✕
        </span>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-faint">
            The problem
          </p>
          <p className="mt-2 text-base font-semibold text-ink">{item.problem}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 text-lg leading-none text-accent" aria-hidden="true">
          →
        </span>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            How we solve it
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted">{item.solution}</p>
        </div>
      </div>
    </div>
  );
};

const ProblemSolution = ({ data }) => {
  return (
    <section id="solutions" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-accent">How we help</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            Common headaches we make disappear
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            If any of these sound familiar, a free audit will show you exactly how
            much you can save and where you're exposed.
          </p>
        </div>

        <div className="mt-14">
          {data.problemSolution.map((item, index) => (
            <Row key={item.problem} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;
