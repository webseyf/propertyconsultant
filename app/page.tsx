import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  TrendingUp, 
  Cog, 
  Scale, 
  FileCheck, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle, 
  Phone, 
  MessageCircle, 
  Users, 
  Layers, 
  BarChart3, 
  Compass, 
  Info,
  Calendar,
  MapPin
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  SERVICE_CATEGORIES, 
  WHY_CHOOSE_US, 
  TARGET_AUDIENCES, 
  ENGAGEMENT_PROCESS, 
  CORE_VALUES 
} from '@/lib/data';

const serviceIcons: Record<string, React.ReactNode> = {
  'real-estate-and-land-valuation': <Building2 size={26} />,
  'business-and-financial-valuation': <TrendingUp size={26} />,
  'asset-and-equipment-valuation': <Cog size={26} />,
  'legal-tax-related-valuation': <Scale size={26} />,
  'financial-reporting-and-regulatory-compliance': <FileCheck size={26} />,
  'mergers-acquisitions-and-corporate-transactions': <Briefcase size={26} />
};

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <ShieldCheck size={14} />
                <span>Professional Valuation Consultancy &bull; Addis Ababa</span>
              </div>
              
              <h1 className="hero-title">
                Clarity and Confidence in Every Asset Decision.
              </h1>
              
              <p className="hero-description">
                Lead Property Valuation and Asset Management Consultancy PLC provides professional valuation and asset advisory solutions to support informed decisions across real estate, business, and financial assets.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Request a Consultation
                </Link>
                <Link href="/services" className="btn btn-outline-white btn-lg">
                  Explore Our Services
                </Link>
              </div>

              <div className="hero-proof-grid">
                <div className="hero-proof-item">
                  <span className="hero-proof-number">July 2024</span>
                  <span className="hero-proof-label">Established in Addis Ababa</span>
                </div>
                <div className="hero-proof-item">
                  <span className="hero-proof-number">6 Core</span>
                  <span className="hero-proof-label">Valuation & Advisory Disciplines</span>
                </div>
                <div className="hero-proof-item">
                  <span className="hero-proof-number">IFRS & Local</span>
                  <span className="hero-proof-label">Regulatory Compliance Standards</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-card">
                <img 
                  src="/images/hero-architecture.jpg" 
                  alt="Modern commercial architecture in Addis Ababa representing asset valuation" 
                />
                <div className="hero-card-badge">
                  <div className="hero-card-badge-icon">
                    <Building2 size={22} />
                  </div>
                  <div className="hero-card-badge-text">
                    <strong>Multidisciplinary Appraisal Team</strong>
                    <br />
                    <span>Real Property Valuers, Engineers, Economists & Financial Analysts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <section className="section section-bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">
                <Info size={14} />
                <span>Company Introduction</span>
              </div>
              <h2 className="section-title">
                Professional Valuation and Advisory Services
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-charcoal)', marginBottom: '18px' }}>
                <strong>Lead Property Valuation and Asset Management Consultancy PLC</strong> was established in July 2024 and is headquartered in Addis Ababa, Ethiopia. We provide integrated real estate, asset appraisal, and financial advisory solutions designed to serve local and international clients across dynamic commercial markets.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '28px' }}>
                Our firm unites certified Real Property Valuers, Professional Engineers, Economists, and Business Analysts. By combining internationally recognized valuation methodologies with deep expertise in Ethiopia’s regulatory, municipal, and financial frameworks, we deliver reports characterized by technical accuracy, transparency, and ethical diligence.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', fontWeight: 600 }}>Multidisciplinary Expertise</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', fontWeight: 600 }}>Ethical & Defensible Reports</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', fontWeight: 600 }}>Local Regulatory Insight</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', fontWeight: 600 }}>Audit-Ready Documentation</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Link href="/about" className="btn btn-primary">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Our Office
                </Link>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border-light)' }}>
                <img 
                  src="/images/valuation-analysis.jpg" 
                  alt="Lead Consultancy valuation professionals evaluating blueprints and asset models"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: 'rgba(255, 255, 255, 0.96)', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent-gold)', display: 'block' }}>
                    Headquarters
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-navy)', fontWeight: 600 }}>
                    Lancha Area, Emmanuel Reformed Apostolic Church Bldg, Addis Ababa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE SERVICES */}
      <section className="section section-bg-offwhite" id="services-overview">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Layers size={14} />
              <span>Core Practices</span>
            </div>
            <h2 className="section-title">
              Our Professional Valuation Disciplines
            </h2>
            <p className="section-subtitle">
              Structured appraisal and asset advisory solutions designed to address the full spectrum of commercial, industrial, legal, and institutional requirements.
            </p>
          </div>

          <div className="services-grid">
            {SERVICE_CATEGORIES.map((srv) => (
              <div key={srv.id} className="service-card">
                <div className="service-card-icon">
                  {serviceIcons[srv.slug] || <Building2 size={24} />}
                </div>
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.shortDesc}</p>
                
                <ul className="service-card-list">
                  {srv.subServices.slice(0, 3).map((sub, i) => (
                    <li key={i}>
                      <CheckCircle size={14} />
                      <span>{sub.title}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${srv.slug}`} className="service-card-link">
                  <span>Explore Service Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/services" className="btn btn-primary btn-lg">
              View All Comprehensive Valuation Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE LEAD CONSULTANCY? */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <ShieldCheck size={14} />
              <span>Core Differentiators</span>
            </div>
            <h2 className="section-title">
              Why Choose Lead Consultancy?
            </h2>
            <p className="section-subtitle">
              Our firm is built upon technical precision, multidisciplinary collaboration, and adherence to objective ethical standards in every engagement.
            </p>
          </div>

          <div className="features-grid">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-card-icon">
                  {index === 0 && <Layers size={24} />}
                  {index === 1 && <ShieldCheck size={24} />}
                  {index === 2 && <Compass size={24} />}
                  {index === 3 && <BarChart3 size={24} />}
                </div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO WE SERVE */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Users size={14} />
              <span>Target Audiences</span>
            </div>
            <h2 className="section-title">
              Who We Serve
            </h2>
            <p className="section-subtitle">
              We provide independent valuation solutions for diverse stakeholders across the commercial, public, and financial sectors of Ethiopia.
            </p>
          </div>

          <div className="audiences-grid">
            {TARGET_AUDIENCES.map((aud, index) => (
              <div key={index} className="audience-card">
                <div className="audience-icon">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="audience-title">{aud.title}</h3>
                  <p className="audience-desc">{aud.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR APPROACH */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Compass size={14} />
              <span>Methodology & Workflow</span>
            </div>
            <h2 className="section-title">
              Our Professional Engagement Framework
            </h2>
            <p className="section-subtitle">
              A disciplined five-stage valuation workflow ensuring thorough verification, robust quantitative modeling, and audit-ready reporting.
            </p>
          </div>

          <div className="process-grid">
            {ENGAGEMENT_PROCESS.map((proc, index) => (
              <div key={index} className="process-step-card">
                <span className="process-step-number">{proc.step}</span>
                <h3 className="process-step-title">{proc.title}</h3>
                <p className="process-step-desc">{proc.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/process" className="btn btn-secondary">
              Review Our Complete Valuation Methodology <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEADERSHIP */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <Users size={14} />
              <span>Executive Leadership</span>
            </div>
            <h2 className="section-title">
              Firm Leadership & General Management
            </h2>
          </div>

          <div className="leadership-box">
            <div className="leadership-grid">
              <div className="leadership-image-wrap">
                <img 
                  src="/images/original/about.jpg" 
                  alt="Engineer Hlina Legesse, General Manager of Lead Property Valuation Consultancy PLC" 
                />
              </div>

              <div className="leadership-content">
                <span className="leadership-badge">Company Leadership</span>
                <h3 className="leadership-name">{COMPANY_INFO.generalManager}</h3>
                <div className="leadership-role">Company General Manager & Co-Founder</div>
                
                <p className="leadership-bio">
                  Engineer Hlina Legesse founded Lead Property Valuation and Asset Management Consultancy PLC alongside her associate in July 2024. Headquartered in Addis Ababa, the firm was established to elevate valuation standards in Ethiopia through a disciplined integration of engineering analysis, property appraisal, and financial modeling.
                </p>
                <p className="leadership-bio" style={{ marginBottom: '16px' }}>
                  Under her leadership, the consultancy focuses on providing institutional investors, banking institutions, enterprises, and property owners with transparent, evidence-backed valuation documentation that supports sound financial decisions and risk mitigation.
                </p>

                {/* Editorial Flag for Owner Confirmation as specified in prompt */}
                <div className="discrepancy-note">
                  <strong>Notice for Site Review:</strong> On the previous website version, the General Manager's name was referenced as both &ldquo;Engineer Hlina Legesse&rdquo; and &ldquo;Engineer Hilina Legesse.&rdquo; This has been highlighted for formal confirmation.
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link href="/about" className="btn btn-primary btn-sm">
                    Read Leadership Profile
                  </Link>
                  <Link href="/contact" className="btn btn-secondary btn-sm">
                    Connect With Our Advisory Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: COMPANY VALUES */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <ShieldCheck size={14} />
              <span>Ethical Standards</span>
            </div>
            <h2 className="section-title">
              Our Core Values
            </h2>
            <p className="section-subtitle">
              The fundamental principles guiding every inspection, numerical calculation, and professional client interaction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
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

      {/* SECTION 9: CREDIBILITY & MULTIDISCIPLINARY RIGOR */}
      <section className="section section-bg-offwhite">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <BarChart3 size={14} />
              <span>Technical Competence</span>
            </div>
            <h2 className="section-title">
              Commitment to Professional Standards
            </h2>
            <p className="section-subtitle">
              Our valuations combine internationally accepted valuation standards with comprehensive local property and economic data in Ethiopia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--color-bg-white)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ color: 'var(--color-primary-navy)', marginBottom: '12px' }}>Certified Valuers</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                Our team brings together certified real property practitioners trained in formal asset valuation methodologies across diverse property categories.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-white)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ color: 'var(--color-primary-navy)', marginBottom: '12px' }}>Engineering Precision</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                Led by professional engineers, we evaluate structural specifications, bill of quantities, plant equipment wear, and replacement costs with technical rigor.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-white)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ color: 'var(--color-primary-navy)', marginBottom: '12px' }}>Economic Analysis</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                We incorporate macroeconomic trends, market interest rates, and localized capitalisation metrics to substantiate income-producing asset valuations.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-white)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ color: 'var(--color-primary-navy)', marginBottom: '12px' }}>Transparent Documentation</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                Every appraisal report includes comprehensive site survey photographs, boundary sketches, comparable transaction matrices, and auditable calculation trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="cta-banner">
            <h2>Discuss Your Valuation Requirements</h2>
            <p>
              Contact our advisory team to discuss your property, asset, or business valuation requirements. We provide confidential, professional consultations tailored to your timeline.
            </p>
            <div className="cta-button-group">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Request a Consultation
              </Link>
              <a 
                href={COMPANY_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white btn-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} 
                className="btn btn-outline-white btn-lg"
              >
                <Phone size={18} />
                <span>Call Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
