import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { SERVICE_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Business & Financial Valuation Services | Lead Consultancy Ethiopia',
  description: 'Enterprise valuation, DCF modeling, goodwill impairment testing, and portfolio valuation for corporations, private equity, and institutional investors in Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/services/business-and-financial-valuation'
  }
};

export default function BusinessFinancialValuationPage() {
  const service = SERVICE_CATEGORIES.find((s) => s.slug === 'business-and-financial-valuation');
  if (!service) return notFound();

  return (
    <ServiceDetailLayout 
      service={service} 
      disclaimerText="Business valuation models apply established financial methodologies including Discounted Cash Flow (DCF), market capitalisation multiples, and asset-based approaches. Valuation outputs reflect economic conditions, audited financial disclosures, and management forecasts existing at the valuation date."
    />
  );
}
