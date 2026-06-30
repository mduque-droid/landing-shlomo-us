import { useState } from 'react';
import * as openpgp from 'openpgp';

const ContactFormModal = ({ isOpen, onClose, pgpUrl, company }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(pgpUrl);
      if (!response.ok) {
        throw new Error(`Could not load encryption key (HTTP ${response.status}). Please contact us directly at hello@shlomo.us.`);
      }
      const publicKeyArmored = await response.text();

      const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
      const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: JSON.stringify(formData) }),
        encryptionKeys: publicKey,
      });

      // Send encrypted data to server
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
        setStatus({ type: 'success', message: 'Message sent securely. We\'ll respond shortly.' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(onClose, 2000);
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error: ' + error.message });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Secure Contact</h2>
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Status Message */}
          {status && (
            <div className={`p-3 rounded-lg text-sm font-medium ${
              status.type === 'success'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            {loading ? 'Encrypting & Sending...' : 'Send Securely'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            🔒 End-to-end encrypted with PGP
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
