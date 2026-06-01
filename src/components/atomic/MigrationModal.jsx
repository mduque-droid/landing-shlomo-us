import { AnimatePresence, motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const MigrationModal = ({ isOpen, onClose }) => {
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
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
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
              Zero-Downtime Migration
            </h2>
            <p className="text-gray-600">
              How we move your infrastructure without losing a single transaction
            </p>
          </div>

          {/* Animation Container */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 border border-slate-700 mb-8">
            <div className="flex items-center justify-between mb-8">
              {/* OLD Server */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-slate-700 border-2 border-slate-500 rounded-lg flex items-center justify-center animate-pulse">
                  <div className="text-4xl">📦</div>
                </div>
                <span className="text-sm font-bold text-slate-300 text-center">
                  OLD<br />SERVER
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-400 font-semibold">Active</span>
                </div>
              </div>

              {/* Data Flow */}
              <div className="flex-1 mx-6">
                <style>{`
                  @keyframes flow {
                    0% { transform: translateX(-100%); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateX(100%); opacity: 0; }
                  }
                  @keyframes float {
                    0%, 100% { opacity: 0; transform: translateX(-10px); }
                    10%, 90% { opacity: 1; }
                    100% { transform: translateX(110px); }
                  }
                  .animate-flow { animation: flow 2.5s ease-in-out infinite; }
                  .animate-float-1 { animation: float 2.5s ease-in-out 0s infinite; }
                  .animate-float-2 { animation: float 2.5s ease-in-out 0.8s infinite; }
                  .animate-float-3 { animation: float 2.5s ease-in-out 1.6s infinite; }
                  @keyframes pulse-ring {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.8); }
                    50% { box-shadow: 0 0 0 20px rgba(6, 182, 212, 0); }
                  }
                  .animate-pulse-ring { animation: pulse-ring 2.5s infinite; }
                `}</style>

                <div className="relative h-1.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full overflow-hidden mb-3">
                  <div className="absolute h-full w-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-flow shadow-lg shadow-green-500/50"></div>
                </div>

                <div className="relative h-8">
                  <div className="absolute w-3 h-3 bg-green-400 rounded-full left-0 top-1/2 -translate-y-1/2 animate-float-1 shadow-lg shadow-green-500/80"></div>
                  <div className="absolute w-3 h-3 bg-green-400 rounded-full left-0 top-1/2 -translate-y-1/2 animate-float-2 shadow-lg shadow-green-500/80"></div>
                  <div className="absolute w-3 h-3 bg-green-400 rounded-full left-0 top-1/2 -translate-y-1/2 animate-float-3 shadow-lg shadow-green-500/80"></div>
                </div>

                <div className="text-center text-sm text-slate-400 font-semibold">
                  Dual-Write Strategy
                </div>
              </div>

              {/* NEW Server */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-cyan-500 bg-opacity-20 border-2 border-cyan-500 rounded-lg flex items-center justify-center animate-pulse-ring">
                  <div className="text-4xl">⚙️</div>
                </div>
                <span className="text-sm font-bold text-cyan-300 text-center">
                  NEW<br />SERVER
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-green-400 font-semibold">Ready</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-700 rounded-lg p-6 mt-8">
              <h3 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wide">
                Migration Timeline
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-red-500 rounded-full mb-2 border-2 border-slate-700"></div>
                  <span className="text-xs text-slate-400 text-center font-medium">Old Active</span>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 mx-3"></div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-amber-500 rounded-full mb-2 border-2 border-slate-700"></div>
                  <span className="text-xs text-slate-400 text-center font-medium">Dual-Write</span>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-500 to-green-500 mx-3"></div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mb-2 border-2 border-slate-700"></div>
                  <span className="text-xs text-slate-400 text-center font-medium">Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { num: 1, color: 'red', text: 'Old server handles all traffic normally' },
              { num: 2, color: 'amber', text: 'New server syncs data in real-time' },
              { num: 3, color: 'green', text: 'Switch traffic. Zero disruption.' },
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 bg-${step.color}-500 rounded-full`}></div>
                  <h4 className="font-bold text-slate-900">Step {step.num}</h4>
                </div>
                <p className="text-sm text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-cyan-50 rounded-lg p-6 border border-cyan-200"
          >
            <h3 className="font-bold text-slate-900 mb-4">The Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-cyan-600">
                  <AnimatedCounter end={0} suffix=" min" />
                </p>
                <p className="text-sm text-gray-600">Downtime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">
                  <AnimatedCounter end={100} suffix="%" />
                </p>
                <p className="text-sm text-gray-600">Data integrity</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-gray-600">Business as usual</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold transition-colors"
            >
              Got it. Let's Talk
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

export default MigrationModal;
