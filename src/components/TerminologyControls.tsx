import { useState } from "react";
import { BookOpen, Languages, Search, X } from "lucide-react";
import { useAppContext, TerminologyMode } from "./AppContext";
import { GLOSSARY, searchGlossary } from "./terminology";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

// ============================================================================
// Terminology Toggle Component
// ============================================================================

export function TerminologyToggle() {
  const { terminologyMode, setTerminologyMode } = useAppContext();
  
  const modes: Array<{ value: TerminologyMode; label: string; icon: string }> = [
    { value: 'plain', label: 'Plain', icon: '📝' },
    { value: 'legal', label: 'Legal', icon: '⚖️' },
    { value: 'dual', label: 'Dual', icon: '🔄' }
  ];
  
  return (
    <div 
      className="flex items-center gap-2 px-3 py-1.5 rounded-md"
      style={{ 
        backgroundColor: 'var(--bg-subtle)',
        border: `1px solid var(--border-default)`
      }}
    >
      <Languages size={14} style={{ color: 'var(--text-muted)' }} />
      <span style={{ 
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)',
        fontWeight: 'var(--font-weight-semibold)'
      }}>
        Terms:
      </span>
      
      <div className="flex gap-1">
        {modes.map((mode) => (
          <button
            key={mode.value}
            onClick={() => setTerminologyMode(mode.value)}
            style={{
              padding: 'var(--space-1) var(--space-2)',
              fontSize: 'var(--text-caption)',
              fontWeight: 'var(--font-weight-semibold)',
              backgroundColor: terminologyMode === mode.value ? 'var(--accent-primary)' : 'transparent',
              color: terminologyMode === mode.value ? 'white' : 'var(--text-secondary)',
              border: `1px solid ${terminologyMode === mode.value ? 'var(--accent-primary)' : 'var(--border-default)'}`,
              borderRadius: 'var(--radius-default)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ marginRight: '4px' }}>{mode.icon}</span>
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Glossary Button Component
// ============================================================================

export function GlossaryButton() {
  const { setGlossaryOpen } = useAppContext();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2"
      onClick={() => setGlossaryOpen(true)}
    >
      <BookOpen size={16} />
      Glossary
    </Button>
  );
}

// ============================================================================
// Glossary Drawer Component
// ============================================================================

export function GlossaryModal() {
  const { glossaryOpen, setGlossaryOpen, terminologyMode, glossaryFilterTerm, setGlossaryFilterTerm } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // When a specific term is selected, filter to it
  const filteredTerms = glossaryFilterTerm
    ? [{ key: glossaryFilterTerm, term: GLOSSARY[glossaryFilterTerm] }].filter(({ term }) => term)
    : searchQuery 
    ? searchGlossary(searchQuery)
    : Object.entries(GLOSSARY).map(([key, term]) => ({ key, term }));
  
  const displayTerms = selectedCategory
    ? filteredTerms.filter(({ term }) => term.category === selectedCategory)
    : filteredTerms;
  
  const categories = [
    { value: 'core', label: 'Core Concepts', color: 'var(--status-info)' },
    { value: 'legal', label: 'Legal', color: 'var(--accent-primary)' },
    { value: 'financial', label: 'Financial', color: 'var(--status-good)' },
    { value: 'technical', label: 'Technical', color: 'var(--status-warn)' }
  ];
  
  const handleClose = () => {
    setGlossaryOpen(false);
    setGlossaryFilterTerm(null);
    setSearchQuery("");
  };
  
  if (!glossaryOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 50,
          animation: 'fadeIn 0.2s ease-in-out'
        }}
      />
      
      {/* Drawer */}
      <div
        className="max-[768px]:w-full"
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: '420px',
          maxWidth: '100vw',
          backgroundColor: 'var(--surface-card)',
          boxShadow: 'var(--elevation-overlay)',
          borderLeft: `1px solid var(--border-default)`,
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInRight 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div 
          className="p-6"
          style={{ borderBottom: `1px solid var(--border-default)` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 style={{ 
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)'
            }}>
              Terminology Glossary
            </h2>
            <button
              onClick={handleClose}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-default)',
                backgroundColor: 'transparent',
                border: `1px solid var(--border-default)`,
                cursor: 'pointer',
                color: 'var(--text-secondary)'
              }}
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search 
              size={16} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              style={{ color: 'var(--text-muted)' }}
            />
            <Input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              style={{
                fontSize: 'var(--text-body)',
                backgroundColor: 'var(--bg-subtle)',
                border: `1px solid var(--border-default)`
              }}
              disabled={!!glossaryFilterTerm}
            />
            {searchQuery && !glossaryFilterTerm && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          {/* Filter notice */}
          {glossaryFilterTerm && GLOSSARY[glossaryFilterTerm] && (
            <div 
              className="mt-2 p-2 flex items-center justify-between rounded"
              style={{ 
                backgroundColor: 'var(--accent-subtle)',
                border: `1px solid var(--accent-primary)`
              }}
            >
              <span style={{ 
                fontSize: 'var(--text-caption)',
                color: 'var(--text-primary)'
              }}>
                Showing: <strong>{GLOSSARY[glossaryFilterTerm].plain}</strong>
              </span>
              <button
                onClick={() => setGlossaryFilterTerm(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--accent-primary)',
                  fontSize: 'var(--text-caption)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textDecoration: 'underline'
                }}
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
        
        {/* Filter Categories */}
        <div 
          className="px-6 py-3 flex gap-2 flex-wrap"
          style={{ borderBottom: `1px solid var(--border-default)` }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              padding: 'var(--space-1) var(--space-2)',
              fontSize: 'var(--text-caption)',
              fontWeight: 'var(--font-weight-semibold)',
              backgroundColor: selectedCategory === null ? 'var(--accent-primary)' : 'transparent',
              color: selectedCategory === null ? 'white' : 'var(--text-secondary)',
              border: `1px solid ${selectedCategory === null ? 'var(--accent-primary)' : 'var(--border-default)'}`,
              borderRadius: 'var(--radius-default)',
              cursor: 'pointer'
            }}
          >
            All
          </button>
          
          {categories.map((cat) => {
            const count = filteredTerms.filter(({ term }) => term.category === cat.value).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                style={{
                  padding: 'var(--space-1) var(--space-2)',
                  fontSize: 'var(--text-caption)',
                  fontWeight: 'var(--font-weight-semibold)',
                  backgroundColor: selectedCategory === cat.value ? cat.color : 'transparent',
                  color: selectedCategory === cat.value ? 'white' : 'var(--text-secondary)',
                  border: `1px solid ${selectedCategory === cat.value ? cat.color : 'var(--border-default)'}`,
                  borderRadius: 'var(--radius-default)',
                  cursor: 'pointer'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
        
        {/* Terms List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {displayTerms.length === 0 ? (
            <div 
              className="text-center py-8"
              style={{ color: 'var(--text-muted)' }}
            >
              No terms found
            </div>
          ) : (
            displayTerms.map(({ key, term }) => (
              <div
                key={key}
                className="pb-4"
                style={{
                  borderBottom: `1px solid var(--border-default)`
                }}
              >
                <div className="mb-2">
                  <h3 style={{ 
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    {term.plain}
                  </h3>
                  
                  <div style={{ 
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic'
                  }}>
                    Legal alias: {term.legal}
                  </div>
                </div>
                
                <p style={{ 
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: term.where ? 'var(--space-2)' : '0'
                }}>
                  {term.definition}
                </p>
                
                {term.where && (
                  <div style={{ 
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-secondary)',
                    marginBottom: term.citations && term.citations.length > 0 ? 'var(--space-2)' : '0'
                  }}>
                    <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>Where:</span> {term.where}
                  </div>
                )}
                
                {term.citations && term.citations.length > 0 && (
                  <div className="space-y-1 mt-2">
                    {term.citations.map((citation, idx) => (
                      <div 
                        key={idx}
                        style={{ 
                          fontSize: 'var(--text-mono)',
                          color: 'var(--text-muted)',
                          fontFamily: 'monospace',
                          paddingLeft: 'var(--space-3)',
                          borderLeft: `2px solid var(--border-default)`
                        }}
                      >
                        <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                          [{idx + 1}]
                        </span>{' '}
                        {citation.source}: {citation.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        {/* Footer */}
        <div 
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderTop: `1px solid var(--border-default)` }}
        >
          <div style={{ 
            fontSize: 'var(--text-caption)',
            color: 'var(--text-muted)'
          }}>
            {displayTerms.length} of {Object.keys(GLOSSARY).length} terms
          </div>
        </div>
      </div>
    </>
  );
}
