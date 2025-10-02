import { JurisdictionOverview } from '../types';

export const bahrainOverview: JurisdictionOverview = {
  id: 'bahrain',
  name: 'Kingdom of Bahrain',
  shortName: 'Bahrain',
  flag: '🇧🇭',
  description: 'GCC fintech leader with comprehensive crypto-asset regulatory framework and AAOIFI headquarters',

  legalSystem: {
    type: 'civil-shariah-hybrid',
    description: 'Civil law system with Islamic Shariah as principal source of legislation',
    keyFeatures: [
      'Constitution (2002) establishes Islamic Shariah as principal source of legislation',
      'Civil Code (2001) - comprehensive civil law framework',
      'Dual court system: Civil courts and Shariah courts',
      'AAOIFI headquarters - authoritative Islamic finance standard-setter globally',
      'Progressive interpretation balancing modernization with Islamic principles'
    ]
  },

  regulatoryBodies: [
    {
      name: 'Central Bank of Bahrain (CBB)',
      role: 'Primary financial services regulator',
      jurisdiction: 'Banking, crypto-assets, payments, capital markets',
      website: 'https://www.cbb.gov.bh',
      keyPowers: [
        'Crypto-Asset Module (CA) licensing and supervision',
        'Regulatory sandbox administration (first in GCC)',
        'RTGS and payment systems operation',
        'Open banking framework implementation',
        'FinTech & Innovation Unit oversight'
      ]
    },
    {
      name: 'Bahrain Bourse',
      role: 'Securities market operator',
      jurisdiction: 'Listed securities trading and settlement',
      website: 'https://bahrainbourse.com',
      keyPowers: [
        'Securities market supervision',
        'Bahrain Clear (CSD) operation - T+2 settlement',
        'DVP (Delivery vs Payment) model implementation',
        'Listing rules enforcement'
      ]
    },
    {
      name: 'Ministry of Industry and Commerce (MOIC)',
      role: 'Commercial registration and real estate',
      jurisdiction: 'Company registration, commercial activities, property registry',
      website: 'https://www.moic.gov.bh',
      keyPowers: [
        'Commercial registry (Sijilat system)',
        'Real estate ownership registration',
        'Business licensing',
        'Consumer protection'
      ]
    },
    {
      name: 'AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions)',
      role: 'Islamic finance standard-setter',
      jurisdiction: 'Global Islamic finance standards (headquartered in Bahrain)',
      website: 'https://aaoifi.com',
      keyPowers: [
        'Shariah standards development (62+ standards)',
        'Islamic finance accounting standards',
        'Sukuk standards (including draft Standard 62)',
        'Global authority for Shariah compliance'
      ]
    },
    {
      name: 'Labor Fund (Tamkeen)',
      role: 'Fintech ecosystem support',
      jurisdiction: 'Fintech acceleration and funding',
      website: 'https://www.tamkeen.bh'
    }
  ],

  keyLegislation: [
    {
      name: 'CBB Crypto-Asset Module (CA)',
      year: 2019,
      description: 'First comprehensive crypto-asset regulatory framework in GCC',
      status: 'active',
      significance: 'Establishes five categories of crypto-asset services licensing',
      url: 'https://www.cbb.gov.bh/wp-content/uploads/2022/08/Vol-6-CRA.pdf'
    },
    {
      name: 'CBB Law',
      year: 2006,
      description: 'Central Bank of Bahrain and Financial Institutions Law',
      status: 'active',
      significance: 'Establishes CBB authority over financial sector'
    },
    {
      name: 'Commercial Companies Law',
      year: 2001,
      description: 'Legislative Decree No. 21 of 2001 (amended 2021)',
      status: 'active',
      significance: 'Governs BSC (Bahraini Shareholding Companies) and corporate structures',
      amendments: [
        { year: 2020, description: 'Decree 28/2020 - eliminated SPCs, modernized WLL structure' },
        { year: 2021, description: 'Decree 20/2021 - further corporate governance reforms' },
        { year: 2025, description: 'Decree 38/2025 - digital transformation and accountability' }
      ]
    },
    {
      name: 'Electronic Communications and Transactions Law',
      year: 2018,
      description: 'Legislative Decree No. 54 of 2018 (replaced 2002 law)',
      status: 'active',
      significance: 'Legal recognition of electronic signatures, records, and communications',
      url: 'https://www.mola.gov.bh/MediaManager/Media/Documents/Laws/Batch3/L5418.pdf'
    },
    {
      name: 'Civil Code',
      year: 2001,
      description: 'Legislative Decree No. 19 of 2001',
      status: 'active',
      significance: 'Property rights, contracts, good faith purchaser protections'
    },
    {
      name: 'Property Registration Law',
      year: 2013,
      description: 'Law No. 13 of 2013',
      status: 'active',
      significance: 'Real estate ownership registry operated by MOIC'
    },
    {
      name: 'Real Estate Regulatory Act',
      year: 2017,
      description: 'Law No. 27 of 2017',
      status: 'active',
      significance: 'Real Estate Regulatory Authority (RERA) establishment'
    }
  ],

  economicContext: {
    gdp: 38.9, // billion USD (2023)
    population: 1.5, // million (2023)
    gdpPerCapita: 25900, // USD
    currency: {
      code: 'BHD',
      name: 'Bahraini Dinar',
      peggedTo: 'USD',
      pegRate: '0.376 BHD = 1 USD (fixed since 1980)',
      stability: 'Extremely stable due to USD peg'
    },
    keyIndustries: [
      'Financial services (largest sector)',
      'Islamic banking and sukuk',
      'FinTech and digital payments',
      'Aluminum production',
      'Petroleum refining',
      'Tourism and hospitality'
    ]
  },

  fintechEcosystem: {
    description: 'Leading GCC fintech hub with comprehensive regulatory framework',
    keyInitiatives: [
      {
        name: 'Bahrain FinTech Bay',
        description: 'Largest dedicated FinTech hub in MENA (10,000+ sq ft)',
        established: 2018,
        impact: '116+ startups incubated',
        url: 'https://www.bahrainfintechbay.com'
      },
      {
        name: 'CBB Regulatory Sandbox',
        description: 'First regulatory sandbox in GCC (launched 2017)',
        established: 2017,
        impact: 'First graduated: Rain Financial (2019)',
        url: 'https://www.cbb.gov.bh/fintech/'
      },
      {
        name: 'FinHub 973',
        description: 'CBB Digital Lab - cross-border digital innovation platform',
        established: 2019,
        impact: 'First cross-border fintech collaboration platform in region'
      },
      {
        name: 'Aber CBDC Project',
        description: 'Bahrain-UAE joint CBDC pilot (completed 2020)',
        established: 2019,
        impact: 'Successfully demonstrated cross-border wholesale CBDC settlement',
        status: 'Completed pilot - first real CBDC settlement in Gulf'
      }
    ],
    regulatorySandbox: {
      established: 2017,
      authority: 'Central Bank of Bahrain',
      testingPeriod: '12 months (extendable)',
      eligibility: 'Startups, fintechs, existing licensees (local and international)',
      successStories: [
        'Rain Financial - first licensed crypto exchange MENA (2019)',
        'CoinMENA - licensed crypto exchange',
        'Tarabut Gateway - open banking',
        'Multiple blockchain and payments solutions'
      ]
    }
  },

  shariahFramework: {
    description: 'Home to AAOIFI - global authority on Islamic finance standards',
    keyFeatures: [
      'AAOIFI headquarters in Manama since 1991',
      'CBB Shariah Supervisory Board',
      'AAOIFI Shariah standards (62+ standards) widely adopted globally',
      'Leading sukuk market - AAOIFI Standard 62 (draft) on sukuk structure',
      'Dual conventional and Islamic banking system',
      'Shariah compliance mandatory for Islamic financial institutions'
    ],
    cryptoShariahConsiderations: [
      'AAOIFI has not issued specific standard on cryptocurrencies yet',
      'CBB-licensed crypto platforms must consider Shariah compliance if targeting Islamic investors',
      'Speculation concerns with volatile cryptocurrencies',
      'Asset-backed tokens more likely Shariah-compliant',
      'Utility tokens and stablecoins under Shariah review'
    ]
  },

  riskFactors: [
    {
      category: 'market-size',
      severity: 'medium',
      description: 'Smallest population (1.5M) among four key jurisdictions',
      mitigation: 'Regional hub strategy - serves wider GCC market (60M+ population)'
    },
    {
      category: 'regulatory-clarity',
      severity: 'low',
      description: 'CBB Crypto-Asset Module provides clear framework',
      mitigation: 'Well-defined licensing categories reduce regulatory uncertainty'
    },
    {
      category: 'shariah-compliance',
      severity: 'medium',
      description: 'AAOIFI HQ sets high standards - stricter than some jurisdictions',
      mitigation: 'Clear AAOIFI guidance available; dual conventional/Islamic systems'
    },
    {
      category: 'regional-competition',
      severity: 'medium',
      description: 'UAE (DIFC, ADGM), Saudi Arabia, Qatar competing for fintech leadership',
      mitigation: 'First-mover advantage in crypto regulation; established ecosystem'
    },
    {
      category: 'currency-peg',
      severity: 'low',
      description: 'Fixed USD peg limits monetary policy flexibility',
      mitigation: 'Provides currency stability; reduces FX risk for crypto platforms'
    }
  ],

  comparisonToOtherJurisdictions: {
    strengths: [
      'First comprehensive crypto-asset regulatory framework in GCC (2019)',
      'AAOIFI headquarters - global Islamic finance authority',
      'Established regulatory sandbox (first in Gulf)',
      'Completed Aber CBDC pilot (not just research)',
      'Largest FinTech hub in MENA (Bahrain FinTech Bay)',
      'Progressive regulator balancing innovation and stability',
      'Lower operational costs vs Dubai/Qatar'
    ],
    weaknesses: [
      'Smaller domestic market vs UAE/Saudi Arabia',
      'Less international visibility than Dubai',
      'Limited natural resources compared to Qatar',
      'Dependence on Saudi Arabia (causeway connection)'
    ],
    uniqueAdvantages: [
      'CBB Crypto-Asset Module - most detailed framework in region',
      'AAOIFI HQ - unique positioning for Islamic fintech',
      'Rain Financial precedent - proven path to licensing',
      'Aber CBDC - actual implementation experience',
      'Regulatory accessibility - smaller, more responsive regulator'
    ]
  },

  sources: [
    'Central Bank of Bahrain - Crypto-Asset Module (2019, updated 2023)',
    'AAOIFI Shariah Standards and governance framework',
    'Aber CBDC Project Final Report (2020)',
    'Bahrain FinTech Bay ecosystem reports',
    'BIS CPMI Red Book - Kingdom of Bahrain (2017)',
    'Commercial Companies Law amendments (2020-2025)',
    'Electronic Communications and Transactions Law (2018)',
    'IMF Article IV - Bahrain (2023)',
    'Rain Financial licensing documentation',
    'Bahrain Economic Development Board reports'
  ],

  lastUpdated: '2025-10-02'
};
