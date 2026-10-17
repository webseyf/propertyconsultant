import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Compass, 
  CheckCircle, 
  FileText, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  MessageCircle
} from 'lucide-react';
import { ENGAGEMENT_PROCESS, COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Valuation Process & Workflow | Lead Consultancy Addis Ababa',
  description: 'Understand the five-phase valuation and advisory framework utilized by Lead Property Valuation and Asset Management Consultancy PLC in Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/process'
  }
};

const detailedSteps = [
  {
    step: "01",
    phase: "Phase 1: Initial Enquiry & Preliminary Consultation",
    objective: "Establish direct communication, understand client objectives, and conduct initial feasibility assessment.",
    actions: [
      "Receipt of valuation inquiry via online consultation form, phone, WhatsApp, or direct office meeting.",
      "Identification of the asset classification (real property, plant machinery, enterprise, or mixed portfolio).",
      "Clarification of the intended valuation purpose (e.g., mortgage financing, statutory accounting/IFRS, dispute, or transaction pricing).",
      "Preliminary review of asset location, jurisdiction in Ethiopia, and timeline expectations."
    ]
  },
  {
    step: "02",
    phase: "Phase 2: Requirements, Scope Definition & Engagement Terms",
    objective: "Formulate rigorous Terms of Reference (TOR) and establish contractual clarity.",
    actions: [
      "Definition of the applicable basis of value (Fair Market Value, Liquidation Value, Investment Value, or Replacement Cost).",
      "Specification of the appropriate valuation standards (such as IFRS 13 / IAS 16 or local statutory directives).",
      "Provision of transparent, scope-based professional fee quotation with explicit timelines.",
      "Mutual execution of the formal Valuation Advisory Engagement Agreement."
    ]
  },
  {
    step: "03",
    phase: "Phase 3: Information Gathering, Site Survey & Physical Inspection",
    objective: "Collect primary physical evidence, inspect asset condition, and verify title documentation.",
    actions: [
      "Rigorous physical on-site survey and dimension verification by certified valuers and engineers.",
      "Comprehensive photographic logging, boundary verification, and structural/mechanical condition inspection.",
      "Collection and audit of ownership title deeds (LHO/Leasehold), building permits, architectural drawings, or equipment serials.",
      "Gathering of primary market transaction comps, localized rental rates, and replacement construction cost indices in Addis Ababa."
    ]
  },
  {
    step: "04",
    phase: "Phase 4: Quantitative Valuation, Financial Modeling & Peer Review",
    objective: "Apply standardized valuation methodologies and subject calculations to multidisciplinary peer review.",
    actions: [
      "Application of primary methodologies: Sales Comparison Approach, Depreciated Replacement Cost (DRC), and Income Capitalisation / DCF.",
      "Engineering analysis of physical deterioration, functional obsolescence, and economic depreciation factors.",
      "Formulation of financial sensitivity models and capitalisation rate benchmarking.",
      "Internal peer review by Lead Consultancy's senior valuation board and engineering leadership."
    ]
  },
  {
    step: "05",
    phase: "Phase 5: Comprehensive Reporting & Executive Briefing",
    objective: "Deliver defensible, audit-ready valuation documentation and provide post-delivery advisory support.",
    actions: [
      "Preparation of formal, high-resolution valuation report incorporating survey sheets, photos, and calculation schedules.",
      "Official certification and stamping by licensed valuation practitioners and Lead Consultancy General Management.",
      "Executive presentation of findings to company directors, audit committees, or institutional credit officers.",
      "Ongoing support for auditor inquiries, banking credit reviews, or legal proceedings."
    ]
  }
];

export default function ProcessPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Our Process' }]} />
          <h1>Our Valuation Process & Workflow</h1>
          <p className="page-hero-desc">
            A disciplined, five-stage engagement framework ensuring technical rigor, thorough physical verification, defensible financial modeling, and audit-ready reporting.
          </p>
        </div>
      </section>

      {/* Main Process Breakdown */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Compass size={14} />
              <span>Engagement Framework</span>
            </div>
            <h2 className="section-title">
              How We Execute Valuation Assignments
            </h2>
            <p className="section-subtitle">
              Every asset appraisal follows a structured, transparent lifecycle designed to guarantee institutional credibility and full regulatory defensibility.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', maxWidth: '960px', margin: '0 auto' }}>
            {detailedSteps.map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent-gold)', backgroundColor: 'var(--color-accent-gold-light)', width: '56px', height: '56px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.step}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', margin: 0 }}>
                      {item.phase}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: '4px 0 0' }}>
                      <strong>Objective:</strong> {item.objective}
                    </p>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '20px', marginTop: '16px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-navy)', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                    Key Activities & Workflows:
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {item.actions.map((act, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.925rem', color: 'var(--color-text-charcoal)' }}>
                        <CheckCircle size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow Notice */}
          <div style={{ maxWidth: '960px', margin: '40px auto 0', backgroundColor: 'var(--color-bg-offwhite)', border: '1px solid var(--color-border-light)', padding: '20px 24px', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            <strong>Framework Notice:</strong> The five-stage workflow described above reflects Lead Consultancy&apos;s general professional engagement methodology. Specific project milestones, site access protocols, and timelines are confirmed upon formal scope agreement.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Initiate Step 01 for Your Asset?</h2>
            <p>
              Submit an enquiry to schedule an initial consultation and receive a clear scope definition and fee proposal.
            </p>
            <div className="cta-button-group">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Initiate Valuation Request
              </Link>
              <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                WhatsApp Us
              </a>
              <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} className="btn btn-outline-white btn-lg">
                Call {COMPANY_INFO.phonePrimary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
