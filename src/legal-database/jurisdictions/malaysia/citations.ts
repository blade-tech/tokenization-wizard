/**
 * Malaysia Legal Citations Library
 *
 * Comprehensive collection of statutes, regulations, Shariah rulings, guidance,
 * and standards referenced throughout the Malaysia jurisdiction files.
 */

import type { Citation } from '../../types';

export const malaysiaCitations: Citation[] = [
  // ========== PRIMARY LEGISLATION (STATUTES) ==========
  {
    id: 'cmsa-2007',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Capital Markets and Services Act 2007',
    reference: 'Act 671',
    section: 'Entire Act (esp. Part VI - Central Depositories)',
    url: 'https://www.sc.com.my/legislation/capital-markets-and-services-act-2007',
    summary: 'Primary securities legislation governing capital markets, digital assets (via Prescription Orders), securities exchanges, central depositories, and market intermediaries. Digital assets prescribed as securities under Section 2 via Digital Currency and Digital Token Orders.',
    relevantQuote: 'Section 2: "securities" includes... any digital currency or digital token as prescribed by the Minister under section 4',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'digital-asset-prescription-order-2019',
    type: 'regulation',
    jurisdiction: 'malaysia',
    title: 'Capital Markets and Services (Prescription of Securities) (Digital Currency and Digital Token) Order 2019',
    reference: 'P.U.(A) 23/2019',
    url: 'https://www.sc.com.my/api/documentms/download.ashx?id=a25c3b49-c6c0-4c7e-8c5a-3b9d6e8c2e1d',
    summary: 'Prescribes digital currencies and digital tokens as securities under CMSA 2007, bringing them within SC regulatory perimeter. Defines digital asset, digital currency, and digital token.',
    relevantQuote: 'Any digital currency or digital token is prescribed to be securities under section 4 of the Capital Markets and Services Act 2007.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'digital-asset-amendment-order-2025',
    type: 'regulation',
    jurisdiction: 'malaysia',
    title: 'Capital Markets and Services (Prescription of Securities) (Digital Currency and Digital Token) (Amendment) Order 2025',
    reference: 'P.U.(A) 5/2025',
    url: 'https://www.sc.com.my',
    summary: 'Effective January 9, 2025. Refines digital token definition to exclude loyalty points, in-game assets without real-world trading, and certain NFTs from securities regulation. Clarifies regulatory perimeter.',
    lastUpdated: '2025-01-09',
    authorityLevel: 'primary'
  },

  {
    id: 'sc-digital-asset-guidelines-2024',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Guidelines on Digital Assets',
    reference: 'SC Guidelines (updated August 2024)',
    url: 'https://www.sc.com.my/regulation/guidelines/digital-assets',
    summary: 'Comprehensive framework for digital asset regulation including: (1) 4-category classification (Digital Securities, Digital Currencies, Utility Tokens, NFTs), (2) DAX operator requirements, (3) IEO framework, (4) custody and safeguarding, (5) investor protection. One of world\'s most comprehensive digital asset frameworks.',
    lastUpdated: '2024-08-31',
    authorityLevel: 'guidance'
  },

  {
    id: 'ifsa-2013',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Islamic Financial Services Act 2013',
    reference: 'Act 759',
    url: 'https://www.bnm.gov.my/documents/20124/761682/Islamic+Financial+Services+Act+2013.pdf',
    summary: 'World\'s most comprehensive Islamic banking and finance law. Governs Islamic financial institutions, takaful (Islamic insurance), Shariah governance frameworks. Establishes Shariah Advisory Council (SAC) at BNM with binding authority. Enables Shariah-compliant tokenization structures.',
    relevantQuote: 'Section 56: A ruling of the Shariah Advisory Council... shall be binding on the court',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'fsa-2013',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Financial Services Act 2013',
    reference: 'Act 758',
    url: 'https://www.bnm.gov.my/documents/20124/761678/Financial+Services+Act+2013.pdf',
    summary: 'Regulates conventional banking, insurance, and financial institutions. Parallel framework to IFSA 2013 for non-Islamic finance. Covers licensing, prudential requirements, consumer protection, and payment services.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'companies-act-2016',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Companies Act 2016',
    reference: 'Act 777',
    section: 'Section 50 (Register of members), Section 58 (Certificate as evidence), Section 105 (Transfer of shares)',
    url: 'https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016%20-%20(Act%20777).pdf',
    summary: 'Corporate governance legislation governing companies, share registers, and shareholder rights. Section 50 permits electronic registers. Registration on company register confers legal title to shares. Enables tokenized equity structures.',
    relevantQuote: 'Section 50(2): The register may be kept by making entries in a bound book or by recording the information in any other manner.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'payment-systems-act-2003',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Payment Systems Act 2003',
    reference: 'Act 627',
    section: 'Section 16 (Settlement finality)',
    url: 'https://www.bnm.gov.my/documents/20124/761550/Payment+Systems+Act+2003.pdf',
    summary: 'Governs designated payment systems, settlement finality, e-money, and BNM oversight of payment infrastructure. Section 16 provides settlement finality protections - settled transactions cannot be revoked even upon participant insolvency.',
    relevantQuote: 'Section 16: A transfer order... which has been entered into a designated payment system shall not be revoked',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'eca-2006',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Electronic Commerce Act 2006',
    reference: 'Act 658',
    section: 'Sections 6-8 (Electronic signatures and records)',
    url: 'https://www.legislation.gov.my/dms/view?id=1216561',
    summary: 'Provides legal recognition for electronic signatures, contracts, and records. Section 6 establishes requirements for valid electronic signatures. Section 8 governs integrity and reliability of electronic records. Enables tokenization of trade documents.',
    relevantQuote: 'Section 6: Where any law requires a signature... that requirement is fulfilled if an electronic signature is used',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'digital-signature-act-1997',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Digital Signature Act 1997',
    reference: 'Act 562',
    url: 'https://www.legislation.gov.my/dms/view?id=1216305',
    summary: 'Framework for certified digital signatures and certification authorities. Provides enhanced legal presumptions for certified digital signatures. Licensed certification authorities issue digital certificates.',
    relevantQuote: 'Section 62: Where a digital signature is verified by reference to a certificate... a person relying on it shall be deemed to have acted reasonably',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'national-land-code-1965',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'National Land Code 1965',
    reference: 'Act 56 of 1965',
    section: 'Section 89 (Indefeasibility), Section 214 (Transfer), Section 340 (Registration)',
    url: 'https://www.kptg.gov.my/en/land-administration/national-land-code',
    summary: 'Governs land registration in Peninsular Malaysia using Torrens system. Section 89 establishes indefeasibility of registered title - registration confers legal ownership. Section 340 requires registration for title to pass. Direct tokenization of land title unclear.',
    relevantQuote: 'Section 340: No dealing shall operate to pass any interest until registered',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'strata-titles-1985',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Strata Titles Act 1985',
    reference: 'Act 318',
    url: 'https://www.kptg.gov.my/en/land-administration/strata-titles-act',
    summary: 'Governs strata title ownership for condominiums, apartments, and commercial buildings. Provides framework for individual ownership of units in multi-unit developments. Registration at Land Office required.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'central-bank-act-2009',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Central Bank of Malaysia Act 2009',
    reference: 'Act 701',
    url: 'https://www.bnm.gov.my/documents/20124/761546/Central+Bank+of+Malaysia+Act+2009.pdf',
    summary: 'Establishes Bank Negara Malaysia\'s powers including monetary policy, payment system oversight, Islamic finance supervision, and financial stability mandates. BNM operates RENTAS (RTGS) and oversees designated payment systems.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'amla-2001',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001',
    reference: 'Act 613',
    url: 'https://www.bnm.gov.my/aml-cft',
    summary: 'AML/CFT framework requiring reporting institutions (including DAX operators) to conduct customer due diligence, monitor transactions, and report suspicious activities. Digital asset service providers are reporting institutions.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  // ========== REGULATIONS AND GUIDELINES ==========
  {
    id: 'sc-dax-guidelines',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Guidelines on Recognized Markets (Digital Asset Exchanges)',
    reference: 'SC Guidelines',
    url: 'https://www.sc.com.my/regulation/guidelines/recognized-markets',
    summary: 'Requirements for Digital Asset Exchange (DAX) operators including minimum capital (RM5 million), fit and proper criteria, operational standards, custody requirements, cybersecurity, and investor protection.',
    lastUpdated: '2024-08-31',
    authorityLevel: 'guidance'
  },

  {
    id: 'sc-ieo-framework',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Framework for Initial Exchange Offerings (IEOs)',
    reference: 'SC Guidelines on Digital Assets (Section 3)',
    url: 'https://www.sc.com.my/regulation/guidelines/digital-assets',
    summary: 'Framework for token fundraising through registered DAX operators. Requires issuer due diligence, technical whitepaper, MVP, investor protection mechanisms, and ongoing disclosure obligations.',
    lastUpdated: '2024-08-31',
    authorityLevel: 'guidance'
  },

  {
    id: 'sc-safeguarding-client-assets',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Guidelines on Safeguarding of Client Assets',
    reference: 'SC Guidelines',
    url: 'https://www.sc.com.my/regulation/guidelines/safeguarding-client-assets',
    summary: 'Requirements for segregation and protection of client assets including digital assets. Custodians must maintain separate accounts, obtain fidelity insurance, and implement robust controls.',
    lastUpdated: '2024-09-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'sukuk-guidelines-2014',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Guidelines on Sukuk',
    reference: 'SC Guidelines (updated 2014)',
    url: 'https://www.sc.com.my/api/documentms/download.ashx?id=d17d16b0-1c5e-4f9d-8e1a-7c8d9e0b1a2b',
    summary: 'Framework for Islamic bonds (sukuk) covering 14 approved Shariah structures including ijarah, mudarabah, musharakah, istisna, and others. Malaysia has world\'s largest sukuk market. Enables sukuk tokenization.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'sc-islamic-capital-market',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Guidelines on Islamic Capital Market',
    reference: 'SC Guidelines',
    url: 'https://www.sc.com.my/regulation/guidelines/islamic-capital-market',
    summary: 'Comprehensive Islamic capital market framework including Shariah screening criteria, permissible securities structures, Shariah governance, and compliance requirements. SC maintains list of Shariah-compliant securities updated twice yearly.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'sc-reit-guidelines',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Guidelines on Real Estate Investment Trusts',
    reference: 'SC Guidelines',
    url: 'https://www.sc.com.my/regulation/guidelines/reits',
    summary: 'Framework for REITs including minimum fund size (RM100 million), distribution requirements (90% of income), property valuation, and trustee/manager licensing. Tokenization of REIT units requires SC approval.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'bnm-emoney-policy-2022',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'BNM Electronic Money Issuance Policy',
    reference: 'BNM Policy Document (2022)',
    url: 'https://www.bnm.gov.my/documents/20124/3770663/Electronic+Money+Issuance+Policy.pdf',
    summary: 'Framework for e-money issuance requiring BNM approval, safeguarding of funds, redemption rights, and operational standards. E-money issuers must be licensed financial institutions or approved operators.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'bnm-shariah-governance',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'BNM Shariah Governance Framework for Islamic Financial Institutions',
    reference: 'BNM Policy Document',
    url: 'https://www.bnm.gov.my/documents/20124/963937/Shariah+Governance+Framework.pdf',
    summary: 'Comprehensive Shariah governance requirements including Shariah committee composition, independence, competency, audit, risk management, and compliance functions. Applies to all Islamic financial institutions.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'cds-rules',
    type: 'regulation',
    jurisdiction: 'malaysia',
    title: 'Central Depository System (CDS) Rules',
    reference: 'Bursa Malaysia Depository Rules',
    url: 'https://www.bursamalaysia.com/regulation/rules',
    summary: 'Operating rules for Central Depository System governing scripless securities settlement, account opening, transfers, pledges, and corporate actions. CDS register is prima facie evidence of ownership per CMSA 2007 Section 37.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'bursa-operating-rules',
    type: 'regulation',
    jurisdiction: 'malaysia',
    title: 'Bursa Malaysia Securities Trading Rules',
    reference: 'Bursa Rules',
    url: 'https://www.bursamalaysia.com/regulation/rules/securities',
    summary: 'Trading rules for equities and sukuk on Bursa Malaysia including order types, trading hours, price limits, settlement procedures (T+2), and market conduct requirements.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'bursa-listing-requirements',
    type: 'regulation',
    jurisdiction: 'malaysia',
    title: 'Bursa Malaysia Main Market Listing Requirements',
    reference: 'Bursa LR',
    url: 'https://www.bursamalaysia.com/regulation/listing_requirements/main_market',
    summary: 'Requirements for public listing including minimum market capitalization, profit track record, public spread, corporate governance, and ongoing disclosure obligations.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'rentas-operating-rules',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'RENTAS Operating Rules and Procedures',
    reference: 'BNM RENTAS Rules',
    url: 'https://www.bnm.gov.my/rentas',
    summary: 'Operating rules for Real-Time Electronic Transfer of Funds and Securities (RENTAS) - Malaysia\'s RTGS system. Minimum transaction RM10,000, real-time gross settlement, settlement finality protections under Payment Systems Act 2003.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'fpx-operating-rules',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'Financial Process Exchange (FPX) Operating Rules',
    reference: 'FPX Operating Manual',
    url: 'https://www.mepsfpx.com.my',
    summary: 'Operating rules for FPX online banking payment system. Real-time payment confirmation for e-commerce and bill payments. Connects to all major banks in Malaysia.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'ibg-operating-rules',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'Interbank GIRO (IBG) Operating Rules',
    reference: 'IBG Operating Manual',
    url: 'https://www.mepsfpx.com.my',
    summary: 'Operating rules for bulk payment clearing system. T+1 settlement for salary payments, vendor payments, and other bulk transfers. Operated by Payments Network Malaysia (PayNet).',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'duitnow-operating-rules',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'DuitNow Operating Rules',
    reference: 'DuitNow Operating Manual',
    url: 'https://www.duitnow.my',
    summary: 'Operating rules for instant payment and QR code system. Real-time transfer with RM50,000 limit per transaction. Enables proxy payments using mobile number, NRIC, or business registration number.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'labuan-fsa-digital-asset-framework',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'Labuan FSA Digital Asset and Fintech Framework',
    reference: 'Labuan FSA Guidelines',
    url: 'https://www.labuanibfc.com/digital-assets',
    summary: 'Offshore digital asset licensing framework. Separate regime from onshore SC regulation. Lower capital requirements (RM250,000 - RM1 million), streamlined approvals, low tax (3% or RM20,000 flat). Licenses for digital asset exchanges, custody, tokenization platforms.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  // ========== SHARIAH ADVISORY COUNCIL (SAC) RULINGS ==========
  {
    id: 'sac-rulings',
    type: 'fatwa',
    jurisdiction: 'malaysia',
    title: 'Shariah Advisory Council Rulings Compendium',
    reference: 'SAC Rulings (SC and BNM)',
    url: 'https://www.sc.com.my/regulation/shariah-advisory-council',
    summary: 'Collection of binding Shariah rulings on financial products and services. IFSA 2013 Section 56 makes SAC rulings binding on courts. Covers permissibility of financial instruments, digital assets, and investment structures.',
    relevantQuote: 'IFSA 2013 Section 56: A ruling of the Shariah Advisory Council... shall be binding on the court',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'sac-digital-assets',
    type: 'fatwa',
    jurisdiction: 'malaysia',
    title: 'SAC Ruling on Digital Assets and Cryptocurrencies',
    reference: 'SAC Ruling',
    summary: 'SC Shariah Advisory Council has ruled that digital assets can be Shariah-compliant if: (1) underlying asset/activity is halal, (2) no riba (interest), (3) no gharar (excessive uncertainty), (4) no maysir (gambling), (5) asset-backing for Islamic digital currencies.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'bnm-musharakah-mutanaqisah',
    type: 'fatwa',
    jurisdiction: 'malaysia',
    title: 'BNM SAC Ruling on Musharakah Mutanaqisah (Diminishing Partnership)',
    reference: 'BNM SAC Ruling',
    summary: 'BNM Shariah Advisory Council approved musharakah mutanaqisah structure for Islamic home financing. Bank and customer enter partnership to purchase property; customer gradually buys out bank\'s share through rental payments.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'bursa-suq-al-sila',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'Bursa Suq Al-Sila (Commodity Murabahah Platform)',
    reference: 'Bursa Malaysia Platform',
    url: 'https://www.bursamalaysia.com/trade/islamic_markets/bursa_suq_al_sila',
    summary: 'Shariah-compliant commodity trading platform for Islamic financial institutions to manage liquidity using commodity murabahah (tawarruq). Approved by SC SAC. Enables Islamic interbank liquidity without riba.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  // ========== CASES AND PRECEDENTS ==========
  {
    id: 'adorna-properties-2001',
    type: 'case',
    jurisdiction: 'malaysia',
    title: 'Adorna Properties Sdn Bhd v Boonsom Boonyanit',
    reference: '[2001] 2 MLJ 11 (Federal Court)',
    url: 'https://www.commonlii.org/my/cases/MYFC/2001/1.html',
    summary: 'Landmark Federal Court case on Torrens system indefeasibility. Held that registered proprietor\'s title is indefeasible except in cases of fraud, forgery, or immediate registration exception. Confirms strong property rights under National Land Code.',
    relevantQuote: 'The principle of indefeasibility of title is the very foundation of the Torrens system',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  // ========== ADDITIONAL STATUTES ==========
  {
    id: 'sale-goods-1957',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Sale of Goods Act 1957',
    reference: 'Act 382',
    url: 'https://www.legislation.gov.my',
    summary: 'Governs sale and transfer of tangible goods. Ownership passes when parties intend. Transfer of document of title (warehouse receipt) = transfer of constructive possession. Enables tokenization of commodity warehouse receipts.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'bills-exchange-1949',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Bills of Exchange Act 1949',
    reference: 'Act 204',
    summary: 'Governs negotiable instruments including bills of exchange, promissory notes, and cheques. Transfer by endorsement and delivery. Electronic bills of exchange possible under ECA 2006.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'carriage-goods-sea-1950',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Carriage of Goods by Sea Act 1950',
    reference: 'Act 527',
    summary: 'Governs bills of lading and shipping documents. Bill of lading = document of title and evidence of contract. Tokenization of bills of lading possible under ECA 2006 framework.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'contracts-act-1950',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Contracts Act 1950',
    reference: 'Act 136',
    summary: 'Foundational contract law based on Indian Contract Act 1872. Governs contract formation, performance, breach, and remedies. Electronic contracts valid under ECA 2006. Enables smart contract enforceability.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'evidence-act-1950',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Evidence Act 1950',
    reference: 'Act 56',
    section: 'Sections 90A-90C (Computer evidence)',
    summary: 'Governs admissibility of evidence. Sections 90A-90C provide presumption of accuracy for computer-generated records. Electronic records admissible if from reliable system. Supports blockchain evidence.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'trustee-act-1949',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Trustee Act 1949',
    reference: 'Act 208',
    summary: 'Governs trustee duties and powers. Relevant for custody arrangements where custodian holds digital assets as trustee for beneficial owners. Fiduciary duties apply.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'register-members-regs-2017',
    type: 'regulation',
    jurisdiction: 'malaysia',
    title: 'Companies (Register of Members) Regulations 2017',
    reference: 'P.U.(A) 220/2017',
    summary: 'Regulations governing company registers of members. Permits electronic registers. Specifies information to be maintained and accessibility requirements. Enables tokenized share registers.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'bnm-payment-systems-policy',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'BNM Payment Systems Policy',
    reference: 'BNM Policy Document',
    url: 'https://www.bnm.gov.my/payment-systems',
    summary: 'BNM oversight framework for payment systems including designation criteria, risk management standards, business continuity requirements, and settlement finality. Implements CPMI-IOSCO Principles.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'bnm-fx-admin-rules',
    type: 'regulation',
    jurisdiction: 'malaysia',
    title: 'BNM Foreign Exchange Administration Rules',
    reference: 'BNM Notices',
    url: 'https://www.bnm.gov.my/foreign-exchange',
    summary: 'Foreign exchange controls governing ringgit transactions. Restricts use of ringgit for cross-border cryptocurrency purchases. RENTAS supports cross-border settlement in MYR, USD, RMB.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  },

  {
    id: 'swift-operating-rules',
    type: 'standard',
    jurisdiction: 'malaysia',
    title: 'SWIFT Operating Rules and Standards',
    reference: 'SWIFT Standards',
    url: 'https://www.swift.com',
    summary: 'International messaging standards for cross-border payments. Malaysian banks use SWIFT for international transfers. Messaging security, data privacy, and sanctions compliance requirements.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'secondary'
  },

  // ========== ADDITIONAL INDUSTRY RESOURCES ==========
  {
    id: 'cmsa-2007-part-vi',
    type: 'statute',
    jurisdiction: 'malaysia',
    title: 'Capital Markets and Services Act 2007 Part VI - Central Depositories',
    reference: 'Act 671 Part VI',
    section: 'Sections 34-39',
    summary: 'Specific provisions governing central depositories. Section 37: CDS register is prima facie evidence of ownership. Section 38: registration in CDS confers legal title. Section 39: settlement finality.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'primary'
  },

  {
    id: 'sc-recognized-markets-guidelines',
    type: 'guidance',
    jurisdiction: 'malaysia',
    title: 'SC Guidelines on Regulation of Markets',
    reference: 'SC Guidelines',
    url: 'https://www.sc.com.my/regulation/guidelines/recognized-markets',
    summary: 'Framework for recognized market operators including stock exchanges and digital asset exchanges. Covers licensing, operational requirements, market surveillance, and investor protection.',
    lastUpdated: '2024-12-15',
    authorityLevel: 'guidance'
  }
];
