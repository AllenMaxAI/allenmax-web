
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'CRM', href: '/crm' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[top,padding]",
        scrolled ? "top-0 px-0" : "top-6 px-6"
      )}
    >
      <div 
        className={cn(
          "mx-auto transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/95 backdrop-blur-md border border-white/50 will-change-[width,border-radius,padding,box-shadow]",
          scrolled 
            ? "w-full max-w-full rounded-[0px] px-12 py-4 shadow-md border-b-gray-100" 
            : "max-w-7xl rounded-[48px] px-8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-primary">Allen</span><span className="text-blue-900">Max</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center bg-gray-50/80 rounded-full px-6 py-2 border border-gray-100">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold transition-colors duration-300",
                      pathname === link.href ? "text-primary" : "text-gray-500 hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <Button 
              variant="default" 
              className="rounded-full px-8 py-6 font-bold bg-primary hover:bg-primary/90 transition-all duration-500 transform hover:scale-105 shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/contacto">
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
