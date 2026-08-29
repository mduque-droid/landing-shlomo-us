import Container from '../layout/Container';
import SectionHeading from '../shared/SectionHeading';
import FeatureBlock from '../shared/FeatureBlock';

const Features = ({ items }) => {
  return (
    <section id="features" className="border-b border-line bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Why Shlomo" title="Why New York companies choose Shlomo" />

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((feature, index) => (
            <FeatureBlock key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
