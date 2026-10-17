export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  subServices: {
    title: string;
    description: string;
  }[];
  audience: string[];
  deliverables: string[];
}

export const COMPANY_INFO = {
  name: "Lead Property Valuation and Asset Management Consultancy PLC",
  shortName: "Lead Consultancy",
  legalName: "Lead Property Valuation and Asset Management Consultancy PLC",
  established: "July 2024",
  headquarters: "Addis Ababa, Ethiopia",
  address: "Lancha Area, Emmanuel Reformed Apostolic Church Building, House No. 942, 3rd Floor, Room 003, Addis Ababa, Ethiopia",
  phonePrimary: "+251 0913006754",
  phoneSecondary: "+251 0991738621",
  phonePrimaryRaw: "+251913006754",
  phoneSecondaryRaw: "+251991738621",
  whatsappNumber: "+251913006754", // Subject to owner confirmation
  whatsappUrl: "https://wa.me/251913006754",
  email: "leadvaluation3@gmail.com",
  telegramUrl: "https://t.me/leadvaluation",
  facebookUrl: "https://www.facebook.com/profile.leadpvet?id=61572300734234&mibextid=ZbWKwL",
  instagramUrl: "https://www.instagram.com/leadvaluation3?igsh=ejR3cXY4dmdqanF6",
  youtubeUrl: "https://youtube.com/@leadpropertyvaluationconsultan?si=XkxtCvRURd2e4WV3",
  tiktokUrl: "https://www.tiktok.com/@lead.property.valu?_t=ZM-8tTBmTQcx7N&_r=1",
  generalManager: "Engineer Hlina Legesse", // Note: also spelled Hilina Legesse on live site
  websiteUrl: "https://www.leadpvet.com",
  proposedMission: "To provide professional valuation and asset advisory services that support informed decisions through technical expertise, integrity, and reliable analysis.",
  proposedVision: "To be a trusted provider of property valuation and asset advisory services in Ethiopia and beyond."
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "real-estate",
    slug: "real-estate-and-land-valuation",
    title: "Real Estate and Land Valuation",
    shortDesc: "Independent valuation of residential, commercial, industrial, agricultural, and special-purpose real estate assets across Ethiopia.",
    detailedDesc: "Our real estate and land valuation practice delivers rigorous, evidence-based asset appraisals in full alignment with international standards and Ethiopian property regulations. We provide institutional investors, developers, lenders, and individual property owners with accurate assessments for financing, development feasibility, transaction support, and asset accounting.",
    iconName: "Building2",
    subServices: [
      {
        title: "Residential Property Valuation",
        description: "Comprehensive valuation of single-family residences, multi-family apartment complexes, villas, and planned residential subdivisions for acquisition, mortgage security, and asset planning."
      },
      {
        title: "Commercial Property Valuation",
        description: "Financial assessment of office towers, retail shopping centers, mixed-use commercial hubs, and hospitality properties based on income capitalisation and comparative market data."
      },
      {
        title: "Industrial Property Valuation",
        description: "Technical appraisals of manufacturing facilities, logistics warehouses, cold storage complexes, and industrial park installations."
      },
      {
        title: "Agricultural Land and Farm Valuation",
        description: "Valuation of commercial agricultural holdings, crop land, horticulture investments, and agro-processing facilities."
      },
      {
        title: "Market Rent Assessment",
        description: "Impartial determination of fair market rent for commercial leases, institutional leases, renewal negotiations, and rent dispute resolutions."
      },
      {
        title: "Infrastructure and Public Asset Valuation",
        description: "Specialized appraisal of civil infrastructure, transportation facilities, utilities, and municipal real property."
      },
      {
        title: "Special-Purpose Property Valuation",
        description: "Tailored methodologies for complex properties including airports, sports arenas, hospitals, educational institutions, and energy facilities."
      },
      {
        title: "Heritage and Cultural Asset Valuation",
        description: "Specialized assessment of historic buildings, cultural landmarks, and conservation properties respecting architectural significance and adaptive reuse potential."
      }
    ],
    audience: [
      "Commercial banks and mortgage lenders",
      "Real estate investment funds and private developers",
      "Corporate property owners managing asset portfolios",
      "Public sector and municipal authorities"
    ],
    deliverables: [
      "Formal Comprehensive Valuation Reports",
      "Physical Site Inspection & Survey Documentation",
      "Comparable Market Sales & Rental Benchmarks",
      "Executive Summary for Credit and Board Review"
    ]
  },
  {
    id: "business-financial",
    slug: "business-and-financial-valuation",
    title: "Business and Financial Valuation",
    shortDesc: "Authoritative financial modeling, enterprise valuation, equity assessments, and impairment testing for commercial enterprises.",
    detailedDesc: "Lead Consultancy provides robust financial and enterprise valuation services to help business owners, boards of directors, private equity sponsors, and legal teams understand the true economic worth of commercial operations and complex financial instruments.",
    iconName: "TrendingUp",
    subServices: [
      {
        title: "Business and Enterprise Valuation",
        description: "Determination of Enterprise Value (EV) and Equity Value using Discounted Cash Flow (DCF), guideline public company multiples, and precedent transaction methodologies."
      },
      {
        title: "Goodwill Impairment Testing",
        description: "Quantitative assessments under IFRS standards to test carrying values of goodwill and intangible assets against recoverable amounts."
      },
      {
        title: "Investment Valuation",
        description: "Fair value assessments for private equity holdings, corporate debt instruments, preferred shares, and structured investments."
      },
      {
        title: "Going Concern Valuation",
        description: "Analytical evaluation of operational viability and asset earning power under ongoing operational conditions."
      },
      {
        title: "Joint Venture Valuation",
        description: "Objective valuation of partnership interests, equity contributions, and exit valuations for consortium members."
      },
      {
        title: "Portfolio Valuation",
        description: "Periodic independent fair value reporting for holding companies, private equity funds, and institutional investment portfolios."
      }
    ],
    audience: [
      "Shareholders and executive leadership",
      "Private equity investors and venture capital firms",
      "Corporate finance and transaction advisors",
      "Statutory auditors and regulatory authorities"
    ],
    deliverables: [
      "Independent Business Valuation Opinion",
      "Financial Modeling & Sensitivity Forecasts",
      "DCF and Comparable Multiples Working Papers",
      "Board-Ready Valuation Presentation"
    ]
  },
  {
    id: "asset-equipment",
    slug: "asset-and-equipment-valuation",
    title: "Asset and Equipment Valuation",
    shortDesc: "Technical inspection, inventory verification, and valuation of plant, machinery, heavy equipment, and commercial fleets.",
    detailedDesc: "Our engineering and technical valuation specialists inspect, categorize, and determine the market value, replacement value, and liquidation value of industrial machinery, specialized processing equipment, and transport assets across Ethiopia.",
    iconName: "Cog",
    subServices: [
      {
        title: "Plant, Machinery, and Equipment Valuation",
        description: "On-site physical inspection and financial valuation of heavy machinery, manufacturing lines, construction equipment, and specialized plant installations."
      },
      {
        title: "Inventory and Asset Verification",
        description: "Independent audit and physical stock-taking of warehouse inventory, raw materials, spare parts, and fixed corporate assets."
      },
      {
        title: "Loss Assessment and Depreciation",
        description: "Scientific calculation of physical deterioration, functional obsolescence, economic obsolescence, and insurance loss claims."
      },
      {
        title: "Replacement and Maintenance Analysis",
        description: "Capital expenditure planning, remaining useful life estimates, and replacement cost modeling for asset lifecycle management."
      }
    ],
    audience: [
      "Industrial manufacturers and factory operators",
      "Equipment leasing firms and commercial lenders",
      "Insurance underwriters and risk adjusters",
      "Asset liquidation managers and court-appointed receivers"
    ],
    deliverables: [
      "Comprehensive Asset Register & Condition Logs",
      "Fair Market & Orderly Liquidation Value Schedules",
      "Depreciation and Useful Life Analysis",
      "Photographic Verification & Serial Number Audit"
    ]
  },
  {
    id: "legal-tax",
    slug: "legal-tax-related-valuation",
    title: "Legal and Tax-Related Valuation",
    shortDesc: "Expert witness support, tax compliance appraisals, probate valuations, and statutory compensation assessments.",
    detailedDesc: "When property or asset values become the focal point of legal proceedings, tax audits, inheritance partitions, or government expropriation, Lead Consultancy provides defensible, technically unimpeachable valuation documentation built to withstand court and regulatory scrutiny.",
    iconName: "Scale",
    subServices: [
      {
        title: "Taxation Valuation",
        description: "Defensible property and asset valuations for municipal property tax assessments, transfer taxes, and corporate asset disposals."
      },
      {
        title: "Capital Gain and Capital Increase Valuation",
        description: "Independent valuation to establish baseline asset values for capital gains calculations and corporate capital increment filings."
      },
      {
        title: "Litigation Support and Expert Witness Valuation",
        description: "Independent analytical testimony, deposition support, and formal expert reports for commercial disputes and arbitration."
      },
      {
        title: "Expropriation and Compensation Valuation",
        description: "Assessment of fair compensation for landowners and commercial operators subject to public infrastructure land acquisition and right-of-way taking."
      },
      {
        title: "Estate and Probate Valuation",
        description: "Impartial asset valuation for probate administration, family inheritance distribution, and estate settlement."
      }
    ],
    audience: [
      "Corporate legal counsel and litigation attorneys",
      "Tax advisors and corporate accounting departments",
      "Property owners facing expropriation or compulsory acquisition",
      "Estate executors and probate trustees"
    ],
    deliverables: [
      "Court-Admissible Expert Valuation Reports",
      "Statutory Compensation Assessment Schedules",
      "Supporting Evidentiary Documentation & Methodology Notes",
      "Expert Witness Testimony Support"
    ]
  },
  {
    id: "financial-reporting",
    slug: "financial-reporting-and-regulatory-compliance",
    title: "Financial Reporting and Regulatory Compliance",
    shortDesc: "IFRS-compliant fair value measurements, bank collateral audits, and balance-sheet asset valuations for audit readiness.",
    detailedDesc: "Under International Financial Reporting Standards (IFRS) and National Bank of Ethiopia guidelines, accurate asset measurement is essential. We provide external auditors, chief financial officers, and banking institutions with transparent, verifiable valuation reports designed for seamless statutory audit review.",
    iconName: "FileCheck",
    subServices: [
      {
        title: "IFRS-Based Valuation",
        description: "Full compliance with IFRS 13 (Fair Value Measurement), IAS 16 (Property, Plant and Equipment), and IAS 40 (Investment Property)."
      },
      {
        title: "Fair Value Measurement for Financial Reporting",
        description: "Establishment of Level 1, 2, and 3 fair value inputs with detailed discount rate and yield documentation for financial disclosures."
      },
      {
        title: "Stock Split Valuation",
        description: "Financial assessment of equity adjustments and capital restructuring to ensure equitable shareholder value distribution."
      },
      {
        title: "Dividend Valuation",
        description: "Asset distribution valuations and solvency evaluations to support dividend issuance and corporate surplus distributions."
      },
      {
        title: "Bank and Insurance Asset Valuation",
        description: "Rigorous valuation of loan collateral, real estate held for debt recovery, and insurance company statutory reserve assets."
      }
    ],
    audience: [
      "Chief Financial Officers and finance controllers",
      "External statutory audit and advisory teams",
      "Commercial banks and microfinance institutions",
      "Insurance and reinsurance firms"
    ],
    deliverables: [
      "IFRS 13 Compliant Audit-Ready Valuation Documentation",
      "Discount Rate and Terminal Value Calculations",
      "Auditor Query Support & Working Paper Access",
      "Executive Summary for Financial Statements"
    ]
  },
  {
    id: "m-and-a",
    slug: "mergers-acquisitions-and-corporate-transactions",
    title: "Mergers, Acquisitions, and Corporate Transactions",
    shortDesc: "Strategic transaction advisory, M&A valuation, goodwill transfer pricing, and distressed asset evaluation.",
    detailedDesc: "In corporate acquisitions, joint ventures, and organizational reorganizations, accurate valuation forms the bedrock of deal success. Lead Consultancy advises buyers, sellers, and corporate restructuring teams through disciplined pre-deal and post-deal asset valuations.",
    iconName: "Briefcase",
    subServices: [
      {
        title: "Mergers and Acquisitions Valuation",
        description: "Pre-acquisition target valuation, synergy assessment, and post-merger Purchase Price Allocation (PPA)."
      },
      {
        title: "Restructuring Valuation",
        description: "Asset and enterprise valuation during corporate reorganization, spin-offs, management buyouts, and division carve-outs."
      },
      {
        title: "Sale and Purchase of Goodwill",
        description: "Defensible quantification of commercial reputation, customer relationships, and brand goodwill in commercial transfers."
      },
      {
        title: "Capital Market Valuation",
        description: "Independent asset appraisals to support public offerings, private placements, and institutional equity issuances."
      },
      {
        title: "Foreclosure and Distressed Asset Valuation",
        description: "Rapid, objective valuation of non-performing assets, distressed real estate, and bankruptcy liquidations."
      }
    ],
    audience: [
      "Corporate development teams and transaction executives",
      "M&A legal advisors and investment bankers",
      "Insolvency practitioners and court administrators",
      "Institutional investors entering the Ethiopian market"
    ],
    deliverables: [
      "Comprehensive Transaction Valuation Dossier",
      "Purchase Price Allocation (PPA) Documentation",
      "Distressed Asset Liquidation Forecasts",
      "Deal Advisory & Negotiation Support Papers"
    ]
  }
];

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "Unwavering commitment to ethical practices, transparency, and accountability in every interaction. We build trust through honesty, objective rigor, and decisions strictly aligned with clients' best interests.",
    icon: "ShieldCheck"
  },
  {
    title: "Innovation",
    description: "Pioneering solutions powered by data-driven insights, modern appraisal technology, and adaptive methodologies to anticipate changing market dynamics and deliver future-ready outcomes.",
    icon: "Lightbulb"
  },
  {
    title: "Excellence",
    description: "Relentless pursuit of the highest standards in service quality, technical precision, and client satisfaction. Every engagement reflects our dedication to mastery, professional standards, and measurable impact.",
    icon: "Award"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Multidisciplinary Expertise",
    description: "Strategic integration of real property valuation, engineering knowledge, and economic analysis powered by certified specialists.",
    icon: "Layers"
  },
  {
    title: "Uncompromising Integrity",
    description: "Ethical rigor, transparency, and strict adherence to professional standards that foster enduring institutional trust.",
    icon: "Shield"
  },
  {
    title: "Comprehensive Advisory",
    description: "End-to-end solutions spanning real estate, business enterprises, industrial equipment, legal disputes, and regulatory compliance.",
    icon: "Compass"
  },
  {
    title: "Practical Decision Impact",
    description: "Defensible, evidence-backed valuation reports designed to support high-stakes investment decisions, loan approvals, and risk mitigation.",
    icon: "BarChart3"
  }
];

export const TARGET_AUDIENCES = [
  {
    title: "Property Owners & Investors",
    description: "Individual and corporate property holders seeking clear market valuations for sales, acquisitions, leases, and portfolio management.",
    icon: "Home"
  },
  {
    title: "Commercial & Industrial Businesses",
    description: "Manufacturing plants, transport companies, and commercial operations requiring asset registers, equipment valuations, and depreciation studies.",
    icon: "Factory"
  },
  {
    title: "Financial Institutions",
    description: "Commercial banks, insurance providers, and microfinance institutions requiring independent collateral valuations and reserve audits.",
    icon: "Landmark"
  },
  {
    title: "Corporate Organizations",
    description: "Enterprises needing IFRS-compliant fair value financial reporting, asset impairment reviews, and corporate restructuring support.",
    icon: "Building"
  },
  {
    title: "Government & Public Institutions",
    description: "Public agencies requiring right-of-way expropriation compensation calculations, public asset registers, and municipal valuations.",
    icon: "Vote"
  },
  {
    title: "Transaction & Legal Teams",
    description: "Attorneys, trustees, and business owners requiring litigation support, estate probate valuations, and M&A pricing analyses.",
    icon: "Briefcase"
  }
];

export const ENGAGEMENT_PROCESS = [
  {
    step: "01",
    title: "Initial Enquiry & Consultation",
    description: "Prospective clients contact our advisory team via phone, WhatsApp, email, or online consultation form to outline their valuation needs."
  },
  {
    step: "02",
    title: "Requirements & Scope Definition",
    description: "We review the intended purpose of the valuation (e.g., mortgage, tax, financial reporting, sale) and define terms of engagement, timeline, and fee quote."
  },
  {
    step: "03",
    title: "Information Gathering & Site Inspection",
    description: "Our certified valuers conduct rigorous physical site surveys, verify asset title documents, inspect equipment condition, and collect market data."
  },
  {
    step: "04",
    title: "Valuation, Modeling & Peer Review",
    description: "Using standard methodologies (Cost, Income, and Sales Comparison), our multidisciplinary analysts formulate defensible value conclusions."
  },
  {
    step: "05",
    title: "Reporting & Executive Delivery",
    description: "A formal, audit-ready valuation report is prepared, signed by certified valuers, and delivered with full post-delivery advisory briefing."
  }
];

export const FAQS = [
  {
    question: "What is property valuation and why is it necessary?",
    answer: "Property valuation is the professional assessment of the economic worth of real estate, buildings, or land at a specific point in time. It is essential for securing bank financing, establishing accurate purchase or selling prices, resolving legal and estate matters, computing property taxes, and preparing IFRS-compliant financial statements."
  },
  {
    question: "What types of property and assets does Lead Consultancy assess?",
    answer: "Lead Consultancy assesses residential villas and apartments, commercial office buildings, industrial warehouses and factories, agricultural farmland, specialized infrastructure (e.g., hospitality, energy, and transportation assets), plant and machinery, business enterprises, and intangible assets."
  },
  {
    question: "What documents and information are needed for a valuation?",
    answer: "Requirements vary by asset type. For real estate, typically needed items include ownership title deeds (LHO/Lease certificate), architectural site plans, recent tax receipts, and building permits. For machinery and businesses, equipment registers, purchase invoices, and recent financial statements are requested. Our team provides an exact checklist during initial consultation."
  },
  {
    question: "Does Lead Consultancy handle business and equipment valuation?",
    answer: "Yes. In addition to real estate, our multidisciplinary team includes financial analysts and engineers specialized in enterprise valuation, goodwill impairment testing, plant and equipment valuation, inventory verification, and investment portfolio appraisals."
  },
  {
    question: "How can I request a consultation or fee quotation?",
    answer: "You can request a consultation directly through our website contact form, call us at +251 0913006754 or +251 0991738621, message our verified WhatsApp number, or email leadvaluation3@gmail.com. We respond promptly to discuss your specific requirements."
  },
  {
    question: "How are professional service fees determined?",
    answer: "Service fees are determined based on the scope, complexity, asset location, documentation requirements, and purpose of the valuation assignment. We provide transparent, written fee quotations following the initial scope discussion before any engagement begins."
  },
  {
    question: "How long does a valuation assignment take?",
    answer: "Turnaround times depend on the size and complexity of the property or portfolio, site accessibility, and the completeness of client-provided documentation. Standard residential or single-asset commercial assessments typically take a few working days, while complex industrial plants or enterprise valuations are scheduled according to agreed timelines."
  },
  {
    question: "Does the company provide valuation for financial reporting (IFRS)?",
    answer: "Yes. Lead Consultancy provides valuation reports strictly aligned with International Financial Reporting Standards (IFRS 13, IAS 16, and IAS 40), providing clear methodology and auditable working papers for corporate financial controllers and external auditors."
  },
  {
    question: "Where is Lead Consultancy located in Addis Ababa?",
    answer: "Our office is located in the Lancha Area of Addis Ababa, Ethiopia, in the Emmanuel Reformed Apostolic Church Building, House No. 942, 3rd Floor, Room 003."
  }
];

export const INDUSTRIES = [
  {
    slug: "real-estate-property",
    title: "Real Estate & Property Development",
    description: "Supporting private developers, property syndicates, and real estate investment trusts with land acquisition valuations, project feasibility, and rental yield assessments.",
    icon: "Building"
  },
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial Enterprises",
    description: "Assisting manufacturers, logistics providers, and corporate operators with plant and equipment appraisals, asset registers, and corporate asset disposals.",
    icon: "Factory"
  },
  {
    slug: "banking-financial-services",
    title: "Banking & Financial Services",
    description: "Partnering with commercial banks, microfinance institutions, and insurers for independent mortgage security valuation, collateral reviews, and balance-sheet asset accounting.",
    icon: "Landmark"
  },
  {
    slug: "investment-corporate-transactions",
    title: "Investment & Corporate Transactions",
    description: "Guiding venture investors, private equity funds, and transaction advisory teams with business enterprise valuations, goodwill calculations, and M&A pricing.",
    icon: "TrendingUp"
  },
  {
    slug: "agriculture-land",
    title: "Agriculture & Agro-Industrial Land",
    description: "Appraising commercial farms, horticulture enterprises, livestock facilities, and agro-processing investments across Ethiopia's diverse regions.",
    icon: "Tractor"
  },
  {
    slug: "public-sector-infrastructure",
    title: "Public Sector & Infrastructure",
    description: "Providing municipal agencies and state infrastructure projects with compensation valuations, right-of-way expropriation assessments, and public asset records.",
    icon: "Globe"
  }
];

export const INSIGHTS = [
  {
    slug: "ifrs-13-fair-value-measurement-ethiopia",
    title: "Navigating IFRS 13 Fair Value Measurement in the Ethiopian Corporate Environment",
    date: "October 2026",
    category: "Financial Reporting",
    summary: "A practical guide for Ethiopian CFOs and finance leaders on applying international valuation standards, discount rates, and audit documentation for balance sheet compliance.",
    readTime: "6 min read"
  },
  {
    slug: "commercial-property-valuation-benchmarks-addis-ababa",
    title: "Key Valuation Factors for Commercial Office and Mixed-Use Assets in Addis Ababa",
    date: "September 2026",
    category: "Real Estate Economics",
    summary: "Examining location dynamics, infrastructure access, replacement costs, and lease structures influencing commercial property worth in the capital city.",
    readTime: "8 min read"
  },
  {
    slug: "plant-machinery-asset-verification-best-practices",
    title: "Best Practices in Plant, Machinery, and Industrial Equipment Verification",
    date: "August 2026",
    category: "Asset Management",
    summary: "How rigorous physical audits, serial number matching, and depreciation modeling protect manufacturing firms against asset leakage and balance-sheet discrepancies.",
    readTime: "5 min read"
  }
];
