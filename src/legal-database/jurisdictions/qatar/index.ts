/**
 * Qatar Jurisdiction Export
 *
 * Aggregates all Qatar legal framework data into a single Jurisdiction object
 */

import type { Jurisdiction } from '../../types';
import { QATAR_OVERVIEW } from './overview';
import { QATAR_ASSET_TYPES } from './asset-types';
import { QATAR_CONTROL_FRAMEWORKS } from './control-frameworks';
import { QATAR_TOKENIZATION_RULES } from './tokenization-rules';
import { QATAR_SETTLEMENT_RULES } from './settlement';
import { QATAR_CITATIONS } from './citations';
import { QATAR_RISK_FACTORS } from './risk-factors';

export const QATAR_JURISDICTION: Jurisdiction = {
  id: 'qatar',
  name: 'Qatar',
  legalSystem: 'civil-shariah',
  overview: QATAR_OVERVIEW,
  assetTypes: QATAR_ASSET_TYPES,
  controlFrameworks: QATAR_CONTROL_FRAMEWORKS,
  tokenizationRules: QATAR_TOKENIZATION_RULES,
  settlementRules: QATAR_SETTLEMENT_RULES,
  citations: QATAR_CITATIONS,
  riskFactors: QATAR_RISK_FACTORS,
  lastUpdated: '2025-01-02',
  version: '1.0.0'
};
