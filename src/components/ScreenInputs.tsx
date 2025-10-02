import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, Info, HelpCircle, RotateCcw } from "lucide-react";
import {
  InputCard,
  AssetTypeSelect,
  BindingPathSelect,
  JurisdictionSelect,
  SettlementAssetSelect,
  TokenRailSelect,
} from "./acp-components";
import { useAppContext } from "./AppContext";
import { HowItWorksOverlay } from "./HowItWorksOverlay";

interface ScreenInputsProps {
  onNavigate: (screen: string) => void;
}

export default function ScreenInputs({ onNavigate }: ScreenInputsProps) {
  const { data, updateData, resetData } = useAppContext();
  
  // UI state
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);

  const handleRunAnalysis = () => {
    onNavigate('show-work');
  };

  const handleUseSample = () => {
    updateData({
      assetType: "Investment Security",
      jurisdiction: "Germany",
      bindingPath: "Registry of Record",
      settlementAsset: "Tokenized Deposit",
      tokenRail: "Permissioned chain",
      legalBasis: "eWpG §16 crypto securities register"
    });
    setAdvancedOpen(true);
  };

  const handleStartOver = () => {
    resetData();
    setAdvancedOpen(false);
  };

  const canRunAnalysis = data.assetType && data.jurisdiction && data.bindingPath;

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        backgroundColor: 'var(--bg-subtle)',
        width: '1440px',
        height: '1024px',
        margin: '0 auto'
      }}
    >
      {/* Header */}
      <div 
        className="border-b"
        style={{ 
          backgroundColor: 'var(--bg-default)',
          borderColor: 'var(--border-default)'
        }}
      >
        <div 
          className="px-12 py-6 flex items-start justify-between"
          style={{ maxWidth: '1440px', margin: '0 auto' }}
        >
          <div className="flex-1">
            <h1 style={{ 
              fontSize: 'var(--text-display-lg)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              lineHeight: '1.2',
              marginBottom: 'var(--space-2)'
            }}>
              Tokenization Advisor
            </h1>
            <p style={{ 
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              lineHeight: '1.6'
            }}>
              Apply law-anchored logic to classify and score tokenization feasibility. Not legal advice.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="gap-2"
              onClick={() => setHowItWorksOpen(true)}
            >
              <HelpCircle size={16} />
              About
            </Button>
            <Button 
              variant="ghost" 
              className="gap-2"
              onClick={() => setMethodologyOpen(true)}
            >
              <Info size={16} />
              Method
            </Button>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={handleStartOver}
            >
              <RotateCcw size={16} />
              Start Over
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="flex-1 overflow-auto"
        style={{ padding: '48px 72px' }}
      >
        <div style={{ maxWidth: '1296px', margin: '0 auto' }}>
          <div className="grid gap-8">
            
            {/* Intro Card - Clickable */}
            <Card 
              className="p-6 cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setHowItWorksOpen(true)}
              style={{ 
                backgroundColor: 'var(--surface-card)',
                boxShadow: 'var(--elevation-card)',
                borderRadius: 'var(--radius-large)',
                borderColor: 'var(--border-default)',
                borderLeft: `4px solid var(--accent-primary)`
              }}
            >
              <div className="flex gap-4 items-center">
                <div 
                  className="flex-shrink-0"
                  style={{ 
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-default)',
                    backgroundColor: 'var(--accent-subtle)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Info size={20} />
                </div>
                <div className="flex-1">
                  <h3 style={{ 
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    How it works
                  </h3>
                  <p style={{ 
                    fontSize: 'var(--text-body)',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    We need three inputs to traverse the decision tree and score tokenization quality. Advanced options refine cash-leg and token rails.
                  </p>
                </div>
                <div style={{ color: 'var(--accent-primary)' }}>
                  <HelpCircle size={20} />
                </div>
              </div>
            </Card>
            
            {/* How It Works Overlay */}
            <HowItWorksOverlay 
              open={howItWorksOpen}
              onOpenChange={setHowItWorksOpen}
              onViewMethodology={() => {
                setHowItWorksOpen(false);
                onNavigate('methodology');
              }}
            />

            {/* Form Section */}
            <div>
              <h2 style={{ 
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-4)'
              }}>
                Required Inputs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <InputCard
                  termKey="asset-type"
                  helperText="Select the primary classification of the underlying asset"
                  variant="select"
                >
                  <AssetTypeSelect 
                    value={data.assetType}
                    onChange={(value) => updateData({ assetType: value })}
                  />
                </InputCard>

                <InputCard
                  title="Primary Jurisdiction"
                  helperText="Select the main legal jurisdiction governing this asset"
                  variant="select"
                >
                  <JurisdictionSelect 
                    value={data.jurisdiction}
                    onChange={(value) => updateData({ jurisdiction: value })}
                  />
                </InputCard>

                <div className="md:col-span-2">
                  <InputCard
                    termKey="binding-path"
                    helperText="Where will the change 'count'? Registry, custodian, settlement system, device, or document system."
                    variant="select"
                  >
                    <BindingPathSelect 
                      value={data.bindingPath}
                      onChange={(value) => updateData({ bindingPath: value })}
                    />
                  </InputCard>
                </div>
              </div>
            </div>

            {/* Advanced Section */}
            <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
              <CollapsibleTrigger asChild>
                <button
                  className="flex items-center gap-2 w-full"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 'var(--space-3) 0',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--accent-primary)',
                    textAlign: 'left'
                  }}
                >
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: advancedOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                  Advanced Options (Optional)
                </button>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <InputCard
                    termKey="settlement-asset"
                    helperText="Preferred cash-leg settlement mechanism"
                    variant="select"
                  >
                    <SettlementAssetSelect 
                      value={data.settlementAsset}
                      onChange={(value) => updateData({ settlementAsset: value })}
                    />
                  </InputCard>

                  <InputCard
                    termKey="token-rail"
                    helperText="Infrastructure for token issuance and transfer"
                    variant="select"
                  >
                    <TokenRailSelect 
                      value={data.tokenRail}
                      onChange={(value) => updateData({ tokenRail: value })}
                    />
                  </InputCard>

                  <div className="md:col-span-2">
                    <InputCard
                      title="Candidate Legal Basis"
                      helperText="Optional: Specify relevant legal framework or statute"
                      variant="text"
                    >
                      <Textarea 
                        value={data.legalBasis}
                        onChange={(e) => updateData({ legalBasis: e.target.value })}
                        placeholder="e.g., UCC Article 12 control; eWpG §16 crypto securities register; ETDA 2023 s.2"
                        rows={3}
                        style={{
                          fontSize: 'var(--text-body)',
                          fontFamily: 'ui-monospace, monospace'
                        }}
                      />
                    </InputCard>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4">
              <Button 
                size="lg"
                onClick={handleRunAnalysis}
                disabled={!canRunAnalysis}
                style={{
                  fontSize: 'var(--text-h3)',
                  padding: 'var(--space-3) var(--space-6)',
                  cursor: canRunAnalysis ? 'pointer' : 'not-allowed'
                }}
              >
                Run Decision Tree
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={handleUseSample}
                style={{
                  fontSize: 'var(--text-h3)',
                  padding: 'var(--space-3) var(--space-6)'
                }}
              >
                Use Sample Case
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div 
        className="border-t"
        style={{ 
          backgroundColor: 'var(--bg-default)',
          borderColor: 'var(--border-default)',
          padding: 'var(--space-4) var(--space-8)'
        }}
      >
        <div style={{ maxWidth: '1296px', margin: '0 auto' }}>
          <div className="flex items-start justify-between gap-8">
            <div>
              <button
                onClick={() => onNavigate('methodology')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: 'var(--text-body)',
                  color: 'var(--accent-primary)',
                  textDecoration: 'underline',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                View Methodology & Framework References
              </button>
            </div>
            <div style={{ flex: 1, maxWidth: '800px' }}>
              <p style={{ 
                fontSize: 'var(--text-caption)',
                color: 'var(--text-muted)',
                lineHeight: '1.5'
              }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Frameworks referenced:</strong> IFRS Conceptual Framework; IAS 32 / IFRS 9; UK Law Commission 'digital objects'; UCC Article 12; UNCITRAL Model Law on Electronic Transferable Records (MLETR); Electronic Trade Documents Act 2023 (UK); eWpG (Germany); Swiss DLT Act; BIS work on unified ledgers.
              </p>
              <p style={{ 
                fontSize: 'var(--text-caption)',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
                marginTop: 'var(--space-2)'
              }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Disclaimer:</strong> This tool applies recognized frameworks (IFRS; UCC 12; MLETR/ETDA; eWpG; Swiss DLT Act). It is not legal advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
