import { AnimatePresence, motion } from 'framer-motion';

const EngineeringModal = ({ isOpen, onClose }) => {
  const codeLines = [
    { text: 'interface Service {', delay: 0 },
    { text: '  id: string;', delay: 0.1 },
    { text: '  execute(): Promise<void>;', delay: 0.2 },
    { text: '}', delay: 0.3 },
  ];

  const architectureStages = [
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black bg-opacity-60"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-900 text-3xl w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>

              <div className="p-8 md:p-12">
                {/* Title */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Custom Software Engineering
                  </h2>
                  <p className="text-gray-600">
                    From monolith to scalable architecture
                  </p>
                </div>

                {/* Architecture Evolution */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wide">
                    Architecture Evolution
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {architectureStages.map((stage, idx) => (
                      <motion.div
                        key={stage.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="relative"
                      >
                        {/* Arrow connector */}
                        {idx < architectureStages.length - 1 && (
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
                    {codeLines.map((line, idx) => (
                      <motion.div
                        key={idx}
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
                    <div className="flex gap-3">
                      <span className="text-cyan-600 font-bold text-lg">→</span>
                      <div>
                        <p className="font-semibold text-slate-900">Modularity First</p>
                        <p className="text-sm text-gray-600">
                          Single responsibility principle. Each module does one thing, excellently.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-cyan-600 font-bold text-lg">→</span>
                      <div>
                        <p className="font-semibold text-slate-900">Test Coverage</p>
                        <p className="text-sm text-gray-600">
                          Unit, integration, and end-to-end tests ensure code reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-cyan-600 font-bold text-lg">→</span>
                      <div>
                        <p className="font-semibold text-slate-900">Zero Technical Debt</p>
                        <p className="text-sm text-gray-600">
                          Clean, maintainable code that future engineers can understand and extend.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-cyan-600 font-bold text-lg">→</span>
                      <div>
                        <p className="font-semibold text-slate-900">Scalable by Design</p>
                        <p className="text-sm text-gray-600">
                          Architecture built to grow with your business without rewrites.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <div className="text-center">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold transition-colors"
                  >
                    Ready to Build. Let's Talk
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EngineeringModal;
