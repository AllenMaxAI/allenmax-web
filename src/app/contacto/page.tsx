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
    // Carga robusta del script de Calendly
    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Función para forzar el resize y ajuste de Calendly
    const handleCalendlyInit = () => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 1000);
    };

    script.addEventListener('load', handleCalendlyInit);

    // Observer para cambios de tamaño en el contenedor
    const resizeObserver = new ResizeObserver(() => {
      window.dispatchEvent(new Event('resize'));
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      script.removeEventListener('load', handleCalendlyInit);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-16 min-h-screen bg-[#020617]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-16 items-start lg:grid-cols-[1fr_1.1fr]">
          
          {/* Columna Izquierda - Calco de la imagen */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                Sesión Estratégica
              </span>
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] text-white">
                  Hablemos de tu <br />
                  <span className="text-primary">crecimiento.</span>
                </h1>
                <div className="h-1 w-24 bg-primary rounded-full" />
              </div>
            </div>

            <p className="text-lg md:text-xl text-primary font-medium leading-relaxed max-w-lg">
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

            {/* Separador sutil */}
            <div className="h-px w-full bg-white/10" />

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
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-transparent min-h-[700px]">
              <div 
                className="calendly-inline-widget w-full h-[700px] lg:h-[850px]"
                data-url="https://calendly.com/agency-allenmax/reunion-allenmax?locale=es&hide_gdpr_banner=1&background_color=020617&text_color=ffffff&primary_color=3b82f6"
                style={{ minWidth: '320px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
