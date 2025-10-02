import { ReactNode, useState, useEffect } from "react";
import { HelpCircle, BookOpen } from "lucide-react";
import { useAppContext } from "./AppContext";
import { GLOSSARY, TermDefinition, getDisplayValue } from "./terminology";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

// Mobile detection hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

// ============================================================================
// Term Component - displays terminology based on current mode
// ============================================================================

interface TermProps {
  termKey: string;
  children?: ReactNode;
  showTooltip?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Term({ termKey, children, showTooltip = true, className = "", style = {} }: TermProps) {
  const { terminologyMode, setGlossaryOpen, setGlossaryFilterTerm } = useAppContext();
  const [mobileDialogOpen, setMobileDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const termDef = GLOSSARY[termKey];
  
  // Fallback if term not found
  if (!termDef) {
    return <span className={className} style={style}>{children || termKey}</span>;
  }
  
  const getDisplayText = () => {
    switch (terminologyMode) {
      case 'plain':
        return termDef.plain;
      case 'legal':
        return termDef.legal;
      case 'dual':
        return `${termDef.plain} (${termDef.legal})`;
      default:
        return termDef.plain;
    }
  };
  
  const getSecondaryText = () => {
    switch (terminologyMode) {
      case 'plain':
        return termDef.legal;
      case 'legal':
        return termDef.plain;
      default:
        return null;
    }
  };
  
  const displayText = children || getDisplayText();
  const secondaryText = getSecondaryText();
  
  const handleOpenGlossary = () => {
    setGlossaryFilterTerm(termKey);
    setGlossaryOpen(true);
  };
  
  const handleMobileClick = () => {
    if (isMobile && showTooltip) {
      setMobileDialogOpen(true);
    }
  };
  
  if (!showTooltip) {
    return (
      <span className={className} style={style}>
        {displayText}
        <button
          onClick={handleOpenGlossary}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 0 0 4px',
            color: 'var(--accent-primary)',
            verticalAlign: 'middle'
          }}
          aria-label="Open glossary"
        >
          <BookOpen size={12} style={{ display: 'inline' }} />
        </button>
      </span>
    );
  }
  
  // Mobile: Use Dialog instead of Tooltip
  if (isMobile) {
    return (
      <>
        <span 
          className={className}
          onClick={handleMobileClick}
          style={{ 
            ...style,
            cursor: 'pointer',
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: 'var(--border-default)',
            textUnderlineOffset: '2px',
            whiteSpace: 'normal',
            wordBreak: 'break-word'
          }}
        >
          {displayText}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenGlossary();
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0 0 0 4px',
              color: 'var(--accent-primary)',
              verticalAlign: 'middle'
            }}
            aria-label="Open glossary"
          >
            <BookOpen size={12} style={{ display: 'inline' }} />
          </button>
        </span>
        
        <Dialog open={mobileDialogOpen} onOpenChange={setMobileDialogOpen}>
          <DialogContent 
            className="max-w-md"
            style={{
              backgroundColor: 'var(--surface-card)',
              border: `1px solid var(--border-default)`
            }}
          >
            <DialogHeader>
              <DialogTitle style={{ 
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)'
              }}>
                {displayText}
              </DialogTitle>
              {secondaryText && (
                <DialogDescription style={{ 
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-muted)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {secondaryText}
                </DialogDescription>
              )}
            </DialogHeader>
            
            <div className="space-y-3 pt-2">
              <div style={{ 
                fontSize: 'var(--text-body)',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {termDef.definition}
              </div>
              
              {termDef.citations && termDef.citations.length > 0 && (
                <div style={{ 
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-muted)',
                  paddingTop: 'var(--space-2)',
                  borderTop: `1px solid var(--border-default)`
                }}>
                  <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-1)' }}>
                    References:
                  </div>
                  {termDef.citations.map((citation, idx) => (
                    <div key={idx} style={{ marginLeft: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
                      • {citation.source}: {citation.text}
                    </div>
                  ))}
                </div>
              )}
              
              <button
                onClick={() => {
                  setMobileDialogOpen(false);
                  handleOpenGlossary();
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 'var(--space-3) 0 0',
                  color: 'var(--accent-primary)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textDecoration: 'underline',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                View full glossary →
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }
  
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span 
            className={className}
            style={{ 
              ...style,
              cursor: 'help',
              textDecoration: 'underline',
              textDecorationStyle: 'dotted',
              textDecorationColor: 'var(--border-default)',
              textUnderlineOffset: '2px'
            }}
          >
            {displayText}
            <button
              onClick={handleOpenGlossary}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0 0 0 4px',
                color: 'var(--accent-primary)',
                verticalAlign: 'middle'
              }}
              aria-label="Open glossary"
            >
              <BookOpen size={12} style={{ display: 'inline' }} />
            </button>
          </span>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="p-3"
          style={{
            backgroundColor: 'var(--surface-card)',
            border: `1px solid var(--border-default)`,
            boxShadow: 'var(--elevation-overlay)',
            minWidth: '280px',
            maxWidth: '360px'
          }}
        >
          <div className="space-y-2">
            {secondaryText && (
              <div style={{ 
                fontSize: 'var(--text-caption)',
                color: 'var(--text-muted)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {secondaryText}
              </div>
            )}
            <div style={{ 
              fontSize: 'var(--text-caption)',
              color: 'var(--text-secondary)',
              lineHeight: '1.4'
            }}>
              {termDef.definition}
            </div>
            {termDef.citations && termDef.citations.length > 0 && (
              <div style={{ 
                fontSize: 'var(--text-caption)',
                color: 'var(--text-muted)',
                paddingTop: 'var(--space-2)',
                borderTop: `1px solid var(--border-default)`
              }}>
                <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-1)' }}>
                  References:
                </div>
                {termDef.citations.map((citation, idx) => (
                  <div key={idx} style={{ marginLeft: 'var(--space-2)' }}>
                    • {citation.source}: {citation.text}
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={handleOpenGlossary}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--space-2) 0 0',
                color: 'var(--accent-primary)',
                fontSize: 'var(--text-caption)',
                fontWeight: 'var(--font-weight-semibold)',
                textDecoration: 'underline',
                width: '100%',
                textAlign: 'left'
              }}
            >
              Learn more in glossary →
            </button>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// ============================================================================
// TermLabel Component - for form labels with both terms visible
// ============================================================================

interface TermLabelProps {
  termKey: string;
  required?: boolean;
  helperText?: string;
}

export function TermLabel({ termKey, required = false, helperText }: TermLabelProps) {
  const { terminologyMode, setGlossaryOpen, setGlossaryFilterTerm } = useAppContext();
  const [mobileDialogOpen, setMobileDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const termDef = GLOSSARY[termKey];
  
  if (!termDef) {
    return <span>{termKey}</span>;
  }
  
  const handleOpenGlossary = () => {
    setGlossaryFilterTerm(termKey);
    setGlossaryOpen(true);
  };
  
  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: helperText ? 'var(--space-1)' : '0' }}>
        <span style={{ 
          fontSize: 'var(--text-body)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--text-primary)',
          whiteSpace: 'normal',
          wordBreak: 'break-word'
        }}>
          {terminologyMode === 'plain' ? termDef.plain : terminologyMode === 'legal' ? termDef.legal : `${termDef.plain} (${termDef.legal})`}
          {required && <span style={{ color: 'var(--status-bad)', marginLeft: '2px' }}>*</span>}
        </span>
        
        {terminologyMode !== 'dual' && (
          <>
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'help',
                      padding: 0,
                      color: 'var(--text-muted)'
                    }}
                  >
                    <HelpCircle size={14} />
                  </button>
                </TooltipTrigger>
                <TooltipContent 
                  side="top"
                  className="p-3"
                  style={{
                    backgroundColor: 'var(--surface-card)',
                    border: `1px solid var(--border-default)`,
                    boxShadow: 'var(--elevation-overlay)',
                    minWidth: '280px',
                    maxWidth: '360px'
                  }}
                >
                  <div className="space-y-1">
                    <div style={{ 
                      fontSize: 'var(--text-caption)',
                      color: 'var(--text-muted)',
                      fontWeight: 'var(--font-weight-semibold)'
                    }}>
                      {terminologyMode === 'plain' ? termDef.legal : termDef.plain}
                    </div>
                    <div style={{ 
                      fontSize: 'var(--text-caption)',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>
                      {termDef.definition}
                    </div>
                    <button
                      onClick={handleOpenGlossary}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 'var(--space-2) 0 0',
                        color: 'var(--accent-primary)',
                        fontSize: 'var(--text-caption)',
                        fontWeight: 'var(--font-weight-semibold)',
                        textDecoration: 'underline',
                        width: '100%',
                        textAlign: 'left'
                      }}
                    >
                      Learn more in glossary →
                    </button>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <button
              onClick={handleOpenGlossary}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                color: 'var(--accent-primary)'
              }}
              aria-label="Open glossary"
            >
              <BookOpen size={14} />
            </button>
          </>
        )}
        
        {terminologyMode === 'dual' && (
          <button
            onClick={handleOpenGlossary}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: 'var(--accent-primary)'
            }}
            aria-label="Open glossary"
          >
            <BookOpen size={14} />
          </button>
        )}
      </div>
      
      {helperText && (
        <div style={{ 
          fontSize: 'var(--text-caption)',
          color: 'var(--text-secondary)',
          marginTop: 'var(--space-1)'
        }}>
          {helperText}
        </div>
      )}
    </div>
  );
}
