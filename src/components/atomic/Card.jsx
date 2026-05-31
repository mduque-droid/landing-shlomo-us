const Card = ({ children, className = '', hover = true }) => {
  const hoverClass = hover ? 'hover:shadow-lg hover:border-cyan-200' : '';

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
