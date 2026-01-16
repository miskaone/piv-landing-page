import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Code2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessLoopProps {
  autoPlayInterval?: number;
  onPhaseChange?: (phase: 0 | 1 | 2) => void;
  className?: string;
}

type Phase = 0 | 1 | 2;

interface PhaseData {
  id: Phase;
  title: string;
  color: string;
  borderColor: string;
  icon: React.ReactNode;
  logs: string[];
}

const phases: PhaseData[] = [
  {
    id: 0,
    title: '1. PLAN',
    color: '#ec4899',
    borderColor: 'border-neon-pink',
    icon: <FileText className="w-8 h-8" />,
    logs: [
      '> LOADING_CONTEXT: @neon-flow.tsx',
      '> ANALYZING: Design System, Color Palette',
      '> GENERATING_ARTIFACT: component-spec.md',
      '> STATUS: Architecture defined. Ready to implement.'
    ]
  },
  {
    id: 1,
    title: '2. IMPLEMENT',
    color: '#22c55e',
    borderColor: 'border-neon-green',
    icon: <Code2 className="w-8 h-8" />,
    logs: [
      '> INITIALIZING: React + TypeScript + Framer Motion',
      '> WRITING: src/components/ui/process-loop.tsx',
      '> APPLYING: Tailwind classes, responsive grid',
      '> STATUS: Components built. Ready to validate.'
    ]
  },
  {
    id: 2,
    title: '3. VALIDATE',
    color: '#3b82f6',
    borderColor: 'border-neon-blue',
    icon: <CheckCircle2 className="w-8 h-8" />,
    logs: [
      '> RUNNING: TypeScript compiler (tsc --noEmit)',
      '> RUNNING: Playwright E2E tests (chromium, firefox, webkit)',
      '> TESTING: Canvas interaction, phase transitions, mobile viewport',
      '> STATUS: All tests passed. Ready to ship.'
    ]
  }
];

export function ProcessLoop({
  autoPlayInterval = 4000,
  onPhaseChange,
  className
}: ProcessLoopProps) {
  const [activePhase, setActivePhase] = useState<Phase>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => ((prev + 1) % 3) as Phase);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  useEffect(() => {
    onPhaseChange?.(activePhase);
  }, [activePhase, onPhaseChange]);

  const handlePhaseClick = (phase: Phase) => {
    setActivePhase(phase);
  };

  return (
    <div className={cn("w-full py-16 px-4", className)} data-testid="process-loop">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4 text-white">
          The PIV Loop
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
          A disciplined, three-phase approach to AI-assisted development. No guessing. No breaking.
        </p>

        {/* Desktop: 3-column grid with SVG beam */}
        <div className="relative">
          {/* SVG Connection Beam - Desktop Only */}
          <svg
            className="hidden md:block absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 pointer-events-none"
            data-testid="connection-beam"
          >
            <motion.path
              d="M 100 60 L 400 60 L 500 60 L 800 60"
              stroke={phases[activePhase].color}
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </svg>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase) => (
              <motion.div
                key={phase.id}
                data-phase={phase.id}
                data-testid={phase.id === 2 ? 'validate-logs' : undefined}
                onClick={() => handlePhaseClick(phase.id)}
                className={cn(
                  "relative bg-surface/80 backdrop-blur border-2 rounded-lg p-6 cursor-pointer transition-all duration-300",
                  phase.borderColor,
                  activePhase === phase.id
                    ? "opacity-100 shadow-lg"
                    : "opacity-50 hover:opacity-75",
                  activePhase === phase.id && "active"
                )}
                animate={{
                  scale: activePhase === phase.id ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div
                  className="mb-4"
                  style={{ color: phase.color }}
                >
                  {phase.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                  {phase.title}
                </h3>

                {/* System Logs */}
                <div className="space-y-2 font-mono text-xs text-zinc-400">
                  <AnimatePresence mode="wait">
                    {activePhase === phase.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {phase.logs.map((log, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            {log}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Pulse indicator for active phase */}
                {activePhase === phase.id && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: phase.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessLoop;
