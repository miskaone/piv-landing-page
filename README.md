# PIV Workflow Landing Page

A meta-recursive single-page application that demonstrates the Plan-Implement-Validate (PIV) methodology for AI-assisted development. The page explains the workflow by showcasing the exact process used to build itself.

## 🎯 The Philosophy

**Stop Vibe Coding. Start Engineering.**

- **Vibe Coding**: Random prompting, low stability, "looks good but breaks"
- **PIV Workflow**: Plan → Implement → Validate. No guessing. No breaking.

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **3D Graphics**: Three.js (tubes effect)
- **Icons**: Lucide React
- **Testing**: Playwright + @axe-core/playwright

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ✅ Validation

### Type Checking

```bash
npm run type-check
```

### E2E Testing

```bash
# Run all tests
npm run test:e2e

# Run with UI
npm run test:e2e:ui

# Debug mode
npm run test:e2e:debug
```

## 📐 Architecture

The application consists of three main visual layers:

### 1. Hero Section (`TubesBackground`)
- 3D animated tubes using Three.js
- Mouse interaction: movement disturbs flow
- Click interaction: randomizes colors
- Dark gradient overlay for text readability

### 2. Core Section (`ProcessLoop`)
- Three-phase state machine (Plan → Implement → Validate)
- Auto-cycles every 4 seconds
- Click any phase card to jump immediately
- Desktop: SVG beam animation connects phases
- Mobile: Vertical stacking with pulsing indicators

### 3. Meta Section (`IdeSimulation`)
- VS Code/Cursor interface mockup
- Syncs with active ProcessLoop phase
- Shows real code and Playwright tests
- Typewriter effect for code display
- Context badges show file references

## 🎨 Design System

### Colors

- **Background**: `#000000` (pure black)
- **Surface**: `#0c0c0c` (card backgrounds)
- **Plan Phase**: `#ec4899` (neon pink)
- **Implement Phase**: `#22c55e` (neon green)
- **Validate Phase**: `#3b82f6` (neon blue)
- **Text**: `#d4d4d8` (zinc-300)

### Typography

- **Headings**: Sans-serif with tight tracking
- **Code/Logs**: Monospace font

### Responsive

- **Desktop**: 3-column grid with SVG animations
- **Mobile**: Vertical stack, simplified animations
- **Touch Targets**: Minimum 44px for accessibility

## 🧪 Test Coverage

- ✅ Canvas rendering and interaction
- ✅ Phase auto-cycling (4s intervals)
- ✅ Click-to-advance functionality
- ✅ SVG beam animations (desktop only)
- ✅ Mobile responsive layouts
- ✅ Touch target sizing (44px minimum)
- ✅ Typewriter effect completion
- ✅ WCAG AA accessibility compliance
- ✅ Component synchronization

## 📝 Meta-Recursion

The IdeSimulation component shows:
- **Plan Phase**: The actual user prompt for creating the NeonFlow component
- **Implement Phase**: Real code from `neon-flow.tsx`
- **Validate Phase**: Actual Playwright test output

This creates a self-referential loop: the page proves its own methodology by demonstrating it.

## 🏗 Project Structure

```
piv-landing-page/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── neon-flow.tsx       # Hero: 3D tubes
│   │       ├── process-loop.tsx    # Core: PIV cycle
│   │       └── ide-simulation.tsx  # Meta: code display
│   ├── lib/
│   │   └── utils.ts               # Utilities (cn helper)
│   ├── App.tsx                    # Main composition
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── tests/
│   ├── hero-section.spec.ts
│   ├── process-loop.spec.ts
│   ├── responsive.spec.ts
│   └── accessibility.spec.ts
├── playwright.config.ts
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 📚 Documentation

See [CLAUDE.md](./CLAUDE.md) for detailed guidance on working with this codebase.

## 🎓 Key Learnings

1. **Context Injection**: Use MCP to provide structured context to AI
2. **Architectural Discipline**: Human defines the structure, AI implements
3. **Rigorous Validation**: Type-check, test, and verify before iterating
4. **Meta-Recursion**: The best way to explain a process is to demonstrate it

---

Built with the PIV Workflow. No Vibe Coding allowed.
