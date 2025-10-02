# How It Works Overlay System

## Overview
The ACP Tokenization DS now includes an informational overlay system that helps users understand the methodology and framework behind the tool.

## Components

### 1. HowItWorksOverlay.tsx
**Dimensions**: 760×620 (desktop) / 360×640 (mobile)

**Purpose**: Explains the 4-step process of the tokenization advisor

**Structure**:
- **Header**: Title "How it works (3 inputs → clear answer)" with subtitle disclaimer
- **Four Step Cards** (2×2 grid on desktop, stacked on mobile):
  1. **Pick 3 inputs** - Asset/Right, Jurisdiction, Official Gate
     - Includes helper tooltip: "What's an Official Gate?"
     - Tooltip explains: "The place where a change must be recorded for it to count..."
  
  2. **We traverse the decision tree (A–F)**
     - Mini stepper showing A-F steps
     - Explains the 6-step validation process
  
  3. **We score feasibility**
     - Explains the 0-100 scoring system
     - Lists the 7 criteria
  
  4. **We recommend a framework**
     - Explains the one-page PDF output

- **Example Strip**: Shows a complete example flow
  - Investment Security · Germany · Official Gate: Registry of Record → Tokenized Asset (Score 88)

- **Bottom Actions**:
  - "View Method & References" (secondary) - navigates to MethodologyOverlay
  - "Got it" (primary) - closes overlay

### 2. MethodologyOverlay.tsx
**Dimensions**: 920×720 (desktop) / 768×1024 (tablet) / 390×720 (mobile)

**Purpose**: Plain-English summary of the logic this tool applies. It's an analytical aid, not legal advice.

**Sections**:
1. **The core idea (60-second read)**
   - Plain-English explanation of tokenization test
   - Inline glossary chips: Official Gate (ACP), Required key, Auto-execute, Atomic settlement
   - Core concept: Token must act at the Official Gate

2. **Decision tree (A–F) at a glance**
   - **Desktop**: Horizontal stepper with 6 steps
   - **Mobile**: Vertical list with step circles
   - Each step includes letter, label, and one-line explanation

3. **Scoring rubric (0–100)**
   - Table with 7 checks and weights:
     - Named Official Gate (20 pts)
     - Required key (15 pts)
     - Auto-execute (15 pts)
     - Legal basis cited & valid (10 pts)
     - Recognized control (10 pts)
     - Atomic settlement (20 pts)
     - Failure handling (10 pts)
   - Score ranges: ≥80 Strong, 60–79 Probable, 40–59 Weak, <40 Claim-wrapper

4. **What the report includes (1 page)**
   - Bullets listing report components:
     - Outcome (Asset / Claim / Out-of-scope)
     - Suggested framework
     - Business value
     - Decision trace (A–F)
     - Citations

5. **Framework references (short list, plain-English)**
   - **Desktop/Tablet**: Two-column grid
   - **Mobile**: Single column
   - 8 references with plain-English explanations:
     - IFRS Conceptual Framework
     - IAS 32 / IFRS 9
     - UK Law Commission — digital assets
     - UCC Article 12
     - UNCITRAL MLETR
     - UK ETDA 2023 / Singapore ETA 2021
     - Germany eWpG / Switzerland DLT Act
     - BIS "unified ledger"

6. **Limits & assumptions**
   - 4 bullet points clarifying tool limitations:
     - Classification vs legal opinions
     - Jurisdiction variations
     - Heuristic nature of scores
     - Privacy/PII guidance

## Trigger Points

### From ScreenInputs (01 Inputs screen):

1. **"How it works" Card** (main content area)
   - Clickable card with hover effect
   - Opens HowItWorksOverlay

2. **"About" Button** (header)
   - Opens HowItWorksOverlay

3. **"Method" Button** (header)
   - Opens MethodologyOverlay directly

### Navigation Flow:
```
HowItWorksOverlay
  ↓ (Click "View Method & References")
MethodologyOverlay

OR

ScreenInputs Header
  ↓ (Click "Method" button)
MethodologyOverlay
```

### Interactive Features:

**Copy Citations**
- Copies all 8 framework references to clipboard
- Displays toast notification: "Copied 8 references"

**Download as PDF**
- Triggers browser print dialog
- Content formatted for print-ready output

## Design System Compliance

### Typography
- Title: `var(--text-h2)` (18px), semibold
- Subtitle: `var(--text-body)` (14px), muted
- Body text: `var(--text-body)` (14px), secondary
- Captions: `var(--text-caption)` (12px)

### Colors
- Surface: `var(--surface-card)` (#ffffff)
- Background: `var(--bg-subtle)` (#f8f9fa)
- Primary text: `var(--text-primary)` (#1a1a1a)
- Secondary text: `var(--text-secondary)` (#525252)
- Muted text: `var(--text-muted)` (#a3a3a3)
- Accent: `var(--accent-primary)` (#2563eb)
- Border: `var(--border-default)` (#e5e5e5)

### Spacing
- Padding: 24px (`var(--space-6)`)
- Gap: 16px (`var(--space-4)`)
- Card internal padding: 16px
- Section spacing: 24px

### Elevation
- Overlay: `var(--elevation-overlay)`
- Cards: `var(--elevation-card)`

### Border Radius
- Large: `var(--radius-large)` (12px)
- Default: `var(--radius-default)` (8px)

## Accessibility

### WCAG AA Compliance
- ✅ Body text 14px+ (meets size requirement)
- ✅ Contrast ratios meet AA standards
- ✅ Tooltips open on hover/focus
- ✅ Keyboard navigation supported
- ✅ Close button with aria-label
- ✅ Proper heading hierarchy

### Mobile Optimizations

**HowItWorksOverlay:**
- ✅ 360×640 mobile variant
- ✅ Step cards stack vertically
- ✅ Touch-friendly button sizes
- ✅ Scrollable content with proper overflow
- ✅ Responsive typography
- ✅ Full-width dialog on mobile

**MethodologyOverlay:**
- ✅ 920×720 desktop
- ✅ 768×1024 tablet variant
- ✅ 390×720 mobile variant
- ✅ Decision tree converts from horizontal to vertical on mobile
- ✅ Sections 3-6 use accordions on mobile for space efficiency
- ✅ Two-column references on desktop/tablet, single column on mobile
- ✅ Scrollable body with fixed header and footer

### Interactive Elements
- All buttons have proper cursor states
- Hover effects on clickable cards
- Focus states on interactive elements
- Close icon accessible via keyboard

## Terminology Integration

### Term Component Usage
Both overlays use the `<Term>` component to display terminology consistently:

```tsx
<Term termKey="official-gate" />
```

This ensures:
- Terminology respects the current mode (Plain/Legal/Dual)
- Tooltips provide definitions
- Book icons link to glossary
- Mobile shows tap-to-reveal dialogs

### Example in HowItWorksOverlay:
- "What's an Official Gate?" helper link
- Inline terminology in example strip
- Consistent with rest of application

## State Management

### Local State (ScreenInputs.tsx)
```tsx
const [howItWorksOpen, setHowItWorksOpen] = useState(false);
const [methodologyOpen, setMethodologyOpen] = useState(false);
```

### Navigation Between Overlays
```tsx
onViewMethodology={() => {
  setHowItWorksOpen(false);  // Close first overlay
  setMethodologyOpen(true);   // Open second overlay
}}
```

## Implementation Details

### Dialog Component
Uses shadcn/ui Dialog component:
- Modal overlay
- Escape key to close
- Click outside to close
- Focus trap
- Scroll lock on body

### Responsive Breakpoints
- Desktop: ≥768px
- Mobile: <768px
- Small mobile: <480px

### CSS Classes
```css
/* Desktop */
.max-w-[760px] max-h-[90vh]

/* Mobile override */
.max-[767px]:max-w-[360px] .max-[767px]:max-h-[640px]
```

### Grid Layout
```tsx
// Desktop: 2 columns
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

// Mobile: Stacks automatically
```

## Content Guidelines

### Step Card Structure
```tsx
<StepCard
  icon={<IconComponent size={20} />}
  title="Bold Title"
  subtitle="Optional subtitle (caption size)"
  explanation="One-line explanation (body text)"
  helper={<TooltipComponent />}  // Optional
  miniStepper={<StepperComponent />}  // Optional
/>
```

### Icons Used
- FileText (Pick inputs)
- GitBranch (Decision tree)
- BarChart3 (Score feasibility)
- FileCheck (Recommend framework)
- X (Close button)
- HelpCircle (Helper tooltips)

## Example Data

### Strong ACP Example
- **Asset**: Investment Security
- **Jurisdiction**: Germany
- **Official Gate**: Registry of Record (eWpG §16)
- **Outcome**: Tokenized Asset
- **Score**: 88/100

This example is shown in the example strip to help users understand the expected input/output relationship.

## Future Enhancements

### Potential Additions
- [ ] Animated transitions between overlays
- [ ] Video walkthrough integration
- [ ] Interactive decision tree visualization
- [ ] Example gallery with multiple scenarios
- [ ] Export methodology as PDF
- [ ] Multi-language support

### Accessibility Improvements
- [ ] Screen reader optimizations
- [ ] High contrast mode
- [ ] Reduced motion preferences
- [ ] Keyboard shortcut documentation

## Testing Checklist

### HowItWorksOverlay
- [x] Opens from "How it works" card click
- [x] Opens from "About" header button
- [x] Close button closes overlay
- [x] Escape key closes overlay
- [x] Click outside closes overlay
- [x] "View Method & References" navigates to MethodologyOverlay
- [x] "Got it" closes overlay
- [x] Desktop layout (760×620) displays correctly
- [x] Mobile layout (360×640) stacks step cards
- [x] Four step cards render with icons
- [x] Mini stepper (A-F) displays on step 2
- [x] "What's an Official Gate?" tooltip works
- [x] Example strip shows complete flow
- [x] All terminology integration works
- [x] Responsive breakpoints function correctly

### MethodologyOverlay
- [x] Opens from "Method" header button
- [x] Opens from "View Method & References" in HowItWorksOverlay
- [x] Close button closes overlay
- [x] Escape key closes overlay
- [x] Desktop layout (920×720) displays correctly
- [x] Tablet layout (768×1024) maintains two-column references
- [x] Mobile layout (390×720) converts to vertical stepper
- [x] Mobile accordions work for sections 3-6
- [x] "Copy citations" button copies 8 references
- [x] Toast notification appears on copy
- [x] "Download as PDF" triggers print dialog
- [x] Scrolling works correctly in body
- [x] Header remains fixed on scroll
- [x] Footer remains fixed on scroll
- [x] Decision tree horizontal stepper (desktop)
- [x] Decision tree vertical list (mobile)
- [x] Scoring table renders with proper formatting
- [x] Framework references display in two columns (desktop)
- [x] Framework references display in one column (mobile)
- [x] All inline glossary chips work
- [x] Term components integrate properly
- [x] All 6 sections render correctly
- [x] Color tokens match design system
- [x] Typography matches design system
- [x] Spacing matches design system

## Status
✅ **Complete and ready for production**

Both overlays are fully implemented, tested, and integrated with the existing ACP Tokenization DS design system and terminology framework.

---

*Last updated: How It Works Overlay implementation*