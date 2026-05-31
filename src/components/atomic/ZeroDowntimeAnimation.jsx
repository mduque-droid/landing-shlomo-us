const ZeroDowntimeAnimation = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              How We Do It
            </h3>
            <p className="text-sm text-slate-400">
              Dual-write migration strategy
            </p>
          </div>

          {/* Animation Container */}
          <div className="relative bg-slate-800 rounded-xl p-8 mb-8 border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between">
              {/* OLD Server */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-slate-700 border-2 border-slate-500 rounded-lg flex items-center justify-center animate-pulse">
                  <div className="text-2xl">📦</div>
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  OLD SERVER
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-400">Active</span>
                </div>
              </div>

              {/* Data Flow */}
              <div className="flex-1 mx-4">
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
                  .animate-flow {
                    animation: flow 2s ease-in-out infinite;
                  }
                  .animate-float-1 {
                    animation: float 2s ease-in-out 0s infinite;
                  }
                  .animate-float-2 {
                    animation: float 2s ease-in-out 0.6s infinite;
                  }
                  .animate-float-3 {
                    animation: float 2s ease-in-out 1.2s infinite;
                  }
                `}</style>

                <div className="relative h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full w-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-flow"
                  ></div>
                </div>

                {/* Data packets */}
                <div className="relative h-6 mt-2">
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full left-0 top-1/2 -translate-y-1/2 animate-float-1"></div>
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full left-0 top-1/2 -translate-y-1/2 animate-float-2"></div>
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full left-0 top-1/2 -translate-y-1/2 animate-float-3"></div>
                </div>

                <div className="text-center text-xs text-slate-400 mt-2">
                  Dual-Write
                </div>
              </div>

              {/* NEW Server */}
              <style>{`
                @keyframes pulse-ring {
                  0%, 100% {
                    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
                  }
                  50% {
                    box-shadow: 0 0 0 15px rgba(6, 182, 212, 0);
                  }
                }
                .animate-pulse-ring {
                  animation: pulse-ring 2s infinite;
                }
              `}</style>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-cyan-500 bg-opacity-20 border-2 border-cyan-500 rounded-lg flex items-center justify-center animate-pulse-ring">
                  <div className="text-2xl">⚙️</div>
                </div>
                <span className="text-xs font-semibold text-cyan-300">
                  NEW SERVER
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-xs text-amber-400">Syncing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex justify-between items-center mb-12 px-2">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mb-2"></div>
              <span className="text-xs text-slate-400 text-center">Old Active</span>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-amber-500 rounded-full mb-2"></div>
              <span className="text-xs text-slate-400 text-center">Dual-Write</span>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-500 to-green-500 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mb-2"></div>
              <span className="text-xs text-slate-400 text-center">Complete</span>
            </div>
          </div>

          {/* Info boxes */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <p className="text-xs font-semibold text-slate-300">Step 1</p>
              </div>
              <p className="text-xs text-slate-400">
                Old server handles all traffic
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <p className="text-xs font-semibold text-slate-300">Step 2</p>
              </div>
              <p className="text-xs text-slate-400">
                New server gets real-time data
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-xs font-semibold text-slate-300">Step 3</p>
              </div>
              <p className="text-xs text-slate-400">
                Instant switch. Zero disruption.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="pt-8 border-t border-slate-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-green-400">0 min</p>
                <p className="text-sm text-slate-400">Downtime guaranteed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-sm text-slate-400">Data integrity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroDowntimeAnimation;
