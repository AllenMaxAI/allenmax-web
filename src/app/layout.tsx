
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';
import { CalendlyPersistent } from '@/components/CalendlyPersistent';
import Script from 'next/script';

import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'AllenMax - Automatización con IA en Alicante',
  description: 'Impulsa tu negocio con soluciones de automatización de inteligencia artificial líderes en el mercado.',
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
