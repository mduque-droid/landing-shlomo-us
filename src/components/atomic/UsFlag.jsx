/**
 * Minimal, crisp US flag mark (SVG). Just the flag — a quiet signal that the
 * firm is US-based. Sized small with a hairline border so it reads as a badge,
 * not a graphic.
 */
const UsFlag = ({ className = '', title = 'Based in the USA' }) => (
  <svg
    viewBox="0 0 38 26"
    role="img"
    aria-label={title}
    className={className}
    width="22"
    height="15"
  >
    <title>{title}</title>
    <rect width="38" height="26" fill="#fff" />
    {/* 13 stripes */}
    {Array.from({ length: 7 }).map((_, i) => (
      <rect key={i} y={i * 4} width="38" height="2" fill="#b22234" />
    ))}
    {/* Canton */}
    <rect width="16" height="14" fill="#3c3b6e" />
    {/* Simplified star field */}
    {Array.from({ length: 4 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => {
        const offset = row % 2 === 0 ? 0 : 1.5;
        const cx = 2 + col * 3 + offset;
        const cy = 2 + row * 3.2;
        if (cx > 15) return null;
        return <circle key={`${row}-${col}`} cx={cx} cy={cy} r="0.7" fill="#fff" />;
      })
    )}
  </svg>
);

export default UsFlag;
