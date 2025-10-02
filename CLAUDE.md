# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Design System Tokens Creation** application - a legal analysis tool that evaluates whether digital tokens represent true asset control (ACP-bound tokenization) or merely contractual claims. The application provides a wizard-style interface with multiple screens for input collection, analysis display, and report generation.

**Core Concept**: The application assesses tokenization structures using the "Authoritative Control Point" (ACP) framework, which determines whether a token provides direct control over an asset (strong tokenization) or merely represents a claim against a custodian (claim-wrapper).

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## Architecture

### State Management
- **AppContext** (`src/components/AppContext.tsx`): Central state management using React Context
  - Stores user inputs (asset type, jurisdiction, binding path, etc.)
  - Manages three pre-loaded scenarios: `strong-acp`, `claim-wrapper`, and `inconclusive`
  - Provides scoring logic (0-100 scale) based on ACP binding strength
  - Controls terminology mode (`plain`, `legal`, or `dual`) for UI text display
  - Handles glossary modal state and filtering

### Screen Flow
The application uses a multi-screen wizard pattern:
1. **Inputs** (`ScreenInputs.tsx`): Collects asset type, jurisdiction, binding path, settlement details
2. **Show Work** (`ScreenShowWork.tsx`): Displays decision tree analysis and scoring breakdown
3. **Report** (`ScreenReport.tsx`): Generates professional PDF-ready assessment report
4. **Methodology** (`ScreenMethodology.tsx`): Explains the ACP framework and methodology

Navigation controlled by `currentScreen` state in `App.tsx`.

### Terminology System
- **Three modes**: Plain-English, Legal, or Dual (both inline)
- **Term components** (`TermComponents.tsx`):
  - `Term`: Interactive terms with tooltips/dialogs
  - `TermLabel`: Simple labels without interactivity
  - Mobile detection (<768px) switches tooltips to full-screen dialogs
- **Glossary** (`terminology.tsx`): 30+ term definitions with legal citations
  - Categories: Core Concepts, Legal, Financial, Technical
  - Searchable and filterable
  - Contextual opening via book icons next to terms

### Component Structure
- **UI Components** (`src/components/ui/`): Radix UI + shadcn/ui components (buttons, dialogs, tooltips, etc.)
- **ACP Components** (`acp-components.tsx`): Domain-specific components for legal citations, decision trees, scoring displays
- **Figma Integration** (`src/components/figma/`): Image handling with fallbacks for design system assets

### Design System Tokens
The app uses custom CSS variables for consistent theming:
- Typography: `--text-display-lg`, `--text-h1`, `--text-body`, `--text-caption`
- Colors: `--bg-default`, `--text-primary`, `--accent-primary`, `--status-good/warn/bad`
- Spacing: `--space-1` through `--space-8` (4px base scale)
- Elevations: `--elevation-card`, `--elevation-overlay`

All tokens defined in `src/styles/globals.css`.

## Key Technical Details

### Vite Configuration
- **Path aliases**: `@` resolves to `./src`
- **Build output**: `build/` directory
- **Dev server**: Port 3000 with auto-open
- Version-specific aliases for all Radix UI packages (prevents dependency conflicts)

### Scenario Loading
Three pre-configured scenarios demonstrate different tokenization outcomes:
- **Strong ACP** (Score 100): Germany eWpG crypto-securities register
- **Claim Wrapper** (Score 70): US warehouse receipt with custodian
- **Inconclusive** (Score 82): Singapore digital rights with uncertain property status

Scenarios auto-load when navigating to specific screens or clicking scenario buttons.

### Scoring Algorithm
Located in `AppContext.tsx` (`getScore()` function):
- Thing Recognition: 15 points
- Asset Control: 20 points
- Legal Classification: 15 points
- ACP Binding Strength: 25 points (necessary AND sufficient required for full points)
- Settlement Mechanism: 15 points (tokenized deposit = full, others = partial)
- Legal Enforceability: 10 points

Score ranges:
- 80-100: "Strong (proceed to structuring)"
- 60-79: "Probable (close gaps)"
- 40-59: "Weak (re-architect)"
- <40: "Claim-wrapper (label honestly)"

### Print/PDF Support
Report screen optimized for PDF export via browser print:
- `print:hidden` classes hide navigation elements
- CSS print media queries for proper page breaks
- Terminology reference section auto-included when in Plain mode

## Important Patterns

### Working with Terminology
Always use `Term` or `TermLabel` components instead of plain text for domain concepts:
```tsx
<Term term="acp" /> // Interactive with tooltip/dialog
<TermLabel term="tokenized-asset" /> // Display only
```

### Mobile Responsiveness
- Use `useIsMobile()` hook to detect <768px screens
- Tooltips automatically become dialogs on mobile
- Header controls stack vertically on small screens
- No text truncation allowed - use `white-space: normal` and `word-break: break-word`

### Adding New Glossary Terms
1. Add to `GLOSSARY` object in `terminology.tsx`
2. Include `plain`, `legal`, `definition`, `category`
3. Optional: `where` (context), `citations` (legal sources)
4. Use lowercase kebab-case keys (e.g., `'investment-security'`)

## File Naming Conventions
- React components: PascalCase (e.g., `ScreenInputs.tsx`)
- Utilities: kebab-case (e.g., `utils.ts`)
- Markdown docs: UPPERCASE (e.g., `ACCEPTANCE_CRITERIA.md`)

## Dependencies
- **React 18.3**: UI framework
- **Vite 6.3**: Build tool
- **Radix UI**: Headless component primitives
- **Tailwind CSS v4**: Utility-first styling
- **Lucide React**: Icon library
- **Sonner**: Toast notifications
