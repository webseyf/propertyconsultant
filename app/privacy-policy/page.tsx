import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Shield, Lock, FileText, CheckCircle, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lead Property Valuation Consultancy PLC',
  description: 'Understand how Lead Property Valuation & Asset Management Consultancy PLC collects, uses, and safeguards client information submitted via this website.',
  alternates: {
    canonical: 'https://www.leadpvet.com/privacy-policy'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1>Privacy Policy</h1>
          <p className="page-hero-desc">
            Our commitment to confidentiality, transparent data handling, and professional discretion across all client inquiries and valuation engagements.
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="section section-bg-white">
        <div className="container-narrow">
          <div style={{ backgroundColor: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '48px 40px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
              <Lock size={15} style={{ color: 'var(--color-accent-gold)' }} />
              <span>Effective Date: July 2024 &bull; Last Updated: October 2026</span>
            </div>

            <div style={{ lineHeight: '1.75', color: 'var(--color-text-charcoal)' }}>
              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', marginBottom: '12px' }}>
                1. Overview and Scope
              </h2>
              <p>
                This Privacy Policy outlines how <strong>Lead Property Valuation and Asset Management Consultancy PLC</strong> (&ldquo;Lead Consultancy,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) processes information collected when prospective clients, property owners, corporate officers, or institutional partners visit our website (<a href="https://www.leadpvet.com" style={{ textDecoration: 'underline' }}>www.leadpvet.com</a>) or submit inquiries regarding our valuation and asset advisory services.
              </p>

              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', marginTop: '32px', marginBottom: '12px' }}>
                2. Information We Collect
              </h2>
              <p>
                We only collect information directly provided by you through our online consultation forms, email correspondence, or telephone conversations:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li><strong>Identity Information:</strong> Full name, organizational affiliation, and job title.</li>
                <li><strong>Contact Information:</strong> Telephone number, mobile number, and email address.</li>
                <li><strong>Asset Information:</strong> Descriptive particulars regarding the real estate, machinery, business, or portfolio you wish to evaluate.</li>
                <li><strong>Technical Diagnostics:</strong> Standard non-identifying server logs (such as IP address, browser type, and submission timestamps) used strictly for security monitoring and spam prevention.</li>
              </ul>

              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', marginTop: '32px', marginBottom: '12px' }}>
                3. Purpose of Information Processing
              </h2>
              <p>
                The information you provide is utilized exclusively for genuine professional advisory purposes:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>To review your asset details and respond to your consultation inquiry.</li>
                <li>To formulate transparent, scope-based fee quotations and engagement terms.</li>
                <li>To schedule on-site inspections, asset verifications, and executive meetings.</li>
                <li>To maintain necessary records for professional valuation engagements in accordance with standard business practices.</li>
              </ul>

              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', marginTop: '32px', marginBottom: '12px' }}>
                4. Confidentiality & Non-Disclosure
              </h2>
              <p>
                Due to the sensitive nature of real estate holdings, enterprise financials, and industrial assets, Lead Consultancy adheres strictly to professional standards of confidentiality. We do not sell, rent, commercialize, or publicly share client inquiry details or asset documentation with third parties.
              </p>

              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', marginTop: '32px', marginBottom: '12px' }}>
                5. Third-Party Processors & Infrastructure
              </h2>
              <p>
                Our website utilizes standard, reputable infrastructure providers (such as hosting servers, mapping providers like Google Maps for office location display, and secure email relay services) to transmit consultation inquiries to our primary email destination ({COMPANY_INFO.email}).
              </p>

              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', marginTop: '32px', marginBottom: '12px' }}>
                6. Data Retention
              </h2>
              <p>
                Inquiry details are retained only for as long as necessary to fulfill the operational purpose for which they were collected, or to maintain standard business correspondence records. If an inquiry does not lead to a formal engagement, contact details may be securely purged upon request.
              </p>

              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', marginTop: '32px', marginBottom: '12px' }}>
                7. Privacy Inquiries & Contact
              </h2>
              <p>
                For questions regarding this policy or the handling of your confidential asset information, please contact our Addis Ababa office:
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-offwhite)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)', marginTop: '16px' }}>
                <strong style={{ color: 'var(--color-primary-navy)', display: 'block', marginBottom: '4px' }}>
                  {COMPANY_INFO.name}
                </strong>
                <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>
                  <strong>Address:</strong> {COMPANY_INFO.address}
                </p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>
                  <strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                </p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>
                  <strong>Telephone:</strong> <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}>{COMPANY_INFO.phonePrimary}</a> / <a href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`}>{COMPANY_INFO.phoneSecondary}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
