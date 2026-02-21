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
        calendlyRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1&primary_color=3b82f6&text_color=ffffff&background_color=020817',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
        
        // Simulamos la detección de carga del iframe para suavizar la transición
        const timer = setTimeout(() => setIsLoaded(true), 1500);
        return () => clearTimeout(timer);
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      const timer = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(timer);
        }
      }, 500);
      return () => clearInterval(timer);
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            const branding = node.querySelector('[data-id="branding"]');
            if (branding) branding.remove();
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-16 min-h-screen bg-[#020817]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-16 items-start lg:grid-cols-[1fr_1.1fr]">
          
          {/* Columna Izquierda */}
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

          {/* Columna Derecha - Calendly con Placeholder Blur */}
          <div className="relative group">
            <div 
              className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-white min-h-[700px] md:min-h-[900px] relative"
              style={{ position: 'relative' }}
            >
              {/* Placeholder Mockup con Blur */}
              <div 
                className={cn(
                  "absolute inset-0 z-10 bg-white transition-opacity duration-700 pointer-events-none flex flex-col p-8 md:p-12",
                  isLoaded ? "opacity-0" : "opacity-100"
                )}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-8 blur-[2px]" />
                <div className="w-3/4 h-8 bg-gray-100 mx-auto mb-4 rounded blur-[2px]" />
                <div className="w-1/2 h-6 bg-gray-100 mx-auto mb-12 rounded blur-[2px]" />
                <div className="grid grid-cols-7 gap-4 mb-8">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-full blur-[3px]" />
                  ))}
                </div>
                <div className="w-full h-40 bg-gray-50 rounded-xl mt-auto blur-[4px]" />
                
                {/* Branding tapado preventivamente */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white z-20" />
              </div>

              {/* Contenedor Real */}
              <div 
                ref={calendlyRef}
                className={cn(
                  "w-full h-[1015px] transition-opacity duration-500",
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
