/**
 * Legal Analysis Query Engine
 *
 * This module provides the core logic for analyzing tokenization structures
 * against jurisdiction-specific legal frameworks. It evaluates user inputs
 * and generates comprehensive legal assessments with scoring, reasoning,
 * risk identification, and recommendations.
 */

import type {
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
  RiskFactor,
  ACPBindingStrength
} from './types';

// ============================================================================
// LEGAL ANALYZER CLASS
// ============================================================================

export class LegalAnalyzer {
  private jurisdictions: Map<string, Jurisdiction> = new Map();

  /**
   * Register a jurisdiction with the analyzer
   */
  registerJurisdiction(jurisdiction: Jurisdiction): void {
    this.jurisdictions.set(jurisdiction.id, jurisdiction);
  }

  /**
   * Main analysis entry point
   * Evaluates a tokenization structure against legal frameworks
   */
  analyzeTokenization(params: AnalysisParams): AnalysisResult {
    // 1. Load jurisdiction data
    const jurisdiction = this.jurisdictions.get(params.jurisdiction);
    if (!jurisdiction) {
      throw new Error(`Jurisdiction not found: ${params.jurisdiction}`);
    }

    // 2. Find applicable asset type rule
    const assetRule = this.findAssetTypeRule(jurisdiction, params.assetType);

    // 3. Find applicable control framework
    const controlFramework = this.findControlFramework(
      jurisdiction,
      params.bindingPath,
      params.assetType
    );

    // 4. Find tokenization rules
    const tokenRules = this.findTokenizationRules(jurisdiction, params.assetType);

    // 5. Find settlement rules
    const settlementRule = this.findSettlementRule(
      jurisdiction,
      params.settlementAsset
    );

    // 6. Perform step-by-step analysis
    const stepA = this.analyzeThingRecognition(assetRule, jurisdiction);
    const stepB = this.analyzeAssetControl(assetRule, controlFramework, params);
    const stepC = this.analyzeLegalClassification(assetRule, jurisdiction);
    const stepD = this.analyzeACPBinding(
      controlFramework,
      assetRule,
      params,
      jurisdiction
    );
    const stepE = this.analyzeSettlement(settlementRule, params, jurisdiction);
    const stepF = this.analyzeEnforceability(
      assetRule,
      controlFramework,
      tokenRules,
      jurisdiction,
      params
    );

    // 7. Calculate overall score
    const score = this.calculateScore({
      stepA,
      stepB,
      stepC,
      stepD,
      stepE,
      stepF
    });

    // 8. Identify applicable risks
    const risks = this.identifyRisks(
      jurisdiction,
      params,
      assetRule,
      controlFramework,
      tokenRules
    );

    // 9. Collect relevant citations
    const citations = this.collectCitations(
      jurisdiction,
      assetRule,
      controlFramework,
      tokenRules,
      settlementRule
    );

    // 10. Generate recommendations
    const recommendations = this.generateRecommendations(
      score,
      stepD,
      risks,
      jurisdiction,
      params
    );

    // 11. Identify gaps
    const gaps = this.identifyGaps(stepA, stepB, stepC, stepD, stepE, stepF);

    return {
      score,
      interpretation: this.getScoreInterpretation(score),
      reasoning: {
        thingRecognition: stepA,
        assetControl: stepB,
        legalClassification: stepC,
        acpBinding: stepD,
        settlement: stepE,
        enforceability: stepF
      },
      risks,
      citations,
      recommendations,
      gaps
    };
  }

  // ==========================================================================
  // STEP ANALYSIS METHODS
  // ==========================================================================

  private analyzeThingRecognition(
    assetRule: AssetTypeRule | null,
    jurisdiction: Jurisdiction
  ): StepAnalysis {
    if (!assetRule) {
      return {
        step: 'A',
        status: 'fail',
        points: 0,
        explanation: 'Asset type not recognized under applicable law.',
        citations: [],
        findings: ['No legal framework found for this asset type']
      };
    }

    const status = assetRule.propertyStatus === 'recognized' ? 'pass' :
                   assetRule.propertyStatus === 'unclear' ? 'warning' : 'fail';

    const points = status === 'pass' ? 15 : status === 'warning' ? 10 : 0;

    return {
      step: 'A',
      status,
      points,
      explanation: this.generateThingRecognitionExplanation(assetRule, jurisdiction),
      citations: assetRule.citations,
      findings: [
        `Property status: ${assetRule.propertyStatus}`,
        `Legal classification: ${assetRule.legalClassification}`,
        `Governing law: ${assetRule.governingLaw.join(', ')}`
      ]
    };
  }

  private analyzeAssetControl(
    assetRule: AssetTypeRule | null,
    controlFramework: ControlFramework | null,
    params: AnalysisParams
  ): StepAnalysis {
    if (!assetRule || !controlFramework) {
      return {
        step: 'B',
        status: 'fail',
        points: 0,
        explanation: 'Cannot assess control without defined asset type and control framework.',
        citations: [],
        findings: []
      };
    }

    // Check if control framework is applicable to asset type
    if (!controlFramework.assetTypesApplicable.includes(params.assetType)) {
      return {
        step: 'B',
        status: 'fail',
        points: 0,
        explanation: `${params.bindingPath} is not applicable to ${params.assetType}.`,
        citations: controlFramework.citations,
        findings: [`Applicable asset types: ${controlFramework.assetTypesApplicable.join(', ')}`]
      };
    }

    // Assess control certainty
    const controlCertainty = this.assessControlCertainty(controlFramework);
    const status = controlCertainty === 'high' ? 'pass' :
                   controlCertainty === 'medium' ? 'warning' : 'fail';

    const points = status === 'pass' ? 20 : status === 'warning' ? 15 : 5;

    return {
      step: 'B',
      status,
      points,
      explanation: this.generateAssetControlExplanation(controlFramework, assetRule),
      citations: controlFramework.citations,
      findings: [
        `Control framework: ${controlFramework.framework}`,
        `ACP binding: ${controlFramework.acpBinding}`,
        `Intermediary required: ${controlFramework.intermediaryRequired ? 'Yes' : 'No'}`,
        `Good faith protection: ${controlFramework.goodFaithProtection.available ? 'Yes' : 'No'}`
      ]
    };
  }

  private analyzeLegalClassification(
    assetRule: AssetTypeRule | null,
    jurisdiction: Jurisdiction
  ): StepAnalysis {
    if (!assetRule) {
      return {
        step: 'C',
        status: 'fail',
        points: 0,
        explanation: 'Cannot classify asset without recognized asset type.',
        citations: [],
        findings: []
      };
    }

    const status = assetRule.governingLaw.length > 0 ? 'pass' : 'warning';
    const points = status === 'pass' ? 15 : 8;

    return {
      step: 'C',
      status,
      points,
      explanation: this.generateLegalClassificationExplanation(assetRule, jurisdiction),
      citations: assetRule.citations,
      findings: [
        `Legal classification: ${assetRule.legalClassification}`,
        `Governing law: ${assetRule.governingLaw.join(', ')}`,
        `Registration required: ${assetRule.registrationRequired ? 'Yes' : 'No'}`
      ]
    };
  }

  private analyzeACPBinding(
    controlFramework: ControlFramework | null,
    assetRule: AssetTypeRule | null,
    params: AnalysisParams,
    jurisdiction: Jurisdiction
  ): StepAnalysis {
    if (!controlFramework || !assetRule) {
      return {
        step: 'D',
        status: 'fail',
        points: 0,
        explanation: 'Cannot assess ACP binding without control framework.',
        citations: [],
        findings: []
      };
    }

    // Evaluate necessary and sufficient conditions
    const necessaryMet = this.evaluateNecessaryConditions(
      controlFramework,
      params.isNecessary
    );
    const sufficientMet = this.evaluateSufficientConditions(
      controlFramework,
      params.isSufficient
    );

    let points = 0;
    let status: 'pass' | 'warning' | 'fail' = 'fail';

    if (necessaryMet && sufficientMet) {
      points = 25;
      status = 'pass';
    } else if (necessaryMet || sufficientMet) {
      points = 12;
      status = 'warning';
    }

    return {
      step: 'D',
      status,
      points,
      explanation: this.generateACPBindingExplanation(
        controlFramework,
        necessaryMet,
        sufficientMet,
        jurisdiction
      ),
      citations: controlFramework.citations,
      findings: [
        `Token control necessary: ${necessaryMet ? 'Yes' : 'No'}`,
        `Token control sufficient: ${sufficientMet ? 'Yes' : 'No'}`,
        `ACP binding strength: ${controlFramework.acpBinding}`,
        `Necessary conditions: ${controlFramework.controlDefinition.necessary.length}`,
        `Sufficient conditions: ${controlFramework.controlDefinition.sufficient.length}`
      ]
    };
  }

  private analyzeSettlement(
    settlementRule: SettlementRule | null,
    params: AnalysisParams,
    jurisdiction: Jurisdiction
  ): StepAnalysis {
    if (!settlementRule) {
      return {
        step: 'E',
        status: 'warning',
        points: 8,
        explanation: 'Settlement mechanism not clearly defined for this asset type.',
        citations: [],
        findings: []
      };
    }

    // Assess settlement quality
    const atomicPossible = settlementRule.atomicSettlementPossible;
    const isTokenizedDeposit = params.settlementAsset?.toLowerCase().includes('tokenized deposit');

    let points = 10;
    let status: 'pass' | 'warning' | 'fail' = 'warning';

    if (isTokenizedDeposit && atomicPossible) {
      points = 15;
      status = 'pass';
    } else if (atomicPossible) {
      points = 12;
      status = 'warning';
    }

    return {
      step: 'E',
      status,
      points,
      explanation: this.generateSettlementExplanation(settlementRule, params, jurisdiction),
      citations: settlementRule.citations,
      findings: [
        `Settlement type: ${settlementRule.settlementType}`,
        `Atomic settlement possible: ${atomicPossible ? 'Yes' : 'No'}`,
        `Finality timing: ${settlementRule.finality.timing}`,
        `Legal certainty: ${settlementRule.finality.legalCertainty}`,
        `CBDC available: ${settlementRule.centralBankRules?.cbdcAvailable ? 'Yes' : 'No'}`
      ]
    };
  }

  private analyzeEnforceability(
    assetRule: AssetTypeRule | null,
    controlFramework: ControlFramework | null,
    tokenRules: TokenizationRule | null,
    jurisdiction: Jurisdiction,
    params: AnalysisParams
  ): StepAnalysis {
    if (!assetRule || !controlFramework) {
      return {
        step: 'F',
        status: 'fail',
        points: 0,
        explanation: 'Cannot assess enforceability without defined legal framework.',
        citations: [],
        findings: []
      };
    }

    // Check if legal basis is provided
    const hasLegalBasis = params.legalBasis && params.legalBasis.length > 0;

    // Check regulatory status
    const regulatoryStatus = tokenRules?.regulatoryStatus || 'unclear';
    const permitted = regulatoryStatus === 'permitted';

    let points = 5;
    let status: 'pass' | 'warning' | 'fail' = 'warning';

    if (hasLegalBasis && permitted) {
      points = 10;
      status = 'pass';
    } else if (hasLegalBasis || permitted) {
      points = 7;
      status = 'warning';
    }

    return {
      step: 'F',
      status,
      points,
      explanation: this.generateEnforceabilityExplanation(
        assetRule,
        controlFramework,
        tokenRules,
        hasLegalBasis,
        jurisdiction
      ),
      citations: [
        ...(assetRule.citations || []),
        ...(controlFramework.citations || []),
        ...(tokenRules?.citations || [])
      ],
      findings: [
        `Legal basis provided: ${hasLegalBasis ? 'Yes' : 'No'}`,
        `Regulatory status: ${regulatoryStatus}`,
        `Good faith protection: ${controlFramework.goodFaithProtection.available ? 'Available' : 'Not available'}`,
        `Precedents available: ${tokenRules?.precedents.length || 0}`
      ]
    };
  }

  // ==========================================================================
  // HELPER METHODS
  // ==========================================================================

  private findAssetTypeRule(
    jurisdiction: Jurisdiction,
    assetType: string
  ): AssetTypeRule | null {
    return jurisdiction.assetTypes.find(at => at.assetType === assetType) || null;
  }

  private findControlFramework(
    jurisdiction: Jurisdiction,
    bindingPath: string,
    assetType: string
  ): ControlFramework | null {
    return jurisdiction.controlFrameworks.find(
      cf => cf.framework === bindingPath &&
            cf.assetTypesApplicable.includes(assetType)
    ) || null;
  }

  private findTokenizationRules(
    jurisdiction: Jurisdiction,
    assetType: string
  ): TokenizationRule | null {
    return jurisdiction.tokenizationRules.find(
      tr => tr.applicableAssets.includes(assetType)
    ) || null;
  }

  private findSettlementRule(
    jurisdiction: Jurisdiction,
    settlementAsset?: string
  ): SettlementRule | null {
    if (!settlementAsset) {
      return jurisdiction.settlementRules[0] || null;
    }

    return jurisdiction.settlementRules.find(
      sr => sr.settlementType.toLowerCase().includes(settlementAsset.toLowerCase())
    ) || jurisdiction.settlementRules[0] || null;
  }

  private assessControlCertainty(
    framework: ControlFramework
  ): 'high' | 'medium' | 'low' {
    const necessaryConditions = framework.controlDefinition.necessary;
    const highCertaintyCount = necessaryConditions.filter(
      c => c.certainty === 'high'
    ).length;

    const ratio = highCertaintyCount / necessaryConditions.length;

    if (ratio >= 0.8) return 'high';
    if (ratio >= 0.5) return 'medium';
    return 'low';
  }

  private evaluateNecessaryConditions(
    framework: ControlFramework,
    userClaim?: boolean
  ): boolean {
    // If user explicitly claims necessary, verify against framework
    if (userClaim !== undefined) {
      return userClaim && framework.controlDefinition.necessary.length > 0;
    }

    // Otherwise, check if framework provides necessary control
    return framework.acpBinding === 'strong' || framework.acpBinding === 'moderate';
  }

  private evaluateSufficientConditions(
    framework: ControlFramework,
    userClaim?: boolean
  ): boolean {
    // If user explicitly claims sufficient, verify against framework
    if (userClaim !== undefined) {
      return userClaim && framework.controlDefinition.sufficient.length > 0;
    }

    // Otherwise, check if framework provides sufficient control
    return framework.acpBinding === 'strong';
  }

  private calculateScore(steps: {
    stepA: StepAnalysis;
    stepB: StepAnalysis;
    stepC: StepAnalysis;
    stepD: StepAnalysis;
    stepE: StepAnalysis;
    stepF: StepAnalysis;
  }): number {
    return (
      steps.stepA.points +
      steps.stepB.points +
      steps.stepC.points +
      steps.stepD.points +
      steps.stepE.points +
      steps.stepF.points
    );
  }

  private getScoreInterpretation(score: number): string {
    if (score >= 80) return 'Strong (proceed to structuring)';
    if (score >= 60) return 'Probable (close gaps)';
    if (score >= 40) return 'Weak (re-architect)';
    return 'Claim-wrapper (label honestly)';
  }

  private identifyRisks(
    jurisdiction: Jurisdiction,
    params: AnalysisParams,
    assetRule: AssetTypeRule | null,
    controlFramework: ControlFramework | null,
    tokenRules: TokenizationRule | null
  ): IdentifiedRisk[] {
    const identifiedRisks: IdentifiedRisk[] = [];

    // Check each risk factor for applicability
    for (const riskFactor of jurisdiction.riskFactors) {
      const applicable = this.isRiskApplicable(
        riskFactor,
        params,
        assetRule,
        controlFramework,
        tokenRules
      );

      if (applicable) {
        identifiedRisks.push({
          risk: riskFactor,
          applicability: applicable,
          recommendations: riskFactor.mitigation
        });
      }
    }

    return identifiedRisks;
  }

  private isRiskApplicable(
    risk: RiskFactor,
    params: AnalysisParams,
    assetRule: AssetTypeRule | null,
    controlFramework: ControlFramework | null,
    tokenRules: TokenizationRule | null
  ): string {
    // Check if any applicable scenario matches current analysis
    for (const scenario of risk.applicableScenarios) {
      const scenarioLower = scenario.toLowerCase();

      // Check asset type match
      if (scenarioLower.includes(params.assetType.toLowerCase())) {
        return `Risk applies to ${params.assetType} tokenization.`;
      }

      // Check binding path match
      if (scenarioLower.includes(params.bindingPath?.toLowerCase() || '')) {
        return `Risk applies when using ${params.bindingPath}.`;
      }

      // Check regulatory status
      if (tokenRules && scenarioLower.includes(tokenRules.regulatoryStatus)) {
        return `Risk applies due to ${tokenRules.regulatoryStatus} regulatory status.`;
      }

      // Check control framework
      if (controlFramework && scenarioLower.includes(controlFramework.acpBinding)) {
        return `Risk applies with ${controlFramework.acpBinding} ACP binding.`;
      }
    }

    return '';
  }

  private collectCitations(
    jurisdiction: Jurisdiction,
    assetRule: AssetTypeRule | null,
    controlFramework: ControlFramework | null,
    tokenRules: TokenizationRule | null,
    settlementRule: SettlementRule | null
  ): Citation[] {
    const citationIds = new Set<string>();

    // Collect citation IDs
    if (assetRule) assetRule.citations.forEach(id => citationIds.add(id));
    if (controlFramework) controlFramework.citations.forEach(id => citationIds.add(id));
    if (tokenRules) tokenRules.citations.forEach(id => citationIds.add(id));
    if (settlementRule) settlementRule.citations.forEach(id => citationIds.add(id));

    // Look up full citation objects
    return Array.from(citationIds)
      .map(id => jurisdiction.citations.find(c => c.id === id))
      .filter((c): c is Citation => c !== undefined);
  }

  private generateRecommendations(
    score: number,
    acpStep: StepAnalysis,
    risks: IdentifiedRisk[],
    jurisdiction: Jurisdiction,
    params: AnalysisParams
  ): string[] {
    const recommendations: string[] = [];

    // Score-based recommendations
    if (score < 80) {
      recommendations.push('Consider strengthening ACP binding to achieve "Strong" classification.');
    }

    if (score < 60) {
      recommendations.push('Significant gaps identified. Re-architect structure or consider alternative jurisdiction.');
    }

    // ACP binding recommendations
    if (acpStep.status !== 'pass') {
      if (!params.isNecessary) {
        recommendations.push('Ensure token control is necessary for asset transfer (not merely advisory).');
      }
      if (!params.isSufficient) {
        recommendations.push('Ensure token transfer is sufficient to trigger legal transfer (no additional approvals required).');
      }
    }

    // High-severity risk recommendations
    const highRisks = risks.filter(r => r.risk.severity === 'high');
    if (highRisks.length > 0) {
      recommendations.push(`Address ${highRisks.length} high-severity risk(s) before proceeding.`);
    }

    // Deal-breaker risks
    const dealBreakers = risks.filter(r => r.risk.dealBreaker);
    if (dealBreakers.length > 0) {
      recommendations.push(`CRITICAL: ${dealBreakers.length} deal-breaker risk(s) identified. Structure may not be viable.`);
    }

    return recommendations;
  }

  private identifyGaps(
    ...steps: StepAnalysis[]
  ): string[] {
    const gaps: string[] = [];

    for (const step of steps) {
      if (step.status === 'fail') {
        gaps.push(`Step ${step.step} failed: ${step.explanation}`);
      } else if (step.status === 'warning') {
        gaps.push(`Step ${step.step} warning: ${step.explanation}`);
      }
    }

    return gaps;
  }

  // ==========================================================================
  // EXPLANATION GENERATORS
  // ==========================================================================

  private generateThingRecognitionExplanation(
    assetRule: AssetTypeRule,
    jurisdiction: Jurisdiction
  ): string {
    if (assetRule.propertyStatus === 'recognized') {
      return `${assetRule.assetType} is recognized as property under ${jurisdiction.name} law. ` +
             `Classified as: ${assetRule.legalClassification}.`;
    } else if (assetRule.propertyStatus === 'unclear') {
      return `Property status of ${assetRule.assetType} is unclear under ${jurisdiction.name} law. ` +
             `Proceed with caution and seek legal opinion.`;
    } else {
      return `${assetRule.assetType} is not recognized as property under ${jurisdiction.name} law. ` +
             `Tokenization may not confer legal ownership rights.`;
    }
  }

  private generateAssetControlExplanation(
    framework: ControlFramework,
    assetRule: AssetTypeRule
  ): string {
    return `Using ${framework.framework} control mechanism. ` +
           `ACP binding strength: ${framework.acpBinding}. ` +
           `${framework.intermediaryRequired ? 'Intermediary required' : 'No intermediary required'}. ` +
           `Transfer mechanism: ${assetRule.transferMechanism.join(' or ')}.`;
  }

  private generateLegalClassificationExplanation(
    assetRule: AssetTypeRule,
    jurisdiction: Jurisdiction
  ): string {
    return `${assetRule.assetType} classified as ${assetRule.legalClassification} under ${jurisdiction.name} law. ` +
           `Governed by: ${assetRule.governingLaw.join(', ')}. ` +
           `${assetRule.registrationRequired ? 'Registration required for legal effect.' : 'No registration required.'}`;
  }

  private generateACPBindingExplanation(
    framework: ControlFramework,
    necessaryMet: boolean,
    sufficientMet: boolean,
    jurisdiction: Jurisdiction
  ): string {
    if (necessaryMet && sufficientMet) {
      return `Strong ACP binding achieved. Token control is both necessary and sufficient for asset transfer under ${jurisdiction.name} law.`;
    } else if (necessaryMet) {
      return `Token control is necessary but not sufficient. Additional approvals or intermediary action required for transfer.`;
    } else if (sufficientMet) {
      return `Token control is sufficient but not necessary. Alternative transfer mechanisms exist outside token system.`;
    } else {
      return `Weak or no ACP binding. Token represents contractual claim rather than direct asset control.`;
    }
  }

  private generateSettlementExplanation(
    settlementRule: SettlementRule,
    params: AnalysisParams,
    jurisdiction: Jurisdiction
  ): string {
    const timing = settlementRule.finality.timing;
    const atomic = settlementRule.atomicSettlementPossible;

    return `Settlement operates on ${timing} cycle. ` +
           `${atomic ? 'Atomic DvP/PvP is legally possible' : 'Atomic settlement not currently available'}. ` +
           `Legal certainty of finality: ${settlementRule.finality.legalCertainty}. ` +
           `${settlementRule.centralBankRules?.cbdcAvailable ? 'CBDC available for cash leg' : 'CBDC not yet available'}.`;
  }

  private generateEnforceabilityExplanation(
    assetRule: AssetTypeRule,
    framework: ControlFramework,
    tokenRules: TokenizationRule | null,
    hasLegalBasis: boolean,
    jurisdiction: Jurisdiction
  ): string {
    const regulatory = tokenRules ?
      `Regulatory status: ${tokenRules.regulatoryStatus}. ` :
      'No specific tokenization regulations identified. ';

    const basis = hasLegalBasis ?
      'Legal basis provided for structure. ' :
      'No legal basis cited. Recommend obtaining legal opinion. ';

    const precedents = tokenRules?.precedents.length ?
      `${tokenRules.precedents.length} precedent(s) available in ${jurisdiction.name}.` :
      'No precedents identified - novel structure.';

    return regulatory + basis + precedents;
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const legalAnalyzer = new LegalAnalyzer();
