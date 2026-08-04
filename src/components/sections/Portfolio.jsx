import Container from '../layout/Container';
import ProjectCard from '../shared/ProjectCard';

const Portfolio = ({ data }) => {
  return (
    <section id="portfolio" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-accent">Portfolio</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Cloud migration, regulatory compliance, and high-throughput systems —
            in production, at scale.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {data.portfolio.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
