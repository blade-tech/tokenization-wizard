import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { X, FileText, GitBranch, BarChart3, FileCheck, HelpCircle } from "lucide-react";
import { Term } from "./TermComponents";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface HowItWorksOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onViewMethodology?: () => void;
}

export function HowItWorksOverlay({ open, onOpenChange, onViewMethodology }: HowItWorksOverlayProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-[760px] max-h-[90vh] overflow-y-auto p-0 max-[767px]:max-w-[360px] max-[767px]:max-h-[640px]"
        style={{
          backgroundColor: 'var(--surface-card)',
          border: `1px solid var(--border-default)`,
          borderRadius: 'var(--radius-large)'
        }}
      >
        {/* Custom header with close button */}
        <div className="sticky top-0 z-10" style={{ backgroundColor: 'var(--surface-card)' }}>
          <div className="flex items-start justify-between p-6 pb-4">
            <div className="flex-1">
              <DialogTitle style={{ 
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-2)'
              }}>
                How it works (3 inputs → clear answer)
              </DialogTitle>
              <DialogDescription style={{ 
                fontSize: 'var(--text-body)',
                color: 'var(--text-muted)',
                lineHeight: '1.5'
              }}>
                We apply law-anchored logic, show our reasoning, and generate a one-page report. Not legal advice.
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

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* Four Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Step 1 */}
            <StepCard
              icon={<FileText size={20} />}
              title="Pick 3 inputs"
              subtitle="Asset / Right, Jurisdiction, Official Gate"
              explanation="Tell us what the thing is, where the law lives, and which official gate will record the change."
              helper={
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <button
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--accent-primary)',
                          textDecoration: 'underline',
                          fontSize: 'var(--text-body)',
                          padding: 0,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 'var(--space-1)'
                        }}
                      >
                        What's an <Term termKey="official-gate" />?
                        <HelpCircle size={14} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top"
                      style={{ 
                        maxWidth: '300px',
                        backgroundColor: 'var(--surface-card)',
                        border: `1px solid var(--border-default)`,
                        padding: 'var(--space-3)',
                        fontSize: 'var(--text-body)'
                      }}
                    >
                      The place where a change must be recorded for it to count (registry, custodian, settlement system, device/API, or document system).
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              }
            />

            {/* Step 2 */}
            <StepCard
              icon={<GitBranch size={20} />}
              title="We traverse the decision tree (A–F)"
              explanation="We check: Is it a right? Is it your IFRS asset? What legal type? Can a token act at the official gate? Cash-leg, then recovery."
              miniStepper={
                <div className="flex items-center gap-1 mt-2">
                  {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
                    <div
                      key={letter}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-subtle)',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        fontWeight: 'var(--font-weight-semibold)'
                      }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              }
            />

            {/* Step 3 */}
            <StepCard
              icon={<BarChart3 size={20} />}
              title="We score feasibility"
              explanation="Score 0–100 across seven checks (gate named, required key, auto-execute, legal basis, recognized control, cash atomicity, failure handling)."
            />

            {/* Step 4 */}
            <StepCard
              icon={<FileCheck size={20} />}
              title="We recommend a framework"
              explanation="You get a one-page PDF: suggested structure, token rail, cash-leg, risks, and business value for the chosen jurisdiction/asset."
            />
          </div>

          {/* Example Strip */}
          <div 
            className="p-3 rounded-lg"
            style={{ 
              backgroundColor: 'var(--bg-subtle)',
              border: `1px solid var(--border-default)`
            }}
          >
            <div style={{ 
              fontSize: 'var(--text-caption)',
              color: 'var(--text-muted)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--space-2)'
            }}>
              Example:
            </div>
            <div className="flex flex-wrap gap-2">
              <span 
                className="px-2 py-1 rounded"
                style={{ 
                  fontSize: 'var(--text-body)',
                  backgroundColor: 'var(--surface-card)',
                  border: `1px solid var(--border-default)`,
                  color: 'var(--text-secondary)'
                }}
              >
                Investment Security
              </span>
              <span style={{ color: 'var(--text-muted)' }}>·</span>
              <span 
                className="px-2 py-1 rounded"
                style={{ 
                  fontSize: 'var(--text-body)',
                  backgroundColor: 'var(--surface-card)',
                  border: `1px solid var(--border-default)`,
                  color: 'var(--text-secondary)'
                }}
              >
                Germany
              </span>
              <span style={{ color: 'var(--text-muted)' }}>·</span>
              <span 
                className="px-2 py-1 rounded"
                style={{ 
                  fontSize: 'var(--text-body)',
                  backgroundColor: 'var(--surface-card)',
                  border: `1px solid var(--border-default)`,
                  color: 'var(--text-secondary)'
                }}
              >
                <Term termKey="official-gate" />: Registry of Record
              </span>
              <span style={{ color: 'var(--text-muted)' }}>→</span>
              <span 
                className="px-2 py-1 rounded"
                style={{ 
                  fontSize: 'var(--text-body)',
                  backgroundColor: 'var(--status-good)',
                  color: 'white',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                Outcome: Tokenized Asset (Score 88)
              </span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onViewMethodology}
              style={{
                fontSize: 'var(--text-body)'
              }}
            >
              View Method & References
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              style={{
                fontSize: 'var(--text-body)'
              }}
            >
              Got it
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  explanation: string;
  helper?: React.ReactNode;
  miniStepper?: React.ReactNode;
}

function StepCard({ icon, title, subtitle, explanation, helper, miniStepper }: StepCardProps) {
  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        backgroundColor: 'var(--bg-subtle)',
        border: `1px solid var(--border-default)`
      }}
    >
      <div className="flex items-start gap-3">
        <div 
          className="flex-shrink-0 flex items-center justify-center"
          style={{ 
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-default)',
            backgroundColor: 'var(--accent-primary)',
            color: 'white'
          }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div style={{ 
            fontSize: 'var(--text-body)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--text-primary)',
            marginBottom: subtitle ? 'var(--space-1)' : 'var(--space-2)'
          }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ 
              fontSize: 'var(--text-caption)',
              color: 'var(--text-muted)',
              marginBottom: 'var(--space-2)'
            }}>
              {subtitle}
            </div>
          )}
          <div style={{ 
            fontSize: 'var(--text-body)',
            color: 'var(--text-secondary)',
            lineHeight: '1.5'
          }}>
            {explanation}
          </div>
          {helper && (
            <div className="mt-2">
              {helper}
            </div>
          )}
          {miniStepper && miniStepper}
        </div>
      </div>
    </div>
  );
}