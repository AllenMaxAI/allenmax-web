
import Link from 'next/link';
import { Mail, Instagram, Facebook, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 mb-20">
        
        {/* Left Side: Brand & Description */}
        <div className="space-y-8">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold tracking-tighter">
              <span className="text-foreground">Allen</span><span className="text-primary">Max</span>
            </span>
          </Link>
          
          <p className="text-foreground/50 max-w-sm text-lg font-medium leading-relaxed">
            Diseñamos la arquitectura de tu crecimiento mediante sistemas inteligentes y estrategia digital de alto impacto.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full text-foreground/40 hover:text-primary hover:border-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full text-foreground/40 hover:text-primary hover:border-primary transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>
        
        {/* Right Side: Contact Info */}
        <div className="lg:pl-20 space-y-10">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Contacto</h4>
          
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30 px-8">Email</p>
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-primary" />
                <a href="mailto:agency@allenmax.com" className="text-lg font-bold hover:text-primary transition-colors">agency@allenmax.com</a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30 px-8">Teléfono</p>
              <div className="flex items-center gap-4">
                <Phone size={16} className="text-primary" />
                <a href="tel:+34654487378" className="text-lg font-bold hover:text-primary transition-colors">+34 654 48 73 78</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">
          © {new Date().getFullYear()} ALLENMAX. TODOS LOS DERECHOS RESERVADOS.
        </p>
        
        <div className="flex gap-8">
          <Link href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors">Privacidad</Link>
          <Link href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
