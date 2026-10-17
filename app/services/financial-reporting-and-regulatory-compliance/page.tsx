import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { SERVICE_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Financial Reporting & IFRS Valuation Compliance | Lead Consultancy Ethiopia',
  description: 'IFRS 13 fair value measurement, banking collateral revaluation, insurance asset valuation, and balance-sheet compliance services in Addis Ababa, Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/services/financial-reporting-and-regulatory-compliance'
  }
};

export default function FinancialReportingValuationPage() {
  const service = SERVICE_CATEGORIES.find((s) => s.slug === 'financial-reporting-and-regulatory-compliance');
  if (!service) return notFound();

  return (
    <ServiceDetailLayout 
      service={service} 
      disclaimerText="Valuation methodologies are structured to align with International Financial Reporting Standards (IFRS 13, IAS 16, IAS 40) and standard accounting frameworks. Lead Consultancy acts as an independent expert appraiser providing audit-ready valuation models; our services do not replace the statutory functions of registered external financial auditors."
    />
  );
}
