/**
 * UK Settlement and Payment System Rules
 *
 * Settlement finality, payment systems, CBDC status, and
 * DvP mechanisms for tokenized asset transactions.
 */

import type { SettlementRule } from '../../types';

export const ukSettlementRules: SettlementRule[] = [
  {
    settlementType: 'DvP (Delivery versus Payment)',
    legalBasis: [
      'Settlement Finality Regulations 1999 (SI 1999/2979) - implements EU Settlement Finality Directive',
      'Financial Markets Law Committee guidance on settlement finality',
      'Bank of England RTGS settlement rules',
      'CREST Rules for securities settlement',
      'Common law contract and payment principles'
    ],
    atomicSettlementPossible: true,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'Digital pound (CBDC) in research and design phase; no launch date confirmed',
        'Bank of England and HM Treasury issued consultation paper in 2023',
        'Technology design ongoing (platform model vs account model)',
        'Policy questions unresolved (privacy, programmability, offline functionality)',
        'Tokenized commercial bank deposits not yet permitted for settlement',
        'Only licensed banks can issue deposits; tokenization requires regulatory approval',
        'Wholesale tokenized deposits under exploration by BoE (Project Rosalind with BIS)',
        'Settlement in central bank money currently via RTGS (not tokenized)'
      ]
    },
    finality: {
      timing: 'T+0 for RTGS/CHAPS; T+2 for most securities (CREST)',
      legalCertainty: 'high',
      revocabilityRules: [
        'Settlement Finality Regulations 1999 protect designated systems',
        'Transfer orders in designated systems irrevocable once processed (SFR reg 14)',
        'Insolvency proceedings cannot reverse finalized settlements (SFR reg 16)',
        'Zero-hour rule protection: settlements effective at actual time, not backdated to insolvency start',
        'Collateral security arrangements protected (SFR Part IV)',
        'Common law finality depends on contract terms and payment method (generally irrevocable for cash transfers)',
        'Smart contract finality: on-chain confirmation = settlement finality (if ACP-bound)'
      ],
      insolvencyProtection: true
    },
    paymentSystemOversight: {
      regulator: 'Bank of England (Payment Systems Regulator for competitive issues; FCA for conduct)',
      requirements: [
        'Recognized payment systems subject to BoE oversight',
        'RTGS (Real-Time Gross Settlement) - BoE operated; central bank money settlement',
        'CHAPS - high-value sterling payment system; RTGS settled',
        'Faster Payments - retail payment system; near-instant settlement',
        'CREST - securities settlement system (Euroclear UK & Ireland); BoE oversight',
        'Designated systems under SFR 1999 receive finality protections',
        'Operational resilience requirements (business continuity, cybersecurity)',
        'AML/CTF controls and sanctions screening',
        'Participation criteria (membership, capital, technical standards)'
      ],
      internationalStandards: true
    },
    citations: [
      'settlement-finality-regs-1999',
      'boe-rtgs-rules',
      'crest-rules',
      'digital-pound-consultation-2023',
      'fmlc-settlement-guidance'
    ]
  },

  {
    settlementType: 'PvP (Payment versus Payment)',
    legalBasis: [
      'Settlement Finality Regulations 1999',
      'CLS (Continuous Linked Settlement) system rules',
      'Bank of England oversight of FX settlement',
      'Common law principles of conditional payment'
    ],
    atomicSettlementPossible: true,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'Cross-currency settlement primarily via CLS system (multi-currency netting)',
        'CLS settles in central bank money (not tokenized)',
        'Digital pound not available for cross-border settlement',
        'Bilateral FX settlement via correspondent banking',
        'Atomic PvP via smart contracts theoretically possible but no operational infrastructure',
        'Cross-border CBDC interoperability under research (BIS Project mBridge, etc.)'
      ]
    },
    finality: {
      timing: 'T+0 for CLS; T+1 or T+2 for bilateral FX settlement',
      legalCertainty: 'high',
      revocabilityRules: [
        'CLS is designated system under SFR 1999 - finality protections apply',
        'CLS netting and settlement irrevocable once processed',
        'Bilateral FX settlement finality depends on contract terms',
        'Smart contract PvP: on-chain atomic swap = simultaneous finality',
        'Insolvency protection for CLS settlements (SFR reg 16)'
      ],
      insolvencyProtection: true
    },
    paymentSystemOversight: {
      regulator: 'Bank of England (CLS Bank oversight cooperative with Federal Reserve)',
      requirements: [
        'CLS Bank subject to cooperative oversight by central banks',
        'Participants must be settlement members (banks with central bank accounts)',
        'Robust risk management and operational resilience',
        'AML/CTF and sanctions compliance',
        'Real-time monitoring and liquidity management'
      ],
      internationalStandards: true
    },
    citations: [
      'settlement-finality-regs-1999',
      'cls-system-rules',
      'boe-fx-oversight'
    ]
  },

  {
    settlementType: 'FoP (Free of Payment)',
    legalBasis: [
      'CREST Rules for securities transfers',
      'Settlement Finality Regulations 1999 (for designated systems)',
      'Common law property transfer principles',
      'Electronic Trade Documents Act 2023 (for document transfers)'
    ],
    atomicSettlementPossible: true,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'FoP settlement does not involve payment leg',
        'Asset transfer only (gift, reorganization, transfer between own accounts)',
        'No CBDC implications (no payment involved)',
        'Tokenized asset transfer via smart contract = on-chain FoP'
      ]
    },
    finality: {
      timing: 'T+0 for on-chain transfers; T+2 for CREST securities transfers',
      legalCertainty: 'high',
      revocabilityRules: [
        'CREST transfers irrevocable once settled (CREST Rules)',
        'On-chain cryptoasset transfers irrevocable once confirmed (cryptographic finality)',
        'ETDA 2023 electronic document transfers irrevocable when control transferred',
        'Common law: completed gift not revocable (unless fraud/mistake)',
        'Insolvency: FoP transfers may be voidable if preferential or undervalue (Insolvency Act 1986)'
      ],
      insolvencyProtection: false
    },
    paymentSystemOversight: {
      regulator: 'Bank of England (CREST oversight); no oversight for simple asset transfers',
      requirements: [
        'CREST participants subject to membership criteria',
        'On-chain transfers: no regulatory oversight (unless asset is regulated)',
        'AML/CTF may apply to high-value transfers',
        'Record-keeping for tax purposes'
      ],
      internationalStandards: false
    },
    citations: [
      'crest-rules',
      'settlement-finality-regs-1999',
      'etda-2023'
    ]
  },

  {
    settlementType: 'Atomic DvP (Smart Contract)',
    legalBasis: [
      'UKJT Legal Statement on Smart Contracts (2021) - smart contracts legally binding',
      'Electronic Trade Documents Act 2023 - control-based transfer',
      'Digital Securities Sandbox regulations (for tokenized securities)',
      'Common law contract principles',
      'Settlement Finality Regulations 1999 (if designated system)'
    ],
    atomicSettlementPossible: true,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'True atomic DvP requires both asset and payment tokenized on same ledger',
        'Digital pound not yet available for settlement leg',
        'Tokenized deposits not yet permitted (under exploration)',
        'Current workarounds: stablecoins (if regulated), off-chain payment confirmation',
        'Hybrid models: on-chain asset + off-chain payment (not truly atomic)',
        'Bank of England exploring Project Rosalind (wholesale tokenized deposits for DvP)',
        'Digital Securities Sandbox allows experimentation with DvP mechanisms'
      ]
    },
    finality: {
      timing: 'T+0 (instant settlement upon smart contract execution)',
      legalCertainty: 'medium',
      revocabilityRules: [
        'UKJT statement confirms smart contracts legally enforceable',
        'On-chain execution = irrevocable (cryptographic finality)',
        'Legal finality depends on underlying asset law (securities require registration update)',
        'Smart contract bugs or exploits may allow clawback (unclear legal treatment)',
        'Fraud or mistake may permit equitable rescission (common law)',
        'Designated system status (SFR 1999) would provide insolvency protection',
        'Code is not always law - courts can intervene if unconscionable or illegal'
      ],
      insolvencyProtection: false
    },
    paymentSystemOversight: {
      regulator: 'FCA (if involves regulated assets); Bank of England (if designated FMI)',
      requirements: [
        'Digital Securities Sandbox participants subject to FCA oversight',
        'Smart contract code audit and security testing',
        'Operational resilience (blockchain infrastructure)',
        'AML/CTF controls for participants',
        'Governance and dispute resolution mechanisms',
        'Clear settlement finality rules in platform rulebook',
        'Insolvency and default procedures'
      ],
      internationalStandards: false
    },
    citations: [
      'ukjt-smart-contracts-2021',
      'digital-securities-sandbox-2024',
      'settlement-finality-regs-1999',
      'etda-2023'
    ]
  },

  {
    settlementType: 'Tokenized Wholesale Deposit Settlement (Experimental)',
    legalBasis: [
      'Bank of England Project Rosalind (with BIS Innovation Hub)',
      'Financial Services and Markets Act 2023 (sandbox provisions)',
      'Settlement Finality Regulations 1999 (if designated)',
      'Banking Act 2009 (deposit-taking regulated activity)'
    ],
    atomicSettlementPossible: true,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'Tokenized deposits EXPERIMENTAL only (Project Rosalind)',
        'Only licensed banks can issue deposits (Banking Act 2009)',
        'Tokenization requires regulatory approval (not yet granted for commercial use)',
        'Bank of England exploring API-based programmable payments',
        'Wholesale only (institutional counterparties, not retail)',
        'Retail tokenized deposits face additional consumer protection hurdles',
        'Interoperability between banks\' tokenized deposits unclear',
        'Regulatory treatment of tokenized deposits vs traditional deposits unresolved',
        'No deposit insurance clarity for tokenized formats',
        'Cross-border tokenized deposit transfers face AML/sanctions challenges'
      ]
    },
    finality: {
      timing: 'T+0 (instant if atomic smart contract)',
      legalCertainty: 'low',
      revocabilityRules: [
        'Legal finality of tokenized deposit transfer uncertain',
        'Bank deposit is debt claim (thing in action) - assignment rules may apply',
        'Notification to bank may be required for assignment (legal uncertainty)',
        'Smart contract execution may not satisfy all legal transfer requirements',
        'Insolvency protection unclear (SFR 1999 may not apply to non-designated systems)',
        'Regulatory guidance needed on finality treatment'
      ],
      insolvencyProtection: false
    },
    paymentSystemOversight: {
      regulator: 'Bank of England and Prudential Regulation Authority (for deposit-taking banks)',
      requirements: [
        'Bank license required to issue deposits',
        'Prudential capital and liquidity requirements',
        'Operational resilience for tokenized infrastructure',
        'AML/CTF and sanctions screening',
        'Consumer protection (if retail deposits)',
        'Deposit insurance scheme participation (if applicable)',
        'Regulatory reporting on tokenized deposit activities',
        'Clear contractual terms for tokenized deposit holders'
      ],
      internationalStandards: false
    },
    citations: [
      'project-rosalind-boe-bis',
      'fsma-2023',
      'banking-act-2009',
      'settlement-finality-regs-1999'
    ]
  }
];
