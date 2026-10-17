import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { SERVICE_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Legal & Tax-Related Valuation Services | Lead Consultancy Ethiopia',
  description: 'Independent property and asset valuation for tax assessments, expropriation compensation, probate partition, and litigation expert witness support in Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/services/legal-tax-related-valuation'
  }
};

export default function LegalTaxValuationPage() {
  const service = SERVICE_CATEGORIES.find((s) => s.slug === 'legal-tax-related-valuation');
  if (!service) return notFound();

  return (
    <ServiceDetailLayout 
      service={service} 
      disclaimerText="Lead Consultancy provides independent property and asset valuation evidence for use in legal disputes, statutory tax filings, expropriation assessments, and probate matters. Our services provide technical appraisal opinions; they do not constitute formal legal representation, advocacy, or statutory legal/tax advisory counsel."
    />
  );
}
