# Terminology System - Acceptance Criteria Checklist

## ✅ 1. App defaults to Plain-English
- [x] Default terminology mode set to 'plain' in AppContext.tsx (line 85)
- [x] TerminologyToggle shows Plain mode selected on initial load
- [x] All screens show plain-English terms by default

## ✅ 2. Single toggle controls terminology across all screens
- [x] TerminologyToggle component in header with 3 states: Plain, Legal, Dual
- [x] Toggle state stored in AppContext and accessible via useAppContext()
- [x] All Term and TermLabel components use terminologyMode from context
- [x] Changes propagate instantly to:
  - Inputs screen (ScreenInputs.tsx)
  - Show Work screen (ScreenShowWork.tsx)
  - Report screen (ScreenReport.tsx)

## ✅ 3. Plain titles with optional legal subtitles
- [x] "Intended Official Gate" replaces "Intended ACP Binding Path"
- [x] "Official Gate" replaces "ACP Path" 
- [x] "Atomic settlement" replaces "DvP/PvP"
- [x] "Required key?" replaces "Necessary?"
- [x] "Auto-execute?" replaces "Sufficient?"
- [x] Legal terms shown in tooltips and parentheses in Dual mode
- [x] TermLabel shows format: "Plain (Legal)" in Dual mode

## ✅ 4. Glossary searchable with 10+ entries, opens contextually
- [x] Comprehensive GLOSSARY with 30+ entries in terminology.tsx
- [x] GlossaryModal with search functionality
- [x] Category filters: Core Concepts, Legal, Financial, Technical
- [x] Contextual opening: Book icon next to every glossary term
- [x] Clicking book icon filters glossary to that specific term
- [x] "Learn more in glossary →" link in tooltips opens filtered glossary
- [x] Filter notice shows which term is being viewed with "Clear filter" button

## ✅ 5. Report uses Plain-English with legal in parentheses (Dual mode)
- [x] Report screen uses Term components throughout
- [x] Terms automatically show "Plain (Legal)" format in Dual mode
- [x] Examples:
  - "Official Gate (ACP)" in outcome summary
  - "Atomic settlement (DvP/PvP)" in cash-leg section
- [x] All terminology consistent with chosen mode

## ✅ 6. No truncation on mobile; tooltips → expandable info sheets
- [x] Mobile detection hook (useIsMobile) checks screen width < 768px
- [x] Terms use Dialog component on mobile instead of Tooltip
- [x] CSS prevents truncation:
  - `white-space: normal`
  - `word-break: break-word`
  - `overflow-wrap: break-word`
- [x] Mobile dialog shows:
  - Term name
  - Definition
  - Citations
  - "View full glossary →" button
- [x] Glossary drawer is full-width on mobile
- [x] Header controls stack appropriately on small screens
- [x] Book icons remain visible and clickable on mobile
- [x] Mobile prioritizes Plain-English with legal in tap-to-reveal detail (DialogDescription)

## ✅ 7. Content Bundle - Exact Definitions
- [x] Official Gate: "The official place where a change must be recorded for it to count."
- [x] Required key: "Without this key, the official gate won't change the record."
- [x] Auto-execute: "With this key and conditions met, the system changes the record without extra approvals."
- [x] Atomic settlement: "Both sides move together—or not at all."
- [x] Controllable Electronic Record: "A digital record you can control like possession, with take-free protection for good-faith buyers."
- [x] Electronic Transferable Record: "An electronic stand-in for paper title/IOUs, made legally effective by 'control'."
- [x] Crypto-securities Register: "A blockchain register that is the official share/bond ledger."

## ✅ 8. Legal Rigor Maintained
- [x] Legal terms discoverable via:
  - Hover tooltips (desktop)
  - Tap-to-reveal dialogs (mobile)
  - Subtitle in Dual mode
  - Book icon → filtered glossary
- [x] Legal terms exportable in PDF:
  - Terminology Reference section (when in Plain mode)
  - Shows "Plain = Legal" mappings with definitions
  - Legal & Regulatory Citations with full legal forms
  - Citations include legal terminology: CER, ETR, DvP/PvP, ACP, Crypto-Wertpapierregister
- [x] Mobile prioritizes Plain-English, legal shown in DialogDescription

## Additional Features Implemented

### Visual Affordances
- [x] Book icon (BookOpen, 12-14px) next to all glossary terms
- [x] Clicking icon opens GlossaryDrawer filtered to that term
- [x] Dual mode displays "Plain (Legal)" format
- [x] Tooltips meet WCAG AA contrast requirements
- [x] Tooltip width: 280-360px
- [x] "Learn more in glossary →" styled as link in tooltips

### Glossary Features
- [x] Searchable by term name or definition
- [x] Category filtering with color-coded badges
- [x] Shows term count (e.g., "30 of 30 terms")
- [x] Displays legal alias for each term
- [x] Shows "Where" field for context
- [x] Citations with source and text
- [x] Slide-in animation from right
- [x] Backdrop overlay with click-to-close
- [x] Keyboard accessible (ESC to close)

### Responsive Design
- [x] Mobile-first tooltip → dialog conversion
- [x] Responsive header controls
- [x] Full-width glossary on mobile
- [x] No text truncation on any screen size
- [x] Touch-friendly interaction areas
- [x] Proper spacing on small screens

## Test Scenarios

### Desktop (> 768px)
1. Default to Plain mode ✅
2. Toggle between Plain/Legal/Dual modes ✅
3. Hover over terms to see tooltips ✅
4. Click book icons to open filtered glossary ✅
5. Search glossary by keyword ✅
6. Filter by category ✅

### Mobile (< 768px)
1. Tap terms to open dialog instead of tooltip ✅
2. Dialog shows full definition and citations ✅
3. No text truncation on long terms ✅
4. Book icons remain visible ✅
5. Glossary drawer is full-width ✅
6. Header controls stack properly ✅

### All Modes
1. Plain: Shows "Official Gate" with legal in tooltip ✅
2. Legal: Shows "ACP" with plain in tooltip ✅
3. Dual: Shows "Official Gate (ACP)" inline ✅

## File Updates Summary

### Core Files Modified
- `/components/AppContext.tsx` - Added glossaryFilterTerm state
- `/components/TermComponents.tsx` - Added mobile detection, Dialog for mobile, book icons
- `/components/TerminologyControls.tsx` - Added filter notice, book icon handler
- `/components/ScreenInputs.tsx` - Updated all copy to Plain-English
- `/components/ScreenShowWork.tsx` - Updated all copy to Plain-English
- `/components/ScreenReport.tsx` - Updated all copy to Plain-English
- `/App.tsx` - Added responsive classes to header controls
- `/styles/globals.css` - Added mobile responsive rules

### All Acceptance Criteria: ✅ PASSED
