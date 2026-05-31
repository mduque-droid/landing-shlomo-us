import Container from '../layout/Container';
import ServiceCard from '../shared/ServiceCard';

const Services = ({ data }) => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Servicios Enterprise
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones especializadas para infraestructura, cumplimiento y transformación digital.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
