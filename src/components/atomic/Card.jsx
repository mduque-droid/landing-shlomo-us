const Card = ({ children, className = '', hover = true }) => {
  const hoverClass = hover
    ? 'group hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_14px_40px_rgba(0,96,57,0.10)]'
    : '';

  return (
    <div
      className={`bg-surface border border-line rounded-xl p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
