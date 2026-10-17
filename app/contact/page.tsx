import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Clock, 
  Building2, 
  ShieldCheck, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us | Lead Property Valuation Consultancy Addis Ababa',
  description: 'Contact Lead Property Valuation and Asset Management Consultancy PLC in Addis Ababa. Call +251 0913006754, message on WhatsApp, or submit your valuation enquiry online.',
  alternates: {
    canonical: 'https://www.leadpvet.com/contact'
  }
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <h1>Contact Our Valuation Team</h1>
          <p className="page-hero-desc">
            Connect directly with our senior valuation consultants and management team in Addis Ababa for confidential discussions regarding your asset appraisal and advisory requirements.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Direct Contact Information */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <div className="section-eyebrow">
                  <Building2 size={14} />
                  <span>Headquarters & Inquiries</span>
                </div>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '12px', color: 'var(--color-primary-navy)' }}>
                  Get in Touch With Our Office
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '1rem' }}>
                  Whether you require single-property appraisal, nationwide machinery inventory verification, or IFRS compliance support, we are here to assist.
                </p>
              </div>

              <div className="contact-info-cards">
                {/* Office Address Card */}
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Office Location</h3>
                    <p className="contact-card-text">
                      <strong>Lancha Area</strong><br />
                      Emmanuel Reformed Apostolic Church Building<br />
                      House No. 942, 3rd Floor, Room 003<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Telephone Numbers</h3>
                    <p className="contact-card-text">
                      Primary:{' '}
                      <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                        {COMPANY_INFO.phonePrimary}
                      </a>
                      <br />
                      Secondary:{' '}
                      <a href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`} style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                        {COMPANY_INFO.phoneSecondary}
                      </a>
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block', marginTop: '4px' }}>
                      Monday &ndash; Saturday, Regular Business Hours (EAT)
                    </span>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="contact-card">
                  <div className="contact-card-icon" style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)', color: '#16A34A' }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Direct WhatsApp</h3>
                    <p className="contact-card-text">
                      Chat directly with our advisory coordinators:{' '}
                      <a 
                        href={COMPANY_INFO.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontWeight: 600, color: '#16A34A' }}
                      >
                        Open WhatsApp Chat &rarr;
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Official Email</h3>
                    <p className="contact-card-text">
                      <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block', marginTop: '4px' }}>
                      For official TORs, tender submissions, and formal correspondence.
                    </span>
                  </div>
                </div>

                {/* Telegram Card */}
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Send size={22} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Telegram Channel</h3>
                    <p className="contact-card-text">
                      <a 
                        href={COMPANY_INFO.telegramUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}
                      >
                        t.me/leadvaluation &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Office Location Map Embed */}
          <div style={{ marginTop: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <MapPin size={20} style={{ color: 'var(--color-accent-gold)' }} />
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', margin: 0 }}>
                Office Location Map (Lancha Area, Addis Ababa)
              </h3>
            </div>
            
            <div className="map-container">
              <iframe
                title="Lead Property Valuation Office Location - Lancha Area, Addis Ababa"
                src="https://maps.google.com/maps?q=Lancha%20Area,%20Addis%20Ababa,%20Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
