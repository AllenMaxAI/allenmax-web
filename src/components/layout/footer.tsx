'use client';

import { Logo } from '@/components/logo';
import { Github, Linkedin, Twitter, Mail, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: <Twitter className="h-4 w-4" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="h-4 w-4" />, href: '#', label: 'LinkedIn' },
  { icon: <Github className="h-4 w-4" />, href: '#', label: 'GitHub' },
];

const footerLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
];

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#020817] pt-16 pb-8 overflow-hidden">
      {/* Elemento decorativo sutil de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Columna Marca: 5/12 */}
          <div className="lg:col-span-5 space-y-6">
            <Logo className="text-2xl font-extrabold tracking-tight" />
            <p className="text-base text-muted-foreground/70 leading-relaxed max-w-md">
              Diseñamos la arquitectura de tu crecimiento mediante sistemas inteligentes y estrategia digital de alto impacto.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-white/5 bg-white/[0.02] text-muted-foreground/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna Enlaces: 3/12 */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground/60 hover:text-primary transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Contacto: 4/12 */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">Hablemos</h4>
            <div className="space-y-4">
              <a 
                href="mailto:agency@allenmax.com" 
                className="flex flex-col group"
              >
                <span className="text-xs text-muted-foreground/40 font-bold uppercase tracking-tighter mb-1">Email</span>
                <span className="text-sm text-white/80 group-hover:text-primary transition-colors">agency@allenmax.com</span>
              </a>
              <a 
                href="tel:+34654487378" 
                className="flex flex-col group"
              >
                <span className="text-xs text-muted-foreground/40 font-bold uppercase tracking-tighter mb-1">Teléfono</span>
                <span className="text-sm text-white/80 group-hover:text-primary transition-colors">+34 654 48 73 78</span>
              </a>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-xs font-medium text-muted-foreground/30 uppercase tracking-widest">
            &copy; {currentYear} AllenMax. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-[10px] md:text-xs font-bold text-muted-foreground/20 uppercase tracking-widest">
            <Link href="#" className="hover:text-muted-foreground/50 transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-muted-foreground/50 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
