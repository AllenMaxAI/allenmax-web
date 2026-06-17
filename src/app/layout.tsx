
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';
import { CalendlyPersistent } from '@/components/CalendlyPersistent';
import Script from 'next/script';

import { CookieBanner } from '@/components/CookieBanner';

const siteUrl = 'https://allenmax.com';
const siteDescription = 'AllenMax automatiza llamadas, citas, captación y gestión de clientes con agentes de voz, chatbots, CRM e integraciones a medida para negocios en Málaga y toda España.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'AllenMax',
      url: siteUrl,
      areaServed: 'España',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Málaga',
        addressCountry: 'ES',
      },
      knowsAbout: [
        'Automatización con IA',
        'Agentes de voz con IA',
        'Chatbots con IA',
        'CRM para negocios',
        'Automatización con n8n',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'AllenMax',
      description: siteDescription,
      inLanguage: 'es-ES',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Automatización con IA para negocios',
      serviceType: 'Automatización con IA',
      provider: {
        '@id': `${siteUrl}/#organization`,
      },
      areaServed: 'España',
      description: siteDescription,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AllenMax - Automatización con IA en Málaga',
    template: '%s | AllenMax',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'AllenMax',
    title: 'AllenMax - Automatización con IA en Málaga',
    description: siteDescription,
    locale: 'es_ES',
    images: [
      {
        url: '/media/crm-final.png',
        width: 1200,
        height: 630,
        alt: 'AllenMax - Automatización con IA en Málaga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllenMax - Automatización con IA en Málaga',
    description: siteDescription,
    images: ['/media/crm-final.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background selection:bg-primary/20 flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <CalendlyPersistent />
        <CookieBanner />
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
