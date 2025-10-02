/**
 * Malaysia Jurisdiction Export
 *
 * Aggregates all Malaysia legal framework data into a single Jurisdiction object
 */

import type { Jurisdiction } from '../../types';
import { MALAYSIA_OVERVIEW } from './overview';
import { MALAYSIA_ASSET_TYPES } from './asset-types';
import { MALAYSIA_CONTROL_FRAMEWORKS } from './control-frameworks';
import { MALAYSIA_TOKENIZATION_RULES } from './tokenization-rules';
import { MALAYSIA_SETTLEMENT_RULES } from './settlement';
import { MALAYSIA_CITATIONS } from './citations';
import { MALAYSIA_RISK_FACTORS } from './risk-factors';

export const MALAYSIA_JURISDICTION: Jurisdiction = {
  id: 'malaysia',
  name: 'Malaysia',
  legalSystem: 'common-shariah',
  overview: MALAYSIA_OVERVIEW,
  assetTypes: MALAYSIA_ASSET_TYPES,
  controlFrameworks: MALAYSIA_CONTROL_FRAMEWORKS,
  tokenizationRules: MALAYSIA_TOKENIZATION_RULES,
  settlementRules: MALAYSIA_SETTLEMENT_RULES,
  citations: MALAYSIA_CITATIONS,
  riskFactors: MALAYSIA_RISK_FACTORS,
  lastUpdated: '2025-01-02',
  version: '1.0.0'
};
