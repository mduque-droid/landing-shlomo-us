import Container from '../layout/Container';
import FeatureBlock from '../shared/FeatureBlock';

const Features = ({ data }) => {
  return (
    <section id="features" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-accent">Why Shlomo</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            Why New York companies choose Shlomo
          </h2>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {data.features.map((feature, index) => (
            <FeatureBlock key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
