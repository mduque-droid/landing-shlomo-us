import Container from '../layout/Container';
import ServiceCard from '../shared/ServiceCard';

const Services = ({ data, onShowServiceModal }) => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-600">
            Software that sells. Websites that convert. Infrastructure that never fails.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {data.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onShowModal={onShowServiceModal}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
