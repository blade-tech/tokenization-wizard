import { useState } from "react";
import { Button } from "./components/ui/button";
import ScreenInputs from "./components/ScreenInputs";
import ScreenShowWork from "./components/ScreenShowWork";
import ScreenReport from "./components/ScreenReport";
import ScreenMethodology from "./components/ScreenMethodology";
import { AppProvider, useAppContext } from "./components/AppContext";
import { TerminologyToggle, GlossaryButton, GlossaryModal } from "./components/TerminologyControls";
import { Toaster } from "./components/ui/sonner";

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<'inputs' | 'show-work' | 'report' | 'methodology'>('inputs');
  const { loadScenario, data } = useAppContext();

  const handleNavigate = (screen: string) => {
    // Auto-load Strong Tokenization scenario when navigating to Report if no data loaded
    if (screen === 'report' && !data.assetType) {
      loadScenario('strong-acp');
    }
    setCurrentScreen(screen as 'inputs' | 'show-work' | 'report' | 'methodology');
  };
  
  const handleLoadScenario = (scenario: 'strong-acp' | 'claim-wrapper' | 'inconclusive') => {
    loadScenario(scenario);
    setCurrentScreen('show-work');
  };
  
  // Determine which scenario is currently loaded
  const getCurrentScenario = () => {
    if (data.assetType === "Investment Security" && data.jurisdiction === "Germany") {
      return 'strong-acp';
    } else if (data.assetType === "Tangible Goods" && data.jurisdiction === "United States (New York)") {
      return 'claim-wrapper';
    } else if (data.assetType === "Digital Rights" && data.jurisdiction === "Singapore") {
      return 'inconclusive';
    }
    return null;
  };
  
  const currentScenario = getCurrentScenario();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      {/* Toast Notifications */}
      <Toaster />
      
      {/* Glossary Modal */}
      <GlossaryModal />
      
      {/* Scenario Selector - Top Left */}
      <div 
        className="fixed top-4 left-4 z-50 flex flex-col gap-2 p-3 rounded-lg print:hidden max-[480px]:left-2 max-[480px]:top-2 max-[480px]:p-2"
        style={{ 
          backgroundColor: 'var(--surface-card)',
          boxShadow: 'var(--elevation-overlay)',
          border: `1px solid var(--border-default)`
        }}
      >
        <div style={{ 
          fontSize: 'var(--text-caption)', 
          color: 'var(--text-muted)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--space-1)'
        }}>
          Example Scenarios
        </div>
        <Button
          size="sm"
          variant={currentScenario === 'strong-acp' ? 'default' : 'outline'}
          onClick={() => handleLoadScenario('strong-acp')}
          style={{ justifyContent: 'flex-start' }}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <div 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--status-good)',
                  flexShrink: 0
                }} 
              />
              <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)' }}>
                Strong Control
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: currentScenario === 'strong-acp' ? 'inherit' : 'var(--text-muted)', fontWeight: 'var(--font-weight-normal)' }}>
              Score 100 • Germany
            </span>
          </div>
        </Button>
        <Button
          size="sm"
          variant={currentScenario === 'inconclusive' ? 'default' : 'outline'}
          onClick={() => handleLoadScenario('inconclusive')}
          style={{ justifyContent: 'flex-start' }}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <div 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--status-good)',
                  flexShrink: 0
                }} 
              />
              <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)' }}>
                Strong Control
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: currentScenario === 'inconclusive' ? 'inherit' : 'var(--text-muted)', fontWeight: 'var(--font-weight-normal)' }}>
              Score 82 • Singapore
            </span>
          </div>
        </Button>
        <Button
          size="sm"
          variant={currentScenario === 'claim-wrapper' ? 'default' : 'outline'}
          onClick={() => handleLoadScenario('claim-wrapper')}
          style={{ justifyContent: 'flex-start' }}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <div 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--status-warn)',
                  flexShrink: 0
                }} 
              />
              <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--font-weight-semibold)' }}>
                Likely Works
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: currentScenario === 'claim-wrapper' ? 'inherit' : 'var(--text-muted)', fontWeight: 'var(--font-weight-normal)' }}>
              Score 70 • US (NY)
            </span>
          </div>
        </Button>
      </div>
      
      {/* Top Right Controls */}
      <div 
        className="fixed top-4 right-4 z-50 flex flex-col gap-2 print:hidden max-[768px]:right-2 max-[768px]:top-2"
      >
        {/* Terminology Toggle */}
        <div 
          className="flex gap-2 p-2 rounded-lg max-[768px]:flex-col max-[768px]:p-1.5"
          style={{ 
            backgroundColor: 'var(--surface-card)',
            boxShadow: 'var(--elevation-overlay)',
            border: `1px solid var(--border-default)`
          }}
        >
          <TerminologyToggle />
          <GlossaryButton />
        </div>
        
        {/* Screen Navigation */}
        <div 
          className="flex gap-2 p-2 rounded-lg max-[768px]:p-1.5"
          style={{ 
            backgroundColor: 'var(--surface-card)',
            boxShadow: 'var(--elevation-overlay)',
            border: `1px solid var(--border-default)`
          }}
        >
          <Button
            size="sm"
            variant={currentScreen === 'inputs' ? 'default' : 'outline'}
            onClick={() => handleNavigate('inputs')}
          >
            01 Inputs
          </Button>
          <Button
            size="sm"
            variant={currentScreen === 'show-work' ? 'default' : 'outline'}
            onClick={() => handleNavigate('show-work')}
          >
            02 Show Work
          </Button>
          <Button
            size="sm"
            variant={currentScreen === 'report' ? 'default' : 'outline'}
            onClick={() => handleNavigate('report')}
          >
            03 Report
          </Button>
        </div>
      </div>

      {/* Render Current Screen with fade transition */}
      <div 
        key={currentScreen}
        style={{
          animation: 'fadeIn 0.3s ease-in-out'
        }}
      >
        {currentScreen === 'inputs' && <ScreenInputs onNavigate={handleNavigate} />}
        {currentScreen === 'show-work' && <ScreenShowWork onNavigate={handleNavigate} />}
        {currentScreen === 'report' && <ScreenReport onNavigate={handleNavigate} />}
        {currentScreen === 'methodology' && <ScreenMethodology onNavigate={handleNavigate} />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
