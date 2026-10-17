import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import { HelpCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | Lead Property Valuation Ethiopia',
  description: 'Common questions and answers regarding property appraisal, asset management, business valuation, IFRS compliance, fees, and procedures in Addis Ababa, Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/faqs'
  }
};

export default function FAQsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'FAQs' }]} />
          <h1>Frequently Asked Questions</h1>
          <p className="page-hero-desc">
            Find answers to common questions regarding property and asset valuation, assignment scopes, documentation requirements, and engagement terms in Ethiopia.
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <HelpCircle size={14} />
              <span>Valuation Clarifications</span>
            </div>
            <h2 className="section-title">
              Common Questions About Our Services
            </h2>
            <p className="section-subtitle">
              Explore key details about our methodologies, required documents, turnaround factors, and fee determination policies.
            </p>
          </div>

          <FAQAccordion items={FAQS} />

          {/* Additional Guidance Box */}
          <div style={{ maxWidth: '860px', margin: '48px auto 0', backgroundColor: 'var(--color-bg-offwhite)', borderRadius: 'var(--radius-xl)', padding: '36px', border: '1px solid var(--color-border-light)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '10px' }}>
              Have a Specific Question Not Listed Here?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '24px', maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto' }}>
              Every asset portfolio possesses unique technical and legal characteristics. Contact our advisory consultants directly for personalized guidance.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Submit an Inquiry <ArrowRight size={15} />
              </Link>
              <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                <MessageCircle size={15} /> WhatsApp Direct
              </a>
              <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} className="btn btn-secondary">
                <Phone size={15} /> Call {COMPANY_INFO.phonePrimary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
