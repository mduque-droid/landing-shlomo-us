/**
 * Shared section heading (eyebrow + title + optional description).
 * Centralizes the heading pattern repeated across every landing section.
 *
 * @param {object} props
 * @param {string} props.eyebrow - Small label above the title.
 * @param {import('react').ReactNode} props.title
 * @param {import('react').ReactNode} [props.description]
 * @param {'section'|'minimal'} [props.variant='section']
 *   - "section": accent eyebrow + large title (landing sections).
 *   - "minimal": faint uppercase eyebrow + medium title (résumé/detail pages).
 * @param {string} [props.className='']
 */
const VARIANTS = {
  section: {
    eyebrow: 'text-sm font-medium text-accent',
    title: 'mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl',
    description: 'mt-4 text-lg leading-relaxed text-muted',
  },
  minimal: {
    eyebrow: 'text-xs font-semibold uppercase tracking-widest text-faint',
    title: 'mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl',
    description: 'mt-4 max-w-2xl text-base leading-relaxed text-muted',
  },
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  variant = 'section',
  className = '',
}) => {
  const styles = VARIANTS[variant] ?? VARIANTS.section;

  return (
    <div className={className}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionHeading;
