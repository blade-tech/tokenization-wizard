/**
 * Malaysia Tokenization Rules and Regulations
 *
 * Comprehensive framework for tokenization including Digital Asset Exchange (DAX) licensing,
 * Initial Exchange Offerings (IEOs), and Shariah-compliant tokenization structures.
 */

import type { TokenizationRule } from '../../types';

export const malaysiaTokenizationRules: TokenizationRule[] = [
  {
    applicableAssets: ['cryptoassets', 'securities'],
    regulatoryStatus: 'permitted',
    requiredLicenses: [
      {
        name: 'Digital Asset Exchange (DAX) License',
        issuingAuthority: 'Securities Commission Malaysia',
        requirements: [
          'Recognized market operator status under CMSA 2007',
          'Minimum paid-up capital of RM5 million',
          'Fit and proper requirements for directors, officers, and key personnel',
          'Robust operational, technical, and risk management systems',
          'Cybersecurity and information security framework',
          'Segregation of client assets in separate accounts',
          'Compliance with AML/CFT requirements',
          'Fidelity insurance covering client assets',
          'Disaster recovery and business continuity plans',
          'Internal controls and audit functions'
        ],
        timeline: '6-12 months (application review and approval process)',
        cost: 'Minimum RM5 million paid-up capital; application fees undisclosed',
        ongoingCompliance: [
          'Annual financial audits and regulatory reporting',
          'Quarterly transaction volume and user statistics reporting',
          'Maintenance of minimum capital requirements',
          'Continuous monitoring of AML/CFT compliance',
          'Regular security audits and penetration testing',
          'Client asset segregation and reconciliation',
          'Incident reporting within 24 hours of material events'
        ]
      },
      {
        name: 'Capital Markets Services License (if providing custody/dealing)',
        issuingAuthority: 'Securities Commission Malaysia',
        requirements: [
          'Separate license if providing custody or dealing services beyond DAX operations',
          'Minimum capital requirements (vary by license type)',
          'Professional Indemnity Insurance',
          'Fit and proper criteria for representatives',
          'Compliance with SC Guidelines on Safeguarding Client Assets'
        ],
        timeline: '3-6 months',
        cost: 'RM100,000 - RM500,000 depending on license scope'
      }
    ],
    technicalRequirements: [
      'Hot and cold wallet segregation for client digital assets',
      'Multi-signature wallets for enhanced security',
      'Know Your Customer (KYC) and Customer Due Diligence (CDD) systems',
      'Transaction monitoring for suspicious activities',
      'Blockchain analytics and forensics capabilities',
      'API security and rate limiting',
      'Encryption of sensitive data (in transit and at rest)',
      'Regular security assessments and vulnerability testing',
      'Audit trail and immutable transaction records',
      'System uptime and performance monitoring (99.5% minimum)',
      'Scalability to handle peak transaction volumes',
      'Interoperability with approved payment systems'
    ],
    shariahRequirements: [
      'Shariah Advisory Council (SAC) approval for Islamic digital assets',
      'Shariah compliance certification from recognized Shariah scholars',
      'Halal underlying assets - no financing of prohibited activities',
      'Asset-backing requirement - Islamic tokens must represent ownership in tangible assets',
      'No riba (interest) - profit-sharing or equity structures only',
      'No gharar (excessive uncertainty) - clear token rights and obligations',
      'No maysir (gambling) - tokens must have intrinsic value',
      'Shariah governance framework including Shariah committee',
      'Annual Shariah audit and compliance review',
      'Segregation of Islamic and conventional digital asset pools'
    ],
    limitations: [
      'Only 6 registered DAX operators as of 2024 (Luno, SINEGY, Tokenize, MX Global, HATA Digital, others)',
      'Digital securities can only be offered through SC-registered DAX platforms',
      'Peer-to-peer trading of digital securities prohibited (must use DAX)',
      'Retail investor limits may apply (SC discretion)',
      'Foreign exchange controls - ringgit cannot be used for cross-border crypto purchases',
      'Marketing restrictions - no cold-calling or unsolicited offers',
      'Prohibition on margin trading and short-selling for retail investors',
      'Stablecoins pegged to ringgit require BNM approval',
      'Tokens must not confer governance rights over DAX operator',
      'DAX operators cannot list their own proprietary tokens without SC approval'
    ],
    sandbox: {
      available: true,
      authority: 'Securities Commission Malaysia',
      process: 'Application through SC Fintech Office. Applicants submit proposal including business model, technology description, risk assessment, and consumer protection measures. SC reviews and may grant sandbox admission with conditions and monitoring requirements. Sandbox period typically 6-12 months with possible extension.',
      precedents: [
        'HelloGold - gold-backed cryptocurrency platform (2017)',
        'Tokenize Technology - digital asset exchange and tokenization platform',
        'Luno Malaysia - cryptocurrency exchange (graduated to full DAX license)',
        'SINEGY - digital asset exchange with focus on security tokens'
      ]
    },
    precedents: [
      {
        name: 'Luno Malaysia',
        year: 2019,
        description: 'First Digital Asset Exchange to receive SC recognition. Operates cryptocurrency trading platform with >90% Malaysia market share.',
        outcome: 'Fully licensed DAX operator. Commands majority of Malaysia crypto trading volume (RM13.9 billion in 2024).',
        relevance: 'Demonstrates viability of DAX licensing model. Sets standards for custody, security, and client asset protection.',
        citation: 'SC media release, Luno Malaysia DAX recognition 2019'
      },
      {
        name: 'SINEGY Digital Asset Exchange',
        year: 2020,
        description: 'DAX operator focusing on security tokens and digital securities. Provides tokenization services for private companies.',
        outcome: 'Licensed as recognized market operator. Pioneering security token offerings in Malaysia.',
        relevance: 'Shows pathway for tokenized securities issuance. Demonstrates integration of securities law with blockchain technology.',
        citation: 'SC registered DAX list, SINEGY website'
      },
      {
        name: 'Tokenize Technology',
        year: 2021,
        description: 'Digital asset exchange with focus on tokenization infrastructure. Provides white-label tokenization platforms.',
        outcome: 'SC-registered DAX operator. Enables issuers to tokenize assets including real estate and private equity.',
        relevance: 'Broadens tokenization beyond cryptocurrencies to real-world assets. Shows SC openness to diverse asset tokenization.',
        citation: 'SC DAX registry, Tokenize Technology announcements'
      },
      {
        name: 'Fusang Exchange Tokenized Sukuk Listing',
        year: 2023,
        description: 'Labuan-based digital securities exchange listed tokenized sukuk (Islamic bonds). First Shariah-compliant digital bond in Asia.',
        outcome: 'Successful listing and trading of tokenized sukuk. Demonstrated viability of Islamic digital securities.',
        relevance: 'Proves Shariah-compliant tokenization feasible. Opens pathway for Malaysia\'s USD 1 trillion sukuk market tokenization.',
        citation: 'Fusang Exchange press releases, Labuan FSA approvals'
      },
      {
        name: 'SC Digital Asset Guidelines Updates (2023-2024)',
        year: 2024,
        description: 'SC updated Digital Asset Guidelines in August 2024, refining digital token definitions and regulatory requirements.',
        outcome: 'Clearer framework for digital asset classification. Amendment Order 2025 excludes loyalty points, in-game assets from securities regulation.',
        relevance: 'Shows regulatory maturity and responsiveness. Balances innovation with investor protection.',
        citation: 'SC Digital Asset Guidelines 2024, Amendment Order 2025'
      }
    ],
    citations: [
      'sc-digital-asset-guidelines-2024',
      'cmsa-2007',
      'digital-asset-prescription-order-2019',
      'digital-asset-amendment-order-2025',
      'sc-recognized-markets-guidelines',
      'sc-safeguarding-client-assets'
    ],
    pendingDevelopments: [
      'Central Bank Digital Currency (CBDC) - BNM researching digital ringgit but no launch timeline',
      'Tokenized deposits framework - BNM exploring regulatory framework',
      'Cross-border digital asset regulation - coordination with ASEAN regulators',
      'Expanded IEO framework - SC considering broader token fundraising options',
      'DLT-based securities settlement - Bursa Malaysia exploring blockchain integration',
      'Stablecoin regulation - comprehensive framework under development',
      'NFT regulation clarity - SC monitoring developments, may issue specific guidance',
      'DeFi regulation - SC studying decentralized finance models',
      'Environmental standards for crypto mining - potential energy efficiency requirements'
    ]
  },

  {
    applicableAssets: ['securities'],
    regulatoryStatus: 'permitted',
    requiredLicenses: [
      {
        name: 'Initial Exchange Offering (IEO) Approval',
        issuingAuthority: 'Securities Commission Malaysia (through registered DAX operator)',
        requirements: [
          'Token qualifies as digital security under CMSA 2007',
          'Issuer incorporated in Malaysia or approved foreign jurisdiction',
          'Business plan and use of proceeds disclosure',
          'Technical whitepaper describing token functionality',
          'Legal opinion on token classification and compliance',
          'Minimum viable product (MVP) or prototype',
          'KYC/AML procedures for token purchasers',
          'DAX operator due diligence and vetting',
          'Investor protection mechanisms (lock-up periods, price stabilization)',
          'Ongoing disclosure and reporting obligations'
        ],
        timeline: '3-6 months (DAX due diligence and SC notification)',
        cost: 'DAX operator fees (typically 5-10% of raise); legal and compliance costs RM100,000-500,000',
        ongoingCompliance: [
          'Quarterly progress reports to DAX operator and investors',
          'Annual audited financial statements',
          'Material event disclosure within 24 hours',
          'Use of proceeds reporting',
          'Compliance with token holder rights and obligations',
          'Secondary market trading only on registered DAX'
        ]
      }
    ],
    technicalRequirements: [
      'Smart contract audit by reputable third-party auditor',
      'Token standard compliance (ERC-20, BEP-20, or equivalent)',
      'Multi-signature wallets for treasury and team tokens',
      'Token vesting and lock-up mechanisms',
      'Transparent on-chain governance (if applicable)',
      'Immutable token supply or transparent minting/burning rules',
      'Integration with DAX trading infrastructure',
      'Investor portal for account management and reporting'
    ],
    shariahRequirements: [
      'SAC approval required for Islamic token offerings',
      'Asset-backing - tokens must represent ownership in halal assets',
      'No riba - profit-sharing (mudarabah) or equity (musharakah) structures only',
      'No gharar - clear and certain token rights',
      'Shariah compliance certification from recognized scholars',
      'Shariah governance framework including Shariah committee',
      'Annual Shariah audit',
      'Segregation of proceeds into Shariah-compliant uses only'
    ],
    limitations: [
      'IEO only through SC-registered DAX operators',
      'Retail investor caps may apply (SC discretion)',
      'No public marketing until DAX approval obtained',
      'Foreign issuers require SC approval',
      'Token utility must be genuine - no purely fundraising tokens',
      'Secondary trading restricted to registered DAX platforms',
      'Cross-border token sales may face foreign exchange restrictions'
    ],
    sandbox: {
      available: true,
      authority: 'Securities Commission Malaysia',
      process: 'IEO applicants can apply for sandbox treatment if novel token structure. SC assesses and may grant conditional approval with monitoring.',
      precedents: [
        'Security token offerings for private equity stakes',
        'Real estate tokenization pilots',
        'Shariah-compliant token structures'
      ]
    },
    precedents: [
      {
        name: 'Private Company Equity Tokenization',
        year: 2022,
        description: 'Private Malaysian companies tokenizing equity stakes for fractional ownership and improved liquidity.',
        outcome: 'Successful tokenization with trading on registered DAX. Enhanced liquidity for private company shares.',
        relevance: 'Demonstrates pathway for private equity tokenization. Opens access for retail investors to private markets.',
        citation: 'SINEGY and Tokenize Technology case studies'
      }
    ],
    citations: [
      'sc-digital-asset-guidelines-2024',
      'sc-ieo-framework',
      'cmsa-2007'
    ],
    pendingDevelopments: [
      'Expansion of IEO framework to broader asset classes',
      'Streamlined approval process for repeat issuers',
      'Cross-border IEO coordination with Singapore and other jurisdictions'
    ]
  },

  {
    applicableAssets: ['real-estate', 'commodities', 'funds'],
    regulatoryStatus: 'restricted',
    requiredLicenses: [
      {
        name: 'Real Estate Investment Trust (REIT) or Property Fund Structure',
        issuingAuthority: 'Securities Commission Malaysia',
        requirements: [
          'Establishment of REIT or property trust under SC Guidelines on REITs',
          'Minimum fund size RM100 million',
          'Trustee and fund manager licensing',
          'Property valuation and appraisal',
          'Distribution of at least 90% of income to unitholders',
          'Tokenization of REIT units requires SC approval'
        ],
        timeline: '6-12 months for REIT establishment; additional 3-6 months for tokenization approval',
        cost: 'RM500,000 - RM2 million setup costs; ongoing management fees'
      },
      {
        name: 'Labuan Digital Asset License (Alternative Offshore Route)',
        issuingAuthority: 'Labuan Financial Services Authority',
        requirements: [
          'Incorporation of Labuan company',
          'Digital asset exchange, custody, or tokenization license',
          'Minimum capital requirements (lower than onshore: RM250,000 - RM1 million)',
          'AML/CFT compliance',
          'Fit and proper requirements'
        ],
        timeline: '2-4 months',
        cost: 'USD 1,500 - 30,000 depending on license type; low annual fees'
      }
    ],
    technicalRequirements: [
      'Integration with National Land Registry (for real estate) - DLT compatibility unclear',
      'Custodian arrangement for physical assets',
      'Oracle services for off-chain data (valuations, rents, commodity prices)',
      'Smart contracts governing distributions and redemptions',
      'Immutable record of fractional ownership'
    ],
    shariahRequirements: [
      'Musharakah (partnership) or ijarah (leasing) structure for real estate',
      'Asset-backing requirement - tangible property or commodities',
      'No riba - rental income or profit-sharing, not interest',
      'SAC approval for Islamic REIT or property fund',
      'Shariah-compliant tenants and usage (no alcohol, gambling, haram activities)'
    ],
    limitations: [
      'Direct tokenization of land title unclear - Land Registry modernization pending',
      'Typical structure: SPV holds property, tokenize SPV equity',
      'Commodity tokenization requires licensed warehouse and custodian',
      'Real estate tokenization via REIT structure has high minimum size (RM100 million)',
      'Labuan route provides offshore alternative but limited domestic investor access',
      'Foreign ownership restrictions on certain property types apply to tokenized structures'
    ],
    sandbox: {
      available: true,
      authority: 'Securities Commission Malaysia (onshore) or Labuan FSA (offshore)',
      process: 'Real estate and commodity tokenization proposals considered case-by-case. SC assesses structure, custodian arrangements, investor protection.',
      precedents: [
        'Labuan real estate tokenization pilots',
        'Palm oil and rubber tokenization studies',
        'Islamic real estate fund tokenization (musharakah structure)'
      ]
    },
    precedents: [
      {
        name: 'Labuan Real Estate Tokenization',
        year: 2023,
        description: 'Offshore tokenization of Malaysian and regional property through Labuan SPV structures.',
        outcome: 'Successful fractional ownership via tokenization. Lower minimums (USD 1,000-10,000) than traditional REITs.',
        relevance: 'Demonstrates offshore pathway for real estate tokenization. Addresses high onshore REIT minimum sizes.',
        citation: 'Labuan FSA case studies, Labuan digital asset license holders'
      },
      {
        name: 'Commodity Warehouse Receipt Tokenization Study',
        year: 2024,
        description: 'Research into tokenizing palm oil and rubber warehouse receipts for trading and financing.',
        outcome: 'Pilot programs under development. Regulatory framework under SC and commodity exchange review.',
        relevance: 'Malaysia major commodity producer. Tokenization could enhance liquidity and trade finance efficiency.',
        citation: 'Bursa Malaysia Derivatives, SC research papers'
      }
    ],
    citations: [
      'sc-reit-guidelines',
      'labuan-fsa-digital-asset-framework',
      'national-land-code-1965',
      'ifsa-2013'
    ],
    pendingDevelopments: [
      'Direct land title tokenization framework - Land Registry modernization',
      'Streamlined real estate tokenization below RM100 million threshold',
      'Commodity tokenization regulations',
      'Integration of Shariah-compliant real estate and commodity structures'
    ]
  }
];
