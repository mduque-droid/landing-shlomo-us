import { useCallback, useState } from 'react';

/**
 * State for the legal (Privacy / Terms) modal — the only overlay left now that
 * contact happens over WhatsApp. Returns the active key ('privacy' | 'terms' |
 * null) plus open/close actions.
 */
export default function useLegalModal() {
  const [legalModal, setLegalModal] = useState(null);

  const openLegal = useCallback((type) => setLegalModal(type), []);
  const closeLegal = useCallback(() => setLegalModal(null), []);

  return { legalModal, openLegal, closeLegal };
}
