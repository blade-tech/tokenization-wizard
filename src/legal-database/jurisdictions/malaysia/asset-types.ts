/**
 * Malaysia Asset Type Legal Classifications
 *
 * How Malaysian law classifies different asset types for tokenization purposes,
 * covering both conventional and Shariah-compliant structures.
 */

import type { AssetTypeRule } from '../../types';

export const malaysiaAssetTypes: AssetTypeRule[] = [
  {
    assetType: 'cryptoassets',
    legalClassification: 'Digital assets prescribed as securities under Capital Markets and Services Act 2007 via Digital Currency and Digital Token (Prescription) Order 2019 and Amendment Order 2025 (effective Jan 9, 2025). Classified into 4 categories: Digital Securities, Digital Currencies, Utility Tokens, NFTs.',
    governingLaw: [
      'Capital Markets and Services Act 2007 (CMSA 2007)',
      'Digital Currency and Digital Token (Prescription) Order 2019',
      'Digital Currency and Digital Token (Amendment) Order 2025',
      'SC Digital Asset Guidelines 2020 (updated August 2024)',
      'SC Guidelines on Recognized Markets (for DAX operators)',
      'Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA)'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Cryptographic control via private keys',
      'On-chain transaction records on distributed ledger',
      'Account holdings on registered Digital Asset Exchange (DAX)',
      'Custody records from licensed custodian',
      'Digital wallet addresses and signatures'
    ],
    transferMechanism: [
      'On-chain transfer via private key signature',
      'Transfer through registered DAX platform',
      'Custodial transfer with intermediary approval',
      'Smart contract execution (subject to SC approval)',
      'Peer-to-peer transfer (only for utility tokens, not digital securities)'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'No statutory registry - blockchain serves as distributed ledger. DAX operators maintain internal records. SC maintains register of approved DAX operators.',
      statutory: false,
      titleConferring: false,
      dltCompatible: true
    },
    shariahConsiderations: {
      permissible: true,
      conditions: [
        'Underlying asset or activity must be halal (no alcohol, pork, gambling, tobacco, weapons, interest-based lending)',
        'No riba (interest) - tokens must represent equity ownership or profit-sharing, not debt with interest',
        'No excessive gharar (uncertainty) - token rights and obligations must be clearly defined',
        'No maysir (gambling) - token must represent real economic value, not pure speculation',
        'Asset-backing required - Islamic tokens must be backed by tangible assets or usufruct (right to use)',
        'Shariah Advisory Council (SAC) approval required for Islamic digital assets',
        'Shariah governance framework mandatory for Islamic token issuers'
      ],
      prohibitedFeatures: [
        'Interest-bearing instruments',
        'Speculative derivatives without underlying asset',
        'Tokens financing prohibited activities (alcohol, pork, gambling, conventional interest-based lending)',
        'Excessive uncertainty (gharar) in token structure or rights',
        'Pure gambling-like mechanisms (maysir)'
      ],
      rulings: [
        'SC SAC has approved certain digital asset structures as Shariah-compliant',
        'Islamic digital currencies must comply with e-money principles and asset-backing requirements',
        'Utility tokens permissible if underlying service is halal and terms are certain'
      ]
    },
    citations: [
      'cmsa-2007',
      'digital-asset-prescription-order-2019',
      'digital-asset-amendment-order-2025',
      'sc-digital-asset-guidelines-2024',
      'sc-dax-guidelines'
    ],
    notes: 'Malaysia has clear digital asset classification. Amendment Order 2025 refines digital token definition excluding loyalty points, in-game assets, and certain NFTs from securities regulation. 6 registered DAX operators as of 2024. Shariah-compliant structures available but require SAC approval.'
  },

  {
    assetType: 'securities',
    legalClassification: 'Securities as defined in Schedule 1 of CMSA 2007: shares, debentures, bonds, sukuk (Islamic bonds), units in collective investment schemes. Digital securities fall under same regulatory framework.',
    governingLaw: [
      'Capital Markets and Services Act 2007 (CMSA 2007)',
      'Companies Act 2016',
      'Securities Commission Act 1993',
      'Islamic Securities (Sukuk) Guidelines 2014',
      'SC Guidelines on Unlisted Capital Market Products',
      'Bursa Malaysia Listing Requirements'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Entry on company statutory register of members (Companies Act 2016)',
      'Entry on Central Depository System (CDS) maintained by Bursa Malaysia Depository',
      'Certificate of shareholding (if certificated)',
      'Securities account statement from CDS participant',
      'Digital securities record on SC-approved tokenization platform',
      'Sukuk certificate or CDS entry (for Islamic bonds)'
    ],
    transferMechanism: [
      'Book entry transfer via Central Depository System (CDS) - T+2 settlement',
      'Transfer instrument executed and registered (certificated shares)',
      'Electronic transfer through securities trading platform',
      'Tokenized transfer on SC-approved digital securities platform',
      'Bursa Malaysia trading system for listed securities',
      'Off-market transfer with regulatory notification'
    ],
    registrationRequired: true,
    registryDetails: {
      name: 'Company statutory register (Companies Act 2016) or Central Depository System (CDS) operated by Bursa Malaysia Depository',
      statutory: true,
      titleConferring: true,
      dltCompatible: 'unclear'
    },
    shariahConsiderations: {
      permissible: true,
      conditions: [
        'Sukuk (Islamic bonds) structure required for debt instruments - must represent asset ownership, not interest-bearing loan',
        'Company activities must be Shariah-compliant - no riba, gharar, maysir, haram activities',
        'Shariah screening for equity: <5% revenue from non-compliant activities, debt ratios <33% of equity',
        'Asset-backing requirement - securities must represent ownership in tangible assets or usufruct',
        'Profit-sharing mechanism instead of fixed interest',
        'Shariah Advisory Council approval for Islamic securities offerings',
        'Ongoing Shariah compliance monitoring and annual audit'
      ],
      prohibitedFeatures: [
        'Conventional interest-bearing bonds (use sukuk instead)',
        'Shares in companies with >5% non-compliant revenue',
        'Excessive leverage (debt >33% of equity for Shariah-compliant stocks)',
        'Speculative derivatives without asset-backing'
      ],
      rulings: [
        'SC maintains Shariah-compliant securities list updated twice yearly',
        'Islamic Securities (Sukuk) Guidelines 2014 provides framework for 14 approved sukuk structures',
        'SAC rulings on specific securities offerings binding on issuers'
      ]
    },
    citations: [
      'cmsa-2007',
      'companies-act-2016',
      'sukuk-guidelines-2014',
      'bursa-listing-requirements',
      'cds-rules'
    ],
    notes: 'Companies Act 2016 permits electronic registers. CDS provides scripless settlement infrastructure. Malaysia has world\'s largest sukuk market. Tokenized securities require SC approval. Shariah-compliant securities widely available.'
  },

  {
    assetType: 'trade-documents',
    legalClassification: 'Electronic documents and records with legal effect per Electronic Commerce Act 2006. Bills of exchange and promissory notes governed by Bills of Exchange Act 1949. Bills of lading under Carriage of Goods by Sea Act 1950.',
    governingLaw: [
      'Electronic Commerce Act 2006',
      'Digital Signature Act 1997',
      'Bills of Exchange Act 1949',
      'Carriage of Goods by Sea Act 1950',
      'Contracts Act 1950',
      'Evidence Act 1950 (electronic evidence admissibility)'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Electronic signature meeting ECA 2006 requirements',
      'Certified digital signature under Digital Signature Act 1997',
      'Possession of unique electronic document with integrity maintained',
      'Reliable system for identifying controller',
      'Blockchain record demonstrating exclusive control',
      'Custodian confirmation of document holding'
    ],
    transferMechanism: [
      'Electronic transfer satisfying ECA 2006 requirements',
      'Digital signature and delivery via approved electronic system',
      'Endorsement and transfer for negotiable instruments',
      'DLT-based transfer of tokenized trade documents',
      'Delivery of access credentials enabling exclusive control',
      'Platform-based transfer through trade finance system'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'No statutory registry. Electronic systems must satisfy ECA 2006 reliability requirements. Trade finance platforms (TradeTrust, ICC TradeFlow) provide infrastructure.',
      statutory: false,
      titleConferring: false,
      dltCompatible: true
    },
    shariahConsiderations: {
      permissible: true,
      conditions: [
        'Underlying transaction must be Shariah-compliant trade in halal goods',
        'Murabahah (cost-plus financing) structure permitted for trade finance',
        'No riba (interest) - profit margins must be disclosed and fixed at inception',
        'Actual goods transfer required - no fictitious trades',
        'Bai al-salam (advance payment) structure permitted with conditions',
        'Documentation must clearly identify goods, price, delivery terms'
      ],
      prohibitedFeatures: [
        'Interest-bearing trade finance (use murabahah or wakalah instead)',
        'Financing of haram goods (pork, alcohol, weapons, tobacco)',
        'Bay al-dayn (debt trading) prohibited unless at par value',
        'Excessive uncertainty (gharar) in goods specification or delivery'
      ],
      rulings: [
        'SAC permits electronic trade documents if meeting ECA 2006 standards',
        'Islamic trade finance instruments (murabahah, wakalah, musharakah) can be tokenized with SAC approval'
      ]
    },
    citations: [
      'eca-2006',
      'digital-signature-act-1997',
      'bills-exchange-1949',
      'carriage-goods-sea-1950'
    ],
    notes: 'ECA 2006 provides legal recognition for electronic documents. Digital Signature Act 1997 creates framework for certified signatures. No equivalent to UK ETDA 2023 yet. Tokenization of trade documents possible but requires robust electronic systems satisfying ECA 2006 reliability standards.'
  },

  {
    assetType: 'real-estate',
    legalClassification: 'Legal interest in land registered under National Land Code 1965 (Peninsular Malaysia) using Torrens system. Land titles, strata titles, and leasehold interests. Islamic real estate uses aqar (property) principles.',
    governingLaw: [
      'National Land Code 1965 (Peninsular Malaysia)',
      'Strata Titles Act 1985',
      'Land (Group Settlement Areas) Act 1960',
      'Sarawak Land Code (Sarawak)',
      'Sabah Land Ordinance (Sabah)',
      'Islamic Financial Services Act 2013 (for Islamic property finance)',
      'Real Estate and Housing Developers Act 1966'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Registered title at State Land Registry (Torrens system)',
      'Certificate of title (individual or strata)',
      'Leasehold agreement registered at Land Office',
      'Entry in Land Register - registration confers indefeasible title',
      'Strata title for condominium units',
      'Islamic property ownership via aqar contract'
    ],
    transferMechanism: [
      'Memorandum of Transfer registered at State Land Registry',
      'Registration required for legal title to pass (Torrens principle)',
      'Stamp duty payment and assessment',
      'Consent from State Authority (for certain land types)',
      'Direct tokenization of legal title not possible - SPV structure required',
      'Tokenization of beneficial interest or shares in property-owning SPV',
      'Islamic structures: musharakah mutanaqisah (diminishing partnership), ijarah (leasing)'
    ],
    registrationRequired: true,
    registryDetails: {
      name: 'State Land Registries under National Land Code 1965 (Torrens system providing indefeasible title)',
      statutory: true,
      titleConferring: true,
      dltCompatible: 'unclear'
    },
    shariahConsiderations: {
      permissible: true,
      conditions: [
        'Musharakah mutanaqisah structure for Islamic home financing (diminishing partnership)',
        'Ijarah (leasing) structure with ownership transfer option',
        'Ijarah thumma al-bai (lease-then-purchase)',
        'No conventional mortgage with riba - use Islamic financing structures',
        'Aqar (property) ownership permissible if not used for haram purposes',
        'Joint ownership (syirkah al-milk) allowed under Shariah',
        'Fractional ownership must follow musharakah principles'
      ],
      prohibitedFeatures: [
        'Interest-bearing mortgages (use musharakah mutanaqisah or ijarah instead)',
        'Property used for haram activities (gambling, alcohol production, nightclubs)',
        'Excessive gharar in property condition or ownership terms',
        'Riba-based rent-to-own schemes'
      ],
      rulings: [
        'BNM SAC approved musharakah mutanaqisah for Islamic home financing',
        'IFSA 2013 provides framework for Islamic property financing',
        'Property tokenization using musharakah (partnership) structure permitted with SAC approval'
      ]
    },
    citations: [
      'national-land-code-1965',
      'strata-titles-1985',
      'ifsa-2013',
      'bnm-musharakah-mutanaqisah'
    ],
    notes: 'Torrens system provides indefeasible title - registration = ownership. Direct tokenization of land title unclear; Land Registry modernization pending. Typical structure: tokenize shares in SPV holding property. Islamic real estate finance well-established with musharakah mutanaqisah (diminishing partnership) widely used.'
  },

  {
    assetType: 'commodities',
    legalClassification: 'Goods governed by Sale of Goods Act 1957 and Contracts Act 1950. Commodities trading regulated under CMSA 2007. Islamic commodities (sila) trading via murabahah and tawarruq.',
    governingLaw: [
      'Sale of Goods Act 1957',
      'Contracts Act 1950',
      'Capital Markets and Services Act 2007 (commodity derivatives)',
      'Electronic Commerce Act 2006 (electronic receipts)',
      'Islamic Financial Services Act 2013 (Islamic commodity trading)',
      'Bursa Malaysia Derivatives Rules'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Physical possession of goods',
      'Warehouse receipt or storage certificate',
      'Bill of lading (goods in transit)',
      'Electronic warehouse receipt (ECA 2006 compliant)',
      'Commodity trading account records',
      'Islamic commodities: bay al-sarf (currency exchange) or murabahah documentation'
    ],
    transferMechanism: [
      'Physical delivery and acceptance',
      'Transfer of warehouse receipt',
      'Electronic transfer of warehouse receipt (ECA 2006)',
      'Delivery order or dock warrant',
      'Bursa Derivatives settlement for futures contracts',
      'Tokenized commodity receipt with custodian confirmation',
      'Islamic structures: murabahah (cost-plus sale), salam (advance purchase), istisna (manufacturing contract)'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'No statutory registry. Warehouse operators maintain records. Bursa Malaysia Derivatives provides clearing for commodity futures.',
      statutory: false,
      titleConferring: false,
      dltCompatible: true
    },
    shariahConsiderations: {
      permissible: true,
      conditions: [
        'Commodities must be halal - no pork, alcohol, weapons, tobacco',
        'Bay al-sarf rules for currency/gold/silver exchange (immediate delivery required)',
        'Murabahah structure for commodity financing (cost-plus with disclosed margin)',
        'Salam contract permitted for agricultural commodities (advance payment, deferred delivery)',
        'Istisna for manufacturing/construction (payment at delivery or in installments)',
        'Tawarruq (commodity murabahah) for liquidity management',
        'Physical commodities preferred over synthetic derivatives'
      ],
      prohibitedFeatures: [
        'Short-selling without actual possession (bay al-ma\'dum)',
        'Speculative derivatives without asset-backing',
        'Interest-based commodity financing',
        'Trading haram commodities (pork, alcohol)',
        'Bay al-dayn (debt trading) except at par',
        'Excessive gharar in commodity specification'
      ],
      rulings: [
        'SAC permits commodity murabahah (tawarruq) for liquidity purposes',
        'Bursa Suq al-Sila (commodity trading platform) for Shariah-compliant commodity transactions',
        'Gold and silver trading must follow bay al-sarf rules (immediate settlement)'
      ]
    },
    citations: [
      'sale-goods-1957',
      'cmsa-2007',
      'eca-2006',
      'ifsa-2013',
      'bursa-suq-al-sila'
    ],
    notes: 'ECA 2006 enables electronic warehouse receipts. Bursa Malaysia operates commodity derivatives exchange. Islamic commodity trading (murabahah, tawarruq) well-established. Tokenization of warehouse receipts viable with custodian. Shariah-compliant commodity platforms like Bursa Suq al-Sila operational.'
  },

  {
    assetType: 'funds',
    legalClassification: 'Money as chose in action (bank deposit). E-money and payment tokens governed by Payment Systems Act 2003. Islamic deposits (wadiah, qard) under IFSA 2013. Stablecoins fall under SC Digital Asset Guidelines.',
    governingLaw: [
      'Payment Systems Act 2003',
      'Financial Services Act 2013 (conventional banks)',
      'Islamic Financial Services Act 2013 (Islamic banks)',
      'Money Services Business Act 2011',
      'Electronic Money Issuance Policy (BNM 2022)',
      'SC Digital Asset Guidelines 2020 (stablecoins)',
      'Anti-Money Laundering, Anti-Terrorism Financing Act 2001'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Bank account balance (deposit claim)',
      'Account statement from licensed bank',
      'E-money balance from approved e-money issuer',
      'Stablecoin holdings on registered DAX or licensed platform',
      'Islamic deposit: wadiah (safekeeping) or qard (loan) account',
      'Payment system transaction records'
    ],
    transferMechanism: [
      'RENTAS (Real-Time Electronic Transfer) - RTGS for high-value (minimum RM10,000)',
      'FPX (Financial Process Exchange) - retail online payments',
      'Interbank GIRO (IBG) - bulk payment clearing',
      'DuitNow - instant payments and QR code transfers',
      'SWIFT transfers for cross-border',
      'E-money transfer via approved issuers',
      'Stablecoin transfer (if SC-approved)',
      'Islamic transfers: wadiah, qard, wakalah (agency) structures'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'Bank ledgers, RENTAS system (BNM), FPX, IBG. No DLT-based payment system yet. Islamic interbank payment via RENTAS Shariah.',
      statutory: false,
      titleConferring: false,
      dltCompatible: 'unclear'
    },
    shariahConsiderations: {
      permissible: true,
      conditions: [
        'Islamic deposits use wadiah (safekeeping with gift) or qard hassan (benevolent loan) structures',
        'No guaranteed interest - returns as hibah (gift) at bank\'s discretion for wadiah',
        'Mudarabah (profit-sharing) deposits permitted - profits shared, losses borne by bank',
        'Wakalah (agency) structure for Islamic payment services',
        'E-money must be asset-backed (not interest-bearing debt)',
        'Stablecoins must avoid riba and be backed by halal assets',
        'Gold-backed digital currency permitted (following bay al-sarf rules)'
      ],
      prohibitedFeatures: [
        'Interest-bearing deposits (use wadiah or mudarabah instead)',
        'Fractional reserve banking with riba',
        'Currency speculation (use bay al-sarf rules)',
        'Debt-based stablecoins with interest'
      ],
      rulings: [
        'BNM SAC approved wadiah yad dhamanah for Islamic current accounts',
        'Mudarabah structure approved for Islamic investment deposits',
        'E-money issuance must follow IFSA 2013 if offered by Islamic institution',
        'Gold-backed digital currency permissible if following bay al-sarf (immediate exchange) rules'
      ]
    },
    citations: [
      'payment-systems-act-2003',
      'fsa-2013',
      'ifsa-2013',
      'bnm-emoney-policy-2022',
      'sc-digital-asset-guidelines-2024'
    ],
    notes: 'No CBDC yet - BNM in research phase. Tokenized deposits not explicitly permitted. E-money requires BNM approval. Stablecoins fall under SC Digital Asset Guidelines if qualifying as securities. Islamic deposits (wadiah, mudarabah) well-established. RENTAS provides real-time settlement for high-value transfers.'
  }
];
