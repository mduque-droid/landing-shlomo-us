const EASE = 'ease-[cubic-bezier(0.16,1,0.3,1)]';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = `inline-flex items-center justify-center gap-2 font-medium rounded-md cursor-pointer transition-all duration-300 ${EASE} disabled:opacity-50 disabled:cursor-not-allowed`;

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-[0_1px_2px_rgba(10,10,10,0.08)]',
    secondary:
      'text-ink border border-line-strong bg-transparent hover:border-ink',
    ghost: 'text-ink hover:text-accent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
