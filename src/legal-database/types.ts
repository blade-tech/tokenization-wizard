/**
 * Core TypeScript types for the Legal Research Database
 *
 * This file defines the schema for storing jurisdiction-specific legal frameworks,
 * rules, citations, and risk factors for tokenization analysis.
 */

// ============================================================================
// ENUMS & CONSTANTS
// ============================================================================

export type LegalSystemType =
  | 'civil-law'           // Continental European system
  | 'common-law'          // UK/US precedent-based system
  | 'civil-shariah'       // Civil law + Shariah overlay (Qatar, Bahrain)
  | 'common-shariah'      // Common law + Shariah overlay (Malaysia)
  | 'mixed';              // Hybrid systems

export type JurisdictionType = 'onshore' | 'offshore' | 'both';

export type PropertyStatus = 'recognized' | 'unclear' | 'not-recognized';

export type ACPBindingStrength = 'strong' | 'moderate' | 'weak' | 'none';

export type RegulatoryStatus = 'permitted' | 'restricted' | 'prohibited' | 'unclear';

export type CitationType = 'statute' | 'regulation' | 'case' | 'guidance' | 'standard' | 'fatwa';

export type RiskSeverity = 'high' | 'medium' | 'low';

export type RiskCategory = 'legal' | 'regulatory' | 'operational' | 'shariah' | 'enforcement' | 'cross-border';

export type LegalCertainty = 'high' | 'medium' | 'low';

// ============================================================================
// JURISDICTION STRUCTURE
// ============================================================================

export interface Jurisdiction {
  /** Unique identifier (e.g., 'qatar', 'uk') */
  id: string;

  /** Display name (e.g., 'Qatar') */
  name: string;

  /** Legal system classification */
  legalSystem: LegalSystemType;

  /** High-level overview of legal framework */
  overview: JurisdictionOverview;

  /** Rules for different asset types */
  assetTypes: AssetTypeRule[];

  /** Control and ownership frameworks */
  controlFrameworks: ControlFramework[];

  /** Tokenization-specific regulations */
  tokenizationRules: TokenizationRule[];

  /** Settlement and payment system rules */
  settlementRules: SettlementRule[];

  /** Library of legal citations */
  citations: Citation[];

  /** Jurisdiction-specific risk factors */
  riskFactors: RiskFactor[];

  /** Last updated timestamp */
  lastUpdated: string;

  /** Version for tracking major updates */
  version: string;
}

// ============================================================================
// JURISDICTION OVERVIEW
// ============================================================================

export interface JurisdictionOverview {
  /** Description of legal system structure */
  legalSystemDescription: string;

  /** Shariah compliance framework (if applicable) */
  shariahCompliance?: {
    /** Whether Shariah compliance is mandatory */
    required: boolean;

    /** Shariah supervisory authority */
    authority: string;

    /** Key Shariah principles applicable */
    keyPrinciples: string[];

    /** Whether AAOIFI standards are adopted */
    aaoifiAdopted: boolean;
  };

  /** Main regulatory bodies */
  regulatoryBodies: RegulatoryBody[];

  /** Key legislation governing financial markets */
  keyLegislation: string[];

  /** Financial center information (if applicable) */
  financialCenter?: {
    /** Name of financial center (e.g., "Qatar Financial Centre") */
    name: string;

    /** Type of jurisdiction */
    jurisdiction: JurisdictionType;

    /** Special regulatory regime description */
    specialRules?: string;

    /** Whether it has separate legal framework */
    separateLegalFramework: boolean;
  };

  /** Key characteristics relevant to tokenization */
  tokenizationReadiness: {
    /** Overall readiness assessment */
    level: 'advanced' | 'developing' | 'nascent' | 'unclear';

    /** Key strengths */
    strengths: string[];

    /** Key gaps or limitations */
    gaps: string[];
  };
}

export interface RegulatoryBody {
  /** Full name of regulatory body */
  name: string;

  /** Acronym (e.g., "QCB", "FCA") */
  acronym?: string;

  /** Regulatory role and scope */
  role: string;

  /** Jurisdiction coverage */
  jurisdiction: JurisdictionType;

  /** Official website */
  website?: string;

  /** Contact information (if relevant) */
  contact?: string;
}

// ============================================================================
// ASSET TYPE RULES
// ============================================================================

export interface AssetTypeRule {
  /** Asset type identifier (must match app options) */
  assetType: string;

  /** How the jurisdiction legally classifies this asset */
  legalClassification: string;

  /** Applicable statutes and regulations */
  governingLaw: string[];

  /** Whether asset is recognized as property under law */
  propertyStatus: PropertyStatus;

  /** What constitutes evidence of ownership */
  ownershipEvidence: string[];

  /** Legal mechanisms for transferring ownership */
  transferMechanism: string[];

  /** Whether transfer requires registration */
  registrationRequired: boolean;

  /** Registry details (if applicable) */
  registryDetails?: {
    /** Name of registry */
    name: string;

    /** Is it statutory or voluntary? */
    statutory: boolean;

    /** Does registration confer legal title? */
    titleConferring: boolean;

    /** Can registry operate on DLT? */
    dltCompatible: boolean | 'unclear';
  };

  /** Shariah considerations (if applicable) */
  shariahConsiderations?: {
    /** Is this asset type generally permissible? */
    permissible: boolean;

    /** Conditions for permissibility */
    conditions: string[];

    /** Prohibited features (riba, gharar, etc.) */
    prohibitedFeatures: string[];

    /** Relevant fatwas or Shariah board rulings */
    rulings?: string[];
  };

  /** Citation IDs referencing legal sources */
  citations: string[];

  /** Additional notes */
  notes?: string;
}

// ============================================================================
// CONTROL FRAMEWORKS
// ============================================================================

export interface ControlFramework {
  /** Framework identifier (e.g., 'Registry of Record', 'Custodian') */
  framework: string;

  /** Asset types this framework applies to */
  assetTypesApplicable: string[];

  /** Legal basis for this control mechanism */
  legalBasis: string[];

  /** Definition of control under this framework */
  controlDefinition: {
    /** Conditions necessary for control */
    necessary: ControlCondition[];

    /** Conditions sufficient to trigger transfer */
    sufficient: ControlCondition[];
  };

  /** How strongly ACP-bound is this framework? */
  acpBinding: ACPBindingStrength;

  /** Whether intermediary approval required */
  intermediaryRequired: boolean;

  /** Intermediary details (if required) */
  intermediaryDetails?: {
    /** Type of intermediary */
    type: string;

    /** Licensing requirements */
    licensingRequired: boolean;

    /** Regulatory oversight */
    regulator?: string;
  };

  /** Good faith purchaser protections */
  goodFaithProtection: {
    /** Whether jurisdiction protects bona fide purchasers */
    available: boolean;

    /** Conditions for protection */
    conditions?: string[];

    /** Legal basis */
    legalBasis?: string[];
  };

  /** Citation IDs */
  citations: string[];

  /** Examples of implementation */
  examples?: string[];
}

export interface ControlCondition {
  /** Description of the condition */
  condition: string;

  /** Legal requirement or statutory basis */
  legalRequirement: string;

  /** How to verify this condition is met */
  verification: string;

  /** Whether this is well-established in law */
  certainty: LegalCertainty;
}

// ============================================================================
// TOKENIZATION RULES
// ============================================================================

export interface TokenizationRule {
  /** Asset types covered by this rule */
  applicableAssets: string[];

  /** Current regulatory status */
  regulatoryStatus: RegulatoryStatus;

  /** Required licenses or approvals */
  requiredLicenses: License[];

  /** Technical requirements (if specified) */
  technicalRequirements: string[];

  /** Shariah requirements (if applicable) */
  shariahRequirements?: string[];

  /** Regulatory limitations or restrictions */
  limitations: string[];

  /** Sandbox or pilot programs available */
  sandbox?: {
    /** Whether regulatory sandbox exists */
    available: boolean;

    /** Sandbox authority */
    authority?: string;

    /** Application process */
    process?: string;

    /** Notable participants */
    precedents?: string[];
  };

  /** Precedents or case studies */
  precedents: Precedent[];

  /** Citation IDs */
  citations: string[];

  /** Future developments or pending legislation */
  pendingDevelopments?: string[];
}

export interface License {
  /** License name */
  name: string;

  /** Issuing authority */
  issuingAuthority: string;

  /** Requirements to obtain */
  requirements: string[];

  /** Typical timeline */
  timeline: string;

  /** Estimated cost (if available) */
  cost?: string;

  /** Whether ongoing compliance required */
  ongoingCompliance?: string[];
}

export interface Precedent {
  /** Name of project, case, or initiative */
  name: string;

  /** Year (if applicable) */
  year?: number;

  /** Description */
  description: string;

  /** Outcome or current status */
  outcome: string;

  /** Relevance to tokenization analysis */
  relevance: string;

  /** Citation or reference */
  citation?: string;
}

// ============================================================================
// SETTLEMENT RULES
// ============================================================================

export interface SettlementRule {
  /** Settlement type (e.g., 'DvP', 'PvP', 'FoP') */
  settlementType: string;

  /** Legal basis for settlement finality */
  legalBasis: string[];

  /** Whether atomic settlement is legally possible */
  atomicSettlementPossible: boolean;

  /** Central bank digital currency status */
  centralBankRules?: {
    /** Whether CBDC exists or is planned */
    cbdcAvailable: boolean;

    /** CBDC status */
    cbdcStatus?: 'live' | 'pilot' | 'research' | 'none';

    /** Whether tokenized deposits are permitted */
    tokenizedDepositsPermitted: boolean;

    /** Relevant central bank guidance */
    restrictions: string[];
  };

  /** Settlement finality rules */
  finality: {
    /** Settlement timing (e.g., 'T+0', 'T+2') */
    timing: string;

    /** Legal certainty of finality */
    legalCertainty: LegalCertainty;

    /** Rules on revocability */
    revocabilityRules: string[];

    /** Insolvency protection for settled transactions */
    insolvencyProtection: boolean;
  };

  /** Payment system oversight */
  paymentSystemOversight?: {
    /** Regulator responsible */
    regulator: string;

    /** Key requirements */
    requirements: string[];

    /** International standards compliance (CPMI-IOSCO) */
    internationalStandards: boolean;
  };

  /** Shariah-compliant settlement mechanisms */
  shariahSettlement?: {
    /** Permitted settlement structures */
    permittedStructures: string[];

    /** Prohibited features */
    prohibitions: string[];

    /** Alternative mechanisms (tawarruq, etc.) */
    alternatives: string[];
  };

  /** Citation IDs */
  citations: string[];
}

// ============================================================================
// CITATIONS
// ============================================================================

export interface Citation {
  /** Unique identifier for referencing */
  id: string;

  /** Type of legal source */
  type: CitationType;

  /** Jurisdiction this citation applies to */
  jurisdiction: string;

  /** Full title of the source */
  title: string;

  /** Official reference (e.g., "Law No. 8 of 2012") */
  reference: string;

  /** Specific section or article (if applicable) */
  section?: string;

  /** Official URL or source */
  url?: string;

  /** Summary of relevance */
  summary: string;

  /** Relevant quote or excerpt */
  relevantQuote?: string;

  /** Last updated or verified date (ISO 8601) */
  lastUpdated: string;

  /** Whether this is primary or secondary authority */
  authorityLevel: 'primary' | 'secondary' | 'guidance';
}

// ============================================================================
// RISK FACTORS
// ============================================================================

export interface RiskFactor {
  /** Unique risk identifier */
  id: string;

  /** Risk category */
  category: RiskCategory;

  /** Risk description */
  risk: string;

  /** Severity level */
  severity: RiskSeverity;

  /** When this risk applies (scenario conditions) */
  applicableScenarios: string[];

  /** Mitigation strategies */
  mitigation: string[];

  /** Whether this is a deal-breaker */
  dealBreaker: boolean;

  /** Citation IDs supporting this risk */
  citations: string[];

  /** Likelihood assessment */
  likelihood?: 'high' | 'medium' | 'low';

  /** Additional context */
  notes?: string;
}

// ============================================================================
// ANALYSIS PARAMETERS & RESULTS
// ============================================================================

export interface AnalysisParams {
  /** Jurisdiction being analyzed */
  jurisdiction: string;

  /** Asset type */
  assetType: string;

  /** Binding path mechanism */
  bindingPath: string;

  /** Settlement asset */
  settlementAsset?: string;

  /** Token rail / platform */
  tokenRail?: string;

  /** Legal basis claimed */
  legalBasis?: string;

  /** Is token control necessary? */
  isNecessary?: boolean;

  /** Is token control sufficient? */
  isSufficient?: boolean;
}

export interface AnalysisResult {
  /** Overall score (0-100) */
  score: number;

  /** Score interpretation */
  interpretation: string;

  /** Detailed reasoning */
  reasoning: {
    /** Thing recognition analysis */
    thingRecognition: StepAnalysis;

    /** Asset control analysis */
    assetControl: StepAnalysis;

    /** Legal classification analysis */
    legalClassification: StepAnalysis;

    /** ACP binding analysis */
    acpBinding: StepAnalysis;

    /** Settlement mechanism analysis */
    settlement: StepAnalysis;

    /** Legal enforceability analysis */
    enforceability: StepAnalysis;
  };

  /** Identified risks */
  risks: IdentifiedRisk[];

  /** Applicable citations */
  citations: Citation[];

  /** Recommendations */
  recommendations: string[];

  /** Gap analysis */
  gaps?: string[];
}

export interface StepAnalysis {
  /** Step identifier */
  step: string;

  /** Pass/fail/warning status */
  status: 'pass' | 'fail' | 'warning' | 'unclear';

  /** Points awarded (if applicable) */
  points?: number;

  /** Explanation */
  explanation: string;

  /** Supporting citations */
  citations: string[];

  /** Specific findings */
  findings?: string[];
}

export interface IdentifiedRisk {
  /** Risk from risk factors database */
  risk: RiskFactor;

  /** Why this risk applies to current scenario */
  applicability: string;

  /** Recommended actions */
  recommendations: string[];
}
