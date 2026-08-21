import Card from '../atomic/Card';
import { useReveal } from '../../hooks/useReveal';

const ServiceCard = ({ service, index = 0 }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} h-full`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Card className="flex h-full flex-col">
        <span className="font-mono text-xs tracking-widest text-faint">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-ink">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          <span className="font-medium text-ink">The problem — </span>
          {service.pain}
        </p>

        <div className="mt-auto border-t border-line pt-5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            The outcome
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{service.benefit}</p>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
