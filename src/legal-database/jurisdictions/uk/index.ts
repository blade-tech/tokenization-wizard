/**
 * UK Jurisdiction Export
 *
 * Aggregates all UK legal framework data into a single Jurisdiction object
 */

import type { Jurisdiction } from '../../types';
import { UK_OVERVIEW } from './overview';
import { UK_ASSET_TYPES } from './asset-types';
import { UK_CONTROL_FRAMEWORKS } from './control-frameworks';
import { UK_TOKENIZATION_RULES } from './tokenization-rules';
import { UK_SETTLEMENT_RULES } from './settlement';
import { UK_CITATIONS } from './citations';
import { UK_RISK_FACTORS } from './risk-factors';

export const UK_JURISDICTION: Jurisdiction = {
  id: 'uk',
  name: 'United Kingdom',
  legalSystem: 'common-law',
  overview: UK_OVERVIEW,
  assetTypes: UK_ASSET_TYPES,
  controlFrameworks: UK_CONTROL_FRAMEWORKS,
  tokenizationRules: UK_TOKENIZATION_RULES,
  settlementRules: UK_SETTLEMENT_RULES,
  citations: UK_CITATIONS,
  riskFactors: UK_RISK_FACTORS,
  lastUpdated: '2025-01-02',
  version: '1.0.0'
};
