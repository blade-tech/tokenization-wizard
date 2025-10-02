import { ControlFramework } from '../types';

export const bahrainControlFrameworks: ControlFramework[] = [
  {
    id: 'bahrain-clear-csd',
    name: 'Bahrain Clear (Central Securities Depository)',
    type: 'securities-depository',
    operator: 'Bahrain Bourse',
    description: 'Central securities depository operating book-entry system for dematerialized securities with T+2 settlement cycle and DVP model',

    legalBasis: {
      primaryLaw: 'CBB Rulebook Vol. 6 - CSD Module',
      establishedDate: 'Operational since 2000s',
      regulatoryAuthority: 'Central Bank of Bahrain',
      specificProvisions: [
        'CBB CSD Module - Clearing, Settlement and Depository',
        'Bahrain Bourse operating license from CBB',
        'Book-entry system as fundamental principle',
        'Dematerialization of all listed securities',
        'Licensed brokers and custodians network'
      ]
    },

    registrationMechanism: {
      method: 'Electronic book-entry registration',
      recordKeeper: 'Bahrain Clear (Bahrain Bourse Settlement & CSD Department)',
      accessRequirements: [
        'Investors must open securities account with Licensed Participant (broker/custodian)',
        'All trades cleared and settled via book entry',
        'Real-time electronic transfer and settlement'
      ],
      publicVisibility: false,
      searchability: 'Limited to account holders and licensed participants'
    },

    settlementProcess: {
      cycle: 'T+2 (trade date plus 2 business days)',
      method: 'Delivery versus Payment (DVP) Model',
      finality: 'Settlement is final and irrevocable upon completion',
      details: [
        'All on-exchange trades settled T+2',
        'Cash netted on multilateral basis',
        'Securities settled on trade-by-trade basis',
        'DVP Framework adopted February 2024 (custody model enhancement)',
        'Automated custodian-broker settlement',
        'Pre-settlement controls via custodian trade confirmation/rejection',
        'Settlement bank handles cash settlement',
        'Guarantee fund for default protection (member contributions)'
      ]
    },

    custodyArrangements: {
      options: [
        'Direct account with licensed broker',
        'Licensed custodian account',
        'Global custodian (for international investors)'
      ],
      segregation: 'Client securities held separately from member firm assets',
      protections: [
        'Bahrain Bourse and members guarantee transfer of cash on settlement date',
        'Guarantee fund for defaulting member protection',
        'DVP model mitigates settlement risk',
        'Electronic record eliminates physical certificate risk'
      ]
    },

    acpBinding: {
      bindingStrength: 'Strong',
      necessaryCondition: true,
      sufficientCondition: true,
      analysis: [
        'Book-entry registration is authoritative control point',
        'No physical certificates - electronic record is definitive',
        'Settlement via Bahrain Clear is necessary AND sufficient for ownership transfer',
        'DVP ensures simultaneous cash/securities exchange',
        'Legal ownership follows CSD record',
        'Good faith purchaser protections based on CSD record'
      ]
    },

    interoperability: [
      'AFAQ (GCC RTGS) - regional cross-border settlement',
      'International custodian links for cross-border securities',
      'SWIFT network integration'
    ],

    limitations: [
      'Limited to listed securities on Bahrain Bourse',
      'Unlisted securities use alternative registries',
      'Foreign investors require licensed custodian intermediary',
      'Not integrated with blockchain/DLT (traditional system)'
    ],

    tokenizationSuitability: {
      currentState: 'Traditional book-entry system',
      blockchainReadiness: 'Medium - potential for DLT migration',
      challenges: [
        'Legal framework assumes traditional book-entry, not DLT',
        'DVP model would need adaptation for smart contracts',
        'Custodian network built around centralized system',
        'Regulatory clarity needed for tokenized securities settlement'
      ],
      opportunities: [
        'T+2 settlement could improve to near-instant with DLT',
        'DVP model translates well to atomic swaps',
        'Existing electronic infrastructure facilitates transition',
        'CBB fintech-friendly regulatory approach'
      ]
    },

    sources: [
      'CBB Rulebook Vol. 6 - CSD Module',
      'Bahrain Bourse - Clearing & Settlement webpage',
      'Bahrain Clear DVP Model adoption (February 2024)',
      'Bahrain Bourse CSD Central Depository documentation'
    ]
  },

  {
    id: 'crypto-custody-framework',
    name: 'CBB Crypto-Asset Custody Framework (CA-2)',
    type: 'crypto-custody',
    operator: 'CBB-licensed CA-2 Custodians',
    description: 'Regulatory framework for licensed crypto-asset custodians under CBB Crypto-Asset Module, covering wallet storage, key management, and client asset protection',

    legalBasis: {
      primaryLaw: 'CBB Crypto-Asset Module (CA)',
      establishedDate: '2019',
      regulatoryAuthority: 'Central Bank of Bahrain',
      specificProvisions: [
        'CRA-4.12 - Crypto-asset Custody requirements',
        'CRA-4.13 - Key Management and Wallet Storage',
        'CA-2 License category: Crypto-Asset Custodian',
        'Minimum capital requirements',
        'Systems and controls obligations'
      ]
    },

    registrationMechanism: {
      method: 'Private key custody + blockchain record',
      recordKeeper: 'Distributed ledger (blockchain) + custodian internal records',
      accessRequirements: [
        'CA-2 license from CBB required for custodial services',
        'Client must engage licensed custodian',
        'CBB approval of custodial arrangement details required',
        'Third-party custodian assessment if using sub-custodian'
      ],
      publicVisibility: false,
      searchability: 'Blockchain transparent; custodian records private'
    },

    custodyArrangements: {
      options: [
        'Direct custody by CA-2 licensed custodian',
        'Sub-custody via third-party (subject to CBB requirements)',
        'Self-custody (for non-regulated users)'
      ],
      segregation: 'Mandatory client asset segregation',
      protections: [
        'Must hold crypto-assets of same type and amount as owed to client',
        'Prohibited from selling, lending, hypothecating, or pledging client crypto-assets without client direction',
        'Hot wallet and cold wallet security requirements',
        'Key management and backup procedures mandatory',
        'Keyman risk management measures',
        'Professional indemnity insurance required'
      ]
    },

    keyManagementRequirements: {
      hotWallets: [
        'Password protected and encrypted',
        'Key storage file encrypted',
        'Network-attached device for immediate access',
        'Higher security risk due to internet connectivity',
        'Used only for crypto-assets needing immediate availability'
      ],
      coldWallets: [
        'Offline storage (not network-attached)',
        'Mandatory for crypto-assets not needing immediate access',
        'Password protected and encrypted',
        'Protected against physical theft',
        'Key storage file encrypted'
      ],
      backupAndRecovery: [
        'Keyman risk management measures required',
        'Arrangements for unavailability due to death, disability, unforeseen circumstances',
        'No encrypted accounts that cannot be retrieved',
        'Secure generation, storage, backup, and destruction of public/private keys'
      ]
    },

    settlementProcess: {
      cycle: 'Near-instant (blockchain settlement)',
      method: 'On-chain transfer via private key signatures',
      finality: 'Blockchain finality (varies by network)',
      details: [
        'Settlement occurs when transaction confirmed on blockchain',
        'Custodian executes transfer at client direction',
        'Atomic settlement (no DVP unless via smart contract)',
        'Finality depends on blockchain consensus mechanism'
      ]
    },

    acpBinding: {
      bindingStrength: 'Strong (for custody model)',
      necessaryCondition: true,
      sufficientCondition: true,
      analysis: [
        'Private key control is authoritative control point',
        'Licensed custodian holds keys on behalf of client',
        'Blockchain record follows key custody',
        'Client has contractual claim on custodian, not direct blockchain control',
        'Regulatory protections substitute for direct key control',
        'Good faith purchaser protections untested (property law unclear)'
      ]
    },

    limitations: [
      'Crypto-assets must be stored/held/maintained by custodian',
      'Client does not control private keys directly (custodian does)',
      'Property law status of crypto-assets unclear in Bahrain',
      'Reliance on custodian solvency and compliance',
      'Shariah compliance uncertain for some crypto-assets'
    ],

    tokenizationSuitability: {
      currentState: 'Operational framework for crypto-custody',
      blockchainReadiness: 'High - designed for DLT-based assets',
      challenges: [
        'Property law recognition of crypto-assets pending',
        'Custodian model creates intermediation (not pure tokenization)',
        'Shariah compliance framework evolving',
        'Good faith purchaser protections unclear'
      ],
      opportunities: [
        'Clear regulatory path for crypto-custody',
        'Licensed custodians provide institutional-grade security',
        'Precedent: Rain Financial, CoinMENA successfully licensed',
        'CBB regulatory sandbox for innovation'
      ]
    },

    sources: [
      'CBB Crypto-Asset Module (2019, amended 2023)',
      'CBB Rulebook Vol. 6 - CRA-4.12 Crypto-asset Custody',
      'CBB Rulebook Vol. 6 - CRA-4.13 Key Management and Wallet Storage',
      'CBB Volume 4 Amendments - AU Module for Crypto-Asset Rules'
    ]
  },

  {
    id: 'real-estate-registry',
    name: 'MOIC Property Registration System',
    type: 'property-registry',
    operator: 'Ministry of Industry and Commerce (MOIC) - Survey and Land Registration Bureau',
    description: 'Official title registration system for real estate ownership in Bahrain, operated by MOIC under Property Registration Law (2013)',

    legalBasis: {
      primaryLaw: 'Property Registration Law (Law 13/2013)',
      establishedDate: '2013',
      regulatoryAuthority: 'Ministry of Industry and Commerce (MOIC)',
      specificProvisions: [
        'Law No. 13 of 2013 - Property Registration Law',
        'Law No. 27 of 2017 - Real Estate Regulatory Act',
        'RERA (Real Estate Regulatory Authority) oversight',
        'Civil Code (2001) - property rights framework',
        'Foreign ownership designated areas (Decree No. 2 of 2001)',
        'GCC nationals full ownership rights (Law No. 40 of 1999)'
      ]
    },

    registrationMechanism: {
      method: 'Physical title deed registration at MOIC',
      recordKeeper: 'MOIC Survey and Land Registration Bureau',
      accessRequirements: [
        'Notarized title deed required',
        'Registration at MOIC Survey and Land Registration Bureau',
        'Foreign ownership restricted to designated freehold areas',
        'GCC nationals: unrestricted ownership',
        'Payment of registration fees'
      ],
      publicVisibility: false,
      searchability: 'Title search available via MOIC'
    },

    settlementProcess: {
      cycle: 'Upon registration (manual process)',
      method: 'Notarized deed transfer + MOIC registration',
      finality: 'Final upon MOIC registration',
      details: [
        'Buyer and seller execute notarized deed',
        'Deed submitted to MOIC for registration',
        'MOIC updates property registry',
        'Registered title deed issued to new owner',
        'Settlement timing varies (typically days/weeks)'
      ]
    },

    custodyArrangements: {
      options: [
        'Direct ownership (title deed in owner name)',
        'Trust structure (if permitted)',
        'Corporate ownership (via BSC or WLL)'
      ],
      segregation: 'Not applicable - direct ownership',
      protections: [
        'Civil Code Art. 19/2001 - good faith purchaser protections',
        'Registered title is authoritative record',
        'RERA oversight of real estate sector',
        'Legal recourse for title disputes'
      ]
    },

    acpBinding: {
      bindingStrength: 'Strong',
      necessaryCondition: true,
      sufficientCondition: true,
      analysis: [
        'MOIC registry is authoritative control point for real estate',
        'Notarization necessary but not sufficient (requires MOIC registration)',
        'Registration is both necessary AND sufficient for ownership transfer',
        'Good faith purchaser protections rely on registry',
        'Legal title follows registered deed',
        'Unregistered transfers do not confer legal ownership'
      ]
    },

    limitations: [
      'Manual registration process (not digital)',
      'No blockchain integration',
      'Foreign ownership restrictions',
      'Settlement time variable (not instant)',
      'Physical deed custody required'
    ],

    tokenizationSuitability: {
      currentState: 'Traditional paper-based registry',
      blockchainReadiness: 'Low - requires legal and technical reform',
      challenges: [
        'Property law does not recognize tokenized title',
        'MOIC registration system not digitized for blockchain',
        'Notarization requirement not blockchain-compatible',
        'Foreign ownership restrictions complicate tokenization',
        'Legal framework assumes physical deed'
      ],
      opportunities: [
        'REIT structure provides indirect tokenization path',
        'MOIC could potentially digitize registry',
        'CBB fintech-forward approach could support innovation',
        'Civil Code good faith protections could extend to tokenized interests'
      ]
    },

    sources: [
      'Property Registration Law (Law 13/2013)',
      'Real Estate Regulatory Act (Law 27/2017)',
      'Civil Code (2001)',
      'MOIC Survey and Land Registration Bureau',
      'RERA (Real Estate Regulatory Authority)'
    ]
  },

  {
    id: 'electronic-records-framework',
    name: 'Electronic Communications and Transactions Framework',
    type: 'electronic-records',
    operator: 'Legal framework (no centralized operator)',
    description: 'Legal recognition of electronic signatures, records, and communications under Electronic Communications and Transactions Law (2018)',

    legalBasis: {
      primaryLaw: 'Electronic Communications and Transactions Law (Decree 54/2018)',
      establishedDate: '2018 (replaced 2002 law)',
      regulatoryAuthority: 'Ministry of Legal Affairs',
      specificProvisions: [
        'Legislative Decree No. 54 of 2018',
        'Legal recognition of electronic signatures',
        'Legal recognition of electronic records',
        'Legal recognition of electronic communications',
        'Electronic contracts validity',
        'Replaced 2002 Electronic Transactions Law'
      ]
    },

    registrationMechanism: {
      method: 'Electronic record creation and signature',
      recordKeeper: 'Varies by application (parties, service providers, registries)',
      accessRequirements: [
        'Electronic signature compliance',
        'Integrity of electronic record',
        'Accessibility and usability',
        'Retention requirements'
      ],
      publicVisibility: false,
      searchability: 'Varies by system'
    },

    legalRecognition: {
      electronicSignatures: 'Legally valid and enforceable',
      electronicRecords: 'Admissible as evidence',
      electronicContracts: 'Binding and enforceable',
      limitations: [
        'Some transactions may require specific formalities',
        'Cross-border recognition depends on reciprocity',
        'Security and authentication requirements must be met'
      ]
    },

    acpBinding: {
      bindingStrength: 'Medium - enables but does not guarantee ACP binding',
      necessaryCondition: false,
      sufficientCondition: false,
      analysis: [
        'Electronic records law enables digital tokenization',
        'Does not replace sector-specific registration requirements',
        'Facilitates electronic documentation but not substitute for authoritative registries',
        'Smart contracts could be recognized as electronic contracts',
        'Electronic signatures support but do not replace legal title systems',
        'Complementary to other control frameworks, not standalone ACP'
      ]
    },

    tokenizationSuitability: {
      currentState: 'Enabling framework for electronic transactions',
      blockchainReadiness: 'High - legally supports electronic records',
      challenges: [
        'Does not override sector-specific registration requirements',
        'Blockchain immutability vs. record amendment rights',
        'Cross-border enforceability',
        'Authentication standards for blockchain signatures'
      ],
      opportunities: [
        'Legal foundation for smart contracts',
        'Electronic records law supports tokenization documentation',
        'Electronic signatures enable digital asset transfers',
        'Complements CBB Crypto-Asset Module'
      ]
    },

    sources: [
      'Electronic Communications and Transactions Law (Decree 54/2018)',
      'Ministry of Legal Affairs'
    ]
  }
];
