const Card = ({ children, className = '', hover = true }) => {
  const hoverClass = hover
    ? 'hover:border-line-strong hover:shadow-[0_8px_30px_rgba(10,10,10,0.06)]'
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
