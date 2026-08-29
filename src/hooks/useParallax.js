import { useEffect, useRef } from 'react';

/**
 * Vertical scroll parallax: writes `scrollY * factor` (in px) to a CSS custom
 * property on the returned ref, throttled to one write per animation frame.
 * Honors `prefers-reduced-motion` by staying inert.
 *
 * @param {number} [factor=0.18] - Multiplier applied to scrollY.
 * @param {string} [cssVar='--aura-y'] - CSS variable to update.
 * @returns {import('react').RefObject<HTMLElement>}
 */
export function useParallax(factor = 0.18, cssVar = '--aura-y') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty(cssVar, `${window.scrollY * factor}px`);
        frame = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [factor, cssVar]);

  return ref;
}

export default useParallax;
