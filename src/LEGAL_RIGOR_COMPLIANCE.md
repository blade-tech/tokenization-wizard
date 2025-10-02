# Legal Rigor Compliance Documentation

## Overview
The ACP Tokenization DS maintains full legal rigor while presenting plain-English terminology by default. All legal terms remain discoverable, accessible, and exportable across all modes and devices.

## Content Bundle - Exact Definitions

### Core Terms
| Plain-English | Legal Form | Definition |
|--------------|------------|------------|
| Official Gate | ACP (Authoritative Control Point) | The official place where a change must be recorded for it to count. |
| Required key | Necessary Credential | Without this key, the official gate won't change the record. |
| Auto-execute | Sufficient Instruction | With this key and conditions met, the system changes the record without extra approvals. |
| Atomic settlement | DvP/PvP | Both sides move together—or not at all. |

### Advanced Legal Terms
| Plain-English | Legal Form | Definition |
|--------------|------------|------------|
| Controllable Electronic Record | CER (UCC Art. 12) | A digital record you can control like possession, with take-free protection for good-faith buyers. |
| Electronic Transferable Record | MLETR, ETDA | An electronic stand-in for paper title/IOUs, made legally effective by 'control'. |
| Crypto-securities Register | eWpG; Swiss DLT Act | A blockchain register that is the official share/bond ledger. |

## Legal Term Discoverability

### Desktop (≥ 768px)
1. **Hover Tooltips**
   - Shows alternate terminology (Legal when in Plain mode, Plain when in Legal mode)
   - Full definition with legal citations
   - "Learn more in glossary →" link to filtered glossary
   - WCAG AA contrast compliant

2. **Book Icons**
   - Visible next to all glossary terms (12-14px BookOpen)
   - Click opens glossary drawer filtered to that specific term
   - Accent color for visibility

3. **Dual Mode**
   - Shows both forms inline: "Official Gate (ACP)"
   - No tooltip needed as both are visible
   - Useful for legal review and documentation

### Mobile (< 768px)
1. **Tap-to-Reveal Dialogs**
   - **DialogTitle**: Plain-English term (prioritized)
   - **DialogDescription**: Legal term (tap-to-reveal detail)
   - Full definition and citations
   - "View full glossary →" button

2. **Book Icons**
   - Remain visible and touch-friendly
   - Open full glossary drawer (full-width on mobile)
   - Filtered to specific term

3. **No Truncation**
   - CSS rules ensure full text visible
   - `word-break: break-word`
   - `overflow-wrap: break-word`

## Legal Term Exportability - PDF Report

### Terminology Reference Section
When the report is in **Plain-English mode**, a dedicated "Terminology Reference" section is included showing:

```
Terminology Reference
─────────────────────

Official Gate = ACP (Authoritative Control Point)
The official place where a change must be recorded for it to count.

Required key = Necessary Credential
Without this key, the official gate won't change the record.

Auto-execute = Sufficient Instruction
With this key and conditions met, the system changes the record without extra approvals.

Atomic settlement = DvP/PvP (Delivery versus Payment / Payment versus Payment)
Both sides move together—or not at all.

This report uses plain-English terminology. Legal forms shown above for precision in legal/regulatory contexts.
```

### Legal & Regulatory Citations
Citations include full legal forms and statutory references:

```
Legal & Regulatory Citations
────────────────────────────

[1] IFRS Conceptual Framework §4.3–4.20 — Asset as present economic resource controlled by entity

[2] IAS 32 / IFRS 9 — Classification and measurement of financial instruments

[3] eWpG §16 — Crypto-securities register (Crypto-Wertpapierregister) as ACP for tokenized securities

[4] UCC § 12-105 — Controllable electronic records (CER) and control framework

[5] UNCITRAL MLETR — Model Law on Electronic Transferable Records (ETR) framework

[6] ETDA 2023 (UK) — Electronic Trade Documents Act — legal recognition of e-docs

[7] BIS Unified Ledgers — Project mBridge — atomic DvP on shared infrastructure

[8] UK Law Commission (2023) — Digital assets as property — 'data objects' framework
```

### Legal Forms in Citations
- **CER** = Controllable Electronic Record (UCC Article 12)
- **ETR** = Electronic Transferable Record (MLETR)
- **DvP/PvP** = Delivery versus Payment / Payment versus Payment
- **ACP** = Authoritative Control Point
- **Crypto-Wertpapierregister** = Crypto-securities register (German)
- **eWpG** = Gesetz über elektronische Wertpapiere (Electronic Securities Act)

## Mode-Specific Legal Rigor

### Plain-English Mode (Default)
✅ **Legal rigor maintained via:**
- Tooltips show legal terms on hover
- Mobile dialogs show legal terms in subtitle
- Book icons link to full glossary with legal definitions
- PDF includes "Terminology Reference" section
- Citations use full legal forms in parentheses

### Legal Mode
✅ **Plain-English accessible via:**
- Tooltips show plain terms on hover
- Mobile dialogs show plain terms in subtitle
- Book icons link to glossary
- All legal precision front and center

### Dual Mode
✅ **Full transparency:**
- Both terms shown inline: "Plain (Legal)"
- No tooltips needed
- Ideal for legal review, compliance, auditing
- PDF shows both forms throughout

## Compliance Scenarios

### Scenario 1: Attorney Review
**Need**: Legal precision required  
**Solution**: 
- Toggle to "Legal" mode
- All statutory references visible
- Citations include full legal forms
- Plain-English accessible via hover if needed

### Scenario 2: Business Stakeholder Presentation
**Need**: Accessibility without legal jargon  
**Solution**:
- Default "Plain" mode
- Legal terms in tooltips for clarification
- PDF Terminology Reference maps to legal forms
- Can toggle to Dual mode for Q&A

### Scenario 3: Regulatory Filing
**Need**: Export with full legal terminology  
**Solution**:
- Toggle to "Legal" or "Dual" mode
- Generate PDF
- Citations include all statutory references
- Terminology Reference provides mappings
- All legal forms present in export

### Scenario 4: Mobile Review (Executive)
**Need**: Quick review on phone, legal backup if needed  
**Solution**:
- Plain-English prioritized in main text
- Tap terms to see legal forms in dialog
- No truncation on small screens
- Full glossary accessible via book icons

## Legal Citations Coverage

### International Frameworks
- ✅ IFRS Conceptual Framework
- ✅ IAS 32 / IFRS 9 (Financial Instruments)
- ✅ UNCITRAL MLETR (Electronic Transferable Records)
- ✅ BIS (Bank for International Settlements)

### Jurisdiction-Specific
- ✅ **Germany**: eWpG §16, BaFin Guidance
- ✅ **United States**: UCC §7, §8-106, §12-105, §9-105
- ✅ **United Kingdom**: ETDA 2023, Law Commission 2023
- ✅ **Switzerland**: DLT Act (via eWpG reference)

### Regulatory
- ✅ SEC Custody Rule 206(4)-2
- ✅ CPMI-IOSCO PFMI (Payment, Clearing, Settlement)
- ✅ CSDR (Central Securities Depositories Regulation - EU)

## Glossary Legal Coverage

The comprehensive glossary includes 30+ terms with:
- Plain-English names
- Legal aliases
- Definitions
- Legal citations with source and text
- "Where" field for context
- Category classification (Core, Legal, Financial, Technical)

### Example Entry
```typescript
'official-gate': {
  plain: 'Official Gate',
  legal: 'ACP (Authoritative Control Point)',
  definition: 'The official place where a change must be recorded for it to count.',
  where: 'Registries, custodians, settlement rails, device/API controllers',
  category: 'core',
  citations: [
    { source: 'ACP Framework', text: 'Entity with exclusive authority to mutate asset state' }
  ]
}
```

## Quality Assurance

### Legal Rigor Checklist
- [x] All plain terms map to precise legal equivalents
- [x] Definitions are accurate and cite authoritative sources
- [x] Legal forms accessible in all modes (Plain, Legal, Dual)
- [x] PDF export includes terminology mappings
- [x] Citations include full statutory references
- [x] Legal forms shown in parentheses where appropriate
- [x] Mobile experience prioritizes Plain but reveals Legal on tap
- [x] No legal precision lost in simplification

### Accessibility Checklist
- [x] Plain-English default lowers barrier to entry
- [x] Legal terms discoverable without mode switching
- [x] Tooltips provide immediate clarification
- [x] Glossary provides comprehensive reference
- [x] PDF export maintains legal rigor
- [x] Mobile-friendly interaction patterns

### Export Checklist
- [x] PDF includes Terminology Reference (in Plain mode)
- [x] Citations include legal forms in parentheses
- [x] All statutory references properly cited
- [x] Legal precision maintained in all exports
- [x] Plain-English accessible for non-experts

## Conclusion

The ACP Tokenization DS successfully balances accessibility and legal rigor through:

1. **Plain-English Default**: Intuitive for business users
2. **Legal Precision Available**: One click/tap away
3. **Dual Mode**: Full transparency when needed
4. **Exportable Legal Forms**: PDF includes terminology mappings and citations
5. **Mobile-Optimized**: Prioritizes Plain, reveals Legal on tap
6. **Comprehensive Glossary**: 30+ terms with legal citations
7. **Statutory Coverage**: IFRS, UCC, eWpG, MLETR, ETDA, BIS, SEC

**Legal rigor is never compromised—it's made accessible.**

---

*Last updated: Requirements 8 & 9 implementation*
