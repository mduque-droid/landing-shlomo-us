import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SIZES = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-3xl',
};

/**
 * Shared modal shell: animated backdrop + centered panel, with a single
 * accessible implementation of Esc-to-close, body scroll lock, focus
 * management and `role="dialog"`. Children render inside the white panel.
 *
 * Set `floatingClose` for the floating "×" in the top-right corner
 * (content-heavy modals); omit it when the panel supplies its own header.
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'lg',
  floatingClose = false,
  labelledBy,
}) => {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    // Move focus into the dialog for keyboard/screen-reader users.
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`relative w-full ${SIZES[size]} max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl outline-none`}
          >
            {floatingClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-2xl leading-none text-gray-500 transition-colors hover:text-gray-900"
              >
                ×
              </button>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
