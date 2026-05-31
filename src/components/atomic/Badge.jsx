const Badge = ({ children, color = 'cyan', className = '' }) => {
  const colorStyles = {
    cyan: 'bg-cyan-100 text-cyan-700',
    amber: 'bg-amber-100 text-amber-700',
    teal: 'bg-teal-100 text-teal-700',
    slate: 'bg-slate-100 text-slate-700',
    green: 'bg-green-100 text-green-700',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${colorStyles[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
