import Container from '../layout/Container';
import SectionHeading from '../shared/SectionHeading';
import ServiceCard from '../shared/ServiceCard';

const Services = ({ items }) => {
  return (
    <section id="services" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Three ways we cut your costs and risk"
          description="Cloud cost optimization, secure integrations, and compliance-ready security — delivered by senior engineers, not sales reps."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
