
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

        // Esperamos un tiempo prudencial para asegurar que el renderizado interno de Calendly 
        // haya pasado la fase de los puntos de carga propios
        const timer = setTimeout(() => {
          setIsLoaded(true);
          window.dispatchEvent(new Event('resize'));
        }, 4000);

        return () => clearTimeout(timer);
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
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

          {/* Columna Derecha - Calendly con Skeleton Realista */}
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-white min-h-[700px] md:min-h-[900px] relative"
            >
              {/* Placeholder Mockup con Blur y Estructura Real */}
              <div 
                className={cn(
                  "absolute inset-0 z-20 bg-white transition-opacity duration-1000 pointer-events-none flex flex-col",
                  isLoaded ? "opacity-0" : "opacity-100"
                )}
              >
                {/* Puntos de carga centrados */}
                <div className="absolute inset-x-0 top-12 flex justify-center gap-1.5 z-30">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                </div>

                <div className="flex flex-col p-6 md:p-10 blur-[10px] opacity-40">
                  {/* Logo rectangular oscuro superior (Jake Allen Rosas PFP/Logo) */}
                  <div className="w-28 h-20 bg-[#020817] rounded-md mx-auto mb-10 flex items-center justify-center">
                    <div className="w-14 h-2 bg-white/10 rounded-full" />
                  </div>
                  
                  {/* Jake Allen Rosas Name Line */}
                  <div className="w-32 h-3 bg-gray-200 mx-auto mb-3 rounded-full" />
                  
                  {/* Título de la llamada */}
                  <div className="w-72 h-8 bg-gray-300 mx-auto mb-10 rounded-full" />
                  
                  {/* Detalles de la reunión (Duración, Ubicación) */}
                  <div className="space-y-4 mb-10 max-w-[280px] mx-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded-full" />
                      <div className="w-16 h-3 bg-gray-100 rounded-full" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded-full" />
                      <div className="w-48 h-3 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Bloques de texto informativo central */}
                  <div className="space-y-3 mb-12 text-center">
                    <div className="w-64 h-3 bg-gray-100 mx-auto rounded-full" />
                    <div className="w-72 h-3 bg-gray-100 mx-auto rounded-full" />
                    <div className="w-56 h-3 bg-gray-100 mx-auto rounded-full" />
                  </div>
                  
                  {/* Divisor horizontal */}
                  <div className="h-px bg-gray-100 w-full mb-10" />

                  {/* SECCIÓN CALENDARIO (PARTE INFERIOR) */}
                  {/* "Seleccione un día" */}
                  <div className="w-40 h-5 bg-gray-200 mx-auto mb-10 rounded-full" />
                  
                  {/* Selector de Mes y Navegación */}
                  <div className="flex justify-center items-center gap-8 mb-10">
                    <div className="w-4 h-4 bg-gray-100 rounded-full" />
                    <div className="w-32 h-4 bg-gray-200 rounded-full" />
                    <div className="w-4 h-4 bg-gray-100 rounded-full" />
                  </div>

                  {/* Rejilla de días (7 columnas x 5 filas aprox) */}
                  <div className="grid grid-cols-7 gap-x-6 gap-y-8 max-w-[320px] mx-auto mb-12">
                    {Array.from({ length: 31 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/50 rounded-full" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Bloque de zona horaria inferior */}
                  <div className="w-48 h-4 bg-gray-100 mx-auto rounded-full mt-4" />
                </div>
              </div>

              {/* Contenedor Real del Widget */}
              <div 
                ref={calendlyRef}
                className={cn(
                  "w-full h-[700px] md:h-[1015px] transition-opacity duration-700",
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
