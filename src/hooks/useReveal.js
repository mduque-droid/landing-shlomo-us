import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll using IntersectionObserver — no animation library.
 * Returns a ref to attach and a `visible` flag. Pair with the `.reveal`
 * utility in index.css: className={`reveal ${visible ? 'is-visible' : ''}`}.
 */
export const useReveal = ({ threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = {}) => {
  const ref = useRef(null);
  // Elements are visible by default when IntersectionObserver is unavailable
  // (SSR / very old browsers), so no synchronous setState in the effect.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
};

export default useReveal;
