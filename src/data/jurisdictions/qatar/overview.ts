import { JurisdictionOverview } from '../types';

export const qatarOverview: JurisdictionOverview = {
  code: 'QA',
  name: 'Qatar',

  legalSystem: {
    family: 'civil-law',
    description: 'Hybrid civil law and Islamic (Shariah) law system with dual jurisdiction structure',
    details: [
      'Permanent Constitution (2024 amendments): Article 1 designates Shariah as the principal source of legislation',
      'Civil law base derived from Egyptian and French legal traditions',
      'Dual jurisdiction: Onshore Qatar (civil + Shariah) vs Qatar Financial Centre (English common law)',
      'QFC operates as parallel but separate legal regime with independent court system',
      'Shariah principles mandatory for Islamic finance and family law matters',
      'Shura Council legislative role (minimum 45 appointed members per 2024 amendments)'
    ],
    sources: [
      'Permanent Constitution of the State of Qatar (as amended 2024)',
      'QFC Law No. 7 of 2005 (as amended)',
      'Civil Code promulgated by Law No. 22 of 2004'
    ]
  },

  regulatoryBodies: [
    {
      name: 'Qatar Central Bank (QCB)',
      role: 'Central banking, monetary policy, payment systems, banking supervision',
      website: 'https://www.qcb.gov.qa',
      jurisdiction: 'Onshore Qatar',
      powers: [
        'Issues QCB Law No. 13 of 2012',
        'Supervises banks and financial institutions',
        'Operates Qatar Payment System (QPS) - RTGS',
        'Issues circulars on cryptocurrency (banned since Circular 6/2018)',
        'Developing CBDC project (announced June 2024)',
        'Regulates payment service providers (Payment Services Regulation 2021)'
      ]
    },
    {
      name: 'Qatar Financial Markets Authority (QFMA)',
      role: 'Securities markets regulation, onshore capital markets oversight',
      website: 'https://www.qfma.org.qa',
      jurisdiction: 'Onshore Qatar',
      powers: [
        'Established by Law No. 8 of 2012 (replacing Law No. 33 of 2005)',
        'Regulates Qatar Stock Exchange and securities trading',
        'Licenses brokers, asset managers, and financial service companies',
        'Enforces governance codes for listed companies',
        'Oversees Qatar Central Securities Depository (Edaa)',
        'Issues mergers and acquisitions rules'
      ]
    },
    {
      name: 'Qatar Financial Centre Regulatory Authority (QFCRA)',
      role: 'Regulates financial services within QFC offshore zone',
      website: 'https://www.qfcra.com',
      jurisdiction: 'Qatar Financial Centre (QFC)',
      powers: [
        'Independent regulator under QFC Law No. 7 of 2005',
        'Issues QFC Regulations and Rulebooks (based on English common law)',
        'Licenses QFC financial firms (banking, insurance, asset management)',
        'Issued Digital Assets Framework 2024 (September 2024)',
        'Operates Digital Assets Lab (launched October 2023)',
        'Follows international standards (IOSCO, FATF, Basel)'
      ]
    },
    {
      name: 'Ministry of Commerce and Industry (MOCI)',
      role: 'Company registration, commercial licensing, competition regulation',
      website: 'https://www.moci.gov.qa',
      jurisdiction: 'Onshore Qatar',
      powers: [
        'Administers Commercial Companies Law No. 11 of 2015 (as amended 2021)',
        'Operates Commercial Register',
        'Enforces Law No. 19 of 2006 (competition and anti-monopoly)',
        'Regulates foreign investment (Law No. 1 of 2019)',
        'Issues business licenses and permits'
      ]
    },
    {
      name: 'Ministry of Justice',
      role: 'Real estate registration, notarization, legal framework',
      website: 'https://www.moj.gov.qa',
      jurisdiction: 'Onshore Qatar',
      powers: [
        'Administers Real Estate Registration Law No. 5 of 2024',
        'Operates Property Registration system',
        'Regulates non-Qatari property ownership (Law No. 16 of 2018)',
        'Oversees notary public services',
        'Committee for Regulation of Non-Qatari Property Ownership'
      ]
    }
  ],

  keyLegislation: [
    {
      name: 'Permanent Constitution of the State of Qatar',
      year: 2003,
      amended: 2024,
      scope: 'Supreme law; designates Shariah as main source of legislation',
      relevance: 'Foundational legal framework; requires Shariah compliance for Islamic finance'
    },
    {
      name: 'QFC Law No. 7 of 2005',
      year: 2005,
      amended: 2009,
      scope: 'Establishes Qatar Financial Centre as independent offshore zone',
      relevance: 'Creates parallel English common law jurisdiction; digital assets framework'
    },
    {
      name: 'QCB Law No. 13 of 2012',
      year: 2012,
      scope: 'Central banking and regulation of financial institutions',
      relevance: 'Banking supervision, payment systems, monetary policy, fintech regulation'
    },
    {
      name: 'QFMA Law No. 8 of 2012',
      year: 2012,
      amended: 2018,
      scope: 'Securities markets regulation and oversight',
      relevance: 'Capital markets, securities trading, depository, clearing and settlement'
    },
    {
      name: 'Commercial Companies Law No. 11 of 2015',
      year: 2015,
      amended: 2021,
      scope: 'Corporate governance, company formation, joint stock companies',
      relevance: 'Entity structures, shareholder rights, corporate registrations'
    },
    {
      name: 'Electronic Commerce and Transactions Law No. 16 of 2010',
      year: 2010,
      scope: 'E-signatures, e-documents, e-commerce transactions',
      relevance: 'Legal recognition of electronic records and digital signatures'
    },
    {
      name: 'Foreign Investment Law No. 1 of 2019',
      year: 2019,
      scope: 'Permits 100% foreign ownership in most sectors',
      relevance: 'Foreign investor rights, tax incentives, expropriation protections'
    },
    {
      name: 'Real Estate Ownership Law No. 16 of 2018',
      year: 2018,
      scope: 'Regulates non-Qatari ownership of real estate',
      relevance: 'Foreign freehold and usufruct rights in designated areas'
    },
    {
      name: 'Real Estate Registration Law No. 5 of 2024',
      year: 2024,
      scope: 'Electronic registration, property transfers, title system',
      relevance: 'Modernizes property registry; introduces digital registration'
    },
    {
      name: 'QFC Digital Asset Regulations 2024',
      year: 2024,
      scope: 'Tokenization framework for QFC only (excludes cryptocurrencies)',
      relevance: 'First comprehensive digital asset framework; permits investment tokens'
    }
  ],

  specialRegimes: [
    {
      name: 'Qatar Financial Centre (QFC)',
      type: 'Offshore financial free zone',
      description: 'Independent English common law jurisdiction for financial services',
      features: [
        'Established 2005; located in Doha',
        'Operates under QFC Law No. 7 of 2005',
        'English common law legal system (parallel to onshore Qatar)',
        'Independent QFC Civil and Commercial Court',
        'QFC Regulatory Authority (QFCRA) - separate from QFMA',
        '100% foreign ownership permitted',
        'Digital Assets Framework 2024 (tokenization allowed)',
        'Digital Assets Lab operational since October 2023',
        '0% corporate tax for qualifying activities',
        'Full profit repatriation allowed'
      ],
      relevance: 'Primary venue for digital asset tokenization; Islamic finance innovation hub'
    },
    {
      name: 'Islamic Finance Framework',
      type: 'Shariah-compliant financial system',
      description: 'Mandatory Shariah compliance for Islamic financial institutions',
      features: [
        'Qatar home to 3 of world\'s top 10 Islamic banks by assets',
        'Islamic banking assets: QAR 586bn (2024) - 6.8% CAGR since 2020',
        'AAOIFI standards adoption (Qatar is AAOIFI member)',
        'Shariah boards mandatory for Islamic banks and takaful',
        'Sukuk market highly developed (Qatar major issuer)',
        'QFC Islamic Finance Rulebook (ISFI)',
        'Takaful regulation under QFCRA',
        'No riba (interest) in Shariah-compliant products',
        'Wakalah (agency) custody structures common'
      ],
      relevance: 'Affects custody, settlement, and tokenization structures for Islamic assets'
    }
  ],

  internationalFrameworks: [
    'Gulf Cooperation Council (GCC) member - common market coordination',
    'Financial Action Task Force (FATF) member via GCC',
    'AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) member',
    'World Trade Organization (WTO) member since 1996',
    'Bilateral investment treaties with 60+ countries',
    'Double taxation treaties with 80+ jurisdictions',
    'Basel Committee principles adopted by QCB',
    'IOSCO principles followed by QFMA and QFCRA',
    'CPMI-IOSCO payment system standards compliance'
  ],

  recentDevelopments: [
    {
      date: '2024-09',
      event: 'QFC Digital Assets Framework launched',
      impact: 'First comprehensive tokenization regime in Qatar; permits investment tokens in QFC',
      source: 'QFC Digital Asset Regulations 2024'
    },
    {
      date: '2024-06',
      event: 'QCB announces CBDC infrastructure project',
      impact: 'Digital riyal pilot with local and international banks; DLT-based settlement',
      source: 'QCB Press Release June 2024'
    },
    {
      date: '2024-06',
      event: 'Real Estate Registration Law No. 5 enacted',
      impact: 'Electronic property registration system; modernized title transfer process',
      source: 'Official Gazette No. 12/2024'
    },
    {
      date: '2024-02',
      event: 'Constitutional amendments adopted',
      impact: 'Refined governance structure; reaffirmed Shariah as main legislation source',
      source: 'Official Gazette No. 26/2024'
    },
    {
      date: '2023-10',
      event: 'QFC Digital Assets Lab opened',
      impact: 'Sandbox for DLT innovation; pathway to QFC licensing',
      source: 'QFCA announcement'
    },
    {
      date: '2021-09',
      event: 'QCB Payment Services Regulation issued',
      impact: 'Licensing framework for payment service providers and fintech',
      source: 'QCB Regulation 2021'
    },
    {
      date: '2021-07',
      event: 'Commercial Companies Law amended (Law No. 8/2021)',
      impact: 'Private JSCs can now list on stock exchange; enhanced AML/CTF compliance',
      source: 'Law No. 8 of 2021'
    },
    {
      date: '2020-09',
      event: 'Cabinet Decision No. 28/2020 - foreign real estate ownership',
      impact: '25 designated areas for non-Qatari freehold/leasehold ownership',
      source: 'Cabinet Decision No. 28 of 2020'
    },
    {
      date: '2019-06',
      event: 'Foreign Investment Law No. 1/2019 enacted',
      impact: '100% foreign ownership permitted in most sectors (previously 49% cap)',
      source: 'Law No. 1 of 2019'
    },
    {
      date: '2018-02',
      event: 'QCB Circular No. 6/2018 bans cryptocurrency trading',
      impact: 'All financial institutions prohibited from crypto transactions (onshore only)',
      source: 'QCB Circular 6/2018'
    }
  ],

  uniqueFeatures: [
    'Dual jurisdiction: Shariah-influenced civil law (onshore) vs English common law (QFC offshore)',
    'World\'s third-largest LNG exporter driving sovereign wealth and infrastructure investment',
    'Third Financial Sector Strategy 2024-2030 targets $100bn FDI by 2030',
    'Digital Assets Lab provides regulatory sandbox pathway to licensing',
    'CBDC project using AI and distributed ledger technology (pilot phase 2024)',
    'GCC AFAQ payment system (pan-GCC RTGS) launching for regional integration',
    'Islamic finance leader: 3 of top 10 global Islamic banks by assets',
    'AAOIFI standards mandatory for Islamic finance (Qatar is member state)',
    'Qatar National Vision 2030 emphasizes knowledge economy and fintech innovation',
    'Post-World Cup 2022 modernization focused on economic diversification',
    'Fixed QAR:USD peg (3.64 QAR = 1 USD) provides currency stability',
    'Zero corporate tax for qualifying activities in QFC and free zones'
  ],

  considerationsForTokenization: [
    {
      category: 'Regulatory Clarity',
      status: 'Moderate-High (bifurcated)',
      notes: [
        'QFC: Clear framework via Digital Assets Regulations 2024 - investment tokens permitted',
        'Onshore: No digital asset framework; cryptocurrencies banned (QCB Circular 6/2018)',
        'Must structure within QFC to access tokenization framework',
        'QFC Digital Assets Lab provides sandbox for innovation',
        'Tokenization limited to "Permitted Tokens" (excludes pure cryptocurrencies and stablecoins)'
      ]
    },
    {
      category: 'Islamic Finance Compliance',
      status: 'Critical',
      notes: [
        'Mandatory Shariah board approval for Islamic financial products',
        'AAOIFI standards govern Islamic finance structures',
        'No riba (interest) permitted - affects profit-sharing tokenization',
        'Sukuk tokenization must comply with Shariah principles',
        'Wakalah (agency) or Mudarabah structures for custody',
        'Token design must avoid Gharar (uncertainty) and Maysir (gambling)'
      ]
    },
    {
      category: 'Dual Jurisdiction Complexity',
      status: 'High',
      notes: [
        'QFC vs onshore legal systems create jurisdictional arbitrage opportunities',
        'QFC court judgments enforceable in State of Qatar (but separate legal regime)',
        'Cross-border transactions between QFC and onshore require careful structuring',
        'Different regulators: QFCRA (QFC) vs QFMA (onshore) vs QCB (banking)',
        'Real estate tokenization limited to foreign-ownership designated areas'
      ]
    },
    {
      category: 'Technology Readiness',
      status: 'Advancing',
      notes: [
        'CBDC pilot using DLT (June 2024 - October 2024 Phase 1)',
        'Qatar Payment System (QPS) is RTGS with SWIFT integration',
        'Electronic Commerce Law 2010 recognizes e-signatures and smart contracts',
        'Real Estate Registration Law 2024 introduces electronic registration',
        'QFC Digital Assets Lab partnerships with Google Cloud, R3, Hedera',
        'National fintech strategy aligned with Vision 2030'
      ]
    },
    {
      category: 'Market Access',
      status: 'Moderate',
      notes: [
        '100% foreign ownership in QFC (0% corporate tax)',
        'Onshore: 100% foreign ownership available under FIL 2019 (most sectors)',
        'Real estate: 25 designated areas for non-Qatari ownership',
        'GCC common market provides regional access (AFAQ RTGS launching)',
        'Small domestic market (2.1M population) but high per capita income',
        'Sovereign wealth funds (QIA) active in alternative investments'
      ]
    }
  ],

  riskLevel: 'Moderate',
  riskFactors: [
    'Dual jurisdiction complexity (QFC vs onshore) requires careful legal structuring',
    'Shariah compliance mandatory for Islamic finance - rejection risk from Shariah boards',
    'Cryptocurrency ban (onshore) limits retail crypto adoption',
    'Limited digital asset precedents (QFC framework only launched Sept 2024)',
    'Small domestic investor base relative to UAE/Saudi Arabia',
    'Political risk: GCC relations (blockade 2017-2021, now resolved)',
    'Real estate foreign ownership restricted to designated areas only',
    'Court capacity for novel digital asset disputes untested',
    'Regulatory uncertainty for cross-border tokens between QFC and onshore',
    'AAOIFI Standard 62 (sukuk accounting) under review - may impact Islamic tokenization'
  ],

  citations: [
    {
      title: 'Permanent Constitution of the State of Qatar (as amended 2024)',
      source: 'Official Gazette No. 26/2024',
      year: 2024,
      url: 'https://www.almeezan.qa/'
    },
    {
      title: 'QFC Law No. 7 of 2005 (as amended)',
      source: 'Qatar Financial Centre',
      year: 2005,
      url: 'https://qfcra-en.thomsonreuters.com/rulebook/qfc-law-no-7-year-2005'
    },
    {
      title: 'QFC Digital Asset Regulations 2024',
      source: 'QFCRA',
      year: 2024,
      url: 'https://qfcra-en.thomsonreuters.com/rulebook/digital-asset-regulations-2024'
    },
    {
      title: 'QCB Law No. 13 of 2012',
      source: 'Qatar Central Bank',
      year: 2012,
      url: 'https://www.qcb.gov.qa/en/legislation'
    },
    {
      title: 'QFMA Law No. 8 of 2012',
      source: 'Qatar Financial Markets Authority',
      year: 2012,
      url: 'https://www.qfma.org.qa/English/RulesRegulations/'
    },
    {
      title: 'Commercial Companies Law No. 11 of 2015 (as amended by Law No. 8 of 2021)',
      source: 'Ministry of Commerce and Industry',
      year: 2021,
      url: 'https://www.moci.gov.qa'
    },
    {
      title: 'Electronic Commerce and Transactions Law No. 16 of 2010',
      source: 'Communications Regulatory Authority',
      year: 2010,
      url: 'https://www.cra.gov.qa'
    },
    {
      title: 'Real Estate Registration Law No. 5 of 2024',
      source: 'Ministry of Justice',
      year: 2024,
      url: 'https://www.moj.gov.qa'
    },
    {
      title: 'Law on Regulating Real Estate Ownership by Non-Qataris No. 16 of 2018',
      source: 'Ministry of Justice',
      year: 2018,
      url: 'https://www.almeezan.qa/'
    },
    {
      title: 'Foreign Investment Law No. 1 of 2019',
      source: 'Invest Qatar',
      year: 2019,
      url: 'https://www.invest.qa'
    }
  ]
};
