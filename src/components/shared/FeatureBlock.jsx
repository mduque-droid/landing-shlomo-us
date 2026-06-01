import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Icon from '../atomic/Icon';

const FeatureBlock = ({ feature }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center">
      <div className="flex justify-center mb-4">
        <Icon name={feature.icon} size={32} className="text-cyan-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm">{feature.description}</p>
      </motion.div>
  );
};

export default FeatureBlock;
