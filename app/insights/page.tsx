import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { INSIGHTS, COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Valuation & Real Estate Insights | Lead Consultancy Ethiopia',
  description: 'Articles, practical guides, and advisory resources on property appraisal, asset management, and IFRS fair value compliance in Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/insights'
  }
};

export default function InsightsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Insights & Resources' }]} />
          <h1>Insights & Valuation Resources</h1>
          <p className="page-hero-desc">
            Technical guidance notes, practical perspectives, and regulatory considerations for property owners, corporate CFOs, and asset managers in Ethiopia.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <BookOpen size={14} />
              <span>Knowledge Center</span>
            </div>
            <h2 className="section-title">
              Advisory Articles & Commentary
            </h2>
            <p className="section-subtitle">
              Clear, practical commentary on asset accounting, physical inspection protocols, and property valuation frameworks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {INSIGHTS.map((item, idx) => (
              <article 
                key={item.slug} 
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                  <span style={{ backgroundColor: 'var(--color-accent-gold-light)', color: 'var(--color-primary-navy)', padding: '4px 10px', borderRadius: 'var(--radius-sm)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    {item.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', lineHeight: '1.4', marginBottom: '12px' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                  {item.summary}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {item.readTime}
                  </span>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary-navy)', fontWeight: 700 }}>
                    <span>Discuss Topic</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Note */}
          <div style={{ maxWidth: '860px', margin: '48px auto 0', backgroundColor: 'var(--color-bg-offwhite)', border: '1px solid var(--color-border-light)', padding: '20px 24px', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            <strong>Publication Notice:</strong> The articles published in our knowledge index are educational discussions on property appraisal, asset accounting, and engineering principles. They are intended for general information and do not constitute specific valuation certificates or legally binding advice without formal engagement.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="cta-banner">
            <h2>Have a Specific Valuation Scenario to Discuss?</h2>
            <p>
              Connect with our advisory consultants to review your asset particulars and explore customized appraisal solutions.
            </p>
            <div className="cta-button-group">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Request a Consultation
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
