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
    // 1. Cargar el script de Calendly
    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      console.log('[Calendly Debug] Inyectando script externo...');
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Función agresiva para ELIMINAR el div de branding
    const removeBranding = () => {
      // Buscamos específicamente por data-id="branding"
      const brandingElements = document.querySelectorAll('[data-id="branding"]');
      
      if (brandingElements.length > 0) {
        console.log(`[Calendly Debug] ¡Encontrados ${brandingElements.length} elementos de branding! Eliminando...`);
        brandingElements.forEach(el => {
          el.remove();
        });
      }
    };

    // Ejecución inmediata
    removeBranding();

    // 3. Observador para detectar cuándo se inyecta el div en el DOM (es asíncrono)
    const observer = new MutationObserver((mutations) => {
      removeBranding();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // 4. Intervalo de respaldo por si el script de Calendly lo reinyecta tras interacciones
    const interval = setInterval(removeBranding, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-16 min-h-screen bg-[#020617]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-16 items-start lg:grid-cols-[1fr_1.1fr]">
          
          {/* Columna Izquierda - Estilo unificado con "Nosotros" */}
          <div className="max-w-4xl">
            <div className="space-y-2 mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
                Sesión Estratégica
              </span>
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1] text-white">
                  Hablemos de tu <br />
                  <span className="text-primary">crecimiento.</span>
                </h1>
                <div className="h-1.5 w-20 bg-primary rounded-full" />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-primary font-medium mb-16 leading-relaxed max-w-lg">
              Agenda una sesión estratégica para estructurar tu sistema de captación y escalado con un enfoque de alto rendimiento.
            </p>

            <div className="space-y-8 pt-4">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                En esta sesión estratégica:
              </h2>
              <ul className="space-y-5">
                {strategicSessionItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1.5" />
                    <span className="text-base font-medium text-white/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-white/10 my-10" />

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">
                Construyamos algo que tenga sentido a largo plazo
              </h3>

              <p className="text-base text-muted-foreground/60 leading-relaxed max-w-lg">
                Las decisiones estratégicas marcan la diferencia entre crecer
                de forma puntual y consolidar una posición competitiva real.
              </p>

              <div className="pt-4">
                <div className="border-l-2 border-primary pl-6 py-1">
                  <p className="text-base font-medium italic text-white/80">
                    Cuando estés listo para estructurar tu crecimiento con claridad,
                    el siguiente movimiento es simple.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Widget Calendly */}
          <div className="relative" ref={containerRef}>
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#020617] min-h-[700px]">
              <div className="relative w-full h-full">
                <div 
                  className="calendly-inline-widget w-full h-[700px] lg:h-[950px]"
                  data-url="https://calendly.com/agency-allenmax/reunion-allenmax?locale=es&hide_gdpr_banner=1&background_color=020617&text_color=ffffff&primary_color=3b82f6"
                  style={{ minWidth: '320px' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
