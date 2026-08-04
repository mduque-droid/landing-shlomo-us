import { forwardRef } from 'react';

const Container = forwardRef(({ children, className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
