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
          className="text-slate-700 hover:text-cyan-600 font-medium transition-colors duration-200"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
