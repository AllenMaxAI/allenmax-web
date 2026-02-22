'use client';

import { Logo } from '@/components/logo';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: <Instagram className="h-4 w-4" />, href: 'https://www.instagram.com/allenmax.es/', label: 'Instagram' },
  { icon: <Facebook className="h-4 w-4" />, href: 'https://www.facebook.com/profile.php?id=61575519193800&locale=es_ES', label: 'Facebook' },
];

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado al portapapeles",
      description: `${label} copiado con éxito.`,
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#020817] pt-10 pb-6 overflow-hidden">
      {/* Elemento decorativo sutil de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
          
          {/* Columna Marca */}
          <div className="lg:col-span-8 space-y-6">
            <Logo className="text-2xl font-extrabold tracking-tight" />
            <p className="text-base text-muted-foreground/70 leading-relaxed max-w-md">
              Diseñamos la arquitectura de tu crecimiento mediante sistemas inteligentes y estrategia digital de alto impacto.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-white/5 bg-white/[0.02] text-muted-foreground/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna Contacto */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">Contacto</h4>
            <div className="space-y-6">
              <button 
                onClick={() => handleCopy('agency@allenmax.com', 'Email')}
                className="flex items-start gap-4 group text-left w-full focus:outline-none"
              >
                <div className="mt-1 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-widest mb-0.5">Email</span>
                  <span className="text-sm text-white/80 group-hover:text-primary transition-colors">agency@allenmax.com</span>
                </div>
              </button>
              <button 
                onClick={() => handleCopy('+34 654 48 73 78', 'Teléfono')}
                className="flex items-start gap-4 group text-left w-full focus:outline-none"
              >
                <div className="mt-1 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-widest mb-0.5">Teléfono</span>
                  <span className="text-sm text-white/80 group-hover:text-primary transition-colors">+34 654 48 73 78</span>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
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
