/**
 * Malaysia Legal Framework Overview
 *
 * Malaysia has the world's largest Islamic finance market with a unique common law + Shariah
 * legal system. The Securities Commission Malaysia (SC) has implemented one of the world's
 * most comprehensive digital asset regulatory frameworks through its Digital Asset Guidelines.
 */

import type { JurisdictionOverview } from '../../types';

export const malaysiaOverview: JurisdictionOverview = {
  legalSystemDescription: `Malaysia operates under a dual legal system combining common law (inherited from British colonial period) with Shariah law for Islamic finance and Muslim personal matters. This hybrid "common-shariah" system makes Malaysia unique compared to civil law + Shariah jurisdictions (Qatar, Bahrain) or pure common law systems (UK, Singapore). Federal courts apply common law principles while Shariah courts handle Islamic law matters. For financial services, the Islamic Financial Services Act 2013 (IFSA) provides the world's most comprehensive Islamic banking framework, operating in parallel with conventional financial regulation. The Shariah Advisory Council (SAC) at Bank Negara Malaysia and Securities Commission Malaysia has binding authority on Shariah compliance, making its rulings legally enforceable. Malaysia has positioned itself as a global Islamic finance hub while maintaining openness to conventional finance, creating a sophisticated dual-track regulatory environment ideal for both conventional and Shariah-compliant tokenization.`,

  shariahCompliance: {
    required: false, // Optional - Malaysia allows both conventional and Islamic finance
    authority: 'Shariah Advisory Council (SAC) at Securities Commission Malaysia for capital markets; Shariah Advisory Council at Bank Negara Malaysia for banking/finance',
    keyPrinciples: [
      'Prohibition of riba (interest/usury) - Islamic financial products must be equity-based or use profit-sharing',
      'Prohibition of gharar (excessive uncertainty) - contracts must have clear terms and avoid speculation',
      'Prohibition of maysir (gambling) - investment must involve real economic activity, not pure speculation',
      'Asset-backing requirement - Islamic financial instruments must be backed by tangible assets or usufruct',
      'Risk-sharing principle - profits and losses must be shared equitably between parties',
      'Halal underlying assets - investments must not involve prohibited activities (alcohol, pork, gambling, weapons, tobacco)',
      'Shariah governance - all Islamic financial institutions must have Shariah committees and compliance frameworks'
    ],
    aaoifiAdopted: false // Malaysia has own standards via SAC, not AAOIFI standards
  },

  regulatoryBodies: [
    {
      name: 'Securities Commission Malaysia',
      acronym: 'SC',
      role: 'Primary regulator for capital markets, securities, and digital assets. Issues licenses for Digital Asset Exchanges (DAX), regulates Initial Exchange Offerings (IEOs), oversees securities markets. Published comprehensive SC Digital Asset Guidelines (2020, updated 2023-2024). Maintains separate Shariah Advisory Council for Islamic capital markets.',
      jurisdiction: 'onshore',
      website: 'https://www.sc.com.my',
      contact: 'aduan@seccom.com.my'
    },
    {
      name: 'Bank Negara Malaysia',
      acronym: 'BNM',
      role: 'Central bank responsible for monetary policy, banking supervision, payment systems oversight, and Islamic finance regulation. Operates RENTAS (RTGS system), oversees FPX and Interbank GIRO. Maintains Shariah Advisory Council for Islamic banking. Issues guidelines on e-money and payment tokens.',
      jurisdiction: 'onshore',
      website: 'https://www.bnm.gov.my',
      contact: 'bnmtelelink@bnm.gov.my'
    },
    {
      name: 'Bursa Malaysia',
      acronym: 'Bursa',
      role: 'National stock exchange operating securities and derivatives markets. Bursa Malaysia Depository (BMD) subsidiary operates Central Depository System (CDS) for scripless securities settlement. T+2 settlement cycle. Exploring blockchain integration for securities clearing.',
      jurisdiction: 'onshore',
      website: 'https://www.bursamalaysia.com'
    },
    {
      name: 'Labuan Financial Services Authority',
      acronym: 'Labuan FSA',
      role: 'Regulates Labuan International Business and Financial Centre (IBFC), an offshore financial center with separate licensing regime. Provides licenses for digital financial services including digital asset exchanges, custody, and tokenization platforms. Low-tax jurisdiction for international financial services.',
      jurisdiction: 'offshore',
      website: 'https://www.labuanibfc.com'
    },
    {
      name: 'Suruhanjaya Syarikat Malaysia (Companies Commission of Malaysia)',
      acronym: 'SSM',
      role: 'Corporate registry responsible for company incorporation, business registration, and enforcement of Companies Act 2016. Maintains registers of companies and securities. Permits electronic records and filings.',
      jurisdiction: 'onshore',
      website: 'https://www.ssm.com.my'
    }
  ],

  keyLegislation: [
    'Securities Commission Malaysia Act 1993 - Establishes SC and its regulatory powers',
    'Capital Markets and Services Act 2007 (CMSA 2007) - Primary securities legislation; digital assets prescribed as securities under Digital Currency and Digital Token (Prescription) Order 2019 and Amendment Order 2025',
    'SC Digital Asset Guidelines 2020 (updated August 2024) - Comprehensive framework for digital asset classification, DAX licensing, IEO regulation, and investor protection',
    'Islamic Financial Services Act 2013 (IFSA 2013) - World\'s most comprehensive Islamic banking law; governs Islamic financial institutions, takaful, and Shariah governance',
    'Financial Services Act 2013 (FSA 2013) - Regulates conventional banking, insurance, and financial institutions',
    'Companies Act 2016 - Corporate governance including share registers, electronic records, and shareholder rights',
    'Payment Systems Act 2003 - Governs designated payment systems, settlement finality, and e-money',
    'Electronic Commerce Act 2006 - Provides legal recognition for electronic signatures, contracts, and records',
    'Digital Signature Act 1997 - Framework for certified digital signatures and certification authorities',
    'National Land Code 1965 - Governs land registration using Torrens system; provides indefeasible title',
    'Labuan Financial Services and Securities Act 2010 - Offshore financial services regulation including digital assets',
    'Central Bank of Malaysia Act 2009 - Establishes BNM\'s powers including payment system oversight and Islamic finance supervision'
  ],

  financialCenter: {
    name: 'Labuan International Business and Financial Centre (IBFC)',
    jurisdiction: 'offshore',
    specialRules: 'Separate licensing regime under Labuan FSA with streamlined approvals and low fees (USD 1,500 - 30,000 depending on license type). Permits digital asset exchanges, custody services, and tokenization platforms. Tax advantages: 3% corporate tax or RM20,000 flat tax. Strategic location in ASEAN for cross-border Islamic and conventional finance.',
    separateLegalFramework: true
  },

  tokenizationReadiness: {
    level: 'advanced',

    strengths: [
      'SC Digital Asset Guidelines (2020, updated Aug 2024) - one of world\'s most comprehensive digital asset frameworks',
      '6 registered Digital Asset Exchanges (DAX): Luno Malaysia, SINEGY, Tokenize Technology, MX Global, HATA Digital, and others',
      'RM13.9 billion DAX trading volume in 2024 (2.6x increase from 2023) - massive market growth',
      'Clear 4-category classification: Digital Securities, Digital Currencies, Utility Tokens, NFTs',
      'Digital Currency and Digital Token (Prescription) Order 2019 - prescribes digital assets as securities',
      'Amendment Order 2025 (effective Jan 9, 2025) - updated digital token definition with exclusions',
      'Initial Exchange Offering (IEO) framework - regulated token fundraising via approved DAX operators',
      'World\'s largest Islamic finance market (~USD 1 trillion) - massive sukuk tokenization potential',
      'Islamic Financial Services Act 2013 - comprehensive framework enables Shariah-compliant tokenization',
      'Shariah Advisory Council (SAC) rulings legally binding - clarity for Islamic digital assets',
      'Electronic Trade Documents Act 2006 - recognizes electronic signatures and records',
      'Bursa Malaysia Depository CDS system - established scripless securities infrastructure',
      'Companies Act 2016 permits electronic share registers - enables tokenized equity',
      'RENTAS real-time gross settlement system for high-value transfers (minimum RM10,000)',
      'Payment Systems Act 2003 provides settlement finality protections',
      'Labuan IBFC offshore regime - separate digital asset licensing with low fees and tax benefits',
      'Common law system provides judicial flexibility similar to UK but with Shariah overlay',
      'National Land Code Torrens system - indefeasible title provides strong property rights',
      'Government support for digital economy and fintech innovation'
    ],

    gaps: [
      'No Central Bank Digital Currency (CBDC) yet - BNM in research phase only',
      'Tokenized deposits not explicitly permitted - regulatory clarity needed',
      'Direct tokenization of land title unclear - Land Registry modernization pending',
      'Limited legal precedent on smart contract enforceability',
      'Shariah compliance requirements add complexity for cross-border tokenization',
      'Potential conflict between Shariah and common law principles in certain tokenization structures',
      'DAX operators face strict capital requirements (RM5 million minimum)',
      'IEO approvals discretionary - no guaranteed approval even if criteria met',
      'Limited institutional custody options for digital assets',
      'Tax treatment of certain tokenization structures unclear',
      'Interoperability between conventional and Islamic tokenization platforms not established',
      'Cross-border tokenization governance - jurisdictional conflicts possible',
      'No comprehensive insolvency framework for digital assets yet',
      'Environmental concerns over proof-of-work cryptocurrencies',
      'Data localization requirements may complicate DLT implementations'
    ]
  }
};
