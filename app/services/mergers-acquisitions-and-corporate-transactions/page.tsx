import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { SERVICE_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'M&A Valuation & Corporate Transaction Advisory | Lead Consultancy Ethiopia',
  description: 'Transaction valuation, merger modeling, purchase price allocation (PPA), goodwill valuation, and distressed asset appraisals for corporate restructuring in Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/services/mergers-acquisitions-and-corporate-transactions'
  }
};

export default function MergersAcquisitionsValuationPage() {
  const service = SERVICE_CATEGORIES.find((s) => s.slug === 'mergers-acquisitions-and-corporate-transactions');
  if (!service) return notFound();

  return (
    <ServiceDetailLayout 
      service={service} 
      disclaimerText="M&A valuation analyses are prepared to assist transaction principals, corporate finance teams, and legal counsel in evaluating fair enterprise pricing and deal terms. Valuations are conducted on an objective, independent basis and do not constitute investment underwriting or solvency guarantees."
    />
  );
}
