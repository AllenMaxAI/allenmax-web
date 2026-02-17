import { Logo } from '@/components/logo';
import { Github, Linkedin, Twitter } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 items-start">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Inteligencia Artificial y Marketing Digital para empresas que buscan crecer.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 gap-8">
             <div>
              <h4 className="font-semibold mb-3">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-primary">Inicio</Link></li>
                <li><Link href="/servicios" className="text-muted-foreground hover:text-primary">Servicios</Link></li>
                <li><Link href="/servicios/asesor-ia" className="text-muted-foreground hover:text-primary">Asesor IA</Link></li>
                <li><Link href="/contacto" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-3">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/servicios/ia" className="text-muted-foreground hover:text-primary">Inteligencia Artificial</Link></li>
                <li><Link href="/servicios/marketing-digital" className="text-muted-foreground hover:text-primary">Marketing Digital</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Synapse Growth. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-primary transition-colors">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
