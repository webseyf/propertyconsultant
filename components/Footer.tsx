import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Company Overview */}
          <div>
            <div className="brand-logo-wrap" style={{ marginBottom: '18px' }}>
              <div className="brand-emblem" style={{ background: '#1D3B5C' }}>
                <Building2 size={24} />
              </div>
              <div className="brand-text">
                <span className="brand-title" style={{ color: '#FFFFFF' }}>LEAD CONSULTANCY</span>
                <span className="brand-subtitle">Valuation & Asset Advisory PLC</span>
              </div>
            </div>

            <p className="footer-desc">
              Lead Property Valuation and Asset Management Consultancy PLC is an Ethiopian professional advisory firm headquartered in Addis Ababa. We provide authoritative real estate, enterprise, equipment, and regulatory valuation solutions grounded in technical precision and institutional integrity.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-gold)', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Established July 2024 &bull; Addis Ababa, Ethiopia</span>
            </div>

            <div className="footer-social-row">
              <a 
                href={COMPANY_INFO.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="Telegram" 
                title="Telegram Channel"
              >
                <Send size={15} />
              </a>
              <a 
                href={COMPANY_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="WhatsApp" 
                title="WhatsApp Direct"
              >
                <span style={{ fontSize: '11px', fontWeight: 'bold' }}>WA</span>
              </a>
              <a 
                href={COMPANY_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="Facebook" 
                title="Facebook Profile"
              >
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>FB</span>
              </a>
              <a 
                href={COMPANY_INFO.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="YouTube" 
                title="YouTube Channel"
              >
                <span style={{ fontSize: '11px', fontWeight: 'bold' }}>YT</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link href="/"><ArrowRight size={13} /> Home</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/about"><ArrowRight size={13} /> About Us</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/services"><ArrowRight size={13} /> All Services</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/industries"><ArrowRight size={13} /> Industries</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/process"><ArrowRight size={13} /> Our Process</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/faqs"><ArrowRight size={13} /> Frequently Asked Questions</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/insights"><ArrowRight size={13} /> Insights & Articles</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/contact"><ArrowRight size={13} /> Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Categories */}
          <div>
            <h3 className="footer-col-title">Valuation Practices</h3>
            <ul className="footer-links-list">
              {SERVICE_CATEGORIES.map((srv) => (
                <li key={srv.id} className="footer-link-item">
                  <Link href={`/services/${srv.slug}`}>
                    <ArrowRight size={13} />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div>
            <h3 className="footer-col-title">Contact & Office</h3>
            
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>
                {COMPANY_INFO.address}
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}>{COMPANY_INFO.phonePrimary}</a>
                <br />
                <a href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`}>{COMPANY_INFO.phoneSecondary}</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Send size={18} />
              <div>
                <a href={COMPANY_INFO.telegramUrl} target="_blank" rel="noopener noreferrer">
                  Telegram: @leadvaluation
                </a>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <Link href="/contact" className="btn btn-accent btn-sm" style={{ width: '100%' }}>
                Request Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/contact">Inquiries & Feedback</Link>
            <span>&bull;</span>
            <Link href="/sitemap.xml">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
