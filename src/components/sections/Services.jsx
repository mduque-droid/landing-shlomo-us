import Container from '../layout/Container';
import ServiceCard from '../shared/ServiceCard';

const Services = ({ data, onShowServiceModal }) => {
  return (
    <section id="services" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-accent">Services</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            What we engineer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Event-driven architectures, live migrations, and federal compliance —
            built by practitioners who have executed it at scale.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {data.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onShowModal={onShowServiceModal}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
