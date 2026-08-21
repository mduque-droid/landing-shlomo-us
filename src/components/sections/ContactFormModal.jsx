import { useRef, useState } from 'react';
import * as openpgp from 'openpgp';
import Modal from '../atomic/Modal';

const INITIAL_FORM = { name: '', email: '', challenge: '', message: '' };

const ContactFormModal = ({ isOpen, onClose, pgpUrl, challenges = [] }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  // Cache the armored public key so it is fetched at most once per session.
  const publicKeyRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loadPublicKey = async () => {
    if (publicKeyRef.current) return publicKeyRef.current;
    const response = await fetch(pgpUrl);
    if (!response.ok) {
      throw new Error(
        `Could not load encryption key (HTTP ${response.status}). Please contact us directly at hello@shlomo.us.`
      );
    }
    const armored = await response.text();
    publicKeyRef.current = await openpgp.readKey({ armoredKey: armored });
    return publicKeyRef.current;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const publicKey = await loadPublicKey();
      const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: JSON.stringify(formData) }),
        encryptionKeys: publicKey,
      });

      const submitResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          encryptedData: encrypted.data,
          senderEmail: formData.email,
        }),
      });

      const result = await submitResponse.json();
      if (submitResponse.ok) {
        setStatus({ type: 'success', message: "Message sent securely. We'll respond shortly." });
        setFormData(INITIAL_FORM);
        setTimeout(onClose, 2000);
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: `Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition';

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" labelledBy="contact-modal-title">
      {/* Header */}
      <div className="bg-slate-950 text-white p-6 flex items-center justify-between rounded-t-xl">
        <h2 id="contact-modal-title" className="text-xl font-bold">
          Book Your Free Tech Audit
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            Corporate email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="you@yourcompany.com"
          />
        </div>

        <div>
          <label htmlFor="challenge" className="block text-sm font-semibold text-slate-900 mb-2">
            Main challenge
          </label>
          <select
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="" disabled>
              Select your main challenge…
            </option>
            {challenges.map((challenge) => (
              <option key={challenge} value={challenge}>
                {challenge}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
            Tell us a bit more
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className={`${inputClasses} resize-none`}
            placeholder="Your message..."
          ></textarea>
        </div>

        {status && (
          <div
            className={`p-3 rounded-lg text-sm font-medium ${
              status.type === 'success'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-semibold py-3 rounded-lg transition-colors duration-200"
        >
          {loading ? 'Encrypting & Sending...' : 'Request My Free Audit'}
        </button>

        <p className="text-xs text-gray-500 text-center">🔒 End-to-end encrypted with PGP</p>
      </form>
    </Modal>
  );
};

export default ContactFormModal;
