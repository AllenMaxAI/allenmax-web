
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proceso', href: '#proceso' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Herramientas', href: '#herramientas' },
  ];

  return (
    <header
      className={cn(
        "fixed top-6 left-0 right-0 z-50 transition-all duration-300 px-6"
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-full px-8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 transition-all duration-500",
          scrolled ? "py-2 mt-[-8px]" : "py-3"
        )}
      >
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-blue-400">Intelite</span> <span className="text-blue-700">AI</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center bg-gray-50/80 rounded-full px-6 py-2.5">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
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
            className="rounded-full px-8 py-6 font-bold bg-[#007AFF] hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            Contactar
          </Button>
        </div>
      </div>
    </header>
  );
}
