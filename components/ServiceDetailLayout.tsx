import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Building2, 
  CheckCircle, 
  FileText, 
  Users, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  ShieldAlert,
  ShieldCheck
} from 'lucide-react';
import { ServiceCategory, SERVICE_CATEGORIES, COMPANY_INFO } from '@/lib/data';

interface ServiceDetailLayoutProps {
  service: ServiceCategory;
  disclaimerText?: string;
}

export default function ServiceDetailLayout({ service, disclaimerText }: ServiceDetailLayoutProps) {
  const otherServices = SERVICE_CATEGORIES.filter((s) => s.id !== service.id);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs 
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title }
            ]} 
          />
          <h1>{service.title}</h1>
          <p className="page-hero-desc">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="split-layout-detail">
            {/* Left Column: Detailed Service Information */}
            <div>
              <div style={{ marginBottom: '36px' }}>
                <div className="section-eyebrow">
                  <ShieldCheck size={14} />
                  <span>Practice Overview</span>
                </div>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '16px', color: 'var(--color-primary-navy)' }}>
                  Professional Scope & Strategic Methodology
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-charcoal)' }}>
                  {service.detailedDesc}
                </p>
              </div>

              {disclaimerText && (
                <div style={{ backgroundColor: 'var(--color-bg-offwhite)', borderLeft: '4px solid var(--color-accent-gold)', padding: '16px 20px', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', marginBottom: '36px', fontSize: '0.9rem', color: 'var(--color-text-charcoal)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '4px' }}>
                    <ShieldAlert size={16} style={{ color: 'var(--color-accent-gold)' }} />
                    <span>Regulatory & Professional Notice</span>
                  </div>
                  <div>{disclaimerText}</div>
                </div>
              )}

              {/* Individual Sub-Services Breakdown */}
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '20px', color: 'var(--color-primary-navy)' }}>
                  Specialized Sub-Services & Assignment Types
                </h3>

                <div className="subservice-list">
                  {service.subServices.map((sub, index) => (
                    <div key={index} className="subservice-item">
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-accent-gold-light)', color: 'var(--color-primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontWeight: 700, fontSize: '0.85rem' }}>
                          0{index + 1}
                        </div>
                        <div>
                          <h4 className="subservice-title">{sub.title}</h4>
                          <p className="subservice-desc">{sub.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience & Deliverables Grid */}
              <div className="split-layout-card-grid" style={{ marginBottom: '48px' }}>
                <div style={{ backgroundColor: 'var(--color-bg-offwhite)', padding: '24px 20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Users size={18} style={{ color: 'var(--color-accent-gold)' }} />
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', margin: 0 }}>
                      Who Benefits
                    </h4>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.audience.map((aud, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-charcoal)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ backgroundColor: 'var(--color-bg-offwhite)', padding: '24px 20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <FileText size={18} style={{ color: 'var(--color-accent-gold)' }} />
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', margin: 0 }}>
                      Key Deliverables
                    </h4>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.deliverables.map((del, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-charcoal)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Anchor */}
              <div style={{ backgroundColor: 'var(--color-bg-white)', border: '2px solid var(--color-accent-gold)', borderRadius: 'var(--radius-xl)', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '8px' }}>
                  Commission a {service.title} Assignment
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Contact our Addis Ababa office to discuss asset specifics, inspection scheduling, required documentation, and formal fee quotations.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-primary">
                    Request Formal Quotation <ArrowRight size={16} />
                  </Link>
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} className="btn btn-secondary">
                    <Phone size={16} /> Call {COMPANY_INFO.phonePrimary}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <aside>
              {/* Practice Directory Widget */}
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">All Valuation Practices</h3>
                <ul className="sidebar-menu">
                  {SERVICE_CATEGORIES.map((s) => (
                    <li key={s.id} className={`sidebar-menu-item ${s.id === service.id ? 'active' : ''}`}>
                      <Link href={`/services/${s.slug}`}>
                        <span>{s.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact Widget */}
              <div className="sidebar-widget" style={{ backgroundColor: 'var(--color-primary-navy)', color: '#FFFFFF', borderColor: 'transparent' }}>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '14px' }}>
                  Need Direct Advisory?
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#C5D4E6', lineHeight: '1.6', marginBottom: '20px' }}>
                  Speak directly with Engineer Hlina Legesse or our senior valuation consultants.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} className="btn btn-accent btn-sm" style={{ width: '100%' }}>
                    <Phone size={14} /> {COMPANY_INFO.phonePrimary}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`} className="btn btn-outline-white btn-sm" style={{ width: '100%' }}>
                    <Phone size={14} /> {COMPANY_INFO.phoneSecondary}
                  </a>
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-sm" style={{ width: '100%' }}>
                    <MessageCircle size={14} /> WhatsApp Direct
                  </a>
                </div>
              </div>

              {/* Office Details Widget */}
              <div className="sidebar-widget">
                <h4 style={{ fontSize: '1rem', color: 'var(--color-primary-navy)', marginBottom: '12px' }}>
                  Headquarters
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                  {COMPANY_INFO.address}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
