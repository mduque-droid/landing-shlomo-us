/**
 * Build a WhatsApp click-to-chat URL. Single source of truth for the
 * `wa.me` link format, so CTA and Footer stay in sync.
 *
 * @param {string} number - Full international number, digits only (e.g. "18624037724").
 * @param {string} message - Prefilled message; URL-encoded internally.
 * @returns {string}
 */
export const buildWhatsAppUrl = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
