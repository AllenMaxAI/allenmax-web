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
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Bloque Marca */}
          <div className="flex flex-col gap-4 items-start max-w-sm">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Inteligencia Artificial y Marketing Digital para empresas que buscan crecer.
            </p>
          </div>

          {/* Bloque Contacto */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:agency@allenmax.com" 
                  className="hover:text-primary transition-colors"
                >
                  agency@allenmax.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+34654487378" 
                  className="hover:text-primary transition-colors"
                >
                  654 48 73 78
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground/60">
          <p>&copy; {currentYear} AllenMax. Todos los derechos reservados.</p>
          <div className="flex gap-5 mt-4 md:mt-0">
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
