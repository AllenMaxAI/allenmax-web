'use client';

import { Logo } from '@/components/logo';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { icon: <Github className="h-5 w-5" />, href: '#' },
];

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Bloque Superior: Marca y Contacto */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-y-12 mb-16">
          
          {/* Lado Izquierdo: Marca */}
          <div className="flex flex-col gap-4 items-start max-w-sm">
            <Logo className="text-4xl font-extrabold tracking-tight" />
            <p className="text-sm text-muted-foreground/60 leading-relaxed">
              Inteligencia Artificial y Marketing Digital para<br className="hidden md:block" />
              empresas que buscan crecer.
            </p>
          </div>

          {/* Lado Derecho: Contacto */}
          <div className="flex flex-col gap-6 min-w-[240px]">
            <h4 className="text-xl font-bold text-foreground">Contacto</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-sm text-muted-foreground/80 group">
                <Mail className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <a 
                  href="mailto:agency@allenmax.com" 
                  className="hover:text-primary transition-colors font-medium"
                >
                  agency@allenmax.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground/80 group">
                <Phone className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <a 
                  href="tel:+34654487378" 
                  className="hover:text-primary transition-colors font-medium"
                >
                  654 48 73 78
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea Divisoria Interna */}
        <div className="h-px w-full bg-white/5 mb-8" />

        {/* Barra Inferior: Copyright y RRSS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-muted-foreground/40">
            &copy; {currentYear} AllenMax. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 items-center">
            {socialLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="text-muted-foreground/30 hover:text-primary transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
