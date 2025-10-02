/**
 * UK Legal Citations Library
 *
 * Comprehensive collection of statutes, regulations, cases, guidance,
 * and standards referenced throughout the UK jurisdiction files.
 */

import type { Citation } from '../../types';

export const ukCitations: Citation[] = [
  // ========== PRIMARY LEGISLATION (STATUTES) ==========
  {
    id: 'etda-2023',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Electronic Trade Documents Act 2023',
    reference: '2023 c.38',
    section: 'Entire Act (esp. s.2 - control test)',
    url: 'https://www.legislation.gov.uk/ukpga/2023/38/enacted',
    summary: 'Revolutionary legislation giving electronic trade documents (bills of lading, warehouse receipts, bills of exchange, etc.) the same legal effect as paper originals. Section 2 defines "control" as exclusive ability to prevent others from exercising control, enabling tokenization.',
    relevantQuote: 'Section 2(2): A person has control of an electronic trade document if (a) the person is able to exercise control of the document, and (b) the person is able to exclude all other persons from exercising control of the document.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'fsma-2000',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Financial Services and Markets Act 2000',
    reference: '2000 c.8',
    url: 'https://www.legislation.gov.uk/ukpga/2000/8/contents',
    summary: 'Primary financial services legislation establishing FCA regulatory framework, general prohibition on unauthorized activities, and specified investments regime. Security tokens qualifying as specified investments fall under FSMA perimeter.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'fsma-2023',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Financial Services and Markets Act 2023',
    reference: '2023 c.29',
    section: 'Part 3A - FMI Sandbox',
    url: 'https://www.legislation.gov.uk/ukpga/2023/29/enacted',
    summary: 'Updates FSMA 2000 including provisions for Digital Securities Sandbox (FMI sandbox) allowing FCA to authorize innovative securities settlement and custody systems using DLT. Operational September 2024 - December 2028.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'companies-act-2006',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Companies Act 2006',
    reference: '2006 c.46',
    section: 'Part 8 (Share capital), s.113 (Register of members), s.127 (Register as evidence)',
    url: 'https://www.legislation.gov.uk/ukpga/2006/46/contents',
    summary: 'Primary corporate governance legislation. Part 8 governs share capital and share registers. Section 113 permits electronic share registers. Registration on company share register confers legal title to shares. Enables tokenized share registers.',
    relevantQuote: 'Section 113: The register of members may be kept by making entries in a bound book or by recording the information in any other manner.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'land-registration-act-2002',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Land Registration Act 2002',
    reference: '2002 c.9',
    section: 'Section 27 (Dispositions required to be registered)',
    url: 'https://www.legislation.gov.uk/ukpga/2002/9/contents',
    summary: 'Governs land registration at HM Land Registry. Section 27 requires registration of dispositions of registered estates. Transfer of legal title takes effect only upon registration. Direct tokenization of land not possible; SPV structures required.',
    relevantQuote: 'Section 27(1): If a disposition of a registered estate is required to be completed by registration, it does not operate at law until the relevant registration requirements are met.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'lpa-1925',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Law of Property Act 1925',
    reference: '1925 c.20',
    section: 'Section 52 (Conveyances to be by deed), Section 53 (Trusts)',
    url: 'https://www.legislation.gov.uk/ukpga/Geo5/15-16/20/contents',
    summary: 'Foundational property law statute. Section 52 requires conveyances of land to be by deed. Section 53 governs creation and disposition of equitable interests. Affects tokenization of real estate interests.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'lpa-misc-1989',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Law of Property (Miscellaneous Provisions) Act 1989',
    reference: '1989 c.34',
    section: 'Section 1 (Deeds and their execution), Section 2 (Contracts for sale of land)',
    url: 'https://www.legislation.gov.uk/ukpga/1989/34/contents',
    summary: 'Section 1 modernizes deed requirements; electronic signatures may satisfy deed formalities. Section 2 requires land sale contracts to be in writing. Enables electronic land transactions.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'sale-goods-act-1979',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Sale of Goods Act 1979',
    reference: '1979 c.54',
    url: 'https://www.legislation.gov.uk/ukpga/1979/54/contents',
    summary: 'Governs sale of goods (tangible movable property). Defines ownership, transfer of title, delivery, and nemo dat exceptions. Relevant for tokenization of commodities and documents of title (warehouse receipts).',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'factors-act-1889',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Factors Act 1889',
    reference: '1889 c.45',
    section: 'Section 2 (Powers of mercantile agent)',
    url: 'https://www.legislation.gov.uk/ukpga/Vict/52-53/45/contents',
    summary: 'Protects good faith purchasers acquiring goods from mercantile agents in possession of goods or documents of title. Exception to nemo dat rule. Relevant for warehouse receipts and bills of lading.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'bills-of-exchange-1882',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Bills of Exchange Act 1882',
    reference: '1882 c.61',
    url: 'https://www.legislation.gov.uk/ukpga/Vict/45-46/61/contents',
    summary: 'Governs negotiable instruments (bills of exchange, promissory notes, cheques). ETDA 2023 enables electronic equivalents with same legal effect. Relevant for tokenized payment instruments.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'carriage-goods-sea-1992',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Carriage of Goods by Sea Act 1992',
    reference: '1992 c.50',
    url: 'https://www.legislation.gov.uk/ukpga/1992/50/contents',
    summary: 'Governs bills of lading and sea waybills. Transfer of bill of lading transfers rights under contract of carriage. ETDA 2023 enables electronic bills of lading with same effect.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'patents-act-1977',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Patents Act 1977',
    reference: '1977 c.37',
    url: 'https://www.legislation.gov.uk/ukpga/1977/37/contents',
    summary: 'Governs patent registration and protection. Assignment of patents must be in writing and registered at UK IPO. Tokenization of patents requires assignment documentation.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'trademarks-act-1994',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Trade Marks Act 1994',
    reference: '1994 c.26',
    url: 'https://www.legislation.gov.uk/ukpga/1994/26/contents',
    summary: 'Governs trademark registration and protection. Assignment of trademarks must be in writing and registered at UK IPO. Tokenization of trademarks requires assignment documentation.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'copyright-act-1988',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Copyright, Designs and Patents Act 1988',
    reference: '1988 c.48',
    url: 'https://www.legislation.gov.uk/ukpga/1988/48/contents',
    summary: 'Governs copyright, design rights, and performers\' rights. Copyright arises automatically (no registration). Assignment must be in writing. NFTs may represent licenses or economic interests in copyrighted works.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'ip-act-2014',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Intellectual Property Act 2014',
    reference: '2014 c.18',
    url: 'https://www.legislation.gov.uk/ukpga/2014/18/contents',
    summary: 'Updates IP law including patent and trademark provisions. Modernizes assignment and licensing processes.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'climate-change-act-2008',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Climate Change Act 2008',
    reference: '2008 c.27',
    url: 'https://www.legislation.gov.uk/ukpga/2008/27/contents',
    summary: 'Establishes UK emissions reduction targets and framework. Enables emissions trading scheme.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'banking-act-2009',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Banking Act 2009',
    reference: '2009 c.1',
    url: 'https://www.legislation.gov.uk/ukpga/2009/1/contents',
    summary: 'Governs banking regulation and special resolution regime. Deposit-taking is regulated activity requiring authorization. Relevant for tokenized deposits.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'property-bill-2024',
    type: 'statute',
    jurisdiction: 'uk',
    title: 'Property (Digital Assets etc) Bill',
    reference: 'Bill 232 (2024-25)',
    url: 'https://bills.parliament.uk/bills/3723',
    summary: 'Pending legislation recognizing digital assets as distinct third category of personal property (neither thing in possession nor thing in action). Expected to provide statutory confirmation of UKJT and Law Commission conclusions.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  // ========== SECONDARY LEGISLATION (REGULATIONS) ==========
  {
    id: 'settlement-finality-regs-1999',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'Financial Markets and Insolvency (Settlement Finality) Regulations 1999',
    reference: 'SI 1999/2979',
    url: 'https://www.legislation.gov.uk/uksi/1999/2979/contents',
    summary: 'Implements EU Settlement Finality Directive. Provides insolvency protection for designated payment and securities settlement systems. Transfer orders irrevocable; zero-hour rule protection; collateral security arrangements protected.',
    relevantQuote: 'Regulation 14: A transfer order... shall be legally enforceable and binding on third parties... even in the event of insolvency proceedings against a participant.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'uncertificated-securities-regs-2001',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'Uncertificated Securities Regulations 2001',
    reference: 'SI 2001/3755',
    url: 'https://www.legislation.gov.uk/uksi/2001/3755/contents',
    summary: 'Enables electronic settlement of securities via CREST system (Euroclear UK & Ireland). Entry on CREST register confers legal title. Precedent for DLT-based securities settlement.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'e-money-regs-2011',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'Electronic Money Regulations 2011',
    reference: 'SI 2011/99',
    url: 'https://www.legislation.gov.uk/uksi/2011/99/contents',
    summary: 'Regulates issuance of electronic money (e-money tokens). Requires EMI authorization; safeguarding of funds; redemption at par. Relevant for stablecoins and tokenized payment instruments.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'payment-services-regs-2017',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'Payment Services Regulations 2017',
    reference: 'SI 2017/752',
    url: 'https://www.legislation.gov.uk/uksi/2017/752/contents',
    summary: 'Regulates payment services and payment institutions. Implements revised Payment Services Directive (PSD2). Relevant for tokenized payment systems.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'money-laundering-regs-2017',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017',
    reference: 'SI 2017/692',
    url: 'https://www.legislation.gov.uk/uksi/2017/692/contents',
    summary: 'Implements AML/CTF requirements. Cryptoasset businesses must register with FCA and comply with AML obligations (KYC, transaction monitoring, SAR reporting).',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'financial-collateral-regs-2003',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'Financial Collateral Arrangements (No. 2) Regulations 2003',
    reference: 'SI 2003/3226',
    url: 'https://www.legislation.gov.uk/uksi/2003/3226/contents',
    summary: 'Implements EU Financial Collateral Directive. Provides special treatment for financial collateral (cash, securities, credit claims). Reduces formalities for security interests. Relevant for tokenized collateral.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'uk-ets-order-2020',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'Greenhouse Gas Emissions Trading Scheme Order 2020',
    reference: 'SI 2020/1265',
    url: 'https://www.legislation.gov.uk/uksi/2020/1265/contents',
    summary: 'Establishes UK Emissions Trading Scheme (UK ETS) post-Brexit. Defines emissions allowances as statutory property rights. UK ETS Registry tracks ownership.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  },

  {
    id: 'digital-securities-sandbox-2024',
    type: 'regulation',
    jurisdiction: 'uk',
    title: 'FCA Digital Securities Sandbox Instrument 2024',
    reference: 'FCA 2024/20',
    url: 'https://www.handbook.fca.org.uk/instrument/2024/FCA_2024_20.pdf',
    summary: 'Establishes Digital Securities Sandbox (FMI sandbox) operational September 2024 - December 2028. Authorizes FCA to permit DLT-based securities settlement and custody systems. Modified regulatory requirements for sandbox participants.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'secondary'
  },

  // ========== FCA GUIDANCE & POLICY STATEMENTS ==========
  {
    id: 'fca-ps19-22',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'FCA Policy Statement PS19/22: Guidance on Cryptoassets',
    reference: 'PS19/22 (July 2019)',
    url: 'https://www.fca.org.uk/publication/policy/ps19-22.pdf',
    summary: 'Definitive FCA guidance on regulatory perimeter for cryptoassets. Categorizes cryptoassets as: (1) e-money tokens (regulated), (2) security tokens (regulated as specified investments), (3) unregulated tokens (exchange tokens, utility tokens). Clarifies when cryptoasset activities require FCA authorization.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'fca-cass-rules',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'FCA Client Assets Sourcebook (CASS)',
    reference: 'FCA Handbook CASS',
    url: 'https://www.handbook.fca.org.uk/handbook/CASS/',
    summary: 'FCA rules on client asset protection. Requires segregation of client assets, daily reconciliation, client money protection. Regulated firms holding client cryptoassets or securities must comply. Protects clients against firm insolvency.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'fca-authorized-persons-guidance',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'FCA Guidance on Authorization',
    reference: 'FCA Handbook AUTH, COND, SUP',
    url: 'https://www.handbook.fca.org.uk/',
    summary: 'FCA guidance on obtaining authorization under FSMA 2000. Covers application process, threshold conditions, ongoing supervision. Relevant for firms conducting tokenized securities activities.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  // ========== UK JURISDICTION TASKFORCE STATEMENTS ==========
  {
    id: 'ukjt-cryptoassets-2019',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'UK Jurisdiction Taskforce Legal Statement on Cryptoassets and Smart Contracts',
    reference: 'UKJT Statement (November 2019)',
    url: 'https://technation.io/about-us/lawtech-delivery-panel/',
    summary: 'Authoritative legal statement establishing that cryptoassets ARE property under English law (third category of personal property). Exclusive control via private keys constitutes ownership. Widely cited by UK courts and international jurisdictions. Foundational for UK digital asset framework.',
    relevantQuote: 'Crypto-assets have all of the indicia of property... [they] are therefore to be treated in principle as property as a matter of English law.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'ukjt-smart-contracts-2021',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'UK Jurisdiction Taskforce Legal Statement on Smart Contracts',
    reference: 'UKJT Statement (November 2021)',
    url: 'https://technation.io/about-us/lawtech-delivery-panel/',
    summary: 'Clarifies that smart contracts are legally binding contracts under English law. Code execution can constitute contractual performance. Confirms enforceability of on-chain agreements.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  // ========== LAW COMMISSION REPORTS ==========
  {
    id: 'law-commission-digital-assets-2023',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'Law Commission Digital Assets: Final Report',
    reference: 'Law Com No 412 (June 2023)',
    url: 'https://www.lawcom.gov.uk/project/digital-assets/',
    summary: 'Comprehensive report confirming digital assets as third category of personal property. Recommends statutory recognition (now Property Bill 2024). Analyzes legal issues including control, transfer, collateral, insolvency. Highly authoritative.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'law-commission-etd-2022',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'Law Commission Electronic Trade Documents: Final Report',
    reference: 'Law Com No 405 (March 2022)',
    url: 'https://www.lawcom.gov.uk/project/electronic-trade-documents/',
    summary: 'Report recommending legislation to enable electronic trade documents. Led directly to Electronic Trade Documents Act 2023. Analyzes legal requirements for electronic equivalents of bills of lading, warehouse receipts, etc.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  // ========== BANK OF ENGLAND / HMT PUBLICATIONS ==========
  {
    id: 'digital-pound-consultation-2023',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'Bank of England and HM Treasury: The Digital Pound - A Consultation Paper',
    reference: 'BoE/HMT Consultation (February 2023)',
    url: 'https://www.bankofengland.co.uk/paper/2023/the-digital-pound-consultation-paper',
    summary: 'Consultation on retail CBDC design. Explores technology (platform model vs account model), policy (privacy, programmability, offline), and regulatory issues. No launch decision yet; ongoing research phase.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'project-rosalind-boe-bis',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'Project Rosalind: Bank of England and BIS Innovation Hub',
    reference: 'BoE/BIS Project (2022-2023)',
    url: 'https://www.bankofengland.co.uk/research/digital-currencies',
    summary: 'Experimental project exploring API-based programmable payments and tokenized wholesale deposits. Tests DvP mechanisms for tokenized securities. Informs future CBDC and tokenized deposit policy.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'boe-rtgs-rules',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'Bank of England RTGS Settlement Rules',
    reference: 'BoE RTGS Documentation',
    url: 'https://www.bankofengland.co.uk/payment-and-settlement/rtgs-service',
    summary: 'Rules governing Real-Time Gross Settlement (RTGS) system. Central bank money settlement for CHAPS and other payment systems. Settlement finality protections under SFR 1999.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'crest-rules',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'CREST Rules (Euroclear UK & Ireland)',
    reference: 'CREST Rulebook',
    url: 'https://www.euroclear.com/about/en/business/UK-Ireland.html',
    summary: 'Rulebook governing CREST securities settlement system. Entry on CREST register confers legal title to uncertificated securities. Settlement finality at book entry. Bank of England oversight.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'cls-system-rules',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'CLS (Continuous Linked Settlement) System Rules',
    reference: 'CLS Rulebook',
    url: 'https://www.cls-group.com/',
    summary: 'Rulebook for CLS multi-currency settlement system. PvP settlement for FX transactions. Designated system under SFR 1999. Cooperative oversight by central banks.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'guidance'
  },

  {
    id: 'fmlc-settlement-guidance',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'Financial Markets Law Committee: Settlement Finality Guidance',
    reference: 'FMLC Publications',
    url: 'http://www.fmlc.org/',
    summary: 'Expert committee guidance on settlement finality and related legal issues. Analyzes SFR 1999 application, netting, collateral, and cross-border enforceability.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'secondary'
  },

  {
    id: 'hmland-registry-digital',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'HM Land Registry Digital Services Strategy',
    reference: 'HM Land Registry Publications',
    url: 'https://www.gov.uk/government/organisations/land-registry',
    summary: 'Land Registry strategy on digital transformation. Exploring blockchain and digital identity. Electronic applications and signatures permitted. Direct DLT integration for legal title still uncertain.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'secondary'
  },

  {
    id: 'boe-fx-oversight',
    type: 'guidance',
    jurisdiction: 'uk',
    title: 'Bank of England FX Settlement Oversight',
    reference: 'BoE FX Oversight Documentation',
    url: 'https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision',
    summary: 'Bank of England oversight of FX settlement systems including CLS. Cooperative oversight with other central banks. Focus on operational resilience and settlement risk.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'secondary'
  },

  // ========== CASE LAW ==========
  {
    id: 'aa-persons-unknown-2019',
    type: 'case',
    jurisdiction: 'uk',
    title: 'AA v Persons Unknown & Ors (Re Bitcoin)',
    reference: '[2019] EWHC 3556 (Comm)',
    url: 'https://www.bailii.org/ew/cases/EWHC/Comm/2019/3556.html',
    summary: 'English Commercial Court granted proprietary injunction freezing Bitcoin holdings. Bryan J confirmed cryptoassets ARE property under English law, capable of being owned and held on trust. Foundational case for UKJT statement.',
    relevantQuote: 'I am satisfied that crypto-assets such as Bitcoin are capable in principle of being property... They have all of the indicia of property.',
    lastUpdated: '2024-09-20',
    authorityLevel: 'primary'
  }
];
