import { Citation } from '../types';

/**
 * Islamic Finance Framework for Tokenization Legal Database
 *
 * This module provides comprehensive Islamic finance standards, principles, and structures
 * applicable to tokenization projects across Qatar, Bahrain, and Malaysia.
 *
 * Sources: AAOIFI, IFSB, academic research, and industry best practices.
 */

// ============================================================================
// AAOIFI STANDARDS
// ============================================================================

export const AAOIFI_STANDARDS = {
  standard17: {
    name: 'AAOIFI Shariah Standard No. 17 - Investment Sukuk',
    scope: 'Original sukuk standard covering various Islamic structures',
    keyPrinciples: [
      'Sukuk represent undivided shares in ownership of tangible assets, usufructs and services',
      'Sukuk holders must have ownership rights in underlying assets',
      'Returns must derive from asset ownership, not guaranteed interest',
      'Asset-based structures must involve genuine asset transfer'
    ],
    relevanceToTokenization: 'Provides foundational framework for asset-backed digital securities',
    citation: 'AAOIFI Shariah Standard No. 17 (2003, updated periodically)'
  },

  standard62: {
    name: 'AAOIFI Shariah Standard No. 62 - Sukuk (Proposed)',
    scope: 'Comprehensive update emphasizing true asset ownership and risk-sharing',
    keyRequirements: [
      'TRUE ASSET OWNERSHIP: Legal title transfer required, not just beneficial ownership',
      'GENUINE RISK-SHARING: Sukuk holders must bear actual asset risks',
      'ASSET-BACKED (not asset-based): Full legal ownership transfer via SPV required',
      'Enhanced transparency in underlying asset identification',
      'Prohibition of practices resembling conventional lending'
    ],
    tokenizationImplications: [
      'Digital tokens must represent genuine legal ownership of underlying assets',
      'Smart contracts must enforce true asset transfer, not symbolic representation',
      'Token holders must have enforceable legal rights to underlying assets',
      'Asset custody must be clearly defined and Shariah-compliant',
      'Speculative trading without asset backing prohibited'
    ],
    status: 'Under consultation (2023-2025), expected implementation with transition periods',
    citation: 'AAOIFI Shariah Standard No. 62 Exposure Draft (2023-2025)'
  },

  standard59: {
    name: 'AAOIFI Shariah Standard No. 59 - Sale of Debt',
    scope: 'Requirements for sale and trading of debt instruments',
    keyPrinciples: [
      'Debt cannot be traded except at par value',
      'Debt-based sukuk (e.g., Murabaha) are non-tradable in secondary markets',
      'Only asset-ownership sukuk (e.g., Ijarah) are tradable',
      'Minimum tangible asset requirement: 51% of portfolio value'
    ],
    tokenizationImplications: [
      'Debt-token structures face severe trading restrictions',
      'Asset-backed tokens must maintain 51% tangible asset backing',
      'Secondary market liquidity requires equity/ownership structures'
    ],
    citation: 'AAOIFI Shariah Standard No. 59 (2018)'
  },

  standard62Concerns: {
    marketImpact: 'Could transform $1 trillion sukuk market; may reduce issuance short-term',
    ratingConcerns: 'Fitch Ratings warns equity-like structures may become un-ratable as fixed-income',
    implementationChallenges: [
      'Governments may resist transferring state assets',
      'Corporate issuers may balk at shrinking balance sheets',
      'Existing sukuk structures may require restructuring',
      'Market liquidity could be impacted during transition'
    ]
  }
};

// ============================================================================
// IFSB STANDARDS
// ============================================================================

export const IFSB_STANDARDS = {
  digitalisation: {
    name: 'IFSB Digitalisation Platform',
    established: '2024',
    themes: [
      'Digital Islamic Financial Services',
      'Central Bank Digital Currencies (CBDCs)',
      'Financial Technologies (Fintech)',
      'Cryptoassets',
      'Suptech and Regtech',
      'Sustainability',
      'DeFi Markets'
    ],
    objectives: [
      'Monitor critical trends in digitalisation affecting Islamic finance',
      'Foster cooperation among regulators, supervisors, and industry experts',
      'Guide standard-setting for digital transformation',
      'Ensure stability and resilience of digital Islamic finance'
    ]
  },

  workingPapers: {
    wp27: {
      name: 'IFSB Working Paper 27 - Regulatory Practices in Digital Islamic Banking',
      year: '2023',
      keyFindings: [
        'Blockchain enhances transparency and reduces gharar (uncertainty)',
        'Smart contracts can automate Shariah compliance verification',
        'Digital platforms must maintain ethical Islamic finance principles',
        'Regulatory frameworks need updating for fintech innovations'
      ]
    }
  },

  technicalNotes: {
    tn3: {
      name: 'IFSB Technical Note 3 - Financial Inclusion and Islamic Finance',
      year: '2019',
      relevance: 'Tokenization can democratize access to Shariah-compliant investments',
      principles: [
        'Promote access to Islamic financial services',
        'Leverage technology for financial inclusion',
        'Maintain Shariah compliance in digital offerings'
      ]
    }
  },

  prudentialStandards: {
    ifsb1: 'Risk Management for Islamic Financial Institutions',
    ifsb2: 'Capital Adequacy Standards for Islamic Financial Institutions',
    ifsb10: 'Shariah Governance System for Islamic Financial Institutions',
    relevanceToTokenization: 'Risk management frameworks apply to tokenized Islamic products'
  }
};

// ============================================================================
// CORE SHARIAH PRINCIPLES FOR TOKENIZATION
// ============================================================================

export const SHARIAH_PRINCIPLES = {
  riba: {
    name: 'Prohibition of Riba (Interest/Usury)',
    definition: 'Any predetermined, guaranteed return on capital without genuine risk-sharing',
    quranicBasis: 'Quran 2:275-280, 3:130, 4:161',
    applicationToTokenization: {
      prohibited: [
        'Fixed interest payments on tokens',
        'Guaranteed returns disconnected from asset performance',
        'Lending tokens for interest (crypto lending platforms)',
        'Interest-bearing stablecoins or yield-farming on interest',
        'Staking mechanisms that guarantee fixed returns'
      ],
      permitted: [
        'Profit-sharing based on actual business performance',
        'Rental income from tangible assets (Ijarah-based tokens)',
        'Trading profit from halal business activities',
        'Variable returns reflecting genuine risk exposure'
      ],
      tokenizationRisks: [
        'DeFi lending protocols often involve interest (riba)',
        'Yield aggregators may pool interest-bearing assets',
        'Liquidity mining rewards may constitute guaranteed interest',
        'Fractional reserve mechanisms in some protocols'
      ]
    }
  },

  gharar: {
    name: 'Prohibition of Gharar (Excessive Uncertainty)',
    definition: 'Uncertainty in subject matter, price, delivery, or ownership that could lead to disputes',
    quranicBasis: 'Hadith: "The Prophet forbade the sale of what is not with you" (Tirmidhi)',
    applicationToTokenization: {
      prohibited: [
        'Tokens with undefined or speculative underlying assets',
        'Unclear ownership rights or asset representation',
        'Uncertain redemption mechanisms',
        'Ambiguous smart contract terms',
        'Derivatives and options (most forms)',
        'Oracle-dependent outcomes with excessive uncertainty'
      ],
      permitted: [
        'Clearly defined asset-backed tokens',
        'Transparent smart contracts with deterministic execution',
        'Well-documented ownership and redemption rights',
        'Verified oracle data with minimal uncertainty',
        'Clear governance and dispute resolution mechanisms'
      ],
      tokenizationChallenges: [
        'Smart contract bugs create uncertainty (gharar)',
        'Oracle failures introduce price/data uncertainty',
        'Volatile crypto markets may create excessive price gharar',
        'Complex DeFi protocols may obscure underlying risks',
        'Lack of standardized token documentation'
      ],
      mitigation: [
        'Professional smart contract audits',
        'Multiple reliable oracle sources',
        'Clear legal documentation linking tokens to assets',
        'Transparent governance and upgrade mechanisms',
        'Shariah-compliant oracles with verification processes'
      ]
    }
  },

  maysir: {
    name: 'Prohibition of Maysir (Gambling/Speculation)',
    definition: 'Games of chance, gambling, or pure speculation without productive economic activity',
    quranicBasis: 'Quran 2:219, 5:90-91',
    applicationToTokenization: {
      prohibited: [
        'Gambling dApps and prediction markets',
        'Purely speculative tokens with no underlying assets',
        'High-leverage trading (e.g., 100x futures)',
        'Lottery-based token distributions',
        'Random NFT minting with gambling mechanics',
        'Speculative derivatives without hedging purpose'
      ],
      permitted: [
        'Investment in productive assets with genuine value',
        'Hedging strategies for risk management (not speculation)',
        'Trade of real assets or asset-backed tokens',
        'Business equity tokens representing real ownership'
      ],
      distinguishingCriteria: [
        'Intent: Investment vs. gambling',
        'Asset backing: Real economic value vs. pure speculation',
        'Risk level: Calculated investment risk vs. gambling odds',
        'Purpose: Wealth creation vs. chance-based gain'
      ],
      tokenizationGuidance: [
        'Tokens must represent real economic value',
        'Speculative trading discouraged; long-term investment encouraged',
        'Leverage should be minimal and purpose-driven',
        'Avoid purely chance-based distribution mechanisms'
      ]
    }
  },

  assetBacking: {
    name: 'Asset Backing Requirement',
    principle: 'Islamic finance requires real asset backing; money cannot generate money alone',
    requirements: {
      tangibleAssets: 'At least 51% of portfolio value must be tangible assets for tradeability',
      realEconomicActivity: 'Investments must support productive economic activity',
      avoidSpeculativePaper: 'Cannot trade purely financial papers without underlying assets'
    },
    applicationToTokenization: {
      required: [
        'Tokens must represent identifiable, real-world assets',
        'Clear link between token value and underlying asset value',
        'Assets must be Shariah-compliant (halal businesses)',
        'Physical or usufruct assets preferred over pure financial rights'
      ],
      assetTypes: {
        highlyCompliant: [
          'Real estate (residential, commercial)',
          'Physical commodities (gold, silver, agricultural products)',
          'Equipment and machinery (for Ijarah)',
          'Inventory and trade goods',
          'Infrastructure projects'
        ],
        conditionallyCompliant: [
          'Equity in Shariah-compliant businesses (after screening)',
          'Intellectual property (if clearly valued and traded)',
          'Usufruct rights (rental income streams)'
        ],
        nonCompliant: [
          'Interest-bearing bonds or loans',
          'Conventional derivatives',
          'Equity in non-Shariah-compliant businesses (alcohol, gambling, pork, etc.)',
          'Pure fiat currency without commodity backing (for cryptocurrencies)'
        ]
      },
      tokenizationStructures: [
        'Fractionalized real estate ownership tokens',
        'Commodity-backed stablecoins (gold, silver)',
        'Sukuk tokens representing asset pools',
        'Equity tokens in halal businesses',
        'Ijarah (lease) income-sharing tokens'
      ]
    }
  },

  ownership: {
    name: 'Genuine Ownership and Control',
    principle: 'Valid Islamic transactions require true transfer of ownership and risk',
    requirements: {
      legalOwnership: 'Investors must have legal title or beneficial ownership rights',
      riskBearing: 'Owners must bear the risk of asset loss or damage',
      controlRights: 'Owners should have governance/control rights proportional to ownership'
    },
    applicationToTokenization: {
      criticalIssues: [
        'Tokens must convey enforceable legal ownership rights',
        'Smart contract ownership != legal ownership without proper documentation',
        'Custody arrangements must preserve investor rights',
        'Token holders must bear genuine asset risks'
      ],
      bestPractices: [
        'Legal documentation linking tokens to asset ownership',
        'Registered ownership structures (e.g., SPV, trust)',
        'Clear governance rights for token holders',
        'Transparent custody and asset management arrangements',
        'Risk-sharing mechanisms aligned with Shariah'
      ],
      redFlags: [
        'Tokens claiming ownership without legal framework',
        'Issuer retains all control despite token sale',
        'No genuine risk transfer to token holders',
        'Unclear or contested ownership claims'
      ]
    }
  },

  halalBusiness: {
    name: 'Halal Business Activities',
    prohibitedSectors: [
      'Alcohol production or sale',
      'Pork-related products',
      'Gambling and casinos',
      'Conventional financial services (interest-based)',
      'Tobacco',
      'Pornography and adult entertainment',
      'Weapons manufacturing (controversial)',
      'Music and entertainment (stricter interpretations)'
    ],
    screeningCriteria: {
      businessActivity: 'Less than 5% revenue from non-compliant activities',
      debtLevels: 'Total debt to total assets < 33%',
      interestIncome: 'Interest income < 5% of total revenue',
      liquidAssets: 'Cash + interest-bearing securities < 33% of total assets'
    },
    applicationToTokenization: [
      'Underlying businesses must pass Shariah screening',
      'Revenue purification required if minor non-compliant income exists',
      'Regular monitoring and re-certification needed',
      'Token issuers should provide Shariah compliance certificates'
    ]
  }
};

// ============================================================================
// SHARIAH-COMPLIANT STRUCTURES FOR TOKENIZATION
// ============================================================================

export const COMPLIANT_STRUCTURES = {
  sukuk: {
    name: 'Sukuk (Islamic Bonds/Certificates)',
    definition: 'Certificates representing proportional ownership in assets, usufructs, or services',
    types: {
      ijarah: {
        name: 'Sukuk al-Ijarah (Lease-based)',
        structure: 'Investors own asset and lease it to user; receive rental income',
        tokenizationUse: 'Most suitable for tokenization; represents ownership of leased assets',
        example: 'Tokenized real estate with rental income distribution',
        tradability: 'Fully tradable (ownership-based)',
        compliance: 'Highly compliant; most popular sukuk structure'
      },
      mudarabah: {
        name: 'Sukuk al-Mudarabah (Profit-sharing partnership)',
        structure: 'Investors (rabb-al-mal) provide capital; manager (mudarib) manages; profits shared per agreement',
        tokenizationUse: 'Venture capital or business financing tokens',
        example: 'Tokenized investment fund with professional management',
        tradability: 'Tradable (represents partnership equity)',
        profitSharing: 'Pre-agreed ratio (e.g., 70/30); losses borne by capital provider only'
      },
      musharakah: {
        name: 'Sukuk al-Musharakah (Joint venture partnership)',
        structure: 'All partners contribute capital and share profits/losses proportionally',
        tokenizationUse: 'Equity-like tokens for business projects',
        example: 'Tokenized infrastructure project with shared ownership',
        tradability: 'Tradable (represents equity ownership)',
        riskSharing: 'All partners bear losses proportional to capital contribution'
      },
      murabaha: {
        name: 'Sukuk al-Murabaha (Cost-plus sale)',
        structure: 'Issuer purchases asset and sells to investor at cost + profit margin on deferred payment',
        tokenizationUse: 'Trade finance and working capital tokens',
        tradability: 'NON-TRADABLE (debt-based) - can only be sold at par',
        limitation: 'Restricted secondary market liquidity'
      },
      istisna: {
        name: 'Sukuk al-Istisna (Manufacturing/construction)',
        structure: 'Financing for construction or manufacturing; payment staged as work progresses',
        tokenizationUse: 'Project finance for construction/manufacturing',
        tradability: 'NON-TRADABLE during construction; may become tradable post-completion',
        example: 'Tokenized infrastructure development project'
      },
      salam: {
        name: 'Sukuk al-Salam (Forward purchase)',
        structure: 'Advance payment for future delivery of commodities',
        tokenizationUse: 'Agricultural or commodity financing',
        tradability: 'Limited (debt-like characteristics)',
        restriction: 'Cannot sell Salam commodity before taking possession'
      }
    },
    smartSukuk: {
      concept: 'Blockchain-based sukuk using smart contracts for issuance and management',
      benefits: [
        'Fractional ownership enabling retail investors',
        'Automated profit/rental distribution',
        'Enhanced transparency via blockchain',
        'Reduced issuance costs and intermediaries',
        'Real-time settlement and transfer',
        'Programmable compliance checks'
      ],
      challenges: [
        'Legal recognition of tokenized sukuk',
        'Custody and asset ownership verification',
        'Smart contract risks (bugs, vulnerabilities)',
        'Regulatory compliance across jurisdictions',
        'Shariah board oversight mechanisms'
      ],
      examples: [
        'Blossom Finance SmartSukuk (2019) - world\'s first blockchain sukuk',
        'Malaysia digital sukuk initiatives',
        'GCC tokenized sukuk pilot programs'
      ]
    }
  },

  murabaha: {
    name: 'Murabaha (Cost-Plus Financing)',
    structure: 'Bank purchases asset, sells to customer at cost + disclosed profit margin; deferred payment',
    tokenizationApplication: {
      tradeFinance: 'Tokenize Murabaha receivables for working capital',
      supplyChain: 'Finance inventory purchases via tokenized Murabaha',
      limitation: 'Tokens would be non-tradable (debt-based)'
    },
    shariahRequirements: [
      'Bank must take actual ownership before resale',
      'Asset must exist and be identifiable',
      'Price and profit margin must be disclosed',
      'Asset must be delivered before payment due'
    ]
  },

  ijarah: {
    name: 'Ijarah (Leasing)',
    structure: 'Lessor owns asset, leases to lessee for rental income; may include purchase option',
    tokenizationApplication: {
      realEstate: 'Fractionalized property ownership with rental income tokens',
      equipment: 'Tokenized equipment leasing portfolios',
      vehicles: 'Car leasing portfolios as investment tokens'
    },
    types: {
      operatingLease: 'Pure rental; no ownership transfer',
      ijarahMuntahia: 'Lease ending in ownership transfer (lease-to-own)'
    },
    advantages: 'Highly compatible with tokenization; clear ownership and income streams'
  },

  musharakah: {
    name: 'Musharakah (Partnership/Joint Venture)',
    structure: 'Partners contribute capital; share profits per agreement; losses shared per capital ratio',
    types: {
      permanent: 'Ongoing business partnership',
      diminishing: 'Partner gradually buys out Islamic bank\'s share'
    },
    tokenizationApplication: {
      equity: 'Business equity tokens with profit-sharing',
      projectFinance: 'Infrastructure or real estate development tokens',
      diminishingMusharakah: 'Home financing tokens with gradual ownership transfer'
    },
    governance: 'Token holders may have voting rights proportional to holdings'
  },

  mudarabah: {
    name: 'Mudarabah (Profit-Sharing Partnership)',
    structure: 'Investor (rabb-al-mal) provides capital; entrepreneur (mudarib) provides expertise',
    profitSharing: 'Predetermined ratio (e.g., 80/20); losses borne by capital provider',
    tokenizationApplication: {
      ventureCapital: 'Tokenized VC funds with professional management',
      islamicFunds: 'Mutual fund tokens managed by expert fund managers',
      businessFinancing: 'Startup or SME financing via investment tokens'
    },
    shariahRules: [
      'Mudarib cannot guarantee capital or profits',
      'Profit ratio predetermined; actual profit amount unknown until realization',
      'Mudarib responsible for negligence or misconduct',
      'Capital provider bears losses unless due to mudarib misconduct'
    ]
  },

  tawarruq: {
    name: 'Tawarruq (Reverse Murabaha for Liquidity)',
    structure: 'Customer buys commodity on deferred payment, immediately sells for cash at lower price',
    purpose: 'Obtaining liquidity (controversial; some scholars prohibit)',
    tokenizationUse: 'Limited; primarily for liquidity management',
    controversy: 'Organized tawarruq criticized as circumventing riba prohibition'
  },

  wakalah: {
    name: 'Wakalah (Agency)',
    structure: 'Principal appoints agent to act on behalf for specific task; agent receives fee',
    tokenizationApplication: {
      assetManagement: 'Tokenized investment funds with professional management',
      investmentWakalah: 'Agent invests on behalf of token holders for fixed fee + performance bonus'
    },
    types: {
      investmentWakalah: 'Agent invests pooled funds; may earn performance incentive',
      serviceWakalah: 'Agent provides service for fixed fee'
    },
    advantages: 'Clear fiduciary duties; suitable for managed investment tokens'
  },

  hybridStructures: {
    name: 'Hybrid and Multi-Asset Sukuk',
    concept: 'Combine multiple Islamic structures in single sukuk/token offering',
    example: 'Portfolio of Ijarah (60%) + Murabaha (30%) + Musharakah (10%)',
    requirements: [
      'Minimum 51% tangible assets for tradeability (per Standard 59)',
      'Clear segregation of asset pools',
      'Separate accounting for each structure type',
      'Proper risk allocation per structure'
    ],
    tokenizationBenefit: 'Diversified exposure while maintaining Shariah compliance'
  }
};

// ============================================================================
// SHARIAH RISKS IN TOKENIZATION
// ============================================================================

export const SHARIAH_RISKS = {
  cryptocurrency: {
    risk: 'Most cryptocurrencies lack asset backing and involve speculation',
    concerns: [
      'No intrinsic value or underlying asset (violates asset backing principle)',
      'Extreme volatility may constitute gharar',
      'Speculative trading resembles maysir',
      'Some use in illegal activities (haram purposes)',
      'Lack of central authority raises governance concerns'
    ],
    scholarlyDivisions: {
      permissive: [
        'Sheikh Abdullah bin Sulaiman al-Manea: Bitcoin is halal (like digital gold)',
        'Some scholars accept it as medium of exchange',
        'Utility tokens for halal purposes may be acceptable'
      ],
      restrictive: [
        'Mufti Taqi Usmani: Cryptocurrencies are haram due to volatility and speculation',
        'Lack of asset backing violates Islamic finance principles',
        'Gharar from price uncertainty'
      ],
      conditional: [
        'Acceptable if backed by tangible assets (e.g., gold-backed tokens)',
        'Permissible for utility within halal ecosystems',
        'Requires Shariah board certification'
      ]
    }
  },

  defi: {
    risk: 'Most DeFi protocols involve interest-based lending and excessive speculation',
    prohibitedActivities: [
      'Lending and borrowing with interest (Aave, Compound)',
      'Yield farming from interest-bearing pools',
      'Liquidity mining rewards based on interest',
      'Leveraged trading and derivatives',
      'Algorithmic stablecoins without asset backing'
    ],
    potentialSolutions: [
      'Profit-sharing pools instead of interest',
      'Asset-backed DeFi using Ijarah or Musharakah structures',
      'Shariah-compliant oracles and governance',
      'Islamic DeFi protocols (e.g., HAQQ Network, Marhaba DeFi)',
      'Commodity-backed stablecoins'
    ]
  },

  smartContracts: {
    risk: 'Smart contract bugs and vulnerabilities create uncertainty (gharar)',
    concerns: [
      'Code bugs may cause loss of funds',
      'Oracle failures introduce data uncertainty',
      'Upgradeable contracts create ambiguity in terms',
      'Complex logic may obscure actual transaction terms',
      'Lack of Shariah expertise in development teams'
    ],
    mitigation: [
      'Professional audits by recognized firms',
      'Shariah board review of contract logic',
      'Formal verification methods',
      'Simple, transparent contract designs',
      'Multi-sig governance with Shariah scholars'
    ]
  },

  stablecoins: {
    risk: 'Most stablecoins use interest-bearing reserves or algorithmic mechanisms',
    types: {
      fiatCollateralized: {
        example: 'USDC, USDT',
        concern: 'Reserves often held in interest-bearing accounts (riba)',
        shariahCompliant: 'Only if reserves in non-interest bearing accounts or Shariah-compliant investments'
      },
      cryptoCollateralized: {
        example: 'DAI',
        concern: 'Over-collateralization and liquidation mechanisms may involve gharar',
        evaluation: 'Case-by-case analysis required'
      },
      commodityBacked: {
        example: 'PAXG (gold), XSGD (Singapore dollar)',
        shariahCompliant: 'Generally acceptable if commodity is halal and fully backed',
        preferred: 'Gold and silver-backed tokens highly compatible'
      },
      algorithmic: {
        example: 'TerraUSD (failed), Frax',
        concern: 'Lack of asset backing, speculative mechanisms',
        shariahCompliant: 'Generally non-compliant due to gharar and lack of backing'
      }
    }
  },

  nfts: {
    risk: 'Many NFTs involve speculation, gambling mechanics, or haram content',
    concerns: [
      'Speculative trading without underlying value (maysir)',
      'Random minting mechanics (gambling)',
      'Representation of haram content (art depicting prohibited items)',
      'Excessive price volatility and uncertainty (gharar)'
    ],
    permissibleUses: [
      'Digital representation of real asset ownership (real estate deeds)',
      'Intellectual property rights for halal content',
      'Certificates of authenticity for physical goods',
      'Educational or cultural content (halal)',
      'Identity and credentialing systems'
    ]
  },

  governance: {
    risk: 'Lack of Shariah governance in blockchain projects',
    requirements: [
      'Shariah Supervisory Board (SSB) for ongoing compliance',
      'Regular Shariah audits of operations',
      'Fatwa documentation for novel structures',
      'Compliance monitoring and reporting',
      'Dispute resolution mechanisms aligned with Shariah'
    ],
    challenges: [
      'Decentralized governance vs. need for Shariah authority',
      'Cost of maintaining SSB for smaller projects',
      'Differing scholarly opinions across jurisdictions',
      'Speed of innovation vs. Shariah review processes'
    ]
  }
};

// ============================================================================
// CITATIONS AND REFERENCES
// ============================================================================

export const ISLAMIC_FINANCE_CITATIONS: Citation[] = [
  {
    title: 'AAOIFI Shariah Standard No. 17 - Investment Sukuk',
    source: 'Accounting and Auditing Organization for Islamic Financial Institutions',
    year: '2003 (updated periodically)',
    url: 'https://aaoifi.com/shariah-standards/',
    jurisdiction: 'International - Qatar, Bahrain, UAE, Malaysia, others',
    relevance: 'Foundational standard for Islamic securities and sukuk structures',
    citation: 'AAOIFI Shariah Standard No. 17 (2003)'
  },
  {
    title: 'AAOIFI Shariah Standard No. 62 - Sukuk (Exposure Draft)',
    source: 'Accounting and Auditing Organization for Islamic Financial Institutions',
    year: '2023-2025',
    url: 'https://aaoifi.com/',
    jurisdiction: 'International - under consultation',
    relevance: 'Transformative standard requiring true asset ownership for sukuk; critical for tokenization',
    citation: 'AAOIFI Shariah Standard No. 62 Exposure Draft (2023-2025)'
  },
  {
    title: 'AAOIFI Shariah Standard No. 59 - Sale of Debt',
    source: 'Accounting and Auditing Organization for Islamic Financial Institutions',
    year: '2018',
    url: 'https://aaoifi.com/',
    jurisdiction: 'International',
    relevance: 'Restrictions on debt trading; 51% tangible asset requirement for tradability',
    citation: 'AAOIFI Shariah Standard No. 59 (2018)'
  },
  {
    title: 'IFSB Digitalisation Platform',
    source: 'Islamic Financial Services Board',
    year: '2024',
    url: 'https://www.ifsb.org/digitalisation-platform/',
    jurisdiction: 'International - 188 members across 57 jurisdictions',
    relevance: 'Framework for digital Islamic financial services including cryptoassets and DeFi',
    citation: 'IFSB Digitalisation Platform (2024)'
  },
  {
    title: 'IFSB Working Paper 27 - Regulatory Practices in Digital Islamic Banking',
    source: 'Islamic Financial Services Board',
    year: '2023',
    url: 'https://www.ifsb.org/wp-content/uploads/2023/12/WP-27-Regulatory-Practices-in-Digital-Islamic-Banking.pdf',
    jurisdiction: 'International',
    relevance: 'Blockchain and fintech applications in Islamic finance',
    citation: 'IFSB Working Paper No. 27 (December 2023)'
  },
  {
    title: 'Asset Tokenization in Islamic Finance: Historical Perspectives, Sukuk Innovations, and Shariah-Compliant Blockchain',
    source: 'Dr. Hafiz Moazzum Shah, Pakistan Research Journal of Social Sciences',
    year: '2024',
    url: 'https://prjss.com/index.php/prjss/article/view/202',
    jurisdiction: 'Academic research',
    relevance: 'Comprehensive analysis of tokenization in Islamic finance context',
    citation: 'Shah, H.M. (2024). Asset Tokenization in Islamic Finance. PRJSS, 3(3)'
  },
  {
    title: 'Tokenization of Sukuk: Ethereum Case Study',
    source: 'C. Agbo et al., Global Finance Journal',
    year: '2022',
    url: 'https://www.sciencedirect.com/science/article/pii/S1044028319303552',
    jurisdiction: 'Academic research',
    relevance: 'First academic study on blockchain-based sukuk tokenization',
    citation: 'Agbo, C. et al. (2022). Tokenization of sukuk: Ethereum case study. Global Finance Journal'
  },
  {
    title: 'Islamic Finance and Digital Currencies: Shariah Perspectives on Cryptocurrency and Blockchain',
    source: 'Jahangir, H.A., Jamil, M.W., Akhlaq, M., ResearchGate',
    year: '2025',
    url: 'https://www.researchgate.net/publication/392408209',
    jurisdiction: 'Academic research',
    relevance: 'Shariah analysis of cryptocurrencies, riba, gharar, and maysir in digital context',
    citation: 'Jahangir et al. (2025). Islamic Finance and Digital Currencies. ResearchGate'
  },
  {
    title: 'Blockchain and Smart Contracts: A New Era for Shariah-Compliant Finance',
    source: 'Islamic Finance Review',
    year: '2025',
    url: 'https://islamicfinancereview.co.uk/blockchain-in-islamic-finance-smart-contracts-shariah-compliance/',
    jurisdiction: 'Industry publication',
    relevance: 'Smart contract applications in reducing gharar and enhancing transparency',
    citation: 'Islamic Finance Review (2025). Blockchain and Smart Contracts'
  },
  {
    title: 'On the Permissibility of Bitcoin in Islam',
    source: 'Christopher Bendiksen, CoinShares Research',
    year: '2025',
    url: 'https://coinshares.com/us/insights/research-data/on-the-permissibility-of-bitcoin-in-islam/',
    jurisdiction: 'Industry research',
    relevance: 'Detailed Shariah analysis of cryptocurrency permissibility and scholarly opinions',
    citation: 'Bendiksen, C. (2025). On the Permissibility of Bitcoin in Islam. CoinShares'
  },
  {
    title: 'AAOIFI Shariah Standard No. 62: Much Ado About Nothing?',
    source: 'Baker McKenzie Insight',
    year: '2024',
    url: 'https://insightplus.bakermckenzie.com/bm/banking-finance_1/united-arab-emirates-shariah-standard-62',
    jurisdiction: 'UAE legal analysis',
    relevance: 'Impact assessment of Standard 62 on sukuk market and asset-backed requirements',
    citation: 'Baker McKenzie (2024). Shariah Standard 62 Analysis'
  },
  {
    title: 'Quran 2:275-280 - Prohibition of Riba',
    source: 'Holy Quran',
    year: '7th century CE',
    url: 'N/A',
    jurisdiction: 'Universal Islamic law',
    relevance: 'Primary source for riba (interest) prohibition',
    citation: 'Quran, Surah Al-Baqarah 2:275-280'
  },
  {
    title: 'Hadith on Gharar - Prohibition of Uncertainty in Sales',
    source: 'Sahih Muslim, Book of Sales',
    year: '7th century CE (compilation 9th century)',
    url: 'N/A',
    jurisdiction: 'Universal Islamic law',
    relevance: 'Primary source for gharar (uncertainty) prohibition',
    citation: 'Sahih Muslim, Book 10, Hadith 3605'
  },
  {
    title: 'Islamic DeFi: The Future of Shariah-Compliant Fintech on Blockchain',
    source: 'Rosalia Mazza, FinTech Weekly',
    year: '2025',
    url: 'https://www.fintechweekly.com/magazine/articles/islamic-decentralized-finance-defi-explained',
    jurisdiction: 'Industry analysis',
    relevance: 'Application of Islamic finance principles to DeFi protocols',
    citation: 'Mazza, R. (2025). Islamic DeFi. FinTech Weekly'
  },
  {
    title: 'Leveraging Islamic Fintech to Improve Financial Inclusion',
    source: 'World Bank Group',
    year: '2020',
    url: 'https://documents1.worldbank.org/curated/en/384361600877094703/pdf/Leveraging-Islamic-Fintech-to-Improve-Financial-Inclusion.pdf',
    jurisdiction: 'International development',
    relevance: 'Fintech and tokenization for Islamic financial inclusion',
    citation: 'World Bank (2020). Leveraging Islamic Fintech'
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Check if a business activity is Shariah-compliant based on sector
 */
export function isBusinessHalal(sector: string): boolean {
  const prohibitedSectors = SHARIAH_PRINCIPLES.halalBusiness.prohibitedSectors.map(s => s.toLowerCase());
  return !prohibitedSectors.some(prohibited => sector.toLowerCase().includes(prohibited));
}

/**
 * Get applicable Shariah principles for tokenization project
 */
export function getApplicablePrinciples(assetType: string): string[] {
  const principles = [];

  // All projects must comply with basic prohibitions
  principles.push('riba', 'gharar', 'maysir', 'halalBusiness');

  // Asset-specific principles
  if (assetType.toLowerCase().includes('real estate') ||
      assetType.toLowerCase().includes('property') ||
      assetType.toLowerCase().includes('equipment')) {
    principles.push('assetBacking', 'ownership');
  }

  return principles;
}

/**
 * Get recommended Islamic structure for asset type
 */
export function getRecommendedStructure(assetType: string, purpose: string): string[] {
  const structures = [];

  if (assetType.toLowerCase().includes('real estate')) {
    structures.push('ijarah', 'diminishingMusharakah');
  }

  if (purpose.toLowerCase().includes('equity') || purpose.toLowerCase().includes('investment')) {
    structures.push('musharakah', 'mudarabah');
  }

  if (purpose.toLowerCase().includes('lease') || purpose.toLowerCase().includes('rental')) {
    structures.push('ijarah');
  }

  if (purpose.toLowerCase().includes('trade') || purpose.toLowerCase().includes('commerce')) {
    structures.push('murabaha');
  }

  // Default recommendation
  if (structures.length === 0) {
    structures.push('ijarah', 'musharakah');
  }

  return structures;
}
