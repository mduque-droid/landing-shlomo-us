import Card from '../atomic/Card';
import { useReveal } from '../../hooks/useReveal';

const ServiceCard = ({ service, index = 0, onShowModal }) => {
  const { ref, visible } = useReveal();

  const handleShowModal = () => {
    if (onShowModal) onShowModal(service.id);
  };

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
          <p className="text-sm leading-relaxed text-ink">{service.benefit}</p>

          {service.hasModal && (
            <button
              onClick={handleShowModal}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-300"
            >
              See how it works
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                →
              </span>
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
