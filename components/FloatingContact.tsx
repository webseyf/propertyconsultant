'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export default function FloatingContact() {
  return (
    <>
      {/* Desktop Floating Action Buttons (Lower Right) */}
      <aside 
        className="floating-actions-desktop" 
        aria-label="Direct Quick Contact Options"
      >
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          aria-label="Contact Lead Consultancy on WhatsApp"
          title="Chat directly on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp Us</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}
          className="floating-btn floating-call"
          aria-label="Call Lead Consultancy directly"
          title={`Call ${COMPANY_INFO.phonePrimary}`}
        >
          <Phone size={18} />
          <span>Call Valuation Team</span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Action Bar */}
      <nav 
        className="mobile-bottom-bar" 
        aria-label="Mobile Direct Quick Actions"
      >
        <div className="mobile-bottom-bar-grid">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn mobile-bar-btn-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}
            className="mobile-bar-btn mobile-bar-btn-call"
            aria-label={`Call ${COMPANY_INFO.phonePrimary}`}
          >
            <Phone size={18} />
            <span>Call Us</span>
          </a>
        </div>
      </nav>
    </>
  );
}
