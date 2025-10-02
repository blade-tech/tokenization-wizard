import { AssetType } from '../types';

export const bahrainAssetTypes: AssetType[] = [
  // CRYPTO-ASSETS
  {
    id: 'crypto-payment-tokens',
    name: 'Payment Tokens (Cryptocurrencies)',
    category: 'crypto-assets',
    description: 'Virtual tokens which can be digitally traded and used for acquiring goods or services or for investment purposes. Payment tokens give rise to no claims on their issuer and are usually decentralised.',

    legalClassification: {
      primaryLaw: 'CBB Crypto-Asset Module (CA)',
      classification: 'Crypto-asset - Payment Token',
      regulatoryStatus: 'Regulated by CBB',
      specificProvisions: [
        'CBB Rulebook Vol. 6: Cryptographically secured digital representation of value',
        'No claims on issuer',
        'Usually decentralised',
        'Most prominent example: Bitcoin',
        'Must be listed on CBB-accepted exchanges for regulated services'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Unclear - not explicitly addressed in Civil Code',
      ownershipRights: [
        'Control over private keys constitutes practical ownership',
        'CBB recognizes crypto-assets as transferable value',
        'Property law recognition pending judicial clarification'
      ],
      transferMechanism: 'Blockchain-based transfer via private key cryptography',
      goodFaithProtections: 'Untested - traditional property protections may not apply'
    },

    controlMechanisms: {
      primaryControl: 'Private key custody',
      registrationRequired: false,
      custodyOptions: [
        'Self-custody (private wallet)',
        'CBB-licensed CA-2 Custodian (institutional)',
        'Exchange custody (CA-1 Platform Operator)'
      ],
      settlementMethod: 'On-chain blockchain settlement (peer-to-peer or via licensed platform)'
    },

    shariahCompliance: {
      aaoifiGuidance: 'No specific AAOIFI standard on payment tokens yet',
      considerations: [
        'Speculation concerns due to volatility',
        'No intrinsic asset backing (unlike asset tokens)',
        'Gharar (uncertainty) issues with price volatility',
        'Halal use case: medium of exchange, not speculative trading',
        'CBB-licensed platforms must consider Shariah if targeting Islamic investors'
      ],
      consensusView: 'Contested - some scholars permit as currency, others prohibit due to speculation'
    },

    tokenizationSuitability: {
      feasibility: 'Already tokenized by nature',
      regulatoryPath: 'CA-1 Platform Operator license for exchange services',
      precedents: [
        'Rain Financial (2019) - first licensed crypto exchange MENA',
        'CoinMENA - licensed crypto exchange'
      ]
    },

    risks: [
      'Price volatility',
      'Lack of explicit property law recognition',
      'Shariah compliance uncertainty for Islamic investors',
      'Regulatory requirement for CBB-accepted listing'
    ],

    sources: [
      'CBB Crypto-Asset Module (2019, amended 2023)',
      'CBB Rulebook Vol. 6 - Glossary definition of crypto-asset',
      'AAOIFI - no specific standard on cryptocurrencies',
      'Rain Financial licensing precedent (2019)'
    ]
  },

  {
    id: 'crypto-utility-tokens',
    name: 'Utility Tokens',
    category: 'crypto-assets',
    description: 'Tokens that are intended to provide access to a specific application or service but are not accepted as a means of payment for other applications.',

    legalClassification: {
      primaryLaw: 'CBB Crypto-Asset Module (CA)',
      classification: 'Crypto-asset - Utility Token',
      regulatoryStatus: 'Regulated by CBB if traded or offered',
      specificProvisions: [
        'CBB Rulebook Vol. 6: Access tokens for specific applications',
        'Not payment instruments',
        'May require CA-1 license if traded on platform',
        'Digital Token Offering rules apply if characteristics of security'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Unclear - likely treated as contractual right to service',
      ownershipRights: [
        'Right to access specific application or service',
        'No ownership claim on issuer assets',
        'Transferability depends on token design'
      ],
      transferMechanism: 'Blockchain-based transfer (if designed for transferability)',
      goodFaithProtections: 'Untested'
    },

    controlMechanisms: {
      primaryControl: 'Private key custody + smart contract access rights',
      registrationRequired: false,
      custodyOptions: [
        'Self-custody wallet',
        'Platform custody (if traded)',
        'Application-specific custody'
      ],
      settlementMethod: 'Smart contract execution for service access'
    },

    shariahCompliance: {
      aaoifiGuidance: 'Under review - no specific standard',
      considerations: [
        'Permissible if underlying service is halal',
        'Must represent genuine utility, not speculative asset',
        'Prepayment structure must avoid interest-like returns',
        'Service delivery obligation must be clear (avoid Gharar)'
      ],
      consensusView: 'Generally permissible if genuinely utility-based and Shariah-compliant service'
    },

    tokenizationSuitability: {
      feasibility: 'High - suitable for service access tokenization',
      regulatoryPath: 'CA-1 license if secondary trading, Digital Token Offering if resembles security',
      precedents: []
    },

    risks: [
      'Regulatory uncertainty if token blurs utility/security distinction',
      'Service provider solvency risk',
      'Shariah compliance depends on underlying service'
    ],

    sources: [
      'CBB Crypto-Asset Module amendments (March 2023)',
      'CBB Rulebook Vol. 6 - Glossary'
    ]
  },

  {
    id: 'crypto-asset-tokens',
    name: 'Asset Tokens (Security Tokens)',
    category: 'crypto-assets',
    description: 'Tokens representing assets such as a debt or equity claim on the issuer. Asset tokens promise, for example, a share in future company earnings or future capital flows. Analogous to equities, bonds or derivatives.',

    legalClassification: {
      primaryLaw: 'CBB Crypto-Asset Module (CA) + Securities Regulations',
      classification: 'Crypto-asset - Asset Token / Security',
      regulatoryStatus: 'Dual regulation: Crypto-Asset Module + Securities laws',
      specificProvisions: [
        'CBB Rulebook Vol. 6: Asset tokens = securities if exhibiting security characteristics',
        'Digital Token Offering rules apply (March 2023 amendments)',
        'Equity/debt claims regulated as traditional securities',
        'Tokens enabling physical assets to trade on blockchain included',
        'May require prospectus, listing, ongoing disclosure'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Yes - as security interest in underlying asset',
      ownershipRights: [
        'Ownership claim on issuer assets (equity-like)',
        'Creditor claim (debt-like)',
        'Rights to cash flows, earnings, or asset proceeds',
        'Governance rights (if equity-like)'
      ],
      transferMechanism: 'Blockchain-based transfer subject to securities transfer rules',
      goodFaithProtections: 'Securities law protections apply'
    },

    controlMechanisms: {
      primaryControl: 'Blockchain record + legal registry (if applicable)',
      registrationRequired: true,
      custodyOptions: [
        'CBB-licensed CA-2 Custodian (required for regulated services)',
        'Bahrain Clear (if listed on Bahrain Bourse)',
        'Institutional custody with CA-2 license'
      ],
      settlementMethod: 'DLT-based settlement with DVP model (if exchange-traded)'
    },

    shariahCompliance: {
      aaoifiGuidance: 'Subject to AAOIFI standards on equity/sukuk',
      considerations: [
        'Equity tokens: permissible if underlying business is halal',
        'Debt tokens: must be structured as Shariah-compliant sukuk',
        'Asset-backed tokens more likely compliant than pure debt',
        'Profit-sharing structure required (not interest)',
        'AAOIFI Standard 62 (draft) applies to sukuk-like structures'
      ],
      consensusView: 'Permissible if structured as Shariah-compliant equity or sukuk'
    },

    tokenizationSuitability: {
      feasibility: 'High - ideal for asset-backed tokenization',
      regulatoryPath: 'CA-1 + Securities Offering + potential Bahrain Bourse listing',
      precedents: [
        'Multiple blockchain/securities tokenization sandbox projects',
        'Mastercard partnership (2022) - pilot digital securities'
      ]
    },

    risks: [
      'Dual regulatory compliance (crypto + securities)',
      'Shariah structuring complexity for Islamic tokens',
      'Liquidity constraints if not exchange-listed',
      'Technology risk (smart contract vulnerabilities)'
    ],

    sources: [
      'CBB Crypto-Asset Module amendments (March 2023) - Digital Token Offerings',
      'CBB Rulebook Vol. 6 - Securities definition',
      'AAOIFI Standard 62 (draft) - sukuk structures'
    ]
  },

  // SECURITIES
  {
    id: 'shares-equity',
    name: 'Shares (Equity Securities)',
    category: 'securities',
    description: 'Shares in companies and other securities equivalent to shares in companies or other entities, and depositary receipts in respect of shares.',

    legalClassification: {
      primaryLaw: 'Commercial Companies Law (2001, amended 2025)',
      classification: 'Security - Equity',
      regulatoryStatus: 'Regulated by CBB (capital markets)',
      specificProvisions: [
        'Legislative Decree No. 21 of 2001 (amended by Decrees 28/2020, 20/2021, 38/2025)',
        'BSC (Bahraini Shareholding Company) structure',
        'WLL (With Limited Liability) structure',
        'CBB Rulebook Vol. 6 - Offering of Securities Module',
        'Bahrain Bourse Listing Rules (if listed)'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Yes - shares are movable property',
      ownershipRights: [
        'Ownership stake in company assets (residual claim)',
        'Voting rights (proportional to shareholding)',
        'Dividend rights',
        'Pre-emption rights (right of first refusal on new shares)',
        'Liquidation proceeds (after creditors)'
      ],
      transferMechanism: 'Book-entry transfer via Bahrain Clear (if listed) or company registry',
      goodFaithProtections: 'Civil Code Art. 19/2001 - good faith purchaser protections'
    },

    controlMechanisms: {
      primaryControl: 'Bahrain Clear (CSD) for listed shares; company registry for unlisted',
      registrationRequired: true,
      custodyOptions: [
        'Bahrain Clear (dematerialized for listed companies)',
        'Company share register (unlisted companies)',
        'CBB-licensed broker/custodian'
      ],
      settlementMethod: 'T+2 DVP (Delivery vs Payment) via Bahrain Clear'
    },

    shariahCompliance: {
      aaoifiGuidance: 'AAOIFI standards on equity investment screening',
      considerations: [
        'Business activities must be halal (no alcohol, gambling, pork, etc.)',
        'Debt-to-equity ratio limits (usually <33%)',
        'Interest income limits (<5% of total revenue)',
        'Shariah screening required for Islamic portfolios',
        'Dual market: conventional and Islamic equity indices'
      ],
      consensusView: 'Permissible if company passes Shariah screening criteria'
    },

    tokenizationSuitability: {
      feasibility: 'Medium-High - pending regulatory clarity on tokenized shares',
      regulatoryPath: 'Crypto-Asset Module CA-3 (Asset Tokens) + Securities Offering',
      precedents: []
    },

    risks: [
      'Market risk (price volatility)',
      'Liquidity risk (if unlisted)',
      'Corporate governance risk',
      'Shariah compliance risk (if company changes business mix)'
    ],

    sources: [
      'Commercial Companies Law (Legislative Decree 21/2001, amended 2025)',
      'CBB Rulebook Vol. 6 - Securities definition',
      'Bahrain Bourse Listing Rules',
      'Civil Code (2001)'
    ]
  },

  {
    id: 'bonds-debt',
    name: 'Bonds and Debt Securities',
    category: 'securities',
    description: 'Bonds or other forms of debt, including depositary receipts in respect of such securities. Conventional interest-bearing instruments.',

    legalClassification: {
      primaryLaw: 'CBB Law (2006) + CBB Rulebook Vol. 6',
      classification: 'Security - Debt',
      regulatoryStatus: 'Regulated by CBB',
      specificProvisions: [
        'CBB Rulebook Vol. 6 - Securities definition',
        'Offering of Securities Module',
        'Government debt instruments (sovereign bonds)',
        'Corporate bonds issued by BSCs',
        'Islamic alternative: Sukuk (separate category)'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Yes - debt securities are movable property',
      ownershipRights: [
        'Creditor claim on issuer',
        'Right to principal repayment',
        'Right to periodic interest payments',
        'Security interest (if secured bonds)',
        'Ranking in insolvency (senior/subordinated)'
      ],
      transferMechanism: 'Book-entry transfer via Bahrain Clear or OTC',
      goodFaithProtections: 'Civil Code good faith purchaser protections'
    },

    controlMechanisms: {
      primaryControl: 'Bahrain Clear for listed bonds; registrar for unlisted',
      registrationRequired: true,
      custodyOptions: [
        'Bahrain Clear (listed bonds)',
        'Bond registrar/paying agent',
        'International custodians (for Eurobonds)'
      ],
      settlementMethod: 'T+2 DVP via Bahrain Clear (domestic); varies for international'
    },

    shariahCompliance: {
      aaoifiGuidance: 'Prohibited - interest-bearing instruments (Riba)',
      considerations: [
        'Conventional bonds prohibited for Islamic investors',
        'Interest (Riba) explicitly forbidden in Islamic law',
        'Islamic alternative: Sukuk (asset-backed certificates)',
        'Dual market in Bahrain: conventional and Islamic instruments'
      ],
      consensusView: 'Prohibited - not Shariah-compliant (use Sukuk instead)'
    },

    tokenizationSuitability: {
      feasibility: 'Medium - regulatory path exists but limited demand',
      regulatoryPath: 'CA-3 Asset Tokens + Securities Offering',
      precedents: []
    },

    risks: [
      'Credit risk (issuer default)',
      'Interest rate risk',
      'Liquidity risk',
      'Not suitable for Islamic portfolios'
    ],

    sources: [
      'CBB Rulebook Vol. 6 - Securities',
      'CBB Law (2006)'
    ]
  },

  // SUKUK (Islamic Bonds)
  {
    id: 'sukuk',
    name: 'Sukuk (Islamic Bonds)',
    category: 'sukuk',
    description: 'Shariah-compliant certificates representing proportional ownership in underlying assets, usufruct, services, or project equity. Major Islamic bond market with AAOIFI headquarters providing authoritative guidance.',

    legalClassification: {
      primaryLaw: 'CBB Rulebook Vol. 6 + AAOIFI Standards',
      classification: 'Security - Islamic (Sukuk)',
      regulatoryStatus: 'Regulated by CBB + AAOIFI Shariah Supervisory Board',
      specificProvisions: [
        'CBB Rulebook Vol. 6: Islamic securities must be Shariah-compliant',
        'AAOIFI Shariah Standard 17 (current sukuk standard)',
        'AAOIFI Standard 62 (draft) - comprehensive sukuk reform',
        'CBB Offering of Securities Module',
        'Bahrain Bourse listing permitted'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Yes - represents proportional ownership in underlying asset',
      ownershipRights: [
        'Proportional undivided ownership interest in underlying asset',
        'Right to asset proceeds (rental, profit, sale)',
        'Asset-backed: legal ownership transfer (Standard 62 requirement)',
        'Asset-based: beneficial ownership without legal transfer (traditional)',
        'Residual claim on asset value'
      ],
      transferMechanism: 'Book-entry transfer via Bahrain Clear; underlying asset ownership follows',
      goodFaithProtections: 'Civil Code protections + Shariah authenticity requirements'
    },

    controlMechanisms: {
      primaryControl: 'Dual control: Bahrain Clear (certificates) + Asset registry/SPV (underlying)',
      registrationRequired: true,
      custodyOptions: [
        'Bahrain Clear (for listed sukuk)',
        'International custodians (Eurosukuk)',
        'Special Purpose Vehicle (SPV) holding underlying assets'
      ],
      settlementMethod: 'T+2 DVP via Bahrain Clear; asset ownership tracked via SPV'
    },

    shariahCompliance: {
      aaoifiGuidance: 'AAOIFI Standard 17 (current) + Standard 62 (draft)',
      considerations: [
        'Must represent genuine asset ownership (not debt wrapper)',
        'Profit-sharing based on asset performance, not guaranteed interest',
        'Common structures: Ijarah (lease), Mudarabah (profit-sharing), Musharakah (partnership), Murabaha (cost-plus)',
        'AAOIFI Standard 62 (draft) requires true legal ownership transfer',
        'Prohibition of purchase guarantees and guaranteed returns',
        'Asset must be Shariah-compliant (no haram industries)',
        'SPV structure must ensure sukukholders bear real asset risk'
      ],
      consensusView: 'Permissible - foundation of Islamic capital markets'
    },

    tokenizationSuitability: {
      feasibility: 'High - natural fit for blockchain-based asset certificates',
      regulatoryPath: 'CA-3 Asset Tokens + Islamic Securities regulations + AAOIFI compliance',
      precedents: [
        'AAOIFI Standard 62 (draft) contemplates modern sukuk structures',
        'Bahrain is global sukuk market leader',
        'Multiple fintech sukuk pilot projects'
      ]
    },

    risks: [
      'AAOIFI Standard 62 implementation risk (if finalized, may invalidate some structures)',
      'Asset ownership verification complexity',
      'SPV structural risk',
      'Shariah non-compliance risk (reputation and regulatory)',
      'Liquidity risk (secondary market depth)',
      'Asset performance risk (returns not guaranteed)'
    ],

    sources: [
      'AAOIFI Shariah Standard 17 (2003, current)',
      'AAOIFI Standard 62 (draft, exposure 2023-2025)',
      'CBB Rulebook Vol. 6 - Islamic securities',
      'Fitch Ratings: "AAOIFI Standard 62\'s Final Form, Adoption to Determine Impact on Sukuk" (2024)',
      'FIM Partners White Paper: AAOIFI Shariah Standard No. 62 (July 2025)'
    ]
  },

  // REAL ESTATE
  {
    id: 'real-estate',
    name: 'Real Estate (Land and Buildings)',
    category: 'real-estate',
    description: 'Freehold and leasehold property ownership in Bahrain. Ownership registration operated by MOIC (Ministry of Industry and Commerce) via Survey and Land Registration Bureau.',

    legalClassification: {
      primaryLaw: 'Property Registration Law (2013) + Real Estate Regulatory Act (2017)',
      classification: 'Immovable property (real property)',
      regulatoryStatus: 'MOIC registration; RERA (Real Estate Regulatory Authority) oversight',
      specificProvisions: [
        'Law No. 13 of 2013 - Property Registration Law',
        'Law No. 27 of 2017 - Real Estate Regulatory Act',
        'Civil Code (2001) - property rights framework',
        'Foreign ownership permitted in designated areas',
        'GCC nationals: full ownership rights (Law No. 40 of 1999)',
        'Non-Bahrainis: ownership in designated freehold areas (Decree No. 2 of 2001)'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Yes - immovable property with registered title',
      ownershipRights: [
        'Freehold ownership (full property rights)',
        'Leasehold (time-limited rights)',
        'Right to possess, use, mortgage, sell',
        'Right to rental income',
        'Development rights (subject to planning permission)',
        'Good faith purchaser protections (Civil Code Art. 19/2001)'
      ],
      transferMechanism: 'Title deed registration at MOIC Survey and Land Registration Bureau',
      goodFaithProtections: 'Civil Code Art. 19/2001 - bona fide purchaser for value protections'
    },

    controlMechanisms: {
      primaryControl: 'MOIC property registry (official title system)',
      registrationRequired: true,
      custodyOptions: [
        'Direct ownership (title deed registration)',
        'Trust structure (if applicable)',
        'REIT (indirect ownership via securities)'
      ],
      settlementMethod: 'Notarized title deed transfer + MOIC registration'
    },

    shariahCompliance: {
      aaoifiGuidance: 'Property ownership permissible; rental income via Ijarah structure',
      considerations: [
        'Ownership permissible - physical asset',
        'Rental income: permissible via Ijarah (Islamic lease)',
        'Property development financing: use Istisna (construction finance) or Murabaha',
        'Mortgage (Rahn): Islamic banks use Ijarah or Murabaha structures',
        'Property must not be used for haram purposes'
      ],
      consensusView: 'Permissible - real estate is core halal asset class'
    },

    tokenizationSuitability: {
      feasibility: 'Medium - requires legal framework for tokenized title or fractional REIT-like structure',
      regulatoryPath: 'CA-3 Asset Tokens + property law amendment or REIT structure',
      precedents: []
    },

    risks: [
      'Property law does not currently recognize tokenized title',
      'Registration system not digitized for blockchain integration',
      'Foreign ownership restrictions',
      'Market liquidity constraints',
      'Development risk'
    ],

    sources: [
      'Property Registration Law (Law 13/2013)',
      'Real Estate Regulatory Act (Law 27/2017)',
      'Civil Code (2001)',
      'MOIC property registration system'
    ]
  },

  {
    id: 'reits',
    name: 'Real Estate Investment Trusts (REITs)',
    category: 'real-estate',
    description: 'Units representing ownership in a pooled real estate investment vehicle. Regulated by CBB and tradable on Bahrain Bourse.',

    legalClassification: {
      primaryLaw: 'CBB Rulebook Vol. 6 + REIT Listing Rules',
      classification: 'Security - REIT Units',
      regulatoryStatus: 'CBB regulated + Bahrain Bourse listing',
      specificProvisions: [
        'CBB Rulebook Vol. 6 - Securities definition includes REIT units',
        'Bahrain Bourse REIT Listing Rules',
        'Fund Manager and Operator requirements',
        'Dematerialization required (electronic form)',
        'NAV (Net Asset Value) disclosure requirements'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'Yes - REIT units are securities (indirect property ownership)',
      ownershipRights: [
        'Proportional ownership interest in REIT portfolio',
        'Right to distributions (rental income + capital gains)',
        'Voting rights (unitholder meetings)',
        'No direct property ownership (held by REIT)',
        'Transferable units'
      ],
      transferMechanism: 'Book-entry transfer via Bahrain Clear',
      goodFaithProtections: 'Securities law protections'
    },

    controlMechanisms: {
      primaryControl: 'Bahrain Clear (CSD) for unit ownership; Fund Manager for property portfolio',
      registrationRequired: true,
      custodyOptions: [
        'Bahrain Clear (dematerialized units)',
        'CBB-licensed broker/custodian',
        'Direct registry with REIT Operator'
      ],
      settlementMethod: 'T+2 DVP via Bahrain Clear'
    },

    shariahCompliance: {
      aaoifiGuidance: 'AAOIFI standards on real estate investment',
      considerations: [
        'Islamic REITs (I-REITs): Shariah-compliant property portfolios',
        'Properties must not be used for haram purposes (no hotels serving alcohol, etc.)',
        'Financing structure: use Ijarah or Mudarabah, not interest-bearing debt',
        'Rental income permissible (Ijarah structure)',
        'Shariah Supervisory Board required for I-REITs'
      ],
      consensusView: 'Permissible if structured as Islamic REIT with halal properties'
    },

    tokenizationSuitability: {
      feasibility: 'High - REIT units already securitized, blockchain tokenization is incremental',
      regulatoryPath: 'CA-3 Asset Tokens + REIT regulations compliance',
      precedents: []
    },

    risks: [
      'Property market risk',
      'Liquidity risk (if not listed)',
      'Fund Manager performance risk',
      'Shariah compliance risk (for I-REITs)'
    ],

    sources: [
      'Bahrain Bourse REIT Listing Rules',
      'CBB Rulebook Vol. 6 - Securities'
    ]
  },

  // BANK DEPOSITS
  {
    id: 'bank-deposits-conventional',
    name: 'Conventional Bank Deposits',
    category: 'bank-deposits',
    description: 'Interest-bearing deposit accounts at conventional banks. Regulated by CBB under banking law.',

    legalClassification: {
      primaryLaw: 'CBB Law (2006) + CBB Banking Rulebook',
      classification: 'Bank deposit liability',
      regulatoryStatus: 'CBB regulated banking product',
      specificProvisions: [
        'CBB Law (Law 64/2006)',
        'Deposit insurance (if applicable)',
        'Account types: Current, Savings, Fixed Deposit',
        'Interest-bearing (Riba-based)',
        'Not securities - contractual claim on bank'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'No - contractual claim, not property',
      ownershipRights: [
        'Creditor claim on bank (unsecured)',
        'Right to deposit principal',
        'Right to accrued interest',
        'Right to withdraw (subject to notice period)',
        'Deposit insurance protection (if applicable)'
      ],
      transferMechanism: 'Account transfer or payment instruction',
      goodFaithProtections: 'Banking law protections; deposit insurance'
    },

    controlMechanisms: {
      primaryControl: 'Bank ledger + customer account record',
      registrationRequired: false,
      custodyOptions: [
        'Direct account with CBB-licensed bank',
        'No third-party custody (bank holds deposit)'
      ],
      settlementMethod: 'RTGS (Bahrain RTGS system) or internal bank transfer'
    },

    shariahCompliance: {
      aaoifiGuidance: 'Prohibited - interest-bearing (Riba)',
      considerations: [
        'Interest (Riba) explicitly prohibited',
        'Not suitable for Islamic investors',
        'Islamic alternative: Islamic bank deposits (see separate entry)'
      ],
      consensusView: 'Prohibited - Riba-based product'
    },

    tokenizationSuitability: {
      feasibility: 'Low - deposit is contractual claim, not transferable asset',
      regulatoryPath: 'Not applicable - deposits generally not tokenizable',
      precedents: []
    },

    risks: [
      'Bank credit risk',
      'Interest rate risk',
      'Not Shariah-compliant'
    ],

    sources: [
      'CBB Law (2006)',
      'CBB Banking Rulebook'
    ]
  },

  {
    id: 'bank-deposits-islamic',
    name: 'Islamic Bank Deposits',
    category: 'bank-deposits',
    description: 'Shariah-compliant deposit accounts at Islamic banks. Bahrain is a pioneer in Islamic banking. Structured as Mudarabah (profit-sharing) or Qard Hasan (benevolent loan).',

    legalClassification: {
      primaryLaw: 'CBB Law (2006) + AAOIFI Standards',
      classification: 'Islamic banking product - Mudarabah or Wadiah',
      regulatoryStatus: 'CBB regulated + AAOIFI Shariah compliance',
      specificProvisions: [
        'CBB Law (2006) - Islamic banking permitted',
        'AAOIFI Shariah standards on Mudarabah',
        'Shariah Supervisory Board oversight',
        'Account types: Wadiah (safekeeping), Mudarabah (profit-sharing), Qard Hasan (benevolent loan)'
      ]
    },

    propertyStatus: {
      recognizedAsProperty: 'No - investment partnership (Mudarabah) or safekeeping (Wadiah)',
      ownershipRights: [
        'Mudarabah: profit-sharing partner, not creditor',
        'Wadiah: safekeeping, guaranteed return of principal',
        'No fixed interest - returns based on bank profit',
        'Capital at risk (Mudarabah accounts)',
        'Right to withdraw (subject to Shariah-compliant notice)'
      ],
      transferMechanism: 'Account transfer or payment instruction',
      goodFaithProtections: 'Islamic banking regulations; Shariah protections'
    },

    controlMechanisms: {
      primaryControl: 'Islamic bank ledger + Shariah-compliant account structure',
      registrationRequired: false,
      custodyOptions: [
        'Direct account with CBB-licensed Islamic bank',
        'No third-party custody'
      ],
      settlementMethod: 'RTGS (Bahrain RTGS) or internal transfer'
    },

    shariahCompliance: {
      aaoifiGuidance: 'AAOIFI Shariah standards on Mudarabah, Wadiah, Qard Hasan',
      considerations: [
        'Mudarabah: profit-sharing partnership (permissible)',
        'Wadiah: safekeeping with no return or nominal gift (permissible)',
        'Qard Hasan: benevolent loan, no return expected (permissible)',
        'No guaranteed returns (profit depends on bank performance)',
        'Capital not protected (Mudarabah) - true risk-sharing',
        'Bank must invest in halal assets only'
      ],
      consensusView: 'Permissible - core Islamic banking product'
    },

    tokenizationSuitability: {
      feasibility: 'Low - deposit is partnership interest, not transferable asset',
      regulatoryPath: 'Not applicable',
      precedents: []
    },

    risks: [
      'Bank credit risk',
      'Profit risk (returns not guaranteed)',
      'No deposit insurance (typically)',
      'Shariah non-compliance risk'
    ],

    sources: [
      'CBB Law (2006)',
      'AAOIFI Shariah standards on Mudarabah and Wadiah',
      'Bahrain Islamic banking sector reports'
    ]
  }
];
