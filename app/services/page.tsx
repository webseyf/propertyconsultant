import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Building2, 
  TrendingUp, 
  Cog, 
  Scale, 
  FileCheck, 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { SERVICE_CATEGORIES, COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Valuation & Advisory Services | Lead Consultancy Addis Ababa',
  description: 'Explore the 6 core valuation practices of Lead Property Valuation & Asset Management Consultancy PLC: Real Estate, Business, Machinery, Legal/Tax, IFRS Reporting, and M&A Transactions.',
  alternates: {
    canonical: 'https://www.leadpvet.com/services'
  }
};

const serviceIcons: Record<string, React.ReactNode> = {
  'real-estate-and-land-valuation': <Building2 size={28} />,
  'business-and-financial-valuation': <TrendingUp size={28} />,
  'asset-and-equipment-valuation': <Cog size={28} />,
  'legal-tax-related-valuation': <Scale size={28} />,
  'financial-reporting-and-regulatory-compliance': <FileCheck size={28} />,
  'mergers-acquisitions-and-corporate-transactions': <Briefcase size={28} />
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <h1>Professional Valuation Disciplines</h1>
          <p className="page-hero-desc">
            Independent, multidisciplinary valuation and asset advisory services tailored to real estate owners, institutional lenders, corporate boards, and public authorities across Ethiopia.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Compass size={14} />
              <span>Full Practice Portfolio</span>
            </div>
            <h2 className="section-title">
              Comprehensive Valuation Practices
            </h2>
            <p className="section-subtitle">
              Every asset class requires tailored inspection protocols, financial modeling, and local market validation. Explore our six specialized advisory practices below.
            </p>
          </div>

          <div className="services-grid">
            {SERVICE_CATEGORIES.map((srv) => (
              <div key={srv.id} className="service-card">
                <div className="service-card-icon">
                  {serviceIcons[srv.slug] || <Building2 size={26} />}
                </div>
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.detailedDesc.slice(0, 160)}...</p>

                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-navy)', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                    Key Service Areas:
                  </span>
                  <ul className="service-card-list">
                    {srv.subServices.slice(0, 4).map((sub, i) => (
                      <li key={i}>
                        <CheckCircle size={14} />
                        <span>{sub.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/services/${srv.slug}`} className="service-card-link">
                  <span>View Dedicated Service Page</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Disciplinary Engagement Highlight */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div style={{ backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-xl)', padding: '48px 40px', border: '1px solid var(--color-border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
              <div>
                <div className="section-eyebrow">
                  <ShieldCheck size={14} />
                  <span>Multidisciplinary Synthesis</span>
                </div>
                <h3 style={{ fontSize: '1.65rem', marginBottom: '16px', color: 'var(--color-primary-navy)' }}>
                  Need a Customized Multi-Asset Valuation Portfolio?
                </h3>
                <p style={{ color: 'var(--color-text-charcoal)', lineHeight: '1.7', fontSize: '1.025rem', marginBottom: '20px' }}>
                  Complex commercial operations rarely involve a single asset category. Many engagements—such as corporate reorganizations, factory acquisitions, or banking collateral audits—require simultaneous appraisal of real estate property, industrial machinery lines, and business enterprise value.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.95rem', margin: 0 }}>
                  Lead Consultancy forms unified multidisciplinary teams comprising certified valuers, structural and mechanical engineers, and financial analysts to deliver consolidated, audit-ready portfolios.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-offwhite)', border: '1px solid var(--color-border-light)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary-navy)', marginBottom: '4px' }}>
                    Custom Scope Consultation
                  </strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    Our senior partners assess your specific asset mix and define terms of reference and timeline.
                  </span>
                </div>
                <Link href="/contact" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Request Custom Scope Assessment <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="cta-banner">
            <h2>Discuss Your Valuation Requirements</h2>
            <p>
              Contact our team to discuss your property, asset, or business valuation requirements. We provide prompt, confidential advisory consultations.
            </p>
            <div className="cta-button-group">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Request a Consultation
              </Link>
              <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                WhatsApp Direct
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
