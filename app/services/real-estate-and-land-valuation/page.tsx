import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { SERVICE_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Real Estate & Land Valuation Services in Ethiopia | Lead Consultancy',
  description: 'Independent residential, commercial, industrial, and agricultural property valuation in Addis Ababa and across Ethiopia. Defensible appraisals supporting credit, investment, and disposal decisions.',
  alternates: {
    canonical: 'https://www.leadpvet.com/services/real-estate-and-land-valuation'
  }
};

export default function RealEstateValuationPage() {
  const service = SERVICE_CATEGORIES.find((s) => s.slug === 'real-estate-and-land-valuation');
  if (!service) return notFound();

  return (
    <ServiceDetailLayout 
      service={service} 
      disclaimerText="Property valuation reports are formulated to provide objective, evidence-based market assessments to support strategic asset decisions, credit risk underwriting, and legal compliance. Professional valuations represent independent expert appraisal opinions and do not constitute speculative guarantees of future sales proceeds."
    />
  );
}
