import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, suffix = '', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!isInView || !node) return;

    const controls = {
      from: 0,
      to: typeof end === 'string' ? parseInt(end) : end,
    };

    const duration_ms = duration * 1000;
    const start = Date.now();

    const update = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration_ms, 1);
      const current = Math.floor(controls.from + (controls.to - controls.from) * progress);
      node.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, end, suffix, duration]);

  return (
    <span ref={ref}>
      <span ref={nodeRef} className={className}>0{suffix}
      </span>
    </span>
  );
};

export default AnimatedCounter;
