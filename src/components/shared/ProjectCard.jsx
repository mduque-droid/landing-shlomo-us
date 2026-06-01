import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Card from '../atomic/Card';
import Badge from '../atomic/Badge';
import Icon from '../atomic/Icon';

const ProjectCard = ({ project }) => {
  const { ref, isInView } = useScrollAnimation();
  const categoryColors = {
    migration: 'teal',
    compliance: 'amber',
    engineering: 'cyan',
  };

  const color = categoryColors[project.category] || 'slate';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <Icon name={project.icon} size={24} className="text-slate-600" />
        <Badge color={color}>{project.category}</Badge>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
        {project.tags.map((tag) => (
          <Badge key={tag} color="slate" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
