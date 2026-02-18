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
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-x-20 gap-y-12 items-start">
          
          {/* Bloque Marca */}
          <div className="flex flex-col gap-6 items-start">
            <Logo className="text-3xl" />
            <p className="text-base text-muted-foreground/80 leading-relaxed max-w-[360px]">
              Inteligencia Artificial y Marketing Digital para empresas que buscan crecer.
            </p>
          </div>

          {/* Bloque Contacto */}
          <div className="flex flex-col gap-6 min-w-[240px]">
            <h4 className="text-xl font-bold text-foreground">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-4 text-muted-foreground group">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <a 
                  href="mailto:agency@allenmax.com" 
                  className="font-medium hover:text-primary transition-colors"
                >
                  agency@allenmax.com
                </a>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground group">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <a 
                  href="tel:+34654487378" 
                  className="font-medium hover:text-primary transition-colors"
                >
                  654 48 73 78
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea Divisoria Sutil */}
        <div className="mt-12 mb-8 h-px w-full bg-white/5" />

        {/* Barra Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground/50">
          <p className="font-medium">
            &copy; {currentYear} AllenMax. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 items-center">
            {socialLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="hover:text-primary transition-colors"
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
