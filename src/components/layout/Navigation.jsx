const Navigation = ({ items }) => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:flex gap-8">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleSmoothScroll(e, item.href)}
          className="text-sm text-muted hover:text-ink transition-colors duration-300"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
