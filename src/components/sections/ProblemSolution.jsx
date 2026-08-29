import Container from '../layout/Container';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';

const Row = ({ item, index }) => (
  <Reveal
    delay={index * 90}
    className="grid gap-4 border-t border-line py-8 md:grid-cols-2 md:gap-12"
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
  </Reveal>
);

const ProblemSolution = ({ items }) => {
  return (
    <section id="solutions" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How we help"
          title="Common headaches we make disappear"
          description="If any of these sound familiar, a free audit will show you exactly how much you can save and where you're exposed."
        />

        <div className="mt-14">
          {items.map((item, index) => (
            <Row key={item.problem} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;
