import { useState, ReactNode } from "react";
import { ChevronDown, ExternalLink, Download, Copy, Info } from "lucide-react";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useAppContext } from "./AppContext";
import { getDisplayValue, VALUE_TO_TERM_KEY } from "./terminology";
import { Term } from "./TermComponents";

// ============================================================================
// InputCard Component
// ============================================================================

interface InputCardProps {
  title?: string;
  termKey?: string;
  helperText?: string;
  variant?: "text" | "select" | "multiselect";
  children?: ReactNode;
  compact?: boolean;
}

export function InputCard({ title, termKey, helperText, variant = "text", children, compact = false }: InputCardProps) {
  const { terminologyMode } = useAppContext();
  const padding = compact ? "var(--space-3) var(--space-4)" : "var(--space-4) var(--space-6)";
  
  const displayTitle = termKey ? getDisplayValue(termKey, terminologyMode) : title || '';
  
  return (
    <Card 
      className="w-full max-w-2xl"
      style={{ 
        backgroundColor: 'var(--surface-card)',
        boxShadow: 'var(--elevation-card)',
        borderRadius: 'var(--radius-default)',
        borderColor: 'var(--border-default)',
        padding
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <div>
          <div style={{ 
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--text-primary)',
            marginBottom: helperText ? 'var(--space-1)' : '0',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)'
          }}>
            <span>{displayTitle}</span>
            {termKey && (
              <Term termKey={termKey} />
            )}
          </div>
          {helperText && (
            <div style={{ 
              fontSize: 'var(--text-caption)',
              color: 'var(--text-secondary)'
            }}>
              {helperText}
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    </Card>
  );
}

// ============================================================================
// Asset Type Select Options
// ============================================================================

export const ASSET_TYPES = [
  "Land & Fixtures",
  "Tangible Goods",
  "Investment Security",
  "Cash / Deposit",
  "Receivable / Note",
  "IP & Licence",
  "Digital/Data Object",
  "Other"
];

export const BINDING_PATHS = [
  "Registry of Record",
  "Custodian / Bailee",
  "Settlement Rail",
  "Device / API Controller",
  "Negotiable Document System",
  "Ledger / Protocol"
];

interface AssetTypeSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function AssetTypeSelect({ value, onChange, placeholder = "Select asset type..." }: AssetTypeSelectProps) {
  const { terminologyMode } = useAppContext();
  
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {value ? getDisplayValue(value, terminologyMode) : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {ASSET_TYPES.map((type) => (
          <SelectItem key={type} value={type}>
            {getDisplayValue(type, terminologyMode) || type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function BindingPathSelect({ value, onChange, placeholder = "Select binding path..." }: AssetTypeSelectProps) {
  const { terminologyMode } = useAppContext();
  
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {value ? getDisplayValue(value, terminologyMode) : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {BINDING_PATHS.map((path) => (
          <SelectItem key={path} value={path}>
            {getDisplayValue(path, terminologyMode) || path}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

interface JurisdictionInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function JurisdictionInput({ value, onChange, placeholder = "e.g., Delaware, UK, Singapore..." }: JurisdictionInputProps) {
  return (
    <Input 
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
    />
  );
}

// ============================================================================
// Jurisdiction Select Options
// ============================================================================

export const JURISDICTIONS = [
  "United States (NY)",
  "United States (Delaware)",
  "United States (California)",
  "United Kingdom",
  "Germany",
  "Switzerland",
  "Singapore",
  "France",
  "Luxembourg",
  "Hong Kong",
  "Other"
];

export function JurisdictionSelect({ value, onChange, placeholder = "Select jurisdiction..." }: AssetTypeSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {JURISDICTIONS.map((jurisdiction) => (
          <SelectItem key={jurisdiction} value={jurisdiction}>
            {jurisdiction}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// ============================================================================
// Settlement Asset Preference Options
// ============================================================================

export const SETTLEMENT_ASSETS = [
  "CBDC",
  "Tokenized Deposit",
  "Commercial Bank Money",
  "Stablecoin (EMT/ART)",
  "Native On-Chain",
  "Other"
];

export function SettlementAssetSelect({ value, onChange, placeholder = "Select settlement asset..." }: AssetTypeSelectProps) {
  const { terminologyMode } = useAppContext();
  
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {value ? getDisplayValue(value, terminologyMode) : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {SETTLEMENT_ASSETS.map((asset) => (
          <SelectItem key={asset} value={asset}>
            {getDisplayValue(asset, terminologyMode) || asset}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// ============================================================================
// Token Rail Options
// ============================================================================

export const TOKEN_RAILS = [
  "Public chain",
  "Permissioned chain",
  "Off-chain verifiable credential",
  "Hybrid"
];

export function TokenRailSelect({ value, onChange, placeholder = "Select token rail..." }: AssetTypeSelectProps) {
  const { terminologyMode } = useAppContext();
  
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {value ? getDisplayValue(value, terminologyMode) : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {TOKEN_RAILS.map((rail) => (
          <SelectItem key={rail} value={rail}>
            {getDisplayValue(rail, terminologyMode) || rail}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// ============================================================================
// Stepper Component
// ============================================================================

const STEPPER_STEPS = [
  { id: "A", label: "Thing?" },
  { id: "B", label: "IFRS Asset?" },
  { id: "C", label: "Classify" },
  { id: "D", label: "Tokenization Test" },
  { id: "E", label: "Cash-leg" },
  { id: "F", label: "Failure & Enforceability" }
];

interface StepperProps {
  currentStep?: number;
  compact?: boolean;
}

export function Stepper({ currentStep = 0, compact = false }: StepperProps) {
  return (
    <div className="w-full">
      <div className={`grid ${compact ? 'grid-cols-6 gap-1' : 'grid-cols-2 md:grid-cols-6 gap-2'}`}>
        {STEPPER_STEPS.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          return (
            <div 
              key={step.id}
              className="flex flex-col items-center"
              style={{ gap: compact ? 'var(--space-1)' : 'var(--space-2)' }}
            >
              <div 
                className="flex items-center justify-center"
                style={{ 
                  width: compact ? '32px' : '40px',
                  height: compact ? '32px' : '40px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? 'var(--accent-primary)' : isCompleted ? 'var(--status-good)' : 'var(--bg-subtle)',
                  color: isActive || isCompleted ? '#ffffff' : 'var(--text-muted)',
                  fontSize: compact ? 'var(--text-caption)' : 'var(--text-body)',
                  fontWeight: 'var(--font-weight-semibold)',
                  border: isActive ? '2px solid var(--accent-primary)' : '2px solid var(--border-default)',
                  transition: 'all 0.2s ease'
                }}
              >
                {step.id}
              </div>
              <div 
                className="text-center"
                style={{ 
                  fontSize: compact ? 'var(--text-caption)' : 'var(--text-body)',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                  maxWidth: compact ? '60px' : '100px',
                  lineHeight: '1.2'
                }}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// DecisionPathCard Component
// ============================================================================

interface DecisionPathCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  rationale: string;
  citations?: Array<{ source: string; text: string; link?: string }>;
  severity?: "info" | "warn" | "error";
  compact?: boolean;
  defaultExpanded?: boolean;
  editable?: boolean;
  onRationaleChange?: (newRationale: string) => void;
}

export function DecisionPathCard({ 
  icon, 
  title,
  subtitle, 
  rationale, 
  citations = [],
  severity = "info",
  compact = false,
  defaultExpanded = false,
  editable = false,
  onRationaleChange
}: DecisionPathCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRationale, setEditedRationale] = useState(rationale);
  
  const severityColors = {
    info: 'var(--status-info)',
    warn: 'var(--status-warn)',
    error: 'var(--status-bad)'
  };
  
  const severityBgColors = {
    info: 'var(--accent-subtle)',
    warn: '#fff7ed',
    error: '#fef2f2'
  };
  
  const padding = compact ? "var(--space-3) var(--space-4)" : "var(--space-4) var(--space-6)";
  
  return (
    <Card 
      className="w-full"
      style={{ 
        backgroundColor: 'var(--surface-card)',
        boxShadow: 'var(--elevation-card)',
        borderRadius: 'var(--radius-default)',
        borderLeft: `4px solid ${severityColors[severity]}`,
        padding
      }}
    >
      <div className="flex gap-4">
        <div 
          className="flex-shrink-0 flex items-center justify-center"
          style={{ 
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-default)',
            backgroundColor: severityBgColors[severity],
            color: severityColors[severity]
          }}
        >
          {icon}
        </div>
        
        <div className="flex-1">
          <div>
            <div style={{ 
              fontSize: compact ? 'var(--text-body)' : 'var(--text-h3)',
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
                marginBottom: 'var(--space-2)',
                fontStyle: 'italic'
              }}>
                {subtitle}
              </div>
            )}
          </div>
          
          {editable && isEditing ? (
            <div className="mb-3">
              <textarea
                value={editedRationale}
                onChange={(e) => setEditedRationale(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: 'var(--space-2)',
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  border: `1px solid var(--border-default)`,
                  borderRadius: 'var(--radius-default)',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    if (onRationaleChange) {
                      onRationaleChange(editedRationale);
                    }
                    setIsEditing(false);
                  }}
                  style={{
                    padding: 'var(--space-1) var(--space-3)',
                    fontSize: 'var(--text-caption)',
                    fontWeight: 'var(--font-weight-semibold)',
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-default)',
                    cursor: 'pointer'
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditedRationale(rationale);
                    setIsEditing(false);
                  }}
                  style={{
                    padding: 'var(--space-1) var(--space-3)',
                    fontSize: 'var(--text-caption)',
                    fontWeight: 'var(--font-weight-semibold)',
                    backgroundColor: 'transparent',
                    color: 'var(--text-secondary)',
                    border: `1px solid var(--border-default)`,
                    borderRadius: 'var(--radius-default)',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div 
              style={{ 
                fontSize: 'var(--text-body)',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: citations.length > 0 ? 'var(--space-3)' : '0',
                position: 'relative'
              }}
            >
              {editedRationale}
              {editable && (
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    marginLeft: 'var(--space-2)',
                    padding: 'var(--space-1) var(--space-2)',
                    fontSize: 'var(--text-caption)',
                    color: 'var(--accent-primary)',
                    backgroundColor: 'transparent',
                    border: `1px solid var(--border-default)`,
                    borderRadius: 'var(--radius-default)',
                    cursor: 'pointer'
                  }}
                >
                  Edit
                </button>
              )}
            </div>
          )}
          
          {citations.length > 0 && (
            <div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2"
                style={{ 
                  fontSize: 'var(--text-body)',
                  color: 'var(--accent-primary)',
                  fontWeight: 'var(--font-weight-medium)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <ChevronDown 
                  size={16} 
                  style={{ 
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}
                />
                {isExpanded ? 'Hide' : 'Show'} legal basis / citations
              </button>
              
              {isExpanded && (
                <div 
                  className="mt-3 pt-3"
                  style={{ 
                    borderTop: `1px solid var(--border-default)`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  {citations.map((citation, index) => (
                    <div key={index} className="flex gap-2">
                      <div style={{ 
                        fontSize: 'var(--text-caption)',
                        color: 'var(--text-muted)',
                        fontFamily: 'ui-monospace, monospace',
                        flexShrink: 0
                      }}>
                        [{index + 1}]
                      </div>
                      <div className="flex-1">
                        <div style={{ 
                          fontSize: 'var(--text-caption)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--text-primary)'
                        }}>
                          {citation.source}
                        </div>
                        <div style={{ 
                          fontSize: 'var(--text-caption)',
                          color: 'var(--text-secondary)',
                          fontFamily: 'ui-monospace, monospace'
                        }}>
                          {citation.text}
                        </div>
                      </div>
                      {citation.link && (
                        <a 
                          href={citation.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

// ============================================================================
// ScoreGauge Component
// ============================================================================

interface ScoreGaugeProps {
  score: number;
  variant?: "ring" | "bar";
  compact?: boolean;
}

export function ScoreGauge({ score, variant = "ring", compact = false }: ScoreGaugeProps) {
  const { terminologyMode } = useAppContext();
  
  const thresholds = [
    { value: 80, label: "Strong (proceed to structuring)", color: 'var(--status-good)' },
    { value: 60, label: "Probable (close gaps)", color: 'var(--status-info)' },
    { value: 40, label: "Weak (re-architect)", color: 'var(--status-warn)' },
    { value: 0, label: "Claim-wrapper (label honestly)", color: 'var(--status-bad)' }
  ];
  
  const getScoreInfo = (value: number) => {
    if (value >= 80) return { label: "Strong (proceed to structuring)", subLabel: "proceed to structuring", color: 'var(--status-good)' };
    if (value >= 60) return { label: "Probable (close gaps)", subLabel: "close gaps", color: 'var(--status-info)' };
    if (value >= 40) return { label: "Weak (re-architect)", subLabel: "re-architect", color: 'var(--status-warn)' };
    return { label: "Claim-wrapper (label honestly)", subLabel: "label honestly", color: 'var(--status-bad)' };
  };
  
  const scoreInfo = getScoreInfo(score);
  const displayLabel = getDisplayValue(scoreInfo.label, terminologyMode);
  
  if (variant === "bar") {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-2">
          <div style={{ 
            fontSize: compact ? 'var(--text-body)' : 'var(--text-h3)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--text-primary)'
          }}>
            {displayLabel}
          </div>
          <div style={{ 
            fontSize: compact ? 'var(--text-h3)' : 'var(--text-h2)',
            fontWeight: 'var(--font-weight-bold)',
            color: scoreInfo.color
          }}>
            {score}
          </div>
        </div>
        <div className="relative">
          <div 
            className="w-full h-3 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--bg-subtle)' }}
          >
            <div 
              className="h-full transition-all duration-500 ease-out"
              style={{ 
                width: `${score}%`,
                backgroundColor: scoreInfo.color
              }}
            />
          </div>
          {/* Threshold markers */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            {[40, 60, 80].map(threshold => (
              <div 
                key={threshold}
                className="absolute w-0.5 h-5 bg-white"
                style={{ 
                  left: `${threshold}%`,
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 2px rgba(0,0,0,0.3)'
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>0</span>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>40</span>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>60</span>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>80</span>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>100</span>
        </div>
      </div>
    );
  }
  
  // Ring variant
  const size = compact ? 120 : 160;
  const strokeWidth = compact ? 12 : 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center" style={{ gap: 'var(--space-3)' }}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--bg-subtle)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={scoreInfo.color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
          />
        </svg>
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ gap: '0' }}
        >
          <div style={{ 
            fontSize: compact ? 'var(--text-h1)' : 'var(--text-display-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: scoreInfo.color,
            lineHeight: '1'
          }}>
            {score}
          </div>
          <div style={{ 
            fontSize: 'var(--text-caption)',
            color: 'var(--text-muted)'
          }}>
            / 100
          </div>
        </div>
      </div>
      <div style={{ 
        fontSize: compact ? 'var(--text-body)' : 'var(--text-h3)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--text-primary)'
      }}>
        {displayLabel}
      </div>
    </div>
  );
}

// ============================================================================
// ACP Badge/Chip Component
// ============================================================================

interface ACPBadgeProps {
  children: ReactNode;
  variant?: "acp" | "ifrs" | "outcome" | "default";
}

export function ACPBadge({ children, variant = "default" }: ACPBadgeProps) {
  const variants = {
    acp: { bg: 'var(--accent-subtle)', color: 'var(--accent-primary)' },
    ifrs: { bg: '#f0fdf4', color: 'var(--status-good)' },
    outcome: { bg: '#fef3c7', color: '#92400e' },
    default: { bg: 'var(--bg-subtle)', color: 'var(--text-secondary)' }
  };
  
  const style = variants[variant];
  
  return (
    <span 
      className="inline-flex items-center px-2 py-1"
      style={{ 
        backgroundColor: style.bg,
        color: style.color,
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--font-weight-semibold)',
        borderRadius: 'var(--radius-default)',
        lineHeight: '1'
      }}
    >
      {children}
    </span>
  );
}

// ============================================================================
// CitationList Component
// ============================================================================

interface Citation {
  source: string;
  text: string;
  link?: string;
}

interface CitationListProps {
  citations: Citation[];
  compact?: boolean;
}

export function CitationList({ citations, compact = false }: CitationListProps) {
  return (
    <ol 
      className="list-none"
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? 'var(--space-2)' : 'var(--space-3)',
        padding: 0,
        margin: 0
      }}
    >
      {citations.map((citation, index) => (
        <li key={index} className="flex gap-3">
          <div 
            style={{ 
              fontSize: 'var(--text-mono)',
              color: 'var(--text-muted)',
              fontFamily: 'ui-monospace, monospace',
              fontWeight: 'var(--font-weight-semibold)',
              flexShrink: 0,
              minWidth: '24px'
            }}
          >
            [{index + 1}]
          </div>
          <div className="flex-1">
            <div style={{ 
              fontSize: compact ? 'var(--text-caption)' : 'var(--text-body)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-1)'
            }}>
              {citation.source}
            </div>
            <div style={{ 
              fontSize: 'var(--text-mono)',
              color: 'var(--text-secondary)',
              fontFamily: 'ui-monospace, monospace',
              lineHeight: '1.5'
            }}>
              {citation.text}
            </div>
          </div>
          {citation.link && (
            <a 
              href={citation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
              style={{ color: 'var(--accent-primary)' }}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}

// ============================================================================
// RecommendationCard Component
// ============================================================================

interface RecommendationCardProps {
  title?: string;
  items: Array<{
    label: string;
    value: string;
  }>;
  compact?: boolean;
}

export function RecommendationCard({ 
  title = "Suggested Tokenization Framework",
  items,
  compact = false
}: RecommendationCardProps) {
  const padding = compact ? "var(--space-3) var(--space-4)" : "var(--space-4) var(--space-6)";
  
  return (
    <Card 
      className="w-full"
      style={{ 
        backgroundColor: '#f0fdf4',
        boxShadow: 'var(--elevation-card)',
        borderRadius: 'var(--radius-large)',
        borderColor: 'var(--status-good)',
        borderWidth: '2px',
        padding
      }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div 
          className="flex-shrink-0"
          style={{ 
            color: 'var(--status-good)',
            marginTop: '2px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div style={{ 
          fontSize: compact ? 'var(--text-body)' : 'var(--text-h3)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--status-good)'
        }}>
          {title}
        </div>
      </div>
      
      <ul 
        className="list-none"
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: compact ? 'var(--space-2)' : 'var(--space-3)',
          padding: 0,
          margin: 0
        }}
      >
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <div style={{ 
              fontSize: 'var(--text-body)',
              color: 'var(--status-good)',
              flexShrink: 0
            }}>
              •
            </div>
            <div className="flex-1">
              <span style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#166534'
              }}>
                {item.label}:
              </span>{' '}
              <span style={{ 
                fontSize: 'var(--text-body)',
                color: '#166534'
              }}>
                {item.value}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

// ============================================================================
// BusinessValueBlock Component
// ============================================================================

interface ValueMetric {
  label: string;
  value: string;
  tooltip?: string;
}

interface BusinessValueBlockProps {
  metrics: ValueMetric[];
  compact?: boolean;
}

export function BusinessValueBlock({ metrics, compact = false }: BusinessValueBlockProps) {
  const padding = compact ? "var(--space-3)" : "var(--space-4)";
  
  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric, index) => (
          <Card 
            key={index}
            className="relative"
            style={{ 
              backgroundColor: 'var(--surface-card)',
              boxShadow: 'var(--elevation-card)',
              borderRadius: 'var(--radius-default)',
              borderColor: 'var(--border-default)',
              padding
            }}
          >
            <div className="flex flex-col" style={{ gap: 'var(--space-2)' }}>
              <div className="flex items-start justify-between">
                <div style={{ 
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.4'
                }}>
                  {metric.label}
                </div>
                {metric.tooltip && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        style={{ 
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          color: 'var(--text-muted)'
                        }}
                      >
                        <Info size={14} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p style={{ maxWidth: '200px', fontSize: 'var(--text-caption)' }}>
                        {metric.tooltip}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              <div style={{ 
                fontSize: compact ? 'var(--text-h3)' : 'var(--text-h2)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--accent-primary)',
                lineHeight: '1.2'
              }}>
                {metric.value}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </TooltipProvider>
  );
}

// ============================================================================
// ExportBar Component
// ============================================================================

interface ExportBarProps {
  onGeneratePDF?: () => void;
  onCopySummary?: () => void;
  onCopyCitations?: () => void;
  compact?: boolean;
}

export function ExportBar({ 
  onGeneratePDF, 
  onCopySummary, 
  onCopyCitations,
  compact = false 
}: ExportBarProps) {
  const padding = compact ? "var(--space-2) var(--space-3)" : "var(--space-3) var(--space-4)";
  
  return (
    <div 
      className="flex items-center gap-2 flex-wrap"
      style={{ 
        backgroundColor: 'var(--bg-subtle)',
        borderRadius: 'var(--radius-default)',
        padding
      }}
    >
      <Button 
        onClick={onGeneratePDF}
        className="flex items-center gap-2"
        variant="default"
      >
        <Download size={16} />
        {!compact && "Generate One-Page Report (PDF)"}
        {compact && "PDF"}
      </Button>
      
      <Button 
        onClick={onCopySummary}
        className="flex items-center gap-2"
        variant="outline"
      >
        <Copy size={16} />
        {!compact && "Copy Summary"}
        {compact && "Summary"}
      </Button>
      
      <Button 
        onClick={onCopyCitations}
        className="flex items-center gap-2"
        variant="outline"
      >
        <Copy size={16} />
        {!compact && "Copy Citations"}
        {compact && "Citations"}
      </Button>
    </div>
  );
}
