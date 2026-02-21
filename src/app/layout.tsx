import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'AllenMax | Marketing Digital & IA',
  description: 'Transformamos tu empresa con Inteligencia Artificial y Marketing Digital de alto impacto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-[#020817] font-body antialiased'
        )}
      >
        <div className="relative flex min-h-screen flex-col bg-[#020817]">
          <AppHeader />
          <main className="flex-1 bg-[#020817]">{children}</main>
          <AppFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}