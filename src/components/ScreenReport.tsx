import { QrCode, Download, Copy, CheckCircle } from "lucide-react";
import { ACPBadge } from "./acp-components";
import { Button } from "./ui/button";
import { useAppContext } from "./AppContext";
import { getDisplayValue } from "./terminology";
import { useState } from "react";

interface ScreenReportProps {
  onNavigate: (screen: string) => void;
}

export default function ScreenReport({ onNavigate }: ScreenReportProps) {
  const { data, getScore, getScoreLabel, getOutcome, terminologyMode } = useAppContext();
  const [copiedCitations, setCopiedCitations] = useState(false);
  
  const reportData = {
    assetType: data.assetType,
    jurisdiction: data.jurisdiction,
    outcome: getOutcome(),
    acpPath: data.bindingPath,
    ifrsClass: "Financial Asset",
    score: getScore(),
    scoreLabel: getScoreLabel(),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })
  };

  const decisionSteps = [
    { id: "A", label: "Thing?", result: "Yes — Legally cognizable object of rights under common law and IFRS CF" },
    { id: "B", label: "IFRS Asset?", result: "Yes — Present control as result of past events (custody arrangement)" },
    { id: "C", label: "Classify", result: "Investment Security → IAS 32/IFRS 9 Financial Asset" },
    { id: "D", label: "Tokenization", result: "Token = required key + auto-execute command (UCC Art. 8)" },
    { id: "E", label: "Cash-leg", result: terminologyMode === 'plain' ? "Atomic settlement via tokenized deposits on shared ledger" : "Atomic settlement (DvP/PvP) via tokenized deposits on shared ledger" },
    { id: "F", label: "Enforceability", result: "UCC take-free rules; custody insurance; legal override mechanisms" }
  ];

  // Terminology mappings for legal rigor in citations
  const terminologyMappings = [
    { plain: "Official Gate", legal: "ACP (Authoritative Control Point)", definition: "The official place where a change must be recorded for it to count" },
    { plain: "Required key", legal: "Necessary Credential", definition: "Without this key, the official gate won't change the record" },
    { plain: "Auto-execute", legal: "Sufficient Instruction", definition: "With this key and conditions met, the system changes the record without extra approvals" },
    { plain: "Atomic settlement", legal: "DvP/PvP (Delivery versus Payment / Payment versus Payment)", definition: "Both sides move together—or not at all" },
  ];
  
  // Generate citations based on jurisdiction and asset type
  const baseCitations = [
    { num: 1, source: "IFRS Conceptual Framework §4.3–4.20", text: "Asset as present economic resource controlled by entity" },
    { num: 2, source: "IAS 32 / IFRS 9", text: "Classification and measurement of financial instruments" },
  ];
  
  const jurisdictionCitations: Record<string, any[]> = {
    "Germany": [
      { source: "eWpG §16", text: "Crypto-securities register (Crypto-Wertpapierregister) as ACP for tokenized securities" },
      { source: "BaFin Guidance", text: "Federal Financial Supervisory Authority rules on digital securities" },
    ],
    "United States": [
      { source: "UCC § 7", text: "Warehouse receipts and bailment arrangements" },
      { source: "UCC § 8-106", text: "Control of certificated or uncertificated securities" },
      { source: "UCC § 12-105", text: "Controllable electronic records (CER) and control framework" },
      { source: "UCC § 9-105", text: "Control of deposit accounts and security interests" },
    ],
  };
  
  const additionalCitations = [
    { source: "SEC Custody Rule 206(4)-2", text: "Qualified custodian requirements for investment advisers" },
    { source: "BIS Unified Ledgers", text: "Project mBridge — atomic DvP on shared infrastructure" },
    { source: "UK Law Commission (2023)", text: "Digital assets as property — 'data objects' framework" },
    { source: "UNCITRAL MLETR", text: "Model Law on Electronic Transferable Records (ETR) framework" },
    { source: "ETDA 2023 (UK)", text: "Electronic Trade Documents Act — legal recognition of e-docs" },
  ];
  
  // Build citations array
  let citationsArray = [...baseCitations];
  
  // Add jurisdiction-specific citations
  const jurisdictionKey = Object.keys(jurisdictionCitations).find(key => 
    data.jurisdiction.includes(key)
  );
  if (jurisdictionKey) {
    citationsArray.push(...jurisdictionCitations[jurisdictionKey]);
  }
  
  // Add additional citations
  citationsArray.push(...additionalCitations);
  
  // Number them and cap at 8
  const citations = citationsArray.slice(0, 8).map((c, i) => ({ 
    num: i + 1, 
    ...c 
  }));
  
  const handleCopyCitations = () => {
    const citationsText = citations.map(c => 
      `[${c.num}] ${c.source} — ${c.text}`
    ).join('\n');
    navigator.clipboard.writeText(citationsText);
    setCopiedCitations(true);
    setTimeout(() => setCopiedCitations(false), 2000);
  };
  
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      {/* Action Bar - Only visible on screen, not in print */}
      <div 
        className="fixed top-20 right-4 z-50 flex flex-col gap-2 print:hidden"
        style={{ 
          backgroundColor: 'var(--surface-card)',
          boxShadow: 'var(--elevation-overlay)',
          border: `1px solid var(--border-default)`,
          borderRadius: 'var(--radius-default)',
          padding: 'var(--space-3)'
        }}
      >
        <Button 
          size="sm" 
          className="gap-2"
          onClick={handleDownloadPDF}
        >
          <Download size={16} />
          Download PDF
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          className="gap-2"
          onClick={handleCopyCitations}
        >
          {copiedCitations ? (
            <>
              <CheckCircle size={16} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy Citations
            </>
          )}
        </Button>
      </div>
      
      <div 
        className="bg-white report-print-container"
        style={{ 
          width: '8.5in',
          minHeight: '11in',
          margin: '0 auto',
          padding: '0.75in',
          paddingBottom: '1in',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '10pt',
          lineHeight: '1.4',
          color: 'var(--text-primary)',
          position: 'relative'
        }}
      >
      {/* Page Header Lockup - Print Only */}
      <div 
        className="hidden print:flex items-center justify-between pb-2 mb-3"
        style={{ borderBottom: `1px solid var(--border-default)` }}
      >
        <div style={{ 
          fontSize: '10pt',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--accent-primary)'
        }}>
          ACP Tokenization DS
        </div>
        <div style={{ 
          fontSize: '9pt',
          color: 'var(--text-muted)'
        }}>
          {reportData.date}
        </div>
      </div>
      
      {/* Header */}
      <div 
        className="print-compact pb-4 mb-4"
        style={{ borderBottom: `2px solid var(--border-default)` }}
      >
        <h1 className="print:text-[16pt]" style={{ 
          fontSize: '20pt',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--text-primary)',
          marginBottom: '0.25rem',
          lineHeight: '1.2'
        }}>
          Tokenization Recommendation — {getDisplayValue(reportData.assetType, terminologyMode)} in {reportData.jurisdiction}
        </h1>
        <div className="flex items-center justify-between">
          <div style={{ 
            fontSize: '9pt',
            color: 'var(--text-secondary)'
          }}>
            Generated: {reportData.date} at {reportData.time}
          </div>
          <div style={{ 
            fontSize: '9pt',
            color: 'var(--text-muted)',
            fontStyle: 'italic'
          }}>
            Analytical output; not legal advice
          </div>
        </div>
      </div>

      {/* Summary Row */}
      <div 
        className="print-compact mb-4 p-3 flex items-center gap-3 flex-wrap"
        style={{ 
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-default)'
        }}
      >
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '9pt', color: 'var(--text-secondary)' }}>Outcome:</span>
          <ACPBadge variant="outcome">{reportData.outcome}</ACPBadge>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '9pt', color: 'var(--text-secondary)' }}>
            Official Gate{terminologyMode !== 'plain' && <span style={{ color: 'var(--text-muted)' }}> (ACP)</span>}:
          </span>
          <ACPBadge variant="acp">{getDisplayValue(reportData.acpPath, terminologyMode)}</ACPBadge>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '9pt', color: 'var(--text-secondary)' }}>IFRS Class:</span>
          <ACPBadge variant="ifrs">{reportData.ifrsClass}</ACPBadge>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '9pt', color: 'var(--text-secondary)' }}>Score:</span>
          <span style={{ 
            fontSize: '11pt', 
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--status-good)'
          }}>
            {reportData.score}/100 — {reportData.scoreLabel}
          </span>
        </div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="print-section-spacing grid grid-cols-2 gap-4 mb-4">
        
        {/* Left Column - Framework */}
        <div>
          <div 
            className="mb-2 pb-1.5"
            style={{ borderBottom: `1px solid var(--border-default)` }}
          >
            <h2 style={{ 
              fontSize: '12pt',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)'
            }}>
              Suggested Tokenization Framework
            </h2>
          </div>
          
          <div className="space-y-2" style={{ fontSize: '9pt' }}>
            <div>
              <div style={{ 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: '0.125rem'
              }}>
                Binding Basis
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                {data.legalBasis || "Qualified custodian under SEC Rule 206(4)-2; UCC Article 8 control of security entitlements; token control as credential + instruction to custodian"}
              </div>
            </div>
            
            <div>
              <div style={{ 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: '0.125rem'
              }}>
                Token Rail
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                {data.tokenRail || "Permissioned blockchain"} with institutional-grade security, throughput, and finality guarantees; ERC-1400-style transfer restrictions for regulatory compliance
              </div>
            </div>
            
            <div>
              <div style={{ 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: '0.125rem'
              }}>
                Cash Leg
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                {data.settlementAsset || "Tokenized deposits from regulated bank"} on same ledger; Atomic settlement{terminologyMode !== 'plain' && <span> (DvP)</span>} via smart contract for simultaneous, irreversible settlement with T+0 finality
              </div>
            </div>
            
            <div>
              <div style={{ 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: '0.125rem'
              }}>
                Governance & Recovery
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                Key loss: Multi-sig recovery via custodian + client attestation. Disputes: Arbitration per custody agreement + legal override capability. Forks: Follow longest chain per network rulebook; custodian discretion for contentious splits
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Business Value */}
        <div>
          <div 
            className="mb-2 pb-1.5"
            style={{ borderBottom: `1px solid var(--border-default)` }}
          >
            <h2 style={{ 
              fontSize: '12pt',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)'
            }}>
              Business Value Proposition
            </h2>
          </div>
          
          {data.businessValue ? (
            <p style={{ 
              fontSize: '9pt',
              color: 'var(--text-secondary)', 
              lineHeight: '1.6',
              paddingLeft: '1rem'
            }}>
              {data.businessValue}
            </p>
          ) : (
            <ul className="space-y-2" style={{ fontSize: '9pt', paddingLeft: '1rem' }}>
              <li style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Settlement acceleration:</strong> T+2 → T+0 via Atomic settlement{terminologyMode !== 'plain' && <span> (DvP/PvP)</span>}, eliminating counterparty risk and reducing capital tied up in settlement
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Cost reduction:</strong> 30–50% margin improvement from reduced intermediary fees, custody costs, and automated reconciliation
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Operational efficiency:</strong> 70% reduction in failed trades, breaks, and exceptions through programmable compliance and Atomic settlement{terminologyMode !== 'plain' && <span> (DvP/PvP)</span>}
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Liquidity expansion:</strong> 15–25% increase in market depth from 24/7 trading, fractional ownership, and global accessibility
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Compliance automation:</strong> Programmable transfer restrictions, real-time reporting, and embedded regulatory controls reduce compliance overhead
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Decision Tree Trace */}
      <div className="print-section-spacing mb-4">
        <div 
          className="mb-2 pb-1.5"
          style={{ borderBottom: `1px solid var(--border-default)` }}
        >
          <h2 style={{ 
            fontSize: '12pt',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--text-primary)'
          }}>
            Decision Tree Trace (A–F)
          </h2>
        </div>
        
        {/* Full version - shown by default and in print if space allows */}
        <div className="decision-tree-print-full grid grid-cols-6 gap-2">
          {decisionSteps.map((step) => (
            <div 
              key={step.id}
              className="p-2"
              style={{ 
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-default)',
                borderLeft: `3px solid var(--status-good)`
              }}
            >
              <div style={{ 
                fontSize: '10pt',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem'
              }}>
                {step.id} {step.label}
              </div>
              <div style={{ 
                fontSize: '8pt',
                color: 'var(--text-secondary)',
                lineHeight: '1.3'
              }}>
                {step.result}
              </div>
            </div>
          ))}
        </div>
        
        {/* Compact version - icons only, shown in print if space is tight */}
        <div className="decision-tree-print-compact flex items-center gap-1" style={{ display: 'none' }}>
          {decisionSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div 
                className="flex items-center justify-center"
                style={{ 
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--status-good)',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '11pt',
                  fontWeight: 'var(--font-weight-bold)'
                }}
              >
                {step.id}
              </div>
              {index < decisionSteps.length - 1 && (
                <div style={{ 
                  width: '16px',
                  height: '2px',
                  backgroundColor: 'var(--border-default)',
                  margin: '0 2px'
                }} />
              )}
            </div>
          ))}
          <div style={{ 
            marginLeft: '8px',
            fontSize: '8pt',
            color: 'var(--text-muted)'
          }}>
            All steps passed
          </div>
        </div>
      </div>

      {/* Terminology Reference - Shows legal forms */}
      {terminologyMode === 'plain' && (
        <div className="print-section-spacing mb-4">
          <div 
            className="mb-2 pb-1.5"
            style={{ borderBottom: `1px solid var(--border-default)` }}
          >
            <h2 style={{ 
              fontSize: '12pt',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)'
            }}>
              Terminology Reference
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {terminologyMappings.map((term, index) => (
              <div key={index} style={{ fontSize: '8pt' }}>
                <div style={{ 
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.125rem'
                }}>
                  {term.plain} = {term.legal}
                </div>
                <div style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '7.5pt',
                  fontStyle: 'italic'
                }}>
                  {term.definition}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-2" style={{ 
            fontSize: '7.5pt',
            color: 'var(--text-muted)',
            fontStyle: 'italic'
          }}>
            This report uses plain-English terminology. Legal forms shown above for precision in legal/regulatory contexts.
          </div>
        </div>
      )}
      
      {/* Citations - capped at 8 in print */}
      <div className="print-section-spacing mb-4">
        <div 
          className="mb-2 pb-1.5"
          style={{ borderBottom: `1px solid var(--border-default)` }}
        >
          <h2 style={{ 
            fontSize: '12pt',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--text-primary)'
          }}>
            Legal & Regulatory Citations
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {citations.slice(0, 8).map((citation, index) => (
            <div key={citation.num} className={`citation-item flex gap-2`} style={{ fontSize: '8pt' }}>
              <div style={{ 
                color: 'var(--text-muted)',
                fontFamily: 'ui-monospace, monospace',
                flexShrink: 0,
                minWidth: '1.5rem'
              }}>
                [{citation.num}]
              </div>
              <div className="flex-1">
                <span style={{ 
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)'
                }}>
                  {citation.source}
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>
                  {" — "}{citation.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        {citations.length > 8 && (
          <div className="print:hidden mt-2" style={{ 
            fontSize: '8pt',
            color: 'var(--text-muted)',
            fontStyle: 'italic'
          }}>
            Additional {citations.length - 8} citation(s) available on screen version
          </div>
        )}
      </div>

      {/* Footer */}
      <div 
        className="pt-4 mt-8 flex items-start justify-between print:mt-6 print:pt-3"
        style={{ 
          borderTop: `1px solid var(--border-default)`
        }}
      >
        <div style={{ flex: 1, maxWidth: '5in' }}>
          <div className="print:hidden" style={{ 
            fontSize: '14pt',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--accent-primary)',
            marginBottom: '0.5rem'
          }}>
            ACP Tokenization DS
          </div>
          <div style={{ 
            fontSize: '7pt',
            color: 'var(--text-muted)',
            lineHeight: '1.4'
          }}>
            <strong>Frameworks referenced:</strong> IFRS Conceptual Framework; IAS 32/IFRS 9; UK Law Commission Digital Assets; UCC Article 8 & 12; UNCITRAL MLETR; ETDA 2023 (UK); eWpG (Germany); Swiss DLT Act; BIS unified ledgers.
            <br />
            <br />
            <strong>Disclaimer:</strong> This tool applies recognized frameworks (IFRS; UCC 12; MLETR/ETDA; eWpG; Swiss DLT Act). It is not legal advice.
          </div>
        </div>
        
        <div className="print:hidden flex flex-col items-center" style={{ gap: '0.25rem', marginLeft: '1rem', flexShrink: 0 }}>
          <div 
            className="flex items-center justify-center"
            style={{ 
              width: '60px',
              height: '60px',
              border: `2px solid var(--border-default)`,
              borderRadius: 'var(--radius-default)',
              backgroundColor: 'var(--bg-subtle)'
            }}
          >
            <QrCode size={48} style={{ color: 'var(--text-muted)' }} />
          </div>
          <div style={{ 
            fontSize: '7pt',
            color: 'var(--text-muted)',
            textAlign: 'center'
          }}>
            View full analysis
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
