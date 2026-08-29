const EASE = 'ease-[cubic-bezier(0.16,1,0.3,1)]';

/**
 * Polymorphic button. Renders an <a> when `href` is provided, otherwise a
 * <button>. Keeps call sites declarative (no `window.location` handlers).
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
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

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
