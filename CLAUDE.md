# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The **PIV Workflow Landing Page** is a single-page React application that demonstrates the Plan-Implement-Validate methodology for AI-assisted coding. The site is meta-recursive: it showcases the exact workflow used to build itself.

**Tech Stack:** React 18 + Vite, TypeScript (strict mode), Tailwind CSS, Framer Motion, Three.js

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint
npm run lint
```

## Architecture

### Core Philosophy: The PIV Loop

The application architecture mirrors its content—a three-phase workflow:

1. **Plan Phase** (Pink/`#ec4899`): Context injection, structured specifications
2. **Implement Phase** (Green/`#22c55e`): AI-assisted coding with strict adherence to plan
3. **Validate Phase** (Blue/`#3b82f6`): Type safety, mobile testing, linting

### Component Architecture

The project follows shadcn/ui patterns with three primary visual layers:

**Hero Layer (`NeonFlow`):**
- Canvas-based Three.js animation using `threejs-components/tubes1.min.js`
- Mouse interaction disturbs flow; clicks randomize colors
- Dark gradient overlay ensures text readability

**Core Layer (`ProcessLoop`):**
- State machine cycling through PIV phases using `setInterval`
- Desktop: SVG beam animation connecting cards using `motion.path` with `strokeDasharray`
- Mobile: Vertical stacking with individual card pulsing (SVG beam hidden)
- "System log" style text reinforces engineering theme

**Meta Layer (`IdeSimulation`):**
- Simulates VS Code/Cursor interface
- Custom typewriter effect hook for real-time code generation illusion
- Context badges (e.g., `@neon-flow.tsx`) demonstrate context injection

### Key Technical Patterns

**Animation Orchestration:**
- Framer Motion handles complex sequence choreography
- Desktop/mobile animations diverge significantly—use `hidden md:block` liberally
- Mobile performance: complex SVG animations are disabled on small screens

**State Management:**
- Component-local state for UI interactions
- Interval-based state machine for phase cycling in `ProcessLoop`

**Responsive Design:**
- Grid strategy: `grid-cols-1` → `grid-cols-3` (mobile → desktop)
- Touch targets: expanded padding on interactive elements
- Canvas resizing: `NeonFlow` listens to window resize events

## Design System

### Color Palette (Dark Mode Only)

Cyberpunk terminal aesthetic with semantic phase colors:

- Background: `#000000`
- Surface: `#0c0c0c` (high opacity cards)
- Borders: `white/10` (glass morphism)
- **Plan:** `#ec4899` (pink)
- **Implement:** `#22c55e` (green)
- **Validate:** `#3b82f6` (blue)
- Text: `#d1d5db` (zinc-300)

### Typography

- Headings: Sans-serif with `tracking-tighter`
- Code/Logs: `font-mono` (extensively used in technical components)

## Validation Checklist

Before considering any feature "done":

1. **Type Safety:** All components have interface definitions for props
2. **Mobile:** Test on actual mobile viewport, verify touch targets
3. **Canvas Resize:** `NeonFlow` must handle window resize gracefully
4. **Performance:** Verify no complex animations run on mobile unless intentional

## File Organization

```
src/
├── components/
│   └── ui/              # All visual components
│       ├── neon-flow.tsx
│       ├── process-loop.tsx
│       └── ide-simulation.tsx
├── lib/
│   └── utils.ts         # cn() for Tailwind class merging
├── App.tsx              # Main composition
└── index.css            # Global styles + Tailwind
```

## Key Implementation Notes

**Three.js Integration:**
- Import specific build: `threejs-components/tubes1.min.js`
- Canvas rendering requires proper cleanup on unmount

**Framer Motion Paths:**
- Use `pathLength` for SVG beam animations
- Animate `strokeDasharray` for "drawing" effect

**Hermeneutic Design:**
- Maintain coherence between Part (individual components) and Whole (narrative arc)
- Content and implementation should mirror each other (recursion principle)

## Future Extensions

- Live LLM integration for `IdeSimulation`
- Light mode (Blueprint style) using Tailwind `dark:` variants
- `prefers-reduced-motion` support for accessibility
