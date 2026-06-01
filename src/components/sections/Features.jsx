import Container from '../layout/Container';
import FeatureBlock from '../shared/FeatureBlock';

const Features = ({ data }) => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why Shlomo?
          </h2>
          <p className="text-xl text-gray-600">
            Our differentiators. What makes us unique in the market?
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {data.features.map((feature) => (
            <FeatureBlock key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
