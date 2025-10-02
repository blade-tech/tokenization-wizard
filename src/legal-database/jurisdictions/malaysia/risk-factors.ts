/**
 * Malaysia Jurisdiction-Specific Risk Factors
 *
 * Legal, regulatory, operational, Shariah, and cross-border risks specific to
 * tokenization projects in Malaysia's common law + Islamic finance environment.
 */

import type { RiskFactor } from '../../types';

export const malaysiaRiskFactors: RiskFactor[] = [
  // ========== LEGAL RISKS ==========
  {
    id: 'my-risk-001',
    category: 'legal',
    risk: 'Unclear legal status of direct land title tokenization - National Land Code 1965 does not explicitly address DLT integration with Land Registry',
    severity: 'high',
    applicableScenarios: [
      'Real estate tokenization',
      'Direct tokenization of land title',
      'Property fractional ownership'
    ],
    mitigation: [
      'Use SPV structure - tokenize shares in company holding property rather than land title directly',
      'Obtain legal opinion on land title tokenization feasibility',
      'Engage with Land Registry authorities on DLT integration roadmap',
      'Consider Labuan offshore structure for international property investors',
      'Use REIT or property trust structure (SC-regulated) with tokenized units'
    ],
    dealBreaker: true,
    citations: [
      'national-land-code-1965',
      'strata-titles-1985',
      'adorna-properties-2001'
    ],
    likelihood: 'high',
    notes: 'Direct tokenization of registered land title highly problematic. Land Registry modernization pending. SPV or REIT structures are established alternatives but add complexity and costs.'
  },

  {
    id: 'my-risk-002',
    category: 'legal',
    risk: 'Limited judicial precedent on smart contract enforceability and interpretation of code-based agreements',
    severity: 'medium',
    applicableScenarios: [
      'Smart contract-based tokenization',
      'Automated corporate actions',
      'Self-executing settlement mechanisms',
      'DAO governance structures'
    ],
    mitigation: [
      'Include human-readable legal agreement alongside smart contract code',
      'Specify governing law and dispute resolution mechanism',
      'Obtain legal opinion on smart contract structure and enforceability',
      'Include emergency pause or override mechanisms for unforeseen circumstances',
      'Use well-audited smart contract templates with legal review',
      'Consider SC sandbox admission to obtain regulatory clarity'
    ],
    dealBreaker: false,
    citations: [
      'contracts-act-1950',
      'eca-2006',
      'sc-digital-asset-guidelines-2024'
    ],
    likelihood: 'medium',
    notes: 'Malaysian courts have not yet ruled on pure smart contract disputes. ECA 2006 provides framework for electronic contracts but lacks smart contract-specific guidance. Hybrid approach (code + legal agreement) recommended.'
  },

  {
    id: 'my-risk-003',
    category: 'legal',
    risk: 'Uncertain insolvency treatment of digital assets held by custodians - bankruptcy law predates digital assets',
    severity: 'high',
    applicableScenarios: [
      'Custodial holdings of digital assets',
      'DAX operator insolvency',
      'Third-party custody arrangements',
      'Intermediated token holdings'
    ],
    mitigation: [
      'Ensure robust client asset segregation per SC Guidelines on Safeguarding Client Assets',
      'Use separate custodial wallets for each client with clear ownership records',
      'Obtain fidelity insurance covering custodian default',
      'Include express trust language in custody agreements',
      'Maintain detailed audit trail of client holdings',
      'Use multi-signature or hardware security modules (HSMs) for custody',
      'Consider self-custody or qualified custodian with strong capitalization'
    ],
    dealBreaker: false,
    citations: [
      'sc-safeguarding-client-assets',
      'trustee-act-1949',
      'sc-digital-asset-guidelines-2024'
    ],
    likelihood: 'medium',
    notes: 'Insolvency Act 1967 lacks digital asset-specific provisions. SC Guidelines require segregation but legal certainty in insolvency unclear. Express trust structure may provide protection but untested.'
  },

  {
    id: 'my-risk-004',
    category: 'legal',
    risk: 'Good faith purchaser protections for digital assets unclear - common law doctrine not yet applied to tokenized assets',
    severity: 'medium',
    applicableScenarios: [
      'Secondary market trading of tokens',
      'Reliance on blockchain records as evidence of title',
      'Purchase from unauthorized or fraudulent transferor',
      'Compromised private keys used for transfer'
    ],
    mitigation: [
      'Implement robust KYC/AML for all token transfers',
      'Maintain comprehensive transaction audit trail',
      'Use multi-signature or time-locked transfers for high-value assets',
      'Obtain representations and warranties from sellers',
      'Conduct title verification before accepting large transfers',
      'Structure tokens to trade only on regulated DAX platforms with vetting',
      'Include indemnification clauses in transfer agreements'
    ],
    dealBreaker: false,
    citations: [
      'cmsa-2007',
      'sc-digital-asset-guidelines-2024',
      'sale-goods-1957'
    ],
    likelihood: 'low',
    notes: 'Common law bona fide purchaser doctrine likely applies but no Malaysian case law on digital assets yet. DAX trading provides some protection through platform vetting. Private transfers carry higher risk.'
  },

  // ========== REGULATORY RISKS ==========
  {
    id: 'my-risk-005',
    category: 'regulatory',
    risk: 'DAX licensing highly selective - only 6 operators approved as of 2024; no guarantee of approval even if criteria met',
    severity: 'high',
    applicableScenarios: [
      'New digital asset exchange launch',
      'Digital securities platform requiring DAX status',
      'Token trading platform',
      'Custodial service provider requiring DAX license'
    ],
    mitigation: [
      'Apply early with comprehensive business plan and compliance framework',
      'Demonstrate strong financial backing (minimum RM5 million paid-up capital)',
      'Engage with SC through sandbox program first to prove concept',
      'Partner with existing DAX operator for market access',
      'Consider Labuan offshore license as alternative (lower barriers)',
      'Build robust operational, technical, and risk management systems before applying',
      'Retain experienced Malaysian counsel for application process'
    ],
    dealBreaker: true,
    citations: [
      'sc-dax-guidelines',
      'cmsa-2007',
      'sc-digital-asset-guidelines-2024'
    ],
    likelihood: 'high',
    notes: 'SC has approved only 6 DAX operators in 5+ years. Approval discretionary. Timeline 6-12 months minimum. Costs significant (RM5M capital minimum). Labuan route offers alternative but offshore status limits domestic investor access.'
  },

  {
    id: 'my-risk-006',
    category: 'regulatory',
    risk: 'Regulatory perimeter uncertainty for DeFi, NFTs, and novel token structures - SC monitoring but guidance incomplete',
    severity: 'medium',
    applicableScenarios: [
      'Decentralized finance (DeFi) protocols',
      'NFT issuance and trading',
      'Algorithmic stablecoins',
      'Liquid staking derivatives',
      'Cross-chain bridges'
    ],
    mitigation: [
      'Seek SC guidance or sandbox admission for novel structures',
      'Monitor SC announcements and policy consultations',
      'Conservative approach: assume DeFi activities may require licensing',
      'Consider offshore (Labuan) structure for experimental products',
      'Implement strong consumer protection and risk disclosure',
      'Engage Malaysian legal counsel familiar with SC approach',
      'Be prepared for regulatory clarifications requiring business model changes'
    ],
    dealBreaker: false,
    citations: [
      'sc-digital-asset-guidelines-2024',
      'digital-asset-amendment-order-2025',
      'cmsa-2007'
    ],
    likelihood: 'medium',
    notes: 'Amendment Order 2025 clarified some NFT exclusions but DeFi largely unaddressed. SC taking "substance over form" approach. Regulatory treatment may change. Proactive engagement with SC recommended.'
  },

  {
    id: 'my-risk-007',
    category: 'regulatory',
    risk: 'Foreign exchange controls restrict ringgit use for cross-border crypto transactions - limits liquidity and arbitrage',
    severity: 'medium',
    applicableScenarios: [
      'Cross-border token trading',
      'International cryptocurrency purchases',
      'Stablecoin arbitrage',
      'Global DeFi participation using ringgit'
    ],
    mitigation: [
      'Use USD or other approved foreign currencies for cross-border crypto transactions',
      'Structure international token sales to exclude Malaysian residents or comply with FX rules',
      'Obtain BNM approval for novel cross-border payment structures',
      'Use offshore (Labuan) entities for international crypto operations',
      'Educate investors on FX restrictions and approved payment methods',
      'Monitor BNM FX policy updates and CBDC developments'
    ],
    dealBreaker: false,
    citations: [
      'bnm-fx-admin-rules',
      'central-bank-act-2009',
      'payment-systems-act-2003'
    ],
    likelihood: 'high',
    notes: 'BNM restricts ringgit use for cross-border crypto. Workaround: use foreign currencies (USD, SGD). Impacts liquidity for Malaysian crypto traders. Policy may evolve with CBDC development.'
  },

  {
    id: 'my-risk-008',
    category: 'regulatory',
    risk: 'No CBDC or tokenized deposits framework yet - limits atomic DvP settlement and integration with fiat systems',
    severity: 'high',
    applicableScenarios: [
      'Atomic DvP settlement (simultaneous securities and cash transfer)',
      'Tokenized deposit issuance',
      'Real-time securities settlement',
      'Smart contract-triggered payments'
    ],
    mitigation: [
      'Use conventional payment systems (RENTAS, FPX) for cash leg',
      'Accept T+0 to T+2 settlement gap between token and cash',
      'Monitor BNM CBDC research and pilot programs',
      'Engage with BNM on tokenized deposit framework development',
      'Consider stablecoin alternatives (if SC-approved)',
      'Structure settlement to minimize credit risk during gap period',
      'Use escrow or collateral mechanisms for large transactions'
    ],
    dealBreaker: false,
    citations: [
      'central-bank-act-2009',
      'payment-systems-act-2003',
      'bnm-emoney-policy-2022'
    ],
    likelihood: 'high',
    notes: 'BNM researching CBDC but no launch timeline. Tokenized deposits not explicitly permitted. Atomic DvP not possible with current infrastructure. Conventional payment systems add settlement lag.'
  },

  // ========== SHARIAH COMPLIANCE RISKS ==========
  {
    id: 'my-risk-009',
    category: 'shariah',
    risk: 'SAC rulings on digital assets evolving - structures approved today may be re-evaluated as Islamic finance scholars debate new issues',
    severity: 'medium',
    applicableScenarios: [
      'Islamic digital asset offerings',
      'Shariah-compliant tokenization',
      'Sukuk tokenization',
      'Islamic DeFi products'
    ],
    mitigation: [
      'Obtain formal SAC ruling or Shariah committee approval for novel structures',
      'Engage recognized Shariah scholars with digital asset expertise',
      'Build flexibility into token structure to accommodate future rulings',
      'Annual Shariah audit and compliance review',
      'Monitor SAC announcements and Islamic finance industry developments',
      'Segregate Islamic and conventional token pools to limit cross-contamination risk',
      'Include provisions for restructuring if SAC ruling changes'
    ],
    dealBreaker: false,
    citations: [
      'sac-rulings',
      'ifsa-2013',
      'sac-digital-assets',
      'sc-islamic-capital-market'
    ],
    likelihood: 'medium',
    notes: 'Islamic finance scholars still debating digital asset permissibility. SAC rulings binding but subject to evolution. Early structures may face re-evaluation. Proactive Shariah governance critical.'
  },

  {
    id: 'my-risk-010',
    category: 'shariah',
    risk: 'Conflict between Shariah requirements and conventional tokenization structures - may require parallel frameworks',
    severity: 'medium',
    applicableScenarios: [
      'Dual conventional + Islamic token offerings',
      'Shariah-compliant securities on DLT',
      'Islamic real estate tokenization',
      'Cross-border Shariah compliance'
    ],
    mitigation: [
      'Establish separate Shariah governance framework for Islamic tokens',
      'Segregate Islamic and conventional asset pools',
      'Obtain dual approvals (SC conventional + SAC Shariah) for hybrid structures',
      'Use established Islamic finance structures (musharakah, mudarabah, ijarah)',
      'Ensure underlying assets are halal and avoid prohibited features (riba, gharar)',
      'Appoint qualified Shariah committee with tokenization expertise',
      'Document Shariah compliance rationale comprehensively'
    ],
    dealBreaker: false,
    citations: [
      'ifsa-2013',
      'sukuk-guidelines-2014',
      'sc-islamic-capital-market',
      'bnm-shariah-governance'
    ],
    likelihood: 'medium',
    notes: 'Shariah compliance adds layer of complexity. Prohibition of interest, uncertainty, gambling may conflict with DeFi or derivative structures. Established Islamic finance products (sukuk, musharakah) more straightforward to tokenize.'
  },

  {
    id: 'my-risk-011',
    category: 'shariah',
    risk: 'Cross-border Shariah compliance challenges - different jurisdictions may have conflicting rulings',
    severity: 'low',
    applicableScenarios: [
      'Cross-border Islamic token offerings',
      'Sukuk tokenization for international investors',
      'Islamic DeFi with global participation',
      'Multi-jurisdiction Shariah governance'
    ],
    mitigation: [
      'Obtain Shariah approvals in all target jurisdictions',
      'Use conservative Shariah interpretations accepted across jurisdictions',
      'Engage AAOIFI standards (even though Malaysia doesn\'t formally adopt)',
      'Limit investor access to jurisdictions with compatible Shariah frameworks',
      'Provide clear disclosure on Shariah methodology and approvals obtained',
      'Consider jurisdiction-specific token tranches (Malaysian SAC vs. other markets)'
    ],
    dealBreaker: false,
    citations: [
      'sac-rulings',
      'ifsa-2013'
    ],
    likelihood: 'low',
    notes: 'Malaysia SAC rulings binding domestically but not internationally. Gulf Cooperation Council (GCC) countries may follow AAOIFI standards (Malaysia doesn\'t). Cross-border Islamic finance complex.'
  },

  // ========== OPERATIONAL RISKS ==========
  {
    id: 'my-risk-012',
    category: 'operational',
    risk: 'Cybersecurity threats and private key compromise - DAX operators and custodians prime targets for hacking',
    severity: 'high',
    applicableScenarios: [
      'All digital asset custody and trading',
      'Hot wallet operations',
      'User account security',
      'Smart contract vulnerabilities'
    ],
    mitigation: [
      'Multi-signature wallets for large holdings',
      'Hardware security modules (HSMs) for private key storage',
      'Cold storage for majority of client assets (SC recommends 95%+ cold)',
      'Regular security audits and penetration testing',
      'Incident response and disaster recovery plans',
      'Cyber insurance covering client assets',
      'Employee background checks and access controls',
      'Two-factor authentication (2FA) for all user accounts',
      'Smart contract audits by reputable third parties',
      'Bug bounty programs for vulnerability discovery'
    ],
    dealBreaker: false,
    citations: [
      'sc-digital-asset-guidelines-2024',
      'sc-safeguarding-client-assets'
    ],
    likelihood: 'medium',
    notes: 'Malaysia DAX operators have not experienced major hacks yet but global crypto exchanges frequently targeted. SC Guidelines require robust cybersecurity but enforcement and standards evolving.'
  },

  {
    id: 'my-risk-013',
    category: 'operational',
    risk: 'Limited institutional custody options for digital assets - few qualified custodians with SC approval',
    severity: 'medium',
    applicableScenarios: [
      'Institutional digital asset holdings',
      'Tokenized securities custody',
      'Large-value cryptocurrency custody',
      'Regulated entity digital asset exposure'
    ],
    mitigation: [
      'Use SC-licensed DAX operators for custody (Luno, SINEGY, Tokenize)',
      'Engage international custodians with Malaysian entity (e.g., banks exploring custody)',
      'Consider self-custody with robust internal controls for sophisticated investors',
      'Labuan offshore custodians for international institutional clients',
      'Negotiate favorable custody terms given limited options',
      'Monitor development of bank-operated custody services',
      'Use multi-custodian approach to reduce concentration risk'
    ],
    dealBreaker: false,
    citations: [
      'sc-safeguarding-client-assets',
      'sc-dax-guidelines'
    ],
    likelihood: 'medium',
    notes: 'Malaysian banks slow to enter digital asset custody market. DAX operators provide custody but limited institutional-grade options. Global custodians (Coinbase, Anchorage) not yet active in Malaysia.'
  },

  {
    id: 'my-risk-014',
    category: 'operational',
    risk: 'Interoperability challenges between platforms - lack of standards for token transfers across different systems',
    severity: 'low',
    applicableScenarios: [
      'Multi-platform token trading',
      'Cross-chain tokenization',
      'Integration with conventional securities systems (CDS)',
      'Token portability between wallets/platforms'
    ],
    mitigation: [
      'Use widely-adopted token standards (ERC-20, BEP-20)',
      'Participate in industry standardization efforts',
      'Build API integrations with major platforms',
      'Document token technical specifications comprehensively',
      'Test interoperability before launch',
      'Engage with Bursa Malaysia on DLT integration roadmap',
      'Consider multi-chain deployment for maximum compatibility'
    ],
    dealBreaker: false,
    citations: [
      'sc-digital-asset-guidelines-2024'
    ],
    likelihood: 'medium',
    notes: 'No Malaysia-specific token standards. Industry coalescing around Ethereum standards. Bursa Malaysia exploring blockchain but DLT integration with CDS unclear. Conventional securities (CDS) and digital assets operate in silos.'
  },

  // ========== ENFORCEMENT RISKS ==========
  {
    id: 'my-risk-015',
    category: 'enforcement',
    risk: 'Cross-border enforcement challenges - recovering assets or enforcing judgments across jurisdictions difficult',
    severity: 'medium',
    applicableScenarios: [
      'International token offerings',
      'Cross-border fraud or theft',
      'Foreign counterparty default',
      'Offshore (Labuan) structures'
    ],
    mitigation: [
      'Include governing law and arbitration clauses in token agreements',
      'Use international arbitration (SIAC Singapore, LCIA London) for disputes',
      'Obtain legal opinions on judgment recognition in target jurisdictions',
      'Require collateral or escrow for cross-border transactions',
      'Limit exposure to jurisdictions with weak rule of law',
      'Use smart contract escrow for automated dispute resolution',
      'Maintain insurance for cross-border default risks'
    ],
    dealBreaker: false,
    citations: [
      'contracts-act-1950',
      'cmsa-2007'
    ],
    likelihood: 'low',
    notes: 'Malaysia party to New York Convention (arbitral awards) and various bilateral treaties. Enforcement against foreign parties remains challenging. Preventative measures (escrow, collateral) more effective than post-default enforcement.'
  },

  {
    id: 'my-risk-016',
    category: 'enforcement',
    risk: 'Uncertain remedies for smart contract bugs or exploits - traditional contract remedies may not apply to code execution',
    severity: 'medium',
    applicableScenarios: [
      'Smart contract-based tokenization',
      'Automated corporate actions',
      'DeFi protocol participation',
      'Oracle failures affecting smart contracts'
    ],
    mitigation: [
      'Comprehensive smart contract audits before deployment',
      'Bug bounty programs to discover vulnerabilities',
      'Include emergency pause or circuit breaker functions',
      'Multi-signature override for critical functions',
      'Insurance covering smart contract exploits',
      'Hybrid approach: legal agreement + smart contract with legal agreement prevailing',
      'Document intended smart contract behavior and include in legal terms',
      'Time-locked upgrades allowing review before implementation'
    ],
    dealBreaker: false,
    citations: [
      'contracts-act-1950',
      'eca-2006',
      'sc-digital-asset-guidelines-2024'
    ],
    likelihood: 'low',
    notes: 'No Malaysian case law on smart contract exploits. "Code is law" principle vs. traditional contract interpretation unresolved. Hybrid approach (legal agreement + smart contract) provides fallback but adds complexity.'
  },

  // ========== CROSS-BORDER RISKS ==========
  {
    id: 'my-risk-017',
    category: 'cross-border',
    risk: 'Tax treatment of tokenization structures uncertain - unclear whether tokens are property, securities, or other for tax purposes',
    severity: 'medium',
    applicableScenarios: [
      'Token sales and transfers',
      'Staking rewards',
      'DeFi yield farming',
      'Capital gains vs. income treatment',
      'Cross-border tax reporting'
    ],
    mitigation: [
      'Obtain tax ruling from Inland Revenue Board (IRB) for specific structure',
      'Conservative approach: treat as property subject to capital gains',
      'Document all transactions for potential tax reporting',
      'Engage Malaysian tax advisors with digital asset expertise',
      'Monitor IRB guidance and industry developments',
      'Consider Labuan tax regime (3% or RM20,000 flat) for offshore structures',
      'Include tax gross-up or indemnification provisions in token agreements'
    ],
    dealBreaker: false,
    citations: [
      'cmsa-2007',
      'sc-digital-asset-guidelines-2024'
    ],
    likelihood: 'medium',
    notes: 'IRB has not issued comprehensive digital asset tax guidance. Industry awaiting clarity. Default treatment likely as property (capital gains) but income treatment possible for staking/DeFi. Uncertainty creates compliance challenges.'
  },

  {
    id: 'my-risk-018',
    category: 'cross-border',
    risk: 'Conflict of laws for cross-border tokenization - which jurisdiction\'s law governs digital asset ownership and transfer?',
    severity: 'medium',
    applicableScenarios: [
      'International token offerings',
      'Cross-border secondary trading',
      'Multi-jurisdiction asset tokenization',
      'Dispute resolution'
    ],
    mitigation: [
      'Include express governing law clause in token terms',
      'Specify jurisdiction for disputes (arbitration preferred)',
      'Obtain legal opinions in all material jurisdictions',
      'Use lex situs (law of the location) for physical assets',
      'Token terms should address applicable law clearly',
      'Consider international standards (UNIDROIT, Hague Convention) where applicable',
      'Limit token sales to jurisdictions with compatible legal frameworks'
    ],
    dealBreaker: false,
    citations: [
      'contracts-act-1950',
      'cmsa-2007'
    ],
    likelihood: 'low',
    notes: 'Conflict of laws for digital assets unresolved globally. Malaysian courts likely apply common law choice of law principles but digital asset-specific precedents lacking. Clear contractual governing law critical.'
  },

  {
    id: 'my-risk-019',
    category: 'cross-border',
    risk: 'Data localization and privacy requirements may complicate DLT implementations - PDPA compliance with distributed systems',
    severity: 'low',
    applicableScenarios: [
      'Public blockchain tokenization',
      'Cross-border data flows in DLT',
      'KYC/AML data on blockchain',
      'Personal data immutability on blockchain'
    ],
    mitigation: [
      'Use private/permissioned blockchains for sensitive data',
      'Store personal data off-chain with on-chain hashes only',
      'Implement data minimization and pseudonymization',
      'Obtain consent for cross-border data transfers',
      'Compliance with Personal Data Protection Act 2010 (PDPA)',
      'Regular privacy impact assessments',
      'Engage Malaysian data protection counsel',
      'Use zero-knowledge proofs or other privacy-preserving technologies'
    ],
    dealBreaker: false,
    citations: [
      'sc-digital-asset-guidelines-2024'
    ],
    likelihood: 'low',
    notes: 'Malaysia has data protection law (PDPA 2010) but not as strict as EU GDPR. Public blockchain immutability vs. "right to erasure" potential conflict. Private blockchains or off-chain storage preferred for personal data.'
  },

  // ========== MARKET RISKS ==========
  {
    id: 'my-risk-020',
    category: 'operational',
    risk: 'Limited liquidity for tokenized securities - small secondary market, few market makers, wide bid-ask spreads',
    severity: 'medium',
    applicableScenarios: [
      'Tokenized private equity',
      'Security token offerings',
      'Tokenized real estate',
      'Illiquid asset tokenization'
    ],
    mitigation: [
      'Set realistic liquidity expectations with investors',
      'Establish market maker arrangements if possible',
      'Use periodic auction or tender offer mechanisms for redemptions',
      'Build investor base before token launch',
      'Cross-list on multiple platforms to maximize liquidity',
      'Consider hybrid model: tokenization + conventional exit (IPO, M&A)',
      'Include lockup periods to manage illiquidity risk',
      'Provide regular NAV calculations for pricing guidance'
    ],
    dealBreaker: false,
    citations: [
      'sc-digital-asset-guidelines-2024',
      'cmsa-2007'
    ],
    likelihood: 'high',
    notes: 'Malaysia digital securities market nascent. Limited secondary market liquidity. Tokenization improves liquidity vs. traditional private placements but expectations must be managed. Illiquid assets remain illiquid even when tokenized.'
  }
];
