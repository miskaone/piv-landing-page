This is a comprehensive **Design & Technical Specification Document** for the "PIV Workflow" Landing Page. This document serves as the "Blueprints" for the application we just built, detailing the architecture, design system, and narrative strategy.

------

# Project Specification: The PIV Workflow

Version: 1.0.0

Theme: Recursive Design / AI-Assisted Engineering

Tech Stack: React (Vite), TypeScript, Tailwind CSS, Framer Motion

------

## 1. Executive Summary

The **PIV Workflow** landing page is a single-page application (SPA) designed to showcase a disciplined, engineering-first approach to AI-assisted coding.

Unlike generic AI-generated templates, this project utilizes a **Recursive Design Strategy**: the website's content explains the exact process used to build the website itself. It moves beyond "Vibe Coding" (blindly trusting AI) to the **PIV Loop (Plan, Implement, Validate)**, emphasizing human architectural oversight and rigorous validation.

## 2. Core Narrative & Content Strategy

The application is structured to guide the user through the three stages of the workflow.

### 2.1 The Philosophy: PIV vs. Vibe Coding

- **Vibe Coding:** Random prompting, low stability, "looks good but breaks."
- **PIV Workflow:**
  - **Plan:** Structured Context Injection (MCP), PRDs, Architecture.
  - **Implement:** AI acts as the "Hands," strictly following the plan.
  - **Validate:** Rigorous testing (Types, Mobile, Linting) before iteration.

### 2.2 The Hermeneutic Circle

The design process follows Heidegger’s Hermeneutic Circle—oscillating between the **Part** (individual components like the Neon Flow) and the **Whole** (the overall narrative arc) to ensure cohesion.

------

## 3. Technical Architecture

### 3.1 Stack

- **Framework:** React 18 + Vite (Fast HMR, optimized build).
- **Language:** TypeScript (Strict type safety).
- **Styling:** Tailwind CSS (Utility-first, responsive).
- **Animation:** Framer Motion (Complex sequence orchestration).
- **Graphics:** Three.js / Canvas (via `threejs-components` for the Hero).
- **Icons:** Lucide React.

### 3.2 File Structure

The project follows a modern `shadcn/ui` architecture:

Plaintext

```
src/
├── components/
│   ├── ui/
│   │   ├── neon-flow.tsx       # Hero: 3D Tubes Background
│   │   ├── process-loop.tsx    # Core: PIV Cycle & SVG Animations
│   │   ├── ide-simulation.tsx  # Meta: Simulated Prompting Interface
│   │   └── ...
├── lib/
│   └── utils.ts                # cn() helper for Tailwind class merging
├── App.tsx                     # Main layout and composition
└── index.css                   # Global styles & Tailwind directives
```

------

## 4. Component Specifications

### 4.1 The Hero: `NeonFlow`

- **Visual Goal:** Capture attention immediately with "Organized Chaos."
- **Technical Implementation:**
  - Uses a `<canvas>` element.
  - Imports a specific build of `tubes1.min.js` from `threejs-components`.
  - **Interaction:** Mouse movement disturbs the flow; clicks randomize colors.
  - **Styling:** Overlaid with a dark gradient to ensure text readability.

### 4.2 The Core: `ProcessLoop`

- **Visual Goal:** Visualize the cyclic nature of PIV.
- **State Machine:**
  - Uses `setInterval` to cycle through active states: `0 (Plan) -> 1 (Implement) -> 2 (Validate)`.
- **Animation Logic:**
  - **Desktop:** An SVG beam (`motion.path`) physically connects the cards. The path animates using `strokeDasharray` and `pathLength`.
  - **Mobile:** Cards stack vertically; the beam is hidden, replaced by vertical spacing and individual card pulsing.
  - **Content:** Text mimics a "System Log" (e.g., `> GENERATING_ARTIFACT: PRD.md`), reinforcing the engineering theme.

### 4.3 The Meta Layer: `IdeSimulation`

- **Visual Goal:** Answer "How do you prompt?" by showing it.
- **Implementation:**
  - Simulates a VS Code / Cursor interface.
  - **Typewriter Effect:** A custom hook creates the illusion of the AI generating code in real-time.
  - **Context Badge:** Explicitly highlights files like `@neon-flow.tsx` to prove the use of Context Injection.

------

## 5. Design System

### 5.1 Color Palette (Dark Mode)

The site uses a "Cyberpunk Terminal" palette.

| **Color**      | **Hex**    | **Usage**                            |
| -------------- | ---------- | ------------------------------------ |
| **Background** | `#000000`  | Main body background                 |
| **Surface**    | `#0c0c0c`  | Card backgrounds (with high opacity) |
| **Border**     | `white/10` | Subtle glass borders                 |
| **Neon Pink**  | `#ec4899`  | **Plan** Phase / Hero accents        |
| **Neon Green** | `#22c55e`  | **Implement** Phase / Success states |
| **Neon Blue**  | `#3b82f6`  | **Validate** Phase / Links           |
| **Text**       | `#d1d5db`  | Primary body text (Zinc-300)         |

### 5.2 Typography

- **Headings:** Sans-serif (System default or Inter). Tight tracking (`tracking-tighter`) for a modern look.
- **Code/Logs:** Monospace (`font-mono`). Used heavily in the `ProcessLoop` and `IdeSimulation` to denote technical precision.

### 5.3 Mobile Responsiveness

- **Grid Strategy:** `grid-cols-1` on mobile → `grid-cols-3` on desktop.
- **Touch Targets:** Buttons and cards have expanded padding for touch interaction.
- **Performance:** complex SVG animations (the beam) are strictly `hidden md:block` to save battery/performance on mobile devices.

------

## 6. Validation Strategy (QA)

As per the PIV workflow, the design itself has passed the following validation checks:

1. **Visual Regression:** The `NeonFlow` canvas correctly resizes on window resize events.
2. **Type Safety:** All components define Interfaces for their props (e.g., `interface TubesBackgroundProps`).
3. **Accessibility:**
   - Colors pass contrast ratios (White text on Black bg).
   - Animations use `framer-motion` but can be wrapped in `prefers-reduced-motion` checks if scaled.

------

## 7. Future Roadmap

- **Integration:** Connect the `IdeSimulation` to a real LLM API (Anthropic/OpenAI) to make the chat truly live.
- **Theme Toggle:** While currently Dark Mode only, a "Light Mode" (Blueprint style) could be added using Tailwind's `dark:` classes.
- **Analytics:** Add telemetry to track which stage of the PIV loop users hover over the most.