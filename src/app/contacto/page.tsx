'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const strategicSessionItems = [
  "Analizaremos tu situación actual",
  "Detectaremos oportunidades de mejora",
  "Evaluaremos cómo estructurar tu sistema de crecimiento",
  "Resolveremos tus dudas con total claridad",
];

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function ContactoPage() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        // Limpiamos contenido previo si lo hubiera
        calendlyRef.current.innerHTML = '';
        
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1&primary_color=3b82f6&text_color=ffffff&background_color=020817&hide_branding=1',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });

        // Forzamos un pequeño retraso para asegurar que el iframe empiece a renderizar
        const timer = setTimeout(() => {
          setIsLoaded(true);
          // Disparamos un evento de resize para que Calendly recalcule el layout
          window.dispatchEvent(new Event('resize'));
        }, 1500);

        return () => clearTimeout(timer);
      }
    };

    // Intentamos inicializar si el script ya está cargado (via layout)
    if (window.Calendly) {
      initCalendly();
    } else {
      // Si no, esperamos a que aparezca
      const interval = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-16 min-h-screen bg-[#020817]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-16 items-start lg:grid-cols-[1fr_1.1fr]">
          
          {/* Columna Izquierda - Estilo Nosotros */}
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

          {/* Columna Derecha - Calendly con Placeholder Blur Refinado */}
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-white min-h-[700px] md:min-h-[900px] relative"
              style={{ position: 'relative' }}
            >
              {/* Placeholder Mockup con Blur Refinado (Parecido al real) */}
              <div 
                className={cn(
                  "absolute inset-0 z-10 bg-white transition-opacity duration-700 pointer-events-none flex flex-col p-8 md:p-12",
                  isLoaded ? "opacity-0" : "opacity-100"
                )}
              >
                {/* Avatar superior */}
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-8 blur-[2px]" />
                
                {/* Líneas de texto */}
                <div className="w-48 h-6 bg-gray-100 mx-auto mb-4 rounded-full blur-[2px]" />
                <div className="w-32 h-4 bg-gray-50 mx-auto mb-12 rounded-full blur-[2px]" />
                
                {/* Rejilla de días (7 columnas) */}
                <div className="grid grid-cols-7 gap-4 mb-8 max-w-xs mx-auto">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-50/80 rounded-full blur-[4px]" />
                  ))}
                </div>
                
                {/* Bloque inferior */}
                <div className="w-full h-32 bg-gray-50 rounded-xl mt-auto blur-[5px]" />
              </div>

              {/* Contenedor Real del Widget */}
              <div 
                ref={calendlyRef}
                className={cn(
                  "w-full h-[700px] md:h-[1015px] transition-opacity duration-500",
                  isLoaded ? "opacity-100" : "opacity-0"
                )}
                id="calendly-container"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
