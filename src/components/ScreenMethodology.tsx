import { Button } from "./ui/button";
import { Copy, FileDown, ArrowLeft } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { Term } from "./TermComponents";

interface ScreenMethodologyProps {
  onNavigate: (screen: string) => void;
}

export default function ScreenMethodology({ onNavigate }: ScreenMethodologyProps) {
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      {/* Header */}
      <div 
        className="border-b sticky top-0 z-40"
        style={{ 
          backgroundColor: 'var(--surface-card)',
          borderColor: 'var(--border-default)'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('inputs')}
              className="gap-2"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            <div>
              <h1 style={{ 
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)'
              }}>
                Methodology & framework references
              </h1>
              <p style={{ 
                fontSize: 'var(--text-body)',
                color: 'var(--text-muted)',
                marginTop: 'var(--space-1)'
              }}>
                Plain-English summary of the logic this tool applies. It's an analytical aid, not legal advice.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleCopyCitations}
              className="gap-2"
            >
              <Copy size={16} />
              Copy citations
            </Button>
            <Button
              variant="secondary"
              onClick={handleDownloadPDF}
              className="gap-2"
            >
              <FileDown size={16} />
              Download as PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="space-y-8">
          {/* 1) The core idea */}
          <Section title="1) The core idea (60-second read)">
            <p style={{ 
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-4)'
            }}>
              We judge tokenization by whether a token can act at the <InlineChip><Term termKey="official-gate" /></InlineChip>—the 
              place where a change must be recorded for it to count. If your token is both the <InlineChip>required key</InlineChip> and 
              an <InlineChip>auto-execute command</InlineChip> at that gate, the asset is truly tokenized. If not, you have 
              a claim wrapper.
            </p>
            <div className="flex flex-wrap gap-2">
              <GlossaryChip><Term termKey="official-gate" /></GlossaryChip>
              <GlossaryChip>Required key</GlossaryChip>
              <GlossaryChip>Auto-execute</GlossaryChip>
              <GlossaryChip><Term termKey="dvp" /></GlossaryChip>
            </div>
          </Section>

          {/* 2) Decision tree */}
          <Section title="2) Decision tree (A–F) at a glance">
            <DecisionTree />
          </Section>

          {/* 3) Scoring rubric */}
          <Section title="3) Scoring rubric (0–100)">
            <ScoringTable />
          </Section>

          {/* 4) What the report includes */}
          <Section title="4) What the report includes (1 page)">
            <ReportIncludes />
          </Section>

          {/* 5) Framework references */}
          <Section title="5) Framework references">
            <FrameworkReferences />
          </Section>

          {/* 6) Limits & assumptions */}
          <Section title="6) Limits & assumptions">
            <LimitsAssumptions />
          </Section>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Section Components
// ============================================================================

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ 
        fontSize: 'var(--text-h2)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--text-primary)',
        marginBottom: 'var(--space-4)'
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function InlineChip({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="px-2 py-1 rounded mx-1"
      style={{ 
        fontSize: 'inherit',
        backgroundColor: 'var(--accent-subtle)',
        color: 'var(--accent-primary)',
        display: 'inline-block'
      }}
    >
      {children}
    </span>
  );
}

function GlossaryChip({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="px-3 py-1 rounded"
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
// Decision Tree
// ============================================================================

function DecisionTree() {
  const steps = [
    { letter: 'A', label: 'Thing?', desc: 'Is there a legally cognizable right (excludable/enforceable)?' },
    { letter: 'B', label: 'IFRS Asset?', desc: 'Does the entity control that right (present resource from past events)?' },
    { letter: 'C', label: 'Classify', desc: 'Map legal type → likely IFRS class and official gate.' },
    { letter: 'D', label: 'Tokenization Test', desc: 'Token = required key + auto-execute at the official gate?' },
    { letter: 'E', label: 'Cash-leg', desc: 'Is settlement money co-located/atomic?' },
    { letter: 'F', label: 'Failure', desc: 'Recovery, disputes, insolvency, forks are defined?' }
  ];

  return (
    <div className="flex items-start gap-4 overflow-x-auto pb-4">
      {steps.map((step, index) => (
        <div key={step.letter} className="flex items-center gap-4 flex-shrink-0">
          <div className="flex flex-col items-center" style={{ minWidth: '180px' }}>
            <div 
              className="flex items-center justify-center mb-3"
              style={{ 
                width: '40px',
                height: '40px',
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
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-2)',
              textAlign: 'center'
            }}>
              {step.label}
            </div>
            <div style={{ 
              fontSize: 'var(--text-caption)',
              color: 'var(--text-secondary)',
              lineHeight: '1.5',
              textAlign: 'center'
            }}>
              {step.desc}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div style={{ 
              width: '32px',
              height: '2px',
              backgroundColor: 'var(--border-default)',
              marginBottom: '60px',
              flexShrink: 0
            }} />
          )}
        </div>
      ))}
    </div>
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
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid var(--border-default)` }}>
              <th style={{ 
                fontSize: 'var(--text-caption)',
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
                fontSize: 'var(--text-caption)',
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
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-secondary)',
                  padding: 'var(--space-4) 0',
                  lineHeight: '1.5'
                }}>
                  {item.check}
                </td>
                <td style={{ 
                  fontSize: 'var(--text-body)',
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
          lineHeight: '1.5'
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
    <ul className="space-y-2" style={{ paddingLeft: 'var(--space-6)' }}>
      {items.map((item, index) => (
        <li 
          key={index}
          style={{ 
            fontSize: 'var(--text-body)',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

// ============================================================================
// Framework References - Two Column Grid
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
    <div className="grid grid-cols-2 gap-4">
      {references.map((ref, index) => (
        <div 
          key={index}
          className="p-4 rounded"
          style={{ 
            backgroundColor: 'var(--surface-card)',
            border: `1px solid var(--border-default)`,
            boxShadow: 'var(--elevation-card)'
          }}
        >
          <div style={{ 
            fontSize: 'var(--text-body)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--accent-primary)',
            marginBottom: 'var(--space-2)'
          }}>
            {ref.title}
          </div>
          <div style={{ 
            fontSize: 'var(--text-body)',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
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
    <ul className="space-y-2" style={{ paddingLeft: 'var(--space-6)' }}>
      {items.map((item, index) => (
        <li 
          key={index}
          style={{ 
            fontSize: 'var(--text-body)',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
