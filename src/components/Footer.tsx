
import Link from 'next/link';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">AllenMax</span>
          </Link>
          <p className="text-foreground/60 max-w-xs leading-relaxed mb-6">
            Agencia líder en automatización con IA en Alicante. Especialistas en optimización operativa y servicios de alto valor.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-50 rounded-full hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-gray-50 rounded-full hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 bg-gray-50 rounded-full hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="mailto:hola@allenmax.ai" className="p-2 bg-gray-50 rounded-full hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Menú</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
            <li><Link href="/crm-dental" className="hover:text-primary transition-colors">CRM</Link></li>
            <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li><Link href="#" className="hover:text-primary transition-colors">Aviso Legal</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
        <p>© {new Date().getFullYear()} AllenMax Automation. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1">Hecho en Alicante</p>
      </div>
    </footer>
  );
}
