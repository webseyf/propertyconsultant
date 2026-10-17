import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle, 
  Compass, 
  Users, 
  Layers, 
  Target, 
  Eye, 
  ArrowRight,
  Phone,
  MessageCircle,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, CORE_VALUES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Lead Consultancy | Property Valuation & Asset Advisory Firm Addis Ababa',
  description: 'Learn about Lead Property Valuation and Asset Management Consultancy PLC, established in July 2024 in Addis Ababa by Engineer Hlina Legesse.',
  alternates: {
    canonical: 'https://www.leadpvet.com/about'
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <h1>About Lead Consultancy</h1>
          <p className="page-hero-desc">
            Independent professional property valuation, engineering assessment, and asset management consultancy headquartered in Addis Ababa, Ethiopia.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">
                <Building2 size={14} />
                <span>Our Heritage & Founding</span>
              </div>
              <h2 className="section-title">
                Elevating Excellence in Property Valuation and Asset Management
              </h2>
              
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-charcoal)', marginBottom: '16px' }}>
                <strong>Lead Property Valuation and Asset Management Consultancy PLC</strong> was established in July 2024 by Engineer Hlina Legesse and her associate. Headquartered in Addis Ababa, Ethiopia, the company provides integrated real estate and asset solutions for local and international markets.
              </p>

              <p style={{ lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                The company brings together certified professionals across real property valuation, engineering, economics, and business analysis. Its services include property valuation, asset management, real estate economics, land policy advisory, and financial solutions.
              </p>

              <p style={{ lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                Lead Consultancy combines internationally recognized methodologies with an understanding of Ethiopia&apos;s regulatory and economic environment. Its approach emphasizes technical precision, transparency, ethical practices, and client-focused advisory services.
              </p>

              <p style={{ lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                The company aims to help government institutions, private investors, and enterprises make informed decisions, manage risk, and create sustainable value in the real estate and asset sectors.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn btn-primary">
                  Explore Valuation Services <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Our Leadership Team
                </Link>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border-light)' }}>
                <img 
                  src="/images/hero-architecture.jpg" 
                  alt="Modern commercial office tower in Addis Ababa" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: 'rgba(20, 43, 73, 0.94)', color: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 164, 109, 0.4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    <ShieldCheck size={16} />
                    <span>Independent Practice</span>
                  </div>
                  <div style={{ fontSize: '0.925rem', marginTop: '4px', color: '#DCE6F2' }}>
                    Rigorous valuation standards grounded in Ethiopian statutory regulations & IFRS principles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (With required proposal disclaimer) */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Target size={14} />
              <span>Strategic Purpose</span>
            </div>
            <h2 className="section-title">
              Mission & Vision Statements
            </h2>
            <p className="section-subtitle">
              Guiding our institutional growth, client partnerships, and continuous pursuit of professional mastery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Proposed Mission */}
            <div style={{ backgroundColor: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '36px 32px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-accent-gold-light)', color: 'var(--color-primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '14px' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-charcoal)', fontStyle: 'italic', marginBottom: '20px' }}>
                &ldquo;{COMPANY_INFO.proposedMission}&rdquo;
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-offwhite)', border: '1px solid var(--color-border-subtle)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.785rem', color: 'var(--color-text-muted)' }}>
                <strong>Note:</strong> Proposed statement based on verified founding objectives, subject to formal ratification.
              </div>
            </div>

            {/* Proposed Vision */}
            <div style={{ backgroundColor: 'var(--color-bg-white)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '36px 32px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-accent-gold-light)', color: 'var(--color-primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '14px' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-charcoal)', fontStyle: 'italic', marginBottom: '20px' }}>
                &ldquo;{COMPANY_INFO.proposedVision}&rdquo;
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-offwhite)', border: '1px solid var(--color-border-subtle)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.785rem', color: 'var(--color-text-muted)' }}>
                <strong>Note:</strong> Proposed vision statement formulated to reflect the company&apos;s pan-Ethiopian and regional aspirations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Users size={14} />
              <span>Leadership</span>
            </div>
            <h2 className="section-title">
              Leadership & Executive Governance
            </h2>
          </div>

          <div className="leadership-box">
            <div className="leadership-grid">
              <div className="leadership-image-wrap">
                <img 
                  src="/images/original/about.jpg" 
                  alt="Engineer Hlina Legesse, Company General Manager" 
                />
              </div>

              <div className="leadership-content">
                <span className="leadership-badge">Executive Leadership</span>
                <h3 className="leadership-name">{COMPANY_INFO.generalManager}</h3>
                <div className="leadership-role">Company General Manager & Co-Founder</div>
                
                <p className="leadership-bio">
                  Engineer Hlina Legesse founded Lead Property Valuation and Asset Management Consultancy PLC in July 2024 alongside her associate. With a background in engineering and asset evaluation, she has spearheaded the firm’s development into an independent, multidisciplinary advisory practice based in Addis Ababa.
                </p>
                <p className="leadership-bio" style={{ marginBottom: '16px' }}>
                  Her approach is founded upon engineering diligence, clear methodologies, and transparent reporting—ensuring clients receive verifiable valuations that satisfy stringent commercial, banking, and statutory audit requirements.
                </p>

                <div className="discrepancy-note">
                  <strong>Verification Note:</strong> Previous company collateral contained both &ldquo;Engineer Hlina Legesse&rdquo; and &ldquo;Engineer Hilina Legesse.&rdquo; This prompt confirms the official record for company validation.
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} className="btn btn-primary btn-sm">
                    <Phone size={14} /> Direct Call
                  </a>
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    <MessageCircle size={14} /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <ShieldCheck size={14} />
              <span>Guiding Principles</span>
            </div>
            <h2 className="section-title">
              Our Core Values
            </h2>
            <p className="section-subtitle">
              Every valuation opinion, site inspection, and numerical model is governed by these foundational standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={idx} 
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '36px 30px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-accent-gold-light)', color: 'var(--color-primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--color-primary-navy)' }}>
                  {val.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.95rem', margin: 0 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Consult with Our Valuation Specialists?</h2>
            <p>
              Reach out to Engineer Hlina Legesse and our senior advisory team to discuss your property, plant, or business valuation scope.
            </p>
            <div className="cta-button-group">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Request a Consultation
              </Link>
              <Link href="/services" className="btn btn-outline-white btn-lg">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
