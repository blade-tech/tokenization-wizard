// ============================================================================
// Terminology Glossary & Mapping
// ============================================================================

export interface TermDefinition {
  plain: string;
  legal: string;
  definition: string;
  category: 'core' | 'legal' | 'technical' | 'financial';
  where?: string;
  citations?: Array<{ source: string; text: string }>;
}

export const GLOSSARY: Record<string, TermDefinition> = {
  // Core ACP Concepts
  'acp': {
    plain: 'Control Point',
    legal: 'ACP (Authoritative Control Point)',
    definition: 'The entity or system that has final authority to change the state of an asset. Think of it as the "single source of truth" for who owns what.',
    category: 'core',
    citations: [
      { source: 'ACP Framework', text: 'Entity with exclusive authority to mutate asset state' }
    ]
  },
  
  'thing': {
    plain: 'Asset or Right',
    legal: 'Thing (Res)',
    definition: 'Any legally recognized object of rights — could be physical property, a financial instrument, a legal claim, or a digital asset.',
    category: 'core',
    citations: [
      { source: 'Civil Law Tradition', text: 'Res — object of legal rights' },
      { source: 'UK Law Commission 2023', text: 'Data objects capable of possession' }
    ]
  },
  
  'tokenized-asset': {
    plain: 'Tokenized Asset',
    legal: 'Tokenized Asset (ACP-bound)',
    definition: 'Your token can act at the official gate.',
    category: 'core',
    citations: [
      { source: 'UCC § 12-105', text: 'Controllable electronic records' }
    ]
  },
  
  'tokenized-claim': {
    plain: 'Tokenized Claim',
    legal: 'Tokenized Claim (no ACP binding)',
    definition: 'Your token is a promise; the official gate doesn\'t act on it.',
    category: 'core'
  },
  
  'claim-wrapper': {
    plain: 'IOU Token',
    legal: 'Claim-wrapper',
    definition: 'A token that merely wraps a contractual promise rather than providing direct control of an asset. Often misleadingly presented as "asset-backed."',
    category: 'core'
  },
  
  // Legal Classification Terms
  'investment-security': {
    plain: 'Stock or Bond',
    legal: 'Investment Security',
    definition: 'Financial instruments like stocks, bonds, or other securities regulated under securities law.',
    category: 'financial',
    citations: [
      { source: 'UCC Article 8', text: 'Investment securities framework' },
      { source: 'SEC regulations', text: 'Securities Act of 1933' }
    ]
  },
  
  'tangible-goods': {
    plain: 'Physical Items',
    legal: 'Tangible Goods',
    definition: 'Physical objects that can be touched and moved — commodities, inventory, equipment, etc.',
    category: 'core',
    citations: [
      { source: 'UCC Article 2', text: 'Sale of goods' },
      { source: 'UCC Article 7', text: 'Documents of title' }
    ]
  },
  
  'real-property': {
    plain: 'Land & Buildings',
    legal: 'Real Property',
    definition: 'Land and anything permanently attached to it, including buildings and fixtures.',
    category: 'legal',
    citations: [
      { source: 'Property Law', text: 'Immovable property interests' }
    ]
  },
  
  'intangible-right': {
    plain: 'Non-Physical Right',
    legal: 'Intangible Right',
    definition: 'Rights that don\'t have physical form — intellectual property, contractual rights, claims, etc.',
    category: 'legal'
  },
  
  // Binding Path Terms
  'registry-of-record': {
    plain: 'Official Registry',
    legal: 'Registry of Record',
    definition: 'An authoritative register maintained by law (like a share register or land registry) that determines ownership.',
    category: 'legal',
    citations: [
      { source: 'eWpG §16', text: 'Crypto securities register (Germany)' },
      { source: 'Companies Act 2006', text: 'Share register (UK)' }
    ]
  },
  
  'custodian-bailee': {
    plain: 'Professional Custodian',
    legal: 'Custodian / Bailee',
    definition: 'A trusted third party that holds assets on behalf of owners. Common for securities and valuable goods.',
    category: 'financial',
    citations: [
      { source: 'SEC Rule 206(4)-2', text: 'Custody requirements for investment advisers' },
      { source: 'UCC Article 8', text: 'Securities intermediary framework' }
    ]
  },
  
  'settlement-rail': {
    plain: 'Payment System',
    legal: 'Settlement Rail (CSD/DTCC)',
    definition: 'Infrastructure that clears and settles securities transactions — like DTCC in the US or Euroclear in Europe.',
    category: 'financial',
    citations: [
      { source: 'DTCC', text: 'Central securities depository' },
      { source: 'CSDR', text: 'Central Securities Depositories Regulation (EU)' }
    ]
  },
  
  'ledger-protocol': {
    plain: 'Blockchain Protocol',
    legal: 'Ledger / Protocol (DLT)',
    definition: 'Distributed ledger technology (blockchain) that maintains the authoritative record through cryptographic consensus.',
    category: 'technical',
    citations: [
      { source: 'UCC § 12-105', text: 'Controllable electronic records on DLT' }
    ]
  },
  
  // Settlement Asset Terms
  'tokenized-deposit': {
    plain: 'Digital Bank Money',
    legal: 'Tokenized Deposit',
    definition: 'Bank deposits represented as tokens, maintaining deposit insurance and regulatory protections.',
    category: 'financial',
    citations: [
      { source: 'BIS', text: 'Unified Ledger concept for wholesale CBDC' }
    ]
  },
  
  'commercial-bank-money': {
    plain: 'Regular Bank Transfer',
    legal: 'Commercial Bank Money',
    definition: 'Traditional bank deposits and transfers — the money in your checking account.',
    category: 'financial'
  },
  
  'stablecoin': {
    plain: 'Dollar Token (uninsured)',
    legal: 'Stablecoin',
    definition: 'Cryptocurrency designed to maintain a stable value relative to fiat currency, but typically not deposit-insured.',
    category: 'financial'
  },
  
  'cbdc': {
    plain: 'Government Digital Money',
    legal: 'CBDC (Central Bank Digital Currency)',
    definition: 'Digital currency issued directly by a central bank, like a digital version of cash.',
    category: 'financial'
  },
  
  // Token Rail Terms
  'permissioned-chain': {
    plain: 'Private Blockchain',
    legal: 'Permissioned Chain',
    definition: 'A blockchain where participation is controlled and validators are known entities. Often used for enterprise and regulated applications.',
    category: 'technical'
  },
  
  'public-chain': {
    plain: 'Open Blockchain',
    legal: 'Public Chain',
    definition: 'A blockchain that anyone can join and participate in. Examples: Ethereum, Bitcoin.',
    category: 'technical'
  },
  
  // Accounting/IFRS Terms
  'ifrs-asset': {
    plain: 'Accounting Asset',
    legal: 'IFRS Asset',
    definition: 'A present economic resource controlled by an entity as a result of past events, per international accounting standards.',
    category: 'financial',
    citations: [
      { source: 'IFRS Conceptual Framework', text: 'CF §4.3–4.20 — Asset definition' }
    ]
  },
  
  'financial-asset': {
    plain: 'Money-Like Asset',
    legal: 'Financial Asset (IAS 32 / IFRS 9)',
    definition: 'Cash, contractual rights to receive cash, equity instruments of another entity, or derivative instruments.',
    category: 'financial',
    citations: [
      { source: 'IAS 32', text: 'Financial instruments presentation' },
      { source: 'IFRS 9', text: 'Financial instruments classification' }
    ]
  },
  
  // Control Mechanism Terms
  'necessary-credential': {
    plain: 'Required key',
    legal: 'Necessary Credential',
    definition: 'Without this key, the official gate won\'t change the record.',
    where: 'Control frameworks, tokenization tests',
    category: 'core'
  },
  
  'sufficient-instruction': {
    plain: 'Auto-execute',
    legal: 'Sufficient Instruction',
    definition: 'With this key and conditions met, the system changes the record without extra approvals.',
    where: 'Control frameworks, tokenization tests',
    category: 'core'
  },
  
  // Advanced Legal/Technical Terms
  'dvp': {
    plain: 'Atomic settlement',
    legal: 'DvP / PvP',
    definition: 'Both sides move together—or not at all.',
    where: 'Securities settlement, FX',
    category: 'financial',
    citations: [
      { source: 'ISO 20022', text: 'Settlement models and DVP' },
      { source: 'CPMI-IOSCO PFMI', text: 'Principle 12: Eliminate principal risk' }
    ]
  },
  
  'pvp': {
    plain: 'Atomic settlement',
    legal: 'DvP / PvP',
    definition: 'Both sides move together—or not at all.',
    where: 'Securities settlement, FX',
    category: 'financial',
    citations: [
      { source: 'CLS Settlement', text: 'Payment-versus-payment FX settlement' }
    ]
  },
  
  'cer': {
    plain: 'Controllable Electronic Record',
    legal: 'CER (UCC Art. 12)',
    definition: 'A digital record you can control like possession, with take-free protection for good-faith buyers.',
    where: 'US digital assets/collateral',
    category: 'legal',
    citations: [
      { source: 'UCC § 12-105', text: 'Controllable electronic records' },
      { source: 'UCC § 12-104', text: 'Control of CER' }
    ]
  },
  
  'mletr': {
    plain: 'Electronic Transferable Record',
    legal: 'MLETR, ETDA',
    definition: 'An electronic stand-in for paper title/IOUs, made legally effective by \'control\'.',
    where: 'e-bills of lading, e-promissory notes',
    category: 'legal',
    citations: [
      { source: 'UNCITRAL MLETR', text: 'Model Law on Electronic Transferable Records (2017)' },
      { source: 'UK ETDA 2023', text: 'Electronic Trade Documents Act implementation' }
    ]
  },
  
  'ewpg': {
    plain: 'Crypto-securities Register',
    legal: 'eWpG; Swiss DLT Act',
    definition: 'A blockchain register that is the official share/bond ledger.',
    where: 'Germany (eWpG), Switzerland (DLT Act)',
    category: 'legal',
    citations: [
      { source: 'eWpG §16', text: 'Crypto securities register' },
      { source: 'German Law', text: 'Gesetz über elektronische Wertpapiere' }
    ]
  },
  
  'dlt': {
    plain: 'Shared Ledger',
    legal: 'DLT',
    definition: 'Blockchain used as a common record.',
    where: 'Distributed ledger technology',
    category: 'technical',
    citations: [
      { source: 'BIS', text: 'Distributed ledger technology in payment, clearing and settlement' }
    ]
  },
  
  'ta-csd': {
    plain: 'Transfer Agent / Central Securities Depository',
    legal: 'TA / CSD',
    definition: 'The official keepers of the securities register and settlement.',
    category: 'financial',
    citations: [
      { source: 'SEC', text: 'Transfer agent registration' },
      { source: 'CSDR', text: 'Central Securities Depositories Regulation (EU)' }
    ]
  },
  
  'official-gate': {
    plain: 'Official Gate',
    legal: 'Official Gate (ACP)',
    definition: 'The official place where a change must be recorded for it to count.',
    where: 'Registries, custodians, settlement rails, device/API controllers, negotiable-document systems',
    category: 'core',
    citations: [
      { source: 'ACP Framework', text: 'Entity with exclusive authority to mutate asset state' }
    ]
  },
  
  // Outcome Terms
  'strong-acp': {
    plain: 'Strong Control',
    legal: 'Strong (proceed to structuring)',
    definition: 'High confidence that token control translates to asset control. Ready to build the structure.',
    category: 'core'
  },
  
  'probable-acp': {
    plain: 'Likely Works',
    legal: 'Probable (close gaps)',
    definition: 'Token control is likely enforceable, but some legal or technical gaps should be addressed.',
    category: 'core'
  },
  
  'weak-acp': {
    plain: 'Major Gaps',
    legal: 'Weak (re-architect)',
    definition: 'Significant weaknesses in the control mechanism. Needs fundamental redesign.',
    category: 'core'
  },
  
  'custodian-bailee': {
    plain: 'Professional Keeper',
    legal: 'Custodian / Bailee',
    definition: 'A regulated entity that holds and safeguards assets on behalf of clients.',
    category: 'financial',
    citations: [
      { source: 'UCC Article 8', text: 'Securities intermediary and security entitlements' }
    ]
  },
  
  'electronic-chattel-paper': {
    plain: 'Electronic Chattel Paper',
    legal: 'UCC 9-105 control',
    definition: 'Digital document that stands for a financed good.',
    where: 'US receivables/auto floorplan',
    category: 'legal',
    citations: [
      { source: 'UCC § 9-105', text: 'Control of electronic chattel paper' },
      { source: 'UCC § 9-330', text: 'Priority of purchaser of chattel paper' }
    ]
  },
  
  'take-free': {
    plain: 'Take-free',
    legal: 'UCC 12 take-free',
    definition: 'A good-faith buyer gets it clean.',
    where: 'UCC Article 12, controllable electronic records',
    category: 'legal',
    citations: [
      { source: 'UCC § 12-104', text: 'Qualifying purchaser takes free of claims' }
    ]
  }
};

export function getTermKeys(): string[] {
  return Object.keys(GLOSSARY);
}

export function searchGlossary(query: string): Array<{ key: string; term: TermDefinition }> {
  const lowerQuery = query.toLowerCase();
  return Object.entries(GLOSSARY)
    .filter(([key, term]) => 
      key.toLowerCase().includes(lowerQuery) ||
      term.plain.toLowerCase().includes(lowerQuery) ||
      term.legal.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery)
    )
    .map(([key, term]) => ({ key, term }));
}

// ============================================================================
// Value Display Mapping - maps stored values to terminology
// ============================================================================

export const VALUE_TO_TERM_KEY: Record<string, string> = {
  // Asset Types
  'Investment Security': 'investment-security',
  'Tangible Goods': 'tangible-goods',
  'Land & Fixtures': 'real-property',
  'IP & Licence': 'intangible-right',
  'Digital/Data Object': 'intangible-right',
  
  // Binding Paths
  'Registry of Record': 'registry-of-record',
  'Custodian / Bailee': 'custodian-bailee',
  'Settlement Rail': 'settlement-rail',
  'Ledger / Protocol': 'ledger-protocol',
  
  // Settlement Assets
  'Tokenized Deposit': 'tokenized-deposit',
  'Commercial Bank Money': 'commercial-bank-money',
  'Stablecoin': 'stablecoin',
  'CBDC': 'cbdc',
  
  // Token Rails
  'Permissioned chain': 'permissioned-chain',
  'Public chain': 'public-chain',
  
  // Outcomes
  'Tokenized Asset (ACP-bound)': 'tokenized-asset',
  'Tokenized Claim (no ACP binding)': 'tokenized-claim',
  
  // Score Labels
  'Strong (proceed to structuring)': 'strong-acp',
  'Probable (close gaps)': 'probable-acp',
  'Weak (re-architect)': 'weak-acp',
  'Claim-wrapper (label honestly)': 'claim-wrapper',
  
  // UI Labels - for InputCard termKeys
  'asset-type': 'thing',
  'binding-path': 'official-gate',
  'settlement-asset': 'tokenized-deposit',
  'token-rail': 'ledger-protocol',
  
  // Acronyms and jargon
  'DvP': 'dvp',
  'PvP': 'pvp',
  'CER': 'cer',
  'MLETR': 'mletr',
  'eWpG': 'ewpg',
  'DLT': 'dlt',
  'TA / CSD': 'ta-csd',
  'ACP': 'official-gate',
  
  // Control questions
  'Necessary credential': 'necessary-credential',
  'Sufficient instruction': 'sufficient-instruction',
  
  // Additional mappings
  'Custodian / Bailee': 'custodian-bailee',
  'Financial Asset': 'financial-asset',
  'Tokenized Asset': 'tokenized-asset',
  'Strong (proceed to structuring)': 'strong-acp',
  'Probable (close gaps)': 'probable-acp',
  'Weak (re-architect)': 'weak-acp',
  'Claim-wrapper (label honestly)': 'claim-wrapper'
};

// Additional glossary entries for UI labels
GLOSSARY['asset-type'] = {
  plain: 'Asset / Right',
  legal: 'Thing Classification (Res)',
  definition: 'The primary legal category of the underlying asset or right being tokenized.',
  category: 'core'
};

GLOSSARY['binding-path'] = {
  plain: 'Intended Official Gate',
  legal: 'Intended ACP Binding Path',
  definition: 'Where will the change \'count\'? Registry, custodian, settlement system, device, or document system.',
  category: 'core'
};

GLOSSARY['settlement-asset'] = {
  plain: 'Payment Method',
  legal: 'Settlement Asset Preference',
  definition: 'The form of money or value used for the cash-leg of transactions.',
  category: 'financial'
};

GLOSSARY['token-rail'] = {
  plain: 'Infrastructure',
  legal: 'Token Rail',
  definition: 'The technical infrastructure for issuing and transferring tokens.',
  category: 'technical'
};

export function getDisplayValue(value: string, mode: 'plain' | 'legal' | 'dual'): string {
  const termKey = VALUE_TO_TERM_KEY[value];
  if (!termKey || !GLOSSARY[termKey]) {
    return value;
  }
  
  const term = GLOSSARY[termKey];
  
  switch (mode) {
    case 'plain':
      return term.plain;
    case 'legal':
      return term.legal;
    case 'dual':
      return `${term.plain} (${term.legal})`;
    default:
      return value;
  }
}
