'use client';

import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import Script from 'next/script';

const strategicSessionItems = [
  "Analizaremos tu situación actual",
  "Detectaremos oportunidades de mejora",
  "Evaluaremos cómo estructurar tu sistema de crecimiento",
  "Resolveremos tus dudas con total claridad",
];

export default function ContactoPage() {
  useEffect(() => {
    // Forzamos un resize cuando el widget se carga para evitar problemas de layout
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-16 min-h-screen bg-[#020817]">
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-16 items-start lg:grid-cols-[1fr_1.1fr]">
          
          {/* Columna Izquierda - Cabecera idéntica a Nosotros */}
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

          {/* Columna Derecha - Widget Calendly Optimizado */}
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#020817] min-h-[700px] md:min-h-[1100px]"
              style={{ position: 'relative' }}
            >
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1&primary_color=3b82f6&text_color=ffffff&background_color=020817"
                style={{ minWidth: '320px', height: '1100px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}