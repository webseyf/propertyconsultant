'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  TrendingUp, 
  Cog, 
  Scale, 
  FileCheck, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '@/lib/data';

const serviceIcons: Record<string, React.ReactNode> = {
  'real-estate-and-land-valuation': <Building2 size={18} />,
  'business-and-financial-valuation': <TrendingUp size={18} />,
  'asset-and-equipment-valuation': <Cog size={18} />,
  'legal-tax-related-valuation': <Scale size={18} />,
  'financial-reporting-and-regulatory-compliance': <FileCheck size={18} />,
  'mergers-acquisitions-and-corporate-transactions': <Briefcase size={18} />
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Topbar Contact Strip */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <span className="topbar-item">
              <MapPin size={13} style={{ color: 'var(--color-accent-gold)' }} />
              <span>{COMPANY_INFO.headquarters} &bull; Lancha Area</span>
            </span>
            <span className="topbar-item">
              <Phone size={13} style={{ color: 'var(--color-accent-gold)' }} />
              <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}>{COMPANY_INFO.phonePrimary}</a>
              <span style={{ opacity: 0.4 }}>/</span>
              <a href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`}>{COMPANY_INFO.phoneSecondary}</a>
            </span>
            <span className="topbar-item">
              <Mail size={13} style={{ color: 'var(--color-accent-gold)' }} />
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </span>
          </div>

          <div className="topbar-socials">
            <a 
              href={COMPANY_INFO.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="topbar-social-link" 
              aria-label="Telegram"
              title="Official Telegram Channel"
            >
              <Send size={13} />
            </a>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="topbar-social-link" 
              aria-label="WhatsApp"
              title="WhatsApp Advisory"
            >
              <span style={{ fontSize: '11px', fontWeight: 'bold' }}>WA</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="site-header">
        <div className="container nav-container">
          {/* Logo / Brand Name */}
          <Link href="/" className="brand-logo-wrap" aria-label="Lead Property Valuation Home">
            <div className="brand-emblem">
              <Building2 size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-title">LEAD CONSULTANCY</span>
              <span className="brand-subtitle">Property Valuation & Asset Advisory</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              
              {/* Services Dropdown */}
              <li className="nav-item dropdown-wrapper">
                <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                  <span>Services</span>
                  <ChevronDown size={14} />
                </Link>
                <div className="dropdown-menu">
                  {SERVICE_CATEGORIES.map((srv) => (
                    <Link 
                      key={srv.id} 
                      href={`/services/${srv.slug}`} 
                      className="dropdown-item"
                    >
                      <div className="dropdown-icon">
                        {serviceIcons[srv.slug] || <Building2 size={16} />}
                      </div>
                      <div>
                        <div className="dropdown-title">{srv.title}</div>
                        <div className="dropdown-desc">{srv.shortDesc.slice(0, 75)}...</div>
                      </div>
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '8px', marginTop: '4px' }}>
                    <Link href="/services" style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--color-primary-navy)', display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 8px' }}>
                      <span>View All Valuation Services</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/process" className={`nav-link ${isActive('/process') ? 'active' : ''}`}>
                  Our Process
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faqs" className={`nav-link ${isActive('/faqs') ? 'active' : ''}`}>
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`}>
                  Insights
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Consultation CTA & Mobile Toggle */}
          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary btn-sm">
              Request a Consultation
            </Link>
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <Link href="/" className="brand-logo-wrap" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-emblem">
              <Building2 size={22} />
            </div>
            <div className="brand-text">
              <span className="brand-title" style={{ fontSize: '1rem' }}>LEAD CONSULTANCY</span>
              <span className="brand-subtitle">Valuation & Asset Advisory</span>
            </div>
          </Link>
          <button 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-menu-list">
          <li>
            <Link 
              href="/" 
              className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`mobile-menu-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <div 
              className="mobile-menu-link" 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{ cursor: 'pointer' }}
            >
              <span>Services</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileServicesOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease'
                }} 
              />
            </div>
            {mobileServicesOpen && (
              <div className="mobile-services-sub">
                <Link 
                  href="/services" 
                  className="mobile-sub-link"
                  style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Services Overview &rarr;
                </Link>
                {SERVICE_CATEGORIES.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="mobile-sub-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link 
              href="/industries" 
              className={`mobile-menu-link ${isActive('/industries') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
          </li>
          <li>
            <Link 
              href="/process" 
              className={`mobile-menu-link ${isActive('/process') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Process
            </Link>
          </li>
          <li>
            <Link 
              href="/faqs" 
              className={`mobile-menu-link ${isActive('/faqs') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link 
              href="/insights" 
              className={`mobile-menu-link ${isActive('/insights') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`mobile-menu-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <Link 
            href="/contact" 
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '16px' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Request a Consultation
          </Link>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            <p style={{ margin: '4px 0' }}>
              <strong>Direct Phone:</strong> <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}>{COMPANY_INFO.phonePrimary}</a>
            </p>
            <p style={{ margin: '4px 0' }}>
              <strong>Email:</strong> {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
