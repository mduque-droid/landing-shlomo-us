import { motion } from 'framer-motion';
import Modal from './Modal';

const CODE_LINES = [
  { text: 'interface Service {', delay: 0 },
  { text: '  id: string;', delay: 0.1 },
  { text: '  execute(): Promise<void>;', delay: 0.2 },
  { text: '}', delay: 0.3 },
];

const ARCHITECTURE_STAGES = [
  {
    title: 'Monolith',
    icon: '🏗️',
    color: 'from-red-500 to-orange-500',
    issues: ['Tight coupling', 'Hard to test', 'Scales horizontally only'],
  },
  {
    title: 'Modular',
    icon: '📦',
    color: 'from-yellow-500 to-amber-500',
    issues: ['Separated concerns', 'Better testability', 'Clearer boundaries'],
  },
  {
    title: 'Microservices',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    issues: ['Independent scaling', 'Fault isolation', 'Technology flexibility'],
  },
];

const PRINCIPLES = [
  {
    title: 'Modularity First',
    description: 'Single responsibility principle. Each module does one thing, excellently.',
  },
  {
    title: 'Test Coverage',
    description: 'Unit, integration, and end-to-end tests ensure code reliability.',
  },
  {
    title: 'Zero Technical Debt',
    description: 'Clean, maintainable code that future engineers can understand and extend.',
  },
  {
    title: 'Scalable by Design',
    description: 'Architecture built to grow with your business without rewrites.',
  },
];

const EngineeringModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} floatingClose labelledBy="engineering-modal-title">
    <div className="p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 id="engineering-modal-title" className="text-3xl font-bold text-slate-900 mb-2">
          Custom Software Engineering
        </h2>
        <p className="text-gray-600">From monolith to scalable architecture</p>
      </div>

      {/* Architecture Evolution */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wide">
          Architecture Evolution
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {ARCHITECTURE_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {idx < ARCHITECTURE_STAGES.length - 1 && (
                <div className="absolute top-1/3 -right-2 hidden md:block text-2xl text-gray-400">
                  →
                </div>
              )}
              <div className={`bg-gradient-to-br ${stage.color} rounded-lg p-6 text-white h-full`}>
                <div className="text-4xl mb-3">{stage.icon}</div>
                <h4 className="font-bold text-lg mb-4">{stage.title}</h4>
                <ul className="text-sm space-y-2">
                  {stage.issues.map((issue) => (
                    <li key={issue} className="flex items-start gap-2">
                      <span className="text-lg">✓</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-slate-900 rounded-lg p-6 mb-8 font-mono text-sm">
        <div className="text-slate-400 mb-4 font-bold uppercase tracking-wide text-xs">
          Clean Architecture
        </div>
        <div className="space-y-1">
          {CODE_LINES.map((line, idx) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + line.delay }}
              className="text-cyan-400"
            >
              <span className="text-slate-500">{idx + 1}</span>
              <span className="ml-4">{line.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-cyan-50 rounded-lg p-6 border border-cyan-200 mb-8"
      >
        <h3 className="font-bold text-slate-900 mb-4">Our Engineering Principles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="flex gap-3">
              <span className="text-cyan-600 font-bold text-lg">→</span>
              <div>
                <p className="font-semibold text-slate-900">{principle.title}</p>
                <p className="text-sm text-gray-600">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="text-center">
        <button
          onClick={onClose}
          className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold transition-colors"
        >
          Ready to Build. Let&apos;s Talk
        </button>
      </div>
    </div>
  </Modal>
);

export default EngineeringModal;
