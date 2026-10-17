import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { SERVICE_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Asset, Plant & Equipment Valuation Services | Lead Consultancy Ethiopia',
  description: 'Physical inspection and valuation of plant machinery, manufacturing lines, commercial equipment fleets, inventory audits, and depreciation analysis across Ethiopia.',
  alternates: {
    canonical: 'https://www.leadpvet.com/services/asset-and-equipment-valuation'
  }
};

export default function AssetEquipmentValuationPage() {
  const service = SERVICE_CATEGORIES.find((s) => s.slug === 'asset-and-equipment-valuation');
  if (!service) return notFound();

  return (
    <ServiceDetailLayout 
      service={service} 
      disclaimerText="Plant, machinery, and equipment valuations are conducted through physical site inspection, serial verification, assessment of operational condition, functional obsolescence review, and local replacement cost indexing."
    />
  );
}
