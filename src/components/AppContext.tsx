import { createContext, useContext, useState, ReactNode } from "react";

interface AppData {
  // Main inputs
  assetType: string;
  jurisdiction: string;
  bindingPath: string;
  
  // Advanced inputs
  settlementAsset: string;
  tokenRail: string;
  legalBasis: string;
  
  // Decision tree state
  isNecessary: boolean;
  isSufficient: boolean;
  
  // Business value & custom notes
  businessValue?: string;
  riskNotes?: string;
  opsNotes?: string;
}

export type TerminologyMode = 'plain' | 'legal' | 'dual';

interface AppContextType {
  data: AppData;
  updateData: (updates: Partial<AppData>) => void;
  resetData: () => void;
  loadScenario: (scenario: 'strong-acp' | 'claim-wrapper') => void;
  getScore: () => number;
  getScoreLabel: () => string;
  getOutcome: () => string;
  terminologyMode: TerminologyMode;
  setTerminologyMode: (mode: TerminologyMode) => void;
  glossaryOpen: boolean;
  setGlossaryOpen: (open: boolean) => void;
  glossaryFilterTerm: string | null;
  setGlossaryFilterTerm: (termKey: string | null) => void;
}

const defaultData: AppData = {
  assetType: "",
  jurisdiction: "",
  bindingPath: "",
  settlementAsset: "",
  tokenRail: "",
  legalBasis: "",
  isNecessary: true,
  isSufficient: true,
};

const strongACPScenario: AppData = {
  assetType: "Investment Security",
  jurisdiction: "Germany",
  bindingPath: "Registry of Record",
  settlementAsset: "Tokenized Deposit",
  tokenRail: "Permissioned chain",
  legalBasis: "eWpG §16 crypto securities register",
  isNecessary: true,
  isSufficient: true,
  businessValue: "T+2 → T+0 same‑day settlement; margin requirements reduced by 30–40%; operational breaks reduced by 60–70%",
  riskNotes: "Monitor BaFin guidance on crypto securities registers; ensure compliance with eWpG custody requirements; maintain disaster recovery for registry access",
  opsNotes: "Quarterly review of eWpG §16 compliance; annual audit of token registry infrastructure; coordinate with Bundesanstalt for regulatory updates"
};

const claimWrapperScenario: AppData = {
  assetType: "Tangible Goods",
  jurisdiction: "United States (New York)",
  bindingPath: "Custodian / Bailee",
  settlementAsset: "Commercial bank money",
  tokenRail: "Public chain",
  legalBasis: "Warehouse receipt under UCC 7; bailee arrangement",
  isNecessary: false,
  isSufficient: false,
  businessValue: "Distribution efficiency improved; broader market access for commodity tokens; BUT legal risk remains high without MLETR-compliant electronic documents",
  riskNotes: "Token represents claim against custodian, NOT direct control of goods; custodian insolvency risk; recommend MLETR or e-doc retrofit to achieve true ACP binding",
  opsNotes: "Review UCC 7 warehouse receipt requirements; consider MLETR adoption pathway; evaluate custodian insurance coverage; implement robust reconciliation processes"
};

const inconclusiveScenario: AppData = {
  assetType: "Digital Rights",
  jurisdiction: "Singapore",
  bindingPath: "Smart Contract Registry",
  settlementAsset: "Stablecoin (USDC)",
  tokenRail: "Permissioned chain",
  legalBasis: "Payment Services Act; uncertain direct property status",
  isNecessary: true,
  isSufficient: false,
  businessValue: "Automated royalty distribution; reduced intermediary costs; BUT unclear legal enforceability for IP transfer without registry reform",
  riskNotes: "Token controls smart contract state but legal recognition of digital IP transfer via token is uncertain; requires case-by-case legal opinion; recommend hybrid approach with traditional IP assignment until regulatory clarity",
  opsNotes: "Monitor MAS guidance on digital asset property rights; review Payment Services Act compliance; coordinate with IPOS on IP registry integration; conduct annual legal review of enforceability framework"
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(defaultData);
  const [terminologyMode, setTerminologyMode] = useState<TerminologyMode>('plain');
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [glossaryFilterTerm, setGlossaryFilterTerm] = useState<string | null>(null);

  const updateData = (updates: Partial<AppData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const resetData = () => {
    setData(defaultData);
  };
  
  const loadScenario = (scenario: 'strong-acp' | 'claim-wrapper' | 'inconclusive') => {
    if (scenario === 'strong-acp') {
      setData(strongACPScenario);
    } else if (scenario === 'claim-wrapper') {
      setData(claimWrapperScenario);
    } else {
      setData(inconclusiveScenario);
    }
  };

  const getScore = () => {
    let score = 0;
    
    // Thing Recognition (15 points)
    if (data.assetType) score += 15;
    
    // Asset Control (20 points)
    if (data.jurisdiction) score += 20;
    
    // Legal Classification (15 points)
    if (data.bindingPath) score += 15;
    
    // ACP Binding Strength (25 points)
    if (data.isNecessary && data.isSufficient) {
      score += 25;
    } else if (data.isNecessary || data.isSufficient) {
      score += 12;
    }
    
    // Settlement Mechanism (15 points)
    if (data.settlementAsset === "Tokenized Deposit") {
      score += 15;
    } else if (data.settlementAsset) {
      score += 10;
    }
    
    // Legal Enforceability (10 points)
    if (data.legalBasis) {
      score += 10;
    } else {
      score += 5; // Base score
    }
    
    return score;
  };

  const getScoreLabel = () => {
    const score = getScore();
    if (score >= 80) return "Strong (proceed to structuring)";
    if (score >= 60) return "Probable (close gaps)";
    if (score >= 40) return "Weak (re-architect)";
    return "Claim-wrapper (label honestly)";
  };

  const getOutcome = () => {
    const score = getScore();
    if (!data.isNecessary || !data.isSufficient) {
      return "Tokenized Claim (no ACP binding)";
    }
    if (score >= 60) {
      return "Tokenized Asset (ACP-bound)";
    }
    return "Out of Scope (no cognizable right)";
  };

  return (
    <AppContext.Provider value={{ 
      data, 
      updateData, 
      resetData, 
      loadScenario, 
      getScore, 
      getScoreLabel, 
      getOutcome,
      terminologyMode,
      setTerminologyMode,
      glossaryOpen,
      setGlossaryOpen,
      glossaryFilterTerm,
      setGlossaryFilterTerm
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
