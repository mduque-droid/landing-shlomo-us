import Icon from '../atomic/Icon';
import { useReveal } from '../../hooks/useReveal';

const FeatureBlock = ({ feature, index = 0 }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group border-t border-line pt-6 transition-colors duration-300 hover:border-accent/50`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`icon-line ${visible ? 'icon-draw' : ''} flex h-9 w-9 items-center justify-center rounded-lg bg-accent/[0.08] text-accent ring-1 ring-accent/15 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-3 group-hover:bg-accent group-hover:text-white group-hover:ring-accent`}
        >
          <Icon name={feature.icon} size={18} />
        </span>
        <span className="font-mono text-xs tracking-widest text-faint transition-colors duration-300 group-hover:text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureBlock;
