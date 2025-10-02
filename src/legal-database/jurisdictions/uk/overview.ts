/**
 * UK Legal Framework Overview
 *
 * The United Kingdom has the most advanced digital asset legal framework globally,
 * with clear property status, comprehensive legislation (ETDA 2023), and authoritative
 * legal statements from the UK Jurisdiction Taskforce.
 */

import type { JurisdictionOverview } from '../../types';

export const ukOverview: JurisdictionOverview = {
  legalSystemDescription: `The United Kingdom operates under a common law system based on judicial precedent and statutory law. The UK has been a global leader in developing legal frameworks for digital assets, with the UK Jurisdiction Taskforce (UKJT) providing authoritative legal statements and the Law Commission conducting comprehensive reviews resulting in landmark legislation. The Electronic Trade Documents Act 2023 (ETDA) and the pending Property (Digital Assets etc) Bill represent world-leading reforms recognizing digital assets as property and enabling tokenized ownership structures.`,

  regulatoryBodies: [
    {
      name: 'Financial Conduct Authority',
      acronym: 'FCA',
      role: 'Primary regulator for financial services and markets. Regulates cryptoassets that qualify as specified investments (security tokens, e-money tokens, stablecoins). Operates the Digital Securities Sandbox for tokenized securities infrastructure.',
      jurisdiction: 'onshore',
      website: 'https://www.fca.org.uk',
      contact: 'https://www.fca.org.uk/contact'
    },
    {
      name: 'Bank of England',
      acronym: 'BoE',
      role: 'Central bank responsible for monetary policy, payment systems oversight, and financial stability. Oversees settlement systems (RTGS, CHAPS), researching digital pound (CBDC), and supervises Financial Market Infrastructures (FMIs) including tokenized settlement systems.',
      jurisdiction: 'onshore',
      website: 'https://www.bankofengland.co.uk',
      contact: 'https://www.bankofengland.co.uk/contact-us'
    },
    {
      name: 'Prudential Regulation Authority',
      acronym: 'PRA',
      role: 'Regulates banks, building societies, credit unions, insurers, and major investment firms. Part of the Bank of England. Oversees prudential requirements for institutions engaging in digital asset activities.',
      jurisdiction: 'onshore',
      website: 'https://www.bankofengland.co.uk/prudential-regulation'
    },
    {
      name: 'Financial Reporting Council',
      acronym: 'FRC',
      role: 'Regulates auditors, accountants, and actuaries. Sets UK Corporate Governance Code. Increasingly relevant for accounting treatment of digital assets and tokenized securities.',
      jurisdiction: 'onshore',
      website: 'https://www.frc.org.uk'
    },
    {
      name: 'HM Treasury',
      acronym: 'HMT',
      role: 'Government department responsible for financial services policy. Driving cryptoasset regulation agenda, including stablecoin regulation and bringing certain cryptoassets into FCA perimeter.',
      jurisdiction: 'onshore',
      website: 'https://www.gov.uk/government/organisations/hm-treasury'
    },
    {
      name: 'UK Jurisdiction Taskforce',
      acronym: 'UKJT',
      role: 'Expert taskforce convened by LawTech Delivery Panel. Published authoritative legal statements on cryptoassets (2019) and smart contracts (2021) that have been widely cited by UK courts and international jurisdictions.',
      jurisdiction: 'onshore',
      website: 'https://technation.io/about-us/lawtech-delivery-panel/'
    }
  ],

  keyLegislation: [
    'Electronic Trade Documents Act 2023 - Revolutionary legislation allowing electronic trade documents (bills of lading, warehouse receipts, bills of exchange) to have same legal effect as paper originals',
    'Property (Digital Assets etc) Bill 2024 - Pending legislation recognizing digital assets as distinct category of personal property',
    'Financial Services and Markets Act 2023 (FSMA 2023) - Updates regulatory framework including Digital Securities Sandbox provisions',
    'Financial Services and Markets Act 2000 (FSMA 2000) - Primary financial services legislation, as amended',
    'Companies Act 2006 - Corporate governance including share registers (permitting electronic registers)',
    'Settlement Finality Regulations 1999 (SI 1999/2979) - Implements EU Settlement Finality Directive, provides finality protections',
    'Law of Property (Miscellaneous Provisions) Act 1989 - Governs property transfers including electronic signatures',
    'Electronic Communications Act 2000 - Legal recognition of electronic signatures and documents',
    'Data Protection Act 2018 / UK GDPR - Privacy and data protection requirements',
    'Financial Collateral Arrangements (No. 2) Regulations 2003 - Security interests over financial assets'
  ],

  tokenizationReadiness: {
    level: 'advanced',

    strengths: [
      'UK Jurisdiction Taskforce (UKJT) 2019 legal statement established cryptoassets ARE property under English law (third category of property)',
      'Electronic Trade Documents Act 2023 (ETDA) allows electronic trade documents with same legal effect as paper - revolutionary for tokenization',
      'Law Commission Digital Assets project (2022-2024) provided comprehensive legal framework confirming third category of property',
      'Property (Digital Assets etc) Bill progressing through Parliament to statutorily recognize digital assets',
      'Digital Securities Sandbox operational September 2024 - December 2028, first FMI sandbox under FSMA 2023',
      'FCA Cryptoassets Guidance (PS19/22) provides regulatory clarity on perimeter',
      'Common law flexibility allows courts to adapt to new technology (UKJT statements widely cited)',
      'Control concept well-established for cryptoassets (exclusive control via private keys recognized)',
      'Good faith purchaser protections available (bona fide purchaser for value without notice)',
      'Companies Act permits electronic share registers since 2006',
      'Advanced payment infrastructure (CHAPS, RTGS) with settlement finality protections',
      'Bank of England actively researching digital pound (CBDC)',
      'Proven tokenization precedents: Nivaura, Archax, LSEG Digital Markets',
      'Government commitment to making UK global cryptoasset hub'
    ],

    gaps: [
      'Property Bill not yet enacted (though passage expected)',
      'CBDC still in research/pilot phase, not yet available for settlement',
      'Some legal uncertainty around conflict of laws for cross-border tokenized assets',
      'Regulatory treatment of certain DeFi activities still evolving',
      'Limited precedent on enforcement of smart contract terms in disputes',
      'Custodian/intermediary insolvency protections for tokenized assets need further clarification',
      'Tax treatment of certain tokenization structures remains unclear',
      'Interoperability standards between different tokenization platforms not yet established'
    ]
  }
};
