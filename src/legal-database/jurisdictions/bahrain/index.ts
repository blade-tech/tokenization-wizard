/**
 * Bahrain Jurisdiction Export
 *
 * Aggregates all Bahrain legal framework data into a single Jurisdiction object
 */

import type { Jurisdiction } from '../../types';
import { BAHRAIN_OVERVIEW } from './overview';
import { BAHRAIN_ASSET_TYPES } from './asset-types';
import { BAHRAIN_CONTROL_FRAMEWORKS } from './control-frameworks';
import { BAHRAIN_TOKENIZATION_RULES } from './tokenization-rules';
import { BAHRAIN_SETTLEMENT_RULES } from './settlement';
import { BAHRAIN_CITATIONS } from './citations';
import { BAHRAIN_RISK_FACTORS } from './risk-factors';

export const BAHRAIN_JURISDICTION: Jurisdiction = {
  id: 'bahrain',
  name: 'Bahrain',
  legalSystem: 'civil-shariah',
  overview: BAHRAIN_OVERVIEW,
  assetTypes: BAHRAIN_ASSET_TYPES,
  controlFrameworks: BAHRAIN_CONTROL_FRAMEWORKS,
  tokenizationRules: BAHRAIN_TOKENIZATION_RULES,
  settlementRules: BAHRAIN_SETTLEMENT_RULES,
  citations: BAHRAIN_CITATIONS,
  riskFactors: BAHRAIN_RISK_FACTORS,
  lastUpdated: '2025-01-02',
  version: '1.0.0'
};
