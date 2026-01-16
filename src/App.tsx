import { useState, useRef } from 'react';
import { TubesBackground } from './components/ui/neon-flow';
import { ProcessLoop } from './components/ui/process-loop';
import { MethodologyDetails } from './components/ui/methodology-details';
import { IdeSimulation } from './components/ui/ide-simulation';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [activePhase, setActivePhase] = useState<0 | 1 | 2>(0);
  const ideSimulationRef = useRef<HTMLElement>(null);

  const handlePhaseClick = () => {
    // Scroll to IDE Simulation section only on manual click
    ideSimulationRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative">
        <TubesBackground>
          <div className="flex flex-col items-center justify-center h-full px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 pointer-events-auto"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]">
                Stop Vibe Coding.
                <br />
                <span className="text-neon-pink">Start Engineering.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]">
                The PIV Workflow: A disciplined approach to AI-assisted development
              </p>

              <div className="pt-8">
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-white font-mono text-sm">
                  Plan → Implement → Validate
                </span>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 pointer-events-auto"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-white/50" />
            </motion.div>
          </div>
        </TubesBackground>
      </section>

      {/* Process Loop Section */}
      <section className="min-h-screen bg-gradient-to-b from-background to-surface">
        <ProcessLoop onPhaseChange={setActivePhase} onPhaseClick={handlePhaseClick} />
      </section>

      {/* Methodology Details Section */}
      <section className="min-h-screen">
        <MethodologyDetails />
      </section>

      {/* IDE Simulation Section */}
      <section ref={ideSimulationRef} className="min-h-screen">
        <IdeSimulation activePhase={activePhase} />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/10">
        <p>Built with the PIV Workflow. No Vibe Coding allowed.</p>
      </footer>
    </div>
  );
}

export default App;
