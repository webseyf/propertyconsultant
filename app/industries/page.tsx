import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Building, 
  Factory, 
  Landmark, 
  TrendingUp, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Phone,
  MessageCircle
} from 'lucide-react';
import { INDUSTRIES, COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Industries & Sectors Served | Lead Property Valuation Consultancy Ethiopia',
  description: 'Valuation and asset advisory solutions across real estate, industrial manufacturing, banking, agriculture, and public infrastructure sectors in Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/industries'
  }
};

const industryIcons: Record<string, React.ReactNode> = {
  'real-estate-property': <Building size={32} />,
  'commercial-industrial': <Factory size={32} />,
  'banking-financial-services': <Landmark size={32} />,
  'investment-corporate-transactions': <TrendingUp size={32} />,
  'agriculture-land': <Globe size={32} />,
  'public-sector-infrastructure': <Globe size={32} />
};

export default function IndustriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Industries' }]} />
          <h1>Industries & Sectors Served</h1>
          <p className="page-hero-desc">
            Independent property and asset advisory tailored to the technical requirements, operating realities, and regulatory frameworks of key economic sectors in Ethiopia.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <ShieldCheck size={14} />
              <span>Sector Expertise</span>
            </div>
            <h2 className="section-title">
              Target Economic & Commercial Sectors
            </h2>
            <p className="section-subtitle">
              Our multidisciplinary valuation methodologies are adaptable to distinct asset profiles, from commercial towers and industrial assembly plants to agricultural holdings and banking collateral portfolios.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {INDUSTRIES.map((ind, idx) => (
              <div 
                key={ind.slug} 
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px 32px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-accent-gold-light)', color: 'var(--color-primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  {industryIcons[ind.slug] || <Building size={30} />}
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '12px' }}>
                  {ind.title}
                </h3>

                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1 }}>
                  {ind.description}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '16px' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary-navy)', fontWeight: 700, fontSize: '0.9rem' }}>
                    <span>Inquire for {ind.title.split('&')[0].trim()}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Factual Disclaimer as required by prompt */}
          <div style={{ marginTop: '48px', backgroundColor: 'var(--color-bg-offwhite)', border: '1px solid var(--color-border-light)', padding: '20px 24px', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            <strong>Sector Clarification:</strong> The industry categories above represent key commercial and institutional domains where Lead Consultancy provides technical valuation and asset advisory services based on its documented professional capabilities.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="cta-banner">
            <h2>Need Sector-Specific Valuation Advice?</h2>
            <p>
              Connect with our senior valuation team to discuss your sector-specific asset valuation and advisory needs.
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
