import { useReveal } from '../../hooks/useReveal';

/**
 * Reveal-on-scroll wrapper. Attaches an IntersectionObserver (via useReveal)
 * and toggles the `.reveal` / `.is-visible` utilities, with an optional
 * staggered `delay`. Replaces the ref + `visible` boilerplate repeated across
 * sections.
 *
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {number} [props.delay=0] - transition-delay in ms (for staggering).
 * @param {string} [props.className='']
 * @param {import('react').ElementType} [props.as='div'] - wrapper element/tag.
 * @param {object} [props.options] - forwarded to useReveal (threshold, rootMargin).
 * @param {object} [props.style]
 */
const Reveal = ({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  options,
  style,
  ...rest
}) => {
  const { ref, visible } = useReveal(options);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
