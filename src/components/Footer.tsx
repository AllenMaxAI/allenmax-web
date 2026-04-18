import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">AllenMax</span>
          </Link>
          <p className="text-foreground/60 max-w-xs leading-relaxed">
            Liderando la revolución de la inteligencia artificial en Alicante. Transformamos negocios tradicionales en empresas del futuro.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link href="#nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
            <li><Link href="#blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Recursos</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="#herramientas" className="hover:text-primary transition-colors">Herramientas</Link></li>
            <li><Link href="#proceso" className="hover:text-primary transition-colors">Metodología</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Soporte</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-sm text-foreground/40">
        © {new Date().getFullYear()} AllenMax. Todos los derechos reservados.
      </div>
    </footer>
  );
}
