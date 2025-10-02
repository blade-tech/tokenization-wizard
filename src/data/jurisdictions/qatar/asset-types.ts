import { AssetType } from '../types';

export const qatarAssetTypes: AssetType[] = [
  {
    category: 'Securities',
    name: 'Shares in Qatari Companies',
    legalClassification: 'Movable property (onshore) / Property rights in tokens (QFC)',
    propertyStatus: 'Full property rights',
    transferMechanism: 'Book-entry via Edaa (Qatar CSD) for listed shares; private transfer for unlisted',
    registryRequired: true,
    details: [
      'Governed by Commercial Companies Law No. 11/2015 (as amended 2021)',
      'Listed shares held in dematerialized form at Edaa (Qatar Central Securities Depository)',
      'QFMA regulates securities trading on Qatar Stock Exchange',
      'Transfer requires updating Edaa registry for listed shares',
      'Private companies: transfer via shareholder register at MOCI',
      'Foreign ownership restrictions apply (sector-specific)',
      'QFC shares: governed by QFC Companies Regulations (separate regime)',
      'Tokenization: QFC Digital Assets Regulations permit "Investment Tokens" representing shares'
    ],
    tokenizationConsiderations: [
      'QFC route: Structure as Investment Token under Digital Asset Regulations 2024',
      'Onshore: No tokenization framework; would require QFC wrapper structure',
      'Shariah compliance required for Islamic finance shares',
      'Must maintain Edaa registry as authoritative record (dual registry risk)',
      'Smart contract governance must align with CCL shareholder rights',
      'Fractional shares: Limited support in Qatar - tokenization enables innovation'
    ],
    shariahCompliance: {
      required: 'For Islamic finance shares',
      considerations: [
        'Must avoid haram sectors (alcohol, gambling, conventional banking)',
        'Debt/equity ratio limits (typically <33% interest-bearing debt)',
        'Revenue purity screens (typically <5% from non-compliant sources)',
        'Shariah board approval required for Islamic company shares',
        'AAOIFI standards applicable for Islamic securities'
      ]
    },
    citations: ['Commercial Companies Law No. 11/2015', 'QFMA Law No. 8/2012', 'QFC Digital Asset Regulations 2024']
  },
  {
    category: 'Securities',
    name: 'Sukuk (Islamic Bonds)',
    legalClassification: 'Asset-backed securities representing undivided ownership in underlying assets',
    propertyStatus: 'Beneficial ownership of asset pool (not debt)',
    transferMechanism: 'Book-entry via Edaa; OTC for unlisted sukuk',
    registryRequired: true,
    details: [
      'Qatar is major global sukuk issuer (government and corporate)',
      'Governed by QFMA regulations and AAOIFI Shariah standards',
      'Common structures: Ijarah (lease), Murabaha (cost-plus), Musharaka (partnership), Mudarabah (profit-sharing)',
      'Asset-backed sukuk: Holders own undivided share in underlying assets (e.g., real estate, equipment)',
      'Asset-based sukuk: Certificate represents debt claim (less preferred by Shariah scholars)',
      'Transfer of sukuk transfers underlying asset ownership rights',
      'Mandatory Shariah board certification for issuance',
      'AAOIFI Standard 62 under review - may affect accounting treatment'
    ],
    tokenizationConsiderations: [
      'Highly suitable for tokenization - aligns with asset-backed nature',
      'QFC framework permits sukuk tokenization as Investment Tokens',
      'Smart contracts can enforce Shariah compliance (e.g., no interest calculations)',
      'Underlying asset must remain identifiable and Shariah-compliant',
      'Tokenization may improve liquidity in secondary markets',
      'Wakalah (agency) structure can govern token service provider role',
      'AAOIFI Standard 62 changes may affect tokenized sukuk accounting'
    ],
    shariahCompliance: {
      required: 'Absolutely mandatory',
      considerations: [
        'Underlying assets must be Shariah-compliant (no alcohol, pork, conventional interest)',
        'At least 51% tangible asset backing (AAOIFI standard)',
        'No Gharar (excessive uncertainty) in structure',
        'No Riba (interest) - profit from asset usufruct or sale',
        'Shariah board approval required pre-issuance',
        'Periodic Shariah audit of underlying assets',
        'Purchase undertaking (binding promise) must comply with Shariah principles'
      ]
    },
    citations: ['AAOIFI Shariah Standards', 'QFC Islamic Finance Rulebook (ISFI)', 'QFMA sukuk regulations']
  },
  {
    category: 'Real Estate',
    name: 'Freehold Real Estate',
    legalClassification: 'Immovable property with full ownership rights',
    propertyStatus: 'Property (thing in possession)',
    transferMechanism: 'Registration at Ministry of Justice Real Estate Department',
    registryRequired: true,
    details: [
      'Governed by Real Estate Registration Law No. 5/2024 (electronic registration)',
      'Non-Qataris: Law No. 16/2018 permits ownership in 25 designated areas',
      'Freehold areas for foreigners: The Pearl, Lusail, West Bay Lagoon, Al Khor Resort, etc.',
      'Transfer requires: Sale contract, registration at Real Estate Registration Committee',
      'Electronic registration system operational since June 2024',
      'Foreign ownership: Full freehold rights + inheritance rights in designated zones',
      'Residency permit granted for properties >QAR 730,000',
      'Properties >QAR 3.65M offer enhanced resident benefits'
    ],
    tokenizationConsiderations: [
      'Real Estate Registration Law 2024 enables electronic records - potential tokenization pathway',
      'QFC Digital Assets Framework permits tokenization of property rights',
      'Fractional ownership via tokens could democratize access',
      'Registry remains authoritative - token as beneficial interest or wrapper',
      'Foreign ownership restrictions limit tokenization to 25 designated areas',
      'Shariah-compliant structures: Musharaka (partnership) or Ijarah (lease)',
      'Smart contracts for rent distribution, exit rights, voting',
      'Regulatory approval needed: coordinate QFCRA (QFC) + Ministry of Justice'
    ],
    shariahCompliance: {
      required: 'For Islamic finance structures',
      considerations: [
        'Ownership of land permitted under Islamic law',
        'Rental income (Ijarah) is Shariah-compliant',
        'No interest-bearing financing - use Murabaha or Ijara structures',
        'Property cannot be used for haram purposes (e.g., alcohol sales)',
        'Musharaka (partnership) tokenization: Co-ownership with profit/loss sharing'
      ]
    },
    citations: ['Real Estate Registration Law No. 5/2024', 'Law No. 16/2018 on Non-Qatari Ownership']
  },
  {
    category: 'Real Estate',
    name: 'Usufruct Rights (Leasehold - 99 years)',
    legalClassification: 'Property right (limited in duration)',
    propertyStatus: 'Limited property right - use and benefit without ownership',
    transferMechanism: 'Registration at Ministry of Justice',
    registryRequired: true,
    details: [
      'Law No. 16/2018 permits 99-year usufruct in 16 additional areas beyond freehold zones',
      'Usufruct areas include: Msheireb, Fereej Abdulaziz, Doha Al Jadeed, etc.',
      'Transferable and inheritable (within 99-year term)',
      'Registration required at Ministry of Justice',
      'Renewal at expiry subject to landowner consent',
      'Distinguishes from freehold: No permanent title, reversion at term end'
    ],
    tokenizationConsiderations: [
      'Tokenize usufruct right itself (time-limited property right)',
      'Smart contracts enforce 99-year term and reversion mechanics',
      'Fractional usufruct tokens enable shared vacation properties, etc.',
      'Registry coordination essential - MoJ must recognize token transfers',
      'Automatic expiry via smart contract at term end',
      'Shariah compliance: Usufruct is recognized property right in Islamic law'
    ],
    shariahCompliance: {
      required: 'For Islamic structures',
      considerations: [
        'Usufruct (Manfa\'ah) is valid property right under Shariah',
        'Ijarah (lease) is foundational Shariah contract - highly compatible',
        'Token represents beneficial use right, not prohibited speculation',
        'Time-limited nature aligns with Islamic lease principles'
      ]
    },
    citations: ['Law No. 16/2018', 'Civil Code No. 22/2004 (usufruct provisions)']
  },
  {
    category: 'Financial',
    name: 'Bank Deposits',
    legalClassification: 'Contractual claim (thing in action)',
    propertyStatus: 'Chose in action - contractual right to repayment',
    transferMechanism: 'Assignment of claim (requires bank consent)',
    registryRequired: false,
    details: [
      'Governed by QCB Law No. 13/2012 and Banking Regulations',
      'Conventional deposits: Loan to bank (ownership transfers, repayment claim)',
      'Islamic deposits: Wakalah (agency) or Mudarabah (profit-sharing) - depositor retains ownership',
      'Deposit protection: No formal deposit insurance scheme in Qatar',
      'QCB supervises bank solvency and liquidity',
      'Transfer requires novation or assignment (not freely transferable)'
    ],
    tokenizationConsiderations: [
      'Conventional deposits: Tokenize repayment claim (chose in action)',
      'Islamic deposits: Tokenize underlying asset pool ownership (Mudarabah)',
      'QFC framework may permit deposit-backed stablecoins (under review)',
      'Settlement finality critical - DLT integration with QPS (Qatar Payment System)',
      'Regulatory approval: QCB for onshore banks, QFCRA for QFC banks',
      'Shariah compliance essential for Islamic deposit tokens'
    ],
    shariahCompliance: {
      required: 'For Islamic banks',
      considerations: [
        'Conventional interest-based deposits prohibited',
        'Wakalah (agency): Bank acts as agent, depositor owns funds',
        'Mudarabah (profit-sharing): Bank is entrepreneur, depositor is capital provider',
        'Tokenization must preserve underlying Shariah structure',
        'No guaranteed returns (only profit-sharing or agency fee)'
      ]
    },
    citations: ['QCB Law No. 13/2012', 'QFC Banking Prudential Rules']
  },
  {
    category: 'Financial',
    name: 'Fund Units (Investment Funds)',
    legalClassification: 'Beneficial interest in collective investment scheme',
    propertyStatus: 'Equitable ownership of proportionate fund assets',
    transferMechanism: 'Registry update at fund administrator or QFMA',
    registryRequired: true,
    details: [
      'Onshore: Regulated by QFMA under Law No. 8/2012',
      'QFC: Governed by QFC Collective Investment Schemes Rules (COLL)',
      'Types: Mutual funds, investment companies, real estate investment funds (REITs)',
      'Unit holder register maintained by fund or administrator',
      'Transfer via redemption/subscription or secondary market (if listed)',
      'Islamic funds: Structured as Musharaka or Mudarabah partnerships'
    ],
    tokenizationConsiderations: [
      'Fund units ideal tokenization candidate - already represents fractional ownership',
      'QFC Digital Asset Regulations explicitly permit fund unit tokens',
      'Smart contracts for automated redemptions, distributions, fee calculations',
      'NAV calculation and distribution automation via oracles',
      'Shariah-compliant fund tokens: Enforce halal asset screens on-chain',
      'Regulatory approval: QFMA (onshore) or QFCRA (QFC) required'
    ],
    shariahCompliance: {
      required: 'For Islamic funds',
      considerations: [
        'Underlying assets must be Shariah-compliant',
        'Musharaka structure: Co-ownership with profit/loss sharing',
        'Mudarabah structure: Fund manager as entrepreneur, investors as capital providers',
        'Shariah board oversight of asset allocation',
        'AAOIFI standards for Islamic funds applicable',
        'Purification of non-compliant income (if screening approach used)'
      ]
    },
    citations: ['QFMA regulations', 'QFC Collective Investment Schemes Rules (COLL)']
  },
  {
    category: 'Commodities',
    name: 'Physical Commodities',
    legalClassification: 'Tangible movable property',
    propertyStatus: 'Property (thing in possession)',
    transferMechanism: 'Physical delivery or warehouse receipt',
    registryRequired: false,
    details: [
      'Governed by Civil Code No. 22/2004 (sales and possession)',
      'LNG: Qatar is world\'s 3rd largest exporter - commodity contracts via QatarEnergy',
      'Warehouse receipts: Transferable documents of title (if properly issued)',
      'No central commodities exchange in Qatar (OTC markets)',
      'GCC common market: Cross-border commodity flows under GCC customs union'
    ],
    tokenizationConsiderations: [
      'Tokenize warehouse receipts as digital bearer instruments',
      'Physical delivery linked to token redemption via smart contract',
      'Shariah compliance: Commodity Murabaha (cost-plus sale) widely used',
      'Tawarruq (commodity reverse sale) for liquidity - tokenization could streamline',
      'QFC framework permits tokenization of commodity ownership rights',
      'Integration with IoT for warehouse inventory verification',
      'Regulatory clarity needed: MOCI for trade, QFCRA if tokenized in QFC'
    ],
    shariahCompliance: {
      required: 'For Islamic finance commodity structures',
      considerations: [
        'Commodity must exist and be deliverable (no fictitious assets)',
        'Murabaha (cost-plus): Commodity sale at markup (no interest)',
        'Tawarruq: Reverse commodity sale for liquidity needs',
        'Salam (forward sale): Prepayment for future commodity delivery (permissible)',
        'No short selling or pure speculation (Maysir)',
        'Physical possession or constructive possession required for sale'
      ]
    },
    citations: ['Civil Code No. 22/2004', 'AAOIFI standards on commodity Murabaha']
  },
  {
    category: 'Digital Rights',
    name: 'Intellectual Property and Digital Assets',
    legalClassification: 'Intangible property rights',
    propertyStatus: 'Property rights (incorporeal)',
    transferMechanism: 'Assignment agreements; registry for some IP types',
    registryRequired: 'For patents, trademarks (at MOCI)',
    details: [
      'IP governed by various laws: Patent Law, Trademark Law, Copyright Law',
      'Registration at MOCI for trademarks and patents',
      'Copyright: Automatic upon creation (Berne Convention member)',
      'Digital content licensing: Governed by contract law and E-Commerce Law 2010',
      'QFC recognizes smart contracts under Digital Assets Regulations 2024',
      'No specific "digital asset" legal status outside QFC framework'
    ],
    tokenizationConsiderations: [
      'QFC Digital Assets Regulations permit tokenization of IP rights',
      'NFTs for copyright: Smart contracts manage licensing and royalties',
      'Fractional IP ownership via tokens (e.g., patent pool tokens)',
      'On-chain royalty distribution for music, art, software',
      'Shariah considerations: IP ownership recognized in Islamic law',
      'Regulatory approval: QFCRA for QFC; unclear for onshore IP tokens'
    ],
    shariahCompliance: {
      required: 'For Islamic finance structures',
      considerations: [
        'Modern Shariah scholars recognize IP as valid property (Mal Mutaqawwam)',
        'Licensing royalties permissible (Ijarah of usufruct)',
        'Content must be halal (no pornography, gambling, etc.)',
        'AAOIFI has not issued specific standard on IP - jurisprudential debate',
        'Token structure should avoid Gharar (excessive uncertainty)'
      ]
    },
    citations: ['Patent Law', 'Trademark Law', 'E-Commerce Law No. 16/2010', 'QFC Digital Asset Regulations 2024']
  },
  {
    category: 'Hybrid',
    name: 'Investment Tokens (QFC-Specific)',
    legalClassification: 'Digital representation of specified investment products',
    propertyStatus: 'Property rights in tokens (statutory recognition under QFC law)',
    transferMechanism: 'DLT transfer via approved token service providers',
    registryRequired: true,
    details: [
      'Defined under QFC Digital Asset Regulations 2024 (Article 9)',
      'Permitted Tokens: Rights to shares, debt, fund units, derivatives, deposits, insurance, options, futures, contracts for difference',
      'Excluded Tokens: Cryptocurrencies (Bitcoin, Ether), stablecoins, privacy coins',
      'Legal recognition: Tokens are property under QFC law (Art. 11)',
      'Transfer of token transfers underlying property rights (Art. 14)',
      'Custody: Licensed Token Service Providers under QFCRA supervision',
      'Smart contracts legally enforceable (Art. 36)',
      'Only available within QFC jurisdiction (not onshore Qatar)'
    ],
    tokenizationConsiderations: [
      'QFC provides comprehensive legal framework - reduce legal uncertainty',
      'Tokenization service providers require QFCRA authorization',
      'Asset-backed tokens only (no pure crypto)',
      'Must comply with Investment Token Rules 2024 (TOKN)',
      'AML/CFT compliance mandatory (QFC AML/CFTR Rules)',
      'Cross-border: QFC tokens may face restrictions in onshore Qatar',
      'Shariah compliance optional but recommended for Islamic investor access'
    ],
    shariahCompliance: {
      required: 'Not mandatory but advantageous for market access',
      considerations: [
        'QFC Islamic Finance Rulebook (ISFI) applies if Shariah-compliant token',
        'Underlying asset must be halal',
        'Structure should avoid Riba, Gharar, Maysir',
        'Shariah board certification opens access to Islamic investors',
        'AAOIFI standards should be followed for Islamic investment tokens'
      ]
    },
    citations: ['QFC Digital Asset Regulations 2024', 'Investment Token Rules 2024 (TOKN)', 'Token Service Provider Guidelines']
  }
];
