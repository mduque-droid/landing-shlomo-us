import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Card from '../atomic/Card';
import Badge from '../atomic/Badge';
import Icon from '../atomic/Icon';

const ServiceCard = ({ service, onShowModal }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Icon name={service.icon} size={24} className={`text-${service.color}-600`} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>

      <p className="text-gray-700 text-sm font-semibold mb-2">The Problem:</p>
      <p className="text-gray-600 text-sm mb-4 italic">{service.pain}</p>

      <p className="text-gray-600 text-sm flex-grow mb-4">{service.description}</p>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-sm font-semibold text-cyan-600 mb-3">
          ✓ {service.benefit}
        </p>

        {onShowModal && (
          <button
            onClick={onShowModal}
            className="w-full px-3 py-2 bg-cyan-100 text-cyan-700 hover:bg-cyan-200 rounded-lg text-sm font-medium transition-colors"
          >
            See How It Works
          </button>
        )}
      </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
