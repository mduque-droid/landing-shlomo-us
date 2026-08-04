import { useReveal } from '../../hooks/useReveal';

const FeatureBlock = ({ feature, index = 0 }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} border-t border-line pt-6`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="font-mono text-xs tracking-widest text-faint">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-4 text-base font-semibold text-ink">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureBlock;
