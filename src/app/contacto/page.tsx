'use client';

import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const strategicSessionItems = [
  "Analizaremos tu situación actual",
  "Detectaremos oportunidades de mejora",
  "Evaluaremos cómo estructurar tu sistema de crecimiento",
  "Resolveremos tus dudas con total claridad",
];

export default function ContactoPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden text-slate-900 selection:bg-primary/10">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[1000px] bg-primary/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[60%] h-[800px] bg-blue-400/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="grid gap-12 lg:gap-24 items-start lg:grid-cols-12">
          
          {/* Columna Izquierda: Contenido Informativo */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-2">
            <div className={cn(
              "space-y-2 mb-12 transition-all duration-1000 ease-out",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
                Sesión Estratégica
              </span>
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1] text-foreground">
                  Hablemos de tu <br />
                  <span className="text-primary">crecimiento.</span>
                </h1>
                <div className="h-1.5 w-20 bg-primary rounded-full" />
              </div>
            </div>

            <p className={cn(
              "text-xl md:text-2xl text-primary font-medium mb-16 leading-relaxed max-w-lg transition-all duration-1000 delay-300 ease-out",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Agenda una sesión estratégica para estructurar tu sistema de captación y escalado con un enfoque de alto rendimiento.
            </p>

            <div className={cn(
              "space-y-8 pt-4 transition-all duration-1000 delay-500 ease-out",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                En esta sesión estratégica:
              </h2>
              <ul className="space-y-5">
                {strategicSessionItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1.5" />
                    <span className="text-base font-medium text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(
              "h-px w-full bg-border my-10 transition-opacity duration-1000 delay-700",
              isMounted ? "opacity-100" : "opacity-0"
            )} />

            <div className={cn(
              "space-y-6 transition-all duration-1000 delay-800 ease-out",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-foreground">
                Construyamos algo que tenga sentido a largo plazo
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                Las decisiones estratégicas marcan la diferencia entre crecer
                de forma puntual y consolidar una posición competitiva real.
              </p>
              <div className="pt-4">
                <div className="border-l-2 border-primary pl-6 py-1">
                  <p className="text-base font-medium italic text-foreground/80">
                    Cuando estés listo para estructurar tu crecimiento con claridad,
                    el siguiente movimiento es simple.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Hueco reservado para el widget persistente */}
          <div className="lg:col-span-6 xl:col-span-5 relative min-h-[1050px] pointer-events-none border-l border-foreground/5 hidden lg:block">
            {/* Este espacio se mantiene vacío porque el widget global se posiciona aquí mediante absolute en el layout */}
          </div>

        </div>
      </div>
    </div>
  );
}
