/**
 * UK Control Frameworks for Asset Ownership
 *
 * Legal mechanisms for establishing control and ownership over assets,
 * including ACP binding strength and good faith purchaser protections.
 */

import type { ControlFramework } from '../../types';

export const ukControlFrameworks: ControlFramework[] = [
  {
    framework: 'Cryptographic Control (Private Keys)',
    assetTypesApplicable: ['cryptoassets', 'trade-documents'],
    legalBasis: [
      'UKJT Legal Statement on Cryptoassets (2019) - exclusive control via private keys constitutes ownership',
      'Electronic Trade Documents Act 2023 s.2 - control test for electronic documents',
      'Law Commission Digital Assets Final Report (2023)',
      'Common law property principles adapted to digital assets'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Exclusive ability to initiate transfers',
          legalRequirement: 'Control must be exclusive - ability to exclude others from exercising control (ETDA s.2(2)(a))',
          verification: 'Private key signature required for on-chain transactions; cryptographic proof of control',
          certainty: 'high'
        },
        {
          condition: 'Ability to prevent others from control',
          legalRequirement: 'Person must be able to exclude all other persons from control (ETDA s.2(2)(b))',
          verification: 'Private keys not shared; multi-sig requires threshold approval; no backdoors or admin keys',
          certainty: 'high'
        },
        {
          condition: 'System reliability for identifying controller',
          legalRequirement: 'Reliable system for identifying person with control (ETDA s.2(3))',
          verification: 'Blockchain consensus; cryptographic addressing; public key infrastructure',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Possession of private keys + on-chain record',
          legalRequirement: 'Combination of cryptographic control and blockchain record constitutes ownership',
          verification: 'Private key controls address holding asset; on-chain transaction history confirms acquisition',
          certainty: 'high'
        },
        {
          condition: 'Transfer occurs upon change of control',
          legalRequirement: 'Ownership transfers when control transfers (delivery of possession equivalent)',
          verification: 'On-chain transfer showing change of controlling address; no intermediary approval required',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'strong',
    intermediaryRequired: false,
    goodFaithProtection: {
      available: true,
      conditions: [
        'Purchaser acquired for value',
        'Purchaser acted in good faith (no notice of adverse claims)',
        'Purchaser obtained control (private keys)',
        'No fraud or illegality in acquisition'
      ],
      legalBasis: [
        'Common law doctrine of bona fide purchaser for value without notice',
        'UKJT statement confirms good faith purchaser protections apply to cryptoassets',
        'Nemo dat principle exceptions (e.g., Factors Act 1889 for certain goods)'
      ]
    },
    citations: [
      'ukjt-cryptoassets-2019',
      'etda-2023',
      'law-commission-digital-assets-2023'
    ],
    examples: [
      'Bitcoin/Ethereum wallet ownership - private keys = exclusive control',
      'NFT ownership - holder of private keys controlling token contract address',
      'Electronic bill of lading - ETDA 2023 compliant platform with cryptographic control',
      'Tokenized warehouse receipt - exclusive control via private key enables transfer without intermediary'
    ]
  },

  {
    framework: 'Registry of Record (Statutory Register)',
    assetTypesApplicable: ['securities', 'real-estate', 'intellectual-property'],
    legalBasis: [
      'Companies Act 2006 - statutory share register confers title',
      'Land Registration Act 2002 - registered title system',
      'Patents Act 1977, Trade Marks Act 1994 - IP registration',
      'Uncertificated Securities Regulations 2001 - CREST system'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Entry on statutory register',
          legalRequirement: 'Registration on company share register (Companies Act s.113), Land Registry, or IP register required for legal title',
          verification: 'Official register entry showing holder as registered owner; certified copy of register',
          certainty: 'high'
        },
        {
          condition: 'Proper transfer documentation',
          legalRequirement: 'Stock transfer form (shares), deed of transfer (land), assignment deed (IP) required',
          verification: 'Executed transfer instrument; board approval for share transfers (if required by articles)',
          certainty: 'high'
        },
        {
          condition: 'Registrar approval/recording',
          legalRequirement: 'Registrar must approve and record transfer (company secretary, Land Registry, UK IPO)',
          verification: 'Updated register entry; issuance of updated share certificate or title deed',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Registration + no notice of competing claims',
          legalRequirement: 'Registration confers legal title; priority determined by registration order (land) or register priority (shares)',
          verification: 'Register search showing no adverse entries; no notice of stop orders or caveats',
          certainty: 'high'
        },
        {
          condition: 'Transfer takes effect only upon registration',
          legalRequirement: 'Legal title does not pass until registration (LRA 2002 s.27 for land; Companies Act for shares)',
          verification: 'Date of registration determines when ownership transfers',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'weak',
    intermediaryRequired: true,
    intermediaryDetails: {
      type: 'Registrar (company secretary, Land Registry, UK IPO, CREST operator)',
      licensingRequired: true,
      regulator: 'Companies House (companies), Land Registry (land), UK IPO (IP), FCA (CREST operator)'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Registered proprietor is prima facie owner (Land Registration Act 2002 s.58)',
        'Good faith purchaser for value without notice protected',
        'Overriding interests may defeat registered title (land)',
        'Rectification of register possible in limited circumstances (fraud, mistake)'
      ],
      legalBasis: [
        'Land Registration Act 2002 Schedule 4 (alteration of register)',
        'Companies Act 2006 s.127 (register of members as evidence)',
        'Common law bona fide purchaser doctrine'
      ]
    },
    citations: [
      'companies-act-2006',
      'land-registration-act-2002',
      'patents-act-1977',
      'trademarks-act-1994',
      'uncertificated-securities-regs-2001'
    ],
    examples: [
      'Company share register - entry confers legal title; transfer requires board approval + registration',
      'HM Land Registry - registered title system; registration required for legal estate transfer',
      'CREST system - electronic settlement of uncertificated securities; CREST entry = legal ownership',
      'UK IPO patent register - assignment must be registered to take effect against third parties'
    ]
  },

  {
    framework: 'Custodian-Intermediary Model',
    assetTypesApplicable: ['securities', 'commodities', 'funds', 'cryptoassets'],
    legalBasis: [
      'FCA CASS rules (Client Assets Sourcebook)',
      'Financial Collateral Arrangements (No. 2) Regulations 2003',
      'Sale of Goods Act 1979 (bailment/attornment for goods)',
      'Common law custody and bailment principles'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Custodian holds legal title',
          legalRequirement: 'Custodian/intermediary holds asset as bailee or nominee; client has beneficial ownership',
          verification: 'Custody agreement; account statements; segregated client asset accounts (CASS rules)',
          certainty: 'high'
        },
        {
          condition: 'Client instruction controls transfers',
          legalRequirement: 'Client must authorize all transfers; custodian acts on instructions only',
          verification: 'Written transfer instructions; signed authorization; audit trail of instructions',
          certainty: 'high'
        },
        {
          condition: 'FCA CASS compliance (for regulated firms)',
          legalRequirement: 'Regulated firms must segregate client assets; daily reconciliation; client money protection',
          verification: 'CASS audit reports; client asset acknowledgement letters; reconciliation records',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Client instruction + custodian execution',
          legalRequirement: 'Transfer occurs when client instructs AND custodian executes (two-step process)',
          verification: 'Instruction received + custodian confirmation of execution',
          certainty: 'high'
        },
        {
          condition: 'Trust/bailment relationship established',
          legalRequirement: 'Custodian holds as trustee or bailee; fiduciary duties owed to client',
          verification: 'Custody agreement terms; CASS compliance (if regulated)',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'weak',
    intermediaryRequired: true,
    intermediaryDetails: {
      type: 'Custodian (bank, broker, crypto custodian, warehouse)',
      licensingRequired: true,
      regulator: 'FCA (for regulated custodians), PRA (for banks)'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Client has beneficial ownership; protected against custodian insolvency if CASS compliant',
        'Third party purchaser acquiring from custodian may be protected if custodian had apparent authority',
        'Good faith purchaser without notice of trust/beneficial ownership may take free of beneficiary claims',
        'Financial Collateral Regulations provide protection for collateral arrangements'
      ],
      legalBasis: [
        'FCA CASS rules - client asset protection',
        'Trustee Act 2000 - trustee duties',
        'Financial Collateral Arrangements Regulations 2003',
        'Common law bona fide purchaser doctrine'
      ]
    },
    citations: [
      'fca-cass-rules',
      'financial-collateral-regs-2003',
      'sale-goods-act-1979'
    ],
    examples: [
      'Securities custody - broker holds shares as nominee; client has beneficial interest',
      'Crypto custody - regulated custodian holds private keys; client has contractual claim',
      'Warehouse commodities - warehouse holds goods as bailee; client has warehouse receipt',
      'Bank deposits - bank holds funds; depositor has debt claim (not bailment)'
    ]
  },

  {
    framework: 'Digital Securities Sandbox (DLT-Based Registry)',
    assetTypesApplicable: ['securities'],
    legalBasis: [
      'Financial Services and Markets Act 2023 Part 3A (FMI sandbox)',
      'Digital Securities Sandbox Instrument 2024',
      'FCA Handbook provisions (modified for sandbox participants)',
      'Companies Act 2006 (electronic registers permitted)'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'FCA authorization as FMI sandbox participant',
          legalRequirement: 'Operator must be authorized by FCA to operate DLT-based securities settlement system',
          verification: 'FCA authorization letter; sandbox participation agreement; ongoing reporting to FCA',
          certainty: 'high'
        },
        {
          condition: 'DLT ledger serves as authoritative register',
          legalRequirement: 'Distributed ledger recognized as company share register (Companies Act) or settlement system record',
          verification: 'Smart contract code; consensus mechanism; immutable transaction log',
          certainty: 'medium'
        },
        {
          condition: 'Transfer finality rules defined',
          legalRequirement: 'Clear rules on when transfer is final and irrevocable; settlement finality protections',
          verification: 'Sandbox rulebook; smart contract logic; finality determination criteria',
          certainty: 'medium'
        }
      ],
      sufficient: [
        {
          condition: 'On-chain transfer + register update',
          legalRequirement: 'Transfer occurs when DLT transaction confirmed AND register updated (atomic if possible)',
          verification: 'Block confirmation; smart contract event emission; updated on-chain register',
          certainty: 'medium'
        },
        {
          condition: 'No intermediary approval if ACP-bound design',
          legalRequirement: 'Atomic DvP possible if custodian not required; depends on sandbox design',
          verification: 'Smart contract code review; settlement flow documentation',
          certainty: 'medium'
        }
      ]
    },
    acpBinding: 'moderate',
    intermediaryRequired: false,
    intermediaryDetails: {
      type: 'FMI sandbox operator (authorized by FCA)',
      licensingRequired: true,
      regulator: 'FCA'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Common law good faith purchaser protections likely apply',
        'Sandbox rulebook may specify protections for bona fide transferees',
        'Finality protections under Settlement Finality Regulations may apply if designated',
        'Uncertain whether overriding interests (fraud, mistake) could defeat on-chain record'
      ],
      legalBasis: [
        'Settlement Finality Regulations 1999 (if designated system)',
        'Common law bona fide purchaser doctrine',
        'Sandbox-specific rulebook provisions'
      ]
    },
    citations: [
      'fsma-2023',
      'digital-securities-sandbox-2024',
      'companies-act-2006'
    ],
    examples: [
      'LSEG Digital Markets - DLT-based post-trade infrastructure (sandbox participant)',
      'Archax - digital securities exchange and custodian (exploring sandbox)',
      'Nivaura - automated bond issuance platform (precedent for tokenized securities)',
      'Hypothetical: DLT share register where on-chain transfer = legal title transfer without intermediary'
    ]
  },

  {
    framework: 'Document of Title (Physical or Electronic)',
    assetTypesApplicable: ['commodities', 'trade-documents'],
    legalBasis: [
      'Electronic Trade Documents Act 2023',
      'Carriage of Goods by Sea Act 1992 (bills of lading)',
      'Factors Act 1889 (documents of title)',
      'Sale of Goods Act 1979 (sale by description)',
      'Bills of Exchange Act 1882 (negotiable instruments)'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Possession of unique original document',
          legalRequirement: 'Document must be original (not copy); electronic document must satisfy ETDA s.2 control test',
          verification: 'Paper document physicality; electronic document uniqueness via ETDA-compliant system',
          certainty: 'high'
        },
        {
          condition: 'Document confers title or right to goods',
          legalRequirement: 'Document must be recognized document of title (bill of lading, warehouse receipt, delivery order)',
          verification: 'Document type and form; statutory recognition; industry custom',
          certainty: 'high'
        },
        {
          condition: 'Endorsement (if negotiable)',
          legalRequirement: 'Negotiable documents require endorsement + delivery; non-negotiable require notice to bailee',
          verification: 'Signature on back of document; electronic endorsement via digital signature',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Transfer of document + delivery/endorsement',
          legalRequirement: 'Transfer of document of title transfers constructive possession and (usually) ownership',
          verification: 'Delivery of document; endorsement (if negotiable); attornment by bailee (if required)',
          certainty: 'high'
        },
        {
          condition: 'ETDA electronic document transfer',
          legalRequirement: 'Electronic transfer satisfying ETDA s.2 control test has same effect as paper transfer',
          verification: 'Change of control on ETDA-compliant platform; cryptographic proof of exclusive control',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'moderate',
    intermediaryRequired: true,
    intermediaryDetails: {
      type: 'Bailee (warehouse, carrier, custodian)',
      licensingRequired: false,
      regulator: 'None (common law bailment); industry standards (e.g., UKWA for warehouses)'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Bona fide purchaser of document of title for value without notice takes good title (Factors Act 1889)',
        'Mercantile agent selling with possession of goods/documents passes good title (Factors Act s.2)',
        'Nemo dat principle exceptions protect good faith purchasers in commercial transactions',
        'Electronic documents under ETDA 2023 have same protections as paper equivalents'
      ],
      legalBasis: [
        'Factors Act 1889',
        'Sale of Goods Act 1979 s.24-25 (seller/buyer in possession exceptions)',
        'Electronic Trade Documents Act 2023',
        'Common law estoppel and apparent authority'
      ]
    },
    citations: [
      'etda-2023',
      'factors-act-1889',
      'carriage-goods-sea-1992',
      'sale-goods-act-1979'
    ],
    examples: [
      'Bill of lading - negotiable document of title; endorsement + delivery transfers ownership',
      'Warehouse receipt - transfer conveys right to goods in warehouse; ETDA 2023 enables electronic version',
      'Delivery order - transfer requires notice to bailee (carrier/warehouse)',
      'Electronic bill of lading (CargoX, Bolero) - ETDA 2023 compliant platforms enable tokenized transfer'
    ]
  }
];
