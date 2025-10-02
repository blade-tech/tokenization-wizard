/**
 * UK Jurisdiction-Specific Risk Factors
 *
 * Risks, challenges, and mitigation strategies for tokenization
 * projects in the UK legal and regulatory environment.
 */

import type { RiskFactor } from '../../types';

export const ukRiskFactors: RiskFactor[] = [
  // ========== LEGAL RISKS ==========
  {
    id: 'uk-risk-001',
    category: 'legal',
    risk: 'Property Bill Not Yet Enacted - Statutory Recognition Pending',
    severity: 'low',
    applicableScenarios: [
      'All digital asset tokenization projects',
      'Cryptoassets',
      'NFTs',
      'Tokenized securities using novel structures'
    ],
    mitigation: [
      'UKJT statement provides strong common law authority (widely cited by courts)',
      'Law Commission report confirms third category of property',
      'Property Bill passage expected 2024-2025',
      'Case law (AA v Persons Unknown) supports property status',
      'Structure transactions to rely on existing common law property principles'
    ],
    dealBreaker: false,
    citations: [
      'ukjt-cryptoassets-2019',
      'law-commission-digital-assets-2023',
      'property-bill-2024',
      'aa-persons-unknown-2019'
    ],
    likelihood: 'low',
    notes: 'Risk is LOW because UKJT and Law Commission provide strong authority even without statute. Bill passage highly likely. UK courts adaptive and have already recognized cryptoassets as property.'
  },

  {
    id: 'uk-risk-002',
    category: 'legal',
    risk: 'Land Registry Does Not Accept DLT-Based Title Records',
    severity: 'high',
    applicableScenarios: [
      'Direct tokenization of legal title to real estate',
      'Real estate tokenization projects'
    ],
    mitigation: [
      'Use SPV structure: tokenize shares in SPV holding property (economic interest)',
      'Legal title remains registered at Land Registry in SPV name',
      'Token holders have beneficial ownership via shares',
      'Ensure proper corporate governance and SPV control mechanisms',
      'Disclosure to token holders that they hold shares, not direct land title'
    ],
    dealBreaker: false,
    citations: [
      'land-registration-act-2002',
      'companies-act-2006',
      'hmland-registry-digital'
    ],
    likelihood: 'high',
    notes: 'Direct tokenization of land IMPOSSIBLE under current law. SPV structure is established workaround. Land Registry exploring digital services but DLT integration uncertain and distant.'
  },

  {
    id: 'uk-risk-003',
    category: 'legal',
    risk: 'Conflict of Laws for Cross-Border Tokenized Assets',
    severity: 'medium',
    applicableScenarios: [
      'Cross-border tokenization',
      'Multi-jurisdictional asset pools',
      'International investors holding UK-tokenized assets'
    ],
    mitigation: [
      'Clear governing law clause in token terms (English law recommended)',
      'Jurisdiction clause specifying English courts',
      'Legal opinions in relevant jurisdictions on asset recognition',
      'Consider Hague Securities Convention (if applicable)',
      'ETDA 2023 provides clarity for electronic trade documents internationally'
    ],
    dealBreaker: false,
    citations: [
      'ukjt-cryptoassets-2019',
      'etda-2023'
    ],
    likelihood: 'medium',
    notes: 'English law well-regarded internationally. UKJT statement cited in multiple jurisdictions. However, foreign courts may not recognize tokenized ownership. Obtain local legal advice for material cross-border exposures.'
  },

  {
    id: 'uk-risk-004',
    category: 'legal',
    risk: 'Smart Contract Enforcement Uncertainty in Disputes',
    severity: 'medium',
    applicableScenarios: [
      'Smart contract-based transfers',
      'Automated DvP mechanisms',
      'Programmable tokens with embedded logic'
    ],
    mitigation: [
      'UKJT smart contracts statement confirms enforceability',
      'Include dispute resolution and governing law clauses',
      'Code audits and security testing',
      'Clear documentation of smart contract terms in plain language',
      'Consider hybrid approach: on-chain execution + off-chain legal wrapper',
      'Anticipate that courts may intervene if outcome unconscionable or illegal'
    ],
    dealBreaker: false,
    citations: [
      'ukjt-smart-contracts-2021'
    ],
    likelihood: 'low',
    notes: 'UKJT provides strong authority. However, limited precedent on disputes involving smart contracts. Courts likely to apply general contract principles and may disregard code if unconscionable.'
  },

  {
    id: 'uk-risk-005',
    category: 'legal',
    risk: 'Custodian Insolvency - Client Asset Protection Uncertain for Unregulated Cryptoassets',
    severity: 'high',
    applicableScenarios: [
      'Custodian-intermediary model',
      'Exchange tokens or utility tokens (unregulated)',
      'Cryptoassets held by custodian not subject to FCA CASS rules'
    ],
    mitigation: [
      'Use FCA-authorized custodian if possible (CASS protections apply)',
      'Segregation of client assets (separate wallets/addresses)',
      'Trust or bailment structure (beneficial ownership with client)',
      'Custodian insolvency insurance',
      'Multi-sig or threshold cryptography (client co-control)',
      'Regular reconciliation and third-party audits',
      'Consider self-custody for sophisticated investors'
    ],
    dealBreaker: false,
    citations: [
      'fca-cass-rules',
      'fca-ps19-22'
    ],
    likelihood: 'medium',
    notes: 'CASS protections apply ONLY if custodian is FCA-authorized and cryptoasset is within regulatory perimeter. Unregulated cryptoassets lack statutory client asset protections. Contractual segregation and trust structures provide some protection but untested in insolvency.'
  },

  // ========== REGULATORY RISKS ==========
  {
    id: 'uk-risk-006',
    category: 'regulatory',
    risk: 'Security Token Offering Without FCA Authorization or Prospectus',
    severity: 'high',
    applicableScenarios: [
      'Tokenized securities offerings',
      'Security tokens (specified investments)',
      'Public offerings of investment tokens'
    ],
    mitigation: [
      'Obtain FCA authorization if conducting regulated activities',
      'Prepare FCA-approved prospectus (or qualify for exemption)',
      'Use private placement exemptions (sophisticated investors, high-net-worth)',
      'Restrict marketing to institutional/professional investors only',
      'Engage legal counsel for regulatory classification',
      'Consider Digital Securities Sandbox for innovative structures'
    ],
    dealBreaker: true,
    citations: [
      'fsma-2000',
      'fsma-2023',
      'fca-ps19-22'
    ],
    likelihood: 'high',
    notes: 'Conducting regulated activities without authorization is criminal offense. Offering securities without prospectus violates FSMA. This is a DEAL-BREAKER unless proper authorization/exemptions obtained.'
  },

  {
    id: 'uk-risk-007',
    category: 'regulatory',
    risk: 'Cryptoasset Financial Promotion Restrictions',
    severity: 'medium',
    applicableScenarios: [
      'Marketing cryptoassets to UK retail investors',
      'Unregulated exchange tokens or utility tokens',
      'Public advertising of crypto offerings'
    ],
    mitigation: [
      'Comply with FCA financial promotion rules (Financial Promotion Order)',
      'Marketing only by FCA-authorized persons',
      'Risk warnings required (cryptoassets are high-risk, unregulated)',
      'Limit marketing to sophisticated/high-net-worth investors (exemptions)',
      'No misleading statements or omissions',
      'Clear disclosure of risks and lack of regulatory protections'
    ],
    dealBreaker: false,
    citations: [
      'fca-ps19-22'
    ],
    likelihood: 'high',
    notes: 'FCA heavily restricts retail cryptoasset marketing. Violations can result in enforcement action, fines, criminal prosecution. Conservative approach recommended.'
  },

  {
    id: 'uk-risk-008',
    category: 'regulatory',
    risk: 'AML/CTF Registration and Compliance Failure',
    severity: 'high',
    applicableScenarios: [
      'Cryptoasset exchanges',
      'Cryptoasset custody providers',
      'Token issuers facilitating transfers'
    ],
    mitigation: [
      'Register as cryptoasset business with FCA',
      'Implement robust KYC/AML procedures',
      'Transaction monitoring and suspicious activity reporting',
      'Ongoing training and compliance monitoring',
      'Use reputable AML screening tools',
      'Document compliance policies and procedures',
      'Regular audits and FCA reporting'
    ],
    dealBreaker: true,
    citations: [
      'money-laundering-regs-2017'
    ],
    likelihood: 'medium',
    notes: 'AML registration required for cryptoasset businesses. Failure to register is criminal offense. FCA has rejected many applications. This is a DEAL-BREAKER if registration not obtained.'
  },

  {
    id: 'uk-risk-009',
    category: 'regulatory',
    risk: 'Stablecoin Regulation Uncertainty',
    severity: 'medium',
    applicableScenarios: [
      'Stablecoin issuance or use for settlement',
      'Tokenized fiat-backed assets',
      'Payment tokens for DvP settlement'
    ],
    mitigation: [
      'Monitor HMT stablecoin regulation consultation (2024)',
      'If fiat-backed, may need EMI authorization (E-Money Regulations)',
      'Clear disclosures on regulatory status',
      'Conservative approach: treat as e-money unless clearly exempt',
      'Engage with FCA on novel structures',
      'Consider regulated stablecoins only (e.g., USDC, USDT with regulatory clarity)'
    ],
    dealBreaker: false,
    citations: [
      'e-money-regs-2011',
      'fca-ps19-22'
    ],
    likelihood: 'high',
    notes: 'Stablecoin regulation evolving. HMT consultation indicates fiat-backed stablecoins will be brought into FCA perimeter. Algorithmic stablecoins likely prohibited or heavily restricted. Await regulatory clarity before large-scale deployment.'
  },

  {
    id: 'uk-risk-010',
    category: 'regulatory',
    risk: 'Digital Securities Sandbox Participation Limits and Sunset',
    severity: 'low',
    applicableScenarios: [
      'DLT-based securities settlement systems',
      'Innovative FMI structures',
      'Tokenized securities infrastructure'
    ],
    mitigation: [
      'Sandbox operational Sep 2024 - Dec 2028 (4-year window)',
      'Plan transition to full authorization or alternative structure before sunset',
      'Comply with sandbox volume and participant limits',
      'Engage with FCA on permanent authorization pathway',
      'Document learnings and regulatory engagement',
      'Consider international sandbox options as fallback (Singapore, Switzerland)'
    ],
    dealBreaker: false,
    citations: [
      'fsma-2023',
      'digital-securities-sandbox-2024'
    ],
    likelihood: 'low',
    notes: 'Sandbox provides regulatory certainty for innovation. However, temporary nature means exit strategy required. FCA likely to grant full authorization to successful participants.'
  },

  // ========== OPERATIONAL RISKS ==========
  {
    id: 'uk-risk-011',
    category: 'operational',
    risk: 'Smart Contract Bugs or Exploits',
    severity: 'high',
    applicableScenarios: [
      'Smart contract-based token transfers',
      'Automated DvP settlement',
      'Programmable tokens'
    ],
    mitigation: [
      'Professional code audits by reputable firms (Trail of Bits, OpenZeppelin, etc.)',
      'Formal verification of critical logic',
      'Bug bounty programs',
      'Multi-sig or time-lock mechanisms for upgrades',
      'Incident response and business continuity planning',
      'Insurance for smart contract exploits (if available)',
      'Phased rollout with volume limits initially'
    ],
    dealBreaker: false,
    citations: [],
    likelihood: 'medium',
    notes: 'Smart contract risk is technological, not legal. However, legal uncertainty around liability for bugs. Courts may permit recovery if unconscionable outcome. Robust testing essential.'
  },

  {
    id: 'uk-risk-012',
    category: 'operational',
    risk: 'Blockchain Network Congestion or Downtime',
    severity: 'medium',
    applicableScenarios: [
      'Public blockchain-based tokenization',
      'Time-sensitive settlements',
      'High-volume transaction systems'
    ],
    mitigation: [
      'Choose blockchain with proven reliability and throughput',
      'Private/permissioned blockchain for critical infrastructure',
      'Fallback mechanisms (off-chain settlement, alternative chains)',
      'Gas fee management strategies',
      'Monitoring and alerting for network issues',
      'Contingency planning for extended outages',
      'Clear contractual terms on settlement timing and force majeure'
    ],
    dealBreaker: false,
    citations: [],
    likelihood: 'medium',
    notes: 'Public blockchains (Ethereum, etc.) experience congestion. Private blockchains offer more control but sacrifice decentralization benefits. Risk-reward tradeoff.'
  },

  {
    id: 'uk-risk-013',
    category: 'operational',
    risk: 'Loss or Theft of Private Keys',
    severity: 'high',
    applicableScenarios: [
      'Self-custody of cryptoassets',
      'Private key-based control frameworks',
      'Individual token holders managing own keys'
    ],
    mitigation: [
      'Multi-sig wallets (threshold cryptography)',
      'Hardware security modules (HSMs) for institutional custody',
      'Key sharding and social recovery mechanisms',
      'Backup and recovery procedures (seed phrases, encrypted backups)',
      'User education on key security',
      'Professional custody services for retail investors',
      'Insurance for key loss/theft (if available)'
    ],
    dealBreaker: false,
    citations: [],
    likelihood: 'high',
    notes: 'Private key loss = permanent loss of asset (irreversible). No recourse under law if keys voluntarily lost. This is fundamental risk of cryptoasset ownership. Custody services reduce risk but introduce counterparty risk.'
  },

  // ========== ENFORCEMENT RISKS ==========
  {
    id: 'uk-risk-014',
    category: 'enforcement',
    risk: 'Difficulty Enforcing Against Anonymous or Foreign Counterparties',
    severity: 'medium',
    applicableScenarios: [
      'DeFi protocols with pseudonymous participants',
      'Cross-border tokenization',
      'P2P token transfers'
    ],
    mitigation: [
      'KYC for all participants (if regulated)',
      'Jurisdiction and governing law clauses in token terms',
      'Arbitration or alternative dispute resolution',
      'On-chain enforcement mechanisms (smart contract logic)',
      'Legal opinions on enforceability in relevant jurisdictions',
      'Consider permissioned systems for institutional use cases'
    ],
    dealBreaker: false,
    citations: [],
    likelihood: 'medium',
    notes: 'Pseudonymity and cross-border nature of crypto create enforcement challenges. English courts can issue injunctions against "persons unknown" but recovery difficult. Permissioned systems with KYC mitigate but reduce decentralization.'
  },

  {
    id: 'uk-risk-015',
    category: 'enforcement',
    risk: 'Lack of Precedent on Tokenization Disputes',
    severity: 'low',
    applicableScenarios: [
      'Novel tokenization structures',
      'Complex multi-asset tokenization',
      'Disputes over smart contract interpretation'
    ],
    mitigation: [
      'Clear, unambiguous token terms and conditions',
      'Legal opinions from reputable counsel',
      'Arbitration clauses (institutional arbitration preferred)',
      'Document design rationale and regulatory engagement',
      'Engage with UKJT, Law Commission, and FCA on novel structures',
      'Follow established precedents (Nivaura, Archax) where possible'
    ],
    dealBreaker: false,
    citations: [
      'ukjt-cryptoassets-2019',
      'ukjt-smart-contracts-2021'
    ],
    likelihood: 'low',
    notes: 'UK courts are innovative and have shown willingness to adapt to new technology (AA v Persons Unknown, UKJT statements). However, untested structures carry litigation risk. Conservative approach: follow established models.'
  },

  // ========== CROSS-BORDER RISKS ==========
  {
    id: 'uk-risk-016',
    category: 'cross-border',
    risk: 'Post-Brexit Regulatory Divergence from EU',
    severity: 'low',
    applicableScenarios: [
      'Cross-border EU-UK tokenization',
      'Passporting and equivalence issues',
      'Regulatory alignment questions'
    ],
    mitigation: [
      'UK has tailored digital asset regime (more advanced than EU MiCA in some respects)',
      'Monitor EU MiCA implementation and UK response',
      'Dual compliance if serving both UK and EU markets',
      'Legal opinions on cross-border enforceability',
      'UK-EU cooperation on digital asset standards (ongoing)',
      'Consider EU subsidiary or reverse solicitation for EU investors'
    ],
    dealBreaker: false,
    citations: [
      'fsma-2023',
      'digital-securities-sandbox-2024'
    ],
    likelihood: 'low',
    notes: 'UK has arguably more advanced digital asset framework than EU (ETDA, UKJT, Digital Securities Sandbox). Divergence is opportunity, not risk, for UK-based projects. However, EU market access requires MiCA compliance.'
  },

  {
    id: 'uk-risk-017',
    category: 'cross-border',
    risk: 'International Recognition of ETDA Electronic Documents',
    severity: 'medium',
    applicableScenarios: [
      'Cross-border trade finance',
      'International bills of lading',
      'Electronic warehouse receipts for global commodities'
    ],
    mitigation: [
      'UNCITRAL Model Law on Electronic Transferable Records (basis for ETDA)',
      'ETDA compliance ensures "functional equivalence" to paper',
      'Contractual clauses accepting electronic documents',
      'Use platforms with international recognition (CargoX, Bolero)',
      'Obtain legal opinions in destination/origin countries',
      'Advocate for international adoption of ETDA-equivalent legislation'
    ],
    dealBreaker: false,
    citations: [
      'etda-2023',
      'law-commission-etd-2022'
    ],
    likelihood: 'medium',
    notes: 'ETDA is based on UNCITRAL Model Law. International adoption increasing. However, some jurisdictions may not recognize electronic trade documents. Contractual acceptance and platform standards mitigate.'
  },

  // ========== TAX RISKS ==========
  {
    id: 'uk-risk-018',
    category: 'legal',
    risk: 'Tax Treatment Uncertainty for Tokenized Assets',
    severity: 'medium',
    applicableScenarios: [
      'Token issuance and transfers',
      'Tokenized real estate (SDLT implications)',
      'Cryptoasset disposals',
      'Tokenized securities (CGT, income tax)'
    ],
    mitigation: [
      'HMRC guidance on cryptoassets (individual and corporate treatment)',
      'Professional tax advice for specific structures',
      'Tax opinions for novel tokenization',
      'Clear record-keeping for tax reporting',
      'SDLT may apply to property SPV share transfers (seek relief where available)',
      'Monitor HMRC consultations on digital asset taxation',
      'Consider tax-efficient structures (ISAs, VCTs, SEIS/EIS if eligible)'
    ],
    dealBreaker: false,
    citations: [],
    likelihood: 'high',
    notes: 'HMRC has issued guidance on cryptoasset taxation but many edge cases uncertain. Tax treatment can significantly impact economics. Professional tax advice essential for material transactions.'
  }
];
