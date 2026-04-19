
import Link from 'next/link';
import { Mail, Instagram, Facebook, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 mb-10">
        
        {/* Left Side: Brand & Description */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter">
              <span className="text-foreground">Allen</span><span className="text-primary">Max</span>
            </span>
          </Link>
          
          <p className="text-foreground/50 max-w-sm text-base font-medium leading-relaxed">
            Diseñamos la arquitectura de tu crecimiento mediante sistemas inteligentes y estrategia digital de alto impacto.
          </p>
          
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center border rounded-full text-foreground/40 hover:text-primary hover:border-primary transition-all">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center border rounded-full text-foreground/40 hover:text-primary hover:border-primary transition-all">
              <Facebook size={14} />
            </a>
          </div>
        </div>
        
        {/* Right Side: Contact Info */}
        <div className="lg:pl-20 space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Contacto</h4>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30 px-2">Email</p>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-primary" />
                <a href="mailto:agency@allenmax.com" className="text-base font-bold hover:text-primary transition-colors">agency@allenmax.com</a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30 px-2">Teléfono</p>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-primary" />
                <a href="tel:+34654487378" className="text-base font-bold hover:text-primary transition-colors">+34 654 48 73 78</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30">
          © {new Date().getFullYear()} ALLENMAX. TODOS LOS DERECHOS RESERVADOS.
        </p>
        
        <div className="flex gap-6">
          <Link href="#" className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors">Privacidad</Link>
          <Link href="#" className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
