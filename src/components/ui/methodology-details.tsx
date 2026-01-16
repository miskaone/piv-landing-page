import { motion } from 'framer-motion';
import { FileText, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MethodologyDetailsProps {
  className?: string;
}

const methodologyPhases = [
  {
    id: 'plan',
    number: '01',
    title: 'PLAN',
    subtitle: 'Context Injection & Structured Specifications',
    color: '#ec4899',
    bgGradient: 'from-neon-pink/10 to-transparent',
    icon: FileText,
    description: 'Stop guessing. Start with comprehensive context and clear architectural decisions.',
    principles: [
      {
        title: 'Context Injection',
        description: 'Use MCP (Model Context Protocol) to provide Claude with your codebase structure, design system, and existing patterns. No hallucinations—only informed decisions.',
        examples: ['@codebase for file structure', '@design-system.md for colors/typography', '@component-patterns.tsx for existing implementations']
      },
      {
        title: 'Structured Specifications',
        description: 'Define requirements in clear, unambiguous language. Include component hierarchy, data flow, and interaction patterns before writing code.',
        examples: ['Component tree (parent → children)', 'State management approach', 'Animation/interaction requirements', 'Mobile-first responsive strategy']
      },
      {
        title: 'Architectural Constraints',
        description: 'Establish boundaries: tech stack, performance budgets, accessibility standards. Constraints enable creativity within guardrails.',
        examples: ['TypeScript strict mode required', 'Bundle size < 500KB gzipped', 'WCAG AA compliance minimum', 'Mobile-first, progressive enhancement']
      }
    ],
    antipatterns: [
      'Vague prompts like "make it look good"',
      'Assuming AI knows your design system',
      'Skipping mobile/tablet considerations',
      'No discussion of edge cases or error states'
    ]
  },
  {
    id: 'implement',
    number: '02',
    title: 'IMPLEMENT',
    subtitle: 'AI-Assisted Coding with Strict Adherence',
    color: '#22c55e',
    bgGradient: 'from-neon-green/10 to-transparent',
    icon: Code2,
    description: 'Execute the plan with precision. No scope creep. No "while we\'re at it" moments.',
    principles: [
      {
        title: 'Plan Fidelity',
        description: 'Implement exactly what was specified. Changes to architecture mid-implementation signal a planning failure—stop and re-plan.',
        examples: ['Use specified state management library', 'Follow agreed component structure', 'Respect performance constraints', 'Implement defined accessibility features']
      },
      {
        title: 'Type Safety First',
        description: 'Define interfaces before implementation. Let TypeScript guide you. Red squiggles are your friends, not obstacles.',
        examples: ['Props interfaces for all components', 'Type-safe state management', 'Strongly typed API responses', 'No `any` types (use `unknown` if needed)']
      },
      {
        title: 'Progressive Enhancement',
        description: 'Build core functionality first, then layer in animations and enhancements. Mobile experience is not an afterthought.',
        examples: ['Semantic HTML foundation', 'CSS before JavaScript animations', 'Touch targets ≥ 44px', 'Graceful degradation for older browsers']
      },
      {
        title: 'No Premature Optimization',
        description: 'Implement for correctness and clarity first. Profile before optimizing. "Fast enough" beats "theoretically fastest."',
        examples: ['Readable code > clever code', 'Measure actual performance', 'Optimize bottlenecks, not hunches', 'Balance bundle size vs. developer experience']
      }
    ],
    antipatterns: [
      'Adding features not in the spec',
      'Refactoring unrelated code mid-task',
      '"This would be cool" feature creep',
      'Skipping types with `any` to move faster'
    ]
  },
  {
    id: 'validate',
    number: '03',
    title: 'VALIDATE',
    subtitle: 'Rigorous Testing & Continuous Verification',
    color: '#3b82f6',
    bgGradient: 'from-neon-blue/10 to-transparent',
    icon: CheckCircle2,
    description: 'Trust, but verify. Automated tests catch what humans miss. Type safety prevents runtime surprises.',
    principles: [
      {
        title: 'Type Checking',
        description: 'Run `tsc --noEmit` before committing. TypeScript errors are not suggestions—they\'re contract violations.',
        examples: ['Strict mode enabled', 'No implicit any', 'Null checks enforced', 'Exhaustive type narrowing']
      },
      {
        title: 'End-to-End Testing',
        description: 'Use Playwright to verify user flows work across browsers and devices. Test what users experience, not implementation details.',
        examples: ['Critical user journeys', 'Form submissions and validations', 'Responsive breakpoints', 'Animation completions', 'Accessibility tree navigation']
      },
      {
        title: 'Visual Regression',
        description: 'Screenshots and visual diffs catch unintended styling changes. Your eyes can\'t review every breakpoint every time.',
        examples: ['Component library snapshots', 'Mobile/tablet/desktop views', 'Dark mode variations', 'Hover/focus states']
      },
      {
        title: 'Performance Budgets',
        description: 'Measure Core Web Vitals. Lighthouse scores ≥ 90. Bundle size tracked in CI. Performance is a feature.',
        examples: ['LCP < 2.5s', 'FID < 100ms', 'CLS < 0.1', 'JavaScript bundle analyzed per PR']
      },
      {
        title: 'Accessibility Audits',
        description: 'Run axe-core in tests. Manual keyboard navigation. Screen reader testing. Accessibility is non-negotiable.',
        examples: ['@axe-core/playwright integration', 'Tab order verification', 'ARIA labels checked', 'Color contrast validation']
      }
    ],
    antipatterns: [
      '"It works on my machine" without tests',
      'Manual testing only (unscalable)',
      'Skipping mobile device testing',
      'Ignoring TypeScript errors temporarily',
      'No CI/CD pipeline validation'
    ]
  }
];

export function MethodologyDetails({ className }: MethodologyDetailsProps) {
  return (
    <div className={cn("w-full py-24 px-4 bg-gradient-to-b from-surface to-background", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            The Methodology
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Three phases. Zero ambiguity. Every step documented, tested, and reproducible.
          </p>
        </motion.div>

        {/* Methodology Phases */}
        <div className="space-y-24">
          {methodologyPhases.map((phase, phaseIndex) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: phaseIndex * 0.1 }}
                className="relative"
              >
                {/* Phase Container */}
                <div className={cn(
                  "bg-gradient-to-br p-8 md:p-12 rounded-2xl border-2",
                  `bg-gradient-to-br ${phase.bgGradient}`
                )}
                style={{ borderColor: phase.color }}
                >
                  {/* Phase Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${phase.color}20`, color: phase.color }}
                    >
                      <Icon className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-sm font-mono font-bold tracking-wider"
                          style={{ color: phase.color }}
                        >
                          {phase.number}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-lg text-zinc-400 mb-4">{phase.subtitle}</p>
                      <p className="text-zinc-300 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>

                  {/* Core Principles */}
                  <div className="space-y-6 mb-8">
                    {phase.principles.map((principle, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <ArrowRight
                            className="flex-shrink-0 w-5 h-5 mt-1"
                            style={{ color: phase.color }}
                          />
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {principle.title}
                            </h4>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                              {principle.description}
                            </p>
                            <div className="space-y-2">
                              {principle.examples.map((example, exIdx) => (
                                <div
                                  key={exIdx}
                                  className="flex items-start gap-2 text-sm text-zinc-500 font-mono"
                                >
                                  <span style={{ color: phase.color }}>→</span>
                                  <span>{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Anti-patterns */}
                  <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                      <span>⚠️</span>
                      Common Anti-patterns
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.antipatterns.map((antipattern, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-red-300/80"
                        >
                          <span className="text-red-500 flex-shrink-0">✗</span>
                          <span>{antipattern}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Arrow - not on last phase */}
                {phaseIndex < methodologyPhases.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center py-8"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${phase.color}30`, color: phase.color }}
                    >
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="inline-block bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Loop Never Ends
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              After Validate comes Plan again. Iteration is not failure—it's engineering.
              Each loop refines the system. Each cycle builds confidence. No vibe coding. Just repeatable, disciplined progress.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MethodologyDetails;
