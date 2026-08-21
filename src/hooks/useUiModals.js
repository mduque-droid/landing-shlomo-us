import { useCallback, useReducer } from 'react';

const initialState = {
  legalModal: null, // 'privacy' | 'terms' | null
  contactOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_LEGAL':
      return { ...state, legalModal: action.payload };
    case 'CLOSE_LEGAL':
      return { ...state, legalModal: null };
    case 'OPEN_CONTACT':
      return { ...state, contactOpen: true };
    case 'CLOSE_CONTACT':
      return { ...state, contactOpen: false };
    default:
      return state;
  }
}

/**
 * Single source of truth for the landing page's overlay UI. Encapsulates the
 * legal and contact modal state so App stays declarative.
 */
export default function useUiModals() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    openLegal: useCallback((type) => dispatch({ type: 'OPEN_LEGAL', payload: type }), []),
    closeLegal: useCallback(() => dispatch({ type: 'CLOSE_LEGAL' }), []),
    openContact: useCallback(() => dispatch({ type: 'OPEN_CONTACT' }), []),
    closeContact: useCallback(() => dispatch({ type: 'CLOSE_CONTACT' }), []),
  };

  return { state, actions };
}
