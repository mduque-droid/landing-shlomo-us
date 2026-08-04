import Card from '../atomic/Card';
import { useReveal } from '../../hooks/useReveal';

const ProjectCard = ({ project, index = 0 }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} h-full`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Card className="flex h-full flex-col">
        <span className="text-xs uppercase tracking-[0.14em] text-faint">
          {project.category}
        </span>

        <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-ink">
          {project.title}
        </h3>

        <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
