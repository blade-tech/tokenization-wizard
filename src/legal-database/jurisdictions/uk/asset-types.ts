/**
 * UK Asset Type Legal Classifications
 *
 * How UK law classifies different asset types for tokenization purposes,
 * covering property status, transfer mechanisms, and registration requirements.
 */

import type { AssetTypeRule } from '../../types';

export const ukAssetTypes: AssetTypeRule[] = [
  {
    assetType: 'cryptoassets',
    legalClassification: 'Third category of personal property (neither thing in possession nor thing in action), as established by UKJT 2019 legal statement and confirmed by Law Commission 2023 final report',
    governingLaw: [
      'UKJT Legal Statement on Cryptoassets and Smart Contracts (2019)',
      'Law Commission Digital Assets Final Report (2023)',
      'Property (Digital Assets etc) Bill 2024 (pending)',
      'Common law property principles'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Exclusive control via private keys (cryptographic control)',
      'On-chain transaction history (blockchain record)',
      'Wallet addresses and cryptographic signatures',
      'Control test per ETDA 2023 for electronic records'
    ],
    transferMechanism: [
      'On-chain transfer via private key signature',
      'Delivery of private keys (physical or electronic)',
      'Change of control as defined by network protocol',
      'Smart contract execution (atomic swap, escrow, etc.)'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'No statutory registry - blockchain itself serves as distributed ledger',
      statutory: false,
      titleConferring: false,
      dltCompatible: true
    },
    citations: [
      'ukjt-cryptoassets-2019',
      'law-commission-digital-assets-2023',
      'property-bill-2024',
      'etda-2023'
    ],
    notes: 'UK has clearest global recognition of cryptoassets as property. UKJT statement widely cited by courts. Control via private keys is well-established ownership mechanism.'
  },

  {
    assetType: 'securities',
    legalClassification: 'Specified investments under Financial Services and Markets Act 2000 (Regulated Activities) Order 2001. Shares, debentures, bonds qualify as things in action.',
    governingLaw: [
      'Financial Services and Markets Act 2000',
      'Financial Services and Markets Act 2023',
      'Companies Act 2006',
      'Uncertificated Securities Regulations 2001 (SI 2001/3755)',
      'FCA Handbook (COLL, CASS, etc.)'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Entry on company share register (statutory register)',
      'Entry on CREST system (for uncertificated securities)',
      'Electronic record on authorized tokenization platform (Digital Securities Sandbox)',
      'Stock transfer form (for certificated transfers)',
      'Beneficial ownership records (for intermediated holdings)'
    ],
    transferMechanism: [
      'Stock transfer pursuant to Companies Act 2006 (certificated)',
      'Electronic transfer via CREST system (uncertificated)',
      'Tokenized transfer on authorized DLT platform (Digital Securities Sandbox)',
      'Proper instrument of transfer + registration',
      'Book entry transfer for intermediated securities'
    ],
    registrationRequired: true,
    registryDetails: {
      name: 'Company statutory share register (Companies Act 2006) or CREST (Euroclear UK & Ireland)',
      statutory: true,
      titleConferring: true,
      dltCompatible: true
    },
    citations: [
      'companies-act-2006',
      'fsma-2000',
      'fsma-2023',
      'uncertificated-securities-regs-2001',
      'digital-securities-sandbox-2024'
    ],
    notes: 'Companies Act permits electronic registers since 2006. Digital Securities Sandbox (operational Sep 2024) allows FMIs to test DLT-based share registers. Registration on company register confers legal title.'
  },

  {
    assetType: 'trade-documents',
    legalClassification: 'Electronic trade documents with same legal effect as paper documents per Electronic Trade Documents Act 2023 (bills of lading, warehouse receipts, bills of exchange, promissory notes, ship delivery orders, marine insurance policies)',
    governingLaw: [
      'Electronic Trade Documents Act 2023',
      'Bills of Exchange Act 1882',
      'Carriage of Goods by Sea Act 1992',
      'Sale of Goods Act 1979',
      'Law of Property (Miscellaneous Provisions) Act 1989'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Exclusive control test under ETDA 2023 s.2(2): ability to exclude others from control',
      'Reliable system for identifying controller (private keys, digital signatures)',
      'Integrity of electronic document maintained',
      'Possession of unique electronic original (not mere copy)'
    ],
    transferMechanism: [
      'Transfer of control via electronic means (ETDA 2023 s.2)',
      'Delivery of private keys enabling exclusive control',
      'Endorsement and delivery (for negotiable instruments)',
      'DLT-based transfer of unique tokenized document',
      'Transfer must satisfy possession/control requirements'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'No statutory registry - control-based system. DLT platforms (e.g., CargoX, TradeLens, Bolero) provide electronic transfer infrastructure.',
      statutory: false,
      titleConferring: false,
      dltCompatible: true
    },
    citations: [
      'etda-2023',
      'bills-of-exchange-1882',
      'carriage-goods-sea-1992',
      'law-commission-etd-2022'
    ],
    notes: 'ETDA 2023 is revolutionary - first legislation globally to give electronic trade documents same legal effect as paper. Control test (s.2) enables tokenization. Possession of unique electronic original = ownership.'
  },

  {
    assetType: 'real-estate',
    legalClassification: 'Legal estate in land (freehold or leasehold) - thing in possession requiring registration at HM Land Registry',
    governingLaw: [
      'Land Registration Act 2002',
      'Law of Property Act 1925',
      'Law of Property (Miscellaneous Provisions) Act 1989',
      'Electronic Communications Act 2000'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Registered title at HM Land Registry (legal estate)',
      'Title deeds (unregistered land - now rare)',
      'Official copy of register entries',
      'Electronic Land Registry records'
    ],
    transferMechanism: [
      'Deed of transfer (must be deed per s.52 LPA 1925)',
      'Electronic signature permitted under Electronic Communications Act 2000',
      'Registration at Land Registry (compulsory for most transfers)',
      'Transfer takes effect only upon registration (LRA 2002 s.27)',
      'Direct tokenization of legal estate not possible - only tokenization of economic interest (shares in SPV)'
    ],
    registrationRequired: true,
    registryDetails: {
      name: 'HM Land Registry',
      statutory: true,
      titleConferring: true,
      dltCompatible: 'unclear'
    },
    citations: [
      'land-registration-act-2002',
      'lpa-1925',
      'lpa-misc-1989',
      'hmland-registry-digital'
    ],
    notes: 'Legal title to land MUST be registered at Land Registry. Direct tokenization of legal estate unlikely; typical structure is tokenization of shares in SPV holding property. Land Registry exploring digital services but DLT integration unclear.'
  },

  {
    assetType: 'commodities',
    legalClassification: 'Goods (tangible movable property) - thing in possession. Ownership determined by possession and title documents (warehouse receipts).',
    governingLaw: [
      'Sale of Goods Act 1979',
      'Electronic Trade Documents Act 2023 (for warehouse receipts)',
      'Factors Act 1889',
      'Torts (Interference with Goods) Act 1977'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Physical possession of goods',
      'Warehouse receipt or delivery order (document of title)',
      'Electronic warehouse receipt (ETDA 2023 compliant)',
      'Title retention clause in sale contract',
      'Bill of lading (for goods in transit)'
    ],
    transferMechanism: [
      'Physical delivery and acceptance',
      'Transfer of document of title (warehouse receipt)',
      'Electronic transfer of warehouse receipt (ETDA 2023)',
      'Constructive delivery (attornment by bailee)',
      'Sale by description with delivery obligation'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'No statutory registry - possession and documents of title determine ownership. Electronic warehouse receipts via ETDA 2023 platforms.',
      statutory: false,
      titleConferring: false,
      dltCompatible: true
    },
    citations: [
      'sale-goods-act-1979',
      'etda-2023',
      'factors-act-1889'
    ],
    notes: 'ETDA 2023 enables electronic warehouse receipts with same effect as paper. Tokenization of warehouse receipts viable. Physical commodities require custodian/bailee. Transfer of document = transfer of constructive possession.'
  },

  {
    assetType: 'funds',
    legalClassification: 'Money as thing in action (bank deposit) or cash (thing in possession). Stablecoins and e-money tokens subject to FCA regulation.',
    governingLaw: [
      'Financial Services and Markets Act 2000',
      'Electronic Money Regulations 2011 (SI 2011/99)',
      'Payment Services Regulations 2017 (SI 2017/752)',
      'FCA Guidance on Cryptoassets (PS19/22)',
      'Proposed stablecoin regulation (HMT consultation 2024)'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Bank account balance (deposit claim)',
      'E-money token balance (if authorized EMI)',
      'Stablecoin holdings (if regulated under proposed regime)',
      'Account statements and transaction records',
      'Cryptographic control of tokenized deposit'
    ],
    transferMechanism: [
      'Bank transfer via payment systems (CHAPS, Faster Payments, BACS)',
      'E-money transfer (authorized EMI)',
      'Stablecoin transfer (on-chain or off-chain)',
      'Tokenized deposit transfer (if permitted)',
      'Settlement via RTGS (Bank of England accounts)'
    ],
    registrationRequired: false,
    registryDetails: {
      name: 'Bank ledgers, RTGS system (Bank of England), CREST (for cash settlement). No DLT-based system operational yet, but digital pound under research.',
      statutory: false,
      titleConferring: false,
      dltCompatible: 'unclear'
    },
    citations: [
      'fsma-2000',
      'e-money-regs-2011',
      'payment-services-regs-2017',
      'fca-ps19-22',
      'digital-pound-consultation-2023'
    ],
    notes: 'Bank deposits = thing in action (debt claim). E-money tokens require EMI authorization. Stablecoin regulation pending (HMT consultation). Digital pound in research phase (not yet available). Tokenized deposits not yet permitted but under consideration.'
  },

  {
    assetType: 'intellectual-property',
    legalClassification: 'Intangible property rights (patents, trademarks, copyright, designs) - things in action requiring registration for patents/trademarks',
    governingLaw: [
      'Patents Act 1977',
      'Trade Marks Act 1994',
      'Copyright, Designs and Patents Act 1988',
      'Registered Designs Act 1949',
      'Intellectual Property Act 2014'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'Patent registration at UK IPO (patents)',
      'Trademark registration at UK IPO (trademarks)',
      'Creation and fixation (copyright - no registration required)',
      'Design registration at UK IPO (registered designs)',
      'Assignment agreements and licensing contracts'
    ],
    transferMechanism: [
      'Deed of assignment (writing required)',
      'Registration of assignment at UK IPO (patents, trademarks)',
      'Copyright assignment in writing and signed',
      'License agreements (exclusive or non-exclusive)',
      'Tokenization of IP rights via NFT or security token (economic interest only)'
    ],
    registrationRequired: true,
    registryDetails: {
      name: 'UK Intellectual Property Office (UK IPO) for patents, trademarks, designs. Copyright has no registry.',
      statutory: true,
      titleConferring: true,
      dltCompatible: 'unclear'
    },
    citations: [
      'patents-act-1977',
      'trademarks-act-1994',
      'copyright-act-1988',
      'ip-act-2014'
    ],
    notes: 'IP rights are things in action. Patents/trademarks require registration. Copyright arises automatically. Assignment must be in writing. Tokenization typically involves licensing or fractional ownership of economic interest, not direct tokenization of registered right.'
  },

  {
    assetType: 'carbon-credits',
    legalClassification: 'Intangible property rights - things in action. UK Emissions Trading Scheme (UK ETS) credits are statutory property rights.',
    governingLaw: [
      'Climate Change Act 2008',
      'Greenhouse Gas Emissions Trading Scheme Order 2020 (SI 2020/1265)',
      'UK ETS regulations',
      'Carbon offsetting standards (voluntary market)'
    ],
    propertyStatus: 'recognized',
    ownershipEvidence: [
      'UK ETS Registry account holdings',
      'Registry records showing allocation or transfer',
      'Voluntary carbon credit certificates (VCS, Gold Standard)',
      'Electronic records on carbon credit platforms'
    ],
    transferMechanism: [
      'Transfer via UK ETS Registry (compliance market)',
      'Voluntary market transfer via registry or platform',
      'Bilateral contract and registry update',
      'Potential tokenization of voluntary credits (not yet regulated)'
    ],
    registrationRequired: true,
    registryDetails: {
      name: 'UK Emissions Trading Registry (compliance market). Voluntary market registries (VCS, Gold Standard) not statutory.',
      statutory: true,
      titleConferring: true,
      dltCompatible: 'unclear'
    },
    citations: [
      'climate-change-act-2008',
      'uk-ets-order-2020'
    ],
    notes: 'UK ETS credits are statutory property. Voluntary carbon credits are contractual rights. Tokenization of voluntary credits possible but unregulated. Compliance market tightly controlled via UK ETS Registry.'
  }
];
