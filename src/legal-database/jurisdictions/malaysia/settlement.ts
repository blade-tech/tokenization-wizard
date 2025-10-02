/**
 * Malaysia Settlement and Payment System Rules
 *
 * Comprehensive framework covering RENTAS (RTGS), retail payment systems (FPX, IBG, DuitNow),
 * settlement finality, and Shariah-compliant settlement mechanisms.
 */

import type { SettlementRule } from '../../types';

export const malaysiaSettlementRules: SettlementRule[] = [
  {
    settlementType: 'Real-Time Gross Settlement (RTGS)',
    legalBasis: [
      'Payment Systems Act 2003',
      'Central Bank of Malaysia Act 2009',
      'RENTAS Operating Rules and Procedures',
      'BNM Payment Systems Policy'
    ],
    atomicSettlementPossible: true,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'No CBDC available yet - BNM in research and pilot phase',
        'Tokenized deposits not explicitly permitted - regulatory clarity pending',
        'RENTAS operates with commercial bank settlement accounts at BNM',
        'Minimum transaction size RM10,000 for RENTAS',
        'Operating hours: 9:00 AM - 5:00 PM weekdays (extended hours for specific operations)',
        'Cross-border RENTAS supports MYR, USD, and RMB settlement',
        'Foreign exchange controls restrict ringgit use for cross-border crypto purchases'
      ]
    },
    finality: {
      timing: 'T+0 (real-time gross settlement)',
      legalCertainty: 'high',
      revocabilityRules: [
        'Settlement is final and irrevocable upon crediting receiving bank account',
        'Payment Systems Act 2003 Section 16 provides finality protections',
        'Transfer orders entered into designated payment system cannot be revoked after entry',
        'Insolvency of participant does not affect finality of settled transactions',
        'Zero-hour rule (retroactive insolvency) does not apply to settled RENTAS transactions'
      ],
      insolvencyProtection: true
    },
    paymentSystemOversight: {
      regulator: 'Bank Negara Malaysia',
      requirements: [
        'Compliance with Payment Systems Act 2003',
        'BNM approval required to operate designated payment system',
        'Risk management framework including liquidity, credit, and operational risk controls',
        'Business continuity and disaster recovery plans',
        'Cybersecurity standards and incident reporting',
        'Participant eligibility and access criteria',
        'Settlement account requirements at BNM',
        'Collateral management for intraday liquidity (if applicable)'
      ],
      internationalStandards: true // CPMI-IOSCO Principles for Financial Market Infrastructures
    },
    shariahSettlement: {
      permittedStructures: [
        'Wakalah (agency) - BNM acts as agent for settlement',
        'Qard hassan (benevolent loan) - intraday liquidity without interest',
        'Wadiah (safekeeping) - settlement account as amanah (trust)',
        'Immediate settlement (T+0) avoids bay al-dayn (debt trading) concerns'
      ],
      prohibitions: [
        'No riba (interest) on overnight balances - Islamic banks use wadiah yad dhamanah',
        'No interest on intraday overdrafts - qard hassan or collateral-based liquidity',
        'Settlement must involve actual asset/fund transfer, not synthetic positions'
      ],
      alternatives: [
        'RENTAS Shariah - separate settlement track for Islamic financial institutions',
        'Shariah-compliant liquidity facilities using commodity murabahah (tawarruq)',
        'Bursa Suq al-Sila for Shariah-compliant interbank liquidity'
      ]
    },
    citations: [
      'payment-systems-act-2003',
      'central-bank-act-2009',
      'rentas-operating-rules',
      'bnm-payment-systems-policy'
    ]
  },

  {
    settlementType: 'Retail Payment Systems (FPX, IBG, DuitNow)',
    legalBasis: [
      'Payment Systems Act 2003',
      'Electronic Money Issuance Policy (BNM 2022)',
      'FPX Operating Rules',
      'IBG Operating Rules',
      'DuitNow Operating Rules',
      'Financial Services Act 2013 / Islamic Financial Services Act 2013'
    ],
    atomicSettlementPossible: false,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'Retail payment systems settle via deferred net settlement (DNS)',
        'FPX (Financial Process Exchange) - online banking and e-commerce payments',
        'IBG (Interbank GIRO) - bulk payment clearing (T+1 settlement)',
        'DuitNow - instant payments and QR code transfers (real-time but not RTGS)',
        'E-money issuance requires BNM approval under Electronic Money Policy',
        'Payment service providers must be licensed under FSA 2013 or IFSA 2013',
        'Transaction limits apply to retail systems (e.g., DuitNow RM50,000 limit)'
      ]
    },
    finality: {
      timing: 'T+0 for DuitNow (instant); T+1 for IBG; T+0 for FPX (subject to bank processing)',
      legalCertainty: 'high',
      revocabilityRules: [
        'Payment Systems Act 2003 Section 16 finality applies once settlement completed',
        'DuitNow transactions irrevocable upon beneficiary credit confirmation',
        'IBG settlement final upon completion of clearing cycle (T+1)',
        'FPX transactions final upon merchant account credit',
        'Fraud or error may justify reversal but requires legal process or participant agreement'
      ],
      insolvencyProtection: true
    },
    paymentSystemOversight: {
      regulator: 'Bank Negara Malaysia',
      requirements: [
        'Designation under Payment Systems Act 2003 for systemic payment systems',
        'Operator licensing and ongoing oversight by BNM',
        'Participant access rules and eligibility criteria',
        'Settlement risk management and netting arrangements',
        'Operational resilience and business continuity',
        'Cybersecurity and fraud prevention measures',
        'Consumer protection standards',
        'Transaction monitoring and reporting'
      ],
      internationalStandards: true
    },
    shariahSettlement: {
      permittedStructures: [
        'Wakalah (agency) - payment intermediary acts as agent',
        'Qard (loan) - Islamic banks can provide Qard Hassan for settlement',
        'Wadiah yad dhamanah (guaranteed safekeeping) for current accounts',
        'Immediate transfer preferred to avoid bay al-dayn issues'
      ],
      prohibitions: [
        'No interest charges on late payments or overdrafts (use ta\'widh/compensation for actual costs only)',
        'No riba-based fees',
        'Settlement cannot involve haram transactions (alcohol, pork, gambling, etc.)'
      ],
      alternatives: [
        'Islamic payment systems using wakalah bil ujrah (agency with fee)',
        'DuitNow Islamic - Shariah-compliant instant payment variant',
        'BNM Shariah-compliant liquidity facilities for Islamic banks'
      ]
    },
    citations: [
      'payment-systems-act-2003',
      'bnm-emoney-policy-2022',
      'fpx-operating-rules',
      'ibg-operating-rules',
      'duitnow-operating-rules',
      'fsa-2013',
      'ifsa-2013'
    ]
  },

  {
    settlementType: 'Securities Settlement (CDS)',
    legalBasis: [
      'Capital Markets and Services Act 2007 Part VI',
      'CDS Rules and Regulations',
      'Bursa Malaysia Depository Operating Rules',
      'Securities Industry (Central Depositories) (Amendment) Regulations 2015'
    ],
    atomicSettlementPossible: false,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'Securities settlement separate from cash settlement',
        'Delivery versus Payment (DvP) Model 1 - gross settlement of securities and cash',
        'Cash leg settles via designated bank accounts',
        'No CBDC or tokenized deposits available for cash settlement yet',
        'Securities leg settles via book entry in CDS',
        'T+2 settlement cycle for equities',
        'Sukuk (Islamic bonds) settle via CDS with same T+2 timeline'
      ]
    },
    finality: {
      timing: 'T+2 for equities; T+0 or T+1 for money market instruments; T+2 for sukuk',
      legalCertainty: 'high',
      revocabilityRules: [
        'CMSA 2007 Section 39 - securities transfer final upon registration in CDS',
        'Payment Systems Act 2003 finality protections apply to cash settlement',
        'No retroactive unwinding upon participant insolvency if settlement completed',
        'CDS rules permit cancellation only by mutual consent before settlement',
        'Settlement finality achieved when both securities and cash legs completed'
      ],
      insolvencyProtection: true
    },
    paymentSystemOversight: {
      regulator: 'Securities Commission Malaysia and Bank Negara Malaysia (cash settlement)',
      requirements: [
        'Bursa Malaysia Depository licensed as central depository',
        'Authorized Depository Agents (brokers, custodians) licensed by SC',
        'Segregation of client securities from depository agent securities',
        'Fidelity insurance covering client assets',
        'Daily reconciliation of securities and cash balances',
        'Risk management including settlement fails and default procedures',
        'Business continuity and disaster recovery',
        'Compliance with IOSCO principles for securities settlement systems'
      ],
      internationalStandards: true
    },
    shariahSettlement: {
      permittedStructures: [
        'Sukuk settlement using same CDS infrastructure',
        'Islamic securities accounts segregated if requested',
        'Wadiah (safekeeping) principle for securities custody',
        'Wakalah (agency) for settlement services',
        'Shariah-compliant equities settlement identical to conventional (T+2 DvP)'
      ],
      prohibitions: [
        'No riba-based settlement fees (actual cost recovery only)',
        'Short-selling of Shariah-compliant securities restricted',
        'Securities lending/borrowing must use wakalah or bay al-dayn structures'
      ],
      alternatives: [
        'Bursa Suq Al-Sila for Shariah-compliant commodity settlement',
        'Islamic repo (bai al-inah) structures for liquidity management',
        'Murabahah financing for settlement fails (cost-plus, no interest)'
      ]
    },
    citations: [
      'cmsa-2007-part-vi',
      'cds-rules',
      'bursa-operating-rules',
      'payment-systems-act-2003'
    ]
  },

  {
    settlementType: 'Digital Asset Settlement (DAX Platforms)',
    legalBasis: [
      'SC Digital Asset Guidelines 2020 (updated 2024)',
      'Capital Markets and Services Act 2007',
      'Payment Systems Act 2003 (for cash settlement)',
      'Anti-Money Laundering, Anti-Terrorism Financing Act 2001'
    ],
    atomicSettlementPossible: true,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'Digital asset settlement on-chain or via DAX internal ledgers',
        'Cash settlement via conventional banking (RENTAS, FPX, bank transfer)',
        'Atomic swaps possible for on-chain DvP but not yet integrated with fiat settlement',
        'No tokenized ringgit deposits available - cash leg remains off-chain',
        'DAX operators must segregate client digital assets in separate wallets',
        'Smart contract settlement subject to SC approval'
      ]
    },
    finality: {
      timing: 'T+0 for on-chain settlement; T+0 to T+2 for cash settlement depending on payment method',
      legalCertainty: 'medium',
      revocabilityRules: [
        'On-chain settlement generally final upon blockchain confirmation',
        'DAX internal ledger settlement final per DAX operating rules',
        'Cash settlement finality governed by applicable payment system rules',
        'Smart contract execution may be irreversible - code is law principle',
        'DAX operator may reverse fraudulent transactions per SC Guidelines',
        'Insolvency protection unclear for digital assets - evolving area'
      ],
      insolvencyProtection: false
    },
    paymentSystemOversight: {
      regulator: 'Securities Commission Malaysia',
      requirements: [
        'DAX operator recognized market status under CMSA 2007',
        'Compliance with SC Digital Asset Guidelines',
        'Hot and cold wallet segregation',
        'Multi-signature security for large transactions',
        'AML/CFT transaction monitoring',
        'Settlement risk management and default procedures',
        'Incident reporting and business continuity',
        'Annual audits of custody and settlement systems'
      ],
      internationalStandards: false // Evolving area, SC developing standards
    },
    shariahSettlement: {
      permittedStructures: [
        'Immediate on-chain settlement (T+0) preferred - avoids bay al-dayn',
        'Wakalah (agency) structure for DAX operator settlement services',
        'Musharakah (partnership) for fractional asset tokenization',
        'Mudarabah (profit-sharing) for Islamic digital asset funds',
        'Asset-backed tokens with clear Shariah compliance'
      ],
      prohibitions: [
        'No riba (interest) on unsettled positions',
        'No settlement involving haram digital assets',
        'Margin trading and leverage restricted for Islamic accounts',
        'Synthetic derivatives without asset-backing prohibited',
        'Excessive gharar (uncertainty) in settlement terms'
      ],
      alternatives: [
        'Shariah-compliant digital asset platforms with SAC approval',
        'Islamic smart contracts with Shariah committee oversight',
        'Commodity-backed settlement using Bursa Suq al-Sila',
        'Gold-backed stablecoins following bay al-sarf (immediate exchange) rules'
      ]
    },
    citations: [
      'sc-digital-asset-guidelines-2024',
      'cmsa-2007',
      'payment-systems-act-2003',
      'amla-2001'
    ]
  },

  {
    settlementType: 'Cross-Border Settlement',
    legalBasis: [
      'Foreign Exchange Administration Rules (BNM)',
      'Payment Systems Act 2003',
      'Cross-Border Payment Arrangements (BNM oversight)',
      'SWIFT operating rules (for international transfers)'
    ],
    atomicSettlementPossible: false,
    centralBankRules: {
      cbdcAvailable: false,
      cbdcStatus: 'research',
      tokenizedDepositsPermitted: false,
      restrictions: [
        'Foreign exchange controls on ringgit transactions',
        'Ringgit cannot be used for cross-border cryptocurrency purchases',
        'RENTAS supports cross-border settlement in MYR, USD, and RMB',
        'Correspondent banking required for non-RENTAS currencies',
        'BNM approval may be required for large or unusual cross-border transactions',
        'Islamic cross-border settlement subject to Shariah compliance in both jurisdictions'
      ]
    },
    finality: {
      timing: 'T+0 to T+2 depending on currency and payment system (SWIFT typically T+1)',
      legalCertainty: 'medium',
      revocabilityRules: [
        'Finality governed by applicable payment system law in each jurisdiction',
        'SWIFT transfers irrevocable upon crediting beneficiary bank',
        'Correspondent banking introduces multiple settlement points',
        'Conflict of laws issues for cross-border disputes',
        'Payment Systems Act 2003 finality applies only to domestic leg'
      ],
      insolvencyProtection: true // For domestic leg only
    },
    paymentSystemOversight: {
      regulator: 'Bank Negara Malaysia (domestic oversight); foreign regulators for cross-border systems',
      requirements: [
        'BNM approval for participation in cross-border payment arrangements',
        'Compliance with foreign exchange administration rules',
        'AML/CFT controls for cross-border transactions',
        'SWIFT messaging standards and security protocols',
        'Correspondent banking agreements and settlement accounts',
        'Currency risk management for FX settlement'
      ],
      internationalStandards: true // CPMI standards for cross-border payments
    },
    shariahSettlement: {
      permittedStructures: [
        'Wakalah (agency) for cross-border remittances',
        'Qard (loan) for intraday settlement between Islamic banks',
        'Murabahah (cost-plus) for trade finance settlement',
        'Bay al-sarf (currency exchange) for FX transactions - immediate settlement required',
        'Sukuk settlement cross-border via SWIFT and correspondent banks'
      ],
      prohibitions: [
        'No riba (interest) on FX transactions - immediate exchange required',
        'Speculative currency trading (use bay al-sarf rules)',
        'Settlement of haram transactions',
        'Excessive gharar in cross-border terms'
      ],
      alternatives: [
        'Islamic correspondent banking network (ICBN)',
        'Shariah-compliant cross-border payment platforms',
        'BNM bilateral arrangements with other Islamic central banks',
        'Gold-backed settlement for Islamic cross-border transactions'
      ]
    },
    citations: [
      'bnm-fx-admin-rules',
      'payment-systems-act-2003',
      'swift-operating-rules',
      'ifsa-2013'
    ]
  }
];
