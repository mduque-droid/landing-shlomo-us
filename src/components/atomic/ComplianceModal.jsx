import { motion } from 'framer-motion';
import Modal from './Modal';

const CERTIFICATIONS = [
  { name: 'NIST 800-53', icon: '🛡️', description: 'Federal security standards', color: 'from-blue-500 to-cyan-500' },
  { name: 'FedRAMP', icon: '🏛️', description: 'Federal cloud authorization', color: 'from-purple-500 to-pink-500' },
  { name: 'HIPAA', icon: '🏥', description: 'Healthcare data protection', color: 'from-green-500 to-emerald-500' },
];

const AUDIT_STEPS = [
  { step: 1, label: 'Code Audit' },
  { step: 2, label: 'Architecture Review' },
  { step: 3, label: 'Security Assessment' },
  { step: 4, label: 'Compliance Certification' },
  { step: 5, label: 'GovTech Enrollment' },
];

const MARKETS = [
  { name: 'Federal Contracts', icon: '📋', value: '$500B+' },
  { name: 'State Programs', icon: '🏛️', value: '$100B+' },
  { name: 'Healthcare', icon: '🏥', value: '$200B+' },
];

const BENEFITS = [
  { title: 'Security first:', text: 'Your code meets federal security standards' },
  { title: 'Auditable:', text: 'Every change tracked and documented for compliance reviews' },
  { title: 'Government-ready:', text: 'Immediate eligibility for federal and state contracts' },
];

const ComplianceModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} floatingClose labelledBy="compliance-modal-title">
    <div className="p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 id="compliance-modal-title" className="text-3xl font-bold text-slate-900 mb-2">
          Federal &amp; State Regulatory Compliance
        </h2>
        <p className="text-gray-600">Your ticket to lucrative government contracts</p>
      </div>

      {/* Audit Timeline */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wide">
          Compliance Audit Checklist
        </h3>
        <div className="space-y-3">
          {AUDIT_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 + 0.3, type: 'spring' }}
                className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">✓</span>
              </motion.div>
              <div className="flex-grow">
                <p className="font-semibold text-slate-900">{item.label}</p>
              </div>
              <div className="text-green-600 font-semibold text-sm">Complete</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wide">
          Certifications Unlocked
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
              className={`bg-gradient-to-br ${cert.color} rounded-lg p-6 text-white`}
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
              <p className="text-sm opacity-90">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Market Access */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-8"
      >
        <h3 className="font-bold text-slate-900 mb-6">New Markets Unlocked</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {MARKETS.map((market, idx) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{market.icon}</div>
              <p className="font-semibold text-slate-900 text-sm">{market.name}</p>
              <p className="text-xl font-bold text-amber-600 mt-2">{market.value}</p>
              <p className="text-xs text-gray-600">market opportunity</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Compliance Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="bg-green-50 rounded-lg p-6 border border-green-200 mb-8"
      >
        <h3 className="font-bold text-slate-900 mb-4">What Compliance Means</h3>
        <ul className="space-y-3">
          {BENEFITS.map((benefit) => (
            <li key={benefit.title} className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700">
                <strong>{benefit.title}</strong> {benefit.text}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="text-center">
        <button
          onClick={onClose}
          className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold transition-colors"
        >
          Access Government Contracts. Let&apos;s Go
        </button>
      </div>
    </div>
  </Modal>
);

export default ComplianceModal;
