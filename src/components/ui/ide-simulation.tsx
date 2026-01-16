import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileCode } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IdeSimulationProps {
  activePhase: 0 | 1 | 2;
  className?: string;
}

const planContent = {
  type: 'prompt',
  title: 'User Prompt',
  content: `Create a hero section with an animated 3D tubes background using Three.js. Should respond to mouse movement and clicks.`,
  context: ['@/components/ui/neon-flow.tsx', '@/lib/utils.ts'],
  response: `I'll create the TubesBackground component with:
- Three.js tubes via CDN import
- Mouse interaction handlers
- Color randomization on click
- Proper cleanup on unmount
...`
};

const implementContent = {
  type: 'code',
  title: 'neon-flow.tsx',
  language: 'typescript',
  content: `export function TubesBackground({
  children,
  className,
  enableClickInteraction = true
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initTubes = async () => {
      const module = await import('...');
      const app = TubesCursor(canvasRef.current, {
        tubes: {
          colors: ["#f967fb", "#53bc28", "#6958d5"],
          lights: { intensity: 200, colors: [...] }
        }
      });
      tubesRef.current = app;
    };
    initTubes();
  }, []);

  return (
    <div onClick={handleClick}>
      <canvas ref={canvasRef} />
      {children}
    </div>
  );
}`
};

const validateContent = {
  type: 'terminal',
  title: 'Playwright Tests',
  content: `$ npm run test:e2e
Running 12 tests using 3 workers

✓ [chromium] hero-section.spec.ts:8 - NeonFlow canvas renders
✓ [chromium] hero-section.spec.ts:15 - Canvas responds to click
✓ [chromium] process-loop.spec.ts:12 - Auto-cycles through phases
✓ [chromium] process-loop.spec.ts:24 - Click advances to phase
✓ [chromium] process-loop.spec.ts:36 - SVG beam animates on desktop
✓ [firefox] responsive.spec.ts:8 - Mobile layout stacks correctly
✓ [webkit] responsive.spec.ts:18 - Touch targets meet 44px minimum
✓ [chromium] ide-simulation.spec.ts:10 - Typewriter effect completes
✓ [chromium] accessibility.spec.ts:8 - No ARIA violations
✓ [chromium] accessibility.spec.ts:15 - Color contrast passes WCAG AA
✓ [webkit] performance.spec.ts:12 - Canvas FPS > 30 on mobile
✓ [chromium] integration.spec.ts:8 - Phase sync between components

12 passed (28.4s)

$ npm run type-check
✓ No TypeScript errors found`
};

const contentMap = [planContent, implementContent, validateContent];

export function IdeSimulation({ activePhase, className }: IdeSimulationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const currentContent = contentMap[activePhase];

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');

    let currentIndex = 0;
    const textToType = currentContent.content;

    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setDisplayedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [activePhase]);

  return (
    <div className={cn("w-full py-16 px-4 bg-gradient-to-b from-background to-surface", className)}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4 text-white">
          How We Built This
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
          This page explains the PIV workflow by demonstrating the actual code and tests used to build it.
        </p>

        {/* IDE Window */}
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          {/* IDE Header */}
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 ml-4 text-zinc-400 text-sm">
              {currentContent.type === 'terminal' ? (
                <Terminal className="w-4 h-4" />
              ) : (
                <FileCode className="w-4 h-4" />
              )}
              <span>{currentContent.title}</span>
            </div>
          </div>

          {/* Context Badges (Plan phase only) */}
          {activePhase === 0 && planContent.context && (
            <div className="bg-[#252526] px-4 py-2 flex gap-2 border-b border-white/10">
              {planContent.context.map((file, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-neon-pink/20 border border-neon-pink/50 rounded text-xs text-neon-pink font-mono"
                >
                  {file}
                </span>
              ))}
            </div>
          )}

          {/* Content Area */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activePhase}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-zinc-300 whitespace-pre-wrap"
              >
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-white ml-1"
                  />
                )}
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeSimulation;
