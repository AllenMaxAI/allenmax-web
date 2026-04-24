
import Link from 'next/link';
import { Mail, Instagram, Facebook, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-2 text-center md:text-left shrink-0">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tighter">
                <span className="text-slate-900">Allen</span><span className="text-primary tracking-tight">Max</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-xs text-[11px] font-medium leading-relaxed uppercase tracking-widest">
              Automatización e IA Empresarial
            </p>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <div className="flex flex-col items-start gap-2">
              <a href="mailto:hola@allenmax.com" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                <Mail size={16} strokeWidth={2.5} className="text-primary" /> hola@allenmax.com
              </a>
              <a href="tel:+34621048682" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                <Phone size={16} strokeWidth={2.5} className="text-primary" /> +34 621 04 86 82
              </a>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <div className="flex flex-col gap-3">
                <a href="#" className="text-slate-400 hover:text-primary transition-transform hover:scale-110"><Instagram size={18} strokeWidth={2.5} /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-transform hover:scale-110"><Facebook size={18} strokeWidth={2.5} /></a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
            © {new Date().getFullYear()} ALLENMAX. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">Privacidad</Link>
            <Link href="/cookies" className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">Cookies</Link>
            <Link href="/legal" className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
