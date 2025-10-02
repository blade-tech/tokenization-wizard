/**
 * UK Tokenization Regulatory Rules and Requirements
 *
 * FCA guidance, licensing requirements, sandbox programs,
 * and precedent cases for tokenized assets in the UK.
 */

import type { TokenizationRule } from '../../types';

export const ukTokenizationRules: TokenizationRule[] = [
  {
    applicableAssets: ['securities'],
    regulatoryStatus: 'permitted',
    requiredLicenses: [
      {
        name: 'Authorized Person under FSMA 2000',
        issuingAuthority: 'Financial Conduct Authority (FCA)',
        requirements: [
          'Part 4A Permission application to FCA',
          'Meet Threshold Conditions (adequate resources, suitability, business model)',
          'Approved Persons / Senior Managers and Certification Regime (SM&CR)',
          'Conduct of Business (COBS) and Client Assets (CASS) compliance',
          'Ongoing regulatory reporting and supervision'
        ],
        timeline: '6-12 months for initial authorization',
        cost: 'Application fees vary; ongoing regulatory fees based on firm size',
        ongoingCompliance: [
          'Annual regulatory fees',
          'Regular reporting (financial returns, client money returns, etc.)',
          'Compliance monitoring and internal audit',
          'FCA supervision and periodic reviews'
        ]
      },
      {
        name: 'FMI Sandbox Authorization (for DLT-based securities infrastructure)',
        issuingAuthority: 'Financial Conduct Authority (FCA)',
        requirements: [
          'Meet FMI sandbox eligibility criteria',
          'Demonstrate innovation in securities settlement/custody',
          'Submit detailed application including technology architecture',
          'Agree to sandbox conditions and reporting requirements',
          'Operate within sandbox limitations (volume, participants, etc.)'
        ],
        timeline: '3-6 months application process; sandbox operational Sep 2024 - Dec 2028',
        cost: 'Application and ongoing sandbox fees (details in FCA fee schedule)',
        ongoingCompliance: [
          'Quarterly reporting to FCA on sandbox activities',
          'Compliance with modified regulatory requirements',
          'Risk management and incident reporting',
          'Exit or transition plan at end of sandbox period'
        ]
      }
    ],
    technicalRequirements: [
      'Settlement finality rules clearly defined',
      'Cybersecurity controls meeting FCA expectations',
      'Operational resilience (business continuity, disaster recovery)',
      'Systems and controls for market abuse prevention',
      'AML/CTF controls (Know Your Customer, transaction monitoring)',
      'Data protection compliance (UK GDPR, Data Protection Act 2018)',
      'Audit trail and record-keeping (MiFID II/UK MiFIR requirements)',
      'Client asset protection (CASS rules if holding client assets)'
    ],
    limitations: [
      'Security tokens must fall within FCA regulatory perimeter (specified investments)',
      'Public offerings require FCA-approved prospectus (unless exempt)',
      'Marketing restrictions for non-mass market investments',
      'Custody of cryptoassets requires FCA authorization if part of regulated activity',
      'Cross-border offerings subject to jurisdictional restrictions',
      'Certain DeFi activities fall outside regulatory perimeter (guidance evolving)',
      'Sandbox has participation limits and sunset provisions'
    ],
    sandbox: {
      available: true,
      authority: 'Financial Conduct Authority (FCA)',
      process: 'Application via FCA Innovation Hub; detailed submission required including business model, technology, risk assessment, consumer protection measures',
      precedents: [
        'LSEG Digital Markets - DLT post-trade infrastructure (sandbox participant)',
        'Archax - digital securities exchange (FCA authorized, exploring sandbox)',
        'Nivaura - automated bond issuance (conducted tokenized bond issuances)',
        'Lloyds Banking Group - tokenized deposit trials (exploring digital assets)'
      ]
    },
    precedents: [
      {
        name: 'Nivaura Automated Issuance Platform',
        year: 2017,
        description: 'First fully automated bond issuance on blockchain; issued £5m bonds for London Stock Exchange-listed company on Ethereum',
        outcome: 'Successfully demonstrated feasibility of tokenized debt securities; no regulatory obstacles encountered',
        relevance: 'Proves tokenized securities issuance viable under existing UK framework; automated smart contract execution',
        citation: 'Nivaura press releases 2017-2020; industry publications'
      },
      {
        name: 'Archax Digital Securities Exchange',
        year: 2020,
        description: 'FCA-authorized digital securities exchange and custodian; first regulated crypto exchange for institutional investors in UK',
        outcome: 'Operational since 2020; provides trading, custody, and settlement for tokenized securities',
        relevance: 'Demonstrates FCA willingness to authorize innovative digital asset platforms; established regulatory pathway',
        citation: 'FCA Register; Archax public announcements; FCA authorized firm database'
      },
      {
        name: 'LSEG Digital Markets',
        year: 2024,
        description: 'London Stock Exchange Group\'s DLT-based post-trade infrastructure platform; participant in FCA Digital Securities Sandbox',
        outcome: 'Sandbox participant (announced 2024); developing tokenized securities trading and settlement infrastructure',
        relevance: 'Major FMI exploring DLT for securities; sandbox provides regulatory clarity for innovative settlement systems',
        citation: 'LSEG press releases 2024; FCA Digital Securities Sandbox announcements'
      },
      {
        name: 'Lloyds Banking Group Tokenized Deposits',
        year: 2024,
        description: 'Lloyds exploring tokenized deposits and digital assets as part of digital transformation strategy',
        outcome: 'Pilot/research phase; no public commercial launch yet',
        relevance: 'Major UK bank exploring tokenization; indicates mainstream financial institution interest',
        citation: 'Lloyds Banking Group public statements 2024'
      },
      {
        name: 'UK Green Gilt via Debt Management Office',
        year: 2021,
        description: 'UK government issued £10bn green gilt (conventional bond, not tokenized); demonstrated appetite for innovative debt instruments',
        outcome: 'Successful issuance; DMO exploring digital assets for future issuances',
        relevance: 'Government interest in innovation; potential future tokenization of sovereign debt',
        citation: 'UK Debt Management Office press releases; HM Treasury announcements'
      }
    ],
    citations: [
      'fsma-2000',
      'fsma-2023',
      'fca-ps19-22',
      'digital-securities-sandbox-2024',
      'fca-authorized-persons-guidance'
    ],
    pendingDevelopments: [
      'Property (Digital Assets etc) Bill - statutory recognition of digital assets as property (passage expected 2024-2025)',
      'Stablecoin regulation - HMT consultation on bringing fiat-backed stablecoins into regulatory perimeter',
      'Wholesale markets tokenization - FCA and Bank of England exploring tokenized wholesale deposits and securities',
      'Digital pound - Bank of England CBDC research and design phase (consultation ongoing)',
      'Cross-border regulatory coordination - UK engaging with EU, US, Singapore on digital asset standards',
      'DeFi regulation - FCA considering regulatory approach to decentralized finance protocols'
    ]
  },

  {
    applicableAssets: ['cryptoassets'],
    regulatoryStatus: 'restricted',
    requiredLicenses: [
      {
        name: 'Cryptoasset Registration (AML/CTF)',
        issuingAuthority: 'Financial Conduct Authority (FCA)',
        requirements: [
          'Register as cryptoasset business with FCA',
          'Meet AML/CTF requirements (Money Laundering Regulations 2017)',
          'Implement Know Your Customer (KYC) procedures',
          'Transaction monitoring and suspicious activity reporting',
          'Fit and proper test for senior management'
        ],
        timeline: '3-6 months registration process',
        cost: 'Registration fee £2,000; annual supervision fee varies by firm size',
        ongoingCompliance: [
          'Annual regulatory fees',
          'AML/CTF compliance monitoring',
          'Ongoing reporting of suspicious transactions',
          'FCA supervision and periodic reviews'
        ]
      }
    ],
    technicalRequirements: [
      'AML/CTF controls (KYC, transaction monitoring, SAR reporting)',
      'Cybersecurity and operational resilience',
      'Client disclosure of risks (if offering services to retail)',
      'Record-keeping and audit trail',
      'Segregation of client cryptoassets (if custody provided)',
      'Private key management and security protocols'
    ],
    limitations: [
      'Most cryptoassets (utility tokens, exchange tokens) fall OUTSIDE FCA regulatory perimeter',
      'Cryptoassets qualifying as specified investments (security tokens) subject to FSMA regulation',
      'E-money tokens and certain stablecoins subject to E-Money Regulations 2011',
      'Promotion of cryptoassets to retail highly restricted (Financial Promotion Order restrictions)',
      'No custody protections equivalent to CASS for unregulated cryptoassets',
      'Tax treatment uncertain for certain crypto transactions',
      'Cross-border transfers may trigger AML/sanctions concerns'
    ],
    sandbox: {
      available: true,
      authority: 'FCA Innovation Hub and Regulatory Sandbox',
      process: 'Application via FCA Innovation Hub; sandbox participation subject to eligibility criteria',
      precedents: [
        'Various crypto custody and exchange platforms participated in FCA sandbox cohorts',
        'Archax obtained FCA authorization through engagement with Innovation Hub'
      ]
    },
    precedents: [
      {
        name: 'AA v Persons Unknown [2019] EWHC 3556 (Comm)',
        year: 2019,
        description: 'English Commercial Court granted proprietary injunction freezing Bitcoin holdings; recognized cryptoassets as property capable of being owned and held on trust',
        outcome: 'Court confirmed cryptoassets ARE property under English law',
        relevance: 'Judicial recognition of cryptoasset ownership; foundational case for UKJT statement',
        citation: '[2019] EWHC 3556 (Comm)'
      },
      {
        name: 'Ion Science Ltd v Persons Unknown (unreported)',
        year: 2020,
        description: 'High Court proprietary injunction over cryptoassets; further confirmed property status',
        outcome: 'Cryptoassets held on constructive trust; enforceable property rights',
        relevance: 'Reinforces property characterization and availability of equitable remedies',
        citation: 'Unreported High Court judgment 2020'
      }
    ],
    citations: [
      'ukjt-cryptoassets-2019',
      'fca-ps19-22',
      'money-laundering-regs-2017',
      'aa-persons-unknown-2019'
    ],
    pendingDevelopments: [
      'Stablecoin regulation - bringing fiat-backed stablecoins into FCA perimeter',
      'Retail promotion restrictions - FCA enhancing consumer protection for crypto marketing',
      'Custody standards - potential introduction of CASS-like protections for cryptoasset custody',
      'DeFi regulatory approach - FCA exploring how to regulate decentralized protocols'
    ]
  },

  {
    applicableAssets: ['trade-documents'],
    regulatoryStatus: 'permitted',
    requiredLicenses: [],
    technicalRequirements: [
      'ETDA 2023 compliance - electronic document must satisfy s.2 control test',
      'Reliable system for identifying controller (private keys, digital signatures)',
      'Integrity of electronic document maintained (immutability)',
      'Ability to exclude others from control (exclusive control requirement)',
      'Cybersecurity controls for document platform',
      'AML/CTF compliance if financial services involved',
      'Data protection compliance (UK GDPR)'
    ],
    limitations: [
      'ETDA only applies to specified document types (bills of lading, warehouse receipts, bills of exchange, etc.)',
      'Electronic document must be "possession-equivalent" (satisfying control test)',
      'International recognition may vary (cross-border enforceability uncertain)',
      'Bailee/carrier must recognize and honor electronic document',
      'Platform reliability critical - loss of control = loss of ownership'
    ],
    sandbox: {
      available: false,
      authority: 'No specific sandbox; ETDA 2023 provides direct statutory authorization'
    },
    precedents: [
      {
        name: 'Electronic Trade Documents Act 2023 Enactment',
        year: 2023,
        description: 'UK Parliament enacted ETDA, making UK first jurisdiction to give electronic trade documents same legal effect as paper',
        outcome: 'Law in force; electronic bills of lading, warehouse receipts, etc. legally equivalent to paper',
        relevance: 'Groundbreaking legislation enabling tokenization of trade documents; global model',
        citation: 'Electronic Trade Documents Act 2023 c.38'
      },
      {
        name: 'CargoX Platform',
        year: 2018,
        description: 'Blockchain-based electronic bill of lading platform; operated pre-ETDA under contractual framework',
        outcome: 'Operational; ETDA 2023 provides statutory backing for electronic eBL transfer',
        relevance: 'Demonstrates market readiness; ETDA removes legal uncertainty',
        citation: 'CargoX platform documentation; industry adoption'
      },
      {
        name: 'Bolero Platform',
        year: 1999,
        description: 'Electronic trade document platform operational since 1999; rulebook-based system for eBL',
        outcome: 'Operational for 20+ years; ETDA strengthens legal certainty',
        relevance: 'Proven electronic trade document platform; ETDA provides statutory recognition',
        citation: 'Bolero Rulebook; industry documentation'
      }
    ],
    citations: [
      'etda-2023',
      'law-commission-etd-2022',
      'bills-of-exchange-1882',
      'carriage-goods-sea-1992'
    ],
    pendingDevelopments: [
      'International adoption of ETDA-equivalent legislation (UNCITRAL Model Law)',
      'Industry standards for ETDA-compliant platforms',
      'Integration with customs and port authorities for electronic documents',
      'Cross-border recognition agreements'
    ]
  },

  {
    applicableAssets: ['real-estate'],
    regulatoryStatus: 'restricted',
    requiredLicenses: [],
    technicalRequirements: [
      'SPV structure typically required (tokenize shares in SPV, not land itself)',
      'Company registration at Companies House',
      'Share register compliance (Companies Act 2006)',
      'Property ownership documentation (title deeds, Land Registry)',
      'If offering to public: FCA prospectus or exemption',
      'AML/CTF compliance (property transactions high-risk)',
      'Tax advice (SDLT, CGT, income tax treatment)',
      'Legal advice on beneficial ownership disclosure'
    ],
    limitations: [
      'Legal title to land CANNOT be directly tokenized (must be registered at Land Registry)',
      'Typical structure: tokenize shares in SPV holding property (economic interest only)',
      'Land Registry does not currently accept DLT-based title records',
      'Transfer of legal estate requires deed + registration (Land Registration Act 2002 s.27)',
      'Beneficial ownership of property via tokens may trigger tax consequences',
      'Regulatory treatment of property tokens unclear (may be security tokens)',
      'Cross-border property ownership restrictions may apply'
    ],
    sandbox: {
      available: false,
      authority: 'No specific sandbox for real estate tokenization; FCA sandbox may cover security token aspects'
    },
    precedents: [
      {
        name: 'UK Property Token Offerings',
        year: 2019,
        description: 'Various platforms attempted property tokenization via SPV share structures',
        outcome: 'Limited success; regulatory complexity and lack of secondary market liquidity',
        relevance: 'Demonstrates challenges of property tokenization under current framework',
        citation: 'Industry reports; platform announcements (e.g., The House Crowd, Property Partner)'
      }
    ],
    citations: [
      'land-registration-act-2002',
      'companies-act-2006',
      'lpa-1925'
    ],
    pendingDevelopments: [
      'HM Land Registry exploring digital services and blockchain integration',
      'Government Digital Service (GDS) researching property technology',
      'Potential future integration of DLT with Land Registry (speculative)'
    ]
  },

  {
    applicableAssets: ['funds'],
    regulatoryStatus: 'restricted',
    requiredLicenses: [
      {
        name: 'Electronic Money Institution (EMI) Authorization',
        issuingAuthority: 'Financial Conduct Authority (FCA)',
        requirements: [
          'Meet E-Money Regulations 2011 requirements',
          'Minimum initial capital (€350,000 for full EMI)',
          'Safeguarding of e-money funds',
          'AML/CTF compliance',
          'Fit and proper test for management'
        ],
        timeline: '6-12 months authorization process',
        cost: 'Application fee; ongoing supervision fees',
        ongoingCompliance: [
          'Annual regulatory fees',
          'Safeguarding compliance',
          'Regular reporting to FCA',
          'AML/CTF monitoring'
        ]
      }
    ],
    technicalRequirements: [
      'Safeguarding of client funds (EMI) or client money rules (CASS)',
      'Redemption rights at par value (e-money)',
      'AML/CTF transaction monitoring',
      'Cybersecurity and operational resilience',
      'Settlement finality mechanisms',
      'Interoperability with payment systems'
    ],
    limitations: [
      'Tokenized deposits not yet permitted by Bank of England',
      'E-money tokens require EMI authorization',
      'Stablecoins currently outside regulatory perimeter (but regulation pending)',
      'CBDC (digital pound) still in research phase, not available',
      'Cross-border transfers subject to AML/sanctions screening',
      'No deposit insurance for cryptoasset-based funds'
    ],
    sandbox: {
      available: true,
      authority: 'FCA Innovation Hub and Digital Securities Sandbox (for wholesale tokenized deposits)',
      process: 'Application via FCA; sandbox for wholesale experimentation with tokenized deposits'
    },
    precedents: [
      {
        name: 'Bank of England Digital Pound Consultation',
        year: 2023,
        description: 'BoE and HMT joint consultation on retail CBDC design',
        outcome: 'Research phase; technology and policy design ongoing; no launch date confirmed',
        relevance: 'Signals future availability of central bank digital money for settlement',
        citation: 'BoE/HMT Digital Pound Consultation Paper 2023'
      },
      {
        name: 'Lloyds Banking Group Tokenized Deposits',
        year: 2024,
        description: 'Lloyds exploring tokenized deposit offerings for wholesale clients',
        outcome: 'Pilot phase; no public commercial launch',
        relevance: 'Major bank exploring tokenization of bank liabilities',
        citation: 'Lloyds Banking Group press releases 2024'
      }
    ],
    citations: [
      'e-money-regs-2011',
      'payment-services-regs-2017',
      'digital-pound-consultation-2023'
    ],
    pendingDevelopments: [
      'Stablecoin regulation - HMT consultation on regulatory framework',
      'Digital pound - BoE CBDC development (timeline uncertain)',
      'Tokenized wholesale deposits - Bank of England exploring regulatory approach',
      'Cross-border payment stablecoin standards (BIS, FSB coordination)'
    ]
  }
];
