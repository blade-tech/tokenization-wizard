import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { HelpCircle, Info, RotateCcw, CheckCircle, X } from "lucide-react";
import {
  GavelIcon,
  ShieldCheckIcon,
  CubeIcon,
  LinkIcon,
  BankIcon,
} from "./icons";
import {
  Stepper,
  DecisionPathCard,
  ScoreGauge,
  ACPBadge,
  RecommendationCard,
  BusinessValueBlock,
  ExportBar,
} from "./acp-components";
import { useAppContext } from "./AppContext";
import { getDisplayValue } from "./terminology";
import { Term } from "./TermComponents";

interface ScreenShowWorkProps {
  onNavigate: (screen: string) => void;
}

export default function ScreenShowWork({ onNavigate }: ScreenShowWorkProps) {
  const { data, updateData, getScore, getScoreLabel, getOutcome, terminologyMode } = useAppContext();
  const [currentStep, setCurrentStep] = useState(3);

  const handleExportPDF = () => {
    onNavigate('report');
  };

  const handleCopySummary = () => {
    const summary = `Tokenization Analysis Summary
Asset Type: ${data.assetType}
Jurisdiction: ${data.jurisdiction}
ACP Path: ${data.bindingPath}
Outcome: ${getOutcome()}
Score: ${getScore()}/100 — ${getScoreLabel()}`;
    navigator.clipboard.writeText(summary);
    alert('Summary copied to clipboard!');
  };

  const handleCopyCitations = () => {
    const citations = `[1] IFRS Conceptual Framework §4.3–4.20 — Asset as present economic resource controlled by entity
[2] UCC § 8-106 — Control of certificated or uncertificated securities
[3] IAS 32 / IFRS 9 — Classification and measurement of financial instruments
[4] UCC § 12-105 — Controllable electronic records and control framework
[5] SEC Custody Rule 206(4)-2 — Qualified custodian requirements for investment advisers
[6] BIS Unified Ledgers — Project mBridge — atomic DvP on shared infrastructure
[7] UCC § 12-104 — Qualifying purchaser takes free of claims
[8] UK Law Commission (2023) — Digital assets as property — 'data objects' framework`;
    navigator.clipboard.writeText(citations);
    alert('Citations copied to clipboard!');
  };
  
  const score = getScore();
  const scoreLabel = getScoreLabel();
  const outcome = getOutcome();

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        backgroundColor: 'var(--bg-subtle)',
        width: '1440px',
        minHeight: '1200px',
        margin: '0 auto'
      }}
    >
      {/* Header with Stepper */}
      <div 
        className="border-b"
        style={{ 
          backgroundColor: 'var(--bg-default)',
          borderColor: 'var(--border-default)'
        }}
      >
        <div className="px-12 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 style={{ 
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)'
              }}>
                Tokenization Advisor
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="gap-2">
                <HelpCircle size={16} />
                About
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Info size={16} />
                Method
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => onNavigate('inputs')}
              >
                <RotateCcw size={16} />
                Start Over
              </Button>
            </div>
          </div>
          
          <Stepper currentStep={currentStep} compact />
        </div>
      </div>

      {/* Main Layout: 3 columns */}
      <div className="flex-1 flex gap-6 p-6 overflow-auto">
        
        {/* Left Panel - Input Summary (320px) */}
        <div className="w-80 flex-shrink-0">
          <Card 
            className="p-6 sticky top-6"
            style={{ 
              backgroundColor: 'var(--surface-card)',
              boxShadow: 'var(--elevation-card)',
              borderRadius: 'var(--radius-default)',
              borderColor: 'var(--border-default)'
            }}
          >
            <h3 style={{ 
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              Input Summary
            </h3>
            
            <div className="space-y-4">
              <div>
                <div style={{ 
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-2)'
                }}>
                  Asset Type
                </div>
                <ACPBadge variant="acp">{getDisplayValue(data.assetType, terminologyMode)}</ACPBadge>
              </div>
              
              <div>
                <div style={{ 
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-2)'
                }}>
                  Jurisdiction
                </div>
                <ACPBadge variant="default">{data.jurisdiction}</ACPBadge>
              </div>
              
              <div>
                <div style={{ 
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-2)'
                }}>
                  Official Gate
                </div>
                <ACPBadge variant="acp">{getDisplayValue(data.bindingPath, terminologyMode)}</ACPBadge>
              </div>
              
              {data.settlementAsset && (
                <div>
                  <div style={{ 
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    Settlement Asset
                  </div>
                  <ACPBadge variant="ifrs">{getDisplayValue(data.settlementAsset, terminologyMode)}</ACPBadge>
                </div>
              )}
              
              {data.tokenRail && (
                <div>
                  <div style={{ 
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    Token Rail
                  </div>
                  <ACPBadge variant="default">{getDisplayValue(data.tokenRail, terminologyMode)}</ACPBadge>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Main Content - Decision Path Cards */}
        <div className="flex-1 space-y-6">
          
          {/* Step A - Is it a "Thing"? */}
          <DecisionPathCard
            icon={<CubeIcon />}
            title='A — Is there a legal object or right?'
            subtitle="(thing test: object of rights)"
            rationale="A 'thing' is any legally cognizable object of rights (res): physical object, right in rem/in personam, or a digital/data object recognized as property or as the subject of enforceable rights."
            severity="info"
            defaultExpanded={currentStep === 0}
            citations={[
              {
                source: "IFRS Conceptual Framework",
                text: "Asset as right & control — CF §4.3–4.20",
                link: "#"
              },
              {
                source: "UK Law Commission Digital Assets (2023)",
                text: "Recognition of 'data objects' as property capable of possession and transfer",
                link: "#"
              }
            ]}
          />
          
          <div className="flex gap-2 pl-16">
            <Badge 
              variant="outline"
              style={{ 
                backgroundColor: '#f0fdf4',
                color: 'var(--status-good)',
                borderColor: 'var(--status-good)'
              }}
            >
              <CheckCircle size={14} className="mr-1" />
              Yes — Proceed
            </Badge>
          </div>

          {/* Step B - IFRS Asset Test */}
          <DecisionPathCard
            icon={<ShieldCheckIcon />}
            title="B — Do you control it as an accounting asset?"
            subtitle="(IFRS asset test: holder-specific)"
            rationale="Does the entity control this right as a result of past events? If not, it is a thing but not your asset yet. Control requires the present ability to direct use and obtain substantially all remaining benefits."
            severity="info"
            defaultExpanded={currentStep === 1}
            citations={[
              {
                source: "IFRS Conceptual Framework §4.3–4.20",
                text: "Asset definition: A present economic resource controlled by the entity as a result of past events",
                link: "#"
              },
              {
                source: "IAS 38.13–38.17",
                text: "Control and identifiability criteria for intangible assets",
                link: "#"
              }
            ]}
          />
          
          <div className="flex gap-2 pl-16">
            <Badge 
              variant="outline"
              style={{ 
                backgroundColor: '#f0fdf4',
                color: 'var(--status-good)',
                borderColor: 'var(--status-good)'
              }}
            >
              <CheckCircle size={14} className="mr-1" />
              Control Confirmed
            </Badge>
          </div>

          {/* Step C - Classify */}
          <DecisionPathCard
            icon={<CubeIcon />}
            title="C — What category does it belong to?"
            subtitle="(classify: legal → accounting crosswalk)"
            rationale="Investment securities held through a custodian map to IAS 32 / IFRS 9 financial assets. Key official gate candidates for securities include: Custodian/Bailee (traditional), Settlement Rail (CSD/DTCC), Registry of Record (share register), or Ledger/Protocol (DLT-based). Each provides a distinct control mechanism recognized under securities law (UCC Article 8, UK CREST regulations, etc.)."
            severity="info"
            defaultExpanded={currentStep === 2}
            citations={[
              {
                source: "IAS 32 / IFRS 9",
                text: "Classification of financial assets: debt instruments, equity instruments, derivatives",
                link: "#"
              },
              {
                source: "UCC Article 8",
                text: "Investment securities: certificated, uncertificated, and security entitlements",
                link: "#"
              }
            ]}
          />
          
          <div className="flex gap-2 pl-16 flex-wrap">
            <ACPBadge variant="ifrs">{getDisplayValue('Financial Asset', terminologyMode)}</ACPBadge>
            <ACPBadge variant="acp">{getDisplayValue('Custodian / Bailee', terminologyMode)}</ACPBadge>
            <ACPBadge variant="outcome">{getDisplayValue('Tokenized Asset', terminologyMode)}</ACPBadge>
          </div>

          {/* Step D - Tokenization Test */}
          <DecisionPathCard
            icon={<LinkIcon />}
            title="D — Tokenization Test — Required key + Auto-execute command at the Official Gate?"
            subtitle="(binding to authoritative control point)"
            rationale="Is token control a required key and auto-execute command (under a rule/rulebook/statute) for the official gate to change the asset's state? For qualified custodians under SEC custody rules and UCC Article 8, properly authenticated token transfers can serve as both credential (necessary) and instruction (sufficient) to effect transfer of the security entitlement, resulting in a Tokenized Asset structure."
            severity="info"
            defaultExpanded={currentStep === 3}
            citations={[
              {
                source: "UCC § 12-105",
                text: "Controllable electronic records and control framework",
                link: "#"
              },
              {
                source: "UNCITRAL MLETR / UK ETDA 2023",
                text: "Electronic transferable records — control requirements and functional equivalence",
                link: "#"
              },
              {
                source: "eWpG §16 / Swiss DLT Act",
                text: "Crypto securities register and uncertificated securities on DLT",
                link: "#"
              }
            ]}
          />
          
          <div 
            className="pl-16 p-4"
            style={{ 
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-default)',
              border: `2px dashed var(--border-default)`
            }}
          >
            <div className="flex gap-6 mb-4">
              <div className="flex items-center gap-3">
                {data.isNecessary ? (
                  <CheckCircle size={18} style={{ color: 'var(--status-good)' }} />
                ) : (
                  <X size={18} style={{ color: 'var(--status-bad)' }} />
                )}
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-secondary)' }}>
                    <Term termKey="necessary-credential">{getDisplayValue('Necessary credential', terminologyMode)}</Term>?
                  </span>
                  <Switch 
                    checked={data.isNecessary}
                    onCheckedChange={(checked) => updateData({ isNecessary: checked })}
                  />
                  <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--text-body)' }}>
                    {data.isNecessary ? 'Yes' : 'No'}
                  </strong>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {data.isSufficient ? (
                  <CheckCircle size={18} style={{ color: 'var(--status-good)' }} />
                ) : (
                  <X size={18} style={{ color: 'var(--status-bad)' }} />
                )}
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-secondary)' }}>
                    <Term termKey="sufficient-instruction">{getDisplayValue('Sufficient instruction', terminologyMode)}</Term>?
                  </span>
                  <Switch 
                    checked={data.isSufficient}
                    onCheckedChange={(checked) => updateData({ isSufficient: checked })}
                  />
                  <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--text-body)' }}>
                    {data.isSufficient ? 'Yes' : 'No'}
                  </strong>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>
                Result:
              </span>
              <ACPBadge variant="outcome">{getDisplayValue(outcome, terminologyMode)}</ACPBadge>
            </div>
          </div>

          {/* Step E - Cash-leg & finality */}
          <DecisionPathCard
            icon={<BankIcon />}
            title="E — How is payment settled atomically?"
            subtitle="(cash-leg & finality: DvP/PvP)"
            rationale="Is the settlement asset co-located or atomically coupled for DvP/PvP? Tokenized deposits on the same permissioned chain enable atomic settlement through smart contracts, achieving true delivery-versus-payment with simultaneous, irreversible transfer of both legs. This eliminates settlement risk and enables T+0 finality."
            severity="info"
            defaultExpanded={currentStep === 4}
            citations={[
              {
                source: "BIS — Unified Ledgers",
                text: "Project mBridge, Project Jura: atomic DvP and cross-border settlement on shared ledgers",
                link: "#"
              },
              {
                source: "CPMI-IOSCO PFMI",
                text: "Principle 12: Exchange-of-value settlement systems should eliminate principal risk",
                link: "#"
              }
            ]}
          />
          
          <div className="flex gap-2 pl-16">
            <Badge 
              variant="outline"
              style={{ 
                backgroundColor: '#f0fdf4',
                color: 'var(--status-good)',
                borderColor: 'var(--status-good)'
              }}
            >
              <CheckCircle size={14} className="mr-1" />
              Atomic DvP Capable
            </Badge>
          </div>

          {/* Step F - Failure & enforceability */}
          <DecisionPathCard
            icon={<GavelIcon />}
            title="F — What if something goes wrong?"
            subtitle="(failure & enforceability: recovery, disputes, insolvency)"
            rationale="Key loss, disputes, insolvency, forks—what is the recovery path? Any take-free or control-beats-filing rules? UCC Article 12 provides take-free rules for transferees of controllable electronic records and controllable accounts in certain circumstances. Qualified custodians have established dispute resolution and insurance frameworks. Smart contract immutability must be balanced with legal override mechanisms for fraud, duress, or court orders."
            severity="warn"
            defaultExpanded={currentStep === 5}
            citations={[
              {
                source: "UCC § 12-104",
                text: "Qualifying purchaser takes free of claims — good faith purchase protection",
                link: "#"
              },
              {
                source: "UCC § 9-105",
                text: "Control of electronic chattel paper — priority rules",
                link: "#"
              },
              {
                source: "Local Insolvency Law",
                text: "Treatment of digital assets in bankruptcy: property of the estate vs. custodial arrangements",
                link: "#"
              }
            ]}
          />
          
          <div className="flex gap-2 pl-16">
            <Badge 
              variant="outline"
              style={{ 
                backgroundColor: '#fff7ed',
                color: 'var(--status-warn)',
                borderColor: 'var(--status-warn)'
              }}
            >
              Review Required
            </Badge>
          </div>

          {/* Bottom Section - Recommendation & Export */}
          <div className="mt-8 space-y-4">
            <RecommendationCard items={[
              { 
                label: "Binding basis", 
                value: data.legalBasis || "Not specified" 
              },
              { 
                label: "Token rail", 
                value: data.tokenRail || "Not specified" 
              },
              { 
                label: "Cash leg", 
                value: data.settlementAsset ? `${data.settlementAsset} for atomic settlement` : "Not specified" 
              },
              { 
                label: "Risk notes", 
                value: data.riskNotes || "Monitor regulatory guidance; maintain robust key management and disaster recovery procedures; consider insurance for operational risk" 
              },
              { 
                label: "Ops notes", 
                value: data.opsNotes || "Quarterly legal review of control mechanisms; annual audit of infrastructure and procedures" 
              }
            ]} />
            
            <ExportBar 
              onGeneratePDF={handleExportPDF}
              onCopySummary={handleCopySummary}
              onCopyCitations={handleCopyCitations}
            />
          </div>
        </div>

        {/* Right Panel - Score & Business Value (360px) */}
        <div className="w-90 flex-shrink-0 space-y-6">
          
          {/* Score Gauge */}
          <Card 
            className="p-6"
            style={{ 
              backgroundColor: 'var(--surface-card)',
              boxShadow: 'var(--elevation-card)',
              borderRadius: 'var(--radius-default)',
              borderColor: 'var(--border-default)'
            }}
          >
            <h3 style={{ 
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              Control Score
            </h3>
            
            <div className="flex justify-center mb-6">
              <ScoreGauge score={score} variant="ring" compact />
            </div>
            
            <div 
              className="pt-4"
              style={{ borderTop: `1px solid var(--border-default)` }}
            >
              <h4 style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-3)'
              }}>
                Score Breakdown
              </h4>
              
              <div className="space-y-2">
                <div 
                  className="grid grid-cols-[1fr_auto_auto] gap-2 pb-2"
                  style={{ 
                    borderBottom: `1px solid var(--border-default)`,
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-muted)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}
                >
                  <span>Category</span>
                  <span className="text-right">Weight</span>
                  <span className="text-right">Earned</span>
                </div>
                
                <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    Thing Recognition
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textAlign: 'right' }}>
                    15
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'right' }}>
                    {data.assetType ? '15' : '0'}
                  </span>
                </div>
                
                <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    Asset Control
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textAlign: 'right' }}>
                    20
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'right' }}>
                    {data.jurisdiction ? '20' : '0'}
                  </span>
                </div>
                
                <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    Legal Classification
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textAlign: 'right' }}>
                    15
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'right' }}>
                    {data.bindingPath ? '15' : '0'}
                  </span>
                </div>
                
                <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    Tokenization Strength
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textAlign: 'right' }}>
                    25
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'right' }}>
                    {data.isNecessary && data.isSufficient ? '25' : (data.isNecessary || data.isSufficient ? '12' : '0')}
                  </span>
                </div>
                
                <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    Settlement Mechanism
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textAlign: 'right' }}>
                    15
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'right' }}>
                    {data.settlementAsset === 'Tokenized Deposit' ? '15' : (data.settlementAsset ? '10' : '0')}
                  </span>
                </div>
                
                <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    Legal Enforceability
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textAlign: 'right' }}>
                    10
                  </span>
                  <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'right' }}>
                    {data.legalBasis ? '10' : '5'}
                  </span>
                </div>
                
                <div 
                  className="grid grid-cols-[1fr_auto_auto] gap-2 items-center pt-2 mt-2"
                  style={{ 
                    borderTop: `2px solid var(--border-default)`,
                    fontWeight: 'var(--font-weight-bold)'
                  }}
                >
                  <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-primary)' }}>
                    Total Score
                  </span>
                  <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-primary)', textAlign: 'right' }}>
                    100
                  </span>
                  <span style={{ 
                    fontSize: 'var(--text-body)', 
                    color: score >= 80 ? 'var(--status-good)' : score >= 60 ? 'var(--status-info)' : score >= 40 ? 'var(--status-warn)' : 'var(--status-bad)',
                    textAlign: 'right'
                  }}>
                    {score}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Business Value */}
          <Card 
            className="p-6"
            style={{ 
              backgroundColor: 'var(--surface-card)',
              boxShadow: 'var(--elevation-card)',
              borderRadius: 'var(--radius-default)',
              borderColor: 'var(--border-default)'
            }}
          >
            <h3 style={{ 
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              Business Impact
            </h3>
            
            {data.businessValue ? (
              <div style={{
                padding: 'var(--space-4)',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-default)',
                border: `1px solid var(--border-default)`
              }}>
                <p style={{ 
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-primary)',
                  lineHeight: '1.6'
                }}>
                  {data.businessValue}
                </p>
              </div>
            ) : (
              <>
                <BusinessValueBlock 
                  metrics={[
                    { 
                      label: "Settlement Time", 
                      value: "T+2 → T+0",
                      tooltip: "Reduction from 2-day to instant settlement via atomic DvP on shared ledger"
                    },
                    { 
                      label: "Cost Reduction", 
                      value: "−30–50%",
                      tooltip: "Margin improvement from reduced intermediary fees, custody costs, and automation of reconciliation"
                    },
                    { 
                      label: "Operational Breaks", 
                      value: "−70%",
                      tooltip: "Decrease in failed trades, breaks, and reconciliation issues through atomic settlement"
                    },
                    { 
                      label: "Liquidity Impact", 
                      value: "+15–25%",
                      tooltip: "Estimated increase in market depth from 24/7 trading, fractional ownership, and faster settlement"
                    }
                  ]}
                  compact
                />
                
                <p style={{ 
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-muted)',
                  marginTop: 'var(--space-4)',
                  lineHeight: '1.5'
                }}>
                  <strong>Assumptions:</strong> Institutional-grade custody, permissioned ledger with regulated participants, atomic DvP capability, existing legal framework (UCC/SEC). Estimates based on pilot programs and industry research.
                </p>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
