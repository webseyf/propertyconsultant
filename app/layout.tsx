import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { COMPANY_INFO } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leadpvet.com'),
  title: {
    default: 'Lead Property Valuation and Asset Management Consultancy PLC | Addis Ababa, Ethiopia',
    template: '%s | Lead Property Valuation Consultancy PLC'
  },
  description: 'Independent professional valuation consultancy in Addis Ababa, Ethiopia. Specializing in real estate, plant and machinery, business enterprise, IFRS financial reporting, and asset advisory.',
  keywords: [
    'Property Valuation Ethiopia',
    'Real Estate Valuation Addis Ababa',
    'Asset Management Consultancy Ethiopia',
    'Business Valuation Addis Ababa',
    'Plant and Machinery Valuation',
    'IFRS Fair Value Measurement Ethiopia',
    'Lead Property Valuation',
    'Engineer Hlina Legesse'
  ],
  authors: [{ name: 'Lead Property Valuation and Asset Management Consultancy PLC' }],
  creator: 'Lead Property Valuation and Asset Management Consultancy PLC',
  publisher: 'Lead Property Valuation and Asset Management Consultancy PLC',
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.leadpvet.com',
    siteName: 'Lead Property Valuation and Asset Management Consultancy PLC',
    title: 'Lead Property Valuation & Asset Management Consultancy PLC',
    description: 'Professional property, asset, and business valuation advisory services in Addis Ababa, Ethiopia. Supporting informed decisions across real estate, business, and financial assets.',
    images: [
      {
        url: '/images/hero-architecture.jpg',
        width: 1200,
        height: 630,
        alt: 'Lead Property Valuation & Asset Management Consultancy PLC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Property Valuation & Asset Management Consultancy PLC',
    description: 'Professional valuation and asset management advisory solutions in Addis Ababa, Ethiopia.',
    images: ['/images/hero-architecture.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.websiteUrl,
    logo: 'https://www.leadpvet.com/images/original/logo_original.png',
    image: 'https://www.leadpvet.com/images/hero-architecture.jpg',
    description: 'Professional property valuation and asset management consultancy in Addis Ababa, Ethiopia.',
    founder: {
      '@type': 'Person',
      name: COMPANY_INFO.generalManager,
      jobTitle: 'General Manager'
    },
    foundingDate: '2024-07',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lancha Area, Emmanuel Reformed Apostolic Church Building, House No. 942, 3rd Floor, Room 003',
      addressLocality: 'Addis Ababa',
      addressRegion: 'Addis Ababa',
      addressCountry: 'ET'
    },
    telephone: [COMPANY_INFO.phonePrimaryRaw, COMPANY_INFO.phoneSecondaryRaw],
    email: COMPANY_INFO.email,
    sameAs: [
      COMPANY_INFO.telegramUrl,
      COMPANY_INFO.facebookUrl,
      COMPANY_INFO.instagramUrl,
      COMPANY_INFO.youtubeUrl
    ],
    priceRange: 'Professional Advisory Scope-Based'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
