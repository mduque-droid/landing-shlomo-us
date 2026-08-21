import Modal from './Modal';

const LegalModal = ({ isOpen, onClose, title, content }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="md" labelledBy="legal-modal-title">
    {/* Header */}
    <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h2 id="legal-modal-title" className="text-2xl font-bold text-slate-900">
        {title}
      </h2>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-slate-900 transition-colors duration-200 text-2xl leading-none"
        aria-label="Close modal"
      >
        ✕
      </button>
    </div>

    {/* Content */}
    <div className="px-6 py-6 text-gray-700 leading-relaxed space-y-4">
      {content.split('\n\n').map((paragraph, idx) => (
        <p key={idx} className="text-sm sm:text-base">
          {paragraph}
        </p>
      ))}
    </div>

    {/* Footer */}
    <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
      <button
        onClick={onClose}
        className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors duration-200"
      >
        Close
      </button>
    </div>
  </Modal>
);

export default LegalModal;
