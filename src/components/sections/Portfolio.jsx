import Container from '../layout/Container';
import ProjectCard from '../shared/ProjectCard';

const Portfolio = ({ data }) => {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-slate-50">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            Success stories in cloud migration, regulatory compliance, and software engineering.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.portfolio.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
