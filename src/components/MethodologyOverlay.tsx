import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X, Copy, FileDown } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { toast } from "sonner@2.0.3";
import { Term } from "./TermComponents";

interface MethodologyOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MethodologyOverlay({ open, onOpenChange }: MethodologyOverlayProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCopyCitations = () => {
    const citations = `IFRS Conceptual Framework
IAS 32 / IFRS 9
UK Law Commission — digital assets
UCC Article 12
UNCITRAL MLETR
UK ETDA 2023 / Singapore ETA 2021
Germany eWpG / Switzerland DLT Act
BIS "unified ledger"`;
    
    navigator.clipboard.writeText(citations);
    toast.success("Copied 8 references");
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-[1600px] max-h-[900px] p-0 flex flex-col overflow-hidden max-[1024px]:max-w-[768px] max-[767px]:max-w-[390px]"
        data-methodology-overlay
        style={{
          backgroundColor: 'var(--surface-card)',
          border: `1px solid var(--border-default)`,
          borderRadius: 'var(--radius-large)',
          width: isMobile ? '390px' : '1600px',
          height: isMobile ? '720px' : '900px'
        }}
      >
        {/* Header - Fixed */}
        <div className="flex-shrink-0 border-b" style={{ borderColor: 'var(--border-default)' }}>
          <div className="flex items-start justify-between p-8 pb-5 max-[767px]:p-6 max-[767px]:pb-4">
            <div className="flex-1">
              <DialogTitle style={{ 
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-3)'
              }}>
                Methodology & framework references
              </DialogTitle>
              <DialogDescription style={{ 
                fontSize: 'var(--text-h3)',
                color: 'var(--text-muted)',
                lineHeight: '1.6'
              }}>
                Plain-English summary of the logic this tool applies. It's an analytical aid, not legal advice.
              </DialogDescription>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--space-2)',
                color: 'var(--text-muted)',
                marginTop: '-8px',
                marginRight: '-8px'
              }}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <ScrollArea className="flex-1 px-8 py-6 max-[767px]:px-6 max-[767px]:py-4">
          <div className="space-y-8 pb-4 max-w-[1500px]">
            {/* 1) The core idea */}
            <Section title="1) The core idea (60-second read)">
              <p style={{ 
                fontSize: 'var(--text-h2)',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                marginBottom: 'var(--space-4)',
                maxWidth: '1200px'
              }}>
                We judge tokenization by whether a token can act at the <InlineChip><Term termKey="official-gate" /></InlineChip>—the 
                place where a change must be recorded for it to count. If your token is both the <InlineChip>required key</InlineChip> and 
                an <InlineChip>auto-execute command</InlineChip> at that gate, the asset is truly tokenized. If not, you have 
                a claim wrapper.
              </p>
              <div className="flex flex-wrap gap-3">
                <GlossaryChip><Term termKey="official-gate" /></GlossaryChip>
                <GlossaryChip>Required key</GlossaryChip>
                <GlossaryChip>Auto-execute</GlossaryChip>
                <GlossaryChip><Term termKey="dvp" /></GlossaryChip>
              </div>
            </Section>

            {/* 2) Decision tree - Desktop vs Mobile */}
            {isMobile ? (
              <MobileDecisionTree />
            ) : (
              <DesktopDecisionTree />
            )}

            {/* 3-6) Use Accordion on Mobile, Direct sections on Desktop */}
            {isMobile ? (
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="scoring" style={{ border: `1px solid var(--border-default)`, borderRadius: 'var(--radius-default)', padding: 'var(--space-3)' }}>
                  <AccordionTrigger style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semibold)' }}>
                    3) Scoring rubric (0–100)
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScoringTable />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="report" style={{ border: `1px solid var(--border-default)`, borderRadius: 'var(--radius-default)', padding: 'var(--space-3)' }}>
                  <AccordionTrigger style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semibold)' }}>
                    4) What the report includes (1 page)
                  </AccordionTrigger>
                  <AccordionContent>
                    <ReportIncludes />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="references" style={{ border: `1px solid var(--border-default)`, borderRadius: 'var(--radius-default)', padding: 'var(--space-3)' }}>
                  <AccordionTrigger style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semibold)' }}>
                    5) Framework references
                  </AccordionTrigger>
                  <AccordionContent>
                    <FrameworkReferences />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="limits" style={{ border: `1px solid var(--border-default)`, borderRadius: 'var(--radius-default)', padding: 'var(--space-3)' }}>
                  <AccordionTrigger style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semibold)' }}>
                    6) Limits & assumptions
                  </AccordionTrigger>
                  <AccordionContent>
                    <LimitsAssumptions />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <>
                <Section title="3) Scoring rubric (0–100)">
                  <ScoringTable />
                </Section>

                <Section title="4) What the report includes (1 page)">
                  <ReportIncludes />
                </Section>

                <Section title="5) Framework references (short list, plain-English)">
                  <FrameworkReferences />
                </Section>

                <Section title="6) Limits & assumptions">
                  <LimitsAssumptions />
                </Section>
              </>
            )}
          </div>
        </ScrollArea>

        {/* Footer - Fixed */}
        <div 
          className="flex-shrink-0 flex justify-between items-center p-8 pt-5 border-t max-[767px]:p-6 max-[767px]:pt-4"
          style={{ 
            borderColor: 'var(--border-default)',
            backgroundColor: 'var(--surface-card)'
          }}
        >
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleCopyCitations}
              className="gap-2"
              size="lg"
            >
              <Copy size={18} />
              Copy citations
            </Button>
            <Button
              variant="secondary"
              onClick={handleDownloadPDF}
              className="gap-2"
              size="lg"
            >
              <FileDown size={18} />
              Download as PDF
            </Button>
          </div>
          <Button onClick={() => onOpenChange(false)} size="lg">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ============================================================================
// Section Components
// ============================================================================

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ 
        fontSize: 'var(--text-h1)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--text-primary)',
        marginBottom: 'var(--space-4)'
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function InlineChip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--accent-primary)'
    }}>
      {children}
    </span>
  );
}

function GlossaryChip({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="px-3 py-2 rounded"
      style={{ 
        fontSize: 'var(--text-body)',
        backgroundColor: 'var(--accent-subtle)',
        color: 'var(--accent-primary)',
        border: `1px solid var(--accent-primary)`,
        display: 'inline-block'
      }}
    >
      {children}
    </span>
  );
}

// ============================================================================
// Desktop Decision Tree
// ============================================================================

function DesktopDecisionTree() {
  const steps = [
    { letter: 'A', label: 'Thing?', desc: 'Is there a legally cognizable right (excludable/enforceable)?' },
    { letter: 'B', label: 'IFRS Asset?', desc: 'Does the entity control that right (present resource from past events)?' },
    { letter: 'C', label: 'Classify', desc: 'Map legal type → likely IFRS class and official gate.' },
    { letter: 'D', label: 'Tokenization Test', desc: 'Token = required key + auto-execute at the official gate?' },
    { letter: 'E', label: 'Cash-leg', desc: 'Is settlement money co-located/atomic?' },
    { letter: 'F', label: 'Failure', desc: 'Recovery, disputes, insolvency, forks are defined?' }
  ];

  return (
    <Section title="2) Decision tree (A–F) at a glance">
      <div className="flex items-start gap-4 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div key={step.letter} className="flex items-center gap-4 flex-shrink-0">
            <div className="flex flex-col items-center" style={{ minWidth: '220px' }}>
              <div 
                className="flex items-center justify-center mb-3"
                style={{ 
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                {step.letter}
              </div>
              <div style={{ 
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-2)',
                textAlign: 'center'
              }}>
                {step.label}
              </div>
              <div style={{ 
                fontSize: 'var(--text-h3)',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                {step.desc}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div style={{ 
                width: '40px',
                height: '2px',
                backgroundColor: 'var(--border-default)',
                marginBottom: '70px',
                flexShrink: 0
              }} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

// ============================================================================
// Mobile Decision Tree - Vertical
// ============================================================================

function MobileDecisionTree() {
  const steps = [
    { letter: 'A', label: 'Thing?', desc: 'Is there a legally cognizable right (excludable/enforceable)?' },
    { letter: 'B', label: 'IFRS Asset?', desc: 'Does the entity control that right (present resource from past events)?' },
    { letter: 'C', label: 'Classify', desc: 'Map legal type → likely IFRS class and official gate.' },
    { letter: 'D', label: 'Tokenization Test', desc: 'Token = required key + auto-execute at the official gate?' },
    { letter: 'E', label: 'Cash-leg', desc: 'Is settlement money co-located/atomic?' },
    { letter: 'F', label: 'Failure', desc: 'Recovery, disputes, insolvency, forks are defined?' }
  ];

  return (
    <Section title="2) Decision tree (A–F) at a glance">
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.letter} className="flex gap-3">
            <div 
              className="flex-shrink-0 flex items-center justify-center"
              style={{ 
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                fontSize: 'var(--text-caption)',
                fontWeight: 'var(--font-weight-semibold)'
              }}
            >
              {step.letter}
            </div>
            <div className="flex-1">
              <div style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-1)'
              }}>
                {step.label}
              </div>
              <div style={{ 
                fontSize: 'var(--text-caption)',
                color: 'var(--text-secondary)',
                lineHeight: '1.5'
              }}>
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ============================================================================
// Scoring Table
// ============================================================================

function ScoringTable() {
  const scores = [
    { check: 'Named Official Gate', weight: 20 },
    { check: 'Required key (necessary)', weight: 15 },
    { check: 'Auto-execute (sufficient)', weight: 15 },
    { check: 'Legal basis cited & valid', weight: 10 },
    { check: 'Recognized control (e.g., register/MLETR/UCC-12)', weight: 10 },
    { check: 'Atomic settlement (DvP/PvP)', weight: 20 },
    { check: 'Failure handling (recovery/insolvency/forks)', weight: 10 }
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid var(--border-default)` }}>
              <th style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-muted)',
                textAlign: 'left',
                padding: 'var(--space-3) 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Check
              </th>
              <th style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-muted)',
                textAlign: 'right',
                padding: 'var(--space-3) 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            {scores.map((item, index) => (
              <tr 
                key={index}
                style={{ 
                  borderBottom: index < scores.length - 1 ? `1px solid var(--border-default)` : 'none'
                }}
              >
                <td style={{ 
                  fontSize: 'var(--text-h3)',
                  color: 'var(--text-secondary)',
                  padding: 'var(--space-4) 0',
                  lineHeight: '1.6'
                }}>
                  {item.check}
                </td>
                <td style={{ 
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--accent-primary)',
                  textAlign: 'right',
                  padding: 'var(--space-4) 0'
                }}>
                  {item.weight}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div 
        className="mt-4 p-4 rounded"
        style={{ 
          backgroundColor: 'var(--accent-subtle)',
          fontSize: 'var(--text-body)',
          color: 'var(--text-secondary)',
          lineHeight: '1.6'
        }}
      >
        <strong style={{ color: 'var(--text-primary)' }}>Note:</strong> ≥80 Strong, 60–79 Probable, 40–59 Weak, &lt;40 Claim-wrapper.
      </div>
    </div>
  );
}

// ============================================================================
// Report Includes
// ============================================================================

function ReportIncludes() {
  const items = [
    'Outcome (Asset / Claim / Out-of-scope)',
    'Suggested framework (binding basis, token rail, cash-leg, governance)',
    'Business value (cycle time, risk/capital, ops)',
    'Decision trace (A–F)',
    'Citations'
  ];

  return (
    <ul className="space-y-3" style={{ paddingLeft: 'var(--space-6)' }}>
      {items.map((item, index) => (
        <li 
          key={index}
          style={{ 
            fontSize: 'var(--text-h3)',
            color: 'var(--text-secondary)',
            lineHeight: '1.7'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

// ============================================================================
// Framework References - Two Column on Desktop
// ============================================================================

function FrameworkReferences() {
  const references = [
    {
      title: 'IFRS Conceptual Framework',
      desc: 'defines an asset as a right controlled by the entity with potential benefit (used for A & B).'
    },
    {
      title: 'IAS 32 / IFRS 9',
      desc: 'financial assets (cash, equity of another entity, or contractual rights) (used for C).'
    },
    {
      title: 'UK Law Commission — digital assets',
      desc: 'recognizes certain digital "data objects" as personal property (C & D).'
    },
    {
      title: 'UCC Article 12',
      desc: 'controllable electronic records; "control" and take-free rules (D & F).'
    },
    {
      title: 'UNCITRAL MLETR',
      desc: 'electronic transferable records; legal control of e-bills/notes (C & D).'
    },
    {
      title: 'UK ETDA 2023 / Singapore ETA 2021',
      desc: 'local implementations of MLETR (C & D).'
    },
    {
      title: 'Germany eWpG / Switzerland DLT Act',
      desc: 'DLT can be the official securities register (D).'
    },
    {
      title: 'BIS "unified ledger"',
      desc: 'why co-locating money enables atomic settlement (E).'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {references.map((ref, index) => (
        <div 
          key={index}
          className="p-5 rounded"
          style={{ 
            backgroundColor: 'var(--bg-subtle)',
            border: `1px solid var(--border-default)`
          }}
        >
          <div style={{ 
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--accent-primary)',
            marginBottom: 'var(--space-3)'
          }}>
            {ref.title}
          </div>
          <div style={{ 
            fontSize: 'var(--text-h3)',
            color: 'var(--text-secondary)',
            lineHeight: '1.7'
          }}>
            {ref.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// Limits & Assumptions
// ============================================================================

function LimitsAssumptions() {
  const items = [
    'We classify; we don\'t give legal opinions.',
    'Jurisdiction rules vary; always confirm local law.',
    'Scores are heuristics for diligence, not binding ratings.',
    'Privacy/PII should never be placed on-chain; use credentials and revocation lists.'
  ];

  return (
    <ul className="space-y-3" style={{ paddingLeft: 'var(--space-6)' }}>
      {items.map((item, index) => (
        <li 
          key={index}
          style={{ 
            fontSize: 'var(--text-h3)',
            color: 'var(--text-secondary)',
            lineHeight: '1.7'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}