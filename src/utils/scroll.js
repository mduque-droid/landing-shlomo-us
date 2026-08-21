/**
 * Smoothly scroll to a section by its CSS selector or id.
 * Accepts either "#cta" or "cta". No-op if the element is missing.
 */
export const scrollToSection = (selector) => {
  const target = selector.startsWith('#') ? selector : `#${selector}`;
  const el = document.querySelector(target);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
