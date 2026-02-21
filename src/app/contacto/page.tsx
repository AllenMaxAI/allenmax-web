'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const strategicSessionItems = [
  "Analizaremos tu situación actual",
  "Detectaremos oportunidades de mejora",
  "Evaluaremos cómo estructurar tu sistema de crecimiento",
  "Resolveremos tus dudas con total claridad",
];

export default function ContactoPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'calendly-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initCalendly = () => {
      if (containerRef.current && (window as any).Calendly) {
        const calendly = (window as any).Calendly;
        
        // Limpiar para evitar duplicados y errores
        containerRef.current.innerHTML = '';
        
        if (calendly.initInlineWidget) {
          calendly.initInlineWidget({
            url: "https://calendly.com/agency-allenmax/reunion-allenmax?locale=es&hide_gdpr_banner=1",
            parentElement: containerRef.current,
          });
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initCalendly;
      document.body.appendChild(script);
    } else {
      if ((window as any).Calendly) {
        initCalendly();
      } else {
        script.onload = initCalendly;
      }
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        .calendly-inline-widget, 
        .calendly-inline-widget iframe {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        .calendly-inline-widget::-webkit-scrollbar,
        .calendly-inline-widget iframe::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>

      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-20 items-start md:grid-cols-[1fr_1.2fr]">
            
            {/* Columna Izquierda */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Sesión Estratégica</span>
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1]">
                    Hablemos de tu <br />
                    <span className="text-primary">crecimiento.</span>
                  </h1>
                  <div className="h-1.5 w-20 bg-primary rounded-full" />
                </div>
                <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed pt-2">
                  Agenda una sesión estratégica para estructurar tu sistema de captación y escalado con un enfoque de alto rendimiento.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  En esta sesión estratégica:
                </h2>
                <ul className="space-y-5">
                  {strategicSessionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg font-medium text-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 border-t border-border pt-12">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Construyamos algo que tenga sentido a largo plazo
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Las decisiones estratégicas marcan la diferencia entre crecer
                  de forma puntual y consolidar una posición competitiva real.
                </p>

                <div className="pt-8">
                  <div className="border-l-4 border-primary pl-6 py-1">
                    <p className="text-lg font-medium italic text-foreground/80">
                      Cuando estés listo para estructurar tu crecimiento con claridad,
                      el siguiente movimiento es simple.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Calendly arriba del todo */}
            <div className="relative">
              <div
                ref={containerRef}
                className="calendly-inline-widget rounded-2xl overflow-hidden bg-white border border-border shadow-2xl"
                style={{
                  width: '100%',
                  height: '1100px',
                  minWidth: '320px',
                }}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
