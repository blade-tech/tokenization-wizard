/**
 * Malaysia Control and Ownership Frameworks
 *
 * Legal mechanisms for establishing control and ownership over different asset types,
 * including both conventional and Shariah-compliant structures.
 */

import type { ControlFramework } from '../../types';

export const malaysiaControlFrameworks: ControlFramework[] = [
  {
    framework: 'Central Depository System (CDS)',
    assetTypesApplicable: ['securities', 'sukuk'],
    legalBasis: [
      'Capital Markets and Services Act 2007 Part VI (Central Depositories)',
      'Securities Industry (Central Depositories) Act 1991 (repealed, now under CMSA 2007)',
      'CDS Rules and Regulations',
      'Bursa Malaysia Depository Operating Rules'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Securities account maintained with authorized depository agent',
          legalRequirement: 'CMSA 2007 Section 34 - only authorized depository agents can maintain securities accounts',
          verification: 'Account opening documentation and CDS participant confirmation',
          certainty: 'high'
        },
        {
          condition: 'Entry in CDS record showing ownership',
          legalRequirement: 'CMSA 2007 Section 37 - CDS register is prima facie evidence of ownership',
          verification: 'CDS account statement showing securities holdings',
          certainty: 'high'
        },
        {
          condition: 'Compliance with CDS operating rules',
          legalRequirement: 'Bursa Malaysia Depository Operating Rules - govern transfers, pledges, and corporate actions',
          verification: 'Adherence to T+2 settlement cycle and CDS procedures',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Registration in CDS record as legal owner',
          legalRequirement: 'CMSA 2007 Section 38 - registration in CDS confers legal title',
          verification: 'CDS register entry showing beneficial ownership',
          certainty: 'high'
        },
        {
          condition: 'Settlement finality achieved (T+2)',
          legalRequirement: 'Payment Systems Act 2003 settlement finality provisions',
          verification: 'CDS settlement confirmation and value date',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'strong',
    intermediaryRequired: true,
    intermediaryDetails: {
      type: 'Authorized Depository Agent (stockbroker or custodian bank approved by Bursa Malaysia Depository)',
      licensingRequired: true,
      regulator: 'Securities Commission Malaysia and Bursa Malaysia'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Bona fide purchaser for value without notice of adverse claim',
        'Relied on CDS register as evidence of ownership',
        'No actual knowledge of fraud or defect in title'
      ],
      legalBasis: [
        'CMSA 2007 Section 37(2) - CDS register as prima facie evidence',
        'Common law bona fide purchaser principles'
      ]
    },
    citations: [
      'cmsa-2007-part-vi',
      'cds-rules',
      'bursa-operating-rules'
    ],
    examples: [
      'Listed securities on Bursa Malaysia held in scripless form via CDS accounts',
      'Sukuk (Islamic bonds) registered in CDS for institutional investors',
      'Shares transferred electronically through CDS with T+2 settlement',
      'Corporate actions (dividends, rights issues) processed through CDS eDividend system'
    ]
  },

  {
    framework: 'Company Statutory Register',
    assetTypesApplicable: ['securities'],
    legalBasis: [
      'Companies Act 2016 Section 50 (Register of members)',
      'Companies Act 2016 Section 58 (Certificate as evidence)',
      'Companies Act 2016 Section 105 (Transfer of shares)',
      'Companies (Register of Members) Regulations 2017'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Name entered in company\'s register of members',
          legalRequirement: 'Companies Act 2016 Section 50 - company must maintain register of members',
          verification: 'Register of members inspection or certified extract',
          certainty: 'high'
        },
        {
          condition: 'Instrument of transfer executed',
          legalRequirement: 'Companies Act 2016 Section 105 - shares transferred by written instrument',
          verification: 'Transfer form signed by transferor and transferee',
          certainty: 'high'
        },
        {
          condition: 'Company registration of transfer',
          legalRequirement: 'Companies Act 2016 Section 105(4) - transfer not effective until registered',
          verification: 'Company secretary confirmation of registration',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Registration on register of members',
          legalRequirement: 'Companies Act 2016 Section 58 - register is prima facie evidence of ownership',
          verification: 'Entry in register with date of registration',
          certainty: 'high'
        },
        {
          condition: 'Certificate of shareholding issued (if certificated)',
          legalRequirement: 'Companies Act 2016 Section 95 - certificate as evidence of title',
          verification: 'Possession of valid share certificate',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'strong',
    intermediaryRequired: false,
    goodFaithProtection: {
      available: true,
      conditions: [
        'Bona fide purchaser for value without notice of defect',
        'Relied on register of members or share certificate',
        'Company registered transfer in good faith'
      ],
      legalBasis: [
        'Companies Act 2016 Section 58 - register as prima facie evidence',
        'Common law bona fide purchaser doctrine'
      ]
    },
    citations: [
      'companies-act-2016',
      'register-members-regs-2017'
    ],
    examples: [
      'Private company shares registered in statutory register',
      'Electronic register permitted under Companies Act 2016',
      'Tokenized equity structure using electronic register with SC approval',
      'Direct share transfers registered by company secretary'
    ]
  },

  {
    framework: 'Torrens Land Registration',
    assetTypesApplicable: ['real-estate'],
    legalBasis: [
      'National Land Code 1965 (Peninsular Malaysia)',
      'Strata Titles Act 1985',
      'Land (Group Settlement Areas) Act 1960',
      'Sarawak Land Code (Sarawak)',
      'Sabah Land Ordinance (Sabah)'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Execution of Memorandum of Transfer',
          legalRequirement: 'National Land Code 1965 Section 214 - transfer by prescribed form',
          verification: 'Form 14A (transfer) executed before Land Office',
          certainty: 'high'
        },
        {
          condition: 'Payment of stamp duty and assessment',
          legalRequirement: 'Stamp Act 1949 - transfer instruments must be stamped',
          verification: 'Stamp duty certificate and receipts',
          certainty: 'high'
        },
        {
          condition: 'Consent of State Authority (if required)',
          legalRequirement: 'National Land Code Section 214A - consent for certain transactions',
          verification: 'Written consent from State Authority',
          certainty: 'high'
        },
        {
          condition: 'Registration at State Land Registry',
          legalRequirement: 'National Land Code Section 340 - title passes only upon registration',
          verification: 'Endorsement on title and registration receipt',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Registration on land title document',
          legalRequirement: 'National Land Code Section 89 - Torrens principle of indefeasible title',
          verification: 'Name on registered title as proprietor',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'strong',
    intermediaryRequired: false,
    goodFaithProtection: {
      available: true,
      conditions: [
        'Registered proprietor has indefeasible title per Torrens system',
        'Good faith purchaser for value',
        'No fraud, forgery, or misrepresentation by purchaser',
        'Immediate registration exception per Section 89 NLC'
      ],
      legalBasis: [
        'National Land Code Section 89 - indefeasibility of title',
        'Section 340 - registration confers title',
        'Adorna Properties Sdn Bhd v Boonsom Boonyanit [2001] - indefeasible title principles'
      ]
    },
    citations: [
      'national-land-code-1965',
      'strata-titles-1985',
      'adorna-properties-2001'
    ],
    examples: [
      'Freehold land title registered at State Land Office',
      'Strata title for condominium unit',
      'Leasehold interest registered for fixed term',
      'Caveat lodged to protect equitable interest',
      'Direct tokenization of legal title unclear - SPV structure typically used'
    ]
  },

  {
    framework: 'Electronic Records Control',
    assetTypesApplicable: ['trade-documents', 'cryptoassets'],
    legalBasis: [
      'Electronic Commerce Act 2006',
      'Digital Signature Act 1997',
      'Evidence Act 1950 (Sections 90A-90C - computer evidence)',
      'SC Digital Asset Guidelines (for cryptoassets)'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Reliable electronic system maintaining integrity',
          legalRequirement: 'ECA 2006 Section 8 - information must be accessible and usable',
          verification: 'System audit demonstrating data integrity and non-alteration',
          certainty: 'medium'
        },
        {
          condition: 'Electronic signature meeting ECA 2006 requirements',
          legalRequirement: 'ECA 2006 Sections 6-7 - signature identifies person and indicates approval',
          verification: 'Digital signature or cryptographic authentication',
          certainty: 'medium'
        },
        {
          condition: 'Exclusive control via cryptographic means',
          legalRequirement: 'SC Digital Asset Guidelines - control via private keys for cryptoassets',
          verification: 'Private key possession and signature capability',
          certainty: 'medium'
        }
      ],
      sufficient: [
        {
          condition: 'Ability to exclude others from control',
          legalRequirement: 'Common law possession principles applied to digital assets',
          verification: 'Exclusive access to private keys or authentication credentials',
          certainty: 'medium'
        },
        {
          condition: 'Certified digital signature (enhanced)',
          legalRequirement: 'Digital Signature Act 1997 - certified signatures have presumption of validity',
          verification: 'Certificate from licensed certification authority',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'moderate',
    intermediaryRequired: false,
    intermediaryDetails: {
      type: 'Optional: Licensed Certification Authority (for certified digital signatures) or registered Digital Asset Exchange (for cryptoassets)',
      licensingRequired: true,
      regulator: 'Malaysian Communications and Multimedia Commission (digital signatures) or Securities Commission (DAX)'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Reliance on certified digital signature',
        'Electronic document appeared authentic and unaltered',
        'No knowledge of compromise or fraud'
      ],
      legalBasis: [
        'Digital Signature Act 1997 Section 62 - reliance on digital signatures',
        'ECA 2006 Section 11 - admissibility of electronic records',
        'Evidence Act 1950 Section 90A - presumption of computer accuracy'
      ]
    },
    citations: [
      'eca-2006',
      'digital-signature-act-1997',
      'evidence-act-1950',
      'sc-digital-asset-guidelines-2024'
    ],
    examples: [
      'Electronic warehouse receipts with digital signatures',
      'Tokenized bills of lading on DLT platforms',
      'Cryptoassets controlled via private keys',
      'Electronic contracts with certified digital signatures',
      'Digital invoices and payment records in trade finance'
    ]
  },

  {
    framework: 'Custodial Control (Digital Assets)',
    assetTypesApplicable: ['cryptoassets', 'securities'],
    legalBasis: [
      'SC Digital Asset Guidelines 2020 (Custodian requirements)',
      'Capital Markets and Services Act 2007 (custody regulation)',
      'SC Guidelines on Safeguarding of Client Assets',
      'CMSA (Licensing and Registration) Regulations 2007'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Licensed custodian holding digital assets',
          legalRequirement: 'SC Digital Asset Guidelines - custodians must be SC-licensed or approved DAX operator',
          verification: 'Custodian agreement and SC license verification',
          certainty: 'high'
        },
        {
          condition: 'Segregation of client assets',
          legalRequirement: 'SC Guidelines on Safeguarding Client Assets - client assets segregated from custodian assets',
          verification: 'Separate wallet addresses or accounts for each client',
          certainty: 'high'
        },
        {
          condition: 'Client instruction required for transfers',
          legalRequirement: 'Custodian agreement terms - no transfers without client authorization',
          verification: 'Written or electronic instruction from client',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Custodian confirmation of holding',
          legalRequirement: 'Custody agreement establishing legal title in client',
          verification: 'Account statement and custody confirmation',
          certainty: 'medium'
        },
        {
          condition: 'Private key recovery capability',
          legalRequirement: 'SC Digital Asset Guidelines - secure backup and recovery procedures',
          verification: 'Multi-signature or backup key arrangements',
          certainty: 'medium'
        }
      ]
    },
    acpBinding: 'moderate',
    intermediaryRequired: true,
    intermediaryDetails: {
      type: 'Licensed custodian or registered Digital Asset Exchange (DAX) operator',
      licensingRequired: true,
      regulator: 'Securities Commission Malaysia'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Custodian acted in accordance with client instructions',
        'No knowledge of fraud or unauthorized transfer',
        'Relied on verified identity and authentication'
      ],
      legalBasis: [
        'SC Guidelines on Safeguarding Client Assets',
        'Trustee Act 1949 (duties of trustees and custodians)',
        'Common law fiduciary duties'
      ]
    },
    citations: [
      'sc-digital-asset-guidelines-2024',
      'cmsa-2007',
      'sc-safeguarding-client-assets',
      'trustee-act-1949'
    ],
    examples: [
      'Digital asset custody by licensed DAX operator (Luno, SINEGY, Tokenize)',
      'Institutional custody of security tokens',
      'Cold storage and hot wallet management',
      'Multi-signature wallet custody arrangements',
      'Qualified custodian for tokenized securities'
    ]
  },

  {
    framework: 'Shariah-Compliant Ownership (Musharakah/Mudharabah)',
    assetTypesApplicable: ['securities', 'real-estate', 'funds', 'commodities'],
    legalBasis: [
      'Islamic Financial Services Act 2013',
      'Shariah Advisory Council rulings',
      'SC Islamic Capital Market Guidelines',
      'BNM Shariah Governance Framework'
    ],
    controlDefinition: {
      necessary: [
        {
          condition: 'Shariah-compliant contract (aqd) establishing ownership',
          legalRequirement: 'IFSA 2013 Section 28 - Islamic financial contracts must comply with Shariah',
          verification: 'Shariah contract documentation (musharakah, mudarabah, etc.)',
          certainty: 'high'
        },
        {
          condition: 'Asset-backing and risk-sharing',
          legalRequirement: 'SAC rulings - Islamic ownership requires asset-backing and risk-sharing',
          verification: 'Underlying asset identification and valuation',
          certainty: 'high'
        },
        {
          condition: 'Shariah compliance certification',
          legalRequirement: 'IFSA 2013 Section 30 - Shariah committee approval required',
          verification: 'Shariah audit and compliance report',
          certainty: 'high'
        },
        {
          condition: 'No riba (interest) or gharar (uncertainty)',
          legalRequirement: 'SAC rulings - prohibition of riba and excessive gharar',
          verification: 'Contract review for prohibited elements',
          certainty: 'high'
        }
      ],
      sufficient: [
        {
          condition: 'Registration or documentation per applicable law',
          legalRequirement: 'Combination of IFSA 2013 Shariah requirements + conventional property law',
          verification: 'Both Shariah contract and legal registration (land, securities, etc.)',
          certainty: 'high'
        }
      ]
    },
    acpBinding: 'moderate',
    intermediaryRequired: false,
    intermediaryDetails: {
      type: 'Optional: Islamic financial institution or Shariah-compliant platform',
      licensingRequired: true,
      regulator: 'Bank Negara Malaysia (banking) or Securities Commission (capital markets)'
    },
    goodFaithProtection: {
      available: true,
      conditions: [
        'Bona fide purchaser relying on Shariah compliance representation',
        'SAC ruling or Shariah committee approval obtained',
        'No knowledge of Shariah non-compliance'
      ],
      legalBasis: [
        'IFSA 2013 Section 56 - SAC rulings binding on courts',
        'Common law bona fide purchaser principles',
        'Shariah principles of good faith (amanah)'
      ]
    },
    citations: [
      'ifsa-2013',
      'sac-rulings',
      'sc-islamic-capital-market',
      'bnm-shariah-governance'
    ],
    examples: [
      'Musharakah mutanaqisah (diminishing partnership) for Islamic home financing',
      'Mudarabah (profit-sharing) structure for Islamic investment funds',
      'Sukuk ownership representing asset-backed certificates',
      'Ijarah (leasing) with ownership transfer option',
      'Wakalah (agency) for Islamic payment services',
      'Tokenized sukuk using musharakah principles'
    ]
  }
];
