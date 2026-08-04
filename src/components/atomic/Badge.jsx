/**
 * A single restrained chip — hairline border, muted micro-label.
 * Keeps the `color` prop for API compatibility, but the design system
 * intentionally renders one neutral style (no rainbow of colors).
 */
const Badge = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
