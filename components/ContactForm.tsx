'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '@/lib/data';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: 'Real Estate and Land Valuation',
    message: '',
    websiteHoneypot: '' // Anti-spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMsg, setServerMsg] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number so our team can reach you.';
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (e.g., +251 91 300 6754).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your valuation or advisory requirement.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters describing your asset.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Check honeypot
    if (formData.websiteHoneypot) {
      // Quietly reject bot
      setStatus('success');
      return;
    }

    setStatus('loading');
    setServerMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          serviceRequired: formData.serviceRequired,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setServerMsg(data.message || 'Thank you! Your enquiry has been recorded. Our advisory team will contact you shortly.');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          serviceRequired: 'Real Estate and Land Valuation',
          message: '',
          websiteHoneypot: ''
        });
      } else {
        setStatus('error');
        setServerMsg(data.message || 'We could not submit your enquiry at this moment. Please call or WhatsApp us directly.');
      }
    } catch {
      setStatus('error');
      setServerMsg('A network error occurred while sending your request. Please call or reach us directly on WhatsApp.');
    }
  };

  return (
    <div className="contact-form-wrap" id="consultation-form">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.45rem', marginBottom: '8px', color: 'var(--color-primary-navy)' }}>
          Request a Confidential Consultation
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
          Submit your asset or valuation details below. Our licensed valuation consultants in Addis Ababa will review and follow up with you directly.
        </p>
      </div>

      {status === 'success' && (
        <div className="form-alert form-alert-success" role="alert">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Enquiry Received Successfully!</strong>
              <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>
                {serverMsg}
              </p>
              <div style={{ marginTop: '12px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-accent">
                  Chat on WhatsApp
                </a>
                <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} className="btn btn-sm btn-secondary">
                  Call {COMPANY_INFO.phonePrimary}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="form-alert form-alert-error" role="alert">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Submission Notice</strong>
              <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>
                {serverMsg}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Anti-spam honeypot */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <input
            type="text"
            name="websiteHoneypot"
            tabIndex={-1}
            value={formData.websiteHoneypot}
            onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span style={{ color: 'var(--color-error)' }}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            placeholder="e.g. Ato Yohannes Kebede / Mrs. Tigist Alemu"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            required
          />
          {errors.fullName && <div id="fullName-error" className="form-error">{errors.fullName}</div>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number <span style={{ color: 'var(--color-error)' }}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="+251 91 300 6754"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              required
            />
            {errors.phone && <div id="phone-error" className="form-error">{errors.phone}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="client@organization.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <div id="email-error" className="form-error">{errors.email}</div>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="serviceRequired" className="form-label">
            Service Required <span style={{ color: 'var(--color-error)' }}>*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            className="form-select"
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
          >
            {SERVICE_CATEGORIES.map((srv) => (
              <option key={srv.id} value={srv.title}>
                {srv.title}
              </option>
            ))}
            <option value="General Asset Advisory & Consultation">General Asset Advisory & Consultation</option>
            <option value="Multiple Asset Portfolio Valuation">Multiple Asset Portfolio Valuation</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Asset Description & Requirements <span style={{ color: 'var(--color-error)' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Please indicate property/asset type, approximate location in Ethiopia (e.g. Addis Ababa, Bole sub-city, regional area), purpose of valuation (e.g. bank loan, accounting, tax, sale), and expected timeframe."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && <div id="message-error" className="form-error">{errors.message}</div>}
        </div>

        <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
          By submitting this form, you acknowledge that your contact details will be handled in accordance with our{' '}
          <Link href="/privacy-policy" style={{ textDecoration: 'underline', color: 'var(--color-primary-navy)' }}>
            Privacy Policy
          </Link>. We never share confidential asset information.
        </p>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '14px 24px', fontSize: '1rem' }}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Transmitting Consultation Details...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Submit Valuation Request</span>
            </>
          )}
        </button>

        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
          <span>Need immediate assistance?</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href={`tel:${COMPANY_INFO.phonePrimaryRaw}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-primary-navy)', fontWeight: 600 }}>
              <Phone size={13} /> {COMPANY_INFO.phonePrimary}
            </a>
            <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#16A34A', fontWeight: 600 }}>
              <MessageSquare size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
