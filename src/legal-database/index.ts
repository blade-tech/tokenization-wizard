/**
 * Legal Database Main Export
 *
 * This file aggregates all jurisdiction data and provides a unified interface
 * for the application to query legal frameworks for tokenization analysis.
 */

import { legalAnalyzer } from './query-engine';
import type { Jurisdiction } from './types';

// Import jurisdiction data
// Note: These imports will be uncommented as jurisdiction files are completed
// import { UK_JURISDICTION } from './jurisdictions/uk';
// import { QATAR_JURISDICTION } from './jurisdictions/qatar';
// import { BAHRAIN_JURISDICTION } from './jurisdictions/bahrain';
// import { MALAYSIA_JURISDICTION } from './jurisdictions/malaysia';

// ============================================================================
// JURISDICTION REGISTRATION
// ============================================================================

/**
 * Register all jurisdictions with the legal analyzer
 */
export function initializeLegalDatabase(): void {
  // Register jurisdictions as they are completed
  // legalAnalyzer.registerJurisdiction(UK_JURISDICTION);
  // legalAnalyzer.registerJurisdiction(QATAR_JURISDICTION);
  // legalAnalyzer.registerJurisdiction(BAHRAIN_JURISDICTION);
  // legalAnalyzer.registerJurisdiction(MALAYSIA_JURISDICTION);

  console.log('[Legal Database] Initialized');
}

// ============================================================================
// EXPORTS
// ============================================================================

export { legalAnalyzer } from './query-engine';
export type {
  AnalysisParams,
  AnalysisResult,
  StepAnalysis,
  IdentifiedRisk,
  Jurisdiction,
  AssetTypeRule,
  ControlFramework,
  TokenizationRule,
  SettlementRule,
  Citation,
  RiskFactor
} from './types';

// Export Islamic finance framework for reference
export * from './shared/islamic-finance';

/**
 * Helper function to get available jurisdictions
 */
export function getAvailableJurisdictions(): string[] {
  return [
    // 'uk',
    // 'qatar',
    // 'bahrain',
    // 'malaysia'
  ];
}

/**
 * Helper function to check if a jurisdiction is available
 */
export function isJurisdictionAvailable(jurisdictionId: string): boolean {
  return getAvailableJurisdictions().includes(jurisdictionId);
}
