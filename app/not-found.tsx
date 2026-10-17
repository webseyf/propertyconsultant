import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Building2, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export default function NotFound() {
  return (
    <section className="section section-bg-offwhite" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-accent-gold-light)', color: 'var(--color-primary-navy)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <Building2 size={32} />
        </div>

        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-navy)', marginBottom: '8px' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-secondary-navy)' }}>
          Page or Document Not Found
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '32px' }}>
          The valuation page or resource you are looking for may have been restructured as part of our website redesign. Please return to the homepage or explore our core practices.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">
            <Home size={16} /> Return to Homepage
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View Valuation Services
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Our Team
          </Link>
        </div>

        <div style={{ marginTop: '40px', borderTop: '1px solid var(--color-border-light)', paddingTop: '20px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          Need urgent valuation assistance? Call us at <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>{COMPANY_INFO.phonePrimary}</a>.
        </div>
      </div>
    </section>
  );
}
